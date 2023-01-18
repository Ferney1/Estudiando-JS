// Do while

var contador = 3;

do {
    console.log('Hola mundo');
    contador ++;
}while (contador <= 10);

// for(ExpresionInicial; ExpresionCondicional; ExpresionDeActualizacion){
//    Las instrucciones.
// }

for (let contador = 0; contador <=10; contador++){
     console.log('Resultado es : ' + contador);
}

// For In
var  persona = {
    nombre: 'ferney',
    apellido: 'Paternina',
    edad : 34
}

for (let clave in persona){
    console.log(clave, persona[clave]);
}

// for Out

var arreglo = [1,2,3,4,5,6,7,8,9]
for (let valor of arreglo){
    console.log(valor);
}