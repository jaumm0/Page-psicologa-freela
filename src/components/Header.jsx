import React from "react";

function Header (){
    return(
        <div>
            <header id="Header"
            className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 py-4 px-5 gap bg-gray-200 z-10 position fixed place-items-center   "
            >
                <h2 
                className="text-2xl pr-123 font-xl font-cormorant   "
                >
                    <a href="Inicio">Dra.Ana Beatriz</a>
                </h2>
                <ul 
                className="grid lg:grid-cols-5 md:grid-cols-5 sm:grid-rows-1 text-md font-inter font-medium place-items-center pr-25 pl-5  >"
                >
                    <li
                    className="text-ulheader hover:text-hovertxt transition duration-200" 
                    >
                        <a href="#Sobre">Sobre</a>
                    </li>
                    <li
                     className="text-ulheader hover:text-hovertxt  transition duration-200" 
                    >
                        <a href="#Services">Serviços</a>
                    </li>
                    <li
                     className="text-ulheader hover:text-hovertxt  transition duration-200" 
                    >
                        <a href="#Feadback">Depoimentos</a>
                    </li>
                    <li
                     className="text-ulheader hover:text-hovertxt  transition duration-200 " 
                    >
                        <a href="#Contact">Contato</a>
                    </li>
                    <button
                    className="font-medium text-lg w-50 h-13 ml-25 text-white cursor-pointer  rounded-xl bg-buttonp hover:bg-hoverBtn "
                    >
                        <a href="">Agendar Consulta</a>
                    </button>
                </ul>
            </header>
        </div>
    );
}export default Header