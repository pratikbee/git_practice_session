// Debounce function
function debounce(func, delay) {
  let timer;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, delay);
  };
}

const sayHello = () => console.log("Hello!");
const debouncedHello = debounce(sayHello, 1000);


// Throttle function
function throttle(func, limit) {
  let lastTime = 0;

  return function () {
    const now = Date.now();
    if (now - lastTime >= limit) {
      func();
      lastTime = now;
    }
  };
}

const sayHi = () => console.log("Hi!");
const throttledHi = throttle(sayHi, 1000);


// Deep copy function (without JSON.parse/stringify)
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  let copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }

  return copy;
}

const original = { a: 1, b: { c: 2 } };
const copied = deepCopy(original);

copied.b.c = 99;
console.log(original.b.c); // Output will still be 2
