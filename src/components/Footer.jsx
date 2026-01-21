import React from "react";

function Footer (){
    return(
        <div className="bg-bgFooter text-white w-full h-50 flex items-center justify-center">
            <section className="grid grid-cols-3">
                <div className="w-100">
                    <p className="py-5" >Dra. Ana Beatriz</p>
                    <span>© 2026 Todos os direitos reservados.</span>
                </div>

                <span className="text-center place-self-end">Psicóloga Clínica • CRP 00/00000</span>
            </section>

        </div>
    )
}
export default Footer