document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            dropdown.classList.add('active');
        });

        dropdown.addEventListener('mouseleave', () => {
            dropdown.classList.remove('active');
        });
    });
});
