const calculadora = require('./mate')
const prompt = require('prompt-sync')();

let num = 1
salir:
while(num !=6){
    console.log("Calculadora:");
    console.log("1.Suma \n2.Resta \n3.Multiplicacion \n4.Division \n5.Modulo \n6.Salir");
    num = prompt('Elija una opción: ')

    if(num == 6){
        console.log("Saliendo...")
        break salir;
    }

    const num1 = prompt('Primer número: ')
    const num2 = prompt('Segundo número: ')

    switch (num) {
        case "1":
            console.log('Resultado: '+calculadora.suma(parseInt(num1),parseInt(num2)))
            break;
        case "2":
            console.log('Resultado: '+calculadora.resta(parseInt(num1),parseInt(num2)))
            break;
        case "3":
            console.log('Resultado: '+calculadora.multi(parseInt(num1),parseInt(num2)))
            break;
        case "4":
            console.log('Resultado: '+calculadora.div(parseInt(num1),parseInt(num2)))
            break;
        case "5":
            console.log('Resultado: '+calculadora.mod(parseInt(num1),parseInt(num2)))
            break;
        default:
            console.log('Invalido');
            break salir;
    }
}