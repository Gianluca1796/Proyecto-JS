let formulario = document.getElementById("idForm");

formulario.addEventListener('submit', (event) =>{
    event.preventDefault()
    let username = document.getElementById('user').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    let usuario = {username:username, email:email, password:password}
    console.log(usuario)
    formulario.reset()

})