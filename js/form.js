import { isEscKey } from './util.js';
import { pristine, refreshPristine } from './validate.js';
import { setDefaultScale, onScaleClick } from './scale.js';
import { setDefaultEffects } from './effects.js';
import { sendData } from './sending-form.js';

const imageInput = document.querySelector('.img-upload__input');
const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');
const scale = overlay.querySelector('.img-upload__scale');

const isNoFocus = (evt) =>
  !evt.target.classList.contains('text__hashtags') &&
  !evt.target.classList.contains('text__description');

const onInput = (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    sendData();
  }
};

const onFormCloseButtonClick = () => {
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');

  form.reset();
  imageInput.value = '';

  refreshPristine();
  form.removeEventListener('submit', onInput);
  uploadCancel.removeEventListener('click', onFormCloseButtonClick);
  scale.removeEventListener('click', onScaleClick);
};

const onClosingButtonClick = () => {
  onFormCloseButtonClick();
  uploadCancel.removeEventListener('click', onFormCloseButtonClick);
};

const onEscClick = (evt) => {
  if (isEscKey(evt) && isNoFocus(evt)) {
    onFormCloseButtonClick();
    uploadCancel.removeEventListener('click', onFormCloseButtonClick);
    document.removeEventListener('keydown', onEscClick);
    scale.removeEventListener('click', onScaleClick);
  }
};

const onImgUploadFieldСhange = () => {
  setDefaultScale();
  scale.addEventListener('click', onScaleClick);
  setDefaultEffects();
  overlay.classList.remove('hidden');

  document.body.classList.add('modal-open');

  uploadCancel.addEventListener('click', onClosingButtonClick);
  document.addEventListener('keydown', onEscClick);
  form.addEventListener('submit', onInput);
};

imageInput.addEventListener('input', onImgUploadFieldСhange);

export { onEscClick, onFormCloseButtonClick};
