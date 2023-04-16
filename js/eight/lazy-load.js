const refs = {
  lazyImages: document.querySelectorAll('[loading="lazy"]'),
};

console.log(refs.lazyImages);

refs.lazyImages.forEach((image) => {
  image.addEventListener("load", omImageLoad, { once: true });
});

refs.lazyImages.style.pointerEvents

function omImageLoad(e) {
  e.target.classList.add("appear");
}
