import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams } from "react-router-dom";
import { products } from "@/lib/products";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  console.log(product);
  return (
    <div className="relative container mx-auto px-4 py-24">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative z-20 h-[600px] flex items-center justify-center bgred-500 rounded-lg overflow-hidden">
          <img
            src={`/${product?.image}`}
            alt="NurtureBaby Premium Infant Formula"
            className="absolute -top-5 left-0 rounded-lg h-full w-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-blue-900">{product?.name}</h1>
          <p className="text-md text-muted-foreground">
            {product?.description}
          </p>

          <Badge className="bg-blue-900 px-3 py-2">{product?.age}</Badge>

          {/* Key Features */}
          <div className="flex space-x-4">
            {product?.perks?.map((item) => (
              <div key={item.label} className="flex items-center">
                <item.icon className={cn("h-5 w-5 mr-2", item.color)} />
                <span className="text-sm">{item?.label}</span>
              </div>
            ))}
          </div>

          {/* Product Tabs */}
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="bg-blue-900 text-white">
              <TabsTrigger value="details">Product Details</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <p>
                    Premium Infant Formula is specially designed to provide
                    complete nutrition for your baby. Our formula closely mimics
                    breast milk composition and includes:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Essential vitamins and minerals for healthy growth</li>
                    <li>DHA and ARA for brain and eye development</li>
                    <li>Prebiotics to support digestive health</li>
                    <li>Easy-to-digest proteins</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="nutrition" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">
                    Nutritional Information (per 100g)
                  </h4>
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td>Energy</td>
                        <td>2100 kJ / 500 kcal</td>
                      </tr>
                      <tr>
                        <td>Protein</td>
                        <td>10g</td>
                      </tr>
                      <tr>
                        <td>Carbohydrates</td>
                        <td>55g</td>
                      </tr>
                      <tr>
                        <td>Fat</td>
                        <td>27g</td>
                      </tr>
                      <tr>
                        <td>DHA</td>
                        <td>0.2g</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reviews" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center mb-2">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-2 text-sm text-gray-600">
                        (128 reviews)
                      </span>
                    </div>
                    <div className="border-t pt-4">
                      <p className="font-semibold">Amazing product!</p>
                      <p className="text-sm text-gray-600">
                        My baby loves this formula and it's so easy to prepare.
                        Highly recommended!
                      </p>
                    </div>
                    <div className="border-t pt-4">
                      <p className="font-semibold">Great quality</p>
                      <p className="text-sm text-gray-600">
                        I feel confident giving this to my little one. It's
                        gentle on her tummy and she's growing well.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
