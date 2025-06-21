import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const ServerStats = () => {
  const [onlinePlayers, setOnlinePlayers] = useState(42);
  const [maxPlayers] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlinePlayers((prev) => {
        const change = Math.floor(Math.random() * 6) - 3;
        const newValue = prev + change;
        return Math.max(20, Math.min(80, newValue));
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      label: "Онлайн игроков",
      value: `${onlinePlayers}/${maxPlayers}`,
      icon: "Users",
    },
    { label: "Время работы", value: "99.9%", icon: "Clock" },
    { label: "Версия", value: "1.20.1", icon: "Download" },
    { label: "Режим", value: "Survival RP", icon: "Sword" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-card/60 backdrop-blur-sm rounded-xl p-4 gaming-border hover:gaming-glow transition-all duration-300"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <Icon
                name={stat.icon as any}
                size={20}
                className="text-primary"
              />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="font-gaming font-bold text-lg">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServerStats;
