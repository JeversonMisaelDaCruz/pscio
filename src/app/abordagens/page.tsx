import TCCCard from "@/components/bg/page";
import Image from "next/image";

export default function abordagem() {
  return (
    <div className="relative">
      <div className="absolute flex flex-col justify-start text-blue-950">
        <h2 className=" flex text-7xl  font-bold px-6 py-6">
          Tipos de
        </h2>
        <h2 className="text-7xl font-bold px-6 py-1">
          abordagem
        </h2>
        <h3 className="text-2xl px-6 py-4">
          Acesse a descrição completa <br />
          de cada abordagem disponivel
        </h3>
      </div>
      <div className="flex justify-end px-4">
        <Image src="/img/imagemv.png"
          width={1000}
          height={1000}
          alt="Imagem representativa"
        />
      </div>

      <div className="flex justify-center gap-20 px-4 py-6">
       <div>
         <div className="bg-blue-800 rounded-lg p-6 relative text-white w-64"> {/* Tamanho e cores podem ser ajustados */}
          <h2 className="text-2xl font-bold">Terapia Cognitiva Comportamental (TCC)</h2>
         <div className="absolute top-2 right-2 bg-red-500 rounded-full w-8 h-8 flex items-center justify-center"> {/* Posicionamento e tamanho do balão */}
        <span className="text-xs font-bold">112</span>
         </div>
        </div>
       </div>

       <div className="bg-blue-800 rounded-lg p-6 relative text-white w-64"> {/* Tamanho e cores podem ser ajustados */}
      <h2 className="text-2xl font-bold">Historico cultural </h2>
      <div className="absolute top-2 right-2 bg-red-500 rounded-full w-8 h-8 flex items-center justify-center"> {/* Posicionamento e tamanho do balão */}
        <span className="text-xs font-bold">112</span>
      </div>

      </div>

<div className="bg-blue-800 rounded-lg p-6 relative text-white w-64"> {/* Tamanho e cores podem ser ajustados */}
<h2 className="text-2xl font-bold">Fenomenológica <br />existencial </h2>
<div className="absolute top-2 right-2 bg-red-500 rounded-full w-8 h-8 flex items-center justify-center"> {/* Posicionamento e tamanho do balão */}
 <span className="text-xs font-bold">112</span>
</div>
    </div>

    
    </div>
    </div>
    
  )
}
