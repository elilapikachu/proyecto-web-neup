
const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    alert('Hasta pronto!')
    localStorage.removeItem('UsuarioLogueado')
    window.location.href = '/frontend/src/app/components/RegistroEInicioDeSesión.html'
})