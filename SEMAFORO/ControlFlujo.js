<!-- Semaforo con control de flujo if,else-->
var semaforo = 'verde';
if (semaforo ==='verde'){
    console.log('Arranca');
} else if (semaforo === 'Amarillo'){
    console.log('Preparate para salir')
}else if (semaforo === 'rojo'){
    console.log('No puedes salir')
}else {
    console.log('Color no permitido')
}

<!-- Semaforo con control de flujo Switch-->
 var producto = 'Naranja';

switch (producto) {
    case 'papaya':
        console.log('Estas pidiendo una papya');
        break;

    case 'Tomate':
            console.log('Estas pidiendo un tomate');
            break;

    case'maracuya':
        console.log('Estas pidiendo una maracuya');
        break;

    case'Naranja':
        console.log('Estas pidiendo una naranja');
        break;
    default:
        console.log('No tengo mas frutas o verduras');

}