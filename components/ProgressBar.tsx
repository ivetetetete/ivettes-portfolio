export default function ProgressBar({ title, percentage, color }: { title: string; percentage: number; color: string }) {
    return (
        <div className="my-3">
            <div className="flex flex-row items-center justify-between">
                <p className="text-black ">{title}</p>
                <p className="text-black">{percentage}%</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className={`h-2.5 rounded-full progress`} style={{ width: `${percentage}%`, backgroundColor: color, transition: 'width 0.5s ease-in-out'}}></div>
            </div>
        </div>
    );
}