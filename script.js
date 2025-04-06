document.querySelectorAll('#section-navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = header ? header.offsetHeight : 0;
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const icon = document.querySelector('.dark-mode-toggle i');

    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    icon.classList.add('animate');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');

    setTimeout(() => {
        icon.classList.remove('animate');
    }, 300);

}

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.dark-mode-toggle');
    const icon = toggleButton.querySelector('i');

    const preferDarkMode = localStorage.getItem('theme') === 'dark';
    if (preferDarkMode) {
        document.body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    toggleButton.addEventListener('click', toggleDarkMode);
});