function randomValue (from, to) {
  if (from < 0) {
    from = 0;
  } // диапазон может быть только положительный, включая ноль
  if (from >= to) {
    return -1;
  } // возвращает -1 если начальное число диапазона меньше конечного
  from = Math.ceil(from);
  to = Math.floor(to);
  return Math.floor(Math.random() * (to - from)) + from;
}

function fitLength (str, maxLen) {
  return str.length <= maxLen;
}

const isEscKey = (evt) => evt.keyCode === 27;

const DELAY = 500;

const debounce = (cb) => {
  let lastTimeout = null;
  return (...args) => {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(() => {
      cb(...args);
    }, DELAY);
  };
};

export { randomValue, fitLength, isEscKey, debounce };
