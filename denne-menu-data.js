// jednoduché dáta na 1 týždeň – raz za týždeň len prepíšeš texty

const DAILY_MENU = [
    {
        day: "Pondelok",
        soup: "Paradajková polievka",
        meals: [
            "1 Kurací steak zapekaný so šunkou a syrom, hranolky",
        ]
    },
    {
        day: "Utorok",
        soup: "Zeleninová polievka s haluškami",
        meals: [
            "1 Francúzske zemiaky, kyslá uhorka",

        ]
    },
    {
        day: "Streda",
        soup: "Kapustnica",
        meals: [
            "1 Grilované kurča, ryža, kyslá uhorka",

        ],
    },
    {
        day: "Štvrtok",
        soup: "Fazuľová polievka na sladko",
        meals: [
            "1 Maďarský guláš, domáca knedľa",

        ]
    },
    {
        day: "Piatok",
        soup: "Slepačí vývar",
        meals: [
            "1 Kurací steak, syrová omáčka, ryža",
        ]
    }
];

function renderDailyMenu() {
    const container = document.getElementById("daily-menu-container");
    if (!container) return;

    DAILY_MENU.forEach(dayBlock => {
        const dayEl = document.createElement("section");
        dayEl.className = "daily-day";

        const header = document.createElement("h2");
        header.textContent = dayBlock.day.toUpperCase();
        dayEl.appendChild(header);

        const hr = document.createElement("hr");
        dayEl.appendChild(hr);

        const soupP = document.createElement("p");
        soupP.className = "daily-soup";
        soupP.textContent = dayBlock.soup;
        dayEl.appendChild(soupP);

        const ul = document.createElement("ul");
        ul.className = "daily-meals";

        dayBlock.meals.forEach(mealText => {
            const li = document.createElement("li");
            li.textContent = mealText;
            ul.appendChild(li);
        });

        dayEl.appendChild(ul);
        container.appendChild(dayEl);
    });
}

document.addEventListener("DOMContentLoaded", renderDailyMenu);
