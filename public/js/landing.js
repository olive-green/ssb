const first = document.getElementById("first");
const second = document.getElementById("second");

setInterval(() => {
    second.style.display = "block";
    first.style.display = "none";

}, 2000)

setInterval(() => {
    first.style.display = "block";
    second.style.display = "none";
},4000)