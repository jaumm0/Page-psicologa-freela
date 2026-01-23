import React from "react";
import star from "./Assets/star.png";

function Feadback() {
  return (
    <section id="Feadback" className="grid lg:grid-rows-1 place-items-center bg-feadbackBg hidden">
      <section>
        <div className="grid lg:grid-rows-3 md:grid-rows-3 sm:grid-rows-1 w-full lg:px-10 md:px-8 sm:px-6 lg:py-10 md:py-8 sm:py-6 place-items-center">
          <span className="text-textmain font-cormorant font-medium text-2xl lg:text-2xl md:text-xl sm:text-lg">
            Depoimentos
          </span>

          <h2 className="font-cormorant lg:text-5xl md:text-4xl sm:text-3xl text-h1color font-medium lg:mb-5 md:mb-4 sm:mb-3 text-center">
            Histórias de transformação
          </h2>

          <span className="text-ulheader px-10 mt-5 sm:px-0 md:px-0 lg:px-10 sm:mt-0 md:mt-0 lg:mt-0 font-inter font-medium text-justify lg:text-lg md:text-base sm:text-sm items-center lg:px-55 md:px-20 sm:px-6 text-center lg:text-left md:text-left sm:text-center">
            A satisfação dos meus pacientes é o que me motiva a cada dia.
          </span>
        </div>
      </section>

      <ul className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 bg-Servicesbg w-full lg:px-20 md:px-10 sm:px-6 lg:py-20 md:py-12 sm:py-8 gap-6 lg:gap-10 place-items-stretch">
        <li className="w-full lg:h-auto md:h-auto sm:h-auto  min-h-60 rounded-xl bg-whitecream lg:px-5 md:px-4 sm:px-4 lg:py-5 md:py-4 sm:py-4 hover:scale-105 transition-all duration-150 shadow-xl">
          <span className="bg-bgIcon rounded-full w-10 h-10 flex justify-center items-center lg:mt-5 md:mt-4 sm:mt-3 mb-4">
            <img className="hidden" src={star} alt="Estrela" />
          </span>

          <span className="font-inter text-justify place-items-center  text-ulheader text-justify lg:text-lg md:text-base sm:text-sm">
            "A Dra. Ana me ajudou a superar um período muito difícil de ansiedade. Seu acolhimento e profissionalismo fizeram toda a diferença na minha recuperação."
          </span>
        </li>

        <li className="w-full lg:h-auto md:h-auto sm:h-auto min-h-60 rounded-xl bg-whitecream lg:px-5 md:px-4 sm:px-4 lg:py-5 md:py-4 sm:py-4 hover:scale-105 transition-all duration-150 shadow-xl">
          <span className="bg-bgIcon rounded-full w-10 h-10 flex justify-center items-center lg:mt-5 md:mt-4 sm:mt-3 mb-4">
            <img className="" src={star} alt="Estrela" />
          </span>

          <span className="font-inter text-ulheader text-justify lg:text-lg md:text-base sm:text-sm">
            "Depois de anos resistindo à terapia, encontrei na Dra. Ana um espaço seguro para me abrir. As sessões online facilitaram muito minha rotina corrida."
          </span>
        </li>

        <li className="w-full lg:h-auto md:h-auto sm:h-auto min-h-60 rounded-xl bg-whitecream lg:px-5 md:px-4 sm:px-4 lg:py-5 md:py-4 sm:py-4 hover:scale-105 transition-all duration-150 shadow-xl lg:col-span-1 md:col-span-2 sm:col-span-1">
          <span className="bg-bgIcon rounded-full w-10 h-10 flex justify-center items-center lg:mt-5 md:mt-4 sm:mt-3 mb-4">
            <img className="" src={star} alt="Estrela" />
          </span>

          <span className="font-inter text-ulheader text-justify lg:text-lg md:text-base sm:text-sm">
            "A terapia de casal salvou nosso relacionamento. Aprendemos a nos comunicar de forma saudável e hoje nossa conexão é muito mais forte."
          </span>
        </li>

      </ul>
    </section>
  );
}

export default Feadback;