import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-accent/20 py-20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Присоединяйтесь к лучшему Minecraft серверу с уникальной ролевой
              механикой
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="gaming-gradient text-white font-semibold px-8 py-3 rounded-xl gaming-glow hover:scale-105 transition-all duration-200"
              onClick={() =>
                alert("Зайдите на версию 1.20.1 и введите IP: play.moskovrp.ru")
              }
            >
              <Icon name="Play" size={20} className="mr-2" />
              Начать играть
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gaming-border bg-card/60 backdrop-blur-sm px-8 py-3 rounded-xl hover:gaming-glow transition-all duration-200"
            >
              <Icon name="Info" size={20} className="mr-2" />
              Узнать больше
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Сервер онлайн</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="MapPin" size={16} />
              <span>IP: play.moskovrp.ru</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
