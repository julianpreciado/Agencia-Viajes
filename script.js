import { barcelona, roma, paris, londres } from './ciudades.js' // importamos desde el archivo ciudades.js

// Obtengo elementos del DOM (document object model)
let enlaces = document.querySelectorAll('a') // como no hay id sino etiqueta 'a' usamos query: consulta arroja 4 elementos
let tituloElemento = document.getElementById('titulo') // este si tiene id
let subTituloElemento = document.getElementById('subtitulo') // este si tiene id
let parrafoElemento = document.getElementById('parrafo') // --------------------- alt + shift + abajo y se van copiando
let precioElemento = document.getElementById('precio')

// evento clic a cada enlace
enlaces.forEach(function (enlace) { // se recorre el for y la funcion toma cada uno de los enlaces
    enlace.addEventListener('click', function () { // escuchamos cuando hagan clic, en el html se llama onclick
        // remover el enlace activo
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active'); // recorremos los 4 y si hay alguno activo lo removemos
        });

        //agregar clase active al enlace actual
        this.classList.add('active') // this es palabra reservada referida al elemento actual (enlace actual), sera active al que le demos click

        // traer info del objeto correspondiente a la eleccion o enlace actual
        let contenido = obtenerContenido(this.textContent) // textContent lo saca del DOM sera la palabra de una de las 4 ciudades y this es el seleccionado

        // mostrar contenido en DOM
        tituloElemento.innerHTML = contenido.titulo // traigo el elemento obtenido de html y le escribo al html con innerHTML, lo de contenido en ciudades.js
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio

    });
});

//funcion para traer la info correcta desde ciudades.js
function obtenerContenido(enlace) { // enlace es la clave y viene del html y su valor es el objeto traido desde ciudades.js
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}
