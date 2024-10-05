import ProductFilter from "@/components/productsFilter";
import { Card, CardContent } from "@/components/ui/card";
import { brands } from "@/lib/products";
import { Droplet, Heart, ShieldCheck, Star } from "lucide-react";
import { useParams } from "react-router-dom";

export default function SingleBrand() {
  const { id } = useParams();
  const brand = brands.find((brand) => brand.id === id);

  return (
    <>
      <div className="w-full flex flex-col items-center justify-start gap-8 mt-10 py-10">
        <img src={`/${brand?.logo}`} className="w-96 object-contain" />
        <h1 className="text-4xl font-bold text-blue-900">{brand?.name}</h1>
        <p className="text-muted-foreground text-lg max-w-xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          voluptatem provident possimus placeat architecto autem tempora eveniet
          praesentium optio illum!
        </p>
      </div>

      <div className="bg-blue-900 w-full h-full flex flex-col items-center justify-center py-20 text-white">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-3xl font-bold">Why Choose {brand?.label}?</h1>
          <p className="text-md text-center max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            ipsa?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 items-center gap-5 container mx-auto px-10">
          <Card>
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <Heart className="w-12 h-12 text-primary" />
              <h3 className="text-2xl font-bold text-center">
                Nutrient-Rich Formula
              </h3>
              <p className="text-center text-muted-foreground">
                Packed with essential vitamins and minerals for optimal growth
                and development.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <ShieldCheck className="w-12 h-12 text-primary" />
              <h3 className="text-2xl font-bold text-center">Safe & Trusted</h3>
              <p className="text-center text-muted-foreground">
                Rigorously tested and approved by pediatricians for your baby's
                safety.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <Droplet className="w-12 h-12 text-primary" />
              <h3 className="text-2xl font-bold text-center">Easy to Digest</h3>
              <p className="text-center text-muted-foreground">
                Gentle on your baby's tummy, reducing discomfort and promoting
                better sleep.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* no images appears */}
      <h1 className="text-3xl font-bold text-blue-900 text-center my-5 py-5">
        Products
      </h1>
      <div className="p-10 container mx-auto">
        <ProductFilter brand={brand?.label} />
      </div>

      <div className="w-full my-20 bg-slate-50 flex flex-col items-center justify-center px-10">
        <h1 className="text-3xl font-bold text-blue-900">What Parents Says</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-10 container mx-auto">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src="/person/sara.avif"
                  alt="Sarah M."
                  className="rounded-full w-12 h-12 object-cover"
                />
                <div>
                  <p className="font-semibold">Sarah M.</p>
                  <div className="flex">
                    {[...Array(3)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">
                "{brand?.name} has been a game-changer for us. Our baby loves
                it, and we've noticed significant improvements in her growth and
                energy levels."
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src="/person/john.avif"
                  alt="John D."
                  className="rounded-full h-12 w-12 object-cover"
                />
                <div>
                  <p className="font-semibold">John D.</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">
                "As a first-time parent, I was worried about choosing the right
                formula. {brand?.name} put all my concerns to rest. It's simply
                the best!"
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
