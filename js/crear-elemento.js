function crearElemento(elemento,contenedorPadre,etiqueta,clase) {
    let elementoHijo = document.createElement([etiqueta]);
        elementoHijo.classList.add(clase);
        elementoHijo.textContent = elemento;
        contenedorPadre.appendChild(elementoHijo);
        return elementoHijo
}