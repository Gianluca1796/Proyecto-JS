const crearUsuario = () => {

    // ELECCIÓN DE USUARIO Y CREACIÓN DEL NUEVO USUARIO
    let nuevousuario;
    do {
        nuevousuario = parseInt(prompt(`Elije un usuario \n 1) ${usuario1.nombre} \n 2) ${usuario2.nombre} \n 3) ${usuario3.nombre}\n 4) Crear nuevo usuario`));
    } while (
        nuevousuario != 4);
    if (nuevousuario == 4) {
        do {
            nombreUsuario = prompt("Ingresá tu nombre");
        } while (validacion(nombreUsuario));
        do {
            apellidoUsuario = prompt("Ingresá tu apellido");
        } while (validacion(apellidoUsuario));
        do {
            mailUsuario = prompt("Ingresá tu E-mail");
        } while (validacion(mailUsuario));
        do {
            dniUsuario = parseInt(prompt("Ingresá tu DNI"));
        } while (isNaN(dniUsuario) || (dniUsuario === " "));
        do {
            ciudadUsuario = prompt("Ingresá tu ciudad");
        } while (validacion(ciudadUsuario));
        do {
            provinciaUsuario = prompt("Ingresá tu provincia");
        } while (validacion(provinciaUsuario));
    }
}
const agregarUsuario = () => {
    // CREÉ UN ARRAY QUE CONTENGA LOS USUARIOS YA CREADOS
    let arrayUsuarios = [usuario1, usuario2, usuario3];
    // CON EL MÉTODO PUSH, AGREGUE EL "NUEVO USUARIO" AL ARRAY USUARIOS.
    arrayUsuarios.push(usuario4);
    return arrayUsuarios
}
//CREÉ LA FUNCION "PAGO" PARA USAR CADA VEZ QUE EL USUARIO QUIERA PAGAR UN SERVICIO
const pago = () => {
    const pagos = parseInt(prompt("Ingresá el monto a pagar"));
    if (isNaN(pagos)) {
        alert("Ingresá una opción válida");
    } else if (pagos > saldo) {
        alert("No cuenta con ese dinero en la cuenta");
        alert(`Su saldo es de: ${saldo}`);
    } else {
        saldo -= pagos;
        alert(
            `Pago realizado correctamente. \n Comprobante n° 1001 \n Su saldo es de $ ${saldo}`
        );
    }
};
//CREÉ LA FUNCIÓN "VALIDACION" PARA UTILIZAR A LA HORA DEL VALIDAR LOS DATOS INGRESADOS POR EL USUARIO
let validacion = function checkInfo(dato) {
    if (!isNaN(dato) || dato == " ") {
        return true
    }

}

const inicioPrograma = () => {
    //INICIO DEL BUCLE DE MI PROGRAMA
    while (continua) {
        let opcion = parseInt(
            prompt(
                "INGRESE UNA OPCIÓN VÁLIDA\n 1) Ingresar dinero en la cuenta \n 2) Retirar dinero de la cuenta \n 3) Mostrar dinero en la cuenta \n 4) Pagar servicios \n 5) Contacto \n 6) Salir"
            )
        );
        if (opcion === 1) {
            let ingreso = parseInt(prompt("Ingrese el dinero"));
            if (isNaN(ingreso)) {
                alert("Ingresá un monto válido");
            } else {
                saldo += ingreso;
                alert(`Su saldo es de ${saldo}`);
            }
        } else if (opcion === 2) {
            let retiro = parseInt(prompt("¿Cuánto desea retirar?"));
            if (isNaN(retiro)) {
                alert("Ingreá un monton válido");
            } else if (retiro > saldo) {
                alert("No tenes ese dinero");
            } else {
                saldo -= retiro;
                alert(`Su saldo es de ${saldo}`);
            }
        } else if (opcion === 3) {
            alert(`Su saldo es de $ ${saldo}`);
        } else if (opcion === 4) {
            let servicios = parseInt(
                prompt(
                    "¿Qué servicio quieres pagar? \n 1. Agua \n 2. Luz \n 3. Gas \n 4. Internet \n 5. ABL"
                )
            );
            if (isNaN(servicios) || servicios > 5 || servicios < 1) {
                alert("Ingrese un número válido");
            }else {
                pago();
            }
            } else if (opcion === 5) {
                alert("Confirme su información de contacto para comunicarnos con usted");
                let confirmacion = "";
                for (let ite of usuarios) {
                    confirmacion = `Nombre: ${ite.nombre} \n Apellido: ${ite.apellido} \n DNI: ${ite.dni}\n E-mail: ${ite.email}\n Ciudad: ${ite.ciudad}\n Provincia ${ite.provincia}`
                }
                alert(confirmacion);
            } else if (opcion === 6) {
                alert(`Gracias ${usuario4.nombre} por usar su billetera virtual`);
                continua = false;
            } else {
                alert("Opción inválida");
            }
        }

}