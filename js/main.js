/* =====================================================
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   1. SYSTEM BOOT
===================================================== */

const bootScreen = document.getElementById("bootScreen");

const bootLines = document.querySelectorAll(".boot-line");

const progressBar = document.querySelector(".boot-progress-bar");


/* Mostrar líneas de carga progresivamente */

function startBootSequence() {

    bootLines.forEach((line, index) => {

        setTimeout(() => {

            line.classList.add("show");

        }, index * 700);

    });


    /* Animar barra de progreso */

    setTimeout(() => {

        progressBar.style.transition = "width 3s ease";

        progressBar.style.width = "100%";

    }, 300);


    /* Ocultar pantalla de inicio */

    setTimeout(() => {

        bootScreen.classList.add("hidden-screen");

    }, 4200);

}


/* =====================================================
   2. SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =====================================================
   3. NAVBAR AL HACER SCROLL
===================================================== */

const navbar = document.getElementById("navbar");


window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =====================================================
   4. MENÚ HAMBURGUESA
===================================================== */

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");


menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");


    const icon = menuToggle.querySelector("i");


    /* Cambiar icono */

    if (navMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* =====================================================
   5. CERRAR MENÚ AL HACER CLICK
===================================================== */

const navLinks = document.querySelectorAll(".nav-menu a");


navLinks.forEach((link) => {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");


        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* =====================================================
   6. TECH DNA - EFECTO PARALLAX
===================================================== */

const techDna = document.querySelector(".tech-dna");


document.addEventListener("mousemove", function (event) {

    /* Solo aplicar en pantallas grandes */

    if (window.innerWidth < 768) {

        return;

    }


    const x = event.clientX / window.innerWidth;

    const y = event.clientY / window.innerHeight;


    const moveX = (x - 0.5) * 15;

    const moveY = (y - 0.5) * 15;


    techDna.style.transform =
        `translate(${moveX}px, ${moveY}px)`;

});


/* =====================================================
   7. HERO PARALLAX
===================================================== */

const heroCode = document.querySelector(".hero-code");


window.addEventListener("mousemove", function (event) {

    /* Solo en pantallas grandes */

    if (window.innerWidth < 768) {

        return;

    }


    const x = event.clientX / window.innerWidth;

    const y = event.clientY / window.innerHeight;


    const moveX = (x - 0.5) * -12;

    const moveY = (y - 0.5) * -12;


    heroCode.style.transform =
        `translate(${moveX}px, ${moveY}px) rotate(3deg)`;

});


/* =====================================================
   8. INICIAR PORTAFOLIO
===================================================== */

window.addEventListener("load", function () {

    startBootSequence();

});