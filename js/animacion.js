function animacion(elemento, clase, tiempo) {
    elemento.classList.add(clase)
    if (tiempo !== 0) setTimeout(() => elemento.classList.remove(clase), tiempo);
}