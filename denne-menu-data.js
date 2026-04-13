// jednoduché dáta na 1 týždeň – raz za týždeň len prepíšeš texty

const DAILY_MENU = [
    {
        day: "Pondelok",
        soup: "Slepačí vývar",
        meals: [
            "1 Segedínsky guláš, parená knedľa",
            "2 Kuracie stripsy, hranolki, tatárska omáčka",
        ]
    },
    {
        day: "Utorok",
        soup: "Hrachová polievka s párkom",
        meals: [
            "1 Marínovaná krkovička, zemiaková kaša, uhorka",
            "2 Špenátové halušky so šunkou a syrovou omáčkou",
        ]
    },
    {
        day: "Streda",
        soup: "Zeleninová krémová polievka",
        meals: [
            "1 Bravčový guláš na smotane, cestovina",
            "2 Bravčová panenka na hráškovom pyré ",
        ],
    },
    {
        day: "Štvrtok",
        soup: "Kapustnica",
        meals: [
            "1 Kuracie prsia zapečené šunkou a syrom, hranolky",
            "2 Bryndzové halušky so slaninkou",
        ]
    },
    {
        day: "Piatok",
        soup: "Fazuľová polievka",
        meals: [
            "1 Grilovaná bravčová panenka, prírodná omáčka, ryža",
            "2 Hubové krémové rizoto s kuracím mäsom",
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
