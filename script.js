const stations = {
    Alpes: {
        "Les 2 Alpes": {
            lat: 45.003,
            lon: 6.122,
            url: "https://www.les2alpes.com",
            webcam: "https://www.les2alpes.com/webcams",
            plan: "https://www.skipass-2alpes.com/media/download/dalb2c/cms/media/PLANS/Plan_hiver_Les2Alpes_AEON.pdf"
        },

        "Avoriaz": {
            lat: 46.192,
            lon: 6.777,
            url: "https://www.avoriaz.com",
            webcam: "https://www.avoriaz.com/hiver/webcams",
            plan: "https://www.portesdusoleil.com/app/uploads/lesportesdusoleil/2025/10/PDS_PLAN_HIVER_656x396_AVORIAZ_WEB.pdf"
        },

        "Morzine": {
            lat: 46.180,
            lon: 6.707,
            url: "https://www.morzine-avoriaz.com",
            webcam: "https://www.morzine-avoriaz.com/webcams",
            plan: "https://pass.lesgets.com/wp-content/uploads/2025/10/SoleGets-PlanPistesH2025-2026.pdf"
        },

        "Les Gets": {
            lat: 46.156,
            lon: 6.664,
            url: "https://www.lesgets.com",
            webcam: "https://www.lesgets.com/webcams",
            plan: "https://pass.lesgets.com/wp-content/uploads/2025/10/SoleGets-PlanPistesH2025-2026.pdf"
        },

        "Flaine (Grand Massif)": {
            lat: 46.007,
            lon: 6.694,
            url: "https://www.flaine.com",
            webcam: "https://www.flaine.com/webcams",
            plan: "https://www.grand-massif.com/content/uploads/2025/12/GM_PlanPistes-1.pdf"
        },

        "Samoëns (Grand Massif)": {
            lat: 46.082,
            lon: 6.726,
            url: "https://www.samoens.com",
            webcam: "https://www.samoens.com/webcams",
            plan: "https://www.grand-massif.com/content/uploads/2025/12/GM_PlanPistes-1.pdf"
        },

        "Le Grand-Bornand": {
            lat: 45.942,
            lon: 6.427,
            url: "https://www.legrandbornand.com",
            webcam: "https://www.legrandbornand.com/webcams",
            plan: "https://www.legrandbornand.com/app/uploads/legrandbornand/2025/06/Plan-pistes-ski-alpin_24-25.pdf"
        },

        "Alpe d'Huez": {
            lat: 45.090,
            lon: 6.068,
            url: "https://www.alpedhuez.com",
            webcam: "https://www.alpedhuez.com/webcams",
            plan: "https://www.alpedhuez.com/wp-content/uploads/2025/11/PLAN-DES-PISTES-HIVER-2025-2026.pdf"
        },

        "Val Thorens (3 Vallées)": {
            lat: 45.297,
            lon: 6.580,
            url: "https://www.valthorens.com",
            webcam: "https://www.valthorens.com/fr/webcams",
            plan: "https://www.les3vallees.com/media/download/plan-courchevel.pdf"
        },

        "Tignes": {
            lat: 45.469,
            lon: 6.907,
            url: "https://www.tignes.net",
            webcam: "https://www.tignes.net/webcams",
            plan: "https://public.tignes.net/TIGNES.NET/BROCHURES/PDP_TIGNES_VALDISERE.pdf"
        },

        "La Plagne (Paradiski)": {
            lat: 45.506,
            lon: 6.677,
            url: "https://www.la-plagne.com",
            webcam: "https://www.la-plagne.com/sites/default/files/brochures/pdf/PlanPistesLaPlagneParadiski.pdf",
            plan: "https://www.la-plagne.com/sites/default/files/brochures/pdf/PlanPistesParadiski2026_compressed.pdf"
        },
        "Chamonix": {
            lat: 45.924,
            lon: 6.869,
            url: "https://www.chamonix.com",
            webcam: "https://www.chamonix.com/webcams",
            plan: "https://www.chamonix.com/sites/default/files/media/brochures/Plan_VALLEE_Hiver%281%29.pdf"
        },
        "Megève (Evasion Mont Blanc)": {
            lat: 45.857,
            lon: 6.617,
            url: "https://www.megeve.com",
            webcam: "https://www.megeve.com/webcams",
            plan: "https://forfait.megeve.com/hiver/wp-content/uploads/sites/7/2025/11/2025-Plan-Megeve-Evasion-basseDef.pdf"
        },

        "Courchevel (3 Vallées)": {
            lat: 45.415,
            lon: 6.634,
            url: "https://www.courchevel.com",
            webcam: "https://www.courchevel.com/fr/webcams",
            plan: "https://www.les3vallees.com/media/download/plan-courchevel.pdf"
        },

        "Les Arcs (Paradiski)": {
            lat: 45.572,
            lon: 6.827,
            url: "https://www.lesarcs.com",
            webcam: "https://www.lesarcs.com/webcams",
            plan: "https://www.la-plagne.com/sites/default/files/brochures/pdf/PlanPistesParadiski2026_compressed.pdf"
        },

        "Serre Chevalier": {
            lat: 44.948,
            lon: 6.579,
            url: "https://www.serre-chevalier.com",
            webcam: "https://www.serre-chevalier.com/fr/webcams",
            plan: "https://www.serre-chevalier.com/sites/default/files/2025-10/plan-pistes-serre-chevalier-2025-2026.pdf"
        },

        "Val d'Isère": {
            lat: 45.445739,
            lon: 6.977606,
            url: "https://www.valdisere.com",
            webcam: "https://www.valdisere.com/webcams",
            plan: "https://www.valdisere.com/app/uploads/valdisere/2025/10/TI-x-VI-PlanDesPistes-RECTO-20251017.pdf"
        },

        "La Clusaz": {
            lat: 45.903722,
            lon: 6.423481,
            url: "https://www.laclusaz.com",
            webcam: "https://www.laclusaz.com/webcams",
            plan: "https://www.laclusaz.com/ski/plan-des-pistes/"
        },

        "Alpe du Grand Serre": {
            lat: 45.023517,
            lon: 5.862517,
            url: "https://www.matheysine-tourisme.com/fr/alpedugrandserre/",
            webcam: "https://www.matheysine-tourisme.com/fr/alpedugrandserre/webcams/",
            plan: "https://media.matheysine-tourisme.com/filer_public/7d/9b/7d9bc29b-9406-4330-b06f-970ada3dd32e/web_skirando_alpegrandserre.pdf",
        },

        "Chamrousse": {    
            lat: 45.109653,
            lon: 5.875792,
            url: "https://www.chamrousse.com/hiver",
            webcam: "https://www.chamrousse.com/webcams.html",
            plan: "https://www.chamrousse.com/medias/images/info_pages/plan-domaine-alpin-ski-et-luge-park-chamrousse-2025-2026-basse-definition-bd-3365.pdf",
        },

        "Saint Sorlin d'Arves (Les Sybelles)": {
            lat: 45.218261,
            lon: 6.230328,
            url: "https://www.saintsorlindarves.com/",
            webcam: "https://www.saintsorlindarves.com/webcams",
            plan: "https://www.sja73.com/medias/images/info_pages/plan-des-pistes-les-sybelles-2025-2026-969.pdf",
        },

        "Les Saisies (Espace Diamant)": {
            lat: 45.758800,
            lon: 6.535506,
            url: "https://www.lessaisies.com/",
            webcam: "https://www.lessaisies.com/webcams/",
            plan: "https://www.lessaisies.com/app/uploads/les-saisies/2024/01/espace-diamant-hiver-2023-2024_HD.pdf",
        },

        "Valloire": {
            lat: 45.164497,
            lon: 6.430956,
            url: "https://www.valloire.net/",
            webcam: "https://www.valloire.net/webcams-valloire/",
            plan: "https://www.valloire.com/medias/images/prestataires/plan-des-pistes-de-valloire-valmeinier-372.pdf",
        },

        "Val Cenis": {
            lat: 45.274581,
            lon: 6.816975,
            url: "https://www.valcenis.com/",
            webcam: "https://www.valcenis.com/webcams/",
            plan: "https://www.cgh-residences.com/documents/plan-pistes/plan-pistes-valcenis.pdf",
        },

        "Montgenèvre": {
            lat: 44.929961,
            lon: 6.722583,
            url: "https://montgenevre.com/",
            webcam: "https://montgenevre.com/hiver/en-direct/webcams-montgenevre",
            plan: "https://montgenevre.com/wp-content/uploads/2020/03/plan_mtg_2020.pdf",
        },

        "Orcières": {
            lat: 44.697378,
            lon: 6.322239,
            url: "https://www.orcieres.com/",
            webcam: "https://www.orcieres.com/live/webcams/",
            plan: "https://www.orcieres.com/app/uploads/orcieres/2025/09/Plan_des_pistes_Orcieres_2024_2025.pdf",
        },

        "Pralognan-la-Vanoise": {
            lat: 45.380867,
            lon: 6.722864,
            url: "https://www.pralognan.com/",
            webcam: "https://www.pralognan.com/webcams/",
            plan: "https://piste-maps.co.uk/pistemaps/France/Pralognan-La-Vanoise-Piste-Ski-Map-2024-25.pdf",
        },

        "Valmorel": {
            lat: 45.459142,
            lon: 6.443286,
            url: "https://www.valmorel.com/",
            webcam: "https://www.valmorel.com/webcams/",
            plan: "https://skipass.valmorel.com/media/download/valmorelb2c/cms/media/HIVER/Plan%20des%20pistes/plan%20des%20pistes%2025-26%20complet.pdf",
        },

        "Méribel (3 Vallées)": {
            lat: 45.391269,
            lon: 6.567644,
            url: "https://www.meribel.net/",
            webcam: "https://www.meribel.net/informations-pratiques/webcams/",
            plan: "https://www.les3vallees.com/media/download/plan-courchevel.pdf",
        },

        "Risoul": {
            lat: 44.621036,
            lon: 6.633803,
            url: "https://www.risoul.com/hiver",
            webcam: "https://www.risoul.com/webcams.html",
            plan: "https://www.vars.com/app/uploads/vars/2025/11/VARS-Pistes2025-26BD.pdf",
        },

        "La rosière": {
            lat: 45.628947,
            lon: 6.848758,
            url: "https://www.larosiere.net/",
            webcam: "https://www.larosiere.net/webcams/",
            plan: "https://www.cgh-residences.com/documents/plan-pistes/plan-pistes-rosiere.pdf",
        },

        "Sainte-Foy-Tarentaise": {
            lat: 45.577272,
            lon: 6.893675,
            url: "https://www.saintefoy-tarentaise.com/",
            webcam: "https://www.saintefoy-tarentaise.com/infos-live/webcam/",
            plan: "https://www.saintefoy-tarentaise.com/app/uploads/saintefoy-tarentaise/2024/09/PLAN-DES-PISTES_SAINTE-FOY-TARENTAISE_HIVER-2023-2024.pdf",
        },

        "Peisey-Vallandry (Paradiski)": {
            lat: 45.551036,
            lon: 6.763722,
            url: "https://www.peisey-vallandry.com/",
            webcam: "https://www.peisey-vallandry.com/les-webcams.html",
            plan: "https://www.la-plagne.com/sites/default/files/brochures/pdf/PlanPistesParadiski2026_compressed.pdf",
        },

        "Vars (Espace Forêt Blanche)": {
            lat: 44.572789,
            lon: 6.679261,
            url: "https://www.vars.com/hiver/",
            webcam: "https://www.vars.com/hiver/webcams/",
            plan: "https://www.vars.com/app/uploads/vars/2025/11/VARS-Pistes2025-26BD.pdf",
        },

        "Les Menuires (3 Vallées)": {
            lat: 45.323881,
            lon: 6.538708,
            url: "https://lesmenuires.com/fr/",
            webcam: "https://lesmenuires.com/fr/direct?ref=shortcut",
            plan: "https://www.les3vallees.com/media/download/plan-courchevel.pdf",
        },

        "Pra Loup": {
            lat: 44.368714,
            lon: 6.601250,
            url: "https://www.praloup.com/",
            webcam: "https://www.praloup.com/webcams/",
            plan: "https://www.praloup.com/wp-content/uploads/2025/09/plan-des-pistes-de-pra-loup.pdf",
        },

        "Isola 2000": {
            lat: 44.183728,
            lon: 7.159794,
            url: "https://isola2000.com/",
            webcam: "https://www.stationsnicecotedazur.com/fr/webcam/isola/",
            plan: "https://isola2000.com/wp-content/uploads/2023/10/isola-2000-v10-2023-2024-hd.pdf",
        },

        "Auron": {
            lat: 44.220353,
            lon: 6.925461,
            url: "https://hiver.auron.com/",
            webcam: "https://www.stationsnicecotedazur.com/fr/webcam/auron/",
            plan: "https://anmsm.media.tourinsoft.eu/upload/AURON-Plans-des-PIstes-2025-2026--1-.pdf",
        },

        "Les Contamines-Montjoie (Evasion Mont Blanc)": {
            lat: 45.802389,
            lon: 6.712131,
            url: "https://www.lescontamines.net/",
            webcam: "https://www.lescontamines.net/webcam.html",
            plan: "https://forfait.megeve.com/hiver/wp-content/uploads/sites/7/2025/11/2025-Plan-Megeve-Evasion-basseDef.pdf",
        },

        "Morillon (Grand Massif)": {
            lat: 46.065292,
            lon: 6.671522,
            url: "https://www.grand-massif.com/les-5-stations-grand-massif/station-ski-morillon/",
            webcam: "https://www.grand-massif.com/webcams/#Morillon",
            plan: "https://www.grand-massif.com/content/uploads/2025/12/GM_PlanPistes-1.pdf",
        },

        "Saint-Gervais-Mont-Blanc (Evasion Mont Blanc)": {
            lat: 45.874283,
            lon: 6.685378,
            url: "",
            webcam: "",
            plan: "https://forfait.megeve.com/hiver/wp-content/uploads/sites/7/2025/11/2025-Plan-Megeve-Evasion-basseDef.pdf",
        },

        "Praz-sur-Arly (Espace Daiamant)": {
            lat: 45.833608,
            lon: 6.570992,
            url: "https://www.prazsurarly.com/fr",
            webcam: "https://www.prazsurarly.com/fr/webcams",
            plan: "https://www.lessaisies.com/app/uploads/les-saisies/2024/01/espace-diamant-hiver-2023-2024_HD.pdf",
        },

        "Les Carroz (Grand Massif)": {
            lat: 46.024956,
            lon: 6.644792,
            url: "",
            webcam: "https://www.grand-massif.com/webcams/#les-carroz",
            plan: "https://www.grand-massif.com/content/uploads/2025/12/GM_PlanPistes-1.pdf",
        },
    },

    Pyrénées: {
        "Grand Tourmalet (Barèges-La Mongie)": {
            lat: 42.909,
            lon: 0.142,
            url: "https://www.tourmaletpicdumidi.com/decouvrir/station-de-ski-la-mongie/",
            webcam: "https://www.tourmaletpicdumidi.com/webcam-tourmalet-pic-du-midi/",
            plan: "https://www.n-py.com/fr/grand-tourmalet"
        },

        "Pas de la Case": {
            lat: 42.542,
            lon: 1.733,
            url: "https://www.grandvalira.com",
            webcam: "https://www.grandvalira.com/fr/webcams",
            plan: "https://www.valleesdegavarnie.com/wp-content/uploads/2023/12/plan-pistes-grand-tourmalet.pdf"
        },

        "Peyragudes": {
            lat: 42.789864,
            lon: 0.446364,
            url: "https://peyragudes.com/",
            webcam: "https://peyragudes.com/webcams-live/",
            plan: "https://peyragudes.com/wp-content/uploads/2024/04/Plan-des-pistes-compresse-peyragudes-ALPIN-2023-2024_0.pdf",
        },

        "La Mongie (Barèges-La Mongie)": {
            lat: 42.909089,
            lon: 0.178592,
            url: "https://www.tourmaletpicdumidi.com/decouvrir/station-de-ski-la-mongie/",
            webcam: "https://www.tourmaletpicdumidi.com/webcam-tourmalet-pic-du-midi/",
            plan: "https://www.valleesdegavarnie.com/wp-content/uploads/2023/12/plan-pistes-grand-tourmalet.pdf",
        },

        "Font-Romeu": {
            lat: 42.520483,
            lon: 2.033042,
            url: "https://font-romeu.fr/",
            webcam: "",
            plan: "https://pyrenees.media.tourinsoft.eu/upload/Font-Romeu-Pyrenees-2000-plan-pistes.pdf",
        },
        "Cauterets": {
            lat: 42.884583,
            lon: -0.060642,
            url: "https://www.cauterets.com/faire-du-ski/",
            webcam: "https://www.cauterets.com/live/webcams/",
            plan: "https://www.valleesdegavarnie.com/wp-content/uploads/2023/12/plan-des-pistes-cauterets-pont-espagne.pdf",
        },

        "Les Angles": {
            lat: 42.563733,
            lon: 2.065297,
            url: "https://lesangles.com/",
            webcam: "https://lesangles.com/webcam/",
            plan: "https://lesangles.com/wp-content/uploads/2021/03/PlanPistes_525x300_202324_BAT.pdf",
        },

        "Piau Engaly": {
            lat: 42.783003,
            lon: 0.158350,
            url: "https://piau-engaly.com/",
            webcam: "https://piau-engaly.com/webcams-live/",
            plan: "https://piau-engaly.com/wp-content/uploads/2024/11/Plan-des-pistes-seul-2024-25.pdf",
        },

        "Guzet": {
            lat: 42.778383,
            lon: 1.301042,
            url: "https://www.guzet.ski/fr/",
            webcam: "https://www.guzet.ski/fr/webcam",
            plan: "https://abonnement.guzet.ski/media/upload/guzetppu/cms/media/base_station/Plan%20pistes%20-%20Guzet_compressed.pdf",
        },
    },

    Jura: {
        "A découvrir bientôt !": {
            lat: 0.0,
            lon: 0.0,
            url: "",
            webcam: "",
            plan: "",
        },
    },
};

