const nav = document.getElementById("nav");
const navLinks = document.getElementById("mobile-nav-links");
const hamburgerMenu = document.getElementById("mobile-menu");
const menuBar1 = document.getElementById("bar1");
const menuBar2 = document.getElementById("bar2");
const menuBar3 = document.getElementById("bar3");
const links = document.querySelectorAll("#nav-links");

window.addEventListener("DOMContentLoaded", () => {
    hamburgerMenu.addEventListener("click", () => {
        nav.classList.toggle("menu-open");

        navLinks.classList.toggle("right-0");
        navLinks.classList.toggle("right-[-100%]");

        menuBar1.classList.toggle("rotate-45");
        menuBar1.classList.toggle("w-[1.2rem]");
        menuBar1.classList.toggle("w-[16px]");

        menuBar1.classList.toggle("translate-y-[0.4rem]");

        menuBar2.classList.toggle("opacity-0");

        menuBar3.classList.toggle("-rotate-45");
        menuBar3.classList.toggle("w-[1.2rem]");
        menuBar3.classList.toggle("w-[22px]");
        menuBar3.classList.toggle("-translate-y-[0.5rem]");
    });

    links.forEach((item) => {
        item.addEventListener("click", () => {
            navLinks.classList.toggle("right-0");
            navLinks.classList.toggle("right-[-100%]");

            menuBar1.classList.toggle("rotate-45");
            menuBar1.classList.toggle("w-[1.2rem]");
            menuBar1.classList.toggle("w-[16px]");

            menuBar1.classList.toggle("translate-y-[0.4rem]");

            menuBar2.classList.toggle("opacity-0");

            menuBar3.classList.toggle("-rotate-45");
            menuBar3.classList.toggle("w-[1.2rem]");
            menuBar3.classList.toggle("w-[22px]");
            menuBar3.classList.toggle("-translate-y-[0.5rem]");
        });
    });
});
