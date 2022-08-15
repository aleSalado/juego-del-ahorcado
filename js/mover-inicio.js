const moverInicio = () => {
    let palabra = document.querySelector('.jugando__mostrar-palabra')
    setTimeout(() => palabra.textContent = '', 800);
    let inicio = document.querySelector('.inicio');
    if (inicio.classList.contains('desplazar-inicio-izq')) inicio.classList.add('desplazar-inicio-der');
}
let botonOk = document.getElementById('boton-ok');
botonOk.addEventListener('click', () => moverInicio())