let boxes = document.querySelectorAll(".box");
let reload = document.getElementById("reload");
let intial_msg = document.querySelector("#initial-msg");
let count = 0;

let true0 = true;

let winComb = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(true0){
         box.innerText = "O";
         count++;
         true0 = false;   
        }
        else{
            box.innerText = "X";
            count++;
            true0 = true;   
        }
        box.disabled = true;
        checkWinner();
    })
});

function disableBtns(){
    boxes.forEach((box) => {
        box.disabled = true;        
    })
};

function checkWinner(){
    for(let comb of winComb){
        let posValue1 = boxes[comb[0]].innerText;
        let posValue2 = boxes[comb[1]].innerText;
        let posValue3 = boxes[comb[2]].innerText;
        if(posValue1 === posValue2 && posValue2 === posValue3 && posValue2 === "X")
        {
            intial_msg.innerText = "Winner is X. Congratulations!";
            disableBtns();
        }
        else if(posValue1 === posValue2 && posValue2 === posValue3 && posValue2 === "O") {
            intial_msg.innerText = "Winner is O. Congratulations!";
            disableBtns();
        }
        else if(count == 9){
            intial_msg.innerText = "Match is Draw!";
        }
    }
};

reload.addEventListener("click", () => {
    document.getElementById("ttt-design").style.display = "flex";
    intial_msg.innerText = "Game has Started";
    reload.innerText = "Reset Game";
    reload.addEventListener("click", () =>{
        boxes.forEach((box) => {
            box.innerText = "";
            box.disabled = false;
            true0 = true;        
        })
    });
});