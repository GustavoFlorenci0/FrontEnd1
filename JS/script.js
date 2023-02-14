

// declarando um array em Js

/* let meuArray = [1, 2, 5, 25, 41];

let soma = 0

for (let i = 0; i < meuArray.length; i++) {
    
    soma += meuArray[i];
    console.log(soma);

} */

let novoArray = [1,2,3,4,5,6,7,8];

let soma = 0;

for (let i = 0; i < novoArray.length; i++) {
    
    soma += novoArray[i];
    console.log(soma);
    
}

for (const key in novoArray) {
    
        soma += novoArray[key];
        console.log(soma);
    
}