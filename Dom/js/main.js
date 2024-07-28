let input =document.getElementById("input");
let add=document.getElementById("add");
let addTodo=document.getElementById("addTodo");

add.addEventListener("click", function(e){
    e.preventDefault;
    let text=document.createElement("p");
    text.textContent =input.value;
    addTodo.appendChild(text);

text.addEventListener("dblclick", function(e){
    e.preventDefault;
       
    addTodo.removeChild(text);
})})