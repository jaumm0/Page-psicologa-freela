import React from 'react';
import { MessageCircle } from 'lucide-react';

function WhatsAppButton() {
  // Substitua pelo número de WhatsApp real (apenas números, sem caracteres especiais)
  const phoneNumber = '5511912345678'; // Exemplo: (11) 91234-5678 -> 5511912345678
  const message = 'Olá! Gostaria de agendar uma consulta.';

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-40 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:scale-110 transition-transform duration-300" />
      <span className="ml-3 font-inter font-medium hidden lg:block animate-pulse">
        Fale conosco
      </span>
    </button>
  );
}

export default WhatsAppButton;
