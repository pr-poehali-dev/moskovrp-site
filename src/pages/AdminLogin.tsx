import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useState } from "react";

/*
Список администраторских паролей для доступа к панели:
1. RedStone2024!
2. DiamondSword99#
3. CreeperKing@77
4. NetherPortal$88
5. EnderDragon!55
6. ObsidianWall&23
7. GoldenApple#91
8. IronPickaxe@34
9. LapisLazuli$67
10. EmeraldBlock!12
11. BlazePowder&45
12. WitherSkull#78
13. BeaconLight@56
14. SlimeBlock$89
15. RedstoneCircuit!33
16. PistonPower&71
17. CommandBlock#24
18. SpawnerEgg@93
19. EnchantedBook!18
20. PotionMaster$62
21. NetherStar&84
22. DragonEgg#37
23. TotemGuard@51
24. TridentStorm!95
25. ElytraFly$29
26. ShulkerVault&73
27. ChorusFruit#46
28. PurpurStone@68
29. EndCrystal!82
30. VoidWalker$15
31. AdminAccess&59
32. ServerOwner!94
33. ModeratorKey@27
34. HelperRole#76
35. BuilderPro$41
36. EventHost&83
37. SecurityPass!58
38. AccessGrant@32
39. Permission#97
40. RoleManager$64
41. BanHammer&19
42. KickSystem!86
43. MuteControl@49
44. WarnActive#72
45. TempBan$35
46. IPBlock&91
47. WhitelistOp!53
48. BlacklistDel@74
49. ConfigMaster#26
50. DatabaseRoot$88
*/

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    nickname: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      alert("Демо-версия: Вход в админ-панель недоступен");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-card/60 backdrop-blur-sm rounded-xl p-8 gaming-border gaming-glow">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" size={32} className="text-white" />
            </div>
            <h1 className="font-gaming font-black text-3xl mb-2">
              <span className="bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent">
                АДМИН
              </span>
              <span className="text-foreground"> ПАНЕЛЬ</span>
            </h1>
            <p className="text-muted-foreground">
              Доступ только для администрации
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nickname" className="text-foreground font-medium">
                Игровой ник
              </Label>
              <Input
                id="nickname"
                type="text"
                value={formData.nickname}
                onChange={(e) =>
                  setFormData({ ...formData, nickname: e.target.value })
                }
                placeholder="Введите ваш ник"
                className="gaming-border bg-background/50"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground font-medium">
                Пароль администратора
              </Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="Введите пароль"
                className="gaming-border bg-background/50"
                required
              />
            </div>

            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Icon
                  name="AlertTriangle"
                  size={20}
                  className="text-destructive mt-0.5 flex-shrink-0"
                />
                <div className="text-sm">
                  <p className="font-medium text-destructive mb-1">Внимание!</p>
                  <p className="text-muted-foreground">
                    Неавторизованный доступ к админ-панели преследуется по
                    закону. Все попытки входа логируются.
                  </p>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full gaming-gradient text-white font-semibold gaming-glow"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Icon
                    name="Loader2"
                    size={20}
                    className="mr-2 animate-spin"
                  />
                  Проверка доступа...
                </>
              ) : (
                <>
                  <Icon name="LogIn" size={20} className="mr-2" />
                  Войти в систему
                </>
              )}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <Link to="/">
              <Button
                variant="outline"
                size="lg"
                className="gaming-border bg-card/60 backdrop-blur-sm"
              >
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                На главную
              </Button>
            </Link>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              Проблемы с доступом? Обратитесь к главному администратору
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
