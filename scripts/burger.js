const hamButton = document.querySelector(".container");
const hamMenu = document.querySelector(".ham-menu");

let count = 0;
function toggleMenu() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    hamMenu.classList.toggle("ham-menu-background");
    hamMenu.classList.toggle("show-ham-menu");
    if (count % 2 == 0) {
        typerr.destroy();
    } else {
    const typerr = new Typed(".typer", {
    strings: ["Hello", "I'm", "Prajwal S"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});
    }
    count++;
}

function closemenu() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        hamMenu.classList.remove("ham-menu-background");
        hamMenu.classList.remove("show-ham-menu");
    }
}

hamButton.addEventListener("click", toggleMenu);
window.addEventListener("scroll", closemenu);