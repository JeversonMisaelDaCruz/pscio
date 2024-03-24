import React from "react";

function TCCCard() {
  return (
    <div className="bg-blue-800 rounded-lg p-6 relative text-white w-64"> {/* Tamanho e cores podem ser ajustados */}
      <h2 className="text-2xl font-bold">Terapia Cognitiva Comportamental (TCC)</h2>
      <p className="text-sm mt-2">acessar e entender</p>
      <div className="absolute top-2 right-2 bg-red-500 rounded-full w-8 h-8 flex items-center justify-center"> {/* Posicionamento e tamanho do balão */}
        <span className="text-xs font-bold">112</span>
      </div>
    </div>
  );
}

export default TCCCard;
