// jednoduché dáta na 1 týždeň – raz za týždeň len prepíšeš texty

const DAILY_MENU = [
    {
        day: "Pondelok",
        soup: "Karfiolová krémová polievka",
        meals: [
            "1 Grilované kurča, ryža, čalamáda",
        ]
    },
    {
        day: "Utorok",
        soup: "Cícerová polievka",
        meals: [
            "1 Vyprážaný bravčový rezen, majonézový šalát",

        ]
    },
    {
        day: "Streda",
        soup: "Cesnaková čira polievka so syrom",
        meals: [
            "1 Kurací steak s nivovou omáčkou, ryža, obloha",

        ],
    },
    {
        day: "Štvrtok",
        soup: "Zeleninový vývar",
        meals: [
            " 1 Jemne pikantné kuracie soté v zemiakovej placke posypané syrom",

        ]
    },
    {
        day: "Piatok",
        soup: "Bryndzová polievka",
        meals: [
            "1 Vyprážaná kuracia kapsa plnená nivou, hranolky",
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
