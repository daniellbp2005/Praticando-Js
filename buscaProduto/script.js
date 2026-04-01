const btnBuscar = document.getElementById("buscar");
const campoProduto = document.getElementById("produto");
const campoNome = document.getElementById("nome");
const campoPreco = document.getElementById("preco");
const campoCat = document.getElementById("categoria");
const texto = document.getElementById("textoBaixo")
const img = document.getElementById("imagemProd")
const form = document.querySelector(".formulario")
const novoTexto = document.querySelector(".novoTexto")

const Mockados = {
    "teclado gamer": {
        id: 1,
        nome: "teclado gamer",
        preco: 120.90,
        categoria: "Periféricos",
        imagem: "https://picsum.photos/200/150?random=1"
    },
    "mouse sem fio": {
        id: 2,
        nome: "mouse sem fio",
        preco: 89.90,
        categoria: "Periféricos",
        imagem: "https://picsum.photos/200/150?random=2"
    },
    "monitor 24 polegadas": {
        id: 3,
        nome: "monitor 24 polegadas",
        preco: 799.90,
        categoria: "Monitores",
        imagem: "https://picsum.photos/200/150?random=3"
    },
    "headset usb": {
        id: 4,
        nome: "headset usb",
        preco: 149.90,
        categoria: "Audio",
        imagem: "https://picsum.photos/200/150?random=4"
    },
    "notebook": {
        id: 5,
        nome: "notebook",
        preco: 3299.90,
        categoria: "Computadores",
        imagem: "https://picsum.photos/200/150?random=5"
    },
    "webcam hd": {
        id: 6,
        nome: "webcam hd",
        preco: 199.90,
        categoria: "Acessórios",
        imagem: "https://picsum.photos/200/150?random=6"
    },
    "mousepad rgb": {
        id: 7,
        nome: "mousepad rgb",
        preco: 59.90,
        categoria: "Periféricos",
        imagem: "https://picsum.photos/200/150?random=7"
    },
    "teclado mecânico": {
        id: 8,
        nome: "teclado mecânico",
        preco: 299.90,
        categoria: "Periféricos",
        imagem: "https://picsum.photos/200/150?random=8"
    },
    "monitor curvo 27 polegadas": {
        id: 9,
        nome: "monitor curvo 27 polegadas",
        preco: 1299.90,
        categoria: "Monitores",
        imagem: "https://picsum.photos/200/150?random=9"
    },
    "fone de ouvido bluetooth": {
        id: 10,
        nome: "fone de ouvido bluetooth",
        preco: 249.90,
        categoria: "Audio",
        imagem: "https://picsum.photos/200/150?random=10"
    }
}

function preencherCampos(dados) {
    campoNome.value = dados.nome;
    campoPreco.value = dados.preco;
    campoCat.value = dados.categoria;
    img.src = dados.imagem;

    img.onerror = () => {
        let novoTexto = document.createElement("p")
        form.appendChild(novoTexto);
        novoTexto.innerText = "Imagem não encontrada";
        novoTexto.style.color = "red";
        novoTexto.style.fontWeight = 600;
        img.remove()
    }
}

function limparCampos() {
    campoNome.value;
    campoPreco.value = "";
    campoCat.value = "";
    img.src = "";
}

function buscarProduto() {
    const prod = campoProduto.value.trim().toLowerCase();
    const dadoProd = Mockados[prod]

    if (!dadoProd) {
        texto.innerText = "Produto não Encontrado"
        texto.style.color = "red"
        texto.style.fontWeight = 600
        limparCampos();
        return;
    }
    texto.innerText = "Produto Encontrado"
    texto.style.color = "green"
    texto.style.fontWeight = 600

    preencherCampos(dadoProd);
}

btnBuscar.addEventListener("click", buscarProduto);
