num1 = parseInt(prompt('Entre com o valor inicial: '))
num2 = parseInt(prompt('Entre com o valor final: '))
soma = 0

for(num1+= 1; num1 < num2; num1+=2){
        soma += num1;
}

alert(`A soma é ${soma}`)