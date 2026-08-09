---
title: Deferred Listener Candidates Must Observe Shutdown Cancellation
date: 2026-08-09
category: docs/solutions/runtime-errors/
module: telepathy-core session lifecycle
problem_type: runtime_error
component: service_object
severity: high
symptoms:
  - Manager shutdown could block while a deferred listener candidate waited for a bidirectional stream before bootstrap.
root_cause: async_timing
resolution_type: code_fix
related_components:
  - session-collision-registry
  - session-manager
  - call-slot
tags: [session-collision, deferred-listener, cancellation, shutdown, accept-bi]
---

# Deferred Listener Candidates Must Observe Shutdown Cancellation

## Problem

During a direct-session collision, a listener-side replacement can remain a deferred candidate behind a live predecessor. If shutdown cancelled that candidate before its peer opened a bidirectional stream, the candidate could remain blocked in stream acceptance and prevent shutdown from completing.

## Symptoms

- The deferred listener reached `session_collision_deferred_candidate` and then waited for its peer to open a stream.
- Shutdown cancelled pending candidates but could not finish while that listener task was still waiting.
- The regression timed out its bounded target shutdown before the fix. (session history)

## What Didn't Work

Waiting directly on `accept_bi()` gave cancellation no way to wake the deferred listener. Closing the connection only after acceptance returned could not unblock a peer deliberately held before stream bootstrap.

An uncoordinated collision test was also insufficient: remote bootstrap could win the race before shutdown cancellation. The regression instead parks the remote side at a deterministic synchronization point. (session history)

## Solution

The deferred listener now races candidate cancellation and connection closure against stream acceptance in [`core.rs`](../../../rust/telepathy-core/src/internal/core.rs):

```rust
select! {
    _ = candidate.cancelled() => {
        connection.close(VarInt::from_u32(0), b"session candidate canceled");
        return Ok(());
    }
    _ = connection.closed() => return Ok(()),
    result = connection.accept_bi() => result,
}
```

The integration regression [`shutdown_cancels_deferred_listener_candidate_before_stream_bootstrap`](../../../rust/telepathy-core/tests/core_integration_test/session_lifecycle.rs) locks the remote session map before releasing its connecting callback. It waits for deferred-candidate registration, bounds target shutdown, releases the lock before cleanup, then verifies both clients shut down and the target call slot is idle.

## Why This Works

Candidate cancellation is now polled while the listener waits for an incoming stream. Reset or shutdown can therefore resolve the candidate even when its peer never bootstraps transport. The connection is closed and the task returns, releasing deferred work before manager teardown waits on it.

This fixes only the collision-deferred listener path. Normal session bootstrap remains separate because it has no deferred-candidate cancellation lease.

## Prevention

- Every deferred operation that waits on network I/O during teardown must race its cancellation token and connection closure rather than await I/O directly.
- Build concurrency regressions around an explicit barrier proving the target state, then bound the operation under test.
- Release test gates before cleanup and before asserting a bounded failure so a pre-fix regression cannot strand its own teardown. (session history)
- Use authoritative state or a targeted log barrier for race setup; do not rely on scheduler sleeps.

## Regression Coverage

- Focused regression passed after the fix. (session history)
- Core integration suite: 109 passed, 2 skipped.
- Lifecycle stress suite: 10 of 10 iterations passed.
- Non-integration workspace suite: 262 passed, 2 skipped.
- `cargo fmt`, `cargo clippy`, and `git diff --check` passed. (session history)

## Related Issues

- [Deferred Session Candidate Resolution Preserves Pending Calls](deferred-session-candidate-resolution-2026-08-01.md) covers terminal-call ownership across candidate replacement.
- [Race Tests Must Poll the Authoritative State, Not Its Observable Proxy](../conventions/race-test-assertion-proxies-2026-08-05.md) explains the log barrier used by this regression.
- [Race-Free Test Synchronization Probes Replace Sleep-Based Polling](../conventions/race-free-test-synchronization-probes-2026-07-28.md) covers the broader synchronization convention.
