const produtos = [
    { id: 1, nome: "Teclado Gamer", categoria: "Periféricos", preco: 120.90 },
    { id: 2, nome: "Mouse sem Fio", categoria: "Periféricos", preco: 89.90 },
    { id: 3, nome: "Monitor 24 Polegadas", categoria: "Monitores", preco: 799.90 },
    { id: 4, nome: "Headset USB", categoria: "Audio", preco: 149.90 },
    { id: 5, nome: "Nootbook", categoria: "Computadores", preco: 3299.90 },
    { id: 6, nome: "Webcan HD", categoria: "Acessórios", preco: 199.90 },
    { id: 7, nome: "Mousepad RGB", categoria: "Periféricos", preco: 59.90 },
    { id: 8, nome: "Teclado Mecânico", categoria: "Periféricos", preco: 299.90 },
    { id: 9, nome: "Monitor 27 Polegadas", categoria: "Monitores", preco: 1299.90 },
    { id: 10, nome: "Fone de Ouvido Bluetooth", categoria: "Audio", preco: 249.90 },
    { id: 11, nome: "SSD 1TB", categoria: "Acessórios", preco: 399.90 },
    { id: 12, nome: "Placa de Vídeo GTX 1660", categoria: "Computadores", preco: 1899.90 },
    { id: 13, nome: "Mouse Óptico", categoria: "Periféricos", preco: 49.90 },
    { id: 14, nome: "Teclado Wireless", categoria: "Periféricos", preco: 159.90 },
    { id: 15, nome: "Monitor Curvo 32 Polegadas", categoria: "Monitores", preco: 1999.90 },
    { id: 16, nome: "Caixas de Som Bluetooth", categoria: "Audio", preco: 299.90 },
    { id: 17, nome: "Microfone USB", categoria: "Audio", preco: 199.90 },
    { id: 18, nome: "Desktop Gamer", categoria: "Computadores", preco: 4999.90 },
    { id: 19, nome: "Cabo HDMI 2m", categoria: "Acessórios", preco: 29.90 },
    { id: 20, nome: "Hub USB", categoria: "Acessórios", preco: 79.90 },
    { id: 21, nome: "Mouse Gamer RGB", categoria: "Periféricos", preco: 179.90 },
    { id: 22, nome: "Monitor 4K 28 Polegadas", categoria: "Monitores", preco: 2499.90 },
    { id: 23, nome: "Teclado Compacto", categoria: "Periféricos", preco: 89.90 },
    { id: 24, nome: "Mouse Ergonômico", categoria: "Periféricos", preco: 129.90 },
    { id: 25, nome: "Monitor 21 Polegadas", categoria: "Monitores", preco: 599.90 },
    { id: 26, nome: "Headset Bluetooth", categoria: "Audio", preco: 199.90 },
    { id: 27, nome: "Notebook Ultrabook", categoria: "Computadores", preco: 3999.90 },
    { id: 28, nome: "Webcam Full HD", categoria: "Acessórios", preco: 149.90 },
    { id: 29, nome: "Mousepad Preto", categoria: "Periféricos", preco: 39.90 },
    { id: 30, nome: "Teclado Retroiluminado", categoria: "Periféricos", preco: 249.90 },
    { id: 31, nome: "Monitor 30 Polegadas", categoria: "Monitores", preco: 1599.90 },
    { id: 32, nome: "Fone de Ouvido com Fio", categoria: "Audio", preco: 99.90 },
    { id: 33, nome: "SSD 500GB", categoria: "Acessórios", preco: 299.90 },
    { id: 34, nome: "Placa de Vídeo RTX 3060", categoria: "Computadores", preco: 2499.90 },
    { id: 35, nome: "Mouse Wireless", categoria: "Periféricos", preco: 109.90 },
    { id: 36, nome: "Teclado Numérico", categoria: "Periféricos", preco: 79.90 },
    { id: 37, nome: "Monitor Touchscreen", categoria: "Monitores", preco: 1199.90 },
    { id: 38, nome: "Caixas de Som USB", categoria: "Audio", preco: 149.90 },
    { id: 39, nome: "Microfone Condensador", categoria: "Audio", preco: 349.90 },
    { id: 40, nome: "Desktop Básico", categoria: "Computadores", preco: 1999.90 },
    { id: 41, nome: "Cabo USB-C", categoria: "Acessórios", preco: 19.90 },
    { id: 42, nome: "Hub Ethernet", categoria: "Acessórios", preco: 99.90 },
    { id: 43, nome: "Mouse Vertical", categoria: "Periféricos", preco: 199.90 },
    { id: 44, nome: "Monitor Ultrawide", categoria: "Monitores", preco: 2999.90 },
    { id: 45, nome: "Headset Gamer", categoria: "Audio", preco: 299.90 },
    { id: 46, nome: "Notebook 2 em 1", categoria: "Computadores", preco: 3499.90 },
    { id: 47, nome: "Webcam 4K", categoria: "Acessórios", preco: 399.90 },
    { id: 48, nome: "Mousepad Grande", categoria: "Periféricos", preco: 69.90 },
    { id: 49, nome: "Teclado Bluetooth", categoria: "Periféricos", preco: 189.90 },
    { id: 50, nome: "Monitor 19 Polegadas", categoria: "Monitores", preco: 499.90 },
    { id: 51, nome: "Fone de Ouvido Sem Fio", categoria: "Audio", preco: 179.90 },
    { id: 52, nome: "SSD 2TB", categoria: "Acessórios", preco: 699.90 },
    { id: 53, nome: "Placa de Vídeo RTX 3070", categoria: "Computadores", preco: 3499.90 },
    { id: 54, nome: "Mouse Óptico Sem Fio", categoria: "Periféricos", preco: 79.90 },
    { id: 55, nome: "Teclado Ergonômico", categoria: "Periféricos", preco: 229.90 },
    { id: 56, nome: "Monitor 34 Polegadas", categoria: "Monitores", preco: 2499.90 },
    { id: 57, nome: "Caixas de Som 2.1", categoria: "Audio", preco: 399.90 },
    { id: 58, nome: "Microfone Lavalier", categoria: "Audio", preco: 149.90 },
    { id: 59, nome: "Desktop Workstation", categoria: "Computadores", preco: 5999.90 },
    { id: 60, nome: "Cabo DisplayPort", categoria: "Acessórios", preco: 39.90 },
    { id: 61, nome: "Hub USB-C", categoria: "Acessórios", preco: 129.90 },
    { id: 62, nome: "Mouse Trackball", categoria: "Periféricos", preco: 159.90 },
    { id: 63, nome: "Monitor OLED", categoria: "Monitores", preco: 3999.90 },
    { id: 64, nome: "Headset com Microfone", categoria: "Audio", preco: 249.90 },
    { id: 65, nome: "Notebook Gaming", categoria: "Computadores", preco: 6999.90 },
    { id: 66, nome: "Webcam Infravermelha", categoria: "Acessórios", preco: 299.90 },
    { id: 67, nome: "Mousepad Gel", categoria: "Periféricos", preco: 49.90 },
    { id: 68, nome: "Teclado Foldable", categoria: "Periféricos", preco: 139.90 },
    { id: 69, nome: "Monitor 22 Polegadas", categoria: "Monitores", preco: 699.90 },
    { id: 70, nome: "Fone de Ouvido In-Ear", categoria: "Audio", preco: 89.90 },
    { id: 71, nome: "SSD NVMe 1TB", categoria: "Acessórios", preco: 499.90 },
    { id: 72, nome: "Placa de Vídeo RTX 3080", categoria: "Computadores", preco: 4999.90 },
    { id: 73, nome: "Mouse Laser", categoria: "Periféricos", preco: 99.90 },
    { id: 74, nome: "Teclado QWERTY", categoria: "Periféricos", preco: 69.90 },
    { id: 75, nome: "Monitor IPS", categoria: "Monitores", preco: 899.90 },
    { id: 76, nome: "Caixas de Som Portáteis", categoria: "Audio", preco: 199.90 },
    { id: 77, nome: "Microfone Dinâmico", categoria: "Audio", preco: 279.90 },
    { id: 78, nome: "Desktop All-in-One", categoria: "Computadores", preco: 2999.90 },
    { id: 79, nome: "Cabo VGA", categoria: "Acessórios", preco: 14.90 },
    { id: 80, nome: "Hub Multiporta", categoria: "Acessórios", preco: 159.90 },
    { id: 81, nome: "Mouse Bluetooth", categoria: "Periféricos", preco: 119.90 },
    { id: 82, nome: "Monitor 144Hz", categoria: "Monitores", preco: 1499.90 },
    { id: 83, nome: "Headset Wireless", categoria: "Audio", preco: 349.90 },
    { id: 84, nome: "Notebook Chromebook", categoria: "Computadores", preco: 2499.90 },
    { id: 85, nome: "Webcam 1080p", categoria: "Acessórios", preco: 99.90 },
    { id: 86, nome: "Mousepad Anti-deslizante", categoria: "Periféricos", preco: 29.90 },
    { id: 87, nome: "Teclado Touch", categoria: "Periféricos", preco: 199.90 },
    { id: 88, nome: "Monitor 43 Polegadas", categoria: "Monitores", preco: 3499.90 },
    { id: 89, nome: "Fone de Ouvido Noise Cancelling", categoria: "Audio", preco: 499.90 },
    { id: 90, nome: "SSD M.2 500GB", categoria: "Acessórios", preco: 349.90 },
    { id: 91, nome: "Placa de Vídeo GTX 1650", categoria: "Computadores", preco: 1499.90 },
    { id: 92, nome: "Mouse Arcad", categoria: "Periféricos", preco: 89.90 },
    { id: 93, nome: "Teclado Mini", categoria: "Periféricos", preco: 99.90 },
    { id: 94, nome: "Monitor VA", categoria: "Monitores", preco: 799.90 },
    { id: 95, nome: "Caixas de Som Surround", categoria: "Audio", preco: 599.90 },
    { id: 96, nome: "Microfone Shotgun", categoria: "Audio", preco: 399.90 },
    { id: 97, nome: "Desktop Mini", categoria: "Computadores", preco: 1799.90 },
    { id: 98, nome: "Cabo Thunderbolt", categoria: "Acessórios", preco: 79.90 },
    { id: 99, nome: "Hub Docking Station", categoria: "Acessórios", preco: 299.90 },
    { id: 100, nome: "Mouse 3D", categoria: "Periféricos", preco: 249.90 },
    { id: 101, nome: "Monitor HDR", categoria: "Monitores", preco: 1999.90 },
    { id: 102, nome: "Headset Surround", categoria: "Audio", preco: 399.90 },
    { id: 103, nome: "Notebook Workstation", categoria: "Computadores", preco: 7999.90 },
    { id: 104, nome: "Webcam PTZ", categoria: "Acessórios", preco: 499.90 },
    { id: 105, nome: "Mousepad Wrist Rest", categoria: "Periféricos", preco: 59.90 },
    { id: 106, nome: "Teclado Virtual", categoria: "Periféricos", preco: 149.90 },
    { id: 107, nome: "Monitor 8K", categoria: "Monitores", preco: 9999.90 },
    { id: 108, nome: "Fone de Ouvido True Wireless", categoria: "Audio", preco: 299.90 },
    { id: 109, nome: "SSD PCIe 2TB", categoria: "Acessórios", preco: 899.90 },
    { id: 110, nome: "Placa de Vídeo RTX 3090", categoria: "Computadores", preco: 6999.90 },
    { id: 111, nome: "Mouse Arcad Pro", categoria: "Periféricos", preco: 129.90 },
    { id: 112, nome: "Teclado Customizável", categoria: "Periféricos", preco: 399.90 },
    { id: 113, nome: "Monitor Gaming 240Hz", categoria: "Monitores", preco: 2999.90 },
    { id: 114, nome: "Caixas de Som Smart", categoria: "Audio", preco: 699.90 },
    { id: 115, nome: "Microfone Podcast", categoria: "Audio", preco: 599.90 },
    { id: 116, nome: "Desktop High-End", categoria: "Computadores", preco: 8999.90 },
    { id: 117, nome: "Cabo Fiber Optic", categoria: "Acessórios", preco: 49.90 },
    { id: 118, nome: "Hub Wireless", categoria: "Acessórios", preco: 199.90 },
    { id: 119, nome: "Mouse Sculpt", categoria: "Periféricos", preco: 169.90 },
    { id: 120, nome: "Monitor Portable", categoria: "Monitores", preco: 1299.90 },
    { id: 121, nome: "Headset ANC", categoria: "Audio", preco: 449.90 },
    { id: 122, nome: "Notebook Convertible", categoria: "Computadores", preco: 4499.90 }
]

