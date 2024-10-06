import { Facebook, Instagram, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="relative w-full py-20 bg-muted h-full overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="flex items-center mb-4  justify-center">
              <img src="/logo/logo.png" className="w-52 object-contain" />
            </Link>
            <p className="text-sm">
              {t(
                "Nourishing babies with love and care since 2010. Alhabara - Your trusted partner in infant nutrition."
              )}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("Our Products")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/brands/3"
                  className="hover:text-primary transition-colors"
                >
                  {t("Sinan")}
                </Link>
              </li>
              <li>
                <Link
                  to="/brands/5"
                  className="hover:text-primary transition-colors"
                >
                  {t("Jmool")}
                </Link>
              </li>
              <li>
                <Link
                  to="/brands/2"
                  className="hover:text-primary transition-colors"
                >
                  {t("Herolac")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("Useful Links")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/nutrition-guide"
                  className="hover:text-primary transition-colors"
                >
                  Nutrition Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-primary transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("Connect With Us")}
            </h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://facebook.com/alhabara"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://instagram.com/alhabara"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://twitter.com/alhabara"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-muted-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Alhabara. All rights reserved.
          </p>
          <div className="mt-2 space-x-4">
            <Link
              to="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
