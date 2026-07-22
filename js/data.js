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
                { name: "Bohém Krušovice Tank",         desc:"0,5l",        price: "2,49 €" },
                { name: "Bohém Krušovice Tank",         desc:"0,3l",        price: "1,70 €" },
                { name: "Krušovice 10°",                desc:"0,4l",        price: "1,80 €" },
                { name: "Bradáč Aloha",                 desc:"0,4l",        price: "2,70 €" },
                { name: "Bradáč podľa ponuky",          desc:"0,4l",        price: "3,20 €" },
                { name: "Maurus 10°",                   desc:"0,4l",        price: "2,10 €" },
                { name: "Rezané",                       desc:"0,4l",        price: "2,49 €" },
                { name: "Zlatý bažant radler citrón",   desc:"0,4l",        price: "2,20 €" },
            ]
        },

        flaskovePivo: {
            title: "Flaškové pivo",
            items: [
                { name: "Corona",                       desc:"0,35l",        price: "4,10 €" },
                { name: "Desperado",                    desc:"0,33l",        price: "2,50 €" },
                { name: "Zlatý bažant nealko",          desc:"0,33l",        price: "2,20 €" },
            ]
        },
        nealko: {
            title: "Nealko",
            items: [
                { name: "〰️",                                                                                                     price: "ČAPOVANÉ"},
                { name: "Kofola originál",                              desc:"0,5l",                                            price: "2,40 €" },
                { name: "Kofola originál",                              desc:"0,3l",                                            price: "1,80 €" },
                { name: "〰️",                                                                                                     price: "PLECHOVKOVÉ"},
                { name: "RedBull",                                      desc:"(cukor/ bez cukru) 0,25l",                        price: "2,50 €" },
                { name: "Vinea",                                        desc:"(biela/ červená) 0,33l",                          price: "2,20 €" },
                { name: "Kofola",                                       desc:"0,33l",                                           price: "2,20 €" },
                { name: "Kofola Nulka",                                 desc:"0,33l",                                           price: "2,20 €" },
                { name: "〰️",                                                                                                     price: "FLAŠKOVÉ"},
                { name: "Royal Crown cola",                             desc:"(cukor/ bez cukru) 0,25l",                        price: "2,50 €" },
                { name: "Rajec",                                        desc:"(sýtená/ jemne sýtená/ nesýtená) 0,33l",          price: "1,49 €" },
                { name: "Džús",                                         desc:"(jahoda/ jablko/ pomaranč) 0,25l",                price: "2,30 €" },
                { name: "Targa tonic originále",                        desc:"0,25l",                                           price: "2,40 €" },
                { name: "Targa tonic ginger",                           desc:"0,25l",                                           price: "2,40 €" },

            ]
        },

        Limonada: {
            title: "Limonády",
            items: [
                { name: "Naša citronáda",                              desc:"0,5l",           price: "4,90 €" },
                { name: "Broskyňa & bazalka",                          desc:"0,5l",           price: "4,90 €" },
                { name: "Grapefruit & rozmarín",                       desc:"0,5l",           price: "4,90 €" },
                { name: "Bazová",                                      desc:"0,5l",           price: "4,90 €" },
            ]
        },

        kava: {
            title: "Káva Trepallini",
            items: [
                { name: "Espresso",                                    desc:"10g",                          price: "2,20 €" },
                { name: "Espresso lugo",                               desc:"10g",                          price: "2,30 €" },
                { name: "Cappuccino",                                  desc:"10g",                          price: "2,50 €" },
                { name: "Caffé latte",                                 desc:"(karamel/ vanilka) 0,5l",      price: "2,90 €" },
                { name: "Ľadová káva so šľahačkou",                    desc:"0,33l",                        price: "2,90 €" },
                { name: "Mlieko ku káve",                              desc:"0,02l",                        price: "0,20 €" },
            ]
        },

        caj: {
            title: "Čaj",
            items: [
                { name: "Čaj",                                         desc:"(čierny/ ovocný/ zelený) 0,3l",            price: "2,50 €" },
                { name: "Čaj zo zázvoru",                              desc:"0,3l",                                     price: "3,00 €" },
                { name: "Čaj zo čerstvej mäty",                        desc:"0,3l",                                     price: "3,00 €" },
                { name: "Med",                                         desc:"20g",                                      price: "0,40 €" },
            ]
        },

        vinoSekty: {
            title: "Víno & sekty",
            items: [
                { name: "Rizling Rýnsky",               desc:"(biele, suché) 0,1l ",            price: "1,70 €" },
                { name: "Frankovka Modrá",              desc:"(červené, suché) 0,1l",           price: "1,70 €" },
                { name: "Frankovka Modrá Rosé",         desc:"(ružové, polosuché 0.1l)",        price: "1,70 €" },
                { name: "Prosecco Brut",                desc:"0,1l",                            price: "1,70 €" },
                // ── 0,75l ──────────────────────────────
                { name: "Rizling Rýnsky",               desc:"(biele, suché) 0,75l ",           price: "15,00 €" },
                { name: "Pesecká Leánka",               desc:"(biele, polosuché) 0,75l",        price: "15,00 €" },
                { name: "Alibernet",                    desc:"(červené, suché) 0,75l",          price: "15,00 €" },
                { name: "Frankovka Modrá",              desc:"(červené, suché) 0,75l",          price: "15,00 €" },
                { name: "Abbazia Cuvée Prestige",       desc:"0,75l",                           price: "20,00 €" },
                { name: "Luc Belaire",                  desc:"0,75l",                           price: "40,00 €" },
            ]
        },
        spritze: {
            title: "Spritze",
            items: [
                { name: "Campari Spritz 0,25l",         desc:"0,06 l Campari , 0,1 l prosecco, pomaranč, soda",                                     price: "5,50 €" },
                { name: "Aperol Spritz 0,25l",          desc:"0,06 l Aperol spritz, 0,1 l prosecco, pomaranč, soda",                                price: "5,50 €" },
                { name: "Sarti Spritz 0,25l",           desc:"0,06 l Sarti Rosa , 0,1 l prosecco, limetka, soda",                                   price: "5,50 €" },
                { name: "Hugo Spritz 0,25l",            desc:"0,06 l Bazový sirup , 0,1 l prosecco, limetka, mäta, soda",                           price: "5,50 €" },
                { name: "Bellini Spritz 0,25l",         desc:"0,06 l Broskynový sirup , 0,1 l prosecco, limetka, sod",                              price: "5,50 €" },
                { name: "Limoncello Spritz 0,25l",      desc:"0,06 l Domáce Limoncello 0,02 l citrónový sirup, 0,1 l prosecco, limetka, soda " ,    price: "5,50 €" },
                { name: "Raspberry Spritz 0,25l",       desc:"0,06l Jelínek Elixír Malina, 0,1 l prosecco, 0,02 l citrónový sirup, soda",           price: "5,50 €" },
            ]
        },
        koktailyMocktaily: {
            title: "Koktaily & Mocktaily",
            items: [
                { name: "Mojito 0,25l",                 desc:"0,06 l Havana Club, 0,02 l limetková šťava, 10 g hnedý cukor, limetka, mäta, soda",   price: "5,50 €" },
                { name: "Cuba Libre 0,25l",             desc:"0,06 l Havana Club, 0,02 l limetková šťava, coca cola",                               price: "5,50 €" },
                { name: "Gin Tonic 0,25l",              desc:"0,04 l Gin, limetka, tonic",                                                          price: "5,00 €" },
                { name: "Gin Tonic pink 0,25l",         desc:"0,04 l Gin Pink, limetka, ružový tonic",                                              price: "5,50 €"},
                { name: "Virgin Mojito 0,25l",          desc:"0,02l limetková šťava, 10g hnedý cukor, imetka, mäta, soda",                          price: "4,50 €" },
                { name: "Virgin Aperol Spritz 0,25l",   desc:"0,06l Virgin Aperol spritz pomaranč, soda",                                           price: "4,50 €" },
                { name: "Virgin Gin Tonic 0,25l",       desc:"0,04l Virgin Gin, limetka, tonic",                                                    price: "4,50 €" },
            ]
        },

        Vodka: {
            title: "Vodka",
            items: [
                { name: "Finlandia 40%",                        desc:"0,04l",           price: "2,20 €" },
                { name: "Russian Standard Original 40%",        desc:"0,04l",           price: "2,30 €" },
                { name: "Absolut 40%",                          desc:"0,04l",           price: "2,20 €" },
            ]
        },

        Gin: {
            title: "Gin",
            items: [
                { name: "Beefeater 40%",                        desc:"0,04l",           price: "2,40 €" },
                { name: "Beefeater pink 37,5%",                 desc:"0,04l",           price: "2,40 €" },
            ]
        },

        Destilaty: {
            title: "Destiláty",
            items: [
                { name: "Borovička Spišská 38%",                        desc:"0,04l",           price: "2,00 €" },
                { name: "Hruškovica jelínek 42%",                       desc:"0,04l",           price: "2,50 €" },
                { name: "Slivovica jelínek 50%",                        desc:"0,04l",           price: "2,50 €" },
                { name: "Marhuľovica jelínek 42%",                      desc:"0,04l",           price: "3,30 €" },
                { name: "Čerešňovica jelínek 42%",                      desc:"0,04l",           price: "5,50 €" },
            ]
        },

        Tequila: {
            title: "Tequila",
            items: [
                { name: "Olmeca silver 35%",                            desc:"0,04l",           price: "3,50 €" },
                { name: "Olmeca reposado 35%",                          desc:"0,04l",           price: "3,50 €" },
            ]
        },
        WhiskyKonak: {
            title: "Whisky & Koňak",
            items: [
                { name: "Tullamore dew 40%",                            desc:"0,04l",           price: "2,70 €" },
                { name: "Jameson irish 40%",                            desc:"0,04l",           price: "2.90 €" },
                { name: "Jack daniels 40%",                             desc:"0,04l",           price: "3,50 €" },
                { name: "Hennessy VS 40%",                              desc:"0,04l",           price: "4,50 €" },

            ]
        },

        RUM: {
            title: "Rum",
            items: [
                { name: "Republika božkov exclusive 35%",               desc:"0,04l",           price: "2,20 €" },
                { name: "Havana club 3R. 37,5%",                        desc:"0,04l",           price: "2,20 €" },
                { name: "Secreto mistico vanilla cookies 40%",          desc:"0,04l",           price: "3,50 €" },
                { name: "Diplomatico 12Y. 40%",                         desc:"0,04l",           price: "3,80 €" },
                { name: "Bumbu 40%",                                    desc:"0,04l",           price: "3,80 €" },
            ]
        },

        liker: {
            title: "Likéry",
            items: [
                { name: "Jägermeister 35%",                             desc:"0,04l",           price: "2,50 €" },
                { name: "Tatratea original 52%",                        desc:"0,04l",           price: "2,80 €" },
                { name: "Tatratea kokos 22%",                           desc:"0,04l",           price: "2,60 €" },
                { name: "Tatratea ibištek 37%",                         desc:"0,04l",           price: "2,60 €" },
                { name: "Tatratea broskyňa 42%",                        desc:"0,04l",           price: "2,60 €" },
                { name: "Tatratea kvetový 47%",                         desc:"0,04l",           price: "2,60 €" },
                { name: "Tatratea šípka a rakytník 57%",                desc:"0,04l",           price: "2,80 €" },
                { name: "Tatratea lesné ovocie 62%",                    desc:"0,04l",           price: "2,80 €" },
                { name: "Becherovka 38%",                               desc:"0,04l",           price: "2,50 €" },
                { name: "Fernet stock 35%",                             desc:"0,04l",           price: "2,30 €" },
                { name: "Fernet stock citrus 27%",                      desc:"0,04l",           price: "2,20 €" },
            ]
        },

    },

