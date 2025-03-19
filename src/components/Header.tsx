import React from "react";
import { DollarSign } from "lucide-react";

const Header = () => {
  return (
    <header className="py-4 px-6 bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/90">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Substituindo o círculo com ícone pela imagem */}
          <img
            src="/public/favicon.ico"
            alt="Logo AvaliaCorp"
            className="h-10 w-10 rounded-full"
          />
          <h1 className="text-xl font-bold">AvaliaCorp</h1>
        </div>

        <a
          href="#inscrever"
          className="hidden sm:inline-block text-sm font-medium text-highlight border border-highlight px-4 py-2 rounded-full hover:bg-highlight hover:text-white transition-colors duration-200"
        >
          Comece Agora
        </a>
      </div>
    </header>
  );
};

export default Header;
