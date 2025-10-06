let gameseq=[];
let userseq=[];
let btns=["red","orange","blue","purple"];

let started=false;
let level=0;

let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    started=true; 
    levelup();

});

function gameflash(btn)
{
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
}

function userflash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelup()
{
    level++;
    h3.innerText=`Level ${level}`;
    
    let randIndx=Math.floor(Math.random() * 4);
    let randcolor=btns[randIndx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    gameflash(randbtn);
}

function checkAns()
{
    
}
function btnPress()
{
    let btn =this;
    userflash(btn);
    usercolor= btn.getAttribute("id");
    userseq.push(usercolor);
}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn)
{
    btn.addEventListener("click",btnPress);
}
