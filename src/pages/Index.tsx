import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServerStats from "@/components/ServerStats";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Index = () => {
  const features = [
    {
      icon: "Users",
      title: "Ролевая игра",
      description:
        "Создайте уникального персонажа и погрузитесь в захватывающий мир ролевых отношений",
    },
    {
      icon: "Building2",
      title: "Развитая экономика",
      description:
        "Торгуйте, создавайте бизнес и стройте экономическую империю",
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description:
        "Активная модерация и защита от читеров обеспечивают честную игру",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="space-y-8">
          <h2 className="font-gaming font-bold text-3xl text-center">
            Статистика сервера
          </h2>
          <ServerStats />
        </div>

        <div className="space-y-8">
          <h2 className="font-gaming font-bold text-3xl text-center">
            Особенности сервера
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card/60 backdrop-blur-sm rounded-xl p-6 gaming-border hover:gaming-glow transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Icon
                    name={feature.icon as any}
                    size={24}
                    className="text-primary"
                  />
                </div>
                <h3 className="font-gaming font-bold text-xl mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center space-y-6 py-16">
          <h2 className="font-gaming font-bold text-3xl">
            Готовы начать приключение?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Присоединяйтесь к тысячам игроков уже сегодня и станьте частью
            уникального игрового мира
          </p>
          <Button
            size="lg"
            className="gaming-gradient text-white font-semibold px-8 py-4 rounded-xl gaming-glow hover:scale-105 transition-all duration-200"
          >
            <Icon name="Rocket" size={20} className="mr-2" />
            Присоединиться сейчас
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
