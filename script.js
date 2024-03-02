const navbarEL = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbarEL.classList.add('navbar-scrolled');
    }else if (window.scrollY <= 50) {
       navbarEL.classList.remove('navbar-scrolled');
    }
});


const bar = document.getElementById('bar');
const close = document.getElementById('close');
const menu = document.getElementById('menu'); 


if (bar) {
    bar.addEventListener('click', () => {
        menu.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        menu.classList.remove('active');
    })
}

   // Get the container and the draggable slider
const container = document.getElementById('product-slider');
let isDown = false;
let startX;
let scrollLeft;

// Event listeners for mouse drag
container.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
    isDown = false;
});

container.addEventListener('mouseup', () => {
    isDown = false;
});

container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 3; 
    container.scrollLeft = scrollLeft - walk;
});

