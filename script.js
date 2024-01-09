let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");
let newGameBtn= document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let matchdraw=document.querySelector("draw-container");

let turno=true;
const winpatterns=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    msgContainer.classList.add("hide");
    count=0;
}; 

const resetGame = ()=>{
    turno=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count=0;
}

const callDraw = () =>{
    turno=true;
    msgContainer.classList.remove("hide");
    msg.innerText=`Match Draw`;
    
    count=0
};

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled=true;
        count=0;
        // box.innerHTML="";
    }
};
const printWinner=(winner)=>{
    msg.innerText=`congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    count=0;
};



const checkWinner = () =>{
    for(let pattern of winpatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                console.log("Winner", pos1);
                printWinner(pos1);
            } 
        } 
    }
};


var count=0;
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("Button pressed");
        count=count+1;
        if(turno){
            box.innerText='O';
            box.style.color = 'red';
            turno=false;
        }
        else{
            box.innerText='X';
            turno=true;
            box.style.color = 'rgb(4, 4, 72)';
        }
        box.disabled=true; 
        console.log(count);
        if(count==9){
            callDraw();
        }
        checkWinner();
    });
});

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", enableBoxes);