const campoBusca = document.getElementById("campoBusca");
const ordenacao = document.getElementById("ordenacao");
const listaProdutos = document.getElementById("listaProdutos");

function mostrarProdutos() {
    let textoBusca = campoBusca.value.toLowerCase(); //converte p comparação para não dar erro, covertendo p minúsculo

    //percorre a lista de produtos e valida c existe o nome buscado no filtro, dentro da lista de produtos. Esse includes valida c existe o texto buscado dentro da lista de produtos
    let produtosFiltrados = produtos.filter(produto => produto.nome.toLocaleLowerCase().includes(textoBusca));

    //filtor de ordenação, "select"
    //verifica c o opção selecionada é "nome A-Z"

    if (ordenacao.value === "nome-az") { // esse value pega oq o user escolheu na opção, o nome da comparação é definada no html
        produtosFiltrados.sort((a, b) => {//ordena o array
            // localeCompare retorna:
            // se negativo = A vem antes
            // se positivo = B vem antes
            // 0 -> são iguais
            return a.nome.localeCompare(b.nome);
        })
    }
    if (ordenacao.value === "nome-za") {
        produtosFiltrados.sort((a, b) => {
            return b.nome.localeCompare(a.nome);
        })
    }
    if (ordenacao.value === "preco-menor") {
        produtosFiltrados.sort((a, b) => {
            return a.preco - b.preco;
        })
    }
    if (ordenacao.value === "preco-maior") {
        produtosFiltrados.sort((a, b) => {
            return b.preco - a.preco;
        })
    }

    //limpar tela 
    listaProdutos.innerHTML = "";

    // c n encontrar nenhum produto
    if (produtosFiltrados.length === 0) {
        // usando innerHTML para que a tag <p> seja renderizada como HTML
        listaProdutos.innerHTML = "<p class='mensagem'>Nenhum produto encontrado.</p>";
        return;
    }

    // cria o card de produto, para cada produto
    for (let i = 0; i < produtosFiltrados.length; i++) {
        let produto = produtosFiltrados[i];

        // concatena o HTML do card (pode usar template string também)
        listaProdutos.innerHTML +=
            "<div class='card'>" +
            "<h2>" + produto.nome + "</h2>" +
            "<p>Categoria: " + produto.categoria + "</p>" +
            "<p class='preco'>" + produto.preco.toFixed(2).replace(".", ",") + "</p>" +
            "</div>";
    }
}


campoBusca.addEventListener("input", ()=>{ // enquanto o user digita o capo é att instantaniamente
    mostrarProdutos()
})

ordenacao.addEventListener("change",()=>{
    mostrarProdutos()
})

mostrarProdutos()