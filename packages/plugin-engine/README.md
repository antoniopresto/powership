# PluginEngine

PluginEngine is designed to facilitate the extensibility of
applications by providing a simple and minimalist pattern
to manage events and middleware. It's crucial for creating
loosely coupled systems which are essential for maintaining
a scalable and maintainable codebase.

By leveraging a middleware system with an event-driven
architecture, different parts of an application can
communicate with each other in a decoupled way. This enables
easier feature additions and modifications without causing a
ripple effect of changes throughout the codebase.

### Defining Events

Define the events that your application will exec and the data associated with those events.

```typescript
type MyEvents = {
  userRegistered: { username: string; email: string };
  userLoggedIn: { username: string };
};
```

### Creating a Plugin

Create a plugin to handle an event. A plugin can have `enter`, `exit`, and `error` handlers.

```typescript
const userNotificationPlugin = {
  name: 'UserNotificationPlugin',
  enter: (data, context) => {
    // Send a welcome email on user registration
    if (data.username && data.email) {
      sendWelcomeEmail(data.email);
    }
  },
};
```

### Registering a Plugin

Register the plugin to handle a specific event.

```typescript
const engine = new PluginEngine<MyEvents>();

engine.on('userRegistered', userNotificationPlugin);
```

### Executing Events

Exec an event when a particular action occurs in your application.

```typescript
engine.exec('userRegistered', {
  username: 'johndoe',
  email: 'john.doe@example.com',
});
```

#### Express.js Example

```typescript
import express from 'express';
import { PluginEngine } from 'plugin-engine';

const app = express();
const engine = new PluginEngine<MyEvents>();

app.use((req, res, next) => {
  engine
    .exec('requestReceived', { req, res })
    .then(({ req, res }) => {
      next();
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

// Register a plugin
engine.on('requestReceived', authenticationPlugin);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

## FAQ

### How do I handle errors?

Use the `abortWith` method provided in the context argument to the event handler to terminate the processing of subsequent handlers for a particular event and immediately return the current state of the event data. This provides a mechanism to short-circuit the event processing chain when a certain condition is met.

```typescript
const errorHandlingPlugin = {
  name: 'ErrorHandlingPlugin',
  enter: (data, context) => {
    if (someErrorCondition) {
      context.abortWith({
        error: 'An error occurred',
      });
    }
  },
};

engine.on('someEvent', errorHandlingPlugin);
```

### Can I use PluginEngine on the client-side?

Yes, PluginEngine can be used on the client-side. The usage is the same as shown in the basic examples. The `exec`, `on`, and `abortWith` methods, along with the plugin structure, remain consistent whether you are working on the client-side or server-side.

### How to unregister a plugin?

When you register a plugin using the `on` method, it returns a function that you can call to unregister the plugin.

```typescript
const unregister = engine.on('someEvent', somePlugin);

// Later...
unregister();
```
