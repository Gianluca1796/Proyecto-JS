//DECLARÉ VARIABLES NECESARIAS PARA MI PROGRAMA
let saldo = 0;
let continua = true;
let nombreUsuario = "";
let apellidoUsuario = "";
let mailUsuario = "";
let dniUsuario = "";
let ciudadUsuario = "";
let provinciaUsuario = "";


// DECLARÉ LA CLASE USUARIO PARA LUEGO CREAR OBJETOS "USUARIOS"
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

// INSTANCIÉ LOS OBJETOS USUARIOS DEL PROGRAMA
const usuario1 = new Usuario("Pedro", "Rodriguez", "p.rodriguez@gmail.com", 23456789, "Capital Federal", "Buenos Aires");
const usuario2 = new Usuario("Laura", "Vila", "laura1996@gmail.com", 23189047, "Rosario", "Santa Fe");
const usuario3 = new Usuario("Martin", "Paez", "mpaez.17@gmail.com", 18763408, "Rosario", "Santa Fe");

crearUsuario();

// INSTACIÉ EL OBJETO USUARIO CORRESPONDIENTE AL USUARIO DEL PROGRAMA
const usuario4 = new Usuario(nombreUsuario, apellidoUsuario, mailUsuario, dniUsuario, ciudadUsuario, provinciaUsuario);

// CREÉ UN ARRAY QUE CONTENGA LOS USUARIOS YA CREADOS
let arrayUsuarios = [usuario1, usuario2, usuario3];

// CON EL MÉTODO PUSH, AGREGUE EL "NUEVO USUARIO" AL ARRAY USUARIOS.
arrayUsuarios.push(usuario4);

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
            for (let ite of arrayUsuarios) {
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