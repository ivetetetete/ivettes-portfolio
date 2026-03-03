import Image from "next/image";
import Link from "next/link";

export default function Card({ title, description, imageSrc, link, technologies, isInProgress }: { title: string; description: string; imageSrc: string; link: string; technologies: { name: string; color: string }[]; isInProgress?: boolean }) {
    return (
        <div className="bg-white border h-137.5 border-neutral-300 rounded-3xl shadow-md hover:shadow-lg transition-all w-full  mt-5 hover:scale-105 md:m-0">
            <Link href={link} target="_blank">
                <div className="relative w-full h-70 mx-auto rounded-t-3xl overflow-crop">
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover rounded-t-3xl"
                        //sizes="(max-width: 600px) 100vw, 600px"
                    />
                </div>
                <div className="p-5">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-x-2 justify-between">
                        <h2 className="font-bold text-2xl text-black">{title}</h2>
                        {isInProgress && <p className="text-amber-700 font-semibold animate-pulse bg-amber-300 py-1 px-2 w-fit rounded-xl">🚧 Work in progress 🚧</p>}
                    </div>
                    <p className="text-black mt-2">{description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {technologies.map((tech, index) => (
                            <div key={index} className={`bg-${tech.color}-200 border-2 border-${tech.color}-400 rounded-2xl py-1.5 px-2 w-fit`}>
                                <p className={`text-${tech.color}-600 font-semibold text-xs`}>{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Link>
        </div>
    );
}