const form = document.querySelector('.img-upload__form');
const fileSelector = document.querySelector(
  '.img-upload__start input[type=file]'
);
const image = form.querySelector('.user-picture');
const effectPreviews = document.querySelectorAll('.effects__preview');

const onFileChanged = () => {
  const file = fileSelector.files[0];
  const newPicUrl = URL.createObjectURL(file);
  image.src = newPicUrl;

    effectPreviews.forEach((effect) => {
      effect.style.backgroundImage = `url(${newPicUrl})`;
    });
};

fileSelector.addEventListener('change', onFileChanged);
