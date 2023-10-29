/**
 * The PluginEngine class provides a structured way to allow extensibility
 * within an application by implementing a Publish-Subscribe pattern with middleware support.
 * This pattern is crucial for creating loosely coupled systems,
 * which is essential for maintaining a scalable and maintainable
 * codebase.
 *
 * By utilizing a middleware system with event-driven architecture,
 * different parts of an application can communicate with each other in a decoupled fashion.
 * This enables easier feature additions and modifications without
 * causing a ripple effect of changes throughout the codebase.
 *
 * The PluginEngine class defines a mechanism to register event listeners (subscribers)
 * for different named events (publishers) with `enter` and `exit` hooks.
 *
 * An event with associated data can be executed using the `exec`
 * method, which invokes all the registered listeners for that event in
 * the order they were added, allowing for potential modifications to
 * the event data.
 *
 * The registered listeners can either process the events synchronously,
 * processing one event at a time in the order they are received, or
 * asynchronously, processing events in parallel as they are received.
 *
 * Additionally, a listener can terminate the processing of subsequent
 * listeners for a particular event and immediately return the current
 * state of the event data by utilizing the `abortWith` method
 * provided in the context argument to the listener.
 * This provides a mechanism to short-circuit the event processing
 * chain when a certain condition is met, like an authorization failure.
 *
 * The PluginEngine class provides a clean and intuitive API for extending
 * the functionality in a systematic way, while maintaining the
 * decoupling and scalability of the application architecture.
 */

// Event handler function in the PluginEngine system.
export type EventHandler<EventData> = (
  data: EventData,
  context: { abortWith: (data: EventData) => void }
) => MaybePromise<EventData | void>;

export type MiddlewareStep = 'enter' | 'exit';

// The plugin object definition
export type Plugin<EventData> = {
  name: string;
  enter?: EventHandler<EventData>;
  exit?: EventHandler<EventData>;
  error?: (error: unknown) => { message: string; [K: string]: unknown };
};

/**
 * Type representing an unsubscribe function.
 */
export type UnsubscribeListener = () => void;

/**
 * Class representing a minimalistic Publish-Subscribe system with middleware support.
 *
 * @template Events - An object type where keys are event names and values are the types of data associated with the events.
 */
export class PluginEngine<Events extends { [K: string]: unknown }> {
  /**
   * Object to hold the event listeners.
   */
  private listeners: {
    [K in keyof Events]?: Set<__RegisteredPlugin>;
  } = Object.create(null);

  /**
   * Method to exec an event and wait for possible data modifications from subscribers.
   *
   * @template EventName - The name of the event.
   * @template Events - Record representing all combinations of eventName:eventData
   * @param {EventName} eventName - The name of the event to exec.
   * @param {Events[EventName]} data - The data associated with the event.
   * @returns {Promise<Events[EventName]>} - The potentially modified event data.
   */
  async exec<EventName extends keyof Events>(
    eventName: EventName,
    data: Events[EventName]
  ): Promise<Events[EventName]> {
    //
    //
    const set = this.listeners[eventName];
    if (!set?.size) return data;
    const listeners = Array.from(set);

    const context = {
      abortWith: (data: Events[EventName]) => {
        throw new Exit(data);
      },
    };

    async function run(listener: __RegisteredPlugin, step: MiddlewareStep) {
      const { error } = listener.plugin;
      const exec = listener.plugin[step];

      try {
        if (!exec) return;

        const result = await exec(data, context);
        if (result !== undefined) {
          data = result;
        }
      } catch (e: any) {
        if (Exit.is(e)) {
          throw e;
        }

        if (typeof e?.stack === 'string') {
          e.stack = getStack(listener.plugin);
        }

        throw error ? error(e) : e;
      }
    }

    for (const listener of listeners) {
      try {
        await run(listener, 'enter');
      } catch (e) {
        if (Exit.is(e)) return e.data;
        throw e;
      }
    }

    for (let i = listeners.length - 1; i >= 0; i--) {
      try {
        await run(listeners[i], 'exit');
      } catch (e) {
        if (Exit.is(e)) return e.data;
        throw e;
      }
    }

    return data;
  }

  /**
   * Method to register a new event listener.
   *
   * @template EventName - The name of the event.
   * @template Events - Record representing all combinations of eventName:eventData
   * @param {EventName} eventName - The name of the event to listen for.
   * @param {Plugin<Events[EventName]>} plugin - The event handler.
   * will not be awaited to finish before going to the next middleware execution
   * @returns {UnsubscribeListener} - A function to unregister the listener.
   */
  on = <EventName extends Extract<keyof Events, string>>(
    eventName: EventName,
    plugin: Plugin<Events[EventName]>
  ): UnsubscribeListener => {
    const listeners = (this.listeners[eventName] =
      this.listeners[eventName] || new Set());

    const register: __RegisteredPlugin = {
      plugin,
      eventName,
    };

    listeners.add(register);

    return () => {
      this.listeners[eventName]?.delete(register);
    };
  };
}

// JS accepts anything to be thrown, not only errors (throw new Error(...))
// so, when we need to stop an execution, we can throw something, and
// catch on a try {..} catch(e) { }
// The Exit class is used here just to identify when we throw something special
class Exit<Data = any> {
  static symbol = Symbol('exit');
  symbol = Exit.symbol;
  data: Data;
  constructor(data: Data) {
    this.data = data;
  }
  static is = (value: any): value is Exit => {
    return value?.['symbol'] === Exit.symbol;
  };
}

type __RegisteredPlugin = {
  eventName: string;
  plugin: Plugin<any>;
};

function getStack(parent?: any) {
  const err = new Error();

  captureStackTrace(err, parent === undefined ? getStack : parent);

  return err.stack || '';
}

function captureStackTrace(error: any, parent?: any) {
  if (typeof Error.captureStackTrace === 'function') {
    return Error.captureStackTrace(error, parent);
  }

  const container = new Error();

  Object.defineProperty(error, 'stack', {
    configurable: true,
    get() {
      const { stack } = container;
      Object.defineProperty(this, 'stack', { value: stack });
      return stack;
    },
  });
}

type MaybePromise<T> = T | Promise<T>;
