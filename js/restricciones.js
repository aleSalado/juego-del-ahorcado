function restricciones(caracter) {
    const prohibiciones = {
        'Numeros': /[0-9]/,
        'Caracteres especiales': /[!"#$%&'°()*+,-./:;<=>?¡¿@[\]^_`{|}~\n]/,
        'Letras con acentos':/^[ÁÉÍÓÚ´ẂŔÝṔĹḰ´Ǵ´´ŚŹ´ĆǗ´ŃḾ]+$/
    };
    let error = '';
    let prohibicion = Object.keys(prohibiciones);
    for (let i = 0; i < prohibicion.length; i++) {
        if (prohibiciones[prohibicion[i]].test(caracter))
            error += `${prohibicion[i]} no son validos!`;
    }
    return error
}