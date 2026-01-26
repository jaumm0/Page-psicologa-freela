import React from "react";
import Assets from "./Assets/hero-psychologist.jpg";
import Greenheart from "./Assets/green-heart.jpg";

function Main({ onAgendarClick }) {
  return (
    <div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-full bg-mainbg lg:px-10 md:px-6 sm:px-4 lg:pb-20 md:pb-16 sm:pb-12">
        
        {/* Texto */}
        <section className="grid place-items-center sm:place-items-start mt-10 md:mr-10">
          <span className="text-textmain font-medium lg:text-lg md:text-base sm:text-sm lg:text-left md:text-left sm:text-center">
            PSICÓLOGA CLÍNICA · CRP 00/00000
          </span>

          {/* Título desktop */}
          <h1 className="font-cormorant lg:text-7xl md:text-5xl sm:hidden text-h1color lg:text-left md:text-left lg:-mt-2 md:-mt-2">
            Sua jornada de <br />
            <span className="text-textmain">autoconhecimento</span>
            <br />
            começa aqui
          </h1>

          {/* Título mobile */}
          <h1 className="font-cormorant hidden sm:block sm:text-3xl text-h1color text-center sm:-mt-1">
            Sua jornada de <br />
            <span className="text-textmain">autoconhecimento</span>
            <br />
            começa aqui
          </h1>

          <p className="text-spancolor font-medium lg:text-lg md:text-base sm:text-sm lg:py-2 md:py-2 sm:py-2 lg:text-left md:text-left sm:text-center hidden sm:block">
            Acolhimento humanizado e tratamento especializado para <br className="hidden lg:block" />
            você alcançar equilíbrio emocional e qualidade de vida.
          </p>

          {/* Botões */}
          <div className="grid grid-cols-2 gap-5 mt-4 place-items-center px-10 lg:px-0 sm:px-0 md:px-0">
            <button
              onClick={onAgendarClick}
              className="font-medium lg:text-lg md:text-base sm:text-sm w-full h-13 px-2 text-white bg-buttonp hover:bg-hoverBtn rounded-xl transition-all duration-200"
            >
              Agendar Primeira Consulta
            </button>

            <button
              onClick={() =>
                document.getElementById("Sobre")?.scrollIntoView({ behavior: "smooth" })
              }
              className="font-medium lg:text-lg md:text-base sm:text-sm w-full h-13 px-2 text-textmain rounded-xl border-2 border-buttonS hover:bg-buttonS hover:text-white transition-all duration-150"
            >
              Conhecer Mais
            </button>
          </div>

          {/* Indicadores */}
          <section className="grid my-5 gap-5">
            <ul className="grid grid-cols-3 place-items-center lg:divide-x md:divide-x border-ulheader gap-4 lg:gap-0">
              <li className="text-center lg:pr-5 md:pr-3">
                <p className="font-cormorant font-medium lg:text-xl md:text-lg sm:text-base">12+</p>
                <span className="font-inter font-medium text-ulheader text-sm">
                  Anos de experiência
                </span>
              </li>

              <li className="text-center lg:pr-5 md:pr-3">
                <p className="font-cormorant font-medium lg:text-xl md:text-lg sm:text-base">1000+</p>
                <span className="font-inter font-medium text-ulheader text-sm">
                  Vidas transformadas
                </span>
              </li>

              <li className="text-center">
                <p className="font-cormorant font-medium lg:text-xl md:text-lg sm:text-base">
                  Online
                </p>
                <span className="font-inter font-medium text-ulheader text-sm">
                  & Presencial
                </span>
              </li>
            </ul>
          </section>
        </section>

        {/* Imagem */}
        <aside className="flex mt-4 relative">
          <div className="relative w-full">
            <section className="bg-gray-200 lg:rotate-3 md:rotate-3 sm:rotate-0 rounded-xl overflow-hidden shadow-lg">
              <img
                className="px-4 rounded-lg w-full lg:h-[600px] md:h-[500px] sm:h-[400px] object-cover object-center lg:rotate-[-3deg] md:rotate-[-3deg] sm:rotate-0"
                src={Assets}
                alt="Dra. Ana Beatriz - Psicóloga Clínica"
              />
            </section>

            {/* Badge */}
            <div className="absolute lg:bottom-8 md:bottom-6 sm:bottom-4 lg:right-8 md:right-6 sm:right-4 hidden sm:flex bg-white rounded-xl shadow-xl px-4 py-3 items-center gap-3">
              <img
                className="lg:w-10 md:w-9 sm:w-8 lg:h-10 md:h-9 sm:h-8 object-cover rounded-full"
                src={Greenheart}
                alt="Atendimento Humanizado"
              />
              <p className="font-cormorant font-medium lg:text-lg md:text-base sm:text-sm text-textmain">
                Atendimento Humanizado
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Main;
