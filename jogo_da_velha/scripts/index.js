let gamer = "X";

function winner () {
    let elements = document.getElementById("tabuleiro").children;
    if(elements [0].innerText == elements[1].innerText &&
       elements [1].innerText == elements[2].innerText &&
       elements [0].innerText.length !== 0
    ) {
        elements[0].style="background-color: palevioletred;";
        elements[1].style="background-color: palevioletred;";
        elements[2].style="background-color: palevioletred;";
        return true;
    } else if (
        elements [3].innerText == elements[4].innerText &&
        elements [4].innerText == elements[5].innerText &&
        elements [5].innerText.length !== 0
    ) {
        elements [3].style="background-color: palevioletred;";
        elements [4].style="background-color: palevioletred;";
        elements [5].style="background-color: palevioletred;";
        return true;
    } else if (
        elements [6].innerText == elements[7].innerText &&
        elements [7].innerText == elements[8].innerText &&
        elements [8].innerText.length !== 0
    ) {
        elements [6].style="background-color: palevioletred;";
        elements [7].style="background-color: palevioletred;";
        elements [8].style="background-color: palevioletred;";
        return true;
    }  else if (
        elements [0].innerText == elements[3].innerText &&
        elements [3].innerText == elements[6].innerText &&
        elements [6].innerText.length !== 0
    ) {
        elements [0].style="background-color: palevioletred;";
        elements [3].style="background-color: palevioletred;";
        elements [6].style="background-color: palevioletred;";
        return true;
    } else if (
        elements [1].innerText == elements[4].innerText &&
        elements [4].innerText == elements[7].innerText &&
        elements [7].innerText.length !== 0
    ) {
        elements [1].style="background-color: palevioletred;";
        elements [4].style="background-color: palevioletred;";
        elements [7].style="background-color: palevioletred;";
        return true;
    } else if (
        elements [2].innerText == elements[5].innerText &&
        elements [5].innerText == elements[8].innerText &&
        elements [8].innerText.length !== 0
    ) {
        elements [2].style="background-color: palevioletred;";
        elements [5].style="background-color: palevioletred;";
        elements [8].style="background-color: palevioletred;";
        return true;
    } else if (
        elements [0].innerText == elements[4].innerText &&
        elements [4].innerText == elements[8].innerText &&
        elements [8].innerText.length !== 0
    ) {
        elements [0].style="background-color: palevioletred;";
        elements [4].style="background-color: palevioletred;";
        elements [8].style="background-color: palevioletred;";
        return true;
    } else if (
        elements [6].innerText == elements[4].innerText &&
        elements [4].innerText == elements[2].innerText &&
        elements [2].innerText.length !== 0
    ) {
        elements [6].style="background-color: palevioletred;";
        elements [4].style="background-color: palevioletred;";
        elements [2].style="background-color: palevioletred;";
        return true;
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