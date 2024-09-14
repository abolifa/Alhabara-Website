export const products = [
  {
    name: "Jmool",
    category: "formula",
    description: "Camel milk powder, lactose free",
    age: "+10 months",
    image: "jmool-milk.jfif",
  },
  {
    name: "Herolac",
    category: "cerial",
    description: "Baby Cerial, Wheat & Dates",
    age: "+4 months",
    image: "herolac-dates.jfif",
  },
  {
    name: "Herolac",
    category: "cerial",
    description: "Baby Cerial, Wheat & Fruits",
    age: "+4 months",
    image: "herolac-fruit.jfif",
  },
  {
    name: "Herolac",
    category: "cerial",
    description: "Baby Cerial, Rice & Milk",
    age: "+4 months",
    image: "herolac-ricemilk.jfif",
  },
  {
    name: "Herolac",
    category: "cerial",
    description: "Baby Cerial, Wheat & Honey",
    age: "+12 months",
    image: "herolac-wheathoney.jfif",
  },
  {
    name: "Herolac",
    category: "cerial",
    description: "Baby Cerial, Wheat",
    age: "+4 months",
    image: "herolac-wheat.jfif",
  },
  {
    name: "Sinan",
    category: "formula",
    description: "Fat Filled, Boost Protection",
    age: "1-6 years",
    image: "sinan-fatfield.jfif",
  },
  {
    name: "Sinan",
    category: "formula",
    description: "Boost Protection, Advanced Formula",
    age: "1-6 years",
    image: "sinan-boost.jfif",
  },
  {
    name: "Sinan",
    category: "formula",
    description: "Baby Formula, Stage 1",
    age: "0-6 months",
    image: "sinan-1.jfif",
  },
  {
    name: "Sinan",
    category: "formula",
    description: "Baby Formula, Stage 2",
    age: "6-12 months",
    image: "sinan-2.jfif",
  },
  {
    name: "Sinan",
    category: "formula",
    description: "Baby Formula, Stage 3",
    age: "+12 months",
    image: "sinan-3.jfif",
  },
  {
    name: "Labib",
    category: "cerial",
    description: "Labib Instant Cerial",
    age: "+4 months",
    image: "labib-collection.jfif",
    action: "Coming Soon",
  },
];

export type Brand = {
  name: string;
  logo: string;
  new: boolean;
};

export const brands = [
  {
    name: "Labib",
    logo: "brands/labib.jpg",
    new: false,
  },
  {
    name: "Herolac",
    logo: "brands/herolac.jpg",
    new: false,
  },
  {
    name: "Sinan-Milk",
    logo: "brands/snan-heart.jpg",
    new: false,
  },
  {
    name: "Sinan-Formula",
    logo: "brands/snan.jpg",
    new: false,
  },
  {
    name: "Jmool",
    logo: "brands/jmool.jpg",
    new: false,
  },
  {
    name: "Prime",
    logo: "brands/prime.jpg",
    new: true,
  },
  {
    name: "Bambino",
    logo: "brands/bambino.jpg",
    new: true,
  },
  {
    name: "LuLu",
    logo: "brands/lulu.jpg",
    new: true,
  },
];
