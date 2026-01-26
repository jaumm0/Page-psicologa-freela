import React, { useState } from 'react';
import { X, Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';
<<<<<<< HEAD
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs.config';
=======
>>>>>>> adda377d17b5b41dba5c65781dbdf73dd9e66b39

function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });
<<<<<<< HEAD
  const [isSubmitting, setIsSubmitting] = useState(false);
=======
>>>>>>> adda377d17b5b41dba5c65781dbdf73dd9e66b39

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

<<<<<<< HEAD
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Configuração do EmailJS
      // Você precisará criar uma conta no EmailJS (https://www.emailjs.com/)
      // e configurar um template de email
      const templateParams = {
        to_email: 'jv224063@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        date: formData.date,
        time: formData.time,
        message: formData.message || 'Nenhuma mensagem adicional',
        reply_to: formData.email
      };

      // Enviar email usando EmailJS
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      alert('Solicitação de agendamento enviada com sucesso! Entraremos em contato em breve.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        message: ''
      });
      onClose();
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      alert('Erro ao enviar o agendamento. Por favor, tente novamente ou entre em contato diretamente.');
    } finally {
      setIsSubmitting(false);
    }
=======
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Formulário enviado:', formData);
    alert('Solicitação de agendamento enviada! Entraremos em contato em breve.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      message: ''
    });
    onClose();
>>>>>>> adda377d17b5b41dba5c65781dbdf73dd9e66b39
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0  bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-hidden"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-2xl h-auto max-h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-textmain text-white p-6 flex justify-between items-center rounded-t-xl flex-shrink-0">
          <div>
            <h2 className="font-cormorant text-3xl font-medium">Agendar Consulta</h2>
            <p className="font-inter text-sm mt-1">Preencha os dados abaixo</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors duration-200"
          >
            <X size={28} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-hidden">
          <div className="p-6 space-y-4 overflow-y-auto flex-1">
          {/* Nome */}
          <div>
            <label className="flex items-center gap-2 text-h1color font-inter font-medium mb-2">
              <User size={20} className="text-textmain" />
              Nome Completo *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-textmain transition-colors duration-200 font-inter"
              placeholder="Seu nome completo"
            />
          </div>

          {/* Email e Telefone */}
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <div>
              <label className="flex items-center gap-2 text-h1color font-inter font-medium mb-2">
                <Mail size={20} className="text-textmain" />
                E-mail *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-textmain transition-colors duration-200 font-inter"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-h1color font-inter font-medium mb-2">
                <Phone size={20} className="text-textmain" />
                Telefone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-textmain transition-colors duration-200 font-inter"
                placeholder="(11) 91234-5678"
              />
            </div>
          </div>

          {/* Data e Hora */}
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <div>
              <label className="flex items-center gap-2 text-h1color font-inter font-medium mb-2">
                <Calendar size={20} className="text-textmain" />
                Data Preferencial *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-textmain transition-colors duration-200 font-inter"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-h1color font-inter font-medium mb-2">
                <Clock size={20} className="text-textmain" />
                Horário Preferencial *
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-textmain transition-colors duration-200 font-inter"
              >
                <option value="">Selecione um horário</option>
                <option value="08:00">08:00</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
              </select>
            </div>
          </div>

          {/* Mensagem */}
          <div>
            <label className="flex items-center gap-2 text-h1color font-inter font-medium mb-2">
              <MessageSquare size={20} className="text-textmain" />
              Mensagem (Opcional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-textmain transition-colors duration-200 font-inter resize-none"
              placeholder="Conte-nos um pouco sobre o que você gostaria de trabalhar na terapia..."
            />
          </div>

          </div>
          {/* Botões - Fixos na parte inferior */}
          <div className="p-6 pt-4 flex lg:flex-row md:flex-row sm:flex-col gap-4 border-t border-gray-200 flex-shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-textmain text-textmain rounded-xl font-inter font-medium hover:bg-textmain hover:text-white transition-all duration-200"
            >
              Cancelar
            </button>
            <button
              type="submit"
<<<<<<< HEAD
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-buttonp text-white rounded-xl font-inter font-medium hover:bg-hoverBtn transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Confirmar Agendamento'}
=======
              className="flex-1 px-6 py-3 bg-buttonp text-white rounded-xl font-inter font-medium hover:bg-hoverBtn transition-all duration-200"
            >
              Confirmar Agendamento
>>>>>>> adda377d17b5b41dba5c65781dbdf73dd9e66b39
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingModal;
