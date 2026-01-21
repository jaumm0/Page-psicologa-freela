import react from "react";
import therapy from "./Assets/therapy-office.jpg";

function Info (){
    return(
        <section id="Sobre"
        
        className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  w-full px-20 py-20 gap-10 place-items-center  pr-10 "
        >
            <div
            className="rotate-3 bg-gray-200 w-160 h-135  place-items-center flex justify-center items-center rounded-xl shadow-lg "
            >
                <img 

                className="rotate-357    rounded-xl shadow-lg w-140 h-120 object-cover object-[50%_50%]  "
                src={therapy}
                alt="" />
            </div>
            <aside
            className="grid lg:grid-rows-3 md:grid-rows-3 sm:grid-rows-1 bg-white w-160 h-140 px-10 py-10 place-items-center rounded-xl shadow-lg  "
            >
                <span
                className="text-textmain font-cormorant font-z text-2xl h-10 mb-20  ">
                    Sobre Mim
                </span>
                <h2
                className="font-cormorant text-h1color text-4xl h-10  font-medium mb-60"
                >
                    Um espaço seguro para você ser você

                </h2>

                <ul
                className="font-inter font-medium text-ulheader text-justify mb-50 py-2"
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
                className="font-inter font-medium text-ulheader text-justify grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-2 text-sm w-120 h-10 gap-20  place-self-center place-items-center ">
                    <li
                    className="bg-bgIcon h-8 flex justify-center text-textmain items-center w-40 rounded-xl shadow-lg "
                    >   
                        <span>
                            CRP 00/00000
                        </span>
                    </li>
                    <li
                     className="bg-bgIcon h-8 flex justify-center text-textmain items-center w-40 rounded-xl shadow-lg  "
                    >
                        <span>
                            Especialista em TCC
                        </span>
                    </li>
                    <li
                     className="bg-bgIcon h-8 flex justify-center text-textmain items-center ml-4 w-50  rounded-xl shadow-lg "
                    >
                        <span
                        className="w-100"
                        >
                            Pós-graduada Neuropsicologia
                        </span>
                    </li>
                </ul>
            </aside>
        </section>
    )
}
export default Info