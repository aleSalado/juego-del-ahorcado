function eliminarTabs(){
    window.addEventListener('keydown', event => {
        let letraPresionada = event.key;
        if (letraPresionada === 'Tab') event.preventDefault();
    });
}
eliminarTabs();