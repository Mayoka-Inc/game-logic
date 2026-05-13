/**
 * CentralEventBus handles asynchronous event publishing and subscription.
 * This decouples systems by allowing them to communicate via events.
 */
class CentralEventBus {
    constructor() {
        this.listeners = {};
    }

    /**
     * Subscribe to an event.
     * @param {string} event - Event name.
     * @param {Function} callback - Callback function.
     */
    on(event, callback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(callback);
    }

    /**
     * Publish an event.
     * @param {string} event - Event name.
     * @param {any} data - Event data.
     */
    emit(event, data) {
        if (!this.listeners[event]) return;
        
        // Asynchronous execution to avoid blocking the main loop
        // and to ensure true decoupling.
        this.listeners[event].forEach(callback => {
            setTimeout(() => callback(data), 0);
        });
    }
}

export const events = new CentralEventBus();
