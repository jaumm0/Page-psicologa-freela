/**
 * COMPONENTE: Feadback (Testemunhos)
 * ========================================
 * Exibe depoimentos e histórias de transformação de clientes.
 * 
 * Características:
 * - Layout responsivo (3 colunas desktop, 3 tablets, 2 mobile)
 * - Cards com efeito hover (escala suave)
 * - Ícone de estrela em cada depoimento
 * - Títulos e textos com tipografia customizada
 * 
 * @component
 * @returns {JSX.Element} Seção completa de depoimentos
 */

import React from "react";
import star from "./Assets/star.png";

/**
 * Componente funcional que renderiza a seção de depoimentos
 * Apresenta histórias de sucesso de clientes
 * 
 * @function Feadback
 * @returns {JSX.Element}
 */
function Feadback() {
  return (
    // Seção principal - Container flex com fundo dedicado
    <section id="Feadback" className="grid lg:grid-rows-1 place-items-center bg-feadbackBg">
      
      {/* HEADER DA SEÇÃO - Título, subtítulo e descrição */}
      <section>
        {/* Grid responsivo para estruturar header (3 linhas desktop, 3 tablets, 1 mobile) */}
        <div className="grid lg:grid-rows-3 md:grid-rows-3 sm:grid-rows-1 w-full px-10 py-10 place-items-center">
          
          {/* Label/Tag "Depoimentos" */}
          <span className="text-textmain font-cormorant font-medium text-2xl">
            Depoimentos
          </span>

          {/* Título principal da seção */}
          <h2 className="font-cormorant text-5xl text-h1color font-medium mb-5">
            Histórias de transformação
          </h2>

          {/* Descrição/Introdução da seção */}
          <span className="text-ulheader font-inter font-medium text-justify text-lg items-center px-55">
            A satisfação dos meus pacientes é o que me motiva a cada dia.
          </span>
        </div>
      </section>

      {/* CARDS DE DEPOIMENTOS - Lista de testimoniais */}
      <ul className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 bg-Servicesbg w-full px-20 py-20 gap-10 place-items-center">
        
        {/* CARD 1 - Depoimento sobre ansiedade */}
        <li className="w-100 h-60 rounded-xl bg-whitecream px-5 hover:scale-x-105 hover:scale-y-105 transition-all duration-150 shadow-xl">
          {/* Ícone de estrela - Indicador de qualidade/avaliação */}
          <span className="bg-bgIcon rounded-full w-10 h-10 flex justify-center items-center mt-5 mb-5">
            <img className="" src={star} alt="" />
          </span>

          {/* Texto do depoimento - Altura fixa para manter layout */}
          <span className="font-inter text-ulheader text-justify text-xl">
            "A Dra. Ana me ajudou a superar um período muito difícil de ansiedade. Seu acolhimento e profissionalismo fizeram toda a diferença na minha recuperação."
          </span>
        </li>

        {/* CARD 2 - Depoimento sobre terapia online */}
        <li className="w-100 h-60 rounded-xl bg-whitecream px-5 hover:scale-x-105 hover:scale-y-105 transition-all duration-150 shadow-xl">
          {/* Ícone de estrela - Indicador de qualidade/avaliação */}
          <span className="bg-bgIcon rounded-full w-10 h-10 flex justify-center items-center mt-5 mb-5">
            <img className="" src={star} alt="" />
          </span>

          {/* Texto do depoimento - Altura fixa para manter layout */}
          <span className="font-inter text-ulheader text-justify text-xl">
            "Depois de anos resistindo à terapia, encontrei na Dra. Ana um espaço seguro para me abrir. As sessões online facilitaram muito minha rotina corrida."
          </span>
        </li>

        {/* CARD 3 - Depoimento sobre terapia de casal */}
        <li className="w-100 h-60 rounded-xl bg-whitecream px-7 hover:scale-x-105 hover:scale-y-105 transition-all duration-150 shadow-xl">
          {/* Ícone de estrela - Indicador de qualidade/avaliação */}
          <span className="bg-bgIcon rounded-full w-10 h-10 flex justify-center items-center mt-5 mb-5">
            <img className="" src={star} alt="" />
          </span>

          {/* Texto do depoimento - Altura fixa para manter layout */}
          <span className="font-inter text-ulheader text-justify text-xl">
            "A terapia de casal salvou nosso relacionamento. Aprendemos a nos comunicar de forma saudável e hoje nossa conexão é muito mais forte."
          </span>
        </li>

      </ul>
    </section>
  );
}

export default Feadback;