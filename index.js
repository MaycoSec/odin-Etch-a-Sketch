const body = document.querySelector("body");

// Ask for num of squares per side
function getSidesNum() {
    let sides;
    do {
        sides = Number.parseInt(prompt("Num of squares per side: "));
    } while (!Number.isInteger(sides) || sides < 1 || sides > 100);

    return sides;
}

function createGrid(sides) {
    const container = document.createElement("div");
    container.classList.add("grid");
    container.style.width = `512px`;
    container.style.height = `512px`;
    container.style.margin = "auto";
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.justifyContent = "center";
    container.style.border = "solid 2px black"
    container.style.backgroundColor = "white";

    let calculatedSquare = 512 / sides - 2;
    for (let i = 1; i <= sides ** 2; i++) {
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
            // code taken from here:stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
            let red = Math.floor(Math.random() * (255 - 0 + 1) + 0);
            let green = Math.floor(Math.random() * (255 - 0 + 1) + 0);
            let blue = Math.floor(Math.random() * (255 - 0 + 1) + 0);
            square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        })
    }


    body.appendChild(container);
}

// Start with a 16x16 grid, maybe the user will change it later on
createGrid(16);

const gridBtn = document.querySelector("#grid-button");
gridBtn.addEventListener("click", () => {
    // Remove previous grid
    let oldGrid = document.querySelector(".grid");
    body.removeChild(oldGrid);
    
    let sides = getSidesNum();
    createGrid(sides);
});