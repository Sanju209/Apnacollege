let boxes = document.querySelectorAll(".box");
let rst = document.querySelector("#rst");
let tit = document.querySelector("h1");
let flag = 0;

let turnO = true;

const winPat = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7],
                [2, 5, 8], [0, 4, 8], [2, 4, 6]];

boxes.forEach((btn) => {
    btn.addEventListener("click", function () {
    if(turnO && btn.innerText === "") {
        btn.innerText = "O";
        turnO = false;
        flag++;
    }
    else if(btn.innerText === "") {
        btn.innerText = "X";
        turnO = true;
        flag++;
    }

    checkWin();
    checkDraw();

    });
});

function checkDraw() {
    let flag = 0;
    for(box of boxes) {
        if(box.innerText !== "") {
            flag++;
        }
    }
    if(flag == 9) {
        tit.innerText = "Draw. Please restart";
    }
}

function checkWin() {
    for(const pattern of winPat) {
        if(boxes[pattern[0]].innerText !== "" && boxes[pattern[0]].innerText === boxes[pattern[1]].innerText && boxes[pattern[0]].innerText === boxes[pattern[2]].innerText) {
            tit.innerText = "Congrats! " + boxes[pattern[0]].innerText + " won";
            boxes.forEach((box) => {
                box.disabled = true;
            })
        }
    }
}

rst.addEventListener("click", function () {
    for(box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
    tit.innerText = "Tic Tac Toe";
})