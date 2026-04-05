import Image from "next/image";
import Link from "next/link";

export default function Card({ title, description, imageSrc, link }: { title: string; description: string; imageSrc: string; link: string; }) {
    return (
        <div className="bg-white border  border-neutral-300 rounded-3xl shadow-md hover:shadow-lg transition-all w-full mt-5 hover:scale-105 md:m-0">
            <Link href={link} target="_blank">
                <div className="p-5">
                    <div className="flex flex-row items-center gap-4">
                        <h2 className="font-bold text-2xl text-black flex-1">{title}</h2>
                        <div className="w-46 h-32 relative shrink-0">
                            <Image
                                src={imageSrc}
                                alt={title}
                                fill
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    </div>
                    <p className="text-black mt-1 text-sm">{description}</p>
                </div>
            </Link>
        </div>
    );
}