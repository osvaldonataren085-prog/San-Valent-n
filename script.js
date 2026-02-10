/* ===============================
   CONTADOR DE TIEMPO
================================ */

const startDate = new Date("2024-12-14T04:00");

function updateTime() {
    const now = new Date();
    let diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff %= (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff %= (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));
    const seconds = Math.floor(diff / 1000);

    const timeEl = document.getElementById("time");
    if (timeEl) {
        timeEl.textContent =
            `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
    }
}

setInterval(updateTime, 1000);
updateTime();


/* ===============================
   COPA DEL ÁRBOL (ARRIBA DEL TRONCO)
================================ */

const heartsContainer = document.querySelector(".hearts");

const TOTAL_HEARTS = 360;
const SCALE = 1.05;

// 🔺 SUBIMOS LA COPA
const CENTER_X = 130;
const CENTER_Y = 120; // ← antes 120, ahora más arriba

if (heartsContainer) {
    heartsContainer.innerHTML = "";
    heartsContainer.style.position = "absolute";
    heartsContainer.style.zIndex = "3"; // por encima del tronco

    for (let i = 0; i < TOTAL_HEARTS; i++) {

        const heart = document.createElement("div");
        heart.className = "heart";
        heart.style.position = "absolute";
        heart.style.zIndex = "3";

        let x, y, inside = false;

        while (!inside) {
            const px = (Math.random() * 2 - 1) * 1.15;
            const py = (Math.random() * 2 - 1) * 1.15;

            const eq =
                Math.pow(px * px + py * py - 1, 3) -
                px * px * py * py * py;

            if (eq <= 0) {
                x = px;
                y = py;
                inside = true;
            }
        }

        heart.style.left = `${CENTER_X + x * 90 * SCALE}px`;
        heart.style.bottom = `${CENTER_Y + y * 90 * SCALE}px`;

        const size = 12 + Math.random() * 6;
        heart.style.width = size + "px";
        heart.style.height = size + "px";

        heart.style.background =
            `hsl(${345 + Math.random() * 15}, 80%, 60%)`;

        heart.style.opacity = 0.9;

        heartsContainer.appendChild(heart);
    }
}


/* ===============================
   CAÍDA DE CORAZONES
================================ */

const FALLING_TOTAL = 80;

for (let i = 0; i < FALLING_TOTAL; i++) {
    const fall = document.createElement("div");
    fall.className = "heart falling";

    const size = 10 + Math.random() * 12;
    fall.style.width = size + "px";
    fall.style.height = size + "px";

    fall.style.left = `${Math.random() * window.innerWidth}px`;
    fall.style.top = `${-50 - Math.random() * 300}px`;

    fall.style.background =
        `hsl(${345 + Math.random() * 15}, 80%, 65%)`;

    fall.style.opacity = 0.8;

    fall.style.animationDelay = `${Math.random() * 5}s`;
    fall.style.animationDuration = `${6 + Math.random() * 4}s`;

    document.body.appendChild(fall);
}

