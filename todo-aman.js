// Debounce function
function debounce(func, delay) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  }
  
  // Throttle function
  function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function (...args) {
      const context = this;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(() => {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  }
  
  // Deep copy function
  function deepCopy(obj, hash = new WeakMap()) {
    if (Object(obj) !== obj) return obj;
    if (hash.has(obj)) return hash.get(obj);
    const result = Array.isArray(obj) ? [] : {};
    hash.set(obj, result);
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = deepCopy(obj[key], hash);
      }
    }
    return result;
  }