let continua = true
let saldo = 1000
let extra;
let retirar;
let opcion;
let dni;
let servicios;
let pagos;

const retiro = () => {
    retirar = parseFloat(prompt("Cuanto dinero desea retirar? -> "));
    if (isNaN(retirar)) {
        alert("Por favor ingrese un número válido");
    } else if (retirar > saldo) {
        alert("No tiene esa cantidad de dinero");
    } else
        (saldo -= retirar);
    alert("Dinero en la cuenta: " + saldo);
}
const pago = () => {
    pagos = parseInt(prompt("Ingresá el monto a pagar"));
    if (isNaN(pagos)) {
        alert("Ingresá una opción válida");
    } else if (pagos > saldo) {
        alert("No cuenta con ese dinero en la cuenta");
        alert(`Su saldo es de: ${saldo}`);
    } else {
        (saldo -= pagos)
        alert(`Pago realizado correctamente. \n Comprobante n° 1001 \n Su saldo es de ` + (saldo));
    }

}

while (continua) {
    alert(".:MENU:. \n 1. Ingresar dinero en la cuenta \n 2. Retirar dinero de la cuenta \n 3. Mostrar dinero disponible \n 4. Pagar servicios \n 5. Salir ");
    opcion = parseFloat(prompt("Digite una opción: "));

    if (opcion === 1) {
        extra = parseFloat(prompt("Cuanto dinero desea ingresar en la cuenta ->"));
        if (isNaN(extra)) {
            alert("Por favor ingrese un número válido");
        } else {
            saldo += extra;
            alert("Su saldo es de:" + saldo);
        }
    } else if (opcion === 2) {
        retiro();
    } else if (opcion === 3) {
        alert("Dinero en la cuenta: " + saldo);
    } else if (opcion === 4) {
        dni = parseInt(prompt("Por favor ingrese su DNI"));
        if (isNaN(dni)) {
            alert("DNI inválido");
        } else {
            servicios = parseInt(prompt("¿Qué servicio quieres pagar? \n 1. Agua \n 2. Luz \n 3. Gas \n 4. Internet \n 5. Volver"))
            if (isNaN(servicios) || servicios > 5) {
                alert("Ingresá una opción válida");
            } else if (servicios === 1) {
                pago();
            } else if (servicios === 2) {
                pago()
            } else if (servicios === 3) {
                pago()
            } else if (servicios === 4) {
                pago()
            }
        }
    } else if (opcion === 5) {
        alert("Gracias por usar su cajero automatico");
        continua = false;
    } else {
        alert("Error opcion inválida");
    }
}