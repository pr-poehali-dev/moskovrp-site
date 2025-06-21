import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Общие вопросы",
      icon: "HelpCircle",
      questions: [
        {
          question: "Как зайти на сервер?",
          answer:
            "Добавьте в список серверов IP: play.moskovrp.ru и подключитесь. Убедитесь, что у вас установлена версия Minecraft 1.20.1.",
        },
        {
          question: "Нужна ли регистрация?",
          answer:
            "Да, после входа на сервер вам нужно зарегистрироваться командой /register <пароль> <повтор пароля>. В дальнейшем входите командой /login <пароль>.",
        },
        {
          question: "Какие моды можно использовать?",
          answer:
            "Разрешены только косметические моды (шейдеры, оптифайн, миникарта). Любые моды, дающие игровое преимущество, запрещены.",
        },
      ],
    },
    {
      title: "Игровой процесс",
      icon: "Gamepad2",
      questions: [
        {
          question: "Что такое ролевая игра (РП)?",
          answer:
            "РП - это отыгрыш роли персонажа. Вы создаете характер, историю и играете согласно ей. Важно действовать так, как действовал бы ваш персонаж в реальной жизни.",
        },
        {
          question: "Как начать играть новичку?",
          answer:
            "Прочитайте правила, создайте персонажа, изучите основы РП. Обратитесь к хелперам за помощью - они всегда готовы помочь новичкам.",
        },
        {
          question: "Можно ли строить где угодно?",
          answer:
            "Нет, стройка разрешена только на купленных участках или с разрешения владельца территории. Случайные постройки будут удалены.",
        },
      ],
    },
    {
      title: "Экономика и торговля",
      icon: "DollarSign",
      questions: [
        {
          question: "Как заработать деньги?",
          answer:
            "Работайте на различных работах, торгуйте с игроками, создавайте бизнес, участвуйте в ивентах. Есть множество способов заработка.",
        },
        {
          question: "Как купить участок?",
          answer:
            'Найдите свободный участок, встаньте на табличку "Продается" и нажмите ПКМ. Следуйте инструкциям для покупки.',
        },
        {
          question: "Что делать если меня обманули?",
          answer:
            "Подайте жалобу через специальную форму на сайте или обратитесь к администрации. Приложите доказательства сделки.",
        },
      ],
    },
    {
      title: "Технические вопросы",
      icon: "Settings",
      questions: [
        {
          question: "Не могу зайти на сервер",
          answer:
            "Проверьте версию игры (1.20.1), правильность IP-адреса. Если проблема не решена, обратитесь в поддержку в Discord.",
        },
        {
          question: "Лагает игра на сервере",
          answer:
            "Попробуйте снизить настройки графики, закрыть лишние программы, проверить интернет-соединение. Используйте Optifine для оптимизации.",
        },
        {
          question: "Потерял предметы из-за бага",
          answer:
            "Сразу обратитесь к администрации с подробным описанием ситуации. Если баг подтвердится, предметы будут возвращены.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-gaming font-black text-4xl md:text-5xl mb-4">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              ЧАСТО
            </span>
            <span className="text-foreground"> ЗАДАВАЕМЫЕ ВОПРОСЫ</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Ответы на самые популярные вопросы игроков
          </p>
        </div>

        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
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

              <Accordion type="single" collapsible className="space-y-2">
                {category.questions.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`${categoryIndex}-${index}`}
                    className="border gaming-border rounded-lg px-4"
                  >
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary/10 border border-primary/20 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Icon name="MessageCircle" size={24} className="text-primary" />
            <h3 className="font-gaming font-bold text-xl">Не нашли ответ?</h3>
          </div>
          <p className="text-foreground leading-relaxed mb-4">
            Если вы не нашли ответ на свой вопрос, обратитесь к администрации
            сервера в Discord или напишите в игровом чате. Мы всегда готовы
            помочь!
          </p>
          <div className="flex gap-4">
            <Button
              size="lg"
              className="gaming-gradient text-white font-semibold gaming-glow"
            >
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Discord сервер
            </Button>
          </div>
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

export default FAQ;
