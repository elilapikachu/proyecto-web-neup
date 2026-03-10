fetch('/frontend/src/app/components/navbar.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('navbar-container').innerHTML = html;

        const usuario = JSON.parse(localStorage.getItem('UsuarioLogueado')) || false;
        const logueado = document.getElementById('logueado');
        const registro = document.getElementById('registro');

        if (!usuario) {
            logueado.classList.add('d-none');
            registro.classList.remove('d-none');
        } else {
            logueado.classList.remove('d-none');
            logueado.classList.add('d-flex', 'align-items-center', 'gap-2');
            registro.classList.add('d-none');

            const perfil = document.getElementById('usuarioPerfil');
            if (perfil) perfil.textContent = usuario.name;
        }

        document.querySelectorAll('.navbar-neup .nav-link').forEach(link => {
            if (link.href === window.location.href) link.classList.add('active');
        });

        const logout = document.querySelector('#logout')

        logout.addEventListener('click', () => {
            alert('Hasta pronto!')
            localStorage.removeItem('UsuarioLogueado')
            window.location.href = '/frontend/src/app/pages/RegistroEInicioDeSesión.html'
        })
    });