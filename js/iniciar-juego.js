let botonIniciarJuego = document.getElementById('boton-iniciar-juego');
botonIniciarJuego.addEventListener('click', iniciarJuego);
function iniciarJuego() {
    let palabra = document.querySelector('.jugando__mostrar-palabra').textContent;
    let cambiarPalabra = document.getElementById('boton-cambiar-palabra');
    let inicio = document.querySelector('.inicio');
    if (!palabra) {
        animacion(botonIniciarJuego, 'boton-temblar', 2000)
        animacion(cambiarPalabra, 'boton-obligatorio', 2000)
        return
    }
    if (inicio.classList.contains('desplazar-inicio-der')) {
        inicio.classList.remove('desplazar-inicio-der')
    }
    animacion(inicio, 'desplazar-inicio-izq', 0)
}