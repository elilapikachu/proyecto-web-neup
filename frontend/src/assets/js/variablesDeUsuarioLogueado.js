document.addEventListener("DOMContentLoaded", () => {

    const usuario = JSON.parse(localStorage.getItem("UsuarioLogueado"));

    if (!usuario) {
        console.log("No hay usuario logueado");
        return;
    }

    const perfilUser = document.getElementById("usuarioPerfil");
    if (perfilUser) {
        perfilUser.textContent = usuario.name;
    }

    
    const perfilName = document.getElementById("usuarioName");
    if (perfilName) {
        perfilName.textContent = usuario.name;
    }


    const email = document.getElementById("profileEmail");
    if (email) {
        email.textContent = usuario.email;
    }

});