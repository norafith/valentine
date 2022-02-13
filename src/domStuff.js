import { getGifUrl } from "./fetchStuff";

function renderGif() {
  const gifElement = document.querySelector(".intro.gif");
  getGifUrl().then((src) => (gifElement.src = src));
}

function initRotationLogic() {
  const frontCard = document.querySelector(".front.card");
  let rotationFlag = false;

  frontCard.addEventListener("click", (e) => {
    if (rotationFlag) return;
    rotationFlag = true;
    frontCard.classList.toggle("active");
    setTimeout(() => (rotationFlag = false), 1500); // 1500ms is animation duration
    setTimeout(() => {
      frontCard.classList.toggle("internal-shadow");
      document.querySelectorAll(".front.card > *").forEach((element) => {
        element.classList.toggle("hidden");
      });
    }, 750); // 750ms is half of 1.5s (rotate animation duration)

    const cardContainer = document.querySelector(".card-container");

    cardContainer.classList.toggle("active");

    if (!Array.from(frontCard.classList).includes("active")) renderGif();
  });
}

export { initRotationLogic, renderGif };
