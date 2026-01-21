import React from "react";

function Footer (){
    return(
        <div className="bg-bgFooter text-white w-full h-50 flex items-center justify-center py-0">
            <section className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-6 w-full">
                <div className="w-100">
                    <p className="py-5 text-base">Dra. Ana Beatriz</p>
                    <span className="text-sm">© 2026 Todos os direitos reservados.</span>
                </div>

                <span className="text-center place-self-center text-base">Psicóloga Clínica • CRP 00/00000</span>
            </section>

        </div>
    )
}
export default Footer