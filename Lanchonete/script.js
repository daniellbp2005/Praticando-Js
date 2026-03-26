const inputPedido = document.getElementById("inputPedido");
const btnAdd = document.getElementById("btnAdicionar");
const listaPedido = document.getElementById("listaPedidos");
const btnAtender = document.getElementById("btnAtender");
const pedidoAtual = document.getElementById("pedidoAtual");


btnAdd.addEventListener("click",()=>{
    const li = document.createElement("li");
    li.innerText = inputPedido.value;
    listaPedido.appendChild(li)

    const btn = document.createElement("button");
    btn.innerText = "❌"
    listaPedido.appendChild(btn)

    btn.addEventListener("click", ()=>{
        li.remove()
        btn.remove()
    })

    li.addEventListener("click", ()=>{
        li.style.textDecoration = "line-through";
        btn.style.textDecoration = "line-through";
    })
})