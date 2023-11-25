const verNingresado = (numeroElegido, numeroAleatorio, mensaje) => {
    while (numeroElegido > 3 || numeroElegido < 1 || isNaN(numeroElegido)) {
        alert("Número No Valido - ingrese un número del 1 al 3");
        numeroElegido = prompt("Elije un número del 1-3");
    }

    if (numeroElegido == numeroAleatorio) {
        alert(mensaje);
    } else { 
        alert("Vuelve a intentar");
    }
};

for (let i = 0; i <= 3; i++) {
    let numeroElegido;
    let numeroAleatorio;

    switch (i) {
        case 1:
            numeroElegido = prompt("Elije un numero del 1-3");
            numeroAleatorio = Math.floor(Math.random() * 3) + 1;
            verNingresado(numeroElegido, numeroAleatorio, "¡Felicitaciones! Ganaste 1° Premio");
            break;

        case 2:
            numeroElegido = prompt("Elije un numero del 1-3");
            numeroAleatorio = Math.floor(Math.random() * 3) + 1;
            verNingresado(numeroElegido, numeroAleatorio, "¡Felicitaciones! Ganaste 2° Premio");
            break;

        case 3:
            numeroElegido = prompt("Elije un numero del 1-3");
            numeroAleatorio = Math.floor(Math.random() * 3) + 1;
            verNingresado(numeroElegido, numeroAleatorio, "¡Felicitaciones! Ganaste 3° Premio");
            break;

        default:
            alert("..Bienvenidos..");
    }
}
