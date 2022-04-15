let continua = true

let saldo = 1000
while (continua) {
    alert(".:MENU:. \n 1. Ingresar dinero en la cuenta \n 2. Retirar dinero de la cuenta \n 3. Mostrar dinero disponible \n 4. Salir")
    opcion = parseFloat(prompt("Digite una opción: "))

    if (opcion === 1) {
        extra = parseFloat(prompt("Cuanto dinero desea ingresar en la cuenta ->"))
        if (isNaN(extra)) {
            alert("Por favor ingrese un número válido")
        } else {
            saldo += extra
            alert("Su saldo es de:" + saldo)
        }
    } else if (opcion === 2) {
        retirar = parseFloat(prompt("Cuanto dinero desea retirar? -> "))
        if (isNaN(retirar)) {
            alert("Por favor ingrese un número válido")
        } else if (retirar > saldo) {
            alert("No tiene esa cantidad de dinero")
        } else
            (saldo -= retirar)
        alert("Dinero en la cuenta: " + saldo)
    } else if (opcion === 3) {
        alert("Dinero en la cuenta: " + saldo)
    } else if (opcion === 4) {
        alert("Gracias por usar su cajero automatico")
        continua = false
    } else {
        alert("Error opcion inválida")
    }

}