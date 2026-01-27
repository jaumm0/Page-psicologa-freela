import react from "react";
import therapy from "./Assets/therapy-office.jpg";
import clock from "./Assets/clock.png";
import map from "./Assets/map-pin.svg";
import { MapPin,Clock,Smartphone,Mail,Instagram,Linkedin } from 'lucide-react';



function Contact({ onAgendarClick }) {
  return (
    <section id="Contact" className="grid lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-1 w-90  sm:w-full md:w-full lg:w-full place-self-center text-justify lg:px-20 md:px-10 sm:px-6 lg:py-16 md:py-12 sm:py-10 gap-8 place-items-center">
      <div className="bg-textmain lg:w-full md:w-full sm:w-full lg:h-auto md:h-auto sm:h-auto place-items-center flex justify-center items-center rounded-xl shadow-lg">
        <section className="font-medium text-white text-justify lg:px-8 h-90 sm:h-130 md:px-6 sm:px-5 lg:mb-6 md:mb-5 sm:mb-4 lg:py-8 md:py-6 sm:py-5 grid lg:grid-rows-4 md:grid-rows-4 sm:grid-rows-1 gap-3">
          <h2 className=" text-2xl p-3 sm:p-0 md:p-0 lg:p-0 lg:text-4xl md:text-3xl sm:text-2xl font-cormorant font-medium lg:pt-0 md:pt-0 sm:pt-2">
            Pronto para dar o primeiro passo?
          </h2>

          <p className="font-inter px-4 sm:px-0 md:px-0 lg:px-0 lg:text-base md:text-sm sm:text-xs lg:h-auto md:h-auto sm:h-auto lg:py-0 md:py-0 sm:py-1">
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
          <button 
            onClick={onAgendarClick}
            className="bg-white cursor-pointer text-textmain hover:bg-gray-100 hover:scale-105 transition-all duration-300 font-cormorant font-medium lg:text-lg md:text-base sm:text-sm w-40 h-11 sm:w-full md:w-full lg:w-full   ml-5 sm:ml-0 md:ml-0 lg:ml-0  lg:w-auto md:w-auto sm:w-full lg:h-10 md:h-9 sm:h-9 px-5 rounded-xl shadow-lg lg:my-3 md:my-2 sm:my-2"
          >
            Agendar Consulta
          </button>
        </section> 
      </div>

      <aside className="grid lg:grid-rows-3 md:grid-rows-3 sm:grid-rows-1 h-80 mb-10 w-90 bg-white lg:w-full md:w-full sm:w-full lg:h-135
       md:h-auto sm:h-auto lg:px-8 md:px-6 sm:px-5 lg:py-4 md:py-3 sm:py-3 rounded-xl shadow-lg">
        <div className="lg:h-auto md:h-auto sm:h-auto lg:pt-2 md:pt-1 sm:pt-1 px-7 pt-10 sm:px-0 md:px-0 lg:px-0 sm:pt-0 md:pt-0 lg:pt-0 ">
          <span className="text-textmain text-2xl font-cormorant  lg:text-xl md:text-lg sm:text-base">
            Contato 
          </span>
          <h2 className="font-cormorant text-h1color lg:text-3xl md:text-2xl sm:text-xl font-medium lg:py-2 md:py-1 sm:py-1">
            Entre em contato
          </h2>
        </div>

       
        <ul className="space-y-2 px-5 sm:px-0 md:px-0 lg:px-0">
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