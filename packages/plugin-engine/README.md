# PluginEngine

PluginEngine is a TypeScript library designed for extensible application architecture.
It employs a Publish-Subscribe pattern with middleware support, allowing for a decoupled,
event-driven architecture.

```typescript
import { PluginEngine, Plugin } from 'plugin-engine';

// Initialize PluginEngine
const engine = new PluginEngine<{ httpRequest: { request: string } }>();

// Define a logging plugin with 'enter' hook
const logPlugin: Plugin<{ request: string }> = {
  name: 'Log',
  enter: (data, context) => {
    console.log(`Request: ${data.request}`);
    // 'context.abortWith' can be used to short-circuit the event chain
  },
};

// Register the plugin to an 'httpRequest' event
engine.on('httpRequest', logPlugin);

// Define a modification plugin with 'enter' hook
const modifyPlugin: Plugin<{ request: string }> = {
  name: 'Modify',
  enter: (data) => {
    data.request = `Modified: ${data.request}`;
    return data;
  },
};

// Register the modification plugin
engine.on('httpRequest', modifyPlugin);

// Execute the 'httpRequest' event
engine.exec('httpRequest', { request: 'GET /home' }).then((result) => {
  console.log(`Final Request: ${result.request}`);
});
// Output: "Request: GET /home", "Request: Modified: GET /home", "Final Request: Modified: GET /home"
```

### Key Concepts:

- **enter and exit hooks:** Plugins can have `enter` and `exit` hooks that run when an event is executed.

- **abortWith:** Within the `context` argument in the plugin, you can use `abortWith` to 
immediately stop the processing of subsequent plugins and return the current state of the event data.

- **Asynchronous Execution:** The `exec` method returns a promise, allowing for asynchronous event handling.

- **Error Handling:** Plugins can define an `error` method to handle exceptions gracefully.
PluginEngine?
