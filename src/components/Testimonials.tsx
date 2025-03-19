
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      location: "São Paulo, SP",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "Comecei há apenas um mês e já conquistei uma renda extra de R$1.200! O processo é super fácil e os pagamentos são sempre pontuais.",
      rating: 5
    },
    {
      name: "Ana Oliveira",
      location: "Rio de Janeiro, RJ",
      photo: "https://randomuser.me/api/portraits/women/89.jpg",
      quote: "Como mãe solo, encontrei no AvaliaCorp a flexibilidade que eu precisava. Faço as avaliações enquanto meu filho está na escola e já estou conseguindo pagar as contas com mais tranquilidade.",
      rating: 5
    },
    {
      name: "Pedro Santos",
      location: "Belo Horizonte, MG",
      photo: "https://randomuser.me/api/portraits/men/89.jpg",
      quote: "Estava cético no início, mas após receber meu primeiro pagamento, percebi que isso é real! Agora faço avaliações todas as semanas e tenho uma boa renda complementar.",
      rating: 5
    }
  ];

  return (
    <section className="section bg-white">
      <div className="text-center mb-16">
        <div className="inline-block px-3 py-1 bg-lightblue text-highlight rounded-full mb-4 text-sm font-medium">
          Histórias de Sucesso
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Nossos Usuários Dizem</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Milhares de pessoas já transformaram suas opiniões em dinheiro real com a AvaliaCorp.
          Veja algumas histórias de sucesso:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card flex flex-col" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="flex items-center mb-4">
              <img 
                src={testimonial.photo} 
                alt={testimonial.name} 
                className="h-14 w-14 rounded-full object-cover mr-4 border-2 border-lightblue"
                loading="lazy"
              />
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
            
            <div className="flex mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
