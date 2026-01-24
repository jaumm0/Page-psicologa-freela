import react from "react";
import therapy from "./Assets/therapy-office.jpg";

function Info (){
    return(
        <section id="Sobre"
        className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-90 place-self-center sm:w-full md:w-100 lg:w-auto lg:px-20 md:px-10 sm:px-6 lg:py-20 md:py-12 sm:py-8 gap-10 place-items-center"
        >
            <div
            className="rotate-3 bg-gray-200 md:hidden lg:block hidden  lg:w-160 md:w-100 sm:w-full lg:h-135 md:h-120 sm:h-auto place-items-center flex justify-center items-center rounded-xl shadow-lg"
            >
                <img 
                className="rotate-357  rounded-xl shadow-lg lg:w-140 md:w-120 sm:w-full md:block sm:block lg:h-120 md:h-100 sm:h-auto object-cover object-[50%_50%]"
                src={therapy}
                alt="" />
            </div>
            <aside
            className="grid lg:grid-rows-3 md:grid-rows-3 text-sm text-justify  sm:grid-rows-1 bg-white lg:w-160 md:w-150 md:ml-100 lg:ml-0 sm:w-100 lg:h-140 md:h-150 sm:h-auto lg:px-10 md:px-8 sm:px-6 lg:py-10 md:py-8 sm:py-6 place-items-center rounded-xl shadow-lg"
            >
                <span
                className="text-textmain font-cormorant font-z text-2xl mt-5 sm:mt-0 md:mt-0 lg:mt-0 lg:text-2xl md:text-xl sm:text-lg lg:h-10 md:h-8 sm:h-6 lg:mb-20 md:mb-12 sm:mb-6">
                    Sobre Mim
                </span>
                <h2
                className="font-cormorant text-h1color lg:text-4xl md:text-3xl my-2 sm:my-0 md:my-0 lg:my-0 sm:text-2xl lg:h-10 md:h-8 sm:h-6 font-medium lg:mb-60 md:mb-40 sm:mb-20"
                >
                    Um espaço seguro para você ser você

                </h2>

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
                className="font-inter font-medium text-ulheader grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 lg:px-10 lg:text-sm md:text-xs sm:text-xs lg:w-120 md:w-full sm:w-full place-items-center"
                >
                    
                    <li
                    className="bg-bgIcon lg:h-8 md:h-7 sm:h-6 mb-5 mt-5 sm:mt-0 md:mt-0 lg:mt-0 sm:mb-0 md:mb-0 lg:mb-0 flex justify-center text-textmain items-center lg:w-60 md:w-40 sm:w-28 rounded-xl shadow-lg"
                    >
                        <span
                        className=""
                        >
                            Pós-graduada Neuropsicologia
                        </span>
                    </li>
                    <li
                    className="bg-bgIcon lg:h-8 md:h-7 sm:h-6 mb-5 sm:mb-0 md:mb-0 lg:mb-0 lg:ml-60  flex justify-center text-textmain items-center lg:w-60 md:w-40 sm:w-28 rounded-xl shadow-lg"
                    >
                        <span
                        className=""
                        >
                            CRP 00/00000
                        </span>
                    </li>
                   
                   
                  
                </ul>
            </aside>
        </section>
    )
}
export default Info