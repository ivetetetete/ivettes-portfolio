import { Translations } from "@/types/i18n";

export const ca: Translations = {
  nav: {
    about: "Sobre mi",
    experience: "Experiència",
    work: "Projectes",
    skills: "Habilitats",
    contact: "Contacte",
    letsTalk: "Parlem",
  },
  hero: {
    availableBadge: "Disponible per a oportunitats",
    location: "Barcelona, Catalunya",
    role: "Frontend Developer",
    bio: {
      greeting: "Hola! Sóc la Ivette Sanjurjo Martínez, una ",
      passionate: "apassionada",
      experience: "3 anys d'experiència pràctica",
      description:
        " desenvolupadora front-end amb experiència pràctica. M'encanta crear aplicacions multiplataforma que ofereixen experiències d'usuari fluides en tots els dispositius.",
    },
    viewWork: "Veure els meus projectes",
    downloadCv: "Descarregar CV",
    sideCard: {
      tagline: "Només una noia a qui li apasiona programar i el bon cafè.",
      description:
        "Apassionada per crear productes que no només funcionin a la perfecció, sinó que doni gust fer-los servir.",
    },
    stats: {
      yearsOfExperience: "anys d'experiència",
      projectsEndToEnd: "projectes end-to-end",
      developmentTeam: "equip de desenvolupament",
      leadValue: "Líder",
      coffeesConsumed: "cafès consumits",
    },
  },
  experience: {
    title: "La meva trajectòria",
    subtitle: "Twentic i creixement professional",
    intro:
      "Només una noia apassionada pel codi i el cafè. Sóc desenvolupadora d'aplicacions web i mòbils enfocada a crear productes que no només funcionin bé, sinó que es percebin intuïtius i atractius. La meva prioritat és crear experiències digitals amb l'accessibilitat i la inclusió sempre presents.",
    companyName: "Twentic",
    companyLocation: "Barcelona, Catalunya",
    companyPeriod: "Octubre 2023 - Actualitat",
    roles: [
      {
        title: "Delivery Specialist & AI Prompt Engineer",
        period: "Juny 2026 - Actualitat",
        badge: "Posició actual",
        badgeColor: "bg-purple-50 text-purple-700 border-purple-200/80 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800/60",
        type: "Jornada completa - Híbrid",
        bullets: [
          "Coordinació estratègica i organització de projectes digitals, assegurant una assignació eficient de recursos de l'equip i un compliment estricte de terminis.",
          "Col·laboració directa amb Account Management, actuant com a enllaç tècnico-operatiu per garantir l'òptima execució dels lliurables i la satisfacció del client.",
          "Disseny, optimització i avaluació de prompts per a models d'intel·ligència artificial, integrant solucions d'IA generativa per millorar fluxos de treball i interactivitat.",
          "Supervisió de la capacitat de l'equip de desenvolupament, facilitació de processos interns i resolució proactiva de bloquejos durant el cicle de vida del projecte.",
        ],
        technologies: [
          "AI Prompt Engineering",
          "Generative AI",
          "Delivery",
          "Team Coordination",
          "Agile",
        ],
      },
      {
        title: "Frontend Developer",
        period: "Octubre 2023 - Juny 2026",
        badge: "Posició anterior",
        badgeColor: "bg-neutral-100 text-neutral-700 border-neutral-200/80 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700",
        type: "Jornada completa - Híbrid",
        description:
          "He treballat en projectes rellevants per a diversos clients, contribuint activament al desenvolupament i manteniment de les seves aplicacions. L'adopció i aplicació de bones pràctiques i frameworks moderns ha estat clau en el meu rol.",
        technologies: [
          "React Native",
          "TypeScript",
          "Next.js",
          "Tailwind CSS",
          "REST APIs",
          "Git",
        ],
      },
    ],
  },
  projects: {
    sectionTag: "Projectes Destacats",
    title: "Els meus projectes",
    projects: [
      {
        id: "safinder",
        title: "Safinder",
        description:
          "Una app de cites dissenyada exclusivament per a dones lesbianes i persones no binàries. Ofereix un entorn segur i inclusiu per connectar, compartir experiències i construir relacions significatives. Vaig contribuir al desenvolupament de l'aplicació implementant funcionalitats clau i assegurant una experiència d'usuari òptima. Actualment està publicada i disponible a l'App Store i Google Play.",
        image: "/safinder.png",
        badges: ["En Producció", "App Store", "Google Play"],
        badgeColor: "bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950/40 dark:text-pink-300 dark:border-pink-800/60",
        technologies: ["React Native", "TypeScript", "Firebase", "Tailwind CSS", "Mobile UX"],
        liveUrl: "https://safinder.es",
        ctaText: "Visitar Safinder.es",
      },
      {
        id: "viven",
        title: "Viven Inmobiliaria",
        description:
          "Plataforma web per a l'agència immobiliària Viven a Vilanova i la Geltrú i el Garraf. Desenvolupada amb Next.js i connexions en temps real a l'API d'Inmovilla per a la sincronització contínua i gestió del catàleg d'immobles.",
        image: "/viven-preview.png",
        imageCover: true,
        badges: ["En Producció", "Plataforma Web"],
        badgeColor: "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800/60",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "API Inmovilla", "Real-Time"],
        liveUrl: "https://www.viven.es/es",
        ctaText: "Visitar Viven.es",
      },
      {
        id: "findhome",
        title: "Find Home",
        description:
          "Moderna plataforma web immobiliària desenvolupada per a una agència a Catalunya, amb catàlegs actualitzats de venda i lloguer i un qüestionari interactiu en diversos passos per a la valoració i taxació d'immobles.",
        image: "/findhome-preview.png",
        imageCover: true,
        badges: ["En Producció", "Plataforma Web"],
        badgeColor: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/60",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Interactive Forms"],
        liveUrl: "https://www.find-home.cat/",
      },
      {
        id: "motia",
        title: "Motia",
        description:
          "Una aplicació que connecta passatgers i conductors per compartir trajectes i viatges. Col·laboro en el desenvolupament de la plataforma juntament amb un altre gran desenvolupador. Actualment en fase beta privada, amb moltes ganes de compartir-la amb el món molt aviat!",
        image: "/motia-name.png",
        badges: ["Beta Privada", "App Mòbil"],
        badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60",
        technologies: ["React Native", "TypeScript", "Maps / GPS", "Node.js"],
        liveUrl: null,
      },
      {
        id: "ranramen",
        title: "Ran Ramen",
        description:
          "Lloc web dinàmic creat per a un autèntic restaurant de ramen japonès a Vilanova i la Geltrú. Presenta una carta interactiva amb brous fets a foc lent durant 16 hores, curris casolans, opcions veganes i integració de ressenyes de Google.",
        image: "/ranramen-preview.png",
        imageCover: true,
        badges: ["En Producció", "Plataforma Web"],
        badgeColor: "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800/60",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide Icons"],
        liveUrl: "https://ran-ramen-web.vercel.app/",
      },
    ],
  },
  skills: {
    sectionTag: "Eines Tècniques",
    title: "Habilitats i eines",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      tools: "Eines",
    },
  },
  contact: {
    badge: "Contacte",
    title: "Posa't en contacte",
    description:
      "No dubtis a escriure'm per correu o connectar amb mi a LinkedIn. Sempre estic oberta a comentar nous projectes, idees creatives o col·laborar en els teus propers reptes.",
    copyEmail: "Copiar adreça de correu",
    emailCopied: "Correu copiat al porta-retalls!",
    directEmail: "Enviar correu",
    resumePdf: "Currículum (PDF)",
    location: "Barcelona, Catalunya",
    footerRights: "— Ivette Sanjurjo Martínez 2026.",
    footerCrafted: "Creat amb cura, Next.js i Tailwind CSS",
  },
};
