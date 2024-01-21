let btn = document.querySelector("button");
let dv = document.querySelector("div");
let h3 = document.querySelector("h3");
btn.addEventListener("click", function() {
    console.log("Generate Random Color");
    let col = randomColorGenerator();
    dv.style.backgroundColor = col;
    h3.innerText = col;
});

function randomColorGenerator() {
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let backColor = `rgb(${red}, ${green}, ${blue})`;
    return backColor;
}
