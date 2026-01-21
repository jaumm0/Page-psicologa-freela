import React from "react";
import shield from "./Assets/shield.png";
import brain from "./Assets/brain.png";
import heart from "./Assets/heart.png";
import users from "./Assets/users.png";
import video from "./Assets/video.png";
import statusbar from "./Assets/sparkles.png";

function Services (){
    return(
        <section id="Services"
        className="grid lg:grid-rows-1 place-items-center bg-Servicesbg  "   
        >
            <section>
            <div
            className="grid lg:grid-rows-3 md:grid-rows-3 sm:grid-rows-1 w-full px-10 py-10 place-items-center "
            >
                <span
                className="text-textmain font-cormorant font-medium text-2xl"
                >
                    
                    Serviços
                </span>
                <h2
                className="font-cormorant text-5xl text-h1color font-medium mb-5"
                >
                    Como posso te ajudar
                </h2>
                <span
                className="text-ulheader font-inter font-medium text-justify text-lg items-center px-55"
                >
                    Ofereço diferentes modalidades de atendimento psicológico, adaptadas às suas necessidades e objetivos terapêuticos.
                </span>
            </div>
        </section>
            <ul
            className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 bg-Servicesbg w-full px-20 py-20 gap-10 place-items-center "
            >
                <li
                className="w-100 h-60 rounded-xl bg-whitecream px-5 hover:scale-x-105 hover:scale-y-105 transition-all duration-150 ">
                <span
                className="bg-bgIcon rounded-full w-10 h-10 flex justify-center items-center mt-10 "
                >
                    <img 
                    src={heart} alt="" />
                </span>
                    <p
                    className="font-cormorant text-h1color text-2xl font-medium place-self-center pb-5 hover"
                    >Terapia Individual</p>
                    <span
                    className="font-inter text-ulheader text-justify "
                    >Atendimento personalizado focado em suas necessidades específicas, trabalhando questões como ansiedade, depressão e autoestima.</span>
                </li>
                <li
                className="w-100 h-60 rounded-xl bg-whitecream px-5 hover:scale-x-105 hover:scale-y-105 transition-all duration-150 ">
                <span
                className="bg-bgIcon rounded-full w-10 h-10 flex justify-center items-center mt-10 "

                >
                    <img src={users} alt="" />
                </span>
                    <p
                     className="font-cormorant text-h1color text-2xl font-medium place-self-center pb-5"
                    >Terapia de Casal</p>
                    <span
                    className="font-inter text-ulheader text-justify "
                    >Fortalecimento do vínculo afetivo, melhoria da comunicação e resolução de conflitos para relacionamentos mais saudáveis.</span>
                </li>
                <li 
                    className=" w-100 h-60 rounded-xl bg-whitecream px-5 hover:scale-x-105 hover:scale-y-105 transition-all duration-150">
                <span
                className="bg-bgIcon rounded-full w-10 h-10 flex justify-center items-center mt-10 "
                >
                    <img src={brain} alt="" />
                </span>
                    <p
                     className="font-cormorant text-h1color text-2xl font-medium place-self-center pb-5"
                    > Avaliação Psicológica</p>
                    <span 
                    className="font-inter text-ulheader text-justify "
                    >Avaliação neuropsicológica e psicodiagnóstico para compreensão aprofundada do funcionamento emocional e cognitivo.</span>
                </li>
                <li 
                    className=" w-100 h-60 rounded-xl bg-whitecream px-5 hover:scale-x-105 hover:scale-y-105 transition-all duration-150">
                <span
                className="bg-bgIcon rounded-full w-10 h-10 flex justify-center items-center mt-10 "
                >
                    <img src={video} alt="" />
                </span>
                    <p
                     className="font-cormorant text-h1color text-2xl font-medium place-self-center pb-5"
                    >Atendimento Online</p>
                    <span 
                    className="font-inter text-ulheader text-justify  "
                    >Sessões por videochamada com a mesma qualidade do atendimento presencial, de onde você estiver.</span>
                </li>
                <li 
                    className=" w-100 h-60 rounded-xl bg-whitecream px-5 hover:scale-x-105 hover:scale-y-105 transition-all duration-150">
                <span
                className="bg-bgIcon rounded-full w-10 h-10 flex justify-center items-center mt-10 "
                >
                    <img src={statusbar} alt="" />
                </span>
                    <p
                     className="font-cormorant text-h1color text-2xl font-medium place-self-center pb-5"
                    >Orientação Parental</p> 
                    <span
                    className="font-inter text-ulheader text-justify "
                    >Suporte para pais que buscam compreender melhor seus filhos e desenvolver estratégias de educação positiva.</span>                    
                </li>
                <li 
                    className=" w-100 h-60 rounded-xl bg-whitecream px-5 hover:scale-x-105 hover:scale-y-105 transition-all duration-150">
                <span
                className="bg-bgIcon rounded-full w-10 h-10 flex justify-center items-center mt-10 "
                >
                    <img src={shield} alt="" />
                </span>
                    <p
                     className="font-cormorant text-h1color text-2xl font-medium place-self-center pb-5"
                    >Manejo do Estresse</p>
                    <span 
                    className="font-inter text-ulheader text-justify "
                    >Técnicas e estratégias para lidar com pressões do dia a dia, burnout e sobrecarga emocional.</span>
                </li>
            </ul>
        </section>

    )
}
export default Services