import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CheckCircle,
  ArrowLeft,
  DollarSign,
  MessageSquare,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name } = location.state || { name: "" };

  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);

    // If user directly accesses this page without coming from form
    if (!name) {
      navigate("/", { replace: true });
    }
  }, [name, navigate]);

  const handleJoinWhatsApp = () => {
    // Replace with your actual WhatsApp group link
    window.open("https://chat.whatsapp.com/your-group-link", "_blank");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="max-w-2xl mx-auto text-center animate-scale-in">
          <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Obrigado{name ? `, ${name.split(" ")[0]}` : ""}!
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Sua inscrição foi recebida com sucesso. Nossa equipe entrará em
            contato com você em breve com todas as instruções para começar a
            ganhar dinheiro com suas avaliações.
          </p>

          <div className="bg-lightblue/40 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <DollarSign className="h-6 w-6 text-highlight" />
              <h3 className="text-lg font-semibold">Próximos Passos</h3>
            </div>
            <p className="text-gray-700">
              1. Entre na comunidade abaixo, e aguarde atualizações! <br />
              2. Nossa equipe entrar em contato com você. <br />

              3. Faça avaliações e comece a ganhar!
            </p>
          </div>

          <div className="mb-8">
            <Button
              onClick={() =>
                window.open(
                  "https://www.whatsapp.com/channel/0029VbAngdXEFeXeW6WRsr2u",
                  "_blank"
                )
              }
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-all shadow-md hover:shadow-lg"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Participar da Comunidade WhatsApp
            </Button>
            <p className="text-sm text-gray-600 mt-2">
              Entre para nossa comunidade no WhatsApp para receber atualizações
              em tempo real e todas as novidades sobre oportunidades de
              avaliação e pagamentos.
            </p>
          </div>

          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-highlight hover:text-highlight/80 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Voltar para a página inicial
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
