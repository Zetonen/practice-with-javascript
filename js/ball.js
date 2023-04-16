const refs = {
  ball: document.querySelector("#ball"),
  ballContainer: document.querySelector("#field"),
};
refs.ballContainer.addEventListener("click", onBallContainerClick);
function onBallContainerClick(e) {
  const containerEl = e.currentTarget;
  const containerRect = containerEl.getBoundingClientRect();
  const ball = refs.ball;
  let left, top;
  left =
    e.clientX -
    containerEl.clientLeft -
    containerRect.left -
    refs.ball.offsetWidth / 2;

  top =
    e.clientY -
    containerEl.clientTop -
    containerRect.top -
    refs.ball.offsetHeight / 2;
  if (top < 0) {
    top = 0;
  }
  if (left < 0) {
    left = 0;
  }
  if (top + ball.clientHeight > containerEl.clientHeight) {
    top = containerEl.clientHeight - ball.clientHeight;
  }
  if (left + ball.clientWidth > containerEl.clientWidth) {
    left = containerEl.clientWidth - ball.clientWidth;
  }
  ball.style.top = `${top}px`;
  ball.style.left = `${left}px`;
}

// function onBallContainerClick(e) {
//   const ball = refs.ball;
//   if (ball.style.pointerEvents !== "none") {
//     ball.style.transition = "2000ms transform";
//     ball.style.pointerEvents = "none";
//   }

//   const { x, y } = displacementCoordinatesBall(e);
//   ball.style.transform = `translate(${x}px, ${y}px)`;
// }
// function displacementCoordinatesBall(e) {
//   let x = e.offsetX - 20;
//   let y = e.offsetY - 20;
//   if (x < 0) {
//     x = 0;
//   } else if (x > 160) {
//     x = 160;
//   }
//   if (y < 0) {
//     y = 0;
//   } else if (y > 110) {
//     y = 110;
//   }
//   return { x, y };
// }
