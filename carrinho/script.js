let caixa = document.getElementById("caixa");
let btnAdd = document.getElementById("btn-add");
let lista = document.getElementById("lista");


//primeirp c cria o elemento, dps add
//alt + shit + s alinha a file
btnAdd.addEventListener("click", () => {
    const li = document.createElement("li");//cria a mesma tag li do html, mas não a adiciona na página
    li.innerText = "pera";
    lista.appendChild(li);

    const button = document.createElement("button");
    button.innerText = "❌";
    li.appendChild(button);

    button.style.border = "none";
    button.style.backgroundColor = "transparent";
    button.style.cursor = "pointer";

    button.addEventListener("click", () => {
        li.remove()
    })
})

