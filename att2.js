function valorPedido(){
    console.log("=== Fretadora === \n\n");
    let valorCompra = Number(prompt(`Digite o Valor do Frete`))

    if (valorCompra === 100){
        console.log(`O valor do Frete é grátis`);
    } else if(valorCompra === 50){
        console.log(`O valor do Frete é 10R$`);

    }else {
        console.log(`O valor do Frete é 20R$`);
    }
}valorPedido();

function idadeConvite(){
    let idade = Number(prompt(`Digite sua idade: `));
    let convite = prompt(`Digite c vc tem Convite: `);

    if (idade >= 18 && convite == "sim" || convite == "Sim"){
        console.log("Pode entrar");
    } else{
        console.log("Não pode entrar");
    }
}idadeConvite();
function notas(){
    let nota = prompt(`Digite sua Nota: `)
    if(nota >= 90){
        console.log("Conceito A");
    }else if( nota < 90 && nota >= 80){
        console.log("Conceito B");
    }else if(nota < 80 && nota >= 70){
        console.log("Conceito C");
    }else if(nota < 70 && nota >= 60){
        console.log("Conceito D");
    }else{
        console.log("Conceito F");
    }
}notas();

function IMC (){
    let peso = Number(prompt(`Digite seu peso em kilos:`))
    let altura = Number(prompt(`Digite sua Altura em metros (ex: 1.75)`))

    let altQuadrado = altura * altura;
    let conta =  peso/altQuadrado;

    if(conta >= 25.00){
        console.log("Vc está com Sobrepeso");
    }else if(conta > 18.5 && conta <= 24.9){
        console.log("Vc está com o peso Normal");
    }else{
        console.log("Vc está abaxo do peso");
    }
}IMC();

function estoque(){
    let estoque = Number(prompt(`Digite a quantidade de produtos disponiveis`))
    if(estoque > 10){
        console.log("Produto Disponovel");
        
    }else if(estoque >= 1 && estoque <= 10){
        console.log("Últimas unidades");
    }else{
        console.log("Esgotado");
    }
}
let idade = prompt(`Digite uma idade`);
if(idade >= 18){
    console.log("maior d idade");
}else {
    console.log("menor d idade");
}estoque();


let numero = prompt(`Digite um NUmero`);
if ( numero <= 0){
    console.log("Negativo");
} else{
    console.log("Positivo");
}

let nota = prompt(`Digite uma nota`);
if( nota >= 60){
    console.log("Aprovadp");
}else{
    console.log("Reprovado");
}

let num = prompt(`Digite um numero`);
if(num == 0){
    console.log("Ele é zero");
}else if(num >=1){
    console.log("Ele é positivo");
}else{
    console.log("Ele é negativo");
}

let idade1 = prompt(`Digite sua idade`);
if(idade1 < 13){
    console.log("Crinça");
}else if( idade1 >= 13 && idade1 < 18){
    console.log("Adolescente");
}else{
    console.log("Adulto");
}


let nume = prompt(`Digite um numero`);
if(nume% 2 == 0){
    console.log("Par");
}else {
    console.log("Impar");
}

let ope = prompt(`Digite uma operação`);
let nume1 = Number(prompt(`Digite um numero`))
let nume2 = Number(prompt(`Digite outro numero`))

if(ope == "+"){
    console.log(nume1 + nume2);
}else if(ope =="-"){
    console.log(nume1 - nume2);
}else if(ope =="*"){
    console.log(nume1 * nume2);
}else{
    console.log(nume1 / nume2);
}

let maior1 = Number(prompt(`Digite o valor da compra`));

if(maior1 >= 100){
    let calca = maior1/10;
    console.log(`O valor do desconto foi ${calca}`);
}else{
    console.log("Valor p descoto n atingido");
}