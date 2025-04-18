function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  
  function throttle(func, limit) {
    let lastCall = 0;
    return function (...args) {
      const now = Date.now();
      if (now - lastCall >= limit) {
        lastCall = now;
        func.apply(this, args);
      }
    };
  }
  
  function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
  
    if (Array.isArray(obj)) {
      return obj.map(item => deepCopy(item));
    }
  
    const copy = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepCopy(obj[key]);
      }
    }
    return copy;
  }


  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Type to search (debounced)...';
  input.style.display = 'block';
  input.style.marginBottom = '20px';
  document.body.prepend(input);
  
  const debouncedSearch = debounce((e) => {
    console.log('Debounced search:', e.target.value);
  }, 500);
  
  input.addEventListener('input', debouncedSearch);
  


  const throttledScroll = throttle(() => {
    console.log('Throttled scroll at:', new Date().toLocaleTimeString());
  }, 1000);
  
  window.addEventListener('scroll', throttledScroll);
  
  const filler = document.createElement('div');
  filler.style.height = '2000px';
  filler.innerText = 'Scroll me!';
  document.body.appendChild(filler);
  

  const original = {
    user: 'Riya',
    data: {
      age: 10,
      hobbies: ['reading', 'sports']
    }
  };
  
  const copied = deepCopy(original);
  copied.data.age = 30;
  copied.data.hobbies.push('cycling');
  
  console.log('Original:', original);
  console.log('Copied:', copied);