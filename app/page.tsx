import { File, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen pt-12 bg-pink-50 font-sans">
      <main className="max-w-5xl w-full flex flex-col  mx-auto space-y-3 p-5">
        <div className="lg:flex lg:flex-row justify-center space-y-3 lg:space-x-7 items-center">
          <div className="rounded-full bg-neutral-400 mx-auto size-40 overflow-hidden">
            <Image
              // className="rounded-full size-40"
              src="/profile.jpeg"
              alt="Profile picture"
              objectFit="cover"
              width={160}
              height={160}
            // style={{
            //   maxWidth: '100%',
            //   maxHeight: '100%',
            // }}
            />
          </div>
          <div className="">
            <h1 className="font-bold text-4xl text-black text-center lg:text-6xl lg:text-right">Front-end developer</h1>
            <p className="text-center lg:text-right text-black lg:text-4xl">Ivette Sanjurjo Martínez</p>

            {/* Social media */}
            <div className="flex flex-wrap gap-2 items-center mx-auto w-fit mt-2 lg:mr-0">  
              <a className="flex flex-row space-x-2 items-center border border-neutral-400 rounded-md p-2 w-fit hover:p-3 hover:transition-all focus:bg-pink-300 focus:border-pink-400 transition-all focus:text-black" href="/pdf/CV_Ivette_Sanjurjo.pdf" target="_blank">
                <File className="size-3 text-black" />
                <p className="text-xs text-black">CV</p>
              </a>

              <a className="flex flex-row space-x-2 items-center border border-neutral-400 rounded-md p-2 w-fit hover:p-3 hover:transition-all focus:bg-pink-300 focus:border-pink-400 transition-all focus:text-black" href="https://github.com/ivetetetete" target="_blank">
                <Github className="size-3 text-black" />
                <p className="text-xs text-black">GitHub</p>
              </a>

              <a className="flex flex-row space-x-2 items-center border border-neutral-400 rounded-md p-2 w-fit hover:p-3 hover:transition-all focus:bg-pink-300 focus:border-pink-400 transition-all focus:text-black" href="https://www.linkedin.com/in/ivette-sanjurjo-mart%C3%ADnez/" target="_blank">
                <Linkedin className="size-3 text-blue-700" />
                <p className="text-xs text-black">LinkedIn</p>
              </a>

              <a className="flex flex-row space-x-2 items-center border border-neutral-400 rounded-md p-2 w-fit hover:p-3 hover:transition-all focus:bg-pink-300 focus:border-pink-400 transition-all focus:text-black" href="mailto:ivette.business@gmail.com" target="_blank">
                <Mail className="size-3 text-red-600" />
                <p className="text-xs text-black">Mail</p>
              </a>

            </div>
          </div>
        </div>



        {/* About me section */}
        <section className="my-3">
          <div className="relative w-fit">
            <div className="bg-pink-300/50 rotate-3 absolute top-0 -left-2 h-10 w-48 z-0" />
            <p className="text-4xl font-bold text-black text-left w-fit z-10 relative ">About me</p>
          </div>
          <div className="mt-2">
            <p className="text-black">Hi! I&apos;m Ivette Sanjurjo Martínez, a <span className="font-semibold text-pink-400">passionate</span> front-end developer with <span className="font-semibold text-pink-400">2 years hands-on experience</span>. I love creating multiplatform apps that provide seamless user experiences across devices.</p>
          </div>
        </section>

        {/* Projects section */}
        <section>
          <div className="relative w-fit my-3">
            <div className="bg-pink-300/50 rotate-3 absolute top-0 -left-2 h-10 w-44 z-0" />
            <p className="text-4xl font-bold text-black text-left w-fit z-10 relative ">My work</p>
          </div>
          {/* Projects cards */}
          <div className="bg-white border border-neutral-300 rounded-3xl shadow-md hover:shadow-lg transition-all w-full max-w-md mx-auto mt-5 hover:scale-105 lg:mx-0">
            <Link href="https://safinder.es" target="_blank">
              <Image
                className="rounded-t-3xl"
                src="/safinder.png"
                alt="Project 1"
                objectFit="cover"
                width={600}
                height={300}
              />
              <div className="p-5">
                <h2 className="font-bold text-2xl text-black">Safinder</h2>
                <p className="text-black mt-2">App created with React Native and Firebase. A dating app designed exclusively for lesbian women and non-binary people. Connect through meaningful weekly questions and discover your ideal partner with Safinder.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <div className="bg-[#61DBFB] border-2 border-[#3fa3bc] rounded-4xl p-1.5 w-fit max-w-32 min-w-16">
                    <p className="text-[#487b88] font-semibold text-xs text-center">React Native</p>
                  </div>
                  <div className="bg-orange-200 border-2 border-orange-400 rounded-2xl py-1.5 px-2 w-fit">
                    <p className="text-orange-600 font-semibold text-xs">Firebase</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Skills section */}
        <section className="my-3">
          <div className="relative w-fit my-3">
            <div className="bg-pink-300/50 rotate-3 absolute top-0 -left-2 h-10 w-32 z-0" />
            <p className="text-4xl font-bold text-black text-left w-fit z-10 relative ">Skills</p>
          </div>
          <div className="mt-2 flex flex-row flex-wrap gap-3 items-center">
            <div className="bg-[#61DBFB] border-dashed border-2 border-[#3fa3bc] rounded-4xl p-1.5 w-fit max-w-32 min-w-16 hover:rotate-3 transition-all">
              <p className="text-[#487b88] font-semibold text-xs text-center">React Native</p>
            </div>
            <div className="bg-yellow-200 border-dashed border-2 border-yellow-400 rounded-4xl p-1.5 w-fit max-w-32 min-w-16 hover:rotate-3 transition-all">
              <p className="text-yellow-600 font-semibold text-xs text-center">HTML</p>
            </div>
            <div className="bg-purple-200 border-dashed border-2 border-purple-400 rounded-4xl p-1.5 w-fit max-w-32 min-w-16 hover:rotate-3 transition-all">
              <p className="text-purple-600 font-semibold text-xs text-center">PHP</p>
            </div>
            <div className="bg-blue-200 border-dashed border-2 border-blue-400 rounded-4xl p-1.5 w-fit max-w-32 min-w-16 hover:rotate-3 transition-all">
              <p className="text-blue-600 font-semibold text-xs text-center">Tailwind CSS</p>
            </div>
            <div className="bg-amber-200 border-dashed border-2 border-amber-400 rounded-4xl p-1.5 w-fit max-w-32 min-w-16 hover:rotate-3 transition-all">
              <p className="text-amber-600 font-semibold text-xs text-center">Javascript</p>
            </div>
            <div className="bg-teal-200 border-dashed border-2 border-teal-400 rounded-4xl p-1.5 w-fit max-w-32 min-w-16 hover:rotate-3 transition-all">
              <p className="text-teal-600 font-semibold text-xs text-center">Typescript</p>
            </div>
            <div className="bg-orange-200 border-dashed border-2 border-orange-400 rounded-4xl p-1.5 w-fit max-w-32 min-w-16 hover:rotate-3 transition-all">
              <p className="text-orange-600 font-semibold text-xs text-center">Firebase</p>
            </div>
          </div>
        </section>

        {/* <div>
          <div className="bg-pink-200 border border-pink-400 rounded-4xl p-2 w-fit">
            <p className="text-pink-600 font-semibold text-sm">React Native</p>
          </div>
        </div> */}
      </main>

    </div>
  );
}
