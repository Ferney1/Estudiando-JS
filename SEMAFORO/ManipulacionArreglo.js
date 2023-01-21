// Manipulacion arreglo
//ForEach

var letras = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(letras.length);
for(let i = 0; i < letras.length; i++){
    const element =letras[i];
    console.log(element);
}

var camino = ['a', 'b', 'c', 'd', 'e', 'f'];
camino.forEach((elemento)=>console.log(elemento));

// push - shift- pop

//push : una funcion mutable

var agregar= ['l', 'm', 'n'];
agregar.push('f');
console.log(agregar)

// shift: Para odtener el primer elemento de un arreglo

var odtener= ['l', 'm', 'n'];
odtener.shift();
console.log(odtener);

//pop: obtiene el ultimo elemento del arreglo

var ultimoElement = ['l', 'm', 'n'];
ultimoElement.pop();
console.log(ultimoElement)


// map: Es inmutable va transformar un arreglo pero nos va a transformar un nuevo arreglo el cual  no va a modificar el origen.

var estudiantes = ['Ferney', 'Andres', 'Estefa','Lisdelis'];
var asistencia = estudiantes.map((nombre) => {
    return{
        nombre: nombre,
        asistencia:false
    }
})
console.log(estudiantes);
console.log(asistencia);

var producto = [
    {nombre: 'camisas', precios:15},
    {nombre: 'Pantanlon', precios:20},
    {nombre: 'pantalonetas', precios:30}
]
var Impuestos = producto.map((producto)=>{
    return {
        ...producto,
        impuesto:.12
    }
})
var precios = producto.map((producto)=>producto.precios);

console.log(producto);
console.log(Impuestos);
console.log(precios);

// filter: Es inmutable y sirve para filtar elemento dentro de un arreglo en base a
// una condicion de un valor logico.

var universidad =[
    {nombre: 'Ferney',edad:20,matricula:false},
    {nombre: 'Fernando',edad:22,matricula:true},
    {nombre: 'Jose',edad:25,matricula:true},
    {nombre: 'Camila',edad:30,matricula:true},
    {nombre: 'Andres',edad:33,matricula:false},
]

var filtrado = universidad.filter((estudiante)=> estudiante.edad >= 25 && estudiante.matricula);
console.log(universidad);
console.log(filtrado);

//Reduce: va ayudar a reducir un array a un solo valor .

//ejemplo #1
var notas =[4,5,10,3,6]
var suma = notas.reduce((acomulador,notas)=>acomulador + notas,0);
console.log(notas);
console.log(suma);
console.log(suma/notas.length);

//ejemplo #2
// reduce : podemos contar la cantidad de objeto que se repiten dentro de un metodo.

var edades = [21,21,23,23,23,54,54,54,43,18,25,25];
var resultado = edades.reduce((acumulador, edad)=>{
    if (!acumulador[edad]){
        acumulador[edad] = 1
    }else {
        acumulador[edad] += 1
    }
    return acumulador
}, {});
console.log(edades);
console.log(resultado);

//Ejercicio 3
var ventas = [
    {nombre: 'camisas', precios: 12, taltavendidos: 40},
    {nombre: 'zapatos', precios: 40, taltavendidos: 80},
    {nombre: 'chanclas', precios: 8, taltavendidos: 70},
    {nombre: 'cinturon', precios: 10, taltavendidos: 30},
    {nombre: 'franela', precios: 5, taltavendidos: 10},
]
var  resultado = ventas.reduce((acumulador,producto)=>{
    let totalVenta= producto.precios * producto.taltavendidos;
    acumulador[producto.nombre] = `$ ${totalVenta}` ;
    return acumulador;
}, {})
console.log(ventas);
console.log(resultado);

//Ejercicio #4
var universidad =[
    {nombre: 'Ferney',edad:20,matriculado:false},
    {nombre: 'Fernando',edad:22,matricula:true},
    {nombre: 'Jose',edad:25,matricula:true},
    {nombre: 'Camila',edad:30,matricula:true},
    {nombre: 'Andres',edad:33,matricula:false},
];

var resultado = universidad
    .map((estudiante)=>estudiante.matriculado)
    .reduce((acumulador, item)=>{
        if (item){
            acumulador.Matriculado +=1
        }else {
            acumulador.noMatriculado +=1
        }
        return acumulador;
    },{matricula:0, noMatriculado:0})

console.log(universidad);
console.log(resultado);

// some: Va retornar true o false si alguno de los elemento cumple la condicion
var numero = [1,2,3,4,5,6,7,8];
var resultado = numero.some((numeros)=> numero % 2 === 0);
console.log(resultado);

//Every:
var numeros = [2,4,6,8,10];
var resultado = numeros.every((numero)=> numero % 2 === 0);
console.log(resultado);


// find -- findIndex :

var cliente =[
    {id:1,nombre:'ferney'},
    {id:2,nombre:'Andres'},
    {id:3,nombre:'Camila'},
    {id:4,nombre:'Estefa'},
]
var clientes = cliente.find((cliente)=>cliente.id ===1);
console.log(cliente);
console.log(clientes);









