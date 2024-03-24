import Link from "next/link";
import { Button } from "../ui/button";
import React from "react";

export function Header() {
  return (
    //Componente header que carrega a nav bar,texto e icones
    <header className="w-full flex bg-white items-center px-2 py-4 h-20 overflow-hidden">
      <div className="w-full flex items-center justify-between mx-auto max-w-7xl ">
        <Link href="/">
          <h1 className="font-bold text-xl hover:tracking-widest duration-300">
            <span className="text-purple-600">Psico</span><span className="text-black">téra</span>
          </h1>
        </Link>
        </div>
        <div className="w-full flex gap-8 justify-center whitespace-nowrap">
          <Link href="/">
          <h3 className="hover:border-b-2 hover:border-pink-500 duration-500 cursor-pointe ">Seu futuro psicólogo</h3>
          </Link>
          <Link href="/abordagens">
          <h3 className="hover:border-b-2 hover:border-pink-500 duration-500 cursor-pointer">Tipos de abordagem</h3>
          </Link>
          <h3 className="hover:border-b-2 hover:border-pink-500 duration-500 cursor-pointer">Quem somos</h3>
        </div>
        <div className="w-full flex gap-4 justify-end px-3">
          <Button className="bg-purple-600 text-white hoover:text-black" variant="outline">Entrar</Button>
          <Button className="bg-pink-500 text-white hoover:text-black" variant="outline">Faça seu cadastro</Button>
        </div>
        <div>
        

        </div>
    </header>
  );
}