window.onload = () => {
    afficherMassifs();
};

async function getMeteo(lat, lon) {
    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        );

        const data = await response.json();

        return data.current_weather || {
            temperature: "--",
            windspeed: "--",
            winddirection: "--"
        };
    } catch (error) {
        console.error(error);

        return {
            temperature: "--",
            windspeed: "--",
            winddirection: "--"
        };
    }
}

function afficherMassifs() {
    const liste = document.getElementById("liste");
    const fiche = document.getElementById("fiche");

    fiche.innerHTML = "";

    liste.innerHTML = "<h2>Choisis ton massif</h2>";

    for (const massif in stations) {
        const btn = document.createElement("button");

        btn.className = "massif";
        btn.textContent = massif;

        btn.addEventListener("click", () => {
            afficherStations(massif);
        });

        liste.appendChild(btn);
    }
}

function retourMassifs() {
    afficherMassifs();
}

function afficherStations(massif) {
    const liste = document.getElementById("liste");
    const fiche = document.getElementById("fiche");

    fiche.innerHTML = "";

    liste.innerHTML = `
        <h2>${massif}</h2>

        <button class="back" onclick="retourMassifs()">
            ↩️ Retour aux massifs
        </button>
    `;

    for (const station in stations[massif]) {
        const btn = document.createElement("button");

        btn.className = "station";
        btn.textContent = station;

        btn.addEventListener("click", () => {
            afficherFiche(massif, station);
        });

        liste.appendChild(btn);
    }
}

