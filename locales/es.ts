import { Translations } from "@/types/i18n";

export const es: Translations = {
  nav: {
    about: "Sobre mí",
    experience: "Experiencia",
    work: "Proyectos",
    skills: "Habilidades",
    contact: "Contacto",
    letsTalk: "Hablemos",
  },
  hero: {
    availableBadge: "Disponible para oportunidades",
    location: "Barcelona, España",
    role: "Frontend Developer",
    bio: {
      greeting: "¡Hola! Soy Ivette Sanjurjo Martínez, una ",
      passionate: "apasionada",
      experience: "3 años de experiencia práctica",
      description:
        " desarrolladora front-end con experiencia práctica. Me encanta crear aplicaciones multiplataforma que ofrecen experiencias fluidas en todos los dispositivos.",
    },
    viewWork: "Ver mis proyectos",
    downloadCv: "Descargar CV",
    sideCard: {
      tagline: "Solo una chica a la que le apasiona programar y el buen café.",
      description:
        "Dedicada a crear productos que no solo funcionen a la perfección, sino que realmente dé gusto utilizarlos.",
    },
    stats: {
      yearsOfExperience: "años de experiencia",
      projectsEndToEnd: "proyectos end-to-end",
      developmentTeam: "equipo de desarrollo",
      leadValue: "Líder",
      coffeesConsumed: "cafés consumidos",
    },
  },
  experience: {
    title: "Mi trayectoria",
    subtitle: "Twentic y crecimiento profesional",
    intro:
      "Solo una chica apasionada por el código y el café. Soy desarrolladora de aplicaciones web y móviles enfocada en crear productos que no solo funcionen bien, sino que se sientan intuitivos y atractivos. Mi prioridad es diseñar experiencias digitales con accesibilidad e inclusión siempre presentes.",
    companyName: "Twentic",
    companyLocation: "Barcelona, España",
    companyPeriod: "Octubre 2023 - Presente",
    roles: [
      {
        title: "Delivery Specialist & AI Prompt Engineer",
        period: "Junio 2026 - Presente",
        badge: "Puesto actual",
        badgeColor: "bg-purple-50 text-purple-700 border-purple-200/80 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800/60",
        type: "Jornada completa - Híbrido",
        bullets: [
          "Coordinación estratégica y organización de proyectos digitales, asegurando una asignación eficiente de recursos del equipo y un riguroso cumplimiento de plazos.",
          "Colaboración directa con Account Management, actuando como enlace técnico-operativo para garantizar la óptima ejecución de entregables y la satisfacción del cliente.",
          "Diseño, optimización y evaluación de prompts para modelos de inteligencia artificial, integrando soluciones de IA generativa para enriquecer flujos de trabajo e interactividad.",
          "Supervisión de la capacidad del equipo de desarrollo, facilitación de procesos internos y resolución proactiva de bloqueos durante el ciclo de vida de los proyectos.",
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
        period: "Octubre 2023 - Junio 2026",
        badge: "Puesto anterior",
        badgeColor: "bg-neutral-100 text-neutral-700 border-neutral-200/80 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700",
        type: "Jornada completa - Híbrido",
        description:
          "He trabajado en proyectos relevantes para diversos clientes, contribuyendo activamente al desarrollo y mantenimiento de sus aplicaciones. La adopción y aplicación de buenas prácticas y frameworks modernos ha sido clave en mi rol.",
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
    sectionTag: "Proyectos Destacados",
    title: "Mis proyectos",
    projects: [
      {
        id: "safinder",
        title: "Safinder",
        description:
          "Una app de citas diseñada exclusivamente para mujeres lesbianas y personas no binarias. Brinda un entorno seguro e inclusivo para conectar, compartir vivencias y construir relaciones significativas. Contribuí al desarrollo de la aplicación implementando funcionalidades clave y asegurando una experiencia óptima. Actualmente está publicada y disponible en App Store y Google Play.",
        image: "/safinder.png",
        badges: ["En Producción", "App Store", "Google Play"],
        badgeColor: "bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950/40 dark:text-pink-300 dark:border-pink-800/60",
        technologies: ["React Native", "TypeScript", "Firebase", "Tailwind CSS", "Mobile UX"],
        liveUrl: "https://safinder.es",
        ctaText: "Visitar Safinder.es",
      },
      {
        id: "viven",
        title: "Viven Inmobiliaria",
        description:
          "Plataforma web para la agencia inmobiliaria Viven en Vilanova i la Geltrú y el Garraf. Desarrollada con Next.js y conexiones en tiempo real a la API de Inmovilla para la sincronización continua y gestión del catálogo de propiedades.",
        image: "",
        imageCover: true,
        badges: ["En Producción", "Plataforma Web"],
        badgeColor: "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800/60",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "API Inmovilla", "Real-Time"],
        liveUrl: "https://www.viven.es/es",
        ctaText: "Visitar Viven.es",
      },
      {
        id: "findhome",
        title: "Find Home",
        description:
          "Moderna plataforma web inmobiliaria creada para una agencia en Catalunya, con catálogos actualizados de compra y alquiler y un cuestionario interactivo en múltiples pasos para la tasación y valoración de propiedades.",
        image: "/findhome-preview.png",
        imageCover: true,
        badges: ["En Producción", "Plataforma Web"],
        badgeColor: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/60",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Interactive Forms"],
        liveUrl: "https://www.find-home.cat/",
      },
      {
        id: "motia",
        title: "Motia",
        description:
          "Una aplicación que conecta a viajeros y conductores para compartir rutas y trayectos. Colaboro en el desarrollo de la plataforma junto a otro gran desarrollador. Actualmente en fase beta privada, ¡con muchas ganas de ver su lanzamiento muy pronto!",
        image: "/motia-name.png",
        badges: ["Beta Privada", "App Móvil"],
        badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60",
        technologies: ["React Native", "TypeScript", "Maps / GPS", "Node.js"],
        liveUrl: null,
      },
      {
        id: "ranramen",
        title: "Ran Ramen",
        description:
          "Sitio web vibrante diseñado para un auténtico restaurante de ramen japonés en Vilanova i la Geltrú. Presenta una carta interactiva con caldos cocinados a fuego lento durante 16 horas, curris artesanales, opciones veganas e integración con reseñas de Google.",
        image: "/ranramen-preview.png",
        imageCover: true,
        badges: ["En Producción", "Plataforma Web"],
        badgeColor: "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800/60",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide Icons"],
        liveUrl: "https://ran-ramen-web.vercel.app/",
      },
    ],
  },
  skills: {
    sectionTag: "Arsenal Técnico",
    title: "Habilidades y herramientas",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      tools: "Herramientas",
    },
  },
  contact: {
    badge: "Contacto",
    title: "Ponte en contacto",
    description:
      "No dudes en escribirme por correo o conectar conmigo a través de LinkedIn. Siempre estoy entusiasmada por conocer nuevos proyectos, intercambiar ideas creativas o colaborar en tus próximas metas.",
    copyEmail: "Copiar correo electrónico",
    emailCopied: "¡Correo copiado al portapapeles!",
    directEmail: "Enviar correo",
    resumePdf: "Currículum (PDF)",
    location: "Barcelona, España",
    footerRights: "— Ivette Sanjurjo Martínez 2026.",
    footerCrafted: "Creado con cariño, Next.js y Tailwind CSS",
  },
};
