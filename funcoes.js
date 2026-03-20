//função MAP, ela percorre uma lista e cria uma nova lista com base na condição

function funcMap(){
    let num = [1,2,3,4];

    let numDobrados = num.map(function(aux){ // aux pega cada um dos num da lista e multiplica por dois.
        return aux*2;
    })
    console.log(numDobrados);
    
// outra maneira de fazer a mesma função, só q arrow function.
}funcMap();

function Arrow(){
    let num = [1,2,3,4];

    let numDobrados = num.map(num => num *2);
    console.log(numDobrados);

    numeros.map(num =>{
        let resultado = num *2;
    return resultado    
})
}

// if ternarario

// let resposta = (idade > 18) ? "Maior de Idade" : "Menor de Idade";
// console.log(resposta);


//FILTER filtra os elementos de uma lista com bse em uma condição
function filter (){
    let numeros = [5,10,15,20]
    let maiorqDez = numeros.filter(num => num >10);

    console.log(maiorqDez);
    
}filter();


//REDUCE -> reduz os valres de um array de uma lista, a um único valor.
function reduce_(){
    

    // acumulador = total
    // auxiliar
    // o 0 é o valor, n a posição
    let soma = num.reduce((acumulador, aux) => acumulador + aux,0);
    console.log(soma);
}

//retorna o primeiro elemento que atende a condição
function find(){
    let produtos = [
        {id: 1, nome: "Teclado", preco: 29.90}, 
        {id: 2, nome: "Mouse", preco: 15.00}, 
        {id: 3, nome: "Mausepad", preco: 10.00}, 
    ]

    let item = produtos.find(produto => produto.id === 2);
    console.log(item); // só retorna o primeiro q encontrar, para fazer meio q uma "filtro" usaria o filter.
}


//SPLIT -> divide um string e parrtes transformando em uma lista

function split (){
    let frase = "Batatatat";

    let palavras = frase.split(" ")//todo o lugar q tiver espaço ele corta, e guarda em uma .
    console.log(palavras);
    
}


//TRIM -> remove espaço no cmç de um string e no fim

function trim (){
    let nome = "   João    ";
    let nomeLimpo = nome.trim();

    console.log(nome);
    console.log(nomeLimpo);
}


//INCLUIDES -> verefica se existe um valor dentro de uma lista ou string
function incluides(){
    let frutas = ["maça", "pera", "uva"];

    let frutasIncluides = frutas.includes("banana");
    console.log(frutasIncluides);
}

// toLowerCasa e toUperCase, tudo minisculo ou maiusculo

function to(){
    let nome = "Felipe"
    let cargo = "Gerente"

    console.log(nome.toLowerCase());
    console.log(cargo.toUpperCase());
}
to()

function foreach(){
    let nomes = ["Kleber","Agata","Evylim","Gabriel"];

    nomes.forEach(nome => console.log("Seu nome é:",nome))
}foreach();


//SOME ->verifca se pelos menos um item atende a condição que passar, mas não mostra qual.

function some (){
    let numeros = [1,2,3,4,5,6,7,8,9,10];

    let temPar = numeros.some(num => num % 2 === 0)
    console.log(temPar);    //true
    
}some()


//EVETY -> verifica se todos os elementos atendem a uma condição

function every(){
    let numeros = [1,2,3,4,5,6,7,8,9,10];

    let temPar = numeros.every(num => num % 2 === 0)
    console.log(temPar);    //true
    
}every()


//SORT -> ordena os elementos do array

function sort (){
    let num = [3,2,7,4,221,54,]
    let letras = ["iji","kebf", "a", "d"]

    letras.sort()           //para letras 
    console.log(letras);

    num.sort((a,b)=> a - b) // para nums
    console.log(num);
    
}sort()

// RESERVE -> inverte a ordem

function reverse (){
    let num = [3,2,7,4,221,54,]
    let letras = ["iji","kebf", "a", "d"]

    letras.reverse()           //para letras 
    console.log(letras);
    
    num.reverse() // para nums
    console.log(num);
    
}reverse()


//JOIN -> AJUSTA OS ELEMENTOS DE UM ARRAY EM UMA STRING

function join (){
    let palavras = ["Olá","seja","bem","vindo"]

    let frase = palavras.join(" ")
    console.log(frase);
}

// PUSH -> ADD ELEMENTOS NO FINAL DO ARRAY
// POP -> REMOVE ELEMENTOS NO FINAL DO ARRAY

function push (){
    let lista = ["A","B"]

    lista.push("C")     //add
    console.log(lista);
    
}push()

function pop (){
    let lista = ["A","B"]

    lista.pop("b")     //add
    console.log(lista);
}pop()


// APPEND COLOCA ELEMENTOS NA TELA, REMOVE TIRA ELES.


//SHIFT -> REMOVE DO INICIO DA LISTA
//UNSHIFT -> ADD NO INICIO DA LISTA

function shift(){
    let lista = ["b","c"]

    lista.unshift("a")
    lista.shift("a")
    console.log(lista);
    
}shift()


//SLICE -> cria uma copia de uma parte da lista

function slice(){
    let num = [1,3,14,24,6,10]
    
    let parte = num.slice(1,6)
    console.log(parte);
    
}slice()


//SPLICE -> remove ou add elementos em qualquer posição

function splice(){
    //remover
    let num = [10,2,14,34,29,1]

    num.splice(1,1);
    console.log(num);
    

    // add
    let frutas = ["uva", "banna","maça","pera"]

    frutas.splice(0,1,"Limão","kiwi") // no 0 ele vai cmc lá, no 1 digo qnts vai remover a partir do zero.
    console.log(frutas);


    frutas.splice(2,0, "Limãp","Manga")
    console.log(frutas);
    
    // se ele apagar um obj, ele vai cmc lá. como não apagou cmc a partir do indice, no caso o dois
}splice()

//REPLACE -> substitui uma parte da string

function replace (){
    let text = "Hello, Word !"

    let newText = text.replace("Word","client"); // onde eu colocar a palavra ele vai trocar
    console.log(newText);
    
}replace()


let textoP = document.getElementById('texto');
let saudacao = prompt("Digite a suadação")
if(saudacao == "bom dia"){
    textoP.textContent = saudacao
} else{
    textoP.textContent = "Sextou 8_8"
}