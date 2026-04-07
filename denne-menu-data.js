// jednoduché dáta na 1 týždeň – raz za týždeň len prepíšeš texty

const DAILY_MENU = [
    {
        day: "Pondelok",
        soup: "",
        meals: [
            "Otvárame o 11:00",
        ]
    },
    {
        day: "Utorok",
        soup: "Fazuľová polievka",
        meals: [
            "1 Segedínsky guláš, parená knedľa",
            "2 Kurací steak zapečené s broskyňou a syrom, hranolky",
        ]
    },
    {
        day: "Streda",
        soup: "Brokolicová krémová polievka ",
        meals: [
            "1 Špagety Carbonara",
            "2 Vyprážaný bravčový rezeň, opekané zemiaky, tatárska omáčka ",
        ],
    },
    {
        day: "Štvrtok",
        soup: "Kelová polievka s vajcom",
        meals: [
            "1 Čínske kuracie prsia, ryža",
            "2 Gordon blue s hranolkami",
        ]
    },
    {
        day: "Piatok",
        soup: "Slepačí vývar",
        meals: [
            "1 Zapečené prsia so slaninkou a syrom, tlačené zemiaky, prírodná omáčka ",
            "2 Gordon blue s hranolkami",
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
