document.addEventListener("DOMContentLoaded", function () {

    const headers = document.querySelectorAll(".br-item.header");

    headers.forEach(header => {
        header.addEventListener("click", function () {

            if (header.classList.contains("pb-5")) {
                header.classList.remove("pb-5");
                header.classList.add("pb-0");
            } else {
                header.classList.remove("pb-0");
                header.classList.add("pb-5");
            }

            const currentMenu = this.nextElementSibling;


            if (currentMenu.style.display === "none" || currentMenu.style.display === "") {
                currentMenu.style.display = "block";
            } else {
                currentMenu.style.display = "none";
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".container.navbar");
    const img = document.querySelector(".logo-gov");
    const placeholder = document.querySelector(".navbar-placeholder");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            navbar.classList.add("fixed-navbar");
            placeholder.style.display = "block"; // Exibe o placeholder para evitar o pulo
            img.style.width = "40%";
        } else {
            navbar.classList.remove("fixed-navbar");
            placeholder.style.display = "none"; // Oculta o placeholder
            img.style.width = "60%";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuIcons = document.querySelectorAll(".menu-icon");
    const dropdownMenus = document.querySelectorAll(".dropdown-menu");

    menuIcons.forEach((icon, index) => {
        const correspondingMenu = dropdownMenus[index]; // Associa o ícone ao menu correspondente

        icon.addEventListener("click", function (event) {
            // Fecha outros menus antes de abrir o atual
            dropdownMenus.forEach(menu => {
                if (menu !== correspondingMenu) {
                    menu.style.display = "none";
                }
            });

            // Alterna a exibição do menu atual
            correspondingMenu.style.display = correspondingMenu.style.display === "block" ? "none" : "block";
            event.stopPropagation(); // Impede o evento de clicar fora de afetar este clique
        });
    });

    // Fecha o menu se clicar fora dele
    document.addEventListener("click", function (event) {
        dropdownMenus.forEach(menu => {
            if (!menu.contains(event.target)) {
                menu.style.display = "none";
            }
        });
    });
});
