import react from "react"
import Assets from "./Assets/hero-psychologist.jpg";
import Greenheart from "./Assets/green-heart.jpg";


function Main ({ onAgendarClick }){
    return(
        <div>
            <div 
            className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-full  lg:h-auto md:h-auto sm:h-auto bg-mainbg lg:px-10 md:px-6 sm:px-4 lg:pt-0 md:pt-0 sm:pt-0 lg:pb-20 md:pb-16 sm:pb-12">
            <section 
            className="grid place-items-center sm:place-items-start mt-10 md:mr-10    "
            >
                <span
                className=" text-textmain font-medium lg:text-lg md:text-base sm:text-sm lg:text-start md:text-start sm:text-center "
                >
                    PSICOLOGA CLINICA . CRP 00/00000
                </span>
                <h1
                className="font-cormorant lg:text-7xl md:text-5xl hidden sm:block sm:text-3xl text-h1color lg:text-left md:text-left sm:text-center  lg:-mt-2 md:-mt-2 sm:-mt-1"
                >
                    Sua jornada de <br />
                    <span
                    className="text-textmain"
                    >autoconhecimento</span>
                    <br />
                    começa aqui 
                </h1>
                   <h1
                className="font-cormorant lg:text-7xl md:text-5xl sm:hidden sm:text-6xl
                xl text-h1color lg:text-left md:text-left sm:text-center  lg:-mt-2 md:-mt-2 sm:-mt-1 "
                >
                    Sua jornada de 
                
                    autoconhecimento
                    
                    começa aqui 
                </h1>
                <p
                className="text-spancolor font-medium lg:text-lg hidden sm:block md:text-base sm:text-sm lg:py-2 md:py-2 sm:py-2 lg:text-left md:text-left sm:text-center"
                >
                    Acolhimento humanizado e tratamento especializado para <br className="hidden lg:block" />
                    você alcançar equilíbrio emocional e qualidade de vida.
                </p>
                   <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2   mt-4 place-items-center px-10 lg:px-0 sm:px-0 md:px-0sm:w-200 sm:place-items-start gap-5" >
                        <button
                        onClick={onAgendarClick}
                        className="font-medium lg:text-lg md:text-base sm:text-sm sm:w-100  w-40  h-13 px-2 sm:w-full md:w-full lg:w-full text-white hover:bg-hoverBtn rounded-xl bg-buttonp cursor-pointer transition-all duration-200"
                        >
                            Agendar Primeira Consulta
                        </button>
                        <button
                        onClick={() => document.getElementById('Sobre')?.scrollIntoView({ behavior: 'smooth' })}
                        className="font-medium lg:text-lg md:text-base sm:text-sm sm:w-50  w-40  h-13 px-2 md:w-40 lg:w-70  text-textmain rounded-xl hover:bg-buttonS border-2 border-buttonS hover:text-white transition-all duration-150 cursor-pointer"
                        > 
                            Conhecer Mais
                        </button>
                    </div>
                    <section 
                className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 my-5 lg:my-0 lg:my-0 md:my-0 sm:my-0  gap-5 lg:py-2 md:py-2 sm:py-2"
                >
                    <ul
                    className="grid grid-cols-3 lg:grid-cols- md:hidden md:grid-cols-3 sm:grid-cols-1 grid-cols-3 lg:py-2 md:py-2 sm:py-2 lg:w-full md:w-full sm:w-full place-items-center lg:divide-x md:divide-x sm:divide-x-0 border-ulheader gap-4 lg:gap-0"
                    >
                        <li
                        className="place-items-center lg:pr-5 md:pr-3 sm:pr-0 text-center"
                        >
                            <p
                            className="font-cormorant font-medium lg:text-xl md:text-lg sm:text-base"
                            >12+</p>
                            <span
                            className="font-inter font-medium text-ulheader text-sm"
                            >Anos de experiência</span>
                           
                        </li>
                        <li
                        className="place-items-center lg:pr-5 md:pr-3 sm:pr-0 text-center"
                        >
                            <p
                            className="font-cormorant font-medium lg:text-xl md:text-lg sm:text-base"
                            >1000+</p>
                            <span
                            className="font-inter font-medium text-ulheader text-sm"
                            >Vidas transformadas</span>
                        
                        </li>
                        <li
                        className="place-items-center text-center"
                        >
                            <p
                            className="font-cormorant font-medium lg:text-xl md:text-lg sm:text-base"
                            >Online</p>
                            <span
                            className="font-inter font-medium text-ulheader text-sm"
                            >& Presencial</span>
                        </li>
                    </ul>
                    
                </section>
      
                
            </section>  
            <aside className="lg:flex md:flex sm:flex  lg:mt-0 md:mt-4 sm:mt-4 relative">
                <div className="relative lg:w-full md:w-full sm:w-full">
                    <section className="bg-gray-200 lg:rotate-3 md:rotate-3 sm:rotate-0 rounded-xl overflow-hidden shadow-lg">
                        <img
                            className=" px-4 rounded-lg  lg:w-full md:w-full sm:w-full lg:h-[600px] md:h-[500px]  sm:h-[400px] object-cover object-center rounded-xl  lg:rotate-[-3deg] md:rotate-[-3deg] sm:rotate-0"
                            src={Assets} 
                            alt="Dra. Ana Beatriz - Psicóloga Clínica" 
                        />
                    </section>
                    {/* Atendimento Humanizado - Posicionado sobre a imagem */}
                    <div className="absolute md:hidden lg:bottom-8 md:bottom-6 sm:bottom-4 hidden sm:block lg:right-8 md:right-6 sm:right-4 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-3">
                        <img 
                            className="lg:w-10 md:w-9 sm:w-8 lg:h-10 md:h-9 sm:h-8 object-cover rounded-full"
                            src={Greenheart} 
                            alt="Green heart" 
                        />
                        <div className="flex flex-col">
                            <p className="font-cormorant font-medium lg:text-lg md:text-base sm:text-sm text-textmain">
                                Atendimento Humanizado
                            </p>
                        </div>
                    </div>
                </div>
            </aside>
            </div>
        
                
             
            
        </div>
    )
} export default Main