function retourStations(massif) {
    afficherStations(massif);
}

async function afficherFiche(massif, station) {
    const fiche = document.getElementById("fiche");

    fiche.innerHTML = "<p>Chargement...</p>";

    const s = stations[massif][station];
    const meteo = await getMeteo(s.lat, s.lon);

    fiche.innerHTML = `
        <h2>🏔️ ${station}</h2>

        <p>🌡️ Température : ${meteo.temperature}°C</p>
        <p>💨 Vent : ${meteo.windspeed} km/h</p>
        <p>🧭 Direction : ${meteo.winddirection}°</p>

        <button onclick="window.open('${s.url}', '_blank')">
            🌐 Site officiel
        </button>

        <button onclick="window.open('${s.webcam}', '_blank')">
            📷 Webcam
        </button>

        <button onclick="window.open('${s.plan}', '_blank')">
            🗺️ Plan des pistes
        </button>

        <button class="back" onclick="retourStations('${massif}')">
            ↩️ Retour aux stations
        </button>
    `;
}

function rechercherStation() {
    const search = document.getElementById("search");

    if (!search) return;

    const valeur = search.value.toLowerCase();
    const boutons = document.querySelectorAll(".station");

    boutons.forEach((btn) => {
        btn.style.display = btn.textContent
            .toLowerCase()
            .includes(valeur)
            ? "inline-block"
            : "none";
    });
}