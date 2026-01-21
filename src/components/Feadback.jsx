import React from "react";
import star from "./Assets/star.png";

function Feadback() {
  return (
    <section id="Feadback" className="grid lg:grid-rows-1 place-items-center bg-feadbackBg">
      <section>
        <div className="grid lg:grid-rows-3 md:grid-rows-3 sm:grid-rows-1 w-full px-10 py-10 place-items-center">
          <span className="text-textmain font-cormorant font-medium text-2xl">
            Depoimentos
          </span>

          <h2 className="font-cormorant text-5xl text-h1color font-medium mb-5">
            Histórias de transformação
          </h2>

          <span className="text-ulheader font-inter font-medium text-justify text-lg items-center px-55">
            A satisfação dos meus pacientes é o que me motiva a cada dia.
          </span>
        </div>
      </section>

      <ul className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 bg-Servicesbg w-full px-20 py-20 gap-10 place-items-center">
        <li className="w-100 h-60 rounded-xl bg-whitecream px-5 hover:scale-x-105 hover:scale-y-105 transition-all duration-150 shadow-xl">
          <span className="bg-bgIcon rounded-full w-10 h-10 flex justify-center items-center mt-5 mb-5">
            <img className="" src={star} alt="" />
          </span>

          <span className="font-inter text-ulheader text-justify text-xl">
            "A Dra. Ana me ajudou a superar um período muito difícil de ansiedade. Seu acolhimento e profissionalismo fizeram toda a diferença na minha recuperação."
          </span>
        </li>

        <li className="w-100 h-60 rounded-xl bg-whitecream px-5 hover:scale-x-105 hover:scale-y-105 transition-all duration-150 shadow-xl">
          <span className="bg-bgIcon rounded-full w-10 h-10 flex justify-center items-center mt-5 mb-5">
            <img className="" src={star} alt="" />
          </span>

          <span className="font-inter text-ulheader text-justify text-xl">
            "Depois de anos resistindo à terapia, encontrei na Dra. Ana um espaço seguro para me abrir. As sessões online facilitaram muito minha rotina corrida."
          </span>
        </li>

        <li className="w-100 h-60 rounded-xl bg-whitecream px-7 hover:scale-x-105 hover:scale-y-105 transition-all duration-150 shadow-xl">
          <span className="bg-bgIcon rounded-full w-10 h-10 flex justify-center items-center mt-5 mb-5">
            <img className="" src={star} alt="" />
          </span>

          <span className="font-inter text-ulheader text-justify text-xl">
            "A terapia de casal salvou nosso relacionamento. Aprendemos a nos comunicar de forma saudável e hoje nossa conexão é muito mais forte."
          </span>
        </li>

      </ul>
    </section>
  );
}

export default Feadback;