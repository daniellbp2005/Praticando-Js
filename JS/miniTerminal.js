function lanche(){
    let nome = "Os Burguer"
    let cliente = "Gabriel"
    let prod = "Batata Frita"
    let qtd = 2;
    let unitario = 15.00
    
    console.log("=====HAMBURGUER===== \n")
    console.log(`Cliente: ${nome}\n`)
    console.log(`Loja: ${cliente}\n`)
    console.log(`Produto: ${prod}\n`)
    console.log(`Preçounitário: ${unitario}\n`)
    console.log(`Quantidade: ${qtd}\n`)
    console.log(`Total dacompra: ${unitario * qtd}\n`)
    console.log(`Pedido realizado com sucesso! \nObrigado pela preferência.\n \n`)

}

function desafio(){
    let nome = "Livraria"
    let cliente = "Lucas"
    let prod = "HQ do Flash volume completo"
    let qtd = 5;
    let unitario = 18.0;
    
    console.log("=====Livraria===== \n")
    console.log(`Cliente: ${nome}\n`)
    console.log(`Loja: ${cliente}\n`)
    console.log(`Produto: ${prod}\n`)
    console.log(`Preçounitário: ${unitario}\n`)
    console.log(`Quantidade: ${qtd}\n`)
    console.log(`Total dacompra: ${unitario * qtd}\n`)
    console.log(`Pedido realizado com sucesso! \nObrigado pela preferência.\nJajá chega em sua casa\n`)

}

function iniciar (){
    console.log("===== Bem Vindo a Escola ===\n\n");
    let num1 = Number(prompt("Digite a sua Primeira nota\n"));
    let num2 = Number(prompt("Digite a sua Segunda nota\n"));   
    let num3 = Number(prompt("Digite a sua Terceira nota\n\n"));
    let soma = (num1 + num2 + num3)/3
    let media = Number(soma.toFixed(2))

    console.log("=== Sua Media do Sementre foi ====\n");
    console.log(`=== Nota 1: ${num1} `);
    console.log(`=== Nota 2: ${num2} `); 
    console.log(`=== Nota 3: ${num3} `);
    if (soma >= 6){
        console.log(`Vc passou de ano sua media foi ${media}\n`);
        console.log(`Parabens !!!`);
    } else{
        console.log(`Vc não consegui, tente novamene ${media}`);
    }
}

function tem(){
    let temp = Number(prompt("===-- Digite a Tempeatura de Hoje --==="));

    if(temp < 20){
        alert(`Está Frio`);
    } else{
        alert(`Está Calor`);
    }
}

// function lista(){ // percorrendo um array com for
//     let lista = ["banana","maça","laranja","uva","pera"]

//     console.log("===-- Lista de Frutas ===\n\n");
//     for (let item of lista){

//         console.log(`Fruta : ${item}`);
//     }
// }lista();

// function acesso(){
//     let tipo_user = prompt("Digite quem é vc: ")

//     if (tipo_user == "admin"){
//         console.log("\n\nliberado",tipo_user);
//     } else if(tipo_user == "cliente"){
//         console.log("\n\nLiberado",tipo_user);
//     } else {
//         console.log("\n\ninvalido");
//     }
// }acesso()


// let diferente = (5 != 3); //true
// tem como eu inverter tudo dentro, usand um exclamação antes do parenteses, ex:!(5 != 3), ele retoran false.


    let tema = prompt("Digite o tema que vc quer: claro, escuro ou azul");

    switch(tema) {
        case "claro":
            console.log("Tema att");
            break;
        case "escuro":
            console.log("Tema att");
            break;
        default:
            console.log("Tema invalido");
    }


function inpusts(){
    let email = document.getElementById("email");
    let input = document.getElementById("nome");
    let senha = document.getElementById("senha");

    if(input == ""){
        console.log("Tente dnovo")
    }


    botao.addEventListener("enviar", () => {
        console.log("Funcionou")
})
}