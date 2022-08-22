'use strict'
const input =document.getElementById('input-nueva-palabra');
input.addEventListener('input',()=>{
    let letra = input.value.substr(-1);
    if (restricciones(letra) || letra === ' ') {
        input.value = input.value.replace(/.$/,'');
    }
    verificarInput();
})
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