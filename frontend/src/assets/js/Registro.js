var a = document.getElementById("InicioSesion");
var b = document.getElementById("registro1");
var c = document.getElementById("elegir");
var btnInicioSesion = document.getElementById("InicioSesionBtn");
var btnRegistro = document.getElementById("registroBtn");

function registro1(){
    a.style.left = "-80rem";
    b.style.left    = "4.125rem";
    c.style.left   = "7.85rem";
    c.style.width = "7.188rem";
    btnInicioSesion.style.color = "var(--negro)";
    btnRegistro.style.color = "var(--blanco)";

}

function InicioSesion(){
    a.style.left = "4rem";
    a.style.top = "9rem";
    b.style.left    = "28.125rem";
    c.style.left   = "0rem";
    c.style.width = "8.75rem"; 
    btnInicioSesion.style.color = "var(--blanco)";
    btnRegistro.style.color = "var(--negro)";
}