const refs = {
  tagsContainer: document.querySelector(".js-tags"),
};
const ACTIVE__BUTTONS__KEY = "active-buttons";

const selectorTags = [];

populateActiveBtn();
refs.tagsContainer.addEventListener("click", onTagsContainerClick);

function onTagsContainerClick(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  const btn = e.target;
  const isActive = btn.classList.contains("tags_btn-active");
  if (isActive) {
    const elemIndex = selectorTags.indexOf(btn.dataset.value);
    selectorTags.splice(elemIndex, 1);
  } else {
    selectorTags.push(btn.dataset.value);
  }
  setLocalStorage(ACTIVE__BUTTONS__KEY, JSON.stringify(selectorTags));
  btn.classList.toggle("tags_btn-active");
}

function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function populateActiveBtn() {
  const saveActiveBtns = localStorage.getItem(ACTIVE__BUTTONS__KEY);
  const activeBtns = JSON.parse(saveActiveBtns);

  activeBtns.forEach((element) => {
    const btnEl = document.querySelector(`[data-value="${element}"]`);
    btnEl.classList.add("tags_btn-active");
    selectorTags.push(element)
  });
}
