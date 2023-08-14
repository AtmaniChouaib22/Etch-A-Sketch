let color = "black"; //global color variable 

//button targettings 
let setButton = document.querySelector(".setButton");
let randomButton = document.querySelector("#randomButton") ; 
let earaseButton = document.querySelector("#earaseButton") ;
let blackButton = document.querySelector("#blackButton") ; 
let resetButton = document.querySelector("#resetButton") ; 

//default onload app  16 x 16 
document.addEventListener("DOMContentLoaded", function() {
    createBoard(16); 

})
//board creation function 

function createBoard(size){
    let board = document.querySelector(".board"); 
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)` ;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)` ;    
    
    //inserting div inside cells 
    let divNum = size * size ; 
    for(let i =1 ; i<= divNum ; i++){
        let div = document.createElement("div");  
        board.insertAdjacentElement("beforeend" , div) ; 
        div.classList.add("pixel"); 
        div.addEventListener("mouseover", colorDiv); 
    }
}; 

//getUserInput(); 

function getSize(){
    let userInpVal = document.querySelector("input").value; 
    if(userInpVal < 2 || userInpVal >= 100){
        console.log("wrong input"); 
    }else{
        console.log("play"); 
    }
    return userInpVal ;
}

//set color function 

function colorDiv(){
    if(color == "random"){
        this.style.backgroundColor = `hsl(${Math.random()*360},100% ,50%)`; 
    }else if (color == "black"){
        this.style.backgroundColor = "black"; 
    }else if(color == "white"){
        this.style.backgroundColor = "white"; 
    }else {
        this.style.backgroundColor = "black"; 
    }    
}
//assigning color choice to the color variable 
function setColor(colorChoice){
    color = colorChoice; 
}

 //creating custom sized board 

 setButton.addEventListener("click" , ()=> {
     let newSize  = getSize(); 
     createBoard(newSize); 
 }); 

// random color event

 randomButton.addEventListener("click" , ()=>{
     setColor("random"); 
 })
//black event

 blackButton.addEventListener("click" , ()=>{
     setColor("black"); 
 
 }); 
//earase event

earaseButton.addEventListener("click" , ()=>{
setColor("white"); 

 }); 

//reset event
function reset(){
    let pixels = document.querySelectorAll(".pixel"); 
    pixels.forEach(pixel => {
    pixel.style.backgroundColor = "white" ; 
})
};
resetButton.addEventListener("click" , reset) ; 
