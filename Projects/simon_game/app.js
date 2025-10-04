let gameseq=[];
let userseq=[];
let btn=["red","orange","blue","purple"];

let started=false;
let level=0;

let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    started=true; 
    levelup();

});

function btnflash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function levelup()
{
    level++;
    h3.innerText=`Level ${level}`;
    
    let randIndx=Math.floor(Math.random() * 3);
    let randcolor=btn[randIndx];
    let randbtn=document.querySelector(`.${randcolor}`);
    btnflash(randbtn);
}
