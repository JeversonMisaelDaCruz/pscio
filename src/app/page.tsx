import Image from "next/image";

export default function Home() {
  return (
    //Hero que carrega os textos e a imagem da landpage
    <main className="relative flex justify-start items-start w-full min-h-[calc(100vh-80px)] px-10">   
      <div className="absolute z-10 flex flex-col text-blue-950 py-4">
        <h1 className="font-semibold text-7xl">Encontre <u>seu</u></h1>
        <h1 className="font-semibold text-7xl"><u>novo</u> terapeuta </h1>
        <h1 className="font-semibold text-7xl">perto de você!</h1>
        <h1 className="font-extrabold text-blue-900 hover:tracking-widest duration-300 text-2xl">on-line ou presencial</h1>
      </div>
      
      <div className="flex justify-end self-end">
        <Image src="/img/imgz.png"
          className=""
          width={1300}
          height={1100}
          alt="Imagem representativa"
        />
      </div>
    </main>
  );
}
