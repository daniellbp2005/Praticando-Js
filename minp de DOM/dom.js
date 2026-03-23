/**
    getElementById --> pega o elemento pelo ID.
    querySelector --> serve para selecionar o 1° elemento q corresponde a um seleor CSS.
    querySelectorAll --> serve para selecionar todos os objetos que correspondem ao seletor.
 **/

// getElementById
// const titulo = document.getElementById("titulo");
// console.log(titulo);
const valor = document.getElementById("titulo").innerText;
console.log(valor);

function selector (){
    const titulo = document.querySelector("#titulo");       // para chamar um id #, para uma classe .
    const A = document.querySelector(".A");                 //chmando a classe
    const tituloh2 = document.querySelector("h2");          // chamando só a tag, no caso h2
    console.log(titulo);
    console.log(A);
    console.log(tituloh2);
}

function all (){
    const elementos = document.querySelectorAll(".texto");
    console.log(elementos);
    elementos.forEach((elemento) =>{
        console.log(elemento.innerText);
        
    })

    const itens = document.querySelectorAll(".texto");

    itens.forEach((item) =>{
        item.innerText = "ME ajuda"
    })

    //innerHtml -> troca a tag
    itens.forEach((item) =>{
        item.innerHTML = "<h3>vamos</h3>"
    })

    itens.forEach((item) => {
        item.style.color = "#0000ff"
    })

}all();
// addEventListener = esperador de eventos, dentro vc especifica o mesmo
function eventosclique  (){ // eventos == ações do user
    //click
    let btn = document.getElementById("btn");
    btn.addEventListener("click", () =>  {
        alert("Vc clikou")
    })
}

function eventInput (){
    let campo = document.getElementById("campo");
    let resultado = document.getElementById("resultado");

    campo.addEventListener("input", () => { 
        resultado.innerText = campo.value;
    })
    //evento keyup => dispara ao soltar a tecla
    campo.addEventListener("keyup", ()=> { //pra funcionar tem q ser outro id...
        resultado.innerText = campo.value;
        console.log("Tecla pressionada");
    })
}eventInput();

//houver

function hover(){
    let troca = document.getElementById("troca-cor");
    troca.addEventListener("mouseover", () => {          //mousehouver = passar o mouse
        troca.style.color = "#d8c4c4ff"
        troca.style.backgroundColor = "#b83c3cff"
    })
    troca.addEventListener("mouseout",() => {           //mouseout = tirar o mouse
        troca.style.color= "#000"
        troca.style.backgroundColor= ""
    })
    // document.addEventListener("mouseover",(evento)=>{ //mostra o lugar do mouse
    //     console.log("Posição X:",evento.clientX,"Poisção Y:",evento.clientY);
    // })
}hover()

function form(){
    const form = document.getElementById("form");
    form.addEventListener("submit",(evento)=>{
        evento.preventDefault();                    //impede o comportamento padrão, ou seja o carregamento da página.Pois o  comportamento padrão do form é sempre recaregar a página
        const nome = document.getElementById("nome").value;
        console.log("Nome: ",nome);
    })

    const newElement = document.createElement("p");
    newElement.innerText = "Elemento Novo Criado";

    const form1 = document.getElementById("form");
    form1.appendChild(newElement);                 //coloca novos elementos detro do outro => appendChild

    const botao = document.createElement("button");
    botao.innerText = "Excluir elemento";
    form1.appendChild(botao)

    botao.addEventListener("click", () =>{
        newElement.remove()
    })
    
    //apagando pelo pai
    // form.removeChild(newElement);

    //add elementos em uma lista a partir de um input

    const input = document.getElementById("input");
    const botao1 = document.getElementById("add");
    const lista = document.getElementById("lista");

    botao1.addEventListener("click", ()=>{
        const valor = input.value //pega o valor digitado

        const li = document.createElement("li")
        li.innerText =valor

        lista.appendChild(li);

        input.value = "" //limpa o input dps de escrito
    })

    const apagar = document.getElementById("remove");
    apagar.addEventListener("click", ()=>{
        apagar.remove()
    })
}form();


function contador (){
    let contador = 0;
    let adicionar = document.getElementById("lista2");
    let lista = document.getElementById("resultado");

    adicionar.addEventListener("click", ()=>{
        contador++
        lista.innerText=contador;
    })
}contador()