// ── DENNÉ MENU ───────────────────────────────────
    denneMenu: {
        note: "Cena denného menu je 7,99 € s polievkou · Pondelok – Piatok 11:00 – 14:00",
        dni: [
            { day: "Pondelok", soup: "0,33l Šošovicová polievka na kyslo",              meal: "1: Kurací Stroganov, ryža" },
            { day: "Utorok",   soup: "0,33l Hrášková polievka so zeleninou",            meal: "1:Wrap s kuracím mäsom, hranolky" },
            { day: "Streda",   soup: "0,33l Frankfurtská polievka",                     meal: "1: Moravský vrabec, kyslá kapusta, knedľa" },
            { day: "Štvrtok",  soup: "0,33l Kapustnica",                                meal: "1: Grilovaná bravčová panenka, nivová omáčka, ryža" },
            { day: "Piatok",   soup: "0,33l Jarná zeleninová polievka",                 meal: "1: Pečené kuracie stehno, zemiaková kaša, kompót" },
        ],
        menuCelyTyzden: [
            "2: Cézar šalát s kuracími kúskam",
            "3: Bolonské špagety",
            "4: Furmanské halušky s klobásou a smotanou",
            "5: Vyprážaný syr, hranolky, tatárska omáčka",
            "Pizza Carleone"
        ]
    },

};
