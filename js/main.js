function randomValue (from, to) {
  if(from<0) from = 0; //диапазон может быть только положительный, включая ноль
  if(from>=to) return -1; //возвращает -1 если начальное число диапазона меньше конечного
  from = Math.ceil(from);
  to = Math.floor(to);
  return Math.floor(Math.random() * (to - from)) + from;
}
let fitLength = function(str, max_len){
  return str.length <= max_len;
}
