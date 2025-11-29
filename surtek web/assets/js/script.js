document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Script para el Menú Móvil (Hamburguesa)
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('main-nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // 2. Script para el Filtro del Portafolio (Solo si existe en la página)
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length > 0 && projectCards.length > 0) {
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remueve la clase 'active' de todos los botones
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Añade la clase 'active' al botón clickeado
                button.classList.add('active');

                // Obtiene la categoría a filtrar
                const filterValue = button.getAttribute('data-filter');

                // Itera sobre las tarjetas de proyecto para mostrar/ocultar
                projectCards.forEach(card => {
                    const tags = card.getAttribute('data-tags');

                    if (filterValue === 'all' || tags.includes(filterValue)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
        
        // Asegurar que 'Todos' esté activo al cargar
        document.querySelector('.filter-buttons button[data-filter="all"]').click();
    }
});