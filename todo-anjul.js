// Debounce function
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Deep copy function
function deepCopy(obj, visited = new WeakMap()) {
    if (obj === null || typeof obj !== 'object') return obj;

    if (visited.has(obj)) return visited.get(obj);

    const copy = Array.isArray(obj) ? [] : {};
    visited.set(obj, copy);

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key], visited);
        }
    }

    return copy;
}
