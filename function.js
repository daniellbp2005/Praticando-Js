const produtos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Mouse", preco: 150 },
    { id: 3, nome: "Teclado", preco: 200 },
    { id: 4, nome: "Monitor", preco: 1200 }
];

let acima = produtos.filter(produto => produto.preco > 500);
console.log(acima);

let item = produtos.find(produto => produto.nome === "Mouse")
console.log(item);

let soma = produtos.reduce((acumulador,aux) => acumulador + aux.preco,0);

console.log(soma);
