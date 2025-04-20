document.addEventListener("DOMContentLoaded", () => {
    const desktopToggle = document.getElementById('desktopToggle');
    const mobileToggle = document.getElementById('mobileToggle');
    const sidebar = document.getElementById('sidebar');
    const body = document.body;

    // Escritorio
    desktopToggle.addEventListener('click', () => {
      body.classList.toggle('sidebar-collapsed');
    });

    // Móvil
    mobileToggle.addEventListener('click', () => {
      body.classList.toggle('mobile-sidebar-open');
    });

    // Cierra sidebar si se hace clic fuera
    window.addEventListener('click', (e) => {
      if (
        body.classList.contains('mobile-sidebar-open') &&
        !sidebar.contains(e.target) &&
        !mobileToggle.contains(e.target)
      ) {
        body.classList.remove('mobile-sidebar-open');
      }
    });

    // Ajustar clase según el tamaño al cargar o redimensionar
    const adjustSidebar = () => {
      if (window.innerWidth >= 992) {
        body.classList.add('sidebar-collapsed');
        body.classList.remove('mobile-sidebar-open');
      } else {
        body.classList.remove('sidebar-collapsed');
      }
    };

    window.addEventListener('resize', adjustSidebar);
    window.addEventListener('load', adjustSidebar);
  });