import { Button } from "@/components/ui/button";
import { Waves, Heart, Users } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-ocean opacity-10" />
      
      {/* Animated waves decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
        <Waves className="absolute bottom-0 left-1/4 w-24 h-24 text-secondary animate-float" style={{ animationDelay: "0s" }} />
        <Waves className="absolute bottom-0 right-1/4 w-20 h-20 text-primary animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-4">
            <Heart className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-foreground">Inclusão através do esporte</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-tight">
            <span className="text-primary">Inclusão</span> pela{" "}
            <span className="text-secondary">Canoagem</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transformando vidas através da canoagem adaptada. Trabalhamos interação, socialização 
            e desenvolvimento de pessoas com deficiência, respeitando os limites de cada um.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("sobre")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-medium"
            >
              Conheça o Projeto
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contato")}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
            >
              Participe Conosco
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-2 p-6 bg-card rounded-xl shadow-soft">
              <Users className="w-8 h-8 text-primary mb-2" />
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Participantes</div>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 bg-card rounded-xl shadow-soft">
              <Heart className="w-8 h-8 text-destructive mb-2" />
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Anos de Impacto</div>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 bg-card rounded-xl shadow-soft">
              <Waves className="w-8 h-8 text-secondary mb-2" />
              <div className="text-3xl font-bold text-primary">∞</div>
              <div className="text-sm text-muted-foreground">Possibilidades</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
