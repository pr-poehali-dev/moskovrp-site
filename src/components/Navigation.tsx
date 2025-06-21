import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/rules", label: "Правила", icon: "BookOpen" },
    { path: "/complaints", label: "Жалобы", icon: "AlertTriangle" },
    { path: "/faq", label: "FAQ", icon: "HelpCircle" },
    { path: "/admin-login", label: "Админ панель", icon: "Shield" },
  ];

  return (
    <nav className="bg-card/80 backdrop-blur-sm border-b gaming-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-gaming font-bold text-sm">
                M
              </span>
            </div>
            <span className="font-gaming font-bold text-xl text-primary">
              MoskovRP
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === item.path
                    ? "bg-primary/20 text-primary gaming-glow"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`}
              >
                <Icon name={item.icon as any} size={18} />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button className="text-foreground p-2">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
