function um_a_Dez (){
    for(let i = 1; i <= 10; i++){
        console.log("Numero: ",i);
        
    }
}um_a_Dez();

function tabuada (){
    let num = prompt("Digite um Numero: ")

    for (let i = 1; i <= 10; i++){{
        console.log(`${num} x ${i} = ${num * i}`);
        
    }}
}

function nNumeros (){
    let num = prompt("Digite um Numero: ");
    let soma = 0;

    for (let i = 1; i <= num; i++){
        soma  += i;
    }
    console.log(`Soma do Numeros: ${soma}`);
    
}

function pares(){// comparação o js converte sozinho, porem soma não.
    let numero = prompt("Digite um Numero: ");

    for (let i = 2; i <= numero; i += 2){
        console.log(i);
    }
};

function advinhacao(){
    let alt = Math.floor(Math.random() * 101) + 1;
    let num = 0
    do{
        num = Number(prompt("Digite um Numero de 1 a 100"));
    } while(num != alt);
    
    console.log("Acertou, o  numero foi: ",alt)
}

function regressiva(){
    let num = Number(prompt("Digite um Numero"));
    
    while(num >= 0){
        console.log(num);
        num -=1
    }
}

function senha(){
    const senha = "daniel"

    do{
        senha = prompt("Digite sua senha: ")
    }while(senha != "daniel"){
        console.log("Senha certa");
    };
}

function parar(){
    let num = 1
    let soma = 0
    do{
        num = Number(prompt("Digite um Numero: "))
        if(num > 0){
            soma += num;
        }else{
            console.log("O valor de somma foi: ",soma);
            break
        }
    }while(num > 0);
}


