import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Rules = () => {
  const ruleCategories = [
    {
      title: "Общие правила",
      icon: "BookOpen",
      rules: [
        "Уважайте других игроков и администрацию",
        "Запрещены оскорбления, мат и токсичное поведение",
        "Не используйте читы, моды и любые программы для получения преимуществ",
        "Запрещен спам в чате и реклама других серверов",
        "Соблюдайте правила ролевой игры",
      ],
    },
    {
      title: "Правила строительства",
      icon: "Building2",
      rules: [
        "Стройте только на своей территории или с разрешения владельца",
        "Запрещено строительство неподходящих по тематике построек",
        "Не загрязняйте игровой мир мусорными постройками",
        "Соблюдайте архитектурный стиль локации",
        "Запрещено строить рядом с чужими постройками без разрешения",
      ],
    },
    {
      title: "Экономические правила",
      icon: "DollarSign",
      rules: [
        "Честная торговля между игроками",
        "Запрещено мошенничество и обман при сделках",
        "Соблюдайте договоренности и контракты",
        "Не используйте дюпы и баги для получения ресурсов",
        "Уважайте чужую собственность",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-gaming font-black text-4xl md:text-5xl mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              ПРАВИЛА
            </span>
            <span className="text-foreground"> СЕРВЕРА</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Соблюдение правил обеспечивает комфортную игру для всех
          </p>
        </div>

        <div className="space-y-8">
          {ruleCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card/60 backdrop-blur-sm rounded-xl p-6 gaming-border"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Icon
                    name={category.icon as any}
                    size={20}
                    className="text-primary"
                  />
                </div>
                <h2 className="font-gaming font-bold text-2xl">
                  {category.title}
                </h2>
              </div>

              <div className="space-y-3">
                {category.rules.map((rule, ruleIndex) => (
                  <div key={ruleIndex} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-primary font-bold text-sm">
                        {ruleIndex + 1}
                      </span>
                    </div>
                    <p className="text-foreground leading-relaxed">{rule}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-destructive/10 border border-destructive/20 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Icon name="AlertTriangle" size={24} className="text-destructive" />
            <h3 className="font-gaming font-bold text-xl text-destructive">
              Важно знать
            </h3>
          </div>
          <p className="text-foreground leading-relaxed">
            Нарушение правил влечет за собой наказания: от предупреждения до
            перманентного бана. Незнание правил не освобождает от
            ответственности. При возникновении спорных ситуаций окончательное
            решение принимает администрация сервера.
          </p>
        </div>

        <div className="text-center mt-12">
          <Link to="/">
            <Button
              variant="outline"
              size="lg"
              className="gaming-border bg-card/60 backdrop-blur-sm"
            >
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Rules;
