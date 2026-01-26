import React from "react";

function Footer (){
    return(
        <div className="bg-bgFooter text-white w-full lg:h-auto md:h-auto sm:h-auto flex items-center justify-center lg:py-8 md:py-6 sm:py-4">
            <section className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 lg:px-20 md:px-10 sm:px-6 gap-4 place-items-center w-full">
                <div className="lg:w-auto md:w-auto sm:w-full lg:text-left md:text-left sm:text-center">
                    <p className="lg:py-5 md:py-3 sm:py-2 font-cormorant lg:text-xl md:text-lg sm:text-base" >Dra. Ana Beatriz</p>
                    <span className="font-inter lg:text-sm md:text-xs sm:text-xs">© 2026 Todos os direitos reservados.</span>
                </div>

                <span className="lg:text-center md:text-center sm:text-center lg:col-span-1 md:col-span-1 sm:col-span-1 font-inter lg:text-base md:text-sm sm:text-xs">Psicóloga Clínica • CRP 00/00000</span>
            </section>

        </div>
    )
}
export default Footer