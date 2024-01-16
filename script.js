document.addEventListener('DOMContentLoaded', function () {
    var menu = document.getElementById('menu');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            menu.style.background = '#555'; // Change background color when scrolled
        } else {
            menu.style.background = '#333'; // Revert to original background color
        }
    });
});
