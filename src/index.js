import "./index.css";
import Heart from "./heart.svg";
import { initRotationLogic, renderGif } from "./domStuff";

document.querySelector(".heart").src = Heart;

initRotationLogic();
renderGif();
