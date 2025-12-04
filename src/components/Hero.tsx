import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Waves, Heart, Users, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage1 from "@/assets/hero-1.jpg";
import heroImage2 from "@/assets/hero-2.jpg";
import heroImage3 from "@/assets/hero-3.jpg";

const heroImages = [
  heroImage1,
  heroImage2,
  heroImage3,
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image Carousel */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: currentSlide === index ? 1 : 0,
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Carousel Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
            <Heart className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-white">Inclusão através do esporte</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-tight">
            <span className="text-white">Inclusão</span> pela{" "}
            <span className="text-secondary">Canoagem</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
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
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
            >
              Participe Conosco
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-2 p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <Users className="w-8 h-8 text-white mb-2" />
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-sm text-white/80">Participantes</div>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <Heart className="w-8 h-8 text-destructive mb-2" />
              <div className="text-3xl font-bold text-white">5+</div>
              <div className="text-sm text-white/80">Anos de Impacto</div>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <Waves className="w-8 h-8 text-secondary mb-2" />
              <div className="text-3xl font-bold text-white">∞</div>
              <div className="text-sm text-white/80">Possibilidades</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
