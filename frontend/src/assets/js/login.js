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

    /*const perfil = JSON.parse(localStorage.getItem('perfil_' + validUser.email))

    if(perfil){
        window.location.href = "/index.html"
    }else{
        window.location.href = "/frontend/src/app/components/formPerfil.html"
    }*/
   window.location.href = "/frontend/src/app/components/formPerfil.html"

})