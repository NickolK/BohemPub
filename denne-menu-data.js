// jednoduché dáta na 1 týždeň – raz za týždeň len prepíšeš texty

const DAILY_MENU = [
    {
        day: "Pondelok",
        soup: "Zeleninová polievka",
        meals: [
            "1 Bravčový steak, opekané zemiaky, hríbová omáčka",
        ]
    },
    {
        day: "Utorok",
        soup: "Hrstková polievka",
        meals: [
            "1 Madarský guláš, parená knedľa",

        ]
    },
    {
        day: "Streda",
        soup: "Fazulová polievka",
        meals: [
            "1 Kuracie soté na zelenine, ryža",

        ],
    },
    {
        day: "Štvrtok",
        soup: "Slepačí vývar",
        meals: [
            "1 Pečené kuracie stehno, zemiaková kaša, kyslá úhorka",

        ]
    },
    {
        day: "Piatok",
        soup: "Kapustnica",
        meals: [
            "1 Bravčové soté na hrášku, ryža",
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
