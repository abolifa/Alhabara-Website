import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductsGrid from "./ProductsGrid";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();
  return (
    <div
      className="container mx-auto space-y-5 flex flex-col items-center py-10"
      id="products"
    >
      <h1 className="text-6xl font-black text-blue-900">{t("Our Products")}</h1>
      <Tabs defaultValue="all" className="w-full text-center">
        <TabsList className="bg-blue-900 text-white w-auto gap-10">
          <TabsTrigger value="all" className="w-full px-10">
            {t("All")}
          </TabsTrigger>
          <TabsTrigger value="formula" className="w-full">
            {t("Formula")}
          </TabsTrigger>
          <TabsTrigger value="cerial" className="w-full">
            {t("Cerial")}
          </TabsTrigger>
          <TabsTrigger value="diapers" className="w-full">
            {t("Diapers")}
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
        <TabsContent value="diapers" className="mt-10">
          <div className=" text-center text-6xl font-bold text-blue-900">
            {t("Soon...")}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Products;
