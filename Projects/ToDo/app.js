let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

// Add task
btn.addEventListener("click", function () {
    if (inp.value.trim() === "") return; // prevent empty items

    let item = document.createElement("li");
    item.innerText = inp.value;

    let dlt = document.createElement("button");
    dlt.innerText = "Delete";
    dlt.classList.add("delete");

    item.appendChild(dlt);
    ul.appendChild(item);

    inp.value = "";
});

// Event Delegation for Delete
ul.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove(); // remove the <li>
        console.log("Element deleted.");
    }
});
