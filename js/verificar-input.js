'use strict'
const verificarInput = function () {
    let input = document.getElementById('input-nueva-palabra');
    input.addEventListener("keydown", event => {
        let letraPresionada = event.key;
        let regExp = /[a-zA-ZñÑ]/;
        if (!regExp.test(letraPresionada) || letraPresionada === "Dead") {
            event.preventDefault();
            if (letraPresionada === "Dead") event.target.blur();
            restricciones(letraPresionada);
        }
    });
}
//verificarInput();
