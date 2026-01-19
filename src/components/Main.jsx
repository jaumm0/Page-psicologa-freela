import react from "react"
import Assets from "./Assets/hero-psychologist.jpg";
import Greenheart from "./Assets/green-heart.jpg";


function Main (){
    return(
        <div>
            <div 
            className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  w-full h-180 bg-mainbg px-10 pt-20 ">
            <section 
            className="grid lg:grid-cols- md:grid-rows-5 sm-rows-2 pt-10 w-190 h-180  px-10"
            >
                <span
                className="text-textmain pt-20 font-medium text-lg place-self-center pr-94"
                >
                    PSICOLOGA CLINICA . CRP 00/00000
                </span>
                <h1
                className="font-cormorant text-7xl text-h1color  "
                >
                    Sua jornada de <br />
                    <span
                    className="text-textmain"
                    >autoconhecimento</span>
                    <br />
                    começa aqui 
                </h1>
                <p
                className="text-spancolor font-medium text-lg py-25 "
                >
                    Acolhimento humanizado e tratamento especializado para <br />
                    você alcançar equilíbrio emocional e qualidade de vida.
                </p>
                <section 
                className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 py-20"
                >
                    <button
                    className="font-medium text-lg w-80 h-13 text-white hover:bg-hoverBtn rounded-xl bg-buttonp cursor-pointer"
                    >
                        Agendar Primeira Consulta
                    </button>
                    <button
                    className="font-medium text-lg w-50 h-13 text-textmain rounded-xl  hover:bg-buttonS border-2 hover:text-white transition-all duration-150 cursor-pointer  "
                    >
                        Conhecer Mais
                    </button>
                    <ul
                    className="grid lg:grid-cols-3 md:grid-cols-3 sm:cols-0 py-10 w-150 place-items-center divide-x-1 border-ulheader "
                    >
                        <li
                        className="place-items-center pr-5"
                        >
                            <p
                            className="font-cormorant  font-medium text-xl"
                            >12+</p>
                            <span
                            className="font-inter font-medium text-ulheader "
                            >Anos de experiência</span>
                           
                        </li>
                        <li
                        className="place-items-center pr-5 "
                        >
                            <p
                            className="font-cormorant font-medium text-xl "
                            >1000+</p>
                            <span
                            className="font-inter font-medium text-ulheader "
                            >Vidas transformadas</span>
                        
                        </li>
                        <li
                        className="place-items-center"
                        >
                            <p
                            className="font-cormorant  font-medium text-xl "
                            >Online</p>
                            <span
                            className="font-inter font-medium text-ulheader "
                            >& Presencial</span>
                        </li>
                    </ul>
                </section>
      
                
            </section>  
                      <aside
                    className="place-self-center h-full  "
                    >
                        <section
                        className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-2 bg-gray-200 -z-10 rotate-3  w-160 h-170 rounded-xl    "

                        >
                        <img
                        className="w-140 h-160 object-cover object-[50%_50%] -z-10 rounded-xl rotate-357 place-self-center  "
                        src={Assets} alt="" />
                      
                        </section>
                    </aside>
            </div>
            
                <section className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  w-60 h-20  items-center position relative bottom-10 left-180 rounded-xl shadow-xl bg-white ">
                    {/* Esquerda - Green Heart Centralizado */}
                    <div className="flex justify-center items-center ">
                       
        
                            <img 
                                className="w-10 h-10 object-cover bg-bgIcon "
                                src={Greenheart} 
                                alt="Green heart" 
                            />
                
                    </div>

                    {/* Direita - Coluna com Atendimento e Humanizado */}
                    <div className="flex flex-col justify-center items-start">
                        <div>
                            <p className="font-cormorant font-medium text-xl text-textmain">
                                Atendimento
                            </p>
                        </div>
                        <div>
                            <p className="font-cormorant font-medium text-1xl text-textmain">
                                Humanizado
                            </p>
                        </div>
                    </div>
                </section>
        
                
             
            
        </div>
    )
} export default Main