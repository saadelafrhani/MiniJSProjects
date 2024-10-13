const redButton = document.getElementById("red");
const greenButton = document.getElementById("green");
const yellowButton = document.getElementById("yellow");
const circle = document.getElementById("circle");

redButton.addEventListener("click", () => {
    circle.style.backgroundColor = "red";
});

greenButton.addEventListener("click", () => {
    circle.style.backgroundColor = "green";
});

yellowButton.addEventListener("click", () => {
    circle.style.backgroundColor = "yellow";
});

