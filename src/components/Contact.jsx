import react from "react";
import therapy from "./Assets/therapy-office.jpg";
import clock from "./Assets/clock.png";
import map from "./Assets/map-pin.svg";
import { MapPin,Clock,Smartphone,Mail,Instagram,Linkedin } from 'lucide-react';



function Contact({ onAgendarClick }) {
  return (
    <section id="Contact" className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-full px-20 py-20 gap-10 place-items-center pr-10">
      <div className="bg-textmain w-160 h-120 place-items-center flex  justify-center items-center rounded-xl shadow-lg">
        <section className="font-medium text-white text-justify px-10 mb-10 grid lg:grid-rows-3 md:grid-rows-3 sm:grid-rows-1">
          <h2 className="text-5xl font-cormorant font-medium h-15 pt-15">
            Pronto para dar o primeiro passo?
          </h2>

          <p className="font-inter text-lg h-20 py-15">
            Agende sua primeira consulta e comece sua jornada de autoconhecimento. Estou aqui para te acolher.
          </p>

          <div className="pl-5 sm:pl-0 md:pl-0 lg:pl-0 lg:pt-3 md:pt-2 sm:pt-1 lg:mb-2 md:mb-1 sm:mb-1">
            <section className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:w-auto md:w-auto sm:w-full items-center gap-4">
              {/* Esquerda - Horário */}
              <div className="flex items-center gap-4">
                <Clock size={40} className="p-1 rounded-xl bg-footerbg flex-shrink-0" />  
                <div className="flex flex-col">
                  <p className="font-cormorant font-medium lg:text-xl md:text-lg sm:text-base">
                    Horário de Atendimento
                  </p>
                  <p className="font-cormorant font-medium lg:text-lg md:text-base sm:text-sm">
                    Segunda a Sexta: 8h às 20h
                  </p>
                </div>
              </div>
              
              {/* Direita - Localização */}
              <div className="flex items-center gap-4">
                <MapPin size={40} className="p-1 rounded-xl bg-footerbg flex-shrink-0" />
                <div className="flex flex-col">
                  <p className="font-cormorant font-medium  lg:text-xl md:text-lg sm:text-base">
                    Localização
                  </p>
                  <p className="font-cormorant font-medium lg:text-lg md:text-base sm:text-sm">
                    Av. Paulista, 1000 - São Paulo, SP
                  </p>
                </div>
              </div>
            </section>
          </div>
          <button className="bg-textmain cursor-pointer text-white hover:text-textmain  hover:scale-x-105 trasition-all duration-300 font-cormorant font-medium text-xl w-50 h-10 rounded-xl shadow-lg hover:bg-white hover transition-colors duration-300 my-5">
            <a href="">Acessar </a>
                        
        </button>
        </section> 
      </div>

      <aside className="grid lg:grid-rows-3 md:grid-rows-3 sm:grid-rows-1 bg-white w-160 h-130 px-10 py-10 rounded-xl shadow-lg">
        <span className="text-textmain font-cormorant font-z text-2xl h-10 pt-5 ">
          Contato 
          <h2 className="font-cormorant text-h1color text-4xl h-10 font-medium py-5">
          Entre em contato
        </h2>
        </span>

       
        <ul>
          <li>
            <div className="flex items-center cursor-pointer shadow-lg lg:h-auto md:h-auto sm:h-auto lg:px-4 md:px-3 sm:px-2 lg:py-3 md:py-2 sm:py-2 hover:scale-105 transition-all duration-150 rounded-lg">
              <Smartphone size={32} className="p-1 rounded-xl bg-bgIcon text-textmain lg:mr-4 md:mr-3 sm:mr-2 flex-shrink-0" />
              <span className="font-inter font-medium text-ulheader hover:text-textmain transition-colors duration-200 lg:text-sm md:text-xs sm:text-xs break-all">
                (11) 91234-5678
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-center cursor-pointer shadow-lg lg:h-auto md:h-auto sm:h-auto lg:px-4 md:px-3 sm:px-2 lg:py-3 md:py-2 sm:py-2 hover:scale-105 transition-all duration-150 rounded-lg">
              <Mail size={32} className="p-1 rounded-xl bg-bgIcon text-textmain lg:mr-4 md:mr-3 sm:mr-2 flex-shrink-0" />
              <span className="font-inter font-medium text-ulheader hover:text-textmain transition-colors duration-200 lg:text-sm md:text-xs sm:text-xs break-all">
                contato@psicologa.com
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-center cursor-pointer shadow-lg lg:h-auto md:h-auto sm:h-auto lg:px-4 md:px-3 sm:px-2 lg:py-3 md:py-2 sm:py-2 hover:scale-105 transition-all duration-150 rounded-lg">
              <Instagram size={32} className="p-1 rounded-xl bg-bgIcon text-textmain lg:mr-4 md:mr-3 sm:mr-2 flex-shrink-0" />
              <span className="font-inter font-medium text-ulheader hover:text-textmain transition-colors duration-200 lg:text-sm md:text-xs sm:text-xs break-all">
                @dra.anabeatriz
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-center cursor-pointer shadow-lg lg:h-auto md:h-auto sm:h-auto lg:px-4 md:px-3 sm:px-2 lg:py-3 md:py-2 sm:py-2 hover:scale-105 transition-all duration-150 rounded-lg">
              <Linkedin size={32} className="p-1 rounded-xl bg-bgIcon text-textmain lg:mr-4 md:mr-3 sm:mr-2 flex-shrink-0" />
              <span className="font-inter font-medium text-ulheader hover:text-textmain transition-colors duration-200 lg:text-sm md:text-xs sm:text-xs break-all">
                Dra. Ana Beatriz
              </span>
            </div>
          </li>
        </ul>

      </aside>
    </section>
  );
}

export default Contact;