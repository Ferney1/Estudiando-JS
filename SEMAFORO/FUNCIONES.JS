// FUNCIONES : Declarativa comienza con el nombre (funtion nombreDe LaFuncion)

function saludad(){
    console.log('Hola mundo soy Ferney  ');
}
saludad();


function universidad(nombre){
    console.log(`Que estas estudiando  ${nombre}`);
}
universidad('ferney');

function saludar(nombre){
    return `Hola como estas ${nombre}`
}
var saludo = saludar('ferne');
console.log(saludo);

//Expresion anonima

var suma = function (a, b) {
    return a + b;
}
console.log(suma(2,5));

// funciones flecha

var resta = () => {

}












