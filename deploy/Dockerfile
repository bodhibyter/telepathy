# syntax=docker/dockerfile:1
FROM nginx:1.27-alpine

COPY deploy/nginx-default.conf /etc/nginx/conf.d/default.conf
COPY deploy/web/ /usr/share/nginx/html/

# Verify the wasm-pack bundle the Dart code expects is present.
RUN set -eux; \
    test -f /usr/share/nginx/html/pkg/telepathy_core.js; \
    test -f /usr/share/nginx/html/pkg/telepathy_core_bg.wasm; \
    test -f /usr/share/nginx/html/main.dart.js

EXPOSE 8080
