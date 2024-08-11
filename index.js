const body = document.querySelector("body");
const container = document.createElement("div");

container.style.width = "480px";
container.style.margin = "auto";
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "center";
container.style.border = "solid 2px black"

for (let i = 1; i <= 256; i++) {
    let square = document.createElement("div");
    square.classList.add("active");
    square.style.width = "28px";
    square.style.height = "28px";
    square.style.borderStyle = "solid";
    square.style.borderColor = "gray";
    square.style.borderWidth = "1px";
    container.appendChild(square);
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "red";
    })
}


body.appendChild(container);