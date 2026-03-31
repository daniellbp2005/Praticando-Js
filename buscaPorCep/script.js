const cepsMockados = {
    "01001000": {
        logradouro: "Praça da Sé",
        bairro: "Sé",
        localidade: "São Paulo",
        uf: "SP"
    },
    "20040002": {
        logradouro: "Rua da Assembleia",
        bairro: "Centro",
        localidade: "Rio de Janeiro",
        uf: "RJ"
    },
    "30140071": {
        logradouro: "Avenida Brasil",
        bairro: "Santa Efigênia",
        localidade: "Belo Horizonte",
        uf: "MG"
    },
    "80010000": {
        logradouro: "Praça Tiradentes",
        bairro: "Centro",
        localidade: "Curitiba",
        uf: "PR"
    }
};


const campoCep = document.getElementById("cep");
const botaoBuscar = document.getElementById("btnBuscar");
const campoRua = document.getElementById("rua");
const campoBairro = document.getElementById("bairro");
const campoCidade = document.getElementById("cidade");
const campoEstado = document.getElementById("estado");


function preencherCampos(dados) {
    campoRua.value = dados.logradouro;
    campoBairro.value = dados.bairro;
    campoCidade.value = dados.localidade;
    campoEstado.value = dados.uf;
}

function limparCampos() {
    campoRua.value = "";
    campoBairro.value = "";
    campoCidade.value = "";
    campoEstado.value = "";
}

function buscarCEP() {
    // Pega o valor digitado e remove tudo q n for numero (\D)
    // É o opsto de \d que reprresenta todos os digitos numéricos (0-9)
    // g -> subtitui de forma global, ou seja aplica a remoção em todos os caracteres
    //trim, remove espaços do incio e do fim;
    const cep = campoCep.value.replace(/\D/g, "").trim();

    if(cep.length !== 8){
        alert("CEP inválido!")
        limparCampos();
        return;
    }

    const dadosCep = cepsMockados[cep]; //peg o cep e armazena dentro de dados, "O digitado, para validar"

    if (!dadosCep) {//se o cep digitado n existir
        alert("CEP não encontrado");
        limparCampos();
        return;
    }

    preencherCampos(dadosCep);
}

botaoBuscar.addEventListener("click", buscarCEP)