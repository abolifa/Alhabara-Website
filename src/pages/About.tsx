import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Leaf } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();
  return (
    <section className="py-32" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-20 text-blue-900">
          {t("About Us")}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              {t(
                "At Alhabara, we're dedicated to providing the highest quality infant nutrition. With over 10 years of experience, we combine cutting-edge research with time-tested practices to create baby milk formulas that support healthy growth and development."
              )}
            </p>
            <div className="grid grid-cols-3 gap-4">
              <Card className="text-center p-4">
                <CardContent className="pt-4">
                  <Heart className="h-8 w-8 mx-auto mb-2 text-pink-500" />
                  <h3 className="font-semibold">{t("Care")}</h3>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardContent className="pt-4">
                  <Shield className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                  <h3 className="font-semibold">{t("Safety")}</h3>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardContent className="pt-4">
                  <Leaf className="h-8 w-8 mx-auto mb-2 text-green-500" />
                  <h3 className="font-semibold">{t("Natural")}</h3>
                </CardContent>
              </Card>
            </div>
            <p className="text-gray-700">
              {t(
                "Our commitment to excellence ensures that every bottle of Alhabara formula meets the highest standards of nutrition and safety. We believe in transparency, sustainability, and putting babies' needs first."
              )}
            </p>
            <Button className="w-full sm:w-auto">
              <p>{t("Learn More Aout Our Process")}</p>
            </Button>
          </div>
          <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="/about-image.jpg"
              alt="Happy baby drinking milk"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
