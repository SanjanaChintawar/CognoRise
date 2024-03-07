let inputs = document.getElementById("inp");
let text = document.querySelector(".text");
let no = 0;
function Add() {
    if (inputs.value == "") {
        alert("Please Enter Task")
    } else {
        no++;
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${no}.      ${inputs.value} <i class="fa-solid fa-trash"></i><i class="fa-solid fa-circle-check" style="color: #fafafa;"></i>`;
        text.appendChild(newEle);
        inputs.value = "";
        newEle.querySelector(".fa-trash").addEventListener("click", remove);
        function remove() {
            newEle.remove()
        }
        let check = newEle.querySelector(".fa-circle-check");
        newEle.querySelector(".fa-circle-check").addEventListener("click", color);
        function color() {
            check.style.color = "#43766C"
            newEle.style.backgroundColor = "#8CB9BD"
        }

    }
}