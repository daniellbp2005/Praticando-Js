let caixa = document.getElementById("caixa");
let btnAdd = document.getElementById("btn-add");
let lista = document.getElementById("lista");
let texto = document.getElementById("texto");
let inputBtn = document.getElementById("inputBtn");
let teste = document.querySelector(".teste");


//primeirp c cria o elemento, dps add
//alt + shit + s alinha a file
const carrinho = []
const produtos = [
    { id: 1, nome: "batata", preco: 10.50 },
    { id: 2, nome: "Arroz", preco: 20.0 }
];

document.addEventListener("DOMContentLoaded", () => {
    produtos.forEach(element => {

        const botao = document.createElement('button')
        const paragrafo = document.createElement('p')
        const li2 = document.createElement("li")

        botao.innerText = "✖️";
        paragrafo.innerText = element.nome;

        botao.addEventListener("click", () => {
            paragrafo.remove();
        })

        lista.appendChild(li2)
        li2.appendChild(paragrafo);
        paragrafo.appendChild(botao);
    });
})

inputBtn.addEventListener("click", () => {

    const li2 = document.createElement("li")
    const novo = document.createElement("p");

    novo.innerHTML = texto.value;
    texto.value = "";

    let newBtn = document.createElement("button");
    newBtn.innerHTML = "✖️";
    
    newBtn.addEventListener("click", () => {
        novo.remove();
    })

    lista.appendChild(li2);
    li2.appendChild(novo);
    novo.appendChild(newBtn);
})

// btnAdd.addEventListener("click", () => {

//     const li = document.createElement("li");//cria a mesma tag li do html, mas não a adiciona na página
//     li.innerText = "pera";
//     lista.appendChild(li);

//     const button = document.createElement("button");
//     button.innerText = "❌";
//     li.appendChild(button);

//     button.style.border = "none";
//     button.style.backgroundColor = "transparent";
//     button.style.cursor = "pointer";

//     button.addEventListener("click", () => {
//         li.remove()
//     })
// })



