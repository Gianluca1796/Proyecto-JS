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