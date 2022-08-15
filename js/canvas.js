function dibujarCuerpo(intentos) {
    let canvas = document.getElementById('personaje-canvas');
    let ctx = canvas.getContext('2d');
    canvas.width = 300;
    canvas.height = 325;
    ctx.strokeStyle = "#a1b7cc";
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    let cuerpo = {
        m1: { intento: 8, moveToX: 40, moveToY: 315, lineToX: 260, lineToY: 315 },
        m2: { intento: 7, moveToX: 85, moveToY: 15, lineToX: 85, lineToY: 315 },
        m3: { intento: 6, moveToX: 85, moveToY: 15, lineToX: 215, lineToY: 15 },
        soga: { intento: 5, moveToX: 215, moveToY: 15, lineToX: 215, lineToY: 65 },
        pecho: { intento: 4, moveToX: 215, moveToY: 115, lineToX: 215, lineToY: 215 },
        brazo1: { intento: 3, moveToX: 215, moveToY: 115, lineToX: 255, lineToY: 175 },
        brazo2: { intento: 2, moveToX: 215, moveToY: 115, lineToX: 175, lineToY: 175 },
        pierna1: { intento: 1, moveToX: 215, moveToY: 215, lineToX: 255, lineToY: 275 },
        pierna2: { intento: 0, moveToX: 215, moveToY: 215, lineToX: 175, lineToY: 275 }
    }
    for (let key in cuerpo) {
        if (cuerpo[key].intento >= intentos) {
            ctx.beginPath();
            ctx.moveTo(cuerpo[key].moveToX, cuerpo[key].moveToY);
            ctx.lineTo(cuerpo[key].lineToX, cuerpo[key].lineToY);
            ctx.stroke();
        }
        if (5 > intentos) {
            ctx.beginPath();
            ctx.arc(215, 90, 25, 0, 2 * Math.PI);
            ctx.stroke();
        }
    }
}