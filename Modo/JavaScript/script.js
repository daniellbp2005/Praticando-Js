const botao = document.getElementById("btn");
const corpoPagina = document.body;
const caixa = document.getElementById("caixa");
const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto")
const curtir = document.getElementById("curtir")


let aux = false

curtir.addEventListener("click", ()=>{
    if(aux === false){
        curtir.innerText = " 🩷Curtido"
        curtir.style.backgroundColor = "#d42727ff"
        curtir.style.border = "1px solid #fff"
        

        aux = true
    }else{
        curtir.innerText = "Não Curtido👍"
        curtir.style.backgroundColor = "#000"
        curtir.style.border = "1px solid #917d7dff"

        aux = false
    }
})



let modoEscuroAtivo = false;

botao.addEventListener("click", ()=>{
    if(modoEscuroAtivo === false){
        corpoPagina.style.backgroundColor = "#1e1e1e";
        corpoPagina.style.color = "#ffffff";

        caixa.style.background = "#000";
        caixa.style.border = "1px solid #fff";
        caixa.style.borderRadius = "15px";
        botao.style.backgroundColor = "#fff"
        botao.style.color = "#000"

        titulo.style.color = "#00ffff"
        texto.style.color = "#dddddd"

        botao.innerText = "Ativar modo Claro"

        modoEscuroAtivo = true;
    }else{
        corpoPagina.style.backgroundColor = "aliceblue";
        corpoPagina.style.color = "#000"
        caixa.style.background = "#f4f4f4"
        caixa.style.border = "1px solid blue"
        caixa.style.borderRadius = "15px"
        
        botao.style.color = "#000"
        botao.style.backgroundColor = "Blue"
        botao.style.border = "none"

        titulo.style.color = "#fff"
        caixa.style.backgroundColor = "gray"

        botao.innerText = "Ativar modo Escuro"
        modoEscuroAtivo = false
    }
})


const userCorreto = "admin";
const senhaCorreta = "123"

const user = document.getElementById("usuario");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const btnForm = document.getElementById("btn-form");
const textForm = document.getElementById("form-p")

// value pega o conteudo digitado dentro do input

btnForm.addEventListener("click", (e)=>{
    e.preventDefault();

    if(user.value === userCorreto && senha.value === senhaCorreta){
        textForm.innerText = "Login realizado com Sucesso"
        textForm.style.color = "Green"
    }else{
        textForm.innerText = "Login Invalido, faça de novo"
        textForm.style.color = "Red"
    }
})

