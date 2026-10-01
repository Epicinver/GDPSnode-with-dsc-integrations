# GDPS Switcher setup

GDPSnode includes support for the GDPS Switcher service endpoint, so custom launchers or clients can discover the server and connect to it in a familiar way.

## What this is for

The switcher endpoint is used by the GDPS Switcher mod to want to query your server list or discover server metadata. In this project, it is exposed in the same style as the common Geometry Dash private-server ecosystem and is designed to be easy to integrate with community tooling.

## Endpoint

The main switcher endpoint is served from:

```text
/switcher/getInfo.php
```

This route is designed to behave like the typical GDPS Switcher metadata response used by the mod for a GDPS information endpoint.

## Typical local usage

Once the server is running, a client or switcher tool can point to your instance using the local server address and port:

```text
http://localhost:10000/switcher/getInfo.php
```

If you run the server behind a reverse proxy, make sure the public host and port match the values the launcher expects.

## Recommended setup

1. Run GDPSnode locally or on your VPS.
2. Ensure the port is open and your reverse proxy forwards traffic correctly.
3. Set the correct `DASHBOARD_PATH` and proxy values if you are using Nginx or Apache.
4. Make sure the server is reachable from the client or launcher over HTTP or HTTPS.
5. Use the hosted switcher URL in the launcher or switcher configuration.

## Reverse proxy example

If you expose GDPSnode behind Nginx or another proxy, ensure the public request is forwarded to the Node.js app and that headers are passed in a way that matches your server setup.

The following settings are especially relevant:

```env
TRUST_PROXY_HOPS=1
DASHBOARD_SECURE_COOKIES=1
```

## Notes for maintainers

The switcher route is a compatibility layer and should remain simple and predictable. If you add server metadata fields or adjust response payloads, make sure they remain compatible with the client and launcher ecosystem that depends on them.

## Related docs

- [First steps and setup](SETUP.md)
- [Hooks and plugin development](PLUGIN_DEVELOPMENT.md)
