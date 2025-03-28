document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger");
    const logo = document.querySelector(".navbar-logo");

    // Função para alternar o menu hambúrguer
    function toggleMenu() {
        if (menu && hamburger) {
            menu.classList.toggle("active");
            hamburger.classList.toggle("active");
        }
    }

    // Adiciona evento de clique ao hambúrguer
    if (hamburger) {
        hamburger.addEventListener("click", toggleMenu);
    }

    // Função para rolagem suave
    function smoothScroll(targetId) {
        if (targetId === "topo") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        } else {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Ajuste para compensar a navbar fixa
                    behavior: "smooth"
                });
            }
        }
    }

    // Aplica scroll suave nos links da navbar
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            smoothScroll(targetId);

            // Fecha o menu hambúrguer ao clicar em um link
            if (menu && hamburger) {
                menu.classList.remove("active");
                hamburger.classList.remove("active");
            }
        });
    });

    // Aplica scroll suave ao clicar no logo
    if (logo) {
        logo.addEventListener("click", function (e) {
            e.preventDefault();
            smoothScroll("topo");

            // Fecha o menu hambúrguer ao clicar no logo
            if (menu && hamburger) {
                menu.classList.remove("active");
                hamburger.classList.remove("active");
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modalPDM");
    const closeButton = document.querySelector(".close");

    function openModal() {
        modal.style.display = "flex";
    }

    function closeModal() {
        modal.style.display = "none";
    }

    document.querySelector(".modal-trigger").addEventListener("click", function (event) {
        event.preventDefault();
        openModal();
    });

    closeButton.addEventListener("click", closeModal);

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});

function openModal(id) {
    document.getElementById("modal-" + id).style.display = "flex";
}

function closeModal(id) {
    document.getElementById("modal-" + id).style.display = "none";
}

window.onclick = function (event) {
    document.querySelectorAll(".modal").forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};

