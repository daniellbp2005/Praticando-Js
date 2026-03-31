const btnBuscar = document.getElementById("buscar");
const campoProduto = document.getElementById("produto");
const campoNome = document.getElementById("nome");
const campoPreco = document.getElementById("preco");
const campoCat = document.getElementById("categoria");


const Mockados = {
    "teclado gamer": {
        id: 1,
        nome: "teclado gamer",
        preco: 120.90,
        categoria: "Periféricos"
    },
    "mouse sem fio": {
        id: 2,
        nome: "mouse sem fio",
        preco: 89.90,
        categoria: "Periféricos"
    },
    "monitor 24 polegadas": {
        id: 3,
        nome: "monitor 24 polegadas",
        preco: 799.90,
        categoria: "Monitores"
    },
    "headset usb": {
        id: 4,
        nome: "headset usb",
        preco: 149.90,
        categoria: "Audio"
    },
    "notebook": {
        id: 5,
        nome: "notebook",
        preco: 3299.90,
        categoria: "Computadores"
    },
    "webcam hd": {
        id: 6,
        nome: "webcam hd",
        preco: 199.90,
        categoria: "Acessórios"
    },
    "mousepad rgb": {
        id: 7,
        nome: "mousepad rgb",
        preco: 59.90,
        categoria: "Periféricos"
    },
    "teclado mecânico": {
        id: 8,
        nome: "teclado mecânico",
        preco: 299.90,
        categoria: "Periféricos"
    },
    "monitor curvo 27 polegadas": {
        id: 9,
        nome: "monitor curvo 27 polegadas",
        preco: 1299.90,
        categoria: "Monitores"
    },
    "fone de ouvido bluetooth": {
        id: 10,
        nome: "fone de ouvido bluetooth",
        preco: 249.90,
        categoria: "Audio"
    }
}


function preencherCampos(dados) {
    campoNome.value = dados.nome;
    campoPreco.value = dados.preco;
    campoCat.value = dados.categoria;
}

function limparCampos() {
    campoNome.value = "";
    campoPreco.value = "";
    campoCat.value = "";
}

function buscarProduto() {
    const prod = campoProduto.value.trim().toLowerCase();

    const dadoProd = Mockados[prod]

    if (!dadoProd) {
        alert("Produto não encontrado");
        limparCampos();
        return;
    }

    preencherCampos(dadoProd);
}

btnBuscar.addEventListener("click", buscarProduto);
