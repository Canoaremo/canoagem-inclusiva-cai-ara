import { MessageCircle, Users, Hand, Sparkles, Heart, Trophy } from "lucide-react";

export const Objectives = () => {
  const objectives = [
    {
      icon: Users,
      title: "Interação Social",
      description: "Criar oportunidades para que pessoas com e sem deficiência interajam e construam vínculos genuínos.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: MessageCircle,
      title: "Comunicação",
      description: "Desenvolver habilidades de comunicação através de atividades em grupo e trabalho em equipe.",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Hand,
      title: "Coordenação Motora",
      description: "Aprimorar a coordenação e o controle motor através da prática regular da canoagem.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Sparkles,
      title: "Novas Habilidades",
      description: "Ensinar técnicas de canoagem e segurança aquática, respeitando o ritmo de cada participante.",
      color: "text-destructive",
      bgColor: "bg-destructive/10"
    },
    {
      icon: Heart,
      title: "Autoestima",
      description: "Fortalecer a confiança e a autoimagem através de conquistas pessoais no esporte.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Trophy,
      title: "Pertencimento",
      description: "Criar um senso de comunidade onde todos se sintam valorizados e parte do grupo.",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    }
  ];

  return (
    <section id="objetivos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
              Nossos Objetivos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada objetivo é pensado para promover desenvolvimento integral e bem-estar
            </p>
          </div>

          {/* Objectives Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <div
                  key={index}
                  className="group relative p-8 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`inline-flex p-3 rounded-xl ${objective.bgColor} mb-4`}>
                    <Icon className={`w-8 h-8 ${objective.color}`} />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {objective.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {objective.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
