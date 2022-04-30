//DECLARÉ VARIABLES GLOBALES NECESARIAS PARA MI PROGRAMA
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

// USUARIOS DEL PROGRAMA
const usuario1 = new Usuario("Pedro", "Rodriguez", "p.rodriguez@gmail.com", 23456789, "Capital Federal", "Buenos Aires");
const usuario2 = new Usuario("Laura", "Vila", "laura1996@gmail.com", 23189047, "Rosario", "Santa Fe");
const usuario3 = new Usuario("Martin", "Paez", "mpaez.17@gmail.com", 18763408, "Rosario", "Santa Fe");

//CREAR USUARIO
crearUsuario();

// NUEVO USUARIO QUE UTILIZA EL PROGRAMA
const usuario4 = new Usuario(nombreUsuario, apellidoUsuario, mailUsuario, dniUsuario, ciudadUsuario, provinciaUsuario);

//AGREGAR NUEVO USUARIO AL ARRAY CON LOS DEMAS USUARIOS
const usuarios = agregarUsuario();

//INICIAR PROGRAMA
inicioPrograma();