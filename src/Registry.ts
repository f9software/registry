const store: {[key: string]: any} = {};

/**
 * Get a value from the registry.
 * @param {string} key
 * @returns {any}
 */
export const get = (key: string): any => {
    return store[key];
};

/**
 * Set a value in the registry.
 * @param {string} key
 * @param value
 */
export const set = (key: string, value: any): void => {
    store[key] = value;
};
