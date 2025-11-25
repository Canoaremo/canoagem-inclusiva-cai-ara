import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo-inclusao.png";

export const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
              Entre em Contato
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quer participar, apoiar ou saber mais sobre o projeto? Estamos aqui para você!
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-soft hover:shadow-medium transition-shadow">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">Email</h3>
                    <a href="mailto:contato@inclusaocaicara.org" className="text-muted-foreground hover:text-primary transition-colors">
                      contato@inclusaocaicara.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-soft hover:shadow-medium transition-shadow">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">Telefone</h3>
                    <a href="tel:+5511999999999" className="text-muted-foreground hover:text-primary transition-colors">
                      (11) 99999-9999
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-soft hover:shadow-medium transition-shadow">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">Localização</h3>
                    <p className="text-muted-foreground">
                      Litoral de São Paulo<br />
                      Santos, SP
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-4">
                <h3 className="font-display font-semibold text-xl">Siga-nos nas Redes</h3>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Instagram className="w-5 h-5 mr-2" />
                    Instagram
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  >
                    <Facebook className="w-5 h-5 mr-2" />
                    Facebook
                  </Button>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-primary to-secondary p-12 rounded-2xl shadow-medium text-white animate-fade-in">
              <img src={logo} alt="Inclusão Caiçara" className="h-20 w-auto mb-6" />
              <h3 className="text-3xl font-display font-bold mb-4">
                Faça Parte Dessa Jornada
              </h3>
              <p className="text-lg opacity-90 mb-8 leading-relaxed">
                Seja como participante, voluntário ou apoiador, você pode fazer 
                parte dessa transformação. Juntos, construímos um futuro mais 
                inclusivo através do esporte.
              </p>
              <Button
                size="lg"
                className="w-full bg-white text-primary hover:bg-white/90 text-lg py-6"
              >
                Quero Participar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
