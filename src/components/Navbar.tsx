import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ChevronRight, MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./language-switcher";

const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#brands", label: "Brands" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

interface NavbarProps {
  rootLayoutRef: React.MutableRefObject<HTMLDivElement | null>;
}

const Navbar: React.FC<NavbarProps> = ({ rootLayoutRef }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false); // State for sheet visibility

  useEffect(() => {
    const handleScroll = () => {
      if (rootLayoutRef.current) {
        const scrollY = rootLayoutRef.current.scrollTop;
        setIsScrolled(scrollY > 1);
      }
    };

    const rootLayoutElement = rootLayoutRef.current;
    if (rootLayoutElement) {
      rootLayoutElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (rootLayoutElement) {
        rootLayoutElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [rootLayoutRef]);

  return (
    <div
      className={cn(
        "w-full sticky bg-transparent top-0 z-50 flex items-center justify-between px-10 lg:px-20 h-24 transition-all ease-in-out duration-300",
        isScrolled && "h-16 bg-white drop-shadow-md"
      )}
    >
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger onClick={() => setIsSheetOpen(true)}>
          <MenuIcon className="text-blue-900 h-8 w-8" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              <div className="mt-10 flex flex-col items-start justify-start gap-5 text-primary">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={
                      location.pathname === "/" // Check if on the homepage
                        ? link.href // If on homepage, use just the href
                        : `/${link.href}` // Otherwise prepend with "/"
                    }
                    className="w-full flex items-center justify-between text-blue-900 text-lg font-semibold"
                    onClick={() => {
                      if (link.href.startsWith("#")) {
                        scrollToElement(link.href.replace("#", ""));
                        setIsSheetOpen(false); // Close the sheet
                      }
                    }}
                  >
                    {link.label}
                    <ChevronRight />
                  </Link>
                ))}
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Link to={"/"}>
        <img
          src="/logo/logo.png"
          alt="logo"
          className={cn(
            "transition-all ease-in-out duration-500",
            isScrolled ? "h-14" : "h-24 mt-5"
          )}
        />
      </Link>

      <LanguageSwitcher />
    </div>
  );
};

export default Navbar;
