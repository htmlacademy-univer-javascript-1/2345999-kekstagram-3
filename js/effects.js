const SCALE_STEP = 25;
const MAX_SCALE = 100;
const MIN_SCALE = 25;
const DEFAULT_SCALE = 100;

const imgUpload = document.querySelector('.img-upload');
const imgPreview = imgUpload.querySelector('.img-upload__preview img');
const scaleControlValue = imgUpload.querySelector('.scale__control--value');
const scaleControlSmaller = imgUpload.querySelector('.scale__control--smaller');
const scaleControlBigger = imgUpload.querySelector('.scale__control--bigger');
const effectsList = imgUpload.querySelector('.effects__list');
const effectsPreview = imgUpload.querySelector('.img-upload__preview');
const effectsClasses = {
  'none': '',
  'chrome': 'effects__preview--chrome',
  'sepia': 'effects__preview--sepia',
  'marvin': 'effects__preview--marvin',
  'phobos': 'effects__preview--phobos',
  'heat': 'effects__preview--heat',
};

let currentScale = DEFAULT_SCALE;
let currentEffect = 'none';

function updateScale(scale) {
  currentScale = scale;
  imgPreview.style.transform = `scale(${currentScale / 100})`;
  scaleControlValue.value = `${currentScale}%`;
}

scaleControlSmaller.addEventListener('click', () => {
  if (currentScale > MIN_SCALE) {
    updateScale(currentScale - SCALE_STEP);
  }
});

scaleControlBigger.addEventListener('click', () => {
  if (currentScale < MAX_SCALE) {
    updateScale(currentScale + SCALE_STEP);
  }
});

scaleControlValue.addEventListener('change', () => {
  const scale = parseInt(scaleControlValue.value, 10);
  if (scale >= MIN_SCALE && scale <= MAX_SCALE) {
    updateScale(scale);
  } else {
    scaleControlValue.value = `${currentScale}%`;
  }
});

effectsList.addEventListener('change', (evt) => {
  const effect = evt.target.value;
  if (effect !== currentEffect) {
    effectsPreview.classList.remove(effectsClasses[currentEffect]);
    effectsPreview.classList.add(effectsClasses[effect]);
    currentEffect = effect;
  }
});
