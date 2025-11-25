import logo from "@/assets/logo-inclusao.png";
import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Inclusão Caiçara" className="h-12 w-auto" />
            </div>

            <div className="flex flex-col items-center gap-2 text-center">
              <p className="text-sm opacity-90">
                © 2024 Inclusão Caiçara. Todos os direitos reservados.
              </p>
              <p className="text-sm opacity-75 flex items-center gap-1">
                Feito com <Heart className="w-4 h-4 text-destructive fill-destructive" /> para promover inclusão
              </p>
            </div>

            <div className="flex gap-6 text-sm">
              <button className="hover:opacity-75 transition-opacity">
                Privacidade
              </button>
              <button className="hover:opacity-75 transition-opacity">
                Termos
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
