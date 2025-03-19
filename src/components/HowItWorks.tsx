
import React from 'react';
import { CheckCircle, User, DollarSign, Clock } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <User className="h-8 w-8 text-highlight" />,
      title: "Crie sua conta",
      description: "Preencha o formulário de inscrição com seus dados básicos."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-highlight" />,
      title: "Faça avaliações",
      description: "Avalie empresas no Google seguindo nossas instruções simples."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-highlight" />,
      title: "Receba pagamentos",
      description: "Ganhe dinheiro para cada avaliação aprovada que você fizer."
    },
    {
      icon: <Clock className="h-8 w-8 text-highlight" />,
      title: "Gerencie seu tempo",
      description: "Trabalhe quando e onde quiser, sem compromissos fixos."
    }
  ];

  return (
    <section id="como-funciona" className="section bg-white">
      <div className="text-center mb-16">
        <div className="inline-block px-3 py-1 bg-lightblue text-highlight rounded-full mb-4 text-sm font-medium">
          Processo Simples
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
        A AvaliaCorp é uma empresa especializada em ajudar negócios iniciantes a crescer no Google Meu Negócio. Somos contratados por empresas corporativas emergentes que desejam melhorar sua reputação online e alcançar mais clientes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="benefit-card flex flex-col items-center text-center" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="mb-4 p-3 bg-lightblue rounded-full">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a href="#inscrever" className="cta-button inline-flex items-center gap-2">
          <DollarSign className="h-5 w-5" />
          Quero Começar Agora
        </a>
      </div>
    </section>
  );
};

export default HowItWorks;
