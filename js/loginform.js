//FORMULARIO DE INICIO DE SESIÓN

let inicioSesion = document.getElementById("loginForm");

inicioSesion.addEventListener('submit', (e) => {
    e.preventDefault()
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    let usuarioIngresado = {
        username: username,
        password: password
    }
    console.log(usuarioIngresado)
    inicioSesion.reset()
})


