let gameseq=[];
let userseq=[];
let btns=["red","orange","blue","purple"];

let started=false;
let level=0;
let highestScore=0;
let h2=document.querySelector("h2");

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
    userseq=[];    // reset user sequence for new level
    level++;
    h2.innerText=`Level ${level}`;
        
    let randIndx=Math.floor(Math.random() * 4);
    let randcolor=btns[randIndx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    gameflash(randbtn);
}

function checkAns(indx)
{
    if(gameseq[indx]==userseq[indx])
    {
        if(gameseq.length==userseq.length)
        {
            setTimeout(levelup,1000);
        }
    }
    else
    {
        highestScore=Math.max(highestScore,level);
        h2.innerHTML=`Game Over. Your game score was <b>${level}</b> <br> Highest score is: ${highestScore} <br> Press any key to start!`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function()
        {
                    document.querySelector("body").style.backgroundColor="white";

        },250);
        reset();
    }
}


function btnPress()
{
    let btn =this;   // this selectes which button was pressed by user. red or blur or...
    userflash(btn);
    usercolor= btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}

let allbtn=document.querySelectorAll(".btn");  // for any button press
for(btn of allbtn)
{
    btn.addEventListener("click",btnPress);
}


function reset()
{
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}