/* =====================================================
   INTERACTIVE TERMINAL
===================================================== */


/* =====================================================
   ELEMENTOS DEL DOM
===================================================== */

const terminalForm = document.getElementById("terminalForm");

const terminalInput = document.getElementById("terminalInput");

const terminalOutput = document.getElementById("terminalOutput");


/* =====================================================
   COMANDOS DISPONIBLES
===================================================== */

const commands = {

    help: `
        <p>
            <span class="terminal-command">Available commands:</span>
        </p>

        <p>help → Ver todos los comandos</p>
        <p>about → Conocer más sobre mí</p>
        <p>skills → Ver mi stack tecnológico</p>
        <p>projects → Ver mis proyectos</p>
        <p>contact → Información de contacto</p>
        <p>clear → Limpiar la terminal</p>
    `,


    about: `
        <p>
            Soy <span class="terminal-command">Dilsia Lamadrid</span>,
            Full Stack Developer.
        </p>

        <p>
            Me apasiona entender cómo funciona la tecnología,
            construir aplicaciones web y transformar ideas
            en soluciones digitales.
        </p>

        <p>
            Actualmente también exploro el mundo de la
            <span class="terminal-command">
                Inteligencia Artificial
            </span>.
        </p>
    `,


    skills: `
        <p>
            <span class="terminal-command">
                TECH STACK:
            </span>
        </p>

        <p>
            HTML · CSS · JavaScript
        </p>

        <p>
            Java · SQL · Spring Boot
        </p>

        <p>
            Git · GitHub · Bootstrap · Figma
        </p>

        <p>
            Inteligencia Artificial
        </p>
    `,


    projects: `
        <p>
            <span class="terminal-command">
                PROJECT_01:
            </span>
            TuCancha ⚽
        </p>

        <p>
            Aplicación web para reservas de
            canchas deportivas de fútbol.
        </p>

        <br>

        <p>
            <span class="terminal-command">
                PROJECT_02:
            </span>
            Clínica App 🏥
        </p>

        <p>
            Sistema desarrollado durante una hackathon
            para gestionar médicos, pacientes y citas.
        </p>
    `,


    contact: `
        <p>
            <span class="terminal-command">
                CONTACT:
            </span>
        </p>

        <p>
            Email: lamadrid1992@live.com
        </p>

        <p>
            GitHub: github.com/DilsiaLamadridTorres
        </p>

        <p>
            LinkedIn: linkedin.com/in/dilsia-lamadrid-torres
        </p>
    `,


    "sudo hire dilsia": `
        <br>

        <p style="color: #00ff88;">
            ✓ ACCESS GRANTED
        </p>

        <p>
            🚀 Excelente decisión.
        </p>

        <p>
            Dilsia está lista para construir
            algo increíble contigo.
        </p>

        <p style="color: #00d9ff;">
            SYSTEM STATUS: READY TO BUILD.
        </p>

        <br>
    `

};


/* =====================================================
   MOSTRAR COMANDO
===================================================== */

function printCommand(command) {

    const commandLine = document.createElement("p");

    commandLine.innerHTML = `
        <span class="terminal-prompt">
            dilsia@portfolio:~$
        </span>
        ${command}
    `;

    terminalOutput.appendChild(commandLine);

}


/* =====================================================
   MOSTRAR RESPUESTA
===================================================== */

function printResponse(response) {

    const responseContainer = document.createElement("div");

    responseContainer.innerHTML = response;

    terminalOutput.appendChild(responseContainer);

}


/* =====================================================
   PROCESAR COMANDOS
===================================================== */

function processCommand(command) {

    const cleanCommand = command
        .trim()
        .toLowerCase();


    /* LIMPIAR TERMINAL */

    if (cleanCommand === "clear") {

        terminalOutput.innerHTML = "";

        return;

    }


    /* COMANDO EXISTENTE */

    if (commands[cleanCommand]) {

        printResponse(
            commands[cleanCommand]
        );

    } else {

        printResponse(`
            <p>
                Command not found:
                <span style="color:#ff3cac;">
                    ${command}
                </span>
            </p>

            <p>
                Type
                <span class="terminal-command">
                    help
                </span>
                to see available commands.
            </p>
        `);

    }


    /* BAJAR AUTOMÁTICAMENTE */

    terminalOutput.scrollTop =
        terminalOutput.scrollHeight;

}


/* =====================================================
   EVENTO SUBMIT
===================================================== */

terminalForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const command =
            terminalInput.value;


        /* EVITAR COMANDO VACÍO */

        if (!command.trim()) {

            return;

        }


        /* MOSTRAR COMANDO */

        printCommand(command);


        /* PROCESAR */

        processCommand(command);


        /* LIMPIAR INPUT */

        terminalInput.value = "";

    }
);


/* =====================================================
   FOCUS EN LA TERMINAL
===================================================== */

document.addEventListener(
    "click",
    function (event) {

        if (
            event.target.closest(".terminal")
        ) {

            terminalInput.focus();

        }

    }
);