const campoBusca = document.getElementById("campo-busca");
const listaFilmes = document.getElementById("lista-filmes");

const API_KEY = "";

const URL_BASE = "";
const URL_IMAGEM = "";

//mostrar resultados

function mostrarResultados(lista) {
    listaFilmes.innerHTML = "";
    lista.forEach(item => {
        if (!item.poster_path) { // poster_path = caminho da img, é como vem da API
            return;
        }

        const titulo = item.title || item.name;
        const nota = item.vote_average || "N/A"; //media de notas

        const div = document.createElement("div");
        div.classList.add("filme")              //add um aclasse para a div criada
        div.innerHTML =
            `
        <img src="${URL_IMAGEM + item.poster_path}" alt"${titulo}">
        <div class="info">
            <h3>${titulo}</h3>
            <span>⭐ ${nota}</span>
        </div>
        `

        listaFilmes.appendChild(div)
    });
}


//buscar filmes e séries

async function buscarTitulos(termoDigitado) {
    try{//permite o sistema fazzer a busca, enq roda e n va travar
        const resposta = await fetch(
            `${URL_BASE}/search/multi?api_key=${API_KEY}&query=${termoDigitado}&language=pt-BR`
        )

        const dados = await resposta.json();
        mostrarResultados(dados.results);
    } catch (erro) {
        console.error("Erro na busca: ",erro)
    }
}

//buscar filmes populares

async function buscarPopulares() {
    try{
        const resposta = await fetch(
            `${URL_BASE}/movie/popular?api_key=${API_KEY}&language=pt-BR`
        )
        const dados = await resposta.json();
        mostrarResultados(dados.results)
    } catch (erro) {
        console.error("Erro ao carregar populares: ",erro)
    }
}

//add evento p carregar o conteudo popular assim q a página abrir
window.addEventListener("load",() => {
    buscarPopulares()
})

let timeout;
campoBusca.addEventListener("input", ()=>{
    clearTimeout(timeout);

    timeout = setTimeout(()=>{
        const termo =campoBusca.value;
        buscarTitulos(termo);
    }),500;
})