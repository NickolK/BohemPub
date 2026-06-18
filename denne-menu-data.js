// jednoduché dáta na 1 týždeň – raz za týždeň len prepíšeš texty

const DAILY_MENU = [
    {
        day: "Pondelok",
        soup: "Hrášková krémová polievka",
        meals: [
            "1 :Vyprážaný syr, hranolky, tatárska omáčka",
        ]
    },
    {
        day: "Utorok",
        soup: "Fazuľová polievka",
        meals: [
            "1 Bravčové na smotane, halušky",

        ]
    },
    {
        day: "Streda",
        soup: "Hŕstková polievka",
        meals: [
            "1 Bryndzové halušky so slaninkou",

        ],
    },
    {
        day: "Štvrtok",
        soup: "Paradajková polievka so syrom",
        meals: [
            " 1 Gnocchi s hríbovou omáčkou a kuracím mäsom",

        ]
    },
    {
        day: "Piatok",
        soup: "Slepačí vývar",
        meals: [
            "1 Pečené bravčové rebrá, bryndzové halušky",
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
