document.addEventListener("DOMContentLoaded", function () {
  const desktopToggle = document.getElementById("desktopToggle");
  const mobileToggle = document.getElementById("mobileToggle");

  // Toggle desktop
  if (desktopToggle) {
    desktopToggle.addEventListener("click", () => {
      document.body.classList.toggle("sidebar-collapsed");
    });
  }

  // Toggle mobile
  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      document.body.classList.toggle("mobile-sidebar-open");
    });

    window.addEventListener("click", (e) => {
      const sidebar = document.getElementById("sidebar");
      if (
        document.body.classList.contains("mobile-sidebar-open") &&
        !sidebar.contains(e.target) &&
        !mobileToggle.contains(e.target)
      ) {
        document.body.classList.remove("mobile-sidebar-open");
      }
    });
  }
});
