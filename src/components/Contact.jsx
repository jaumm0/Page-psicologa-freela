import react from "react";
import therapy from "./Assets/therapy-office.jpg";
import clock from "./Assets/clock.png";
import map from "./Assets/map-pin.svg";
import { MapPin,Clock,Smartphone,Mail,Instagram,Linkedin } from 'lucide-react';



function Contact() {
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

          <div className="pt-5 mb-3 ">
            <section className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-30 items-center">
              {/* Esquerda -  */}
                    <Clock size={40} className=" p-1 rounded-xl  bg-footerbg" />  
              {/* Direita -  */}
              <div className="flex flex-col  ">
                <div className="">
                  <p className="font-cormorant font-medium text-xl w-100">
                    Horário de Atendimento
                  </p>
                  
                </div>
                <div>
                  <p className="font-cormorant font-medium text-1xl w-100 ">
                    Segunda a Sexta: 8h às 20h
                  </p>
                </div>
                
              </div>
              <div className="flex justify-start w-10 items-center ">
                <MapPin size={40} className=" p-1 rounded-xl  bg-footerbg " />
              </div>

             
              <div className="flex flex-col">
                <div>
                  <p className="font-cormorant font-medium text-xl w-100 ">
                    Localização
                  </p>
                </div>
                <div>
                  <p className="font-cormorant font-medium text-1xl w-100">
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
            <div className="flex items-center mb-5 cursor-pointer shadow-lg h-15 px-5 py-5 hover:scale-x-105 transition-all duration-150">
              <Smartphone size={40} className=" p-1 rounded-xl  bg-bgIcon text-textmain mr-5 " />
              <span className="font-inter font-medium text-ulheader hover:text-textmain transition-colors duration-200 w-full py-4 ">
                (11) 91234-5678
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-center mb-5 cursor-pointer shadow-lg h-15 px-5 py-5 hover:scale-x-105 transition-all duration-150">
              <Mail size={40} className=" p-1 rounded-xl  bg-bgIcon text-textmain mr-5 " />
              <span className="font-inter font-medium text-ulheader hover:text-textmain transition-colors duration-200 w-full py-4 ">
                contato@psicologa.com
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-center mb-5 cursor-pointer shadow-lg h-15 px-5 py-5 hover:scale-x-105 transition-all duration-150">
              <Instagram size={40} className=" p-1 rounded-xl  bg-bgIcon text-textmain mr-5 " />
              <span className="font-inter font-medium text-ulheader hover:text-textmain transition-colors duration-200 w-full py-4">
                contato@psicologa.com
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-center mb-5 cursor-pointer shadow-lg h-15 px-5 py-5 mb-5 hover:scale-x-105 transition-all duration-150">
              <Linkedin size={40} className=" p-1 rounded-xl  bg-bgIcon text-textmain mr-5  " />
              <span className="font-inter font-medium text-ulheader hover:text-textmain transition-colors duration-200 w-full py-4">
                contato@psicologa.com
              </span>
            </div>
          </li>
        </ul>

      </aside>
    </section>
  );
}

export default Contact;