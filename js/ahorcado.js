const ahorcado = function (intentos, saltarEvento) {
    let palabraOculta = document.querySelector('.jugando__mostrar-palabra'),
        letras = palabraOculta.querySelectorAll('.jugando__mostrar-palabra--letras'),
        incluido = false,
        contenido = '',
        palabra = palabraOculta.textContent,
        palabraVerificacion = palabraOculta.textContent,
        valorActual = 1;
    const letraPrueba = (saltarEvento, caracter) => {
        let inicio = document.querySelector('.inicio');
        let modales = document.querySelectorAll('.modal');
        for (let modal of modales) {
            if (modal.classList.contains('modal-visible') || !inicio.classList.contains('desplazar-inicio-izq')) return
        }
        if (saltarEvento) {
            for (let i = 0; i < listoCantidad; i++) valorActual++;
            return
        }
        let letraPresionada = caracter.toUpperCase();
        //let letraPresionada = event.key.toUpperCase();
        if (restricciones(letraPresionada) || letraPresionada === ' ' || !palabra || !intentos) return
        if (letraPresionada.length === 1) {
            letras.forEach(letra => {
                if (letraPresionada === letra.textContent) {
                    letra.classList.add('visible');
                    palabra = palabra.replace(letraPresionada, '');
                    if (!palabra) setTimeout(() => resultado('modal-ganaste'), 300);
                    incluido = true;
                }
            });
            if (!incluido && !contenido.includes(letraPresionada) && intentos > 0) { 
                let letrasFallidas = document.querySelector('.jugando__mostrar-fallidas');
                crearElemento(letraPresionada, letrasFallidas, 'p', 'jugando__mostrar-fallidas--letras');
                contenido += letraPresionada;
                intentos--;
                dibujarCuerpo(intentos);
                if (!intentos) setTimeout(() => {
                alert(intentos, 'porque!!?');
                resultado('modal-perdiste'), 300});
            };
            incluido = false;
        }
    };
    if (listoCantidad) letraPrueba(saltarEvento);
    const campoTexto = document.getElementById('probar-letra');
    campoTexto.addEventListener('input', (event) => {
        let saltarEvento = false;
        console.log(campoTexto.value.substr(-1));
        let caracter = campoTexto.value.substr(-1);
        if (palabraVerificacion === palabraOculta.textContent){
            if (listoCantidad === valorActual || valorActual===1) letraPrueba(saltarEvento,caracter);
        }
    })
}