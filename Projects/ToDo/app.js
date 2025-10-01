let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText= inp.value;
    let dlt=document.createElement("Button");
    dlt.innerText="Delete";
    dlt.classList.add("delete")
    item.appendChild(dlt); 
    ul.appendChild(item);
    inp.value="";

});

let dltBtns=document.querySelectoraAll(".delete");
