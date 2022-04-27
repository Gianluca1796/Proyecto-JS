//Declaré las variables necesarias para que mi programa funcione
let saldo = 0;
let continua = true;
let opcion;
let ingreso;
let retiro;
let servicios;
let pagos;
let confirmacion;
let nombreUsuario;
let apellidoUsuario;
let mailUsuario;
let dniUsuario;
let ciudadUsuario;
let provinciaUsuario;

// Declaré la clase Usuario, para luego crear objetos "usuario"
class Usuario {
    constructor(nombre, apellido, email, dni, ciudad, provincia) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.dni = dni;
        this.ciudad = ciudad;
        this.provincia = provincia;
    }
}
// Cree los usuarios del programa
const usuario1 = new Usuario("Pedro", "Rodriguez", "p.rodriguez@gmail.com", 23456789, "Capital Federal", "Buenos Aires");
const usuario2 = new Usuario("Laura", "Vila", "laura1996@gmail.com", 23189047, "Rosario", "Santa Fe");
const usuario3 = new Usuario("Martin", "Paez", "mpaez.17@gmail.com", 18763408, "Rosario", "Santa Fe");
// El usuario elije crear nuevo usuario para poder avanzar
let nuevousuario;
do {
    nuevousuario = parseInt(prompt(`Elije un usuario \n 1) ${usuario1.nombre} \n 2) ${usuario2.nombre} \n 3) ${usuario3.nombre}\n 4) Crear nuevo usuario`));
} while (
    nuevousuario != 4);
// Creación del nuevo usuario
if (nuevousuario == 4) {
    do {
        nombreUsuario = prompt("Ingresá tu nombre");
    } while (!isNaN(nombreUsuario) || nombreUsuario == " ");
    do {
        apellidoUsuario = prompt("Ingresá tu apellido");
    } while (!isNaN(apellidoUsuario || apellidoUsuario == " "));
    do {
        mailUsuario = prompt("Ingresá tu E-mail");
    } while (!isNaN(mailUsuario || mailUsuario == " "));
    do {
        dniUsuario = prompt("Ingresá tu DNI");
    } while (isNaN(dniUsuario || dniUsuario == ""));
    do {
        ciudadUsuario = prompt("Ingresá tu ciudad");
    } while (!isNaN(ciudadUsuario || ciudadUsuario == " "));
    do {
        provinciaUsuario = prompt("Ingresá tu provincia");
    } while (!isNaN(provinciaUsuario || provinciaUsuario == " "));
}
// Creación del nuevo usuario usando la información dada por el usuario del programa
const usuario4 = new Usuario(nombreUsuario, apellidoUsuario, mailUsuario, dniUsuario, ciudadUsuario, provinciaUsuario);

// Creo un array con los usuarios
let contacto = [usuario1, usuario2, usuario3];

// Con el método push agregue al usuario4 al array contacto
contacto.push(usuario4);

//Creé la función "pago" para reutilizar su estructura cada vez que el usuario quiera pagar un servicio
const pago = () => {
    pagos = parseInt(prompt("Ingresá el monto a pagar"));
    if (isNaN(pagos)) {
        alert("Ingresá una opción válida");
    } else if (pagos > saldo) {
        alert("No cuenta con ese dinero en la cuenta");
        alert(`Su saldo es de: ${saldo}`);
    } else {
        saldo -= pagos;
        alert(
            `Pago realizado correctamente. \n Comprobante n° 1001 \n Su saldo es de ` +
            saldo
        );
    }
};

//Inicio el bucle de mi programa
while (continua) {
    opcion = parseInt(
        prompt(
            "INGRESE UNA OPCIÓN VÁLIDA\n 1) Ingresar dinero en la cuenta \n 2) Retirar dinero de la cuenta \n 3) Mostrar dinero en la cuenta \n 4) Pagar servicios \n 5) Contacto \n 6) Salir"
        )
    );
    if (opcion === 1) {
        ingreso = parseInt(prompt("Ingrese el dinero"));
        if (isNaN(ingreso)) {
            alert("Ingresá un monto válido");
        } else {
            saldo += ingreso;
            alert(`Su saldo es de ${saldo}`);
        }
    } else if (opcion === 2) {
        retiro = parseInt(prompt("¿Cuánto desea retirar?"));
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
        servicios = parseInt(
            prompt(
                "¿Qué servicio quieres pagar? \n 1. Agua \n 2. Luz \n 3. Gas \n 4. Internet \n 5. ABL"
            )
        );
        if (isNaN(servicios) || servicios > 5 || servicios < 1) {
            alert("Ingrese un número válido");
        } else if (servicios === 1) {
            pago();
        } else if (opcion === 2) {
            pago();
        } else if (opcion === 3) {
            pago();
        } else if (opcion === 4) {
            pago();
        } else if (opcion === 5) {
            pago();
        }
    } else if (opcion === 5) {
        alert("Confirme su información de contacto para comunicarnos con usted");
        confirmacion = `Nombre: ${contacto[3].nombre} \n Apellido: ${contacto[3].apellido} \n E-mail: ${contacto[3].email} \n DNI: ${contacto[3].dni} \n Ciudad: ${contacto[3].ciudad} \n Provincia: ${contacto[3].provincia}`
        alert(confirmacion);
    } else if (opcion === 6) {
        alert(`Gracias ${usuario4.nombre} por usar su billetera virtual`);
        continua = false;
    } else {
        alert("Opción inválida");
    }
}