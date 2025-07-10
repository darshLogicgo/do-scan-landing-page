import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Smartphone, LogIn } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: "How It Works", href: "#how-it-works", isExternal: false },
    { name: "Features", href: "#features", isExternal: false },
    { name: "Reviews", href: "#reviews", isExternal: false },
    { name: "FAQ", href: "#faq", isExternal: false },
    { name: "Contact", href: "#contact", isExternal: false },
    { name: "Blogs", href: "/blogs", isExternal: true }, // Blog route
  ];

  const scrollOrNavigate = (href: string, isExternal: boolean) => {
    if (isExternal) {
      navigate(href);
    } else {
      const id = href.replace("#", "");
      if (location.pathname !== "/") {
        navigate("/" + href); // Navigate to homepage with hash
        return;
      }
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Smartphone className="h-8 w-8" style={{ color: "#2147A8" }} />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Do Scan
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollOrNavigate(item.href, item.isExternal)}
                  className="text-gray-600 hover:opacity-75 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="https://doscanpdf.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-3"
            >
              <Button
                variant="outline"
                className="border-[#2147A8] text-[#2147A8] hover:bg-[#2147A8] hover:text-white"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollOrNavigate(item.href, item.isExternal)}
                  className="text-gray-600 hover:text-[#2147A8] block px-3 py-2 text-base font-medium w-full text-left"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 space-y-2">
                <Button
                  variant="outline"
                  className="w-full border-[#2147A8] text-[#2147A8] hover:bg-[#2147A8] hover:text-white"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
