// NutritionGuide.tsx
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card"; // Import ShadCN Card component
import { Button } from "@/components/ui/button"; // Import ShadCN Button
import {
  Table,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

export default function NutritionGuide() {
  return (
    <div className="p-6 py-28">
      {/* Header Section */}
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Baby Nutrition Guide
        </h1>
        <p className="text-lg text-gray-600">
          Learn about the best nutrition options for your baby, including baby
          formula and baby cereals.
        </p>
      </section>

      {/* Baby Formula and Baby Cereal Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {/* Baby Formula Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <h2 className="text-2xl font-bold text-blue-900">Baby Formula</h2>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Baby formula is designed to mimic the nutrients found in breast
              milk and provide essential vitamins, minerals, and protein to
              support your baby's growth and development.
            </p>
            <ul className="list-disc list-inside mt-4">
              <li>Rich in protein</li>
              <li>Fortified with vitamins & minerals</li>
              <li>Supports healthy growth</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant={"outline"}>Learn More</Button>
          </CardFooter>
        </Card>

        {/* Baby Cereal Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <h2 className="text-2xl font-bold text-blue-900">Baby Cereal</h2>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Baby cereals are often the first solid food for infants, providing
              carbohydrates, fiber, and key nutrients like iron to support brain
              and body development.
            </p>
            <ul className="list-disc list-inside mt-4">
              <li>Iron-fortified for brain health</li>
              <li>Easy to digest</li>
              <li>Great for introducing solids</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant={"outline"}>Learn More</Button>
          </CardFooter>
        </Card>
      </section>

      {/* Nutritional Information Table */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">
          Nutritional Information
        </h2>
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableCell className="font-bold">Nutrient</TableCell>
              <TableCell className="font-bold">Baby Formula</TableCell>
              <TableCell className="font-bold">Baby Cereal</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Calories</TableCell>
              <TableCell>70 per serving</TableCell>
              <TableCell>60 per serving</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Iron</TableCell>
              <TableCell>1.8 mg</TableCell>
              <TableCell>5 mg</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Protein</TableCell>
              <TableCell>2 g</TableCell>
              <TableCell>1 g</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Carbohydrates</TableCell>
              <TableCell>7 g</TableCell>
              <TableCell>12 g</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      {/* Feeding Guidelines Section */}
      <section className="bg-primary-foreground p-6 rounded-lg mb-12">
        <h2 className="text-3xl font-bold mb-4 text-blue-900">
          Feeding Guidelines
        </h2>
        <p className="mb-4">
          When introducing baby formula and cereal, follow these guidelines to
          ensure your baby gets the right nutrition:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>0-6 months:</strong> Stick to breast milk or formula.
          </li>
          <li>
            <strong>6 months+</strong>: Begin introducing baby cereals, starting
            with iron-fortified single-grain cereals.
          </li>
          <li>Gradually introduce new cereals and solid foods.</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">FAQs</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">
              When should I start giving my baby cereal?
            </h3>
            <p className="text-gray-600">
              You can introduce baby cereal around 6 months of age when your
              baby shows signs of readiness for solid foods.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              What type of baby formula should I choose?
            </h3>
            <p className="text-gray-600">
              Consult with your pediatrician to choose a formula based on your
              baby’s specific needs, such as cow’s milk-based or hypoallergenic
              formula.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center p-6 bg-secondary-foreground text-white rounded-lg">
        <p>
          Find more resources on baby nutrition at{" "}
          <a href="#" className="underline text-blue-900">
            Nutrition Resources
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
