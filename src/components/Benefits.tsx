import { CheckCircle, Users, Heart, Smile } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      title: "Desenvolvimento Físico",
      items: [
        "Melhora da coordenação motora",
        "Fortalecimento muscular",
        "Aumento da resistência física",
        "Desenvolvimento do equilíbrio"
      ]
    },
    {
      title: "Bem-estar Emocional",
      items: [
        "Aumento da autoestima",
        "Redução de ansiedade",
        "Desenvolvimento de autoconfiança",
        "Sensação de realização pessoal"
      ]
    },
    {
      title: "Integração Social",
      items: [
        "Criação de novos laços de amizade",
        "Trabalho em equipe",
        "Quebra de barreiras sociais",
        "Senso de pertencimento"
      ]
    },
    {
      title: "Habilidades para a Vida",
      items: [
        "Disciplina e comprometimento",
        "Superação de desafios",
        "Respeito aos limites próprios e alheios",
        "Aprendizado contínuo"
      ]
    }
  ];

  const icons = [Users, Heart, Smile, CheckCircle];

  return (
    <section id="beneficios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
              Benefícios da Canoagem Adaptada
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Impactos positivos que vão além do esporte
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = icons[index];
              return (
                <div
                  key={index}
                  className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-foreground pt-2">
                      {benefit.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
