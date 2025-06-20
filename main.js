// main.js

// Este código se ejecutará una vez que el DOM (Document Object Model) esté completamente cargado.
document.addEventListener('DOMContentLoaded', () => {
    console.log('¡La página ha sido cargada completamente!');
    alert('¡Bienvenido a mi increíble sitio web! chido');

    // También puedes manipular el contenido HTML
    const tituloPrincipal = document.querySelector('h1');
    if (tituloPrincipal) {
        tituloPrincipal.textContent = '¡Hola desde JavaScript!';
    }
});