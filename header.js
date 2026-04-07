fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('site-header').innerHTML = data;

        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.main-nav a');

        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href');

            if (linkPage === currentPage) {
                link.classList.add('active');
            }
        });
    });