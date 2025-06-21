import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { useState } from "react";

const Complaints = () => {
  const [formData, setFormData] = useState({
    playerName: "",
    complainantName: "",
    complaintType: "",
    description: "",
    evidence: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the logic to submit the complaint
    alert("Жалоба отправлена! Администрация рассмотрит её в ближайшее время.");
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-gaming font-black text-4xl md:text-5xl mb-4">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              ЖАЛОБЫ
            </span>
            <span className="text-foreground"> И РЕПОРТЫ</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Сообщите о нарушениях для поддержания порядка на сервере
          </p>
        </div>

        <div className="bg-card/60 backdrop-blur-sm rounded-xl p-8 gaming-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="complainantName"
                  className="text-foreground font-medium"
                >
                  Ваш игровой ник
                </Label>
                <Input
                  id="complainantName"
                  value={formData.complainantName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      complainantName: e.target.value,
                    })
                  }
                  placeholder="Введите ваш ник"
                  className="gaming-border bg-background/50"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="playerName"
                  className="text-foreground font-medium"
                >
                  Ник нарушителя
                </Label>
                <Input
                  id="playerName"
                  value={formData.playerName}
                  onChange={(e) =>
                    setFormData({ ...formData, playerName: e.target.value })
                  }
                  placeholder="Введите ник игрока"
                  className="gaming-border bg-background/50"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="complaintType"
                className="text-foreground font-medium"
              >
                Тип нарушения
              </Label>
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, complaintType: value })
                }
              >
                <SelectTrigger className="gaming-border bg-background/50">
                  <SelectValue placeholder="Выберите тип нарушения" />
                </SelectTrigger>
                <SelectContent className="gaming-border bg-card">
                  <SelectItem value="griefing">Гриферство</SelectItem>
                  <SelectItem value="cheating">Использование читов</SelectItem>
                  <SelectItem value="toxicity">Токсичное поведение</SelectItem>
                  <SelectItem value="spam">Спам в чате</SelectItem>
                  <SelectItem value="advertising">Реклама</SelectItem>
                  <SelectItem value="rp-violation">Нарушение РП</SelectItem>
                  <SelectItem value="scam">Мошенничество</SelectItem>
                  <SelectItem value="other">Другое</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="description"
                className="text-foreground font-medium"
              >
                Описание нарушения
              </Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Подробно опишите что произошло, когда и где..."
                className="gaming-border bg-background/50 min-h-32"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="evidence" className="text-foreground font-medium">
                Доказательства (ссылки на скриншоты/видео)
              </Label>
              <Textarea
                id="evidence"
                value={formData.evidence}
                onChange={(e) =>
                  setFormData({ ...formData, evidence: e.target.value })
                }
                placeholder="Вставьте ссылки на imgur, youtube и др..."
                className="gaming-border bg-background/50"
              />
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Icon
                  name="Info"
                  size={20}
                  className="text-yellow-500 mt-0.5 flex-shrink-0"
                />
                <div className="text-sm text-foreground">
                  <p className="font-medium mb-1">Важная информация:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Ложные жалобы караются баном</li>
                    <li>• Рассмотрение жалобы может занять до 24 часов</li>
                    <li>• Предоставляйте только достоверную информацию</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                type="submit"
                size="lg"
                className="gaming-gradient text-white font-semibold px-8 gaming-glow"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Отправить жалобу
              </Button>
              <Link to="/">
                <Button
                  variant="outline"
                  size="lg"
                  className="gaming-border bg-card/60 backdrop-blur-sm"
                >
                  <Icon name="ArrowLeft" size={20} className="mr-2" />
                  Назад
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Complaints;
