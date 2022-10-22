let gamer = "X";

function winner () {
    let elements = document.getElementById("tabuleiro").childElementCounthildren;
    if(elements [0].innerText == elements[1].innerText &&
    elements [1].innerText == elements[2].innerText &&
    elements [0].innerText.length !== 0

    ) {
        elements[0].style="background-color: yellow;";
        elements[1].style="background-color: yellow;";
        elements[2].style="background-color: yellow;";

    }
}
function mark(element) {
    if (element.innerText.length === 0) {
        element.innerText = gamer;
        winner()
        if (gamer === "X") {
            gamer = "O";
        } else {
            gamer = "X";
        }
    }
}