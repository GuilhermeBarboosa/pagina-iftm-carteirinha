document.addEventListener("DOMContentLoaded", function () {

    const headers = document.querySelectorAll(".br-item.header");

    headers.forEach(header => {
        header.addEventListener("click", function () {

            const currentMenu = this.nextElementSibling;

            if (currentMenu.style.display === "none" || currentMenu.style.display === "") {
                currentMenu.style.display = "block";
            } else {
                currentMenu.style.display = "none";
            }
        });
    });
});
