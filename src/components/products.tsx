import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductsGrid from "./ProductsGrid";

const Products = () => {
  return (
    <div className="container mx-auto space-y-5 flex flex-col items-center py-10">
      <h1 className="text-6xl font-black text-blue-900">Our Products</h1>
      <Tabs defaultValue="all" className="w-full text-center">
        <TabsList className="bg-blue-900 text-white w-96 gap-10">
          <TabsTrigger value="all" className="w-full">
            All
          </TabsTrigger>
          <TabsTrigger value="formula" className="w-full">
            Formula
          </TabsTrigger>
          <TabsTrigger value="cerial" className="w-full">
            Cerial
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-10">
          <ProductsGrid />
        </TabsContent>
        <TabsContent value="formula" className="mt-10">
          <ProductsGrid category="formula" />
        </TabsContent>
        <TabsContent value="cerial" className="mt-10">
          <ProductsGrid category="cerial" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Products;
