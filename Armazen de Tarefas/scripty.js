const inputTarefa = document.getElementById('tarefa');
const btnAdicionar = document.getElementById("btn-add");
const listaTarefas = document.getElementById("lista");
const totalTarefas = document.getElementById("contador")


let tarefas = [];

function salvarTarefas() {
    // localStorage = armazenamento local do navegdor
    // setItem = salva no armazenamento o conteudo recebido
    // JSON.stringify(tarefas) pega a lista, converte para texto e armazena esse texto
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

// functionp mostrar tarefas
function mostrarTarefas() { // i < tarefa.lenght; , significa q o i vai percorrer todo o array
    listaTarefas.innerHTML = "";

    for (let i = 0; i < tarefas.length; i++) {
        const li = document.createElement("li");
        li.innerText = tarefas[i];  // ele pega a tarefa na posição de i, e guarda no li
        // ele pega o botão criado e coloca dentro do li ;  li.appendChild(button);

        const div = document.createElement("div-li");


        const bntRemover = document.createElement("button")
        bntRemover.innerText = "🗑️";
        bntRemover.className = "btn-remover";


        const btnAdicionar = document.createElement("button")
        btnAdicionar.innerText = "✅"
        btnAdicionar.className = "btn_add"

        bntRemover.addEventListener("click", () => {
            removerTarefas(i);
        })


        btnAdicionar.addEventListener("click", () => {
            totalTarefas.innerText = Number(totalTarefas.innerText) + 1
            removerTarefas();
        })
        //a diz q eu estou adicionando na div, o elemento btn.
        div.appendChild(btnAdicionar)
        div.appendChild(bntRemover);

        li.appendChild(div)

        listaTarefas.appendChild(li);
    }
}

function removerTarefas(posicaoTarefa) {
    //splice --> (posiçãoInicial, qtde_items)
    tarefas.splice(posicaoTarefa, 1);
    //dps de remover, chamo a função salvar no localStorage
    salvarTarefas();
    mostrarTarefas();
}

function addTarefas() {
    const valorTarefa = inputTarefa.value;
    if (valorTarefa === "") {
        alert("Digite um Tarefa!");
        return // n deixa q tarefa vazia apareça na tela.
    }

    tarefas.push(valorTarefa); //add a tarefa dgitado dentro do array
    inputTarefa.value = ""; //limpa o input dps de digitado a terefa

    salvarTarefas();
    mostrarTarefas();
}

//essa função vai carregar as tarefas salvas no localStorage
function carregarTarefas() {
    const tarefasSalvas = localStorage.getItem("tarefas") //pega as tarefas e armazena na variavél

    //c existir aluguma coisa dentro de tarefasSalvar, então coverte a tarefa e mostra na teça
    if (tarefasSalvas) {
        tarefas = JSON.parse(tarefasSalvas) // transforma o texto em arrray novament.
        mostrarTarefas();
    }
}

btnAdicionar.addEventListener("click", addTarefas);
carregarTarefas();

