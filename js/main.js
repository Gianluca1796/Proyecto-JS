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
// DECLARÉ LA CLASE NECESARIA PARA CREAR LOS OBJETOS "SERVICIO"
class Servicio {
    constructor (id, nombre, periodo){
        this.id = id;
        this.nombre = nombre;
        this.periodo = periodo
    }
}
// CREE LOS OBJETOS CORRESPONDIENTES A CADA SERVICIO
const agua = new Servicio (1, "Agua", "Bimestral");
const luz = new Servicio (2, "Luz", "Mensual");
const gas = new Servicio(3, "Gas","Mensual");
const internet = new Servicio(4, "Internet", "Mensual");
const api = new Servicio(5, "API", "Bimestral")

//CREO EL ARRAY QUE CONTENGA LOS OBJETOS SERVICIOS
let arrayServicios = [agua,luz,gas,internet,api]

//LOCALICÉ CADA OBJETO POR SU ID
const idAgua = arrayServicios.find(servicio => servicio.id === 1);
const idLuz = arrayServicios.find(servicio => servicio.id === 2);
const idGas = arrayServicios.find(servicio => servicio.id === 3);
const idInternet = arrayServicios.find(servicio => servicio.id === 4);
const idApi = arrayServicios.find(servicio => servicio.id === 5);



// USUARIOS DEL PROGRAMA
const usuario1 = new Usuario("Pedro", "Rodriguez", "p.rodriguez@gmail.com", 23456789, "Capital Federal", "Buenos Aires");
const usuario2 = new Usuario("Laura", "Vila", "laura1996@gmail.com", 23189047, "Rosario", "Santa Fe");
const usuario3 = new Usuario("Martin", "Paez", "mpaez.17@gmail.com", 18763408, "Rosario", "Santa Fe");

//CREAR USUARIO
crearUsuario();

// NUEVO USUARIO QUE UTILIZA EL PROGRAMA
const usuario4 = new Usuario(nombreUsuario, apellidoUsuario, mailUsuario, dniUsuario, ciudadUsuario, provinciaUsuario);

let servicios = []


//AGREGAR NUEVO USUARIO AL ARRAY CON LOS DEMAS USUARIOS
const usuarios = agregarUsuario();

//INICIAR PROGRAMA
inicioPrograma();