import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Header ({ onAgendarClick }){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return(
        <div id="Header" className="relative">
            <header 
            className="flex lg:flex-row md:flex-row sm:flex-row justify-between items-center py-3 lg:py-4 md:py-4 sm:py-3  lg:px-5 md:px-4 sm:px-10 bg-gray-200 z-50 sticky top-0 w-full shadow-md min-h-[60px] overflow-hidden"
            >
                <h2 
                className="lg:text-2xl md:text-xl sm:text-sm font-xl font-cormorant flex-shrink-0 "
                >
                    <a href="#Header" className="hover:text-textmain transition-colors duration-200 whitespace-nowrap sm:text-center  ml-10">Dra.Ana Beatriz</a>
                </h2>
                
                {/* Menu Desktop */}
                <ul 
                className="hidden lg:flex md:flex  sm:hidden  gap-4 lg:gap-4 text-xs lg:text-base md:text-sm font-inter font-medium items-center"
                >
                    <li className="text-ulheader hover:text-hovertxt transition duration-200 whitespace-nowrap">
                        <a href="#Sobre">Sobre</a>
                    </li>
                    <li className="text-ulheader hover:text-hovertxt transition duration-200 whitespace-nowrap">
                        <a href="#Services">Serviços</a>
                    </li>
                    <li className="text-ulheader hover:text-hovertxt transition duration-200 whitespace-nowrap">
                        <a href="#Feadback">Depoimentos</a>
                    </li>
                    <li className="text-ulheader hover:text-hovertxt transition duration-200 whitespace-nowrap">
                        <a href="#Contact">Contato</a>
                    </li>
                    <button
                    onClick={onAgendarClick}
                    className="font-medium text-xs lg:text-base md:text-sm px-2 md:px-4 lg:px-4 py-1.5  lg:py-2 pr-10 text-white cursor-pointer rounded-xl bg-buttonp hover:bg-hoverBtn whitespace-nowrap transition-all duration-200"
                    >
                       <a href="#Agendar">Agendar</a>
                    </button>
                </ul>

                {/* Botão Hambúrguer Mobile */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden md:hidden sm:block text-h1color pr-4 sm:pr-0 md:pr-0 lg:pr-0 hover:text-textmain transition-colors duration-200"
                    aria-label="Menu"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </header>

            {/* Menu Mobile */}
            {isMenuOpen && (
                <div className="lg:hidden md:hidden sm:block absolute top-full left-0 right-0 z-40 bg-mainbg shadow-lg">
                    <div className="w-full py-4">
                        <ul className="flex flex-col gap-4 px-4">
                            <li className="text-h1color hover:text-textmain transition duration-200 border-b border-gray-300 pb-2">
                                <a href="#Sobre" onClick={closeMenu} className="text-lg font-medium">Sobre</a>
                            </li>
                            <li className="text-h1color hover:text-textmain transition duration-200 border-b border-gray-300 pb-2">
                                <a href="#Services" onClick={closeMenu} className="text-lg font-medium">Serviços</a>
                            </li>
                            <li className="text-h1color hover:text-textmain transition duration-200 border-b border-gray-300 pb-2">
                                <a href="#Feadback" onClick={closeMenu} className="text-lg font-medium">Depoimentos</a>
                            </li>
                            <li className="text-h1color hover:text-textmain transition duration-200 border-b border-gray-300 pb-2">
                                <a href="#Contact" onClick={closeMenu} className="text-lg font-medium">Contato</a>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        onAgendarClick();
                                        closeMenu();
                                    }}
                                    className="w-full font-medium text-base py-3 px-4 text-white cursor-pointer rounded-xl bg-buttonp hover:bg-hoverBtn transition-all duration-200"
                                >
                                    Agendar
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}export default Header