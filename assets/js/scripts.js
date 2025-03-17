document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    // 🔹 Garante que a navbar nunca fique transparente demais
    function updateNavbar() {
        if (window.scrollY > 10) { 
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    // 🔹 Aplica o estado correto da navbar ao carregar a página
    updateNavbar();
    window.addEventListener("scroll", updateNavbar);
});
