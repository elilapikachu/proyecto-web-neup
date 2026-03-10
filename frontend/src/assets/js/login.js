const loginForm = document.querySelector('#InicioSesion')

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = document.getElementById("Email_Sesion").value
    const password = document.getElementById("contrasena_sesion").value

    const Users = JSON.parse(localStorage.getItem('usuarios')) || []

    const validUser = Users.find(user => user.email === email && user.password === password)

    if (!validUser) {
        alert('Usuario y/o contraseña incorrectos!')
        return
    }

    alert(`Bienvenido ${validUser.name}`)

    localStorage.setItem('UsuarioLogueado', JSON.stringify(validUser))
    console.log(validUser)

    localStorage.setItem('emailUsuario', validUser.email)
    console.log(validUser.email)

    window.location.href = "/frontend/src/app/components/perfilDelUsuario.html"
})