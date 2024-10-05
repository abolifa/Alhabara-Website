import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Leaf } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="py-32 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-12 text-blue-900">
          About Us
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              At NurtureBaby, we're dedicated to providing the highest quality
              infant nutrition. With over 50 years of experience, we combine
              cutting-edge research with time-tested practices to create baby
              milk formulas that support healthy growth and development.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <Card className="text-center p-4">
                <CardContent className="pt-4">
                  <Heart className="h-8 w-8 mx-auto mb-2 text-pink-500" />
                  <h3 className="font-semibold">Care</h3>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardContent className="pt-4">
                  <Shield className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                  <h3 className="font-semibold">Safety</h3>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardContent className="pt-4">
                  <Leaf className="h-8 w-8 mx-auto mb-2 text-green-500" />
                  <h3 className="font-semibold">Natural</h3>
                </CardContent>
              </Card>
            </div>
            <p className="text-gray-700">
              Our commitment to excellence ensures that every bottle of
              NurtureBaby formula meets the highest standards of nutrition and
              safety. We believe in transparency, sustainability, and putting
              babies' needs first.
            </p>
            <Button className="w-full sm:w-auto">
              Learn More About Our Process
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
