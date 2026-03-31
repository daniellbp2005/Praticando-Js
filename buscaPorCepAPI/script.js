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
    const cep = campoCep.value.replace("-", "").trim();
    if (cep.length !== 8) {
        alert("Cep invalido");
        limparCampos();
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    //faz a requisição http para a url da API, busca ainformações dentro do via cep.
    fetch(url)
        .then(response => response.json()) // qnd a resposta chega converte para JSON
        .then(dados => {

            //verifica se a api retornou um erro (CEP inválido)
            if (dados.erro) {
                alert("CEP não encontrado");
                limparCampos();
                return;
            }
            //c der certo, preemche os campos
            preencherCampos(dados);
        })
        //caso aconteça algum erro na requisição
        .catch(() => {
            alert("Erro ao buscar o CEP")
        })
}

botaoBuscar.addEventListener("click", buscarCEP)