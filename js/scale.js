const RADIX = 10;

const Scale = {
  STEP: 25,
  MIN_VALUE: 25,
  MAX_VALUE: 100,
};

const overlay = document.querySelector('.img-upload__overlay');
const image = overlay
  .querySelector('.img-upload__preview')
  .querySelector('img');
const scale = overlay.querySelector('.img-upload__scale');
const scaleValue = scale.querySelector('.scale__control--value');

const setDefaultScale = () => {
  scaleValue.value = `${Scale.MAX_VALUE}%`;
  image.style.transform=`scale(${1})`;
};

const setCorrectValue = (scaleValue) =>
  Math.min(Math.max(Scale.MIN_VALUE, scaleValue), Scale.MAX_VALUE);

const onScaleClick = (evt) => {
  const target = evt.target;

  if (target.tagName === 'BUTTON') {
    let value = scaleValue.value;
    value = scaleValue.value.substr(0, value.length - 1);

    const scaleCoefficient = target.classList.contains(
      'scale__control--smaller'
    )
      ? -1
      : 1;

    value = parseInt(value, RADIX) + Scale.STEP * scaleCoefficient;
    value = setCorrectValue(value);

    image.style.transform=`scale(${value/Scale.MAX_VALUE})`;
    scaleValue.value = `${value}%`;
  }
};

export { setDefaultScale, onScaleClick };
