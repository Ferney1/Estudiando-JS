let personaje = {
    nombre: 'ferney',
    Apellido: 'Paternina',
    celular: '3103688180',
    direccion : 'Cartagena',
    coords : {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['camisa','pantalon'],
}
console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('No.Traje',personaje.trajes );
console.log('´No.Traje',personaje.trajes[1]);

// mas detalle como Borrar :

delete personaje.celular;
console.log(personaje);

// como saber los arrays en cada metodo.
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

objects.fr