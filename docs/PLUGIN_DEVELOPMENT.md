# Hooks and plugin development

GDPSnode includes a lightweight plugin framework so you can extend the server without modifying the core code directly.

## Plugin directory

Plugins are discovered from the `plugins/` folder automatically. The system also supports nested plugin folders that expose an `index.js` file.

Valid locations:

```text
plugins/my-plugin.js
plugins/my-plugin/index.js
```

## Basic plugin structure

```js
module.exports = {
  name: 'example-plugin',
  metadata: {
    version: '1.0.0',
    description: 'Example GDPSnode plugin.'
  },
  install(api) {
    api.registerHook('server:ready', ({ app, config }) => {
      console.log('Plugin loaded on port', config.port);
      return { app, config };
    });

    api.addEndpoint({
      method: 'get',
      path: '/plugin/ping',
      handler: (req, res) => {
        res.json({ ok: true, message: 'pong' });
      }
    });
  }
};
```

## Available API

When a plugin installs, it receives an `api` object with useful helpers:

- `registerHook(name, callback)`
- `trigger(name, payload, context)`
- `triggerAsync(name, payload, context)`
- `use(middleware)`
- `addEndpoint({ method, path, handler, middleware })`
- `addDashboardRoute({ method, path, handler, middleware })`
- `app`
- `db`
- `config`
- `utils`
- `hooks`

## Lifecycle hooks

Hook names are just strings, and they are triggered through the central hook registry. Common ones include:

- `server:before_start`
- `server:ready`
- `server:listening`
- `request:before`
- `request:after`
- `account:created`
- `account:login`
- `level:uploaded`
- `comment:submitted`

Example:

```js
api.registerHook('account:created', (payload) => {
  console.log('New account created:', payload.accountID);
  return payload;
});
```

## Adding middleware

```js
api.use((req, res, next) => {
  if (req.path === '/debug') {
    console.log('Debug middleware ran');
  }
  next();
});
```

Middleware is mounted through the main Express app, so it can inspect or modify requests before they reach the rest of the server.

## Adding custom endpoints

```js
api.addEndpoint({
  method: 'get',
  path: '/plugins/custom-status',
  handler: (req, res) => {
    res.json({ ok: true, plugin: 'custom-status' });
  }
});
```

This lets plugin authors expose custom gameplay or admin APIs without altering the route registry in core files.

## Adding dashboard routes

```js
api.addDashboardRoute({
  method: 'get',
  path: '/plugin-status',
  handler: (req, res) => {
    res.json({ plugin: 'example-plugin', loaded: true });
  }
});
```

The dashboard base path is automatically applied so that the route resolves under the configured dashboard route.

## Best practices

- Keep plugins small and focused on one job.
- Avoid mutating core files when a hook or route can do the job.
- Return payloads consistently from hooks when you want them to flow through other listeners.
- Put plugin metadata in the module so it is easy to inspect in logs and dashboards.
- Handle errors gracefully: do not crash the whole server because of one plugin bug.

## Example plugin directory

The repository includes a basic example plugin at `plugins/example-plugin.js`.

## Related docs

- [First steps and setup](SETUP.md)
- [GDPS Switcher setup](GDPS_SWITCHER.md)
- [Contributing to the project](CONTRIBUTING.md)
