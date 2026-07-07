// ═══════════════════════════════════════════════════
//  BOHEM PUB — CENTRÁLNA DATABÁZA
//  Všetky texty, ceny, eventy, galéria sú tu.
//  Editujte tento súbor a zmeny sa prejavia všade.
// ═══════════════════════════════════════════════════

const DB = {

    // ── INFO O PODNIKU ──────────────────────────────
    info: {
        name:     "Bohem Pub",
        tagline:  "Remeselné pivo · Kvalitná kuchyňa · Príjemná atmosféra",
        about:    [
            "Naše pivné mestečko je priestor vytvorený pre všetkých, ktorí si chcú vychutnať dobre načapované pivo, pohodové prostredie a príjemné stretnutia s priateľmi. Spájame moderný vzhľad interiéru s atmosférou, do ktorej sa hostia radi vracajú.",
            "Či sa zastavíte na krátke posedenie, večerný program alebo menšiu oslavu, u nás nájdete kombináciu kvalitnej ponuky, pohodlia a autentického zážitku. Každý detail priestoru je navrhnutý tak, aby ste sa cítili dobre."
        ],
        address:  "Gallayova 1, 841 02 Bratislava-Dúbravka",
        tel:      "+421 910 662 662",
        telEvents:"+421 902 810 833",
        instagram:"https://www.instagram.com/bohempub_dubravka/",
        facebook: "https://www.facebook.com/p/BOHEM-Pub-100083066871943/",
        wolt:     "https://wolt.com/sk/svk/bratislava/restaurant/mestecko",
        bistro:   "https://www.bistro.sk/restauracia/bohem-pub",
        bolt:     "https://food.bolt.eu/sk-sk/326-bratislava/p/128266-bohem-pub/",
        mapsEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1329.87351924254!2d17.031557!3d48.1922252!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8d1010fb2ac9%3A0x34053d2b7296108!2sBohem%20Pub!5e0!3m2!1sen!2ssk!4v1772705783031!5m2!1sen!2ssk",
        hours: [
            { day: "Pondelok – Štvrtok", time: "10:00 – 22:00" },
            { day: "Piatok – Sobota",    time: "10:00 – 23:00" },
            { day: "Nedeľa",            time: "10:00 – 21:00" },
        ]
    },

    // ── EVENTY ──────────────────────────────────────
    // Pridajte/zmeňte event tu, automaticky sa zobrazí
    events: [
        {
            id: 1,
            title:  "Zvýhodnený Radler k obedovému menu",
            when:   "Počas obedov",
            desc:   "Doplň si svoje obedové menu o osviežujúci Radler Citrón 0,4l za špeciálnu cenu iba 0,50€.",
            tag:    "Akcia",
            poster: "/images/eventy/radler.png",
        },
        {
            id: 2,
            title: "Letná akcia",
            when: "",
            desc: "Špeciálna víkendová ponuka v BOHÉM PUB! Objednaj si dva kokteily a tretí máš od nás na účet podniku.",
            tag: "Akcia",
            poster: "/images/eventy/APEROL.png"

        },
        {
            id: 3,
            title:  "Víkendová akcia 1+1 na vybrané drinky",
            when:   "Každý piatok, sobota a nedeľa",
            desc:   "Objednaj si 0,4l Fernet Stock, 0,4l Fernet Citrus alebo 0,4l Absolut vodku a druhý pohárik máš od nás na účet podniku.",
            tag:    "Pravidelné",
            poster: "/images/eventy/oboje.png",
        },
        {
            id: 4,
            title:  "Ostrý bonus ku krídlam alebo rebrám",
            when:   "Podľa otváracích hodín",
            desc:   "Daj si v BOHÉM PUB naše krídla alebo rebrá a získaj k nim ABSOLUT TABASCO shot úplne zadarmo!",
            tag:    "Akcia",
            poster: "/images/eventy/KRIDLA.png",
        },

    ],

    // ── GALÉRIA ─────────────────────────────────────
    // Dve sekcie: priestor (interiér) a jedlo
    gallery: {
        priestor: [
            { src: "/images/galeria/priestory/priestor1.jpg",      alt: "" },
            { src: "/images/galeria/priestory/priestor2.jpg",      alt: "" },
            { src: "/images/galeria/priestory/priestor3.jpg",      alt: "",},
            { src: "/images/galeria/priestory/priestor4.jpg",                                          alt: "",},
            { src: "/images/galeria/priestory/priestor5.jpg",                                          alt: "",},
            { src: "/images/galeria/priestory/priestor6.jpg",                                          alt: "",},
        ],
        jedlo: [
            { src: "/images/galeria/jedla/jedlo1.jpg",             alt: "",},
            { src: "/images/galeria/jedla/jedlo2.jpg",             alt: "",},
            { src: "/images/galeria/jedla/jedlo3.jpg",             alt: "",},
            { src: "/images/galeria/jedla/jedlo4.jpg",             alt: "",},
            { src: "/images/galeria/jedla/jedlo5.jpg",             alt: "",},
            { src: "/images/galeria/jedla/jedlo6.jpg",             alt: "",},
            { src: "/images/galeria/jedla/jedlo7.jpg",             alt: "",},
            { src: "/images/galeria/jedla/jedlo8.jpg",             alt: "",},
        ],
    },



    // ── JEDÁLNY LÍSTOK ───────────────────────────────
    menu: {
        predjedla: {
            title: "Predjedlá",
            items: [
                { name: "Tradičný hovädzí tatarák", desc: "100g mäso, 4 ks hrianok", price: "10,50 €" },
                { name: "Hovädzí tatarák s hľuzovkou", desc: "100g mäso, 4 ks hrianok", price: "13,50 €" },
                { name: "Syrovo-šunkový tanier s jahodami a orechmi",desc:"100g", price: "7,50 €" },
                { name: "Bryndzová nátierka s chlebom",desc:"50g", price: "4,50 €" },
                { name: "Oškvarková nátierka s chlebom",desc:"50g", price: "4,50 €" },
                { name: "6 ks cibuľové krúžky", price: "4,90 €" },
            ]
        },
        polievky: {
            title: "Polievky",
            items: [
                { name: "Domáci slepačí vývar s rezancami", desc: "0,33 l", price: "3,90 €" },
                { name: "Poctivá kapustnica s klobásou", desc: "0,33 l, chlieb", price: "4,50 €" },
                { name: "Držková polievka", desc: "0,33 l, chlieb", price: "4,50 €" },
                { name: "Tradičná kulajda", desc: "0,33 l, hubová polievka s vajíčkom a kôprom", price: "4,50 €" },
            ]
        },
        hlavneJedla: {
            title: "Hlavné jedlá",
            items: [
                { name: "Grilovaný kurací steak", desc: "200g", price: "7,90 €" },
                { name: "Grilovaná bravčová panenka", desc: "200g", price: "10,90 €" },
                { name: "Kurací Gordon Bleu", desc: "200g", price: "11,80 €" },
                { name: "Kráľovská panvička", desc: "350g, bravčová panenka s omáčkou z lesných húb", price: "14,50 €" },
                { name: "Cigánska panvička", desc: "350g, kurací steak, volské oko, zemiakové chipsy, demi-glace", price: "12,50 €" },
                { name: "Slovenská panvička", desc: "350g, bryndzové halušky, pečené bravčové rebierka", price: "12,90 €" },
                { name: "Špecialita šéfkuchára", desc: "350g, gril. kuracie plátky s nivovou omáčkou, zemiakové placky, zelenina", price: "12,90 €" },
                { name: "Vyprážané rezníky z panenky", desc: "200g", price: "9,90 €" },
            ]
        },
        specialityBohem: {
            title: "Špeciality Bohém",
            items: [
                { name: "Grilované kuracie krídelká s BBQ, chlieb", desc: "4 ks / 8 ks", price: "7,50 € / 11,50 €" },
                { name: "Pečené bravčové rebrá BBQ, horčica, kyslá a pikantná príloha, chlieb", desc: "500g / 1000g", price: "12,50 € / 22,00 €" },
            ]
        },
        streetFood: {
            title: "Street Food",
            items: [
                { name: "Trhané bravčové s hranolkami a cheddar omáčkou", desc: "150g mäsa / 150g hranoliek", price: "9,50 €" },
                { name: "Hranolky s cheddarom a slaninou", desc: "150g", price: "5,90 €" },
                { name: "Wrap s trhaným bravčovým mäsom", desc: "250g, BBQ omáčka, hranolky, slanina, cheddar, červená cibuľa", price: "10,50 €" },
                { name: "Wrap s grilovaným kuracím", desc: "250g, cezar dressing, ľadový šalát, paradajka, uhorka", price: "9,50 €" },
                { name: "Čiken wrap", desc: "250g, vyprážané kuracie stripsy, slanina, kyslá uhorka, ľadový šalát, slaninový dip", price: "10,50 €" },
            ]
        },
        cestovinySlovenske: {
            title: "Cestoviny & slovenské jedlá",
            items: [
                { name: "Penne s kuracím mäsom", desc: "350g, syrová omáčka, kukurica", price: "10,90 €" },
                { name: "Bryndzové halušky", desc: "350g, so slaninkou a cibuľkou", price: "9,50 €" },
                { name: "Vyprážaný syr", desc: "200g", price: "8,50 €" },
                { name: "Gnocchi s paradajkovou omáčkou a syrom", desc: "200g", price: "9,50 €" },

            ]
        },
        salaty: {
            title: "Šaláty",
            items: [
                { name: "Caesar šalát s grilovaným kuracím mäsom", desc: "350g, rímsky šalát, slanina, parmezán, krutóny, caesar dressing", price: "9,90 €" },
                { name: "Miešaný šalát s grilovaným halloumi syrom", desc: "350g, listový šalát, cherry paradajky, medovo-horčicový dressing", price: "9,90 €" },
            ]
        },
        pizza: {
            title: "Pizza",
            items: [
                { name: "Margherita", desc: "400g, paradajkový základ, mozzarella, bazalka, olivový olej", price: "7,90 €" },
                { name: "Corleone", desc: "400g, paradajkový základ, mozzarella, šunka, kukurica", price: "9,00 €" },
                { name: "Prosciutto", desc: "400g, paradajkový základ, mozzarella, šunka", price: "9,30 €" },
                { name: "Funghi", desc: "400g, paradajkový základ, mozzarella, šampiňóny, šunka", price: "9,90 €" },
                { name: "Capricciosa", desc: "400g, paradajkový základ, mozzarella, šunka, šampiňóny, olivy", price: "9,90 €" },
                { name: "Gazdovská", desc: "400g, paradajkový základ, mozzarella, šunka, slanina, cibuľa, klobása", price: "10,40 €" },
                { name: "Quattro Formaggi", desc: "400g, smotanový základ, 4 druhy syra", price: "9,90 €" },
                { name: "Salami Pikante", desc: "400g, paradajkový základ, mozzarella, saláma, olivy, jalapeños", price: "9,90 €" },
                { name: "Hawaii", desc: "400g, paradajkový základ, mozzarella, šunka, ananás", price: "9,90 €" },
                { name: "Extra prísady",desc:"šunka, syr, slanina, šampiňóny, kukurica", price: "2,00 €" },
                { name: "Pizza štangle", desc: "260g, cesnakový olej", price: "6,90 €" },
            ]
        },
        prilohy: {
            title: "Prílohy",
            items: [
                { name: "Hranolky", desc: "200g", price: "3,50 €" },
                { name: "Pečené zemiaky", desc: "200g", price: "3,50 €" },
                { name: "Ryža", desc: "200g", price: "2,90 €" },
                { name: "Mix listového šalátu", desc: "200g", price: "3,00 €" },
            ]
        },
        TepleOmacky: {
            title: "Teplé omáčky",
            items: [
                { name: "Demi-glace", desc: "50ml", price: "2,90 €" },
                { name: "Nivová omáčka", desc: "50ml", price: "2,90 €" },
                { name: "Syrová omáčka", desc: "30ml", price: "2,90 €" },
                { name: "Hubová omáčka", desc: "30ml", price: "2,90 €" },
            ]
        },
        DomaceDipy: {
            title: "Domáce dipy",
            items: [
                { name: "Slaninová majonéza", desc: "30ml", price: "3,00 €" },
                { name: "Cheddarová omáčka", desc: "30ml", price: "3,00 €" },
                { name: "Tatárska omáčka", desc: "50ml", price: "3,00 €" },
                { name: "Hľuzovková majonéza", desc: "50ml", price: "3,00 €" },
                { name: "Caesar dressing", desc: "30ml", price: "3,00 €" },
                { name: "BBQ omáčka", desc: "30ml", price: "3,00 €" },
                { name: "Kečup", desc: "30ml", price: "2,00 €" },
            ]
        },
        dezerty: {
            title: "Dezerty",
            items: [
                { name: "Palacinky s Nutellou a ovocím", desc: "120g", price: "5,50 €" },
                { name: "Palacinky s džemom a ovocím", desc: "100g", price: "5,50 €" },
                { name: "Plnená buchta s Grankom a maslom", desc: "100g", price: "5,50 €" },
            ]
        },
        niecoKPivu: {
            title: "Niečo k pivu",
            items: [
                { name: "Chrumky", desc:"60g" ,price: "1,50 €" },
                { name: "Arašidy", desc:"60g" ,price: "1,50 €" },
                { name: "Lay's chipsy", desc:"60g" , price: "2,50 €" },
                { name: "Pražené mandle", desc:"60g" , price: "3,00 €" },
            ]
        }
    },

    // ── NÁPOJOVÝ LÍSTOK ──────────────────────────────
    napoje: {
        capovanePivo: {
            title: "Čapované pivo",
            items: [
                { name: "Bohém Krušovice Tank 0,5l", price: "2,49 €" },
                { name: "Bohém Krušovice Tank 0,3l", price: "1,70 €" },
                { name: "Krušovice 10° 0,4l", price: "1,80 €" },
                { name: "Bradáč Discovery / sezónne 0,4l", price: "2,70 €" },
                { name: "Bradáč Ocean Warrior 0,4l", price: "3,20 €" },
                { name: "Maurus 10° 0,4l", price: "1,90 €" },
                { name: "Rezané 0,4l", price: "2,49 €" },
                { name: "Zlatý bažant radler citrón 0,4l", price: "2,00 €" },
            ]
        },
        vinoSekty: {
            title: "Víno & sekty",
            items: [
                { name: "Rizling Rýnsky (biele, suché) 0,1l / 0,75l", price: "1,50 € / 15,00 €" },
                { name: "Frankovka Modrá (červené, suché) 0,1l / 0,75l", price: "1,50 € / 15,00 €" },
                { name: "Frankovka Modrá Rosé (ružové, polosuché) 0,1l", price: "1,50 €" },
                { name: "Prosecco Brut 0,1l", price: "1,50 €" },
                { name: "Pesecká Leánka (biele) 0,75l", price: "15,00 €" },
                { name: "Alibernet (červené, suché) 0,75l", price: "15,00 €" },
                { name: "Abbazia Cuvée Prestige 0,75l", price: "20,00 €" },
                { name: "Luc Belaire 0,75l", price: "40,00 €" },
            ]
        },
        spritze: {
            title: "Spritze",
            items: [
                { name: "Campari Spritz", price: "5,50 €" },
                { name: "Aperol Spritz", price: "5,00 €" },
                { name: "Sarti Spritz", price: "5,50 €" },
                { name: "Hugo Spritz", price: "5,00 €" },
                { name: "Bellini Spritz", price: "5,00 €" },
                { name: "Limoncello Spritz", price: "5,50 €" },
            ]
        },
        koktailyMocktaily: {
            title: "Koktaily & Mocktaily",
            items: [
                { name: "Mojito (Havana Club)", price: "5,50 €" },
                { name: "Cuba Libre (Havana Club)", price: "5,50 €" },
                { name: "Gin Tonic / Pink", price: "5,00 €" },
                { name: "Virgin Mojito", price: "4,50 €" },
                { name: "Virgin Aperol Spritz", price: "4,50 €" },
                { name: "Virgin Gin Tonic", price: "4,50 €" },
            ]
        },
        destilatyRumGin: {
            title: "Rum, Gin, Vodka, Tequila",
            items: [
                { name: "Republika Božkov Exclusive 0,04l", price: "2,20 €" },
                { name: "Havana Club 3r. 0,04l", price: "2,20 €" },
                { name: "Secreto Mistico Vanilla Cookies 0,04l", price: "3,50 €" },
                { name: "Diplomatico 12y 0,04l", price: "3,80 €" },
                { name: "Bumbu 0,04l", price: "3,80 €" },
                { name: "Beefeater / Pink 0,04l", price: "2,20 €" },
                { name: "Olmeca Silver / Reposado 0,04l", price: "3,50 €" },
                { name: "Finlandia / Absolut 0,04l", price: "2,20 €" },
                { name: "Russian Standard Original 0,04l", price: "2,30 €" },
            ]
        },
        likeryDestilaty: {
            title: "Likéry & Destiláty",
            items: [
                { name: "Jägermeister 0,04l", price: "2,50 €" },
                { name: "Tatratea (rôzne druhy) 0,04l", price: "2,60 € - 2,80 €" },
                { name: "Becherovka 0,04l", price: "2,50 €" },
                { name: "Fernet Stock / Citrus 0,04l", price: "2,20 € / 2,30 €" },
                { name: "Borovička Spišská 0,04l", price: "2,00 €" },
                { name: "Hruškovica / Slivovica Jelínek 0,04l", price: "2,50 €" },
                { name: "Marhuľovica / Čerešňovica Jelínek 0,04l", price: "3,30 € / 5,50 €" },
            ]
        },
        nealkoKavaCaj: {
            title: "Nealko, Káva & Čaj",
            items: [
                { name: "Royal Crown Cola 0,25l", price: "2,50 €" },
                { name: "Rajec (sýtená/nesýtená) 0,33l", price: "1,49 €" },
                { name: "Džús 0,25l", price: "2,10 €" },
                { name: "Targa Tonica Originale/Ginger 0,25l", price: "2,40 €" },
                { name: "Red Bull 0,25l", price: "2,50 €" },
                { name: "Domáce limonády (citronáda, príchute) 0,5l", price: "4,90 €" },
                { name: "Káva Trepallini (Espresso, Cappuccino, Latte)", price: "2,20 € - 2,90 €" },
                { name: "Čaj (čierny, ovocný, zázvor, mäta)", price: "2,50 € - 3,00 €" },
            ]
        }
    },

// ── DENNÉ MENU ───────────────────────────────────
    denneMenu: {
        note: "Cena denného menu je 7,99 € s polievkou · Pondelok – Piatok 11:00 – 14:00",
        dni: [
            { day: "Pondelok", soup: "0,33l Cesnaková číra polievka so syrom", meal: "1: Pečená krkovička, zemiaková kaša, uhorka" },
            { day: "Utorok",   soup: "0,33l Pórová polievka", meal: "1: Paradajková omáčka, mäsové guľky, parená knedľa" },
            { day: "Streda",   soup: "0,33l Šošovicová polievka", meal: "1: Grilované kuracie stehno, ryža, uhorka" },
            { day: "Štvrtok",  soup: "0,33l Tekvicová polievka", meal: "1: Wrap s kuracím mäsom, mix šalát, dressing, hranolky" },
            { day: "Piatok",   soup: "0,33l Kapustová polievka so zemiakmi", meal: "1: Kuracie prsia v cestíčku, opekané zemiaky, dressing" },
        ],
        menuCelyTyzden: [
            "2: Gordon Bleu, opekané zemiaky",
            "3: Grécky šalát s feta syrom",
            "4: Furmanské halušky s klobásou a smotanou",
            "5: Vyprážaný syr, hranolky, tatárska omáčka",
            "Pizza Klobásová - Klobása, syr, olivy"
        ]
    },

};
