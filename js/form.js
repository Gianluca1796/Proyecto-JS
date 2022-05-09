//FORMULARIO DE REGISTRO
let formulario = document.getElementById("idForm");

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    let username = document.getElementById('user').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    let usuario = {
        username: username,
        password: password,
        email: email
    }
    let usuarioJSON = JSON.stringify(usuario)
    localStorage.setItem("Usuario", usuarioJSON)

    let usuarioParseado = JSON.parse(localStorage.getItem("Usuario"))

    console.log(usuarioParseado)

    formulario.reset()
})


