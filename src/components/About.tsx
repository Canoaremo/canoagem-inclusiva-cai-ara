import { Waves, Target, Users, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
              Sobre o Projeto
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Um projeto social que acredita no poder transformador do esporte adaptado
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h3 className="text-3xl font-display font-bold text-foreground">
                Nossa Missão
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                O <span className="text-primary font-semibold">Inclusão Caiçara</span> é um 
                projeto social dedicado à inclusão de pessoas com deficiência através da 
                prática da canoagem. Acreditamos que o esporte é uma ferramenta poderosa 
                para promover desenvolvimento pessoal, social e emocional.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nosso trabalho vai além do esporte: proporcionamos um ambiente seguro e 
                acolhedor onde cada participante pode descobrir suas capacidades, desenvolver 
                novas habilidades e construir relações significativas.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-card shadow-soft hover:shadow-medium transition-shadow">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-display font-semibold text-lg mb-2">Socialização</h4>
                <p className="text-sm text-muted-foreground">
                  Promovemos interação entre pessoas com e sem deficiência
                </p>
              </Card>

              <Card className="p-6 bg-card shadow-soft hover:shadow-medium transition-shadow">
                <Target className="w-10 h-10 text-secondary mb-4" />
                <h4 className="font-display font-semibold text-lg mb-2">Coordenação</h4>
                <p className="text-sm text-muted-foreground">
                  Desenvolvemos habilidades motoras através da prática
                </p>
              </Card>

              <Card className="p-6 bg-card shadow-soft hover:shadow-medium transition-shadow">
                <Sparkles className="w-10 h-10 text-accent mb-4" />
                <h4 className="font-display font-semibold text-lg mb-2">Autoestima</h4>
                <p className="text-sm text-muted-foreground">
                  Fortalecemos a confiança e o sentimento de pertencimento
                </p>
              </Card>

              <Card className="p-6 bg-card shadow-soft hover:shadow-medium transition-shadow">
                <Waves className="w-10 h-10 text-destructive mb-4" />
                <h4 className="font-display font-semibold text-lg mb-2">Superação</h4>
                <p className="text-sm text-muted-foreground">
                  Respeitamos limites enquanto incentivamos desafios
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
