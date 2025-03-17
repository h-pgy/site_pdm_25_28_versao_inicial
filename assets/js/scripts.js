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

document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger");

    function toggleMenu() {
        if (menu.classList.contains("active")) {
            menu.classList.remove("active");
            hamburger.classList.remove("active");
        } else {
            menu.classList.add("active");
            hamburger.classList.add("active");
        }
    }

    if (hamburger) {
        hamburger.addEventListener("click", toggleMenu);
    }

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("active");
            hamburger.classList.remove("active");
        });
    });
});

