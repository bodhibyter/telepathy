let wasm_bindgen = (function(exports) {
    let script_src;
    if (typeof document !== 'undefined' && document.currentScript !== null) {
        script_src = new URL(document.currentScript.src, location.href).toString();
    }

    class IntoUnderlyingByteSource {
        __destroy_into_raw() {
            const ptr = this.__wbg_ptr;
            this.__wbg_ptr = 0;
            IntoUnderlyingByteSourceFinalization.unregister(this);
            return ptr;
        }
        free() {
            const ptr = this.__destroy_into_raw();
            wasm.__wbg_intounderlyingbytesource_free(ptr, 0);
        }
        /**
         * @returns {number}
         */
        get autoAllocateChunkSize() {
            const ret = wasm.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr);
            return ret >>> 0;
        }
        cancel() {
            const ptr = this.__destroy_into_raw();
            wasm.intounderlyingbytesource_cancel(ptr);
        }
        /**
         * @param {ReadableByteStreamController} controller
         * @returns {Promise<any>}
         */
        pull(controller) {
            const ret = wasm.intounderlyingbytesource_pull(this.__wbg_ptr, controller);
            return ret;
        }
        /**
         * @param {ReadableByteStreamController} controller
         */
        start(controller) {
            wasm.intounderlyingbytesource_start(this.__wbg_ptr, controller);
        }
        /**
         * @returns {ReadableStreamType}
         */
        get type() {
            const ret = wasm.intounderlyingbytesource_type(this.__wbg_ptr);
            return __wbindgen_enum_ReadableStreamType[ret];
        }
    }
    if (Symbol.dispose) IntoUnderlyingByteSource.prototype[Symbol.dispose] = IntoUnderlyingByteSource.prototype.free;
    exports.IntoUnderlyingByteSource = IntoUnderlyingByteSource;

    class IntoUnderlyingSink {
        __destroy_into_raw() {
            const ptr = this.__wbg_ptr;
            this.__wbg_ptr = 0;
            IntoUnderlyingSinkFinalization.unregister(this);
            return ptr;
        }
        free() {
            const ptr = this.__destroy_into_raw();
            wasm.__wbg_intounderlyingsink_free(ptr, 0);
        }
        /**
         * @param {any} reason
         * @returns {Promise<any>}
         */
        abort(reason) {
            const ptr = this.__destroy_into_raw();
            const ret = wasm.intounderlyingsink_abort(ptr, reason);
            return ret;
        }
        /**
         * @returns {Promise<any>}
         */
        close() {
            const ptr = this.__destroy_into_raw();
            const ret = wasm.intounderlyingsink_close(ptr);
            return ret;
        }
        /**
         * @param {any} chunk
         * @returns {Promise<any>}
         */
        write(chunk) {
            const ret = wasm.intounderlyingsink_write(this.__wbg_ptr, chunk);
            return ret;
        }
    }
    if (Symbol.dispose) IntoUnderlyingSink.prototype[Symbol.dispose] = IntoUnderlyingSink.prototype.free;
    exports.IntoUnderlyingSink = IntoUnderlyingSink;

    class IntoUnderlyingSource {
        __destroy_into_raw() {
            const ptr = this.__wbg_ptr;
            this.__wbg_ptr = 0;
            IntoUnderlyingSourceFinalization.unregister(this);
            return ptr;
        }
        free() {
            const ptr = this.__destroy_into_raw();
            wasm.__wbg_intounderlyingsource_free(ptr, 0);
        }
        cancel() {
            const ptr = this.__destroy_into_raw();
            wasm.intounderlyingsource_cancel(ptr);
        }
        /**
         * @param {ReadableStreamDefaultController} controller
         * @returns {Promise<any>}
         */
        pull(controller) {
            const ret = wasm.intounderlyingsource_pull(this.__wbg_ptr, controller);
            return ret;
        }
    }
    if (Symbol.dispose) IntoUnderlyingSource.prototype[Symbol.dispose] = IntoUnderlyingSource.prototype.free;
    exports.IntoUnderlyingSource = IntoUnderlyingSource;

    /**
     * Format that each sample has. Usually, this corresponds to the sampling
     * depth of the audio source. For example, 16 bit quantized samples can be
     * encoded in `i16` or `u16`. Note that the quantized sampling depth is not
     * directly visible for formats where [`is_float`] is true.
     *
     * Also note that the backend must support the encoding of the quantized
     * samples in the given format, as there is no generic transformation from one
     * format into the other done inside the frontend-library code. You can query
     * the supported formats by using [`supported_input_configs`].
     *
     * A good rule of thumb is to use [`SampleFormat::I16`] as this covers typical
     * music (WAV, MP3) as well as typical audio input devices on most platforms,
     *
     * [`is_float`]: SampleFormat::is_float
     * [`supported_input_configs`]: crate::traits::DeviceTrait::supported_input_configs
     * @enum {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14}
     */
    const SampleFormat = Object.freeze({
        /**
         * `i8` with a valid range of `i8::MIN..=i8::MAX` with `0` being the origin.
         */
        I8: 0, "0": "I8",
        /**
         * `i16` with a valid range of `i16::MIN..=i16::MAX` with `0` being the origin.
         */
        I16: 1, "1": "I16",
        /**
         * `I24` with a valid range of `-(1 << 23)..=((1 << 23) - 1)` with `0` being the origin.
         *
         * This format uses 4 bytes of storage but only 24 bits are significant.
         */
        I24: 2, "2": "I24",
        /**
         * `i32` with a valid range of `i32::MIN..=i32::MAX` with `0` being the origin.
         */
        I32: 3, "3": "I32",
        /**
         * `i64` with a valid range of `i64::MIN..=i64::MAX` with `0` being the origin.
         */
        I64: 4, "4": "I64",
        /**
         * `u8` with a valid range of `u8::MIN..=u8::MAX` with `1 << 7 == 128` being the origin.
         */
        U8: 5, "5": "U8",
        /**
         * `u16` with a valid range of `u16::MIN..=u16::MAX` with `1 << 15 == 32768` being the origin.
         */
        U16: 6, "6": "U16",
        /**
         * `U24` with a valid range of `0..=((1 << 24) - 1)` with `1 << 23 == 8388608` being the origin.
         *
         * This format uses 4 bytes of storage but only 24 bits are significant.
         */
        U24: 7, "7": "U24",
        /**
         * `u32` with a valid range of `u32::MIN..=u32::MAX` with `1 << 31` being the origin.
         */
        U32: 8, "8": "U32",
        /**
         * `U48` with a valid range of '0..(1 << 48)' with `1 << 47` being the origin
         * `u64` with a valid range of `u64::MIN..=u64::MAX` with `1 << 63` being the origin.
         */
        U64: 9, "9": "U64",
        /**
         * `f32` with a valid range of `-1.0..=1.0` with `0.0` being the origin.
         */
        F32: 10, "10": "F32",
        /**
         * `f64` with a valid range of `-1.0..=1.0` with `0.0` being the origin.
         */
        F64: 11, "11": "F64",
        /**
         * DSD 1-bit stream in u8 container (8 bits = 8 DSD samples) with 0x69 being the silence byte pattern.
         */
        DsdU8: 12, "12": "DsdU8",
        /**
         * DSD 1-bit stream in u16 container (16 bits = 16 DSD samples) with 0x69 being the silence byte pattern.
         */
        DsdU16: 13, "13": "DsdU16",
        /**
         * DSD 1-bit stream in u32 container (32 bits = 32 DSD samples) with 0x69 being the silence byte pattern.
         */
        DsdU32: 14, "14": "DsdU32",
    });
    exports.SampleFormat = SampleFormat;

    /**
     * The set of parameters used to describe how to open a stream.
     *
     * The sample format is omitted in favour of using a sample type.
     *
     * See also [`BufferSize`] for details on buffer size behavior and latency considerations.
     */
    class StreamConfig {
        __destroy_into_raw() {
            const ptr = this.__wbg_ptr;
            this.__wbg_ptr = 0;
            StreamConfigFinalization.unregister(this);
            return ptr;
        }
        free() {
            const ptr = this.__destroy_into_raw();
            wasm.__wbg_streamconfig_free(ptr, 0);
        }
        /**
         * @returns {number | undefined}
         */
        get buffer_size() {
            const ret = wasm.__wbg_get_streamconfig_buffer_size(this.__wbg_ptr);
            return ret === 0x100000001 ? undefined : ret;
        }
        /**
         * @returns {number}
         */
        get channels() {
            const ret = wasm.__wbg_get_streamconfig_channels(this.__wbg_ptr);
            return ret;
        }
        /**
         * @returns {number}
         */
        get sample_rate() {
            const ret = wasm.__wbg_get_streamconfig_sample_rate(this.__wbg_ptr);
            return ret >>> 0;
        }
        /**
         * @param {number | null} [arg0]
         */
        set buffer_size(arg0) {
            wasm.__wbg_set_streamconfig_buffer_size(this.__wbg_ptr, isLikeNone(arg0) ? 0x100000001 : (arg0) >>> 0);
        }
        /**
         * @param {number} arg0
         */
        set channels(arg0) {
            wasm.__wbg_set_streamconfig_channels(this.__wbg_ptr, arg0);
        }
        /**
         * @param {number} arg0
         */
        set sample_rate(arg0) {
            wasm.__wbg_set_streamconfig_sample_rate(this.__wbg_ptr, arg0);
        }
    }
    if (Symbol.dispose) StreamConfig.prototype[Symbol.dispose] = StreamConfig.prototype.free;
    exports.StreamConfig = StreamConfig;

    class WorkerPool {
        static __wrap(ptr) {
            ptr = ptr >>> 0;
            const obj = Object.create(WorkerPool.prototype);
            obj.__wbg_ptr = ptr;
            WorkerPoolFinalization.register(obj, obj.__wbg_ptr, obj);
            return obj;
        }
        __destroy_into_raw() {
            const ptr = this.__wbg_ptr;
            this.__wbg_ptr = 0;
            WorkerPoolFinalization.unregister(this);
            return ptr;
        }
        free() {
            const ptr = this.__destroy_into_raw();
            wasm.__wbg_workerpool_free(ptr, 0);
        }
        /**
         * @param {number | null} [initial]
         * @param {string | null} [script_src]
         * @param {string | null} [worker_js_preamble]
         * @param {string | null} [wasm_bindgen_name]
         * @returns {WorkerPool}
         */
        static new(initial, script_src, worker_js_preamble, wasm_bindgen_name) {
            var ptr0 = isLikeNone(script_src) ? 0 : passStringToWasm0(script_src, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            var ptr1 = isLikeNone(worker_js_preamble) ? 0 : passStringToWasm0(worker_js_preamble, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            var ptr2 = isLikeNone(wasm_bindgen_name) ? 0 : passStringToWasm0(wasm_bindgen_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len2 = WASM_VECTOR_LEN;
            const ret = wasm.workerpool_new(isLikeNone(initial) ? 0x100000001 : (initial) >>> 0, ptr0, len0, ptr1, len1, ptr2, len2);
            if (ret[2]) {
                throw takeFromExternrefTable0(ret[1]);
            }
            return WorkerPool.__wrap(ret[0]);
        }
        /**
         * Creates a new `WorkerPool` which immediately creates `initial` workers.
         *
         * The pool created here can be used over a long period of time, and it
         * will be initially primed with `initial` workers. Currently workers are
         * never released or gc'd until the whole pool is destroyed.
         *
         * # Errors
         *
         * Returns any error that may happen while a JS web worker is created and a
         * message is sent to it.
         * @param {number} initial
         * @param {string} script_src
         * @param {string} worker_js_preamble
         * @param {string} wasm_bindgen_name
         */
        constructor(initial, script_src, worker_js_preamble, wasm_bindgen_name) {
            const ptr0 = passStringToWasm0(script_src, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len0 = WASM_VECTOR_LEN;
            const ptr1 = passStringToWasm0(worker_js_preamble, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            const ptr2 = passStringToWasm0(wasm_bindgen_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len2 = WASM_VECTOR_LEN;
            const ret = wasm.workerpool_new_raw(initial, ptr0, len0, ptr1, len1, ptr2, len2);
            if (ret[2]) {
                throw takeFromExternrefTable0(ret[1]);
            }
            this.__wbg_ptr = ret[0] >>> 0;
            WorkerPoolFinalization.register(this, this.__wbg_ptr, this);
            return this;
        }
    }
    if (Symbol.dispose) WorkerPool.prototype[Symbol.dispose] = WorkerPool.prototype.free;
    exports.WorkerPool = WorkerPool;

    /**
     * @param {number} call_id
     * @param {any} ptr_
     * @param {number} rust_vec_len_
     * @param {number} data_len_
     */
    function frb_dart_fn_deliver_output(call_id, ptr_, rust_vec_len_, data_len_) {
        wasm.frb_dart_fn_deliver_output(call_id, ptr_, rust_vec_len_, data_len_);
    }
    exports.frb_dart_fn_deliver_output = frb_dart_fn_deliver_output;

    /**
     * # Safety
     *
     * This should never be called manually.
     * @param {any} handle
     * @param {any} dart_handler_port
     * @returns {number}
     */
    function frb_dart_opaque_dart2rust_encode(handle, dart_handler_port) {
        const ret = wasm.frb_dart_opaque_dart2rust_encode(handle, dart_handler_port);
        return ret >>> 0;
    }
    exports.frb_dart_opaque_dart2rust_encode = frb_dart_opaque_dart2rust_encode;

    /**
     * @param {number} ptr
     */
    function frb_dart_opaque_drop_thread_box_persistent_handle(ptr) {
        wasm.frb_dart_opaque_drop_thread_box_persistent_handle(ptr);
    }
    exports.frb_dart_opaque_drop_thread_box_persistent_handle = frb_dart_opaque_drop_thread_box_persistent_handle;

    /**
     * @param {number} ptr
     * @returns {any}
     */
    function frb_dart_opaque_rust2dart_decode(ptr) {
        const ret = wasm.frb_dart_opaque_rust2dart_decode(ptr);
        return ret;
    }
    exports.frb_dart_opaque_rust2dart_decode = frb_dart_opaque_rust2dart_decode;

    /**
     * @returns {number}
     */
    function frb_get_rust_content_hash() {
        const ret = wasm.frb_get_rust_content_hash();
        return ret;
    }
    exports.frb_get_rust_content_hash = frb_get_rust_content_hash;

    /**
     * @param {number} func_id
     * @param {any} port_
     * @param {any} ptr_
     * @param {number} rust_vec_len_
     * @param {number} data_len_
     */
    function frb_pde_ffi_dispatcher_primary(func_id, port_, ptr_, rust_vec_len_, data_len_) {
        wasm.frb_pde_ffi_dispatcher_primary(func_id, port_, ptr_, rust_vec_len_, data_len_);
    }
    exports.frb_pde_ffi_dispatcher_primary = frb_pde_ffi_dispatcher_primary;

    /**
     * @param {number} func_id
     * @param {any} ptr_
     * @param {number} rust_vec_len_
     * @param {number} data_len_
     * @returns {any}
     */
    function frb_pde_ffi_dispatcher_sync(func_id, ptr_, rust_vec_len_, data_len_) {
        const ret = wasm.frb_pde_ffi_dispatcher_sync(func_id, ptr_, rust_vec_len_, data_len_);
        return ret;
    }
    exports.frb_pde_ffi_dispatcher_sync = frb_pde_ffi_dispatcher_sync;

    /**
     * ## Safety
     * This function reclaims a raw pointer created by [`TransferClosure`], and therefore
     * should **only** be used in conjunction with it.
     * Furthermore, the WASM module in the worker must have been initialized with the shared
     * memory from the host JS scope.
     * @param {number} payload
     * @param {any[]} transfer
     */
    function receive_transfer_closure(payload, transfer) {
        const ptr0 = passArrayJsValueToWasm0(transfer, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.receive_transfer_closure(payload, ptr0, len0);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    exports.receive_transfer_closure = receive_transfer_closure;

    /**
     * @param {number} ptr
     */
    function rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerArcHost(ptr) {
        wasm.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerArcHost(ptr);
    }
    exports.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerArcHost = rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerArcHost;

    /**
     * @param {number} ptr
     */
    function rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerCapabilities(ptr) {
        wasm.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerCapabilities(ptr);
    }
    exports.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerCapabilities = rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerCapabilities;

    /**
     * @param {number} ptr
     */
    function rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerChatMessage(ptr) {
        wasm.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerChatMessage(ptr);
    }
    exports.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerChatMessage = rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerChatMessage;

    /**
     * @param {number} ptr
     */
    function rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerCodecConfig(ptr) {
        wasm.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerCodecConfig(ptr);
    }
    exports.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerCodecConfig = rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerCodecConfig;

    /**
     * @param {number} ptr
     */
    function rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerContact(ptr) {
        wasm.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerContact(ptr);
    }
    exports.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerContact = rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerContact;

    /**
     * @param {number} ptr
     */
    function rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFlutterCallbacks(ptr) {
        wasm.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFlutterCallbacks(ptr);
    }
    exports.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFlutterCallbacks = rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFlutterCallbacks;

    /**
     * @param {number} ptr
     */
    function rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFlutterSoundHandle(ptr) {
        wasm.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFlutterSoundHandle(ptr);
    }
    exports.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFlutterSoundHandle = rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFlutterSoundHandle;

    /**
     * @param {number} ptr
     */
    function rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFrontendNotify(ptr) {
        wasm.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFrontendNotify(ptr);
    }
    exports.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFrontendNotify = rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFrontendNotify;

    /**
     * @param {number} ptr
     */
    function rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerNetworkConfig(ptr) {
        wasm.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerNetworkConfig(ptr);
    }
    exports.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerNetworkConfig = rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerNetworkConfig;

    /**
     * @param {number} ptr
     */
    function rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerOverlay(ptr) {
        wasm.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerOverlay(ptr);
    }
    exports.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerOverlay = rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerOverlay;

    /**
     * @param {number} ptr
     */
    function rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerPreparedIdentitySwitch(ptr) {
        wasm.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerPreparedIdentitySwitch(ptr);
    }
    exports.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerPreparedIdentitySwitch = rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerPreparedIdentitySwitch;

    /**
     * @param {number} ptr
     */
    function rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerPublicKey(ptr) {
        wasm.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerPublicKey(ptr);
    }
    exports.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerPublicKey = rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerPublicKey;

    /**
     * @param {number} ptr
     */
    function rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerRecordingConfig(ptr) {
        wasm.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerRecordingConfig(ptr);
    }
    exports.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerRecordingConfig = rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerRecordingConfig;

    /**
     * @param {number} ptr
     */
    function rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerScreenshareConfig(ptr) {
        wasm.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerScreenshareConfig(ptr);
    }
    exports.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerScreenshareConfig = rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerScreenshareConfig;

    /**
     * @param {number} ptr
     */
    function rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerSoundPlayer(ptr) {
        wasm.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerSoundPlayer(ptr);
    }
    exports.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerSoundPlayer = rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerSoundPlayer;

    /**
     * @param {number} ptr
     */
    function rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerStartOperation(ptr) {
        wasm.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerStartOperation(ptr);
    }
    exports.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerStartOperation = rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerStartOperation;

    /**
     * @param {number} ptr
     */
    function rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerTelepathy(ptr) {
        wasm.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerTelepathy(ptr);
    }
    exports.rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerTelepathy = rust_arc_decrement_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerTelepathy;

    /**
     * @param {number} ptr
     */
    function rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerArcHost(ptr) {
        wasm.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerArcHost(ptr);
    }
    exports.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerArcHost = rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerArcHost;

    /**
     * @param {number} ptr
     */
    function rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerCapabilities(ptr) {
        wasm.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerCapabilities(ptr);
    }
    exports.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerCapabilities = rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerCapabilities;

    /**
     * @param {number} ptr
     */
    function rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerChatMessage(ptr) {
        wasm.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerChatMessage(ptr);
    }
    exports.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerChatMessage = rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerChatMessage;

    /**
     * @param {number} ptr
     */
    function rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerCodecConfig(ptr) {
        wasm.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerCodecConfig(ptr);
    }
    exports.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerCodecConfig = rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerCodecConfig;

    /**
     * @param {number} ptr
     */
    function rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerContact(ptr) {
        wasm.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerContact(ptr);
    }
    exports.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerContact = rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerContact;

    /**
     * @param {number} ptr
     */
    function rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFlutterCallbacks(ptr) {
        wasm.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFlutterCallbacks(ptr);
    }
    exports.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFlutterCallbacks = rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFlutterCallbacks;

    /**
     * @param {number} ptr
     */
    function rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFlutterSoundHandle(ptr) {
        wasm.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFlutterSoundHandle(ptr);
    }
    exports.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFlutterSoundHandle = rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFlutterSoundHandle;

    /**
     * @param {number} ptr
     */
    function rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFrontendNotify(ptr) {
        wasm.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFrontendNotify(ptr);
    }
    exports.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFrontendNotify = rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerFrontendNotify;

    /**
     * @param {number} ptr
     */
    function rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerNetworkConfig(ptr) {
        wasm.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerNetworkConfig(ptr);
    }
    exports.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerNetworkConfig = rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerNetworkConfig;

    /**
     * @param {number} ptr
     */
    function rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerOverlay(ptr) {
        wasm.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerOverlay(ptr);
    }
    exports.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerOverlay = rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerOverlay;

    /**
     * @param {number} ptr
     */
    function rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerPreparedIdentitySwitch(ptr) {
        wasm.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerPreparedIdentitySwitch(ptr);
    }
    exports.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerPreparedIdentitySwitch = rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerPreparedIdentitySwitch;

    /**
     * @param {number} ptr
     */
    function rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerPublicKey(ptr) {
        wasm.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerPublicKey(ptr);
    }
    exports.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerPublicKey = rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerPublicKey;

    /**
     * @param {number} ptr
     */
    function rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerRecordingConfig(ptr) {
        wasm.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerRecordingConfig(ptr);
    }
    exports.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerRecordingConfig = rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerRecordingConfig;

    /**
     * @param {number} ptr
     */
    function rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerScreenshareConfig(ptr) {
        wasm.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerScreenshareConfig(ptr);
    }
    exports.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerScreenshareConfig = rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerScreenshareConfig;

    /**
     * @param {number} ptr
     */
    function rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerSoundPlayer(ptr) {
        wasm.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerSoundPlayer(ptr);
    }
    exports.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerSoundPlayer = rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerSoundPlayer;

    /**
     * @param {number} ptr
     */
    function rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerStartOperation(ptr) {
        wasm.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerStartOperation(ptr);
    }
    exports.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerStartOperation = rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerStartOperation;

    /**
     * @param {number} ptr
     */
    function rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerTelepathy(ptr) {
        wasm.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerTelepathy(ptr);
    }
    exports.rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerTelepathy = rust_arc_increment_strong_count_RustOpaque_flutter_rust_bridgefor_generatedRustAutoOpaqueInnerTelepathy;

    /**
     * Entry point for web workers
     * @param {number} ptr
     */
    function wasm_thread_entry_point(ptr) {
        wasm.wasm_thread_entry_point(ptr);
    }
    exports.wasm_thread_entry_point = wasm_thread_entry_point;

    function __wbg_get_imports(memory) {
        const import0 = {
            __proto__: null,
            __wbg___wbindgen_boolean_get_bbbb1c18aa2f5e25: function(arg0) {
                const v = arg0;
                const ret = typeof(v) === 'boolean' ? v : undefined;
                return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
            },
            __wbg___wbindgen_debug_string_0bc8482c6e3508ae: function(arg0, arg1) {
                const ret = debugString(arg1);
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg___wbindgen_is_falsy_e623e5b815413d00: function(arg0) {
                const ret = !arg0;
                return ret;
            },
            __wbg___wbindgen_is_function_0095a73b8b156f76: function(arg0) {
                const ret = typeof(arg0) === 'function';
                return ret;
            },
            __wbg___wbindgen_is_object_5ae8e5880f2c1fbd: function(arg0) {
                const val = arg0;
                const ret = typeof(val) === 'object' && val !== null;
                return ret;
            },
            __wbg___wbindgen_is_string_cd444516edc5b180: function(arg0) {
                const ret = typeof(arg0) === 'string';
                return ret;
            },
            __wbg___wbindgen_is_undefined_9e4d92534c42d778: function(arg0) {
                const ret = arg0 === undefined;
                return ret;
            },
            __wbg___wbindgen_jsval_eq_11888390b0186270: function(arg0, arg1) {
                const ret = arg0 === arg1;
                return ret;
            },
            __wbg___wbindgen_memory_bd1fbcf21fbef3c8: function() {
                const ret = wasm.memory;
                return ret;
            },
            __wbg___wbindgen_module_f6b8052d79c1cc16: function() {
                const ret = wasmModule;
                return ret;
            },
            __wbg___wbindgen_number_get_8ff4255516ccad3e: function(arg0, arg1) {
                const obj = arg1;
                const ret = typeof(obj) === 'number' ? obj : undefined;
                getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
            },
            __wbg___wbindgen_rethrow_05525c567f154472: function(arg0) {
                throw arg0;
            },
            __wbg___wbindgen_string_get_72fb696202c56729: function(arg0, arg1) {
                const obj = arg1;
                const ret = typeof(obj) === 'string' ? obj : undefined;
                var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                var len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg___wbindgen_throw_be289d5034ed271b: function(arg0, arg1) {
                throw new Error(getStringFromWasm0(arg0, arg1));
            },
            __wbg__wbg_cb_unref_d9b87ff7982e3b21: function(arg0) {
                arg0._wbg_cb_unref();
            },
            __wbg_abort_2f0584e03e8e3950: function(arg0) {
                arg0.abort();
            },
            __wbg_abort_d549b92d3c665de1: function(arg0, arg1) {
                arg0.abort(arg1);
            },
            __wbg_addEventListener_14e74488d3142fa7: function() { return handleError(function (arg0, arg1, arg2, arg3) {
                arg0.addEventListener(getStringFromWasm0(arg1, arg2), arg3);
            }, arguments); },
            __wbg_addEventListener_3acb0aad4483804c: function() { return handleError(function (arg0, arg1, arg2, arg3) {
                arg0.addEventListener(getStringFromWasm0(arg1, arg2), arg3);
            }, arguments); },
            __wbg_addModule_98240fe49ea8f5d2: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = arg0.addModule(getStringFromWasm0(arg1, arg2));
                return ret;
            }, arguments); },
            __wbg_append_a992ccc37aa62dc4: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
                arg0.append(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
            }, arguments); },
            __wbg_arrayBuffer_bb54076166006c39: function() { return handleError(function (arg0) {
                const ret = arg0.arrayBuffer();
                return ret;
            }, arguments); },
            __wbg_async_79f2a61f9d0b31cf: function(arg0) {
                const ret = arg0.async;
                return ret;
            },
            __wbg_audioWorklet_d1e617c89bbeed11: function() { return handleError(function (arg0) {
                const ret = arg0.audioWorklet;
                return ret;
            }, arguments); },
            __wbg_body_3a0b4437dadea6bf: function(arg0) {
                const ret = arg0.body;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_buffer_26d0910f3a5bc899: function(arg0) {
                const ret = arg0.buffer;
                return ret;
            },
            __wbg_buffer_7b5f53e46557d8f1: function(arg0) {
                const ret = arg0.buffer;
                return ret;
            },
            __wbg_byobRequest_80e594e6da4e1af7: function(arg0) {
                const ret = arg0.byobRequest;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_byteLength_3417f266f4bf562a: function(arg0) {
                const ret = arg0.byteLength;
                return ret;
            },
            __wbg_byteOffset_f88547ca47c86358: function(arg0) {
                const ret = arg0.byteOffset;
                return ret;
            },
            __wbg_call_389efe28435a9388: function() { return handleError(function (arg0, arg1) {
                const ret = arg0.call(arg1);
                return ret;
            }, arguments); },
            __wbg_call_4708e0c13bdc8e95: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = arg0.call(arg1, arg2);
                return ret;
            }, arguments); },
            __wbg_cancel_2c0a0a251ff6b2b7: function(arg0) {
                const ret = arg0.cancel();
                return ret;
            },
            __wbg_catch_c1f8c7623b458214: function(arg0, arg1) {
                const ret = arg0.catch(arg1);
                return ret;
            },
            __wbg_clearTimeout_5e42188b495715bb: function() { return handleError(function (arg0, arg1) {
                arg0.clearTimeout(arg1);
            }, arguments); },
            __wbg_clearTimeout_7bfb119a4102d492: function(arg0) {
                const ret = clearTimeout(arg0);
                return ret;
            },
            __wbg_close_06dfa0a815b9d71f: function() { return handleError(function (arg0) {
                arg0.close();
            }, arguments); },
            __wbg_close_1d08eaf57ed325c0: function() { return handleError(function (arg0) {
                arg0.close();
            }, arguments); },
            __wbg_close_987a203f749ce4ab: function() { return handleError(function (arg0) {
                const ret = arg0.close();
                return ret;
            }, arguments); },
            __wbg_close_a79afee31de55b36: function() { return handleError(function (arg0) {
                arg0.close();
            }, arguments); },
            __wbg_close_fad2f0ee451926ed: function(arg0) {
                arg0.close();
            },
            __wbg_code_35e4ec59fbc7d427: function(arg0) {
                const ret = arg0.code;
                return ret;
            },
            __wbg_code_a552f1e91eda69b7: function(arg0) {
                const ret = arg0.code;
                return ret;
            },
            __wbg_connect_aba749effbe588ea: function() { return handleError(function (arg0, arg1) {
                const ret = arg0.connect(arg1);
                return ret;
            }, arguments); },
            __wbg_copyToChannel_ef4ac07b8274c8db: function() { return handleError(function (arg0, arg1, arg2) {
                arg0.copyToChannel(arg1, arg2);
            }, arguments); },
            __wbg_createBufferSource_1254cd048e6c0593: function() { return handleError(function (arg0) {
                const ret = arg0.createBufferSource();
                return ret;
            }, arguments); },
            __wbg_createBuffer_36fe5fb1d9f77b9d: function() { return handleError(function (arg0, arg1, arg2, arg3) {
                const ret = arg0.createBuffer(arg1 >>> 0, arg2 >>> 0, arg3);
                return ret;
            }, arguments); },
            __wbg_createMediaStreamSource_738a729c18da3524: function() { return handleError(function (arg0, arg1) {
                const ret = arg0.createMediaStreamSource(arg1);
                return ret;
            }, arguments); },
            __wbg_createObjectURL_918185db6a10a0c8: function() { return handleError(function (arg0, arg1) {
                const ret = URL.createObjectURL(arg1);
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            }, arguments); },
            __wbg_crypto_86f2631e91b51511: function(arg0) {
                const ret = arg0.crypto;
                return ret;
            },
            __wbg_currentTime_6c7288048dba47fa: function(arg0) {
                const ret = arg0.currentTime;
                return ret;
            },
            __wbg_data_5330da50312d0bc1: function(arg0) {
                const ret = arg0.data;
                return ret;
            },
            __wbg_destination_a97dbc327ce97191: function(arg0) {
                const ret = arg0.destination;
                return ret;
            },
            __wbg_disconnect_7c1278d939bc7bb9: function() { return handleError(function (arg0) {
                arg0.disconnect();
            }, arguments); },
            __wbg_done_57b39ecd9addfe81: function(arg0) {
                const ret = arg0.done;
                return ret;
            },
            __wbg_enqueue_2c63f2044f257c3e: function() { return handleError(function (arg0, arg1) {
                arg0.enqueue(arg1);
            }, arguments); },
            __wbg_entries_04679661ea6e74fc: function(arg0) {
                const ret = arg0.entries();
                return ret;
            },
            __wbg_error_2cdfbae2e8e23e41: function(arg0, arg1) {
                console.error(getStringFromWasm0(arg0, arg1));
            },
            __wbg_eval_3f0b9f0cbaf45a34: function() { return handleError(function (arg0, arg1) {
                const ret = eval(getStringFromWasm0(arg0, arg1));
                return ret;
            }, arguments); },
            __wbg_fetch_afb6a4b6cacf876d: function(arg0, arg1) {
                const ret = arg0.fetch(arg1);
                return ret;
            },
            __wbg_fetch_deda9dd882c80f3e: function(arg0) {
                const ret = fetch(arg0);
                return ret;
            },
            __wbg_getRandomValues_a4c2166015975d29: function() { return handleError(function (arg0) {
                globalThis.crypto.getRandomValues(arg0);
            }, arguments); },
            __wbg_getRandomValues_b3f15fcbfabb0f8b: function() { return handleError(function (arg0, arg1) {
                arg0.getRandomValues(arg1);
            }, arguments); },
            __wbg_getRandomValues_fcdb156ea053b53b: function() { return handleError(function (arg0) {
                globalThis.crypto.getRandomValues(arg0);
            }, arguments); },
            __wbg_getReader_f47519d698a4505e: function() { return handleError(function (arg0) {
                const ret = arg0.getReader();
                return ret;
            }, arguments); },
            __wbg_getTime_1e3cd1391c5c3995: function(arg0) {
                const ret = arg0.getTime();
                return ret;
            },
            __wbg_getTimezoneOffset_81776d10a4ec18a8: function(arg0) {
                const ret = arg0.getTimezoneOffset();
                return ret;
            },
            __wbg_getTracks_0ebc2ccfec066781: function(arg0) {
                const ret = arg0.getTracks();
                return ret;
            },
            __wbg_getUserMedia_e0ae761c45b48754: function() { return handleError(function (arg0, arg1) {
                const ret = arg0.getUserMedia(arg1);
                return ret;
            }, arguments); },
            __wbg_get_9b94d73e6221f75c: function(arg0, arg1) {
                const ret = arg0[arg1 >>> 0];
                return ret;
            },
            __wbg_get_b3ed3ad4be2bc8ac: function() { return handleError(function (arg0, arg1) {
                const ret = Reflect.get(arg0, arg1);
                return ret;
            }, arguments); },
            __wbg_get_done_1ad1c16537f444c6: function(arg0) {
                const ret = arg0.done;
                return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
            },
            __wbg_get_value_6b77a1b7b90c9200: function(arg0) {
                const ret = arg0.value;
                return ret;
            },
            __wbg_has_d4e53238966c12b6: function() { return handleError(function (arg0, arg1) {
                const ret = Reflect.has(arg0, arg1);
                return ret;
            }, arguments); },
            __wbg_headers_59a2938db9f80985: function(arg0) {
                const ret = arg0.headers;
                return ret;
            },
            __wbg_instanceof_ArrayBuffer_c367199e2fa2aa04: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof ArrayBuffer;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_Blob_ce92a9ddd729a84a: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof Blob;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_BroadcastChannel_cb5d139378d0f206: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof BroadcastChannel;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_DedicatedWorkerGlobalScope_1506b3d017799d48: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof DedicatedWorkerGlobalScope;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_ErrorEvent_cd1bf636fceb3180: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof ErrorEvent;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_MediaStreamTrack_de218ec16db5b948: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof MediaStreamTrack;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_MediaStream_87a4b350cfc3064a: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof MediaStream;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_MessageEvent_1a6960e6b15377ad: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof MessageEvent;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_MessagePort_b42e3b3e52b04e04: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof MessagePort;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_Response_ee1d54d79ae41977: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof Response;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_Window_ed49b2db8df90359: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof Window;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_WorkerGlobalScope_07b9d5514ff0156e: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof WorkerGlobalScope;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_isArray_d314bb98fcf08331: function(arg0) {
                const ret = Array.isArray(arg0);
                return ret;
            },
            __wbg_length_32ed9a279acd054c: function(arg0) {
                const ret = arg0.length;
                return ret;
            },
            __wbg_length_35a7bace40f36eac: function(arg0) {
                const ret = arg0.length;
                return ret;
            },
            __wbg_length_9a7876c9728a0979: function(arg0) {
                const ret = arg0.length;
                return ret;
            },
            __wbg_log_0cc1b7768397bcfe: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
                let deferred0_0;
                let deferred0_1;
                try {
                    deferred0_0 = arg0;
                    deferred0_1 = arg1;
                    console.log(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3), getStringFromWasm0(arg4, arg5), getStringFromWasm0(arg6, arg7));
                } finally {
                    wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
                }
            },
            __wbg_log_cb9e190acc5753fb: function(arg0, arg1) {
                let deferred0_0;
                let deferred0_1;
                try {
                    deferred0_0 = arg0;
                    deferred0_1 = arg1;
                    console.log(getStringFromWasm0(arg0, arg1));
                } finally {
                    wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
                }
            },
            __wbg_mark_7438147ce31e9d4b: function(arg0, arg1) {
                performance.mark(getStringFromWasm0(arg0, arg1));
            },
            __wbg_maxChannelCount_70d101457dda9e24: function(arg0) {
                const ret = arg0.maxChannelCount;
                return ret;
            },
            __wbg_measure_fb7825c11612c823: function() { return handleError(function (arg0, arg1, arg2, arg3) {
                let deferred0_0;
                let deferred0_1;
                let deferred1_0;
                let deferred1_1;
                try {
                    deferred0_0 = arg0;
                    deferred0_1 = arg1;
                    deferred1_0 = arg2;
                    deferred1_1 = arg3;
                    performance.measure(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));
                } finally {
                    wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
                    wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
                }
            }, arguments); },
            __wbg_mediaDevices_1a8b20bf414820e2: function() { return handleError(function (arg0) {
                const ret = arg0.mediaDevices;
                return ret;
            }, arguments); },
            __wbg_message_0b2b0298a231b0d4: function(arg0, arg1) {
                const ret = arg1.message;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_message_6de0e1db93388eee: function(arg0, arg1) {
                const ret = arg1.message;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_msCrypto_d562bbe83e0d4b91: function(arg0) {
                const ret = arg0.msCrypto;
                return ret;
            },
            __wbg_name_919ac24b80128f9f: function(arg0, arg1) {
                const ret = arg1.name;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_navigator_43be698ba96fc088: function(arg0) {
                const ret = arg0.navigator;
                return ret;
            },
            __wbg_new_057993d5b5e07835: function() { return handleError(function (arg0, arg1) {
                const ret = new WebSocket(getStringFromWasm0(arg0, arg1));
                return ret;
            }, arguments); },
            __wbg_new_0_73afc35eb544e539: function() {
                const ret = new Date();
                return ret;
            },
            __wbg_new_245cd5c49157e602: function(arg0) {
                const ret = new Date(arg0);
                return ret;
            },
            __wbg_new_361308b2356cecd0: function() {
                const ret = new Object();
                return ret;
            },
            __wbg_new_3664a4ca8662b61d: function(arg0) {
                const ret = new ArrayBuffer(arg0 >>> 0);
                return ret;
            },
            __wbg_new_3eb36ae241fe6f44: function() {
                const ret = new Array();
                return ret;
            },
            __wbg_new_4f8f3c123e474358: function() { return handleError(function (arg0, arg1) {
                const ret = new Worker(getStringFromWasm0(arg0, arg1));
                return ret;
            }, arguments); },
            __wbg_new_64284bd487f9d239: function() { return handleError(function () {
                const ret = new Headers();
                return ret;
            }, arguments); },
            __wbg_new_72b49615380db768: function(arg0, arg1) {
                const ret = new Error(getStringFromWasm0(arg0, arg1));
                return ret;
            },
            __wbg_new_72c627ba80de1c21: function(arg0) {
                const ret = new Int32Array(arg0);
                return ret;
            },
            __wbg_new_848d3caa9d043d05: function() { return handleError(function () {
                const ret = new lAudioContext();
                return ret;
            }, arguments); },
            __wbg_new_9ccae8c3d6099588: function(arg0) {
                const ret = new Float32Array(arg0);
                return ret;
            },
            __wbg_new_afb8dbb951819ab7: function() { return handleError(function (arg0, arg1) {
                const ret = new BroadcastChannel(getStringFromWasm0(arg0, arg1));
                return ret;
            }, arguments); },
            __wbg_new_b5d9e2fb389fef91: function(arg0, arg1) {
                try {
                    var state0 = {a: arg0, b: arg1};
                    var cb0 = (arg0, arg1) => {
                        const a = state0.a;
                        state0.a = 0;
                        try {
                            return wasm_bindgen_1300b5e4906317af___convert__closures_____invoke___wasm_bindgen_1300b5e4906317af___JsValue__wasm_bindgen_1300b5e4906317af___JsValue_____(a, state0.b, arg0, arg1);
                        } finally {
                            state0.a = a;
                        }
                    };
                    const ret = new Promise(cb0);
                    return ret;
                } finally {
                    state0.a = state0.b = 0;
                }
            },
            __wbg_new_b949e7f56150a5d1: function() { return handleError(function () {
                const ret = new AbortController();
                return ret;
            }, arguments); },
            __wbg_new_c35d3aaec5d0d7ae: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = new AudioWorkletNode(arg0, getStringFromWasm0(arg1, arg2));
                return ret;
            }, arguments); },
            __wbg_new_dd2b680c8bf6ae29: function(arg0) {
                const ret = new Uint8Array(arg0);
                return ret;
            },
            __wbg_new_from_slice_a3d2629dc1826784: function(arg0, arg1) {
                const ret = new Uint8Array(getArrayU8FromWasm0(arg0, arg1));
                return ret;
            },
            __wbg_new_no_args_1c7c842f08d00ebb: function(arg0, arg1) {
                const ret = new Function(getStringFromWasm0(arg0, arg1));
                return ret;
            },
            __wbg_new_with_blob_sequence_and_options_49f0dade7a77cd73: function() { return handleError(function (arg0, arg1) {
                const ret = new Blob(arg0, arg1);
                return ret;
            }, arguments); },
            __wbg_new_with_byte_offset_and_length_aa261d9c9da49eb1: function(arg0, arg1, arg2) {
                const ret = new Uint8Array(arg0, arg1 >>> 0, arg2 >>> 0);
                return ret;
            },
            __wbg_new_with_context_options_a4af9766d02e5169: function() { return handleError(function (arg0) {
                const ret = new lAudioContext(arg0);
                return ret;
            }, arguments); },
            __wbg_new_with_length_a2c39cbe88fd8ff1: function(arg0) {
                const ret = new Uint8Array(arg0 >>> 0);
                return ret;
            },
            __wbg_new_with_options_145afba922ad3703: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = new Worker(getStringFromWasm0(arg0, arg1), arg2);
                return ret;
            }, arguments); },
            __wbg_new_with_str_and_init_a61cbc6bdef21614: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = new Request(getStringFromWasm0(arg0, arg1), arg2);
                return ret;
            }, arguments); },
            __wbg_new_with_str_sequence_and_options_9b8b0bee99ec6b0f: function() { return handleError(function (arg0, arg1) {
                const ret = new Blob(arg0, arg1);
                return ret;
            }, arguments); },
            __wbg_new_with_str_sequence_b67b3919b8b11238: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = new WebSocket(getStringFromWasm0(arg0, arg1), arg2);
                return ret;
            }, arguments); },
            __wbg_new_with_str_sequence_cea2c0571d6dc6ab: function() { return handleError(function (arg0) {
                const ret = new Blob(arg0);
                return ret;
            }, arguments); },
            __wbg_next_3482f54c49e8af19: function() { return handleError(function (arg0) {
                const ret = arg0.next();
                return ret;
            }, arguments); },
            __wbg_node_e1f24f89a7336c2e: function(arg0) {
                const ret = arg0.node;
                return ret;
            },
            __wbg_now_0dc4920a47cf7280: function(arg0) {
                const ret = arg0.now();
                return ret;
            },
            __wbg_now_2c95c9de01293173: function(arg0) {
                const ret = arg0.now();
                return ret;
            },
            __wbg_now_a3af9a2f4bbaa4d1: function() {
                const ret = Date.now();
                return ret;
            },
            __wbg_of_ddc0942b0dce16a1: function(arg0, arg1, arg2) {
                const ret = Array.of(arg0, arg1, arg2);
                return ret;
            },
            __wbg_performance_6adc3b899e448a23: function(arg0) {
                const ret = arg0.performance;
                return ret;
            },
            __wbg_performance_7a3ffd0b17f663ad: function(arg0) {
                const ret = arg0.performance;
                return ret;
            },
            __wbg_port_766506d0fcb1fe8d: function() { return handleError(function (arg0) {
                const ret = arg0.port;
                return ret;
            }, arguments); },
            __wbg_postMessage_2041f4e90af61318: function() { return handleError(function (arg0, arg1) {
                arg0.postMessage(arg1);
            }, arguments); },
            __wbg_postMessage_68b94be862c0db01: function() { return handleError(function (arg0, arg1) {
                arg0.postMessage(arg1);
            }, arguments); },
            __wbg_postMessage_771ef3293a28bbac: function() { return handleError(function (arg0, arg1) {
                arg0.postMessage(arg1);
            }, arguments); },
            __wbg_postMessage_e45c89e4826cf2ef: function() { return handleError(function (arg0, arg1, arg2) {
                arg0.postMessage(arg1, arg2);
            }, arguments); },
            __wbg_process_3975fd6c72f520aa: function(arg0) {
                const ret = arg0.process;
                return ret;
            },
            __wbg_protocol_35ed55a0bf32ee73: function(arg0, arg1) {
                const ret = arg1.protocol;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_prototypesetcall_bdcdcc5842e4d77d: function(arg0, arg1, arg2) {
                Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
            },
            __wbg_prototypesetcall_c7e6a26aeade796d: function(arg0, arg1, arg2) {
                Float32Array.prototype.set.call(getArrayF32FromWasm0(arg0, arg1), arg2);
            },
            __wbg_push_8ffdcb2063340ba5: function(arg0, arg1) {
                const ret = arg0.push(arg1);
                return ret;
            },
            __wbg_queueMicrotask_0aa0a927f78f5d98: function(arg0) {
                const ret = arg0.queueMicrotask;
                return ret;
            },
            __wbg_queueMicrotask_5bb536982f78a56f: function(arg0) {
                queueMicrotask(arg0);
            },
            __wbg_randomFillSync_f8c153b79f285817: function() { return handleError(function (arg0, arg1) {
                arg0.randomFillSync(arg1);
            }, arguments); },
            __wbg_random_912284dbf636f269: function() {
                const ret = Math.random();
                return ret;
            },
            __wbg_read_68fd377df67e19b0: function(arg0) {
                const ret = arg0.read();
                return ret;
            },
            __wbg_readyState_1bb73ec7b8a54656: function(arg0) {
                const ret = arg0.readyState;
                return ret;
            },
            __wbg_reason_35fce8e55dd90f31: function(arg0, arg1) {
                const ret = arg1.reason;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_releaseLock_aa5846c2494b3032: function(arg0) {
                arg0.releaseLock();
            },
            __wbg_removeEventListener_34a7e78acf851dd7: function() { return handleError(function (arg0, arg1, arg2, arg3) {
                arg0.removeEventListener(getStringFromWasm0(arg1, arg2), arg3);
            }, arguments); },
            __wbg_require_b74f47fc2d022fd6: function() { return handleError(function () {
                const ret = module.require;
                return ret;
            }, arguments); },
            __wbg_resolve_002c4b7d9d8f6b64: function(arg0) {
                const ret = Promise.resolve(arg0);
                return ret;
            },
            __wbg_respond_bf6ab10399ca8722: function() { return handleError(function (arg0, arg1) {
                arg0.respond(arg1 >>> 0);
            }, arguments); },
            __wbg_resume_7995ba29b6bb4edb: function() { return handleError(function (arg0) {
                const ret = arg0.resume();
                return ret;
            }, arguments); },
            __wbg_revokeObjectURL_ba5712ef5af8bc9a: function() { return handleError(function (arg0, arg1) {
                URL.revokeObjectURL(getStringFromWasm0(arg0, arg1));
            }, arguments); },
            __wbg_sampleRate_8142bbf3840b654b: function(arg0) {
                const ret = arg0.sampleRate;
                return ret;
            },
            __wbg_send_8b224cccd0f6dc38: function() { return handleError(function (arg0, arg1) {
                arg0.send(arg1);
            }, arguments); },
            __wbg_send_bc0336a1b5ce4fb7: function() { return handleError(function (arg0, arg1, arg2) {
                arg0.send(getStringFromWasm0(arg1, arg2));
            }, arguments); },
            __wbg_setTimeout_0ee837fe2edf935b: function(arg0, arg1) {
                const ret = setTimeout(arg0, arg1);
                return ret;
            },
            __wbg_setTimeout_2b111259203a2623: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = arg0.setTimeout(arg1, arg2);
                return ret;
            }, arguments); },
            __wbg_setTimeout_63008613644b07af: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = arg0.setTimeout(arg1, arg2);
                return ret;
            }, arguments); },
            __wbg_setTimeout_eff32631ea138533: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = arg0.setTimeout(arg1, arg2);
                return ret;
            }, arguments); },
            __wbg_set_6cb8631f80447a67: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = Reflect.set(arg0, arg1, arg2);
                return ret;
            }, arguments); },
            __wbg_set_audio_947c46bfb2542b56: function(arg0, arg1) {
                arg0.audio = arg1;
            },
            __wbg_set_auto_gain_control_59c2023099b0831e: function(arg0, arg1) {
                arg0.autoGainControl = arg1;
            },
            __wbg_set_binaryType_5bbf62e9f705dc1a: function(arg0, arg1) {
                arg0.binaryType = __wbindgen_enum_BinaryType[arg1];
            },
            __wbg_set_body_9a7e00afe3cfe244: function(arg0, arg1) {
                arg0.body = arg1;
            },
            __wbg_set_buffer_730f06ef4e703eef: function(arg0, arg1) {
                arg0.buffer = arg1;
            },
            __wbg_set_cache_315a3ed773a41543: function(arg0, arg1) {
                arg0.cache = __wbindgen_enum_RequestCache[arg1];
            },
            __wbg_set_cc56eefd2dd91957: function(arg0, arg1, arg2) {
                arg0.set(getArrayU8FromWasm0(arg1, arg2));
            },
            __wbg_set_channelCount_cb06e47d0ad98056: function(arg0, arg1) {
                arg0.channelCount = arg1 >>> 0;
            },
            __wbg_set_credentials_c4a58d2e05ef24fb: function(arg0, arg1) {
                arg0.credentials = __wbindgen_enum_RequestCredentials[arg1];
            },
            __wbg_set_echo_cancellation_5f31ba79fa53451c: function(arg0, arg1) {
                arg0.echoCancellation = arg1;
            },
            __wbg_set_f43e577aea94465b: function(arg0, arg1, arg2) {
                arg0[arg1 >>> 0] = arg2;
            },
            __wbg_set_f8edeec46569cc70: function(arg0, arg1, arg2) {
                arg0.set(getArrayF32FromWasm0(arg1, arg2));
            },
            __wbg_set_handle_event_ea7145e4fd7c71f1: function(arg0, arg1) {
                arg0.handleEvent = arg1;
            },
            __wbg_set_headers_cfc5f4b2c1f20549: function(arg0, arg1) {
                arg0.headers = arg1;
            },
            __wbg_set_method_c3e20375f5ae7fac: function(arg0, arg1, arg2) {
                arg0.method = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_mode_b13642c312648202: function(arg0, arg1) {
                arg0.mode = __wbindgen_enum_RequestMode[arg1];
            },
            __wbg_set_name_49b9ecba7f58f2e5: function(arg0, arg1, arg2) {
                arg0.name = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_noise_suppression_3cdeb2762f456cb5: function(arg0, arg1) {
                arg0.noiseSuppression = arg1;
            },
            __wbg_set_onclose_d382f3e2c2b850eb: function(arg0, arg1) {
                arg0.onclose = arg1;
            },
            __wbg_set_onerror_377f18bf4569bf85: function(arg0, arg1) {
                arg0.onerror = arg1;
            },
            __wbg_set_onerror_73f3137061c9c32e: function(arg0, arg1) {
                arg0.onerror = arg1;
            },
            __wbg_set_onmessage_0e1ffb1c0d91d2ad: function(arg0, arg1) {
                arg0.onmessage = arg1;
            },
            __wbg_set_onmessage_2114aa5f4f53051e: function(arg0, arg1) {
                arg0.onmessage = arg1;
            },
            __wbg_set_onmessage_6ed41050e4a5cee2: function(arg0, arg1) {
                arg0.onmessage = arg1;
            },
            __wbg_set_onopen_b7b52d519d6c0f11: function(arg0, arg1) {
                arg0.onopen = arg1;
            },
            __wbg_set_sample_rate_e24e368385a5a022: function(arg0, arg1) {
                arg0.sampleRate = arg1;
            },
            __wbg_set_signal_f2d3f8599248896d: function(arg0, arg1) {
                arg0.signal = arg1;
            },
            __wbg_set_type_148de20768639245: function(arg0, arg1, arg2) {
                arg0.type = getStringFromWasm0(arg1, arg2);
            },
            __wbg_set_type_e127f26b78d78bfc: function(arg0, arg1) {
                arg0.type = __wbindgen_enum_WorkerType[arg1];
            },
            __wbg_signal_d1285ecab4ebc5ad: function(arg0) {
                const ret = arg0.signal;
                return ret;
            },
            __wbg_size_e05d31cc6049815f: function(arg0) {
                const ret = arg0.size;
                return ret;
            },
            __wbg_slice_566a15f3214fa52e: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
                const ret = arg0.slice(arg1, arg2, getStringFromWasm0(arg3, arg4));
                return ret;
            }, arguments); },
            __wbg_start_76c52471f3287ae0: function() { return handleError(function (arg0, arg1) {
                arg0.start(arg1);
            }, arguments); },
            __wbg_static_accessor_GLOBAL_12837167ad935116: function() {
                const ret = typeof global === 'undefined' ? null : global;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f: function() {
                const ret = typeof globalThis === 'undefined' ? null : globalThis;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_static_accessor_SELF_a621d3dfbb60d0ce: function() {
                const ret = typeof self === 'undefined' ? null : self;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_static_accessor_WINDOW_f8727f0cf888e0bd: function() {
                const ret = typeof window === 'undefined' ? null : window;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_status_89d7e803db911ee7: function(arg0) {
                const ret = arg0.status;
                return ret;
            },
            __wbg_stop_b859162f9cf5e2ae: function(arg0) {
                arg0.stop();
            },
            __wbg_subarray_a96e1fef17ed23cb: function(arg0, arg1, arg2) {
                const ret = arg0.subarray(arg1 >>> 0, arg2 >>> 0);
                return ret;
            },
            __wbg_then_0d9fe2c7b1857d32: function(arg0, arg1, arg2) {
                const ret = arg0.then(arg1, arg2);
                return ret;
            },
            __wbg_then_b9e7b3b5f1a9e1b5: function(arg0, arg1) {
                const ret = arg0.then(arg1);
                return ret;
            },
            __wbg_timeOrigin_9f29a08704a944d0: function(arg0) {
                const ret = arg0.timeOrigin;
                return ret;
            },
            __wbg_unshift_a4a28a3b4a2e621b: function(arg0, arg1) {
                const ret = arg0.unshift(arg1);
                return ret;
            },
            __wbg_url_c484c26b1fbf5126: function(arg0, arg1) {
                const ret = arg1.url;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_url_cb4d34db86c24df9: function(arg0, arg1) {
                const ret = arg1.url;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            __wbg_value_0546255b415e96c1: function(arg0) {
                const ret = arg0.value;
                return ret;
            },
            __wbg_value_fe6ee34af5dc3dce: function(arg0) {
                const ret = arg0.value;
                return ret;
            },
            __wbg_versions_4e31226f5e8dc909: function(arg0) {
                const ret = arg0.versions;
                return ret;
            },
            __wbg_view_6c32e7184b8606ad: function(arg0) {
                const ret = arg0.view;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_waitAsync_a58b2134bff39c3e: function(arg0, arg1, arg2) {
                const ret = Atomics.waitAsync(arg0, arg1 >>> 0, arg2);
                return ret;
            },
            __wbg_waitAsync_c0a39a7d3318d91e: function() {
                const ret = Atomics.waitAsync;
                return ret;
            },
            __wbg_wasClean_a9c77a7100d8534f: function(arg0) {
                const ret = arg0.wasClean;
                return ret;
            },
            __wbindgen_cast_0000000000000001: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { dtor_idx: 1172, function: Function { arguments: [NamedExternref("Event")], shim_idx: 1173, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen_1300b5e4906317af___closure__destroy___dyn_core_7aadb9eade7447d7___ops__function__FnMut__web_sys_c3027c506311447c___features__gen_Event__Event____Output_______, wasm_bindgen_1300b5e4906317af___convert__closures_____invoke___web_sys_c3027c506311447c___features__gen_Event__Event_____);
                return ret;
            },
            __wbindgen_cast_0000000000000002: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { dtor_idx: 1223, function: Function { arguments: [NamedExternref("CloseEvent")], shim_idx: 1224, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen_1300b5e4906317af___closure__destroy___dyn_core_7aadb9eade7447d7___ops__function__FnMut__web_sys_c3027c506311447c___features__gen_CloseEvent__CloseEvent____Output_______, wasm_bindgen_1300b5e4906317af___convert__closures_____invoke___web_sys_c3027c506311447c___features__gen_CloseEvent__CloseEvent_____);
                return ret;
            },
            __wbindgen_cast_0000000000000003: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { dtor_idx: 2462, function: Function { arguments: [], shim_idx: 2463, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen_1300b5e4906317af___closure__destroy___dyn_core_7aadb9eade7447d7___ops__function__FnMut_____Output_______, wasm_bindgen_1300b5e4906317af___convert__closures_____invoke______);
                return ret;
            },
            __wbindgen_cast_0000000000000004: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { dtor_idx: 2664, function: Function { arguments: [], shim_idx: 2665, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen_1300b5e4906317af___closure__destroy___dyn_core_7aadb9eade7447d7___ops__function__FnMut_____Output________1_, wasm_bindgen_1300b5e4906317af___convert__closures_____invoke_______1_);
                return ret;
            },
            __wbindgen_cast_0000000000000005: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { dtor_idx: 2667, function: Function { arguments: [], shim_idx: 2668, ret: Unit, inner_ret: Some(Unit) }, mutable: false }) -> Externref`.
                const ret = makeClosure(arg0, arg1, wasm.wasm_bindgen_1300b5e4906317af___closure__destroy___dyn_core_7aadb9eade7447d7___ops__function__Fn_____Output_______, wasm_bindgen_1300b5e4906317af___convert__closures_____invoke_______2_);
                return ret;
            },
            __wbindgen_cast_0000000000000006: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { dtor_idx: 4095, function: Function { arguments: [], shim_idx: 4096, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen_1300b5e4906317af___closure__destroy___dyn_core_7aadb9eade7447d7___ops__function__FnMut_____Output________2_, wasm_bindgen_1300b5e4906317af___convert__closures_____invoke_______3_);
                return ret;
            },
            __wbindgen_cast_0000000000000007: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { dtor_idx: 4619, function: Function { arguments: [Ref(NamedExternref("MessageEvent"))], shim_idx: 4620, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen_1300b5e4906317af___closure__destroy___dyn_for__a__core_7aadb9eade7447d7___ops__function__FnMut____a_web_sys_c3027c506311447c___features__gen_MessageEvent__MessageEvent____Output_______, wasm_bindgen_1300b5e4906317af___convert__closures________invoke___web_sys_c3027c506311447c___features__gen_MessageEvent__MessageEvent_____);
                return ret;
            },
            __wbindgen_cast_0000000000000008: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { dtor_idx: 4627, function: Function { arguments: [], shim_idx: 4628, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen_1300b5e4906317af___closure__destroy___dyn_core_7aadb9eade7447d7___ops__function__FnMut_____Output________3_, wasm_bindgen_1300b5e4906317af___convert__closures_____invoke_______4_);
                return ret;
            },
            __wbindgen_cast_0000000000000009: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { dtor_idx: 4641, function: Function { arguments: [Externref], shim_idx: 4642, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen_1300b5e4906317af___closure__destroy___dyn_core_7aadb9eade7447d7___ops__function__FnMut__wasm_bindgen_1300b5e4906317af___JsValue____Output_______, wasm_bindgen_1300b5e4906317af___convert__closures_____invoke___wasm_bindgen_1300b5e4906317af___JsValue_____);
                return ret;
            },
            __wbindgen_cast_000000000000000a: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { dtor_idx: 4641, function: Function { arguments: [NamedExternref("MessageEvent")], shim_idx: 4642, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen_1300b5e4906317af___closure__destroy___dyn_core_7aadb9eade7447d7___ops__function__FnMut__wasm_bindgen_1300b5e4906317af___JsValue____Output_______, wasm_bindgen_1300b5e4906317af___convert__closures_____invoke___wasm_bindgen_1300b5e4906317af___JsValue_____);
                return ret;
            },
            __wbindgen_cast_000000000000000b: function(arg0) {
                // Cast intrinsic for `F64 -> Externref`.
                const ret = arg0;
                return ret;
            },
            __wbindgen_cast_000000000000000c: function(arg0, arg1) {
                // Cast intrinsic for `Ref(Slice(U8)) -> NamedExternref("Uint8Array")`.
                const ret = getArrayU8FromWasm0(arg0, arg1);
                return ret;
            },
            __wbindgen_cast_000000000000000d: function(arg0, arg1) {
                // Cast intrinsic for `Ref(String) -> Externref`.
                const ret = getStringFromWasm0(arg0, arg1);
                return ret;
            },
            __wbindgen_init_externref_table: function() {
                const table = wasm.__wbindgen_externrefs;
                const offset = table.grow(4);
                table.set(0, undefined);
                table.set(offset + 0, undefined);
                table.set(offset + 1, null);
                table.set(offset + 2, true);
                table.set(offset + 3, false);
            },
            __wbindgen_link_0b1f76d235fd2b86: function(arg0) {
                const val = `onmessage = function (ev) {
                    let [ia, index, value] = ev.data;
                    ia = new Int32Array(ia.buffer);
                    let result = Atomics.wait(ia, index, value);
                    postMessage(result);
                };
                `;
                const ret = typeof URL.createObjectURL === 'undefined' ? "data:application/javascript," + encodeURIComponent(val) : URL.createObjectURL(new Blob([val], { type: "text/javascript" }));
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
                getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
            },
            memory: memory || new WebAssembly.Memory({initial:34,maximum:16384,shared:true}),
        };
        return {
            __proto__: null,
            "./telepathy_core_bg.js": import0,
        };
    }

    const lAudioContext = (typeof AudioContext !== 'undefined' ? AudioContext : (typeof webkitAudioContext !== 'undefined' ? webkitAudioContext : undefined));
    function wasm_bindgen_1300b5e4906317af___convert__closures_____invoke______(arg0, arg1) {
        wasm.wasm_bindgen_1300b5e4906317af___convert__closures_____invoke______(arg0, arg1);
    }

    function wasm_bindgen_1300b5e4906317af___convert__closures_____invoke_______1_(arg0, arg1) {
        wasm.wasm_bindgen_1300b5e4906317af___convert__closures_____invoke_______1_(arg0, arg1);
    }

    function wasm_bindgen_1300b5e4906317af___convert__closures_____invoke_______2_(arg0, arg1) {
        wasm.wasm_bindgen_1300b5e4906317af___convert__closures_____invoke_______2_(arg0, arg1);
    }

    function wasm_bindgen_1300b5e4906317af___convert__closures_____invoke_______3_(arg0, arg1) {
        wasm.wasm_bindgen_1300b5e4906317af___convert__closures_____invoke_______3_(arg0, arg1);
    }

    function wasm_bindgen_1300b5e4906317af___convert__closures_____invoke_______4_(arg0, arg1) {
        wasm.wasm_bindgen_1300b5e4906317af___convert__closures_____invoke_______4_(arg0, arg1);
    }

    function wasm_bindgen_1300b5e4906317af___convert__closures_____invoke___web_sys_c3027c506311447c___features__gen_Event__Event_____(arg0, arg1, arg2) {
        wasm.wasm_bindgen_1300b5e4906317af___convert__closures_____invoke___web_sys_c3027c506311447c___features__gen_Event__Event_____(arg0, arg1, arg2);
    }

    function wasm_bindgen_1300b5e4906317af___convert__closures_____invoke___web_sys_c3027c506311447c___features__gen_CloseEvent__CloseEvent_____(arg0, arg1, arg2) {
        wasm.wasm_bindgen_1300b5e4906317af___convert__closures_____invoke___web_sys_c3027c506311447c___features__gen_CloseEvent__CloseEvent_____(arg0, arg1, arg2);
    }

    function wasm_bindgen_1300b5e4906317af___convert__closures________invoke___web_sys_c3027c506311447c___features__gen_MessageEvent__MessageEvent_____(arg0, arg1, arg2) {
        wasm.wasm_bindgen_1300b5e4906317af___convert__closures________invoke___web_sys_c3027c506311447c___features__gen_MessageEvent__MessageEvent_____(arg0, arg1, arg2);
    }

    function wasm_bindgen_1300b5e4906317af___convert__closures_____invoke___wasm_bindgen_1300b5e4906317af___JsValue_____(arg0, arg1, arg2) {
        wasm.wasm_bindgen_1300b5e4906317af___convert__closures_____invoke___wasm_bindgen_1300b5e4906317af___JsValue_____(arg0, arg1, arg2);
    }

    function wasm_bindgen_1300b5e4906317af___convert__closures_____invoke___wasm_bindgen_1300b5e4906317af___JsValue__wasm_bindgen_1300b5e4906317af___JsValue_____(arg0, arg1, arg2, arg3) {
        wasm.wasm_bindgen_1300b5e4906317af___convert__closures_____invoke___wasm_bindgen_1300b5e4906317af___JsValue__wasm_bindgen_1300b5e4906317af___JsValue_____(arg0, arg1, arg2, arg3);
    }


    const __wbindgen_enum_BinaryType = ["blob", "arraybuffer"];


    const __wbindgen_enum_ReadableStreamType = ["bytes"];


    const __wbindgen_enum_RequestCache = ["default", "no-store", "reload", "no-cache", "force-cache", "only-if-cached"];


    const __wbindgen_enum_RequestCredentials = ["omit", "same-origin", "include"];


    const __wbindgen_enum_RequestMode = ["same-origin", "no-cors", "cors", "navigate"];


    const __wbindgen_enum_WorkerType = ["classic", "module"];
    const IntoUnderlyingByteSourceFinalization = (typeof FinalizationRegistry === 'undefined')
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry(ptr => wasm.__wbg_intounderlyingbytesource_free(ptr >>> 0, 1));
    const IntoUnderlyingSinkFinalization = (typeof FinalizationRegistry === 'undefined')
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry(ptr => wasm.__wbg_intounderlyingsink_free(ptr >>> 0, 1));
    const IntoUnderlyingSourceFinalization = (typeof FinalizationRegistry === 'undefined')
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry(ptr => wasm.__wbg_intounderlyingsource_free(ptr >>> 0, 1));
    const StreamConfigFinalization = (typeof FinalizationRegistry === 'undefined')
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry(ptr => wasm.__wbg_streamconfig_free(ptr >>> 0, 1));
    const WorkerPoolFinalization = (typeof FinalizationRegistry === 'undefined')
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry(ptr => wasm.__wbg_workerpool_free(ptr >>> 0, 1));

    function addToExternrefTable0(obj) {
        const idx = wasm.__externref_table_alloc();
        wasm.__wbindgen_externrefs.set(idx, obj);
        return idx;
    }

    const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry(state => state.dtor(state.a, state.b));

    function debugString(val) {
        // primitive types
        const type = typeof val;
        if (type == 'number' || type == 'boolean' || val == null) {
            return  `${val}`;
        }
        if (type == 'string') {
            return `"${val}"`;
        }
        if (type == 'symbol') {
            const description = val.description;
            if (description == null) {
                return 'Symbol';
            } else {
                return `Symbol(${description})`;
            }
        }
        if (type == 'function') {
            const name = val.name;
            if (typeof name == 'string' && name.length > 0) {
                return `Function(${name})`;
            } else {
                return 'Function';
            }
        }
        // objects
        if (Array.isArray(val)) {
            const length = val.length;
            let debug = '[';
            if (length > 0) {
                debug += debugString(val[0]);
            }
            for(let i = 1; i < length; i++) {
                debug += ', ' + debugString(val[i]);
            }
            debug += ']';
            return debug;
        }
        // Test for built-in
        const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
        let className;
        if (builtInMatches && builtInMatches.length > 1) {
            className = builtInMatches[1];
        } else {
            // Failed to match the standard '[object ClassName]'
            return toString.call(val);
        }
        if (className == 'Object') {
            // we're a user defined class or Object
            // JSON.stringify avoids problems with cycles, and is generally much
            // easier than looping through ownProperties of `val`.
            try {
                return 'Object(' + JSON.stringify(val) + ')';
            } catch (_) {
                return 'Object';
            }
        }
        // errors
        if (val instanceof Error) {
            return `${val.name}: ${val.message}\n${val.stack}`;
        }
        // TODO we could test for more things here, like `Set`s and `Map`s.
        return className;
    }

    function getArrayF32FromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        return getFloat32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
    }

    function getArrayU8FromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
    }

    let cachedDataViewMemory0 = null;
    function getDataViewMemory0() {
        if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer !== wasm.memory.buffer) {
            cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
        }
        return cachedDataViewMemory0;
    }

    let cachedFloat32ArrayMemory0 = null;
    function getFloat32ArrayMemory0() {
        if (cachedFloat32ArrayMemory0 === null || cachedFloat32ArrayMemory0.buffer !== wasm.memory.buffer) {
            cachedFloat32ArrayMemory0 = new Float32Array(wasm.memory.buffer);
        }
        return cachedFloat32ArrayMemory0;
    }

    function getStringFromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        return decodeText(ptr, len);
    }

    let cachedUint8ArrayMemory0 = null;
    function getUint8ArrayMemory0() {
        if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.buffer !== wasm.memory.buffer) {
            cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
        }
        return cachedUint8ArrayMemory0;
    }

    function handleError(f, args) {
        try {
            return f.apply(this, args);
        } catch (e) {
            const idx = addToExternrefTable0(e);
            wasm.__wbindgen_exn_store(idx);
        }
    }

    function isLikeNone(x) {
        return x === undefined || x === null;
    }

    function makeClosure(arg0, arg1, dtor, f) {
        const state = { a: arg0, b: arg1, cnt: 1, dtor };
        const real = (...args) => {

            // First up with a closure we increment the internal reference
            // count. This ensures that the Rust closure environment won't
            // be deallocated while we're invoking it.
            state.cnt++;
            try {
                return f(state.a, state.b, ...args);
            } finally {
                real._wbg_cb_unref();
            }
        };
        real._wbg_cb_unref = () => {
            if (--state.cnt === 0) {
                state.dtor(state.a, state.b);
                state.a = 0;
                CLOSURE_DTORS.unregister(state);
            }
        };
        CLOSURE_DTORS.register(real, state, state);
        return real;
    }

    function makeMutClosure(arg0, arg1, dtor, f) {
        const state = { a: arg0, b: arg1, cnt: 1, dtor };
        const real = (...args) => {

            // First up with a closure we increment the internal reference
            // count. This ensures that the Rust closure environment won't
            // be deallocated while we're invoking it.
            state.cnt++;
            const a = state.a;
            state.a = 0;
            try {
                return f(a, state.b, ...args);
            } finally {
                state.a = a;
                real._wbg_cb_unref();
            }
        };
        real._wbg_cb_unref = () => {
            if (--state.cnt === 0) {
                state.dtor(state.a, state.b);
                state.a = 0;
                CLOSURE_DTORS.unregister(state);
            }
        };
        CLOSURE_DTORS.register(real, state, state);
        return real;
    }

    function passArrayJsValueToWasm0(array, malloc) {
        const ptr = malloc(array.length * 4, 4) >>> 0;
        for (let i = 0; i < array.length; i++) {
            const add = addToExternrefTable0(array[i]);
            getDataViewMemory0().setUint32(ptr + 4 * i, add, true);
        }
        WASM_VECTOR_LEN = array.length;
        return ptr;
    }

    function passStringToWasm0(arg, malloc, realloc) {
        if (realloc === undefined) {
            const buf = cachedTextEncoder.encode(arg);
            const ptr = malloc(buf.length, 1) >>> 0;
            getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
            WASM_VECTOR_LEN = buf.length;
            return ptr;
        }

        let len = arg.length;
        let ptr = malloc(len, 1) >>> 0;

        const mem = getUint8ArrayMemory0();

        let offset = 0;

        for (; offset < len; offset++) {
            const code = arg.charCodeAt(offset);
            if (code > 0x7F) break;
            mem[ptr + offset] = code;
        }
        if (offset !== len) {
            if (offset !== 0) {
                arg = arg.slice(offset);
            }
            ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
            const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
            const ret = cachedTextEncoder.encodeInto(arg, view);

            offset += ret.written;
            ptr = realloc(ptr, len, offset, 1) >>> 0;
        }

        WASM_VECTOR_LEN = offset;
        return ptr;
    }

    function takeFromExternrefTable0(idx) {
        const value = wasm.__wbindgen_externrefs.get(idx);
        wasm.__externref_table_dealloc(idx);
        return value;
    }

    let cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : undefined);
    if (cachedTextDecoder) cachedTextDecoder.decode();

    function decodeText(ptr, len) {
        return cachedTextDecoder.decode(getUint8ArrayMemory0().slice(ptr, ptr + len));
    }

    const cachedTextEncoder = (typeof TextEncoder !== 'undefined' ? new TextEncoder() : undefined);

    if (cachedTextEncoder) {
        cachedTextEncoder.encodeInto = function (arg, view) {
            const buf = cachedTextEncoder.encode(arg);
            view.set(buf);
            return {
                read: arg.length,
                written: buf.length
            };
        };
    }

    let WASM_VECTOR_LEN = 0;

    let wasmModule, wasm;
    function __wbg_finalize_init(instance, module, thread_stack_size) {
        wasm = instance.exports;
        wasmModule = module;
        cachedDataViewMemory0 = null;
        cachedFloat32ArrayMemory0 = null;
        cachedUint8ArrayMemory0 = null;
        if (typeof thread_stack_size !== 'undefined' && (typeof thread_stack_size !== 'number' || thread_stack_size === 0 || thread_stack_size % 65536 !== 0)) {
            throw 'invalid stack size';
        }
        wasm.__wbindgen_start(thread_stack_size);
        return wasm;
    }

    async function __wbg_load(module, imports) {
        if (typeof Response === 'function' && module instanceof Response) {
            if (typeof WebAssembly.instantiateStreaming === 'function') {
                try {
                    return await WebAssembly.instantiateStreaming(module, imports);
                } catch (e) {
                    const validResponse = module.ok && expectedResponseType(module.type);

                    if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                        console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                    } else { throw e; }
                }
            }

            const bytes = await module.arrayBuffer();
            return await WebAssembly.instantiate(bytes, imports);
        } else {
            const instance = await WebAssembly.instantiate(module, imports);

            if (instance instanceof WebAssembly.Instance) {
                return { instance, module };
            } else {
                return instance;
            }
        }

        function expectedResponseType(type) {
            switch (type) {
                case 'basic': case 'cors': case 'default': return true;
            }
            return false;
        }
    }

    function initSync(module, memory) {
        if (wasm !== undefined) return wasm;

        let thread_stack_size
        if (module !== undefined) {
            if (Object.getPrototypeOf(module) === Object.prototype) {
                ({module, memory, thread_stack_size} = module)
            } else {
                console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
            }
        }

        const imports = __wbg_get_imports(memory);
        if (!(module instanceof WebAssembly.Module)) {
            module = new WebAssembly.Module(module);
        }
        const instance = new WebAssembly.Instance(module, imports);
        return __wbg_finalize_init(instance, module, thread_stack_size);
    }

    async function __wbg_init(module_or_path, memory) {
        if (wasm !== undefined) return wasm;

        let thread_stack_size
        if (module_or_path !== undefined) {
            if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
                ({module_or_path, memory, thread_stack_size} = module_or_path)
            } else {
                console.warn('using deprecated parameters for the initialization function; pass a single object instead')
            }
        }

        if (module_or_path === undefined && script_src !== undefined) {
            module_or_path = script_src.replace(/\.js$/, "_bg.wasm");
        }
        const imports = __wbg_get_imports(memory);

        if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
            module_or_path = fetch(module_or_path);
        }

        const { instance, module } = await __wbg_load(await module_or_path, imports);

        return __wbg_finalize_init(instance, module, thread_stack_size);
    }

    return Object.assign(__wbg_init, { initSync }, exports);
})({ __proto__: null });
