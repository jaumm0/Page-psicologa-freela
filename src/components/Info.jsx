import React from "react";
import therapy from "./Assets/therapy-office.jpg";

<<<<<<< HEAD
function Info (){
    return(
        <section id="Sobre"
        className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-90 place-self-center sm:w-full md:w-full lg:w-full lg:px-20 md:px-10 sm:px-6 lg:py-20 md:py-12 sm:py-8 gap-10 place-items-center"
        >
            <div
            className="rotate-3 bg-gray-200 lg:w-160 md:w-140 sm:w-full lg:h-135 md:h-120 sm:h-auto place-items-center flex justify-center items-center rounded-xl shadow-lg"
            >
                <img 
                className="rotate-357 rounded-xl shadow-lg lg:w-140 md:w-120 sm:w-full hidden sm:block lg:h-120 md:h-100 sm:h-auto object-cover object-[50%_50%]"
                src={therapy}
                alt="" />
            </div>
            <aside
            className="grid lg:grid-rows-3 md:grid-rows-3 text-sm text-justify  sm:grid-rows-1 bg-white lg:w-160 md:w-140 sm:w-full lg:h-140 md:h-auto sm:h-auto lg:px-10 md:px-8 sm:px-6 lg:py-10 md:py-8 sm:py-6 place-items-center rounded-xl shadow-lg"
            >
                <span
                className="text-textmain font-cormorant font-z text-2xl mt-5 sm:mt-0 md:mt-0 lg:mt-0 lg:text-2xl md:text-xl sm:text-lg lg:h-10 md:h-8 sm:h-6 lg:mb-20 md:mb-12 sm:mb-6">
                    Sobre Mim
                </span>
                <h2
                className="font-cormorant text-h1color lg:text-4xl md:text-3xl my-2 sm:my-0 md:my-0 lg:my-0 sm:text-2xl lg:h-10 md:h-8 sm:h-6 font-medium lg:mb-60 md:mb-40 sm:mb-20"
                >
                    Um espaço seguro para você ser você
=======
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
>>>>>>> 049ac20c9c5a4c8e13dad069b9ae9c4deb4af6de

        <h2 className="font-cormorant text-h1color lg:text-4xl md:text-3xl sm:text-2xl font-medium mb-6 text-center">
          Um espaço seguro para você ser você
        </h2>

<<<<<<< HEAD
                <ul
                className="font-inter font-medium text-ulheader text-justify px-8 lg:mb-50 md:mb-32 sm:mb-16 lg:py-2 md:py-1 sm:py-0"
                >
                    <li
                    className="mb-5"    
                    >
                    Sou Ana Beatriz, psicóloga clínica com mais de 12 anos de experiência no atendimento de adultos, adolescentes e casais.

                    </li>
                    <br />
                    <li>
                    Minha abordagem é baseada na Terapia Cognitivo-Comportamental (TCC), com foco em ajudar você a compreender seus pensamentos, emoções e comportamentos para promover mudanças significativas em sua vida.
                    </li>
                    <br />
                    <li>
                    Acredito que cada pessoa carrega uma história única e merece um espaço de acolhimento genuíno, sem julgamentos, onde possa explorar suas questões e encontrar seu caminho para o bem-estar.
                    </li>
                </ul>
                <ul
                className="font-inter font-medium text-ulheader grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 lg:text-sm md:text-xs sm:text-xs lg:w-120 md:w-full sm:w-full place-items-center"
                >
                    <li
                    className="bg-bgIcon lg:h-8 md:h-7 sm:h-6 mt-5 sm:mb-0 md:mb-0 lg:mb-0 flex justify-center text-textmain items-center lg:w-40 md:w-32 sm:w-24 rounded-xl shadow-lg"
                    >   
                        <span>
                            CRP 00/00000
                        </span>
                    </li>
                    <li
                    className="bg-bgIcon lg:h-8 md:h-7 sm:h-6 flex justify-center text-textmain items-center lg:w-40 md:w-32 sm:w-24 rounded-xl shadow-lg"
                    >
                        <span>
                            Especialista em TCC
                        </span>
                    </li>
                    <li
                    className="bg-bgIcon lg:h-8 md:h-7 sm:h-6 mb-5 sm:mb-0 md:mb-0 lg:mb-0 flex justify-center text-textmain items-center lg:w-50 md:w-40 sm:w-28 rounded-xl shadow-lg"
                    >
                        <span
                        className=""
                        >
                            Pós-graduada Neuropsicologia
                        </span>
                    </li>
                </ul>
            </aside>
        </section>
    )
=======
        <ul className="font-inter font-medium text-ulheader px-4 mb-6">
          <li className="mb-4">
            Sou Ana Beatriz, psicóloga clínica com mais de 12 anos de experiência
            no atendimento de adultos, adolescentes e casais.
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
          <li className="bg-bgIcon h-8 flex items-center justify-center rounded-xl shadow-lg px-4">
            Especialista em TCC
          </li>
          <li className="bg-bgIcon h-8 flex items-center justify-center rounded-xl shadow-lg px-4">
            Pós-graduada em Neuropsicologia
          </li>
        </ul>
      </aside>
    </section>
  );
>>>>>>> 049ac20c9c5a4c8e13dad069b9ae9c4deb4af6de
}

export default Info;
