const body = document.querySelector("body");
const container = document.createElement("div");

// Ask for num of squares per side
function getSidesNum() {
    let sides;
    do {
        sides = Number.parseInt(prompt("Num of squares per side: "));
    } while(!Number.isInteger(sides) || sides < 1);

    return sides;
}

let sides = getSidesNum();

container.style.width = `512px`;
container.style.height = `512px`;

container.style.margin = "auto";
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "center";
container.style.border = "solid 2px black"

// (16*)x16
// 960 / X - 2

let calculatedSquare = 512 / sides - 2;
for (let i = 1; i <= sides**2; i++) {
    let square = document.createElement("div");
    square.classList.add("active");
    square.style.width = `${calculatedSquare}px`;
    square.style.height = `${calculatedSquare}px`;
    square.style.borderStyle = "solid";
    square.style.borderColor = "gray";
    square.style.borderWidth = "1px";
    square.style.flex = "auto";
    container.appendChild(square);
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "red";
    })
}


body.appendChild(container);