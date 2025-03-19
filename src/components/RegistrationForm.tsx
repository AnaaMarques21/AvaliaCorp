
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, User, Mail, Phone, AlertCircle } from 'lucide-react';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        navigate('/thanks', { state: { name: formData.name } });
      }, 1500);
    }
  };

  return (
    <section id="inscrever" className="section bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-3 py-1 bg-lightblue text-highlight rounded-full mb-4 text-sm font-medium">
            Comece Agora
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforme Suas Opiniões em Dinheiro Real
          </h2>
          <p className="text-gray-600 mb-6">
            Junte-se a milhares de pessoas que já estão ganhando dinheiro compartilhando suas opiniões sobre empresas locais.
          </p>
          
          <div className="space-y-4 mb-8">
            {[
              "Ganhe até R$50 por avaliação aprovada",
              "Receba pagamentos semanais",
              "Trabalhe no seu próprio ritmo",
              "Apenas com o GUIA que vamos te passar."
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
          
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Vagas Limitadas:</strong> Devido à alta demanda, estamos aceitando apenas um número limitado de novos avaliadores por semana. Inscreva-se agora para garantir sua vaga.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-soft border border-gray-100">
          <h3 className="text-xl font-semibold mb-6 text-center">Preencha seus dados para começar</h3>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nome Completo
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`pl-10 w-full px-4 py-3 border ${errors.name ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:border-highlight transition-colors`}
                  placeholder="Seu nome completo"
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.name}
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`pl-10 w-full px-4 py-3 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:border-highlight transition-colors`}
                  placeholder="seu.email@exemplo.com"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefone
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`pl-10 w-full px-4 py-3 border ${errors.phone ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:border-highlight transition-colors`}
                  placeholder="(00) 00000-0000"
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.phone}
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                Por que você quer ser um avaliador? (opcional)
              </label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-highlight transition-colors"
                placeholder="Conte-nos um pouco sobre você e por que gostaria de se juntar à nossa plataforma..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full cta-button flex items-center justify-center gap-2 py-3"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processando...
                </>
              ) : (
                'Quero Começar a Ganhar Dinheiro'
              )}
            </button>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              Ao se inscrever, você concorda com nossos Termos de Serviço e Política de Privacidade.
              Seus dados estão seguros e nunca serão compartilhados com terceiros.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
