
let caixa = document.getElementById("caixa");
let titulo = document.getElementById("titulo");
let btnAdd = document.getElementById("btn-add");
let lista = document.getElementById("lista");


btnAdd.addEventListener("click", ()=>{
    const li = document.createElement("li");
    li.innerText = "batata"
    lista.appendChild(li);
})