let boxes = document.getElementsByClassName(".box");

let turnO = true;

const winPat = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8]
                [3, 6, 9], [1, 5, 9], [3, 5, 7]];

boxes.forEach((btn) => {
    btn.addEventListener("click", function () {
    if(turnO && btn.innerText === "") {
       btn.innerText = "0";
    }
    else if(btn.innerText === "") {
        btn.innerText = "X";
    }
    })
})
