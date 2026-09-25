import Image from "next/image";
import Link from "next/link";

export default function Card({ title, description, imageSrc, link, stack }: { title: string; description: string; imageSrc: string; link: string; stack?: string[] }) {
    return (
        <div className="bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-3xl shadow-md hover:shadow-lg transition-all w-full mt-5 hover:scale-105 md:m-0">
            <Link href={link} target="_blank">
                <div className="p-5">
                    <div className="flex flex-row items-center gap-4">
                        <h2 className="font-bold text-2xl text-black dark:text-white flex-1">{title}</h2>
                        <div className="w-46 h-32 relative shrink-0">
                            <Image
                                src={imageSrc}
                                alt={title}
                                fill
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-300 mt-1 text-sm">{description}</p>

                    {stack && (
                        <div className="flex flex-wrap gap-2 mt-3">
                            {stack.map((tech, idx) => (
                                <span key={idx} className="text-xs text-stone-600 dark:text-stone-300 bg-stone-100 dark:bg-neutral-800 px-2 py-1 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </Link>
        </div>
    );
}