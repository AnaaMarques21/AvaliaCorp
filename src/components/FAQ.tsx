
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como posso começar?",
      answer: "Para começar, basta preencher o formulário de inscrição nesta página. Nossa equipe analisará sua solicitação e entrará em contato com instruções detalhadas em até 24 horas. Importante não deixar de receber o GUIA para aprender o passo a passo, ele sera enviado para todos na comunidade do WhatsApp, que você ira receber apos preencher o formulario abaixo."
    },
    {
      question: "Quanto tempo leva para ser pago?",
      answer: "Os pagamentos são processados semanalmente. Após a aprovação de suas avaliações, você receberá o pagamento em até 3 dias úteis diretamente na conta bancária informada."
    },
    {
      question: "Preciso de alguma experiência para avaliar empresas?",
      answer: "Não é necessária experiência prévia. Vai ter um profissional / suporte a sua disposição 1x por dia, fornecemos todas as instruções no GUIA e suporte necessários para que você possa fazer avaliações de qualidade desde o primeiro dia."
    },
    {
      question: "É seguro usar o serviço?",
      answer: "Sim, nosso serviço é 100% seguro e legítimo. Trabalhamos apenas com empresas verificadas e todos os seus dados pessoais são protegidos de acordo com a LGPD."
    },
    {
      question: "Quanto posso ganhar por avaliação?",
      answer: "O valor pago por avaliação varia entre R$2 e R$50, dependendo da complexidade e do tipo de negócio. Usuários frequentes podem se qualificar para valores maiores."
    },
    {
      question: "Posso fazer isso como trabalho em tempo integral?",
      answer: "Embora muitos de nossos usuários utilizem a plataforma como fonte de renda complementar, é possível ganhar um valor significativo dedicando mais tempo. Alguns usuários chegam a ganhar mais de R$3.000 por mês."
    }
  ];

  return (
    <section id="faq" className="section bg-gradient-to-b from-white to-lightblue/20">
      <div className="text-center mb-16">
        <div className="inline-block px-3 py-1 bg-lightblue text-highlight rounded-full mb-4 text-sm font-medium">
          Dúvidas Frequentes
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Encontre respostas para as perguntas mais comuns sobre nossa plataforma:
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-left font-medium bg-white hover:bg-gray-50">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-white">
                <p className="text-gray-600">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
