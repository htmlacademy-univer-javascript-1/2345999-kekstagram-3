function randomValue (from, to) {
  if (from < 0) { from = 0; } // диапазон может быть только положительный, включая ноль
  if (from >= to) { return -1; } // возвращает -1 если начальное число диапазона меньше конечного
  from = Math.ceil(from);
  to = Math.floor(to);
  return Math.floor(Math.random() * (to - from)) + from;
}

// eslint-disable-next-line no-unused-vars
const fitLength = function (str, maxLen) {
  return str.length <= maxLen;
};

const photos = [];

for (let i = 1; i <= 25; i++) {
  photos.push({
    id: i,
    url: `photos/${i}.jpg`,
    description: `Фотография №${i}. Описание придумайте самостоятельно.`,
    likes: randomValue(15, 200),
    comments: randomValue(0, 200)
  });
}
