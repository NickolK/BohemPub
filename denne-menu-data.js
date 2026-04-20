// jednoduché dáta na 1 týždeň – raz za týždeň len prepíšeš texty

const DAILY_MENU = [
    {
        day: "Pondelok",
        soup: "Slepačí vývar ",
        meals: [
            "1 Bravčový rezeň, majonézový šalát",
        ]
    },
    {
        day: "Utorok",
        soup: "Zeleninová krémová polievka",
        meals: [
            "1 Vyprážane kuracia prsia plnené nivou, ryža",

        ]
    },
    {
        day: "Streda",
        soup: "Kapustová polievka",
        meals: [
            "1 Sviečková na smotane , kurací plátok , parená knedľa",

        ],
    },
    {
        day: "Štvrtok",
        soup: "Brokolicová polievka",
        meals: [
            "1 Pečený bôčik , zemiaková kaša",

        ]
    },
    {
        day: "Piatok",
        soup: "Kulajda",
        meals: [
            "1 Trhané bravčové s cheddar omáčkou , hranolky",
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
