let boxes = document.querySelectorAll(".box");
let rst = document.querySelector("#rst");

let turnO = true;

const winPat = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7],
                [2, 5, 8], [0, 4, 8], [2, 4, 6]];

boxes.forEach((btn) => {
    btn.addEventListener("click", function () {
    if(turnO && btn.innerText === "") {
        btn.innerText = "O";
        turnO = false;
    }
    else if(btn.innerText === "") {
        btn.innerText = "X";
        turnO = true;
    }
    checkWin();
    });
});

function checkWin() {
    for(const pattern of winPat) {
        if(boxes[pattern[0]].innerText !== "" && boxes[pattern[0]].innerText === boxes[pattern[1]].innerText && boxes[pattern[0]].innerText === boxes[pattern[2]]) {
            rst.innerText = "win";
        }
    }
}
