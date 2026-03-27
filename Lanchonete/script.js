const inputPedido = document.getElementById("inputPedido");
const btnAdd = document.getElementById("btnAdicionar");
const listaPedido = document.getElementById("listaPedidos");
const btnAtender = document.getElementById("btnAtender");
const pedidoAtual = document.getElementById("pedidoAtual");


const contador = 0;

//esse é da professora
let pedidos = []

const dados = localStorage.getItem("pedidos")
if (dados) {
    pedidos = JSON.parse(dados);
    renderizar();//mostarar na tela
}

function salvar() {
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
}

function renderizar() {
    listaPedido.innerHTML = "";

    pedidos.forEach((pedido, posicao) => {
        const li = document.createElement("li");
        li.innerText = pedido.texto;

        if (pedido.concluido) {
            li.style.textDecoration = "line-through";
        }

        li.addEventListener("click", () => {
            pedido.concluido = true;
            li.style.textDecoration = "line-through";
            salvar();
        });

        const btnRemover = document.createElement("button");
        btnRemover.innerHTML = "❌";
        btnRemover.addEventListener("click", () => {
            pedidos.splice(posicao, 1);
            salvar();
            renderizar();
        });

        li.appendChild(btnRemover);
        listaPedido.appendChild(li);
    });
}
//add pedido
btnAdd.addEventListener("click", () => {
    const textoDigitado = inputPedido.value;


    if (textoDigitado === "") {
        alert("Digite um Pedido")
        return;// n dixa add o pedido avançar
    }
    pedidos.push({
        texto: textoDigitado,
        concluido: false
    })

    pedidoAtual.innerHTML = "Nenhum pedido sendo Atendido";
    inputPedido.value = "";
    salvar();
    renderizar();
})

btnAtender.addEventListener("click", () => {
    const proximo = pedidos.find(pedido => pedido.concluido == false);

    // se não existir pedido para atender
    if (!proximo) {
        pedidoAtual.innerText = "Todos os pedidos foram atendidos";
        return;
    }

    proximo.concluido = true;
    pedidoAtual.innerText = "Atendido: " + proximo.texto;

    salvar();
    renderizar();
})


//esse eu q fiz
/**
btnAdd.addEventListener("click", () => {
    if (inputPedido.value === "") {
        alert("Preecha o Pedido Corretamente")
        li.remove();
        btn.remove();
    }


    const li = document.createElement("li");
    li.innerText = inputPedido.value;
    listaPedido.appendChild(li);

    const btn = document.createElement("button");
    btn.innerText = "❌"
    li.appendChild(btn);
    inputPedido.value = ""

    btn.addEventListener("click", () => {
        li.remove()
        btn.remove()
    })

    li.addEventListener("click", () => {
        li.style.textDecoration = "line-through";
        btn.style.textDecoration = "line-through";

        pedidoAtual.innerText = "Em andamento";
        li.addEventListener("click", () => {
            li.style.backgroundColor = "green"
            const paragrafo = document.createElement("p");
            p.innerText = "Pronto: ", inputPedido;
            paragrafo.appendChild(p);
        })
    })
})

btnAtender.addEventListener("click", () => {
    const primeiro = listaPedido.firstChild;

    let texto = primeiro.firstChild;
    primeiro.remove();

    let aten = "Pronto: " + (texto.textContent);
    pedidoAtual.innerText = aten;


    aten.addEventListener("click", () => {
        aten.remove()
    })
})
*/


// mode escuro, mudando só o style 🥳
const tema = document.getElementById("claro")
const btnModo = document.getElementById("btnTema");
let bool = false;
btnTema.addEventListener("click", () => {
    if (bool === false) {
        tema.href = "escuro.css"
        bool = true
        localStorage.setItem("tema", "escuro.css")// salva no locaoStorage o escolhido
    } else {
        tema.href = "style.css"
        bool = false
        localStorage.setItem("tema", "style.css")
    }
})
const temaSalvo = localStorage.getItem("tema")
if (temaSalvo) { //verifica c tem algum tema salvo,c n tiver volta null
    tema.href = temaSalvo // tema é o link
    bool = temaSalvo === "escuro.css" // Isso é uma comparação => temaSalvo === "escuro.css", o resultado da compração é atribuido a bool
}