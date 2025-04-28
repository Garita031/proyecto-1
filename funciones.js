const boton = document.getElementById('boton__mision');
const contenido = document.getElementById('mision');
let visible = false;

boton.addEventListener('click', () => {
    if (visible) {
    contenido.style.display = 'none';
    } else {
    contenido.style.display = 'block'; 
    }
    visible = !visible;
});

function toggleLightbox(target) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");

    if (target) {
lightboxImage.src = target.src;
lightbox.style.display = "block";
    } else {
lightbox.style.display = "none";
    }
}