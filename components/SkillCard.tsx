function SkillCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-neutral-900 drop-shadow-md rounded-3xl p-5 w-full transform transition-all duration-300 ease-in-out border border-transparent dark:border-neutral-800">
      <p className="font-bold text-black dark:text-white text-lg mb-3">{title}</p>
      <div className="space-y-1">
        {children}
      </div>
    </div>
  );
}

export default SkillCard;