
let saldo = 1000
while (true) {
    alert(".:MENU:. \n 1. Ingresar dinero en la cuenta \n 2. Retirar dinero de la cuenta \n 3. Mostrar dinero disponible \n 4. Salir")
    opcion = parseInt(prompt("Digite una opción: "))


    if (opcion===1){
        extra = parseFloat(prompt("Cuanto dinero desea ingresar en la cuenta ->"))
        saldo += extra
        alert("Su saldo es de:" + saldo)
    }
    else if (opcion===2){
        retirar = parseFloat(prompt("Cuanto dinero desea retirar? -> "))
        if (retirar>saldo)
            alert("No tiene esa cantidad de dinero")
        else
            (saldo-=retirar)
            alert("Dinero en la cuenta: " + saldo)
    }
    else if (opcion===3){
        alert("Dinero en la cuenta: " + saldo)
    }
    else if (opcion===4){
        alert("Gracias por usar su cajero automatico")
        break
    }
    else{
        alert("Error opcion inválida")
        }

    }