//  - вибір одного елементу
//  - вибір декількох

const refs = {
  tagsContainer: document.querySelector(".js-tags"),
};

// let selectorTag = null;

// refs.tagsContainer.addEventListener("click", onTagsContainerClick);

// function onTagsContainerClick(e) {
//   if (e.target.nodeName !== "BUTTON") {
//     return;
//   }
//   const currentActiveBtn = document.querySelector(".tags_btn-active");
//   //   if (currentActiveBtn) {
//   //     currentActiveBtn.classList.remove("tags_btn-active");
//   //   }

//   currentActiveBtn?.classList.remove("tags_btn-active");// ?. перевірка на null?
//   const nextActiveBtn = e.target;
//   nextActiveBtn.classList.add("tags_btn-active");
//   selectorTag = nextActiveBtn.dataset.value;

//   console.log(selectorTag);
// }

const selectorTags = new Set();
refs.tagsContainer.addEventListener("click", onTagsContainerClick);
function onTagsContainerClick(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  const btn = e.target;
  const isActive = btn.classList.contains("tags_btn-active");
  if (isActive) {
    selectorTags.delete(btn.dataset.value);
  } else {
    selectorTags.add(btn.dataset.value);
  }
  btn.classList.toggle("tags_btn-active");
}
