let caixa = document.getElementById("caixa");
let titulo = document.getElementById("titulo");
let btnAdd = document.getElementById("btn-add");
let lista = document.getElementById("lista");


btnAdd.addEventListener("click", ()=>{
    const li = document.createElement("li");
    li.innerText = "batata";
    lista.appendChild(li);
    const button = document.createElement("button");
    button.innerText = "❌";
    li.appendChild(button);
})

const apagar = document.getElementById("excluir");
    btnAdd.addEventListener("click", ()=>{
    apagar.removeChild(apagar)
})
