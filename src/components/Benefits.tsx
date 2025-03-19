
import React from 'react';
import { Clock, CreditCard, Coins, Laptop, ShieldCheck } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Coins className="h-8 w-8 text-highlight" />,
      title: "Ganhos Reais",
      description: "Receba até R$50 por cada avaliação aprovada que você fizer."
    },
    {
      icon: <Clock className="h-8 w-8 text-highlight" />,
      title: "Flexibilidade Total",
      description: "Trabalhe quando quiser, no seu próprio ritmo e horários."
    },
    {
      icon: <CreditCard className="h-8 w-8 text-highlight" />,
      title: "Pagamento Rápido",
      description: "Receba seus ganhos diretamente na sua conta em até 3 dias úteis."
    },
    {
      icon: <Laptop className="h-8 w-8 text-highlight" />,
      title: "Trabalhe de Casa",
      description: "Tudo o que você precisa é de um computador ou smartphone e internet."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-highlight" />,
      title: "100% Seguro",
      description: "Processo seguro e confiável, sem riscos para você."
    }
  ];

  return (
    <section className="section bg-gradient-to-b from-lightblue/20 to-white">
      <div className="text-center mb-16">
        <div className="inline-block px-3 py-1 bg-lightblue text-highlight rounded-full mb-4 text-sm font-medium">
          Vantagens Exclusivas
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Que Escolher a AvaliaCorp?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
        Na AvaliaCorp, oferecemos muito mais do que apenas uma oportunidade de renda extra proporcionamos uma experiência completa, segura e confiável para quem deseja ganhar dinheiro avaliando empresas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="flex items-start">
              <div className="mr-4 p-3 bg-lightblue rounded-full">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
