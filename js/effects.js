const EffectParameter = {
  MAX_CHROME_VALUE: 1,
  MAX_SEPIA_VALUE: 1,
  MAX_INVERT_VALUE: 100,
  MAX_BLUR_VALUE: 3,
  MAX_BRIGHTNESS_VALUE: 3,
  RADIX: 10,
  STEP: 0.01,
  INVERT_STEP: 1,
};

const Slider = {
  MIN: 0,
  MAX: 100,
  STEP: 1,
};

const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const preview = overlay.querySelector('.img-upload__preview');
const slider = form.querySelector('.effect-level__slider');
const effectsList = form.querySelector('.effects__list');
const image = preview.querySelector('img');
const effectLevel = form.querySelector('.img-upload__effect-level');
const defaultImageClass = image.classList[0];

let effectLevelValue = form.querySelector('.effect-level__value').value;
let currentEffect = 'none';

noUiSlider.create(slider, {
  range: {
    min: Slider.MIN,
    max: Slider.MAX,
  },
  start: Slider.MAX,
  step: Slider.STEP,
  connect: 'lower',
});

const effects = {
  none: () => {
    effectLevel.classList.add('visually-hidden');
    return 'none';
  },
  chrome: () => {
    effectLevel.classList.remove('visually-hidden');
    return `grayscale(${
      parseInt(effectLevelValue, EffectParameter.RADIX) * EffectParameter.STEP
    })`;
  },
  sepia: () => {
    effectLevel.classList.remove('visually-hidden');
    return `sepia(${parseInt(effectLevelValue, EffectParameter.RADIX) * EffectParameter.STEP})`;
  },
  marvin: () => {
    effectLevel.classList.remove('visually-hidden');
    return `invert(${
      parseInt(effectLevelValue, EffectParameter.RADIX) * EffectParameter.INVERT_STEP
    }%)`;
  },
  phobos: () => {
    effectLevel.classList.remove('visually-hidden');
    return `blur(${
      parseInt(effectLevelValue, EffectParameter.RADIX) *
      EffectParameter.STEP *
      EffectParameter.MAX_BLUR_VALUE
    }px)`;
  },
  heat: () => {
    effectLevel.classList.remove('visually-hidden');
    const effectMin = Slider.MAX / (EffectParameter.MAX_BRIGHTNESS_VALUE - 1);
    return `brightness(${
      (effectMin + parseInt(effectLevelValue, EffectParameter.RADIX)) *
      EffectParameter.STEP *
      (EffectParameter.MAX_BRIGHTNESS_VALUE - 1)
    })`;
  },
};

const setDefaultEffects = () => {
  effectLevel.classList.add('visually-hidden');
  form.querySelector('#effect-none').checked = true;
  image.style.filter = effects.none;
  image.className = defaultImageClass;
};

const setEffect = (effect) => {
  image.style.filter=effects[effect.replace('effects__preview--','')]();
};

const onEffectsClick = (evt) => {
  let target = evt.target;
  if (target.classList.contains('effects__label')) {
    target = evt.target.querySelector('span');
  }
  if (target.classList.contains('effects__preview')) {
    if (currentEffect !== '') {
      image.classList.remove(currentEffect);
    }
    slider.noUiSlider.set(Slider.MAX);
    effectLevelValue = Slider.MAX;
    image.classList.add(currentEffect);
    currentEffect = target.classList[1];
    setEffect(currentEffect);
  }
};

const onSliderElementChange = () => {
  effectLevelValue = slider.noUiSlider.get();
  setEffect(currentEffect);
};

slider.noUiSlider.on('change', onSliderElementChange);

effectsList.addEventListener('click', onEffectsClick);

export { setDefaultEffects };
