import React from "react";
import therapy from "./Assets/therapy-office.jpg";

function Info() {
  return (
    <section
      id="Sobre"
      className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-90 place-self-center sm:w-full md:w-full lg:w-full lg:px-20 md:px-10 sm:px-6 lg:py-20 md:py-12 sm:py-8 gap-10 place-items-center"
    >
      {/* Imagem */}
      <div className="rotate-3 bg-gray-200 hidden lg:flex lg:w-160 lg:h-135 place-items-center justify-center rounded-xl shadow-lg">
        <img
          src={therapy}
          alt="Consultório de psicologia"
          className="rotate-[-3deg] rounded-xl shadow-lg lg:w-140 lg:h-120 object-cover object-center"
        />
      </div>

      {/* Texto */}
      <aside className="grid lg:grid-rows-3 md:grid-rows-3 sm:grid-rows-1 bg-white text-sm text-justify lg:w-160 md:w-full sm:w-full lg:h-140 lg:px-10 md:px-8 sm:px-6 lg:py-10 md:py-8 sm:py-6 place-items-center rounded-xl shadow-lg">
        <span className="text-textmain font-cormorant text-2xl lg:text-2xl md:text-xl sm:text-lg mb-4">
          Sobre Mim
        </span>

        <h2 className="font-cormorant text-h1color lg:text-4xl md:text-3xl sm:text-2xl font-medium mb-6 text-center">
          Um espaço seguro para você ser você
        </h2>

        <ul className="font-inter font-medium text-ulheader px-4 mb-6">
          <li className="mb-4">
            Sou Ana Beatriz, psicóloga clínica com mais de 12 anos de
            experiência no atendimento de adultos, adolescentes e casais.
          </li>
          <li className="mb-4">
            Minha abordagem é baseada na Terapia Cognitivo-Comportamental (TCC),
            com foco em ajudar você a compreender seus pensamentos, emoções e
            comportamentos.
          </li>
          <li>
            Acredito que cada pessoa carrega uma história única e merece um
            espaço de acolhimento genuíno, sem julgamentos.
          </li>
        </ul>

        <ul className="font-inter font-medium text-ulheader grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 place-items-center">
          <li className="bg-bgIcon h-8 flex items-center justify-center rounded-xl shadow-lg px-4">
            CRP 00/00000
          </li>
          
          <li className="bg-bgIcon h-8 flex items-center justify-center rounded-xl shadow-lg px-4 mb-5 lg:mb-0 md:mb-0 sm:mb-0">
            Pós-graduada em Neuropsicologia
          </li>
        </ul>
      </aside>
    </section>
  );
}

export default Info;