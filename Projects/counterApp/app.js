let count = 0;
const count1 = document.querySelector("#count");
const increaseBtn = document.querySelector('#increase');
const decreaseBtn = document.querySelector('#decrease');
const resetBtn = document.querySelector("#Reset");

increaseBtn.addEventListener("click",() => {
    count++;
    count1.textContent=count;
});

decreaseBtn.addEventListener("click",() => {
    count--;
    count1.textContent=count;
});

Reset.addEventListener("click",() => {
    count=0;
    count1.textContent=count;
});
