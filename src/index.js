import "./styles.css";
import "./styles.scss";
import image from "./image.jpg";

const button = document.createElement("button");
button.innerText = "click me";

const input = document.createElement("input");
input.type = "text";

const img = new Image(); // 37kb
img.src = image;
img.width = 200;

document.body.appendChild(img);
document.body.appendChild(input);
document.body.appendChild(button);
