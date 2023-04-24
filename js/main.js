// const refs = {
//   allBtn: document.querySelectorAll(".btn"),
//   btnContainer: document.querySelector(".wrrap-btn"),
// };

// // refs.allBtn.forEach((btn) => {
// //   btn.addEventListener("click", onClickBtn);
// // });

// refs.btnContainer.addEventListener("click", onClickBtn);

// function onClickBtn(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }
//   const bgValue = event.target.dataset.value;
//   changeBodyBg(bgValue);
//   console.log("click");
// }

// function changeBodyBg(colorBg) {
//   document.body.style.backgroundColor = colorBg;
// }

// document.querySelector(".ded").addEventListener("click", () => {
//   alert("on click ded");
// });

// document.querySelector(".papa").addEventListener("click", () => {
//   alert("on click papa");
// });

// document.querySelector(".oleg").addEventListener("click", () => {
//   alert("don't touch with my Oleg");
// });

const refs = {
  input: document.querySelector(".inputValidate"),
};

refs.input.addEventListener("input", handleInputValue);

function handleInputValue(event) {
  const inputEl = event.currentTarget;
  if (inputEl.value.length === 6) {
    inputEl.classList.add("validate");
    inputEl.classList.remove("no-validate");
    return;
  }
  if (!inputEl.classList.contains("no-validate")) {
    inputEl.classList.add("no-validate");
    if(inputEl.classList.contains("no-validate")){
        inputEl.classList.remove("validate");
    }
  }
}
