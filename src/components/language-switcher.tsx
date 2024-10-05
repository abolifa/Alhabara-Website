import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Languages } from "lucide-react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng); // Save language preference to local storage

    // Update body class based on language
    if (lng === "ar") {
      document.body.classList.add("rtl");
      document.body.classList.remove("ltr");
    } else {
      document.body.classList.remove("rtl");
      document.body.classList.add("ltr");
    }
  };

  // Load the language from local storage when the component mounts
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en"; // Default to English if not set
    changeLanguage(savedLanguage);
  }, [i18n]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} size={"sm"} className="text-blue-900">
          <Languages />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Languages</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => changeLanguage("en")}
          className="flex items-center justify-between"
        >
          English
          <img src="/lang/uk.png" className="w-8 h-8 object-contain" />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLanguage("ar")}
          className="flex items-center justify-between"
        >
          Arabic
          <img src="/lang/sa.png" className="w-8 h-8 object-contain" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
