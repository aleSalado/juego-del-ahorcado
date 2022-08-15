const abrirModal = document.querySelectorAll('[data-open]');
const visible = "modal-visible";
for (let modal of abrirModal) {
    
    modal.addEventListener('click', function () {
        let letras = document.querySelectorAll('.jugando__mostrar-palabra--letras');
        let contador = 0;
        for (let letra of letras) {
            if (letra.classList.contains('visible')) {
                contador++
            }
        }
        let fallidas = document.querySelector('.jugando__mostrar-fallidas')
        fallidas = fallidas.textContent.length
        if (contador === letras.length) {
            if (modal.id === 'boton-nuevo-juego') {
                let modalId = this.dataset.open;
                document.getElementById(modalId).classList.add(visible);
                return
            }
            if (modal.id === 'boton-desistir') {
                let botonDesistir = document.getElementById('boton-desistir');
                animacion(botonDesistir, 'boton-temblar', 2000)
            }
        }
        if (contador !== letras.length || letras.length === 0) {
            let modalId = this.dataset.open;
            if (modal.id === 'boton-desistir') {
                let palabra = document.querySelector('.jugando__mostrar-palabra');
                let contenedor = document.querySelector('.modal__ver-palabra--palabra');
                palabra = palabra.textContent;
                contenedor.textContent = palabra
                if (fallidas === 8) {
                    modalId = this.dataset.open2;
                }
            }
            if (modal.id === 'boton-nuevo-juego') {
                if (fallidas === 8) {
                    document.getElementById(modalId).classList.add(visible);
                    return
                }
                let botonNuevoJuego = document.getElementById('boton-nuevo-juego');
                animacion(botonNuevoJuego, 'boton-temblar', 2000)
                return
            }
            document.getElementById(modalId).classList.add(visible);
        }
    });
}
const cerrarModal = document.querySelectorAll('[data-close]');
for (let modal of cerrarModal) {
    modal.addEventListener('click', function () {
        this.parentElement.parentElement.classList.remove(visible);
        this.parentElement.parentElement.parentElement.classList.remove(visible);
    });
}
document.addEventListener("click", event => {
    if (event.target == document.querySelector(".modal.modal-visible")) {
        if (event.target.id === 'modal-ver-palabra') moverInicio();
        document.querySelector(".modal.modal-visible").classList.remove(visible);
    }
});