const { createElement } = require("react");

const inputTarefa = document.getElementById('tarefa');
const add = document.getElementById("add");
const lista = document.getElementById("lista");

let tarefas = [];

function salvarTarefas () {
    // localStorage = armazenamento local do navegdor
    // setItem = salva no armazenamento o conteudo recebido
    // JSON.stringify(tarefas) pega a lista, converte para texto e armazena esse texto
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
}

// functionp mostrar tarefas
function mostrarTarefas() { // i < tarefa.lenght; , significa q o i vai percorrer todo o array
    listaTarefas.innerHTML = "";

    for(let i = 0; i < tarefas.lenght; i++){
        const li = createElement("li");
        li.innerText= tarefas[i]  // ele pega a tarefa na posição de i, e guarda no li
        li.appendChild(button); // ele pega o botão criado e coloca dentro do li
    }
}

let listaTeste
