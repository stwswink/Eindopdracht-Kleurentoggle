const background = document.querySelector(".background");
const menu = document.querySelector(".menu");
const burger = document.querySelector(".burger");
let textBackground = document.querySelector(".text");


burger.addEventListener("mouseover", () => {
    menu.classList.toggle("visible");
})

const backgroundHome = document.querySelector(".home");

backgroundHome.addEventListener("click", () => {
    background.className = "background-home";
    menu.classList.remove("visible");
    textBackground.innerHTML = "This is a grey background.";
})

const backgroundgRed = document.querySelector(".red");

backgroundgRed.addEventListener("click", () => {
    background.className = "background-red";
    menu.classList.remove("visible");
    textBackground.innerHTML = "This is a red background.";

})

const backgroundOrange = document.querySelector(".orange");

backgroundOrange.addEventListener("click", () => {
    background.className = "background-orange";
    menu.classList.remove("visible");
    textBackground.innerHTML = "This is an orange background.";

})

const backgroundPurple = document.querySelector(".purple");

backgroundPurple.addEventListener("click", () => {
    background.className = "background-purple";
    menu.classList.remove("visible");
    textBackground.innerHTML = "This is a purple background.";
})

const backgroundGreen = document.querySelector(".green");

backgroundGreen.addEventListener("click", () => {
    background.className = "background-green";
    menu.classList.remove("visible");
    textBackground.innerHTML = "This is a green background.";
})