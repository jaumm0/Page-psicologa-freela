import React from "react";
import shield from "./Assets/shield.png";
import brain from "./Assets/brain.png";
import heart from "./Assets/heart.png";
import users from "./Assets/users.png";
import video from "./Assets/video.png";
import statusbar from "./Assets/sparkles.png";

function Services() {
  return (
    <section
      id="Services"
      className="grid lg:grid-rows-1 place-items-center bg-Servicesbg w-full"
    >
      <section>
        <div className="grid grid-rows-3 px-5 sm:px-0 md:px-0 lg:px-0 lg:grid-rows-3 md:grid-rows-3 sm:grid-rows-1 w-full lg:px-10 md:px-8 sm:px-6  md:py-8 sm:py-6 place-items-center">
          <span className="text-textmain text-2xl font-cormorant font-medium lg:text-2xl md:text-xl sm:text-lg">
            Serviços
          </span>
          <h2 className="font-cormorant  lg:text-5xl md:text-4xl sm:text-3xl text-h1color font-medium lg:mb-5 md:mb-4 sm:mb-3">
            Como posso te ajudar
          </h2>
          <span className="text-ulheader font-inter text-justify font-medium text-justify lg:text-lg md:text-base sm:text-sm lg:px-55 md:px-20 sm:px-6">
            Ofereço diferentes modalidades de atendimento psicológico, adaptadas
            às suas necessidades e objetivos terapêuticos.
          </span>
        </div>
      </section>

      <ul className="grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 bg-Servicesbg w-80 sm:w-full md:w-full lg:w-full my-10 lg:my-0 md:my-0 sm:my-0 text-center sm:text-center md:text-center lg-text-center lg:px-20 md:px-10 sm:px-6 lg:py-20 md:py-12 sm:py-8 gap-6 lg:gap-10 place-items-stretch">
        <li className="w-full lg:h-auto md:h-auto sm:h-auto min-h-60 rounded-xl bg-whitecream lg:px-5 md:px-4 sm:px-4 lg:py-5 md:py-4 sm:py-4 hover:scale-105 transition-all duration-150 shadow-lg">
          <span className=" rounded-full w-10 h-10 flex justify-center items-center lg:mt-10 md:mt-8 sm:mt-6 sm:bg-bgIcon ">
            <img className="hidden sm:block" src={heart} alt="" />
          </span>
          <p className="font-cormorant text-h1color lg:text-2xl md:text-xl sm:text-lg font-medium pb-3">
            Terapia Individual
          </p>
          <span className="font-inter text-ulheader text-justify lg:text-base md:text-sm sm:text-xs">
            Atendimento personalizado focado em suas necessidades específicas,
            trabalhando questões como ansiedade, depressão e autoestima.
          </span>
        </li>

        <li className="w-full lg:h-auto md:h-auto sm:h-auto min-h-60 rounded-xl bg-whitecream lg:px-5 md:px-4 sm:px-4 lg:py-5 md:py-4 sm:py-4 hover:scale-105 transition-all duration-150 shadow-lg">
          <span className="rounded-full w-10 h-10 flex justify-center items-center lg:mt-10 md:mt-8 sm:mt-6 mb-4 sm:bg-bgIcon ">
            <img className="hidden sm:block" src={users} alt="" />
          </span>
          <p className="font-cormorant text-h1color lg:text-2xl md:text-xl sm:text-lg font-medium pb-3">
            Terapia de Casal
          </p>
          <span className="font-inter text-ulheader text-justify lg:text-base md:text-sm sm:text-xs">
            Fortalecimento do vínculo afetivo, melhoria da comunicação e
            resolução de conflitos para relacionamentos mais saudáveis.
          </span>
        </li>

        <li className="w-full lg:h-auto md:h-auto sm:h-auto min-h-60 rounded-xl bg-whitecream lg:px-5 md:px-4 sm:px-4 lg:py-5 md:py-4 sm:py-4 hover:scale-105 transition-all duration-150 shadow-lg">
          <span className="rounded-full w-10 h-10 flex justify-center items-center lg:mt-10 md:mt-8 sm:mt-6 mb-4 sm:bg-bgIcon ">
            <img className="hidden sm:block" src={brain} alt="" />
          </span>
          <p className="font-cormorant text-h1color lg:text-2xl md:text-xl sm:text-lg font-medium pb-3">
            Avaliação Psicológica
          </p>
          <span className="font-inter text-ulheader text-justify lg:text-base md:text-sm sm:text-xs">
            Avaliação neuropsicológica e psicodiagnóstico para compreensão
            aprofundada do funcionamento emocional e cognitivo.
          </span>
        </li>

        <li className="w-full lg:h-auto md:h-auto sm:h-auto min-h-60 rounded-xl bg-whitecream lg:px-5 md:px-4 sm:px-4 lg:py-5 md:py-4 sm:py-4 hover:scale-105 transition-all duration-150 shadow-lg">
          <span className=" rounded-full w-10 h-10 flex justify-center items-center lg:mt-10 md:mt-8 sm:mt-6 mb-4 sm:bg-bgIcon">
            <img className="hidden sm:block" src={video} alt="" />
          </span>
          <p className="font-cormorant text-h1color lg:text-2xl md:text-xl sm:text-lg font-medium pb-3">
            Atendimento Online
          </p>
          <span className="font-inter text-ulheader text-justify lg:text-base md:text-sm sm:text-xs">
            Sessões por videochamada com a mesma qualidade do atendimento
            presencial, de onde você estiver.
          </span>
        </li>

        <li className="w-full lg:h-auto md:h-auto sm:h-auto min-h-60 rounded-xl bg-whitecream lg:px-5 md:px-4 sm:px-4 lg:py-5 md:py-4 sm:py-4 hover:scale-105 transition-all duration-150 shadow-lg">
          <span className="rounded-full w-10 h-10 flex justify-center items-center lg:mt-10 md:mt-8 sm:mt-6 mb-4 sm:bg-bgIcon">
            <img className="hidden sm:block" src={statusbar} alt="" />
          </span>
          <p className="font-cormorant text-h1color lg:text-2xl md:text-xl sm:text-lg font-medium pb-3">
            Orientação Parental
          </p>
          <span className="font-inter text-ulheader text-justify lg:text-base md:text-sm sm:text-xs">
            Suporte para pais que buscam compreender melhor seus filhos e
            desenvolver estratégias de educação positiva.
          </span>
        </li>

        <li className="w-full lg:h-auto md:h-auto sm:h-auto min-h-60 rounded-xl bg-whitecream lg:px-5 md:px-4 sm:px-4 lg:py-5 md:py-4 sm:py-4 hover:scale-105 transition-all duration-150 shadow-lg">
          <span className=" rounded-full w-10 h-10 flex justify-center items-center lg:mt-10 md:mt-8 sm:mt-6 mb-4  sm:bg-bgIcon">
            <img className="hidden sm:block" src={shield} alt="" />
          </span>
          <p className="font-cormorant text-h1color lg:text-2xl md:text-xl sm:text-lg font-medium pb-3">
            Manejo do Estresse
          </p>
          <span className="font-inter text-ulheader text-justify lg:text-base md:text-sm sm:text-xs">
            Técnicas e estratégias para lidar com pressões do dia a dia,
            burnout e sobrecarga emocional.
          </span>
        </li>
      </ul>
    </section>
  );
}

export default Services;