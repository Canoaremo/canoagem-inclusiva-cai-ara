import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-inclusao.png";

export const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Inclusão Caiçara" className="h-12 w-auto" />
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("sobre")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("objetivos")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Objetivos
          </button>
          <button
            onClick={() => scrollToSection("beneficios")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Benefícios
          </button>
          <Button
            onClick={() => scrollToSection("contato")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Contato
          </Button>
        </div>
      </nav>
    </header>
  );
};
