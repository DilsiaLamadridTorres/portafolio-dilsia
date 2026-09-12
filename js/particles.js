/* =====================================================
   PARTICLES BACKGROUND
===================================================== */

const canvas = document.getElementById("particlesCanvas");

const ctx = canvas.getContext("2d");


/* =====================================================
   CONFIGURACIÓN DEL CANVAS
===================================================== */

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;


/* =====================================================
   CONFIGURACIÓN
===================================================== */

const particlesArray = [];

const numberOfParticles = 80;

const mouse = {
    x: null,
    y: null,
    radius: 150
};


/* =====================================================
   CLASE PARTICLE
===================================================== */

class Particle {

    constructor() {

        this.x = Math.random() * canvas.width;

        this.y = Math.random() * canvas.height;


        this.size = Math.random() * 2 + 1;


        this.speedX = Math.random() * 0.6 - 0.3;

        this.speedY = Math.random() * 0.6 - 0.3;

    }


    /* -------------------------------------------------
       DIBUJAR PARTÍCULA
    ------------------------------------------------- */

    draw() {

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "rgba(0, 217, 255, 0.7)";

        ctx.fill();

    }


    /* -------------------------------------------------
       ACTUALIZAR MOVIMIENTO
    ------------------------------------------------- */

    update() {

        this.x += this.speedX;

        this.y += this.speedY;


        /* REBOTAR EN LOS BORDES */

        if (this.x > canvas.width || this.x < 0) {

            this.speedX *= -1;

        }


        if (this.y > canvas.height || this.y < 0) {

            this.speedY *= -1;

        }


        /* INTERACCIÓN CON EL MOUSE */

        if (mouse.x !== null && mouse.y !== null) {

            const dx = mouse.x - this.x;

            const dy = mouse.y - this.y;

            const distance = Math.sqrt(
                dx * dx + dy * dy
            );


            if (distance < mouse.radius) {

                const force =
                    (mouse.radius - distance) /
                    mouse.radius;


                this.x -= dx * force * 0.02;

                this.y -= dy * force * 0.02;

            }

        }

    }

}


/* =====================================================
   CREAR PARTÍCULAS
===================================================== */

function initParticles() {

    particlesArray.length = 0;


    let totalParticles = numberOfParticles;


    /* MENOS PARTÍCULAS EN CELULAR */

    if (window.innerWidth < 768) {

        totalParticles = 40;

    }


    for (let i = 0; i < totalParticles; i++) {

        particlesArray.push(
            new Particle()
        );

    }

}


/* =====================================================
   CONECTAR PARTÍCULAS
===================================================== */

function connectParticles() {

    for (let a = 0; a < particlesArray.length; a++) {

        for (
            let b = a + 1;
            b < particlesArray.length;
            b++
        ) {

            const dx =
                particlesArray[a].x -
                particlesArray[b].x;


            const dy =
                particlesArray[a].y -
                particlesArray[b].y;


            const distance =
                Math.sqrt(dx * dx + dy * dy);


            if (distance < 120) {

                const opacity =
                    1 - distance / 120;


                ctx.beginPath();

                ctx.strokeStyle =
                    `rgba(139, 92, 246, ${opacity * 0.25})`;


                ctx.lineWidth = 1;


                ctx.moveTo(
                    particlesArray[a].x,
                    particlesArray[a].y
                );


                ctx.lineTo(
                    particlesArray[b].x,
                    particlesArray[b].y
                );


                ctx.stroke();

            }

        }

    }

}


/* =====================================================
   ANIMACIÓN
===================================================== */

function animateParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    for (let i = 0; i < particlesArray.length; i++) {

        particlesArray[i].update();

        particlesArray[i].draw();

    }


    connectParticles();


    requestAnimationFrame(
        animateParticles
    );

}


/* =====================================================
   MOUSE TRACKING
===================================================== */

window.addEventListener(
    "mousemove",
    function (event) {

        mouse.x = event.x;

        mouse.y = event.y;

    }
);


/* =====================================================
   CUANDO EL MOUSE SALE
===================================================== */

window.addEventListener(
    "mouseout",
    function () {

        mouse.x = null;

        mouse.y = null;

    }
);


/* =====================================================
   RESPONSIVE
===================================================== */

window.addEventListener(
    "resize",
    function () {

        canvas.width = window.innerWidth;

        canvas.height = window.innerHeight;


        initParticles();

    }
);


/* =====================================================
   INICIAR
===================================================== */

initParticles();

animateParticles();