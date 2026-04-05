import Card from "@/components/Card";
import ProgressBar from "@/components/ProgressBar";
import SkillCard from "@/components/SkillCard";
import { File, Github, Linkedin, Mail, MapPin } from "lucide-react";

const IVY_LOGO = "{ivy.}";

const SOCIAL_LINKS = [
  { icon: File, href: "/pdf/CV_IvetteSanjurjo.pdf", label: "CV" },
  { icon: Github, href: "https://github.com/ivetetetete", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ivette-sanjurjo-martínez/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:ivettes.business@gmail.com", label: "Email" },
];

const STATS = [
  { label: "years of experience", value: "2 and a half" },
  { label: "projects end to end", value: "7" },
  { label: "development team", value: "Lead" },
  { label: "coffees consumed", value: "100+" },
];

export default function Home() {
  return (
    <>

      <div className="flex min-h-screen flex-col items-center gap-8 pt-12 pb-20 max-w-3xl mx-auto">

        <section className="px-5 text-center w-full">
          <h1 className="text-black text-6xl font-semibold typewriter">{IVY_LOGO}</h1>
          <h2 className="text-black text-2xl font-medium my-4">Frontend Developer</h2>

          <div className="flex flex-wrap gap-3 justify-center">
            {SOCIAL_LINKS.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border border-neutral-400 rounded-md p-2 transition-all hover:bg-stone-200 hover:scale-110 active:bg-stone-300"
              >
                <link.icon className="size-5 text-black" />
              </a>
            ))}
          </div>

          <p className="text-black mt-6 leading-relaxed">
            Hi! I&apos;m Ivette Sanjurjo Martínez, a <span className="font-semibold text-stone-500">passionate</span> front-end developer with <span className="font-semibold text-stone-500">2 and a half years hands-on experience</span>. I love creating multiplatform apps that provide seamless user experiences across devices.
          </p>
        </section>

        {/* JOURNEY & STATS */}
        <section className="px-5 w-full">
          <div className="bg-white drop-shadow-md rounded-3xl p-6 flex flex-col gap-6 transition-all">
            <div>
              <h3 className="text-black text-2xl font-semibold mb-2">My journey</h3>
              <p className="text-black text-sm leading-relaxed opacity-90">
                Just a girl who loves coding and coffee. I´m a web and mobile app developer passionate about building products that don’t just work well, but genuinely feel good to use. I focus on creating meaningful digital experiences with accessibility and inclusion always in mind.
              </p>

              <p className="text-black text-lg mt-2.5">Frontend Developer - Twentic (October 2023 - Present)</p>
              <p className="text-black text-sm leading-relaxed opacity-90">
                I have worked in significant projects for different clients, contributing to the development and maintenance of their applications. Learning and enforcing different frameworks and best practices has been a key part of my role.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {STATS.map((stat, idx) => (
                <div key={idx} className="bg-stone-50 border border-neutral-200 rounded-2xl p-4 text-center hover:bg-stone-300 hover:shadow-md transition-all flex-1 flex flex-col justify-center size-full">
                  <p className="font-bold text-xl text-black">{stat.value}</p>
                  <p className="text-xs text-stone-600 uppercase tracking-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="px-5 w-full space-y-5">
          <h3 className="font-bold text-black text-2xl">Skills & Tools</h3>

          <SkillCard title="Frontend">
            <ProgressBar title="React Native" percentage={90} color="#a8bcaf" />
            <ProgressBar title="TypeScript" percentage={90} color="#a8bcaf" />
            <ProgressBar title="Next JS" percentage={70} color="#a8bcaf" />
            <ProgressBar title="Tailwind CSS" percentage={90} color="#a8bcaf" />
          </SkillCard>

          <SkillCard title="Backend">
            <ProgressBar title="Node.js" percentage={60} color="#b0b0b0" />
            <ProgressBar title="Laravel" percentage={85} color="#b0b0b0" />
            <ProgressBar title="MySQL" percentage={80} color="#b0b0b0" />
            <ProgressBar title="Firebase" percentage={90} color="#b0b0b0" />
          </SkillCard>

          <SkillCard title="Tools">
            <ProgressBar title="Git" percentage={90} color="#88aa94" />
            <ProgressBar title="Figma" percentage={80} color="#88aa94" />
            <ProgressBar title="Postman" percentage={85} color="#88aa94" />
          </SkillCard>
        </section>

        {/* WORK SECTION */}
        <section className="px-5 w-full">
          <h3 className="text-black text-2xl font-semibold mb-2">My work</h3>
          <div className="flex flex-col gap-2">
            <Card
              title="Safinder"
              description="A dating app designed exclusively for lesbian women and non-binary people. The app provides a safe and inclusive space for users to connect, share their experiences, and find meaningful relationships. I contributed to the development of the app, implementing key features and ensuring a smooth user experience. The app is currently live and available for download on the App Store and Google Play."
              link="https://safinder.es"
              imageSrc="/safinder-name.png"
            />
            <Card
              title="Motia"
              description="An app that helps riders find rides and share their journeys. I contribute to the develpment of the app along with another great developer. The app is currently in private beta, but I&apos;m excited to share it with the world soon!"
              link=""
              imageSrc="/motia-name.png"
            />
          </div>
        </section>


      </div>
      <div className="bg-stone-800 w-full p-10 text-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-2xl font-semibold">Get in touch</p>
          <p className="mt-2">Feel free to reach out to me via email or connect with me on LinkedIn. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>

          <div className="flex flex-row gap-2 items-center my-3">
            <Mail className="size-5 text-white" />
            <a href="mailto:ivettes.business@gmail.com" className="text-white underline">ivettes.business@gmail.com</a>
          </div>

          <div className="flex flex-row gap-2 items-center">
            <MapPin className="size-5 text-white" />
            <p className="text-white">Barcelona, Spain</p>
          </div>

        </div>
      </div>
    </>
  );
}