import { getMasterCards, getCardVariants, getMasterCardTags } from "../lib/data";
import CardSearch from "./components/CardSearch";

export default async function Home() {
  const [masterCards, variants, cardTags] = await Promise.all([
    getMasterCards(),
    getCardVariants(),
    getMasterCardTags(),
  ]);

  return (
    <main className="min-h-screen bg-gray-950 p-4 md:p-8 text-white overflow-hidden relative">
      {/* Background aesthetics */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30 select-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full">
        <CardSearch masterCards={masterCards} variants={variants} cardTags={cardTags} />
      </div>
    </main>
  );
}
