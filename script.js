// Selecciona el bot�n "Ver los productos"
const productosButton = document.querySelector('.btn-primary');

// Selecciona la secci�n de productos
const productosSection = document.querySelector('.products');

// Agrega un evento de clic al bot�n
productosButton.addEventListener('click', () => {
    // Agrega la clase "show" a la secci�n de productos
    productosSection.classList.add('show');
});
