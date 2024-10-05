import {
  Baby,
  CheckCircle,
  CircleCheck,
  Dna,
  Dumbbell,
  Leaf,
  LucideIcon,
  ShieldCheckIcon,
} from "lucide-react";

export type Perk = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  category: string;
  age: string;
  image: string;
  action?: string;
  perks: Perk[];
};

export const products = [
  {
    id: "1",
    name: "Jmool",
    category: "formula",
    description: "Camel milk powder, lactose free",
    age: "+10 months",
    image: "jmool-milk.jfif",
    perks: [
      {
        icon: ShieldCheckIcon,
        label: "Full Fat",
        color: "text-blue-500",
      },
      {
        icon: Leaf,
        label: "Organic Ingredients",
        color: "text-green-500",
      },
      {
        icon: CircleCheck,
        label: "Lactose Free",
        color: "text-rose-500",
      },
      {
        icon: Dna,
        label: "DHA Enriched",
        color: "text-indigo-500",
      },
    ],
  },
  {
    id: "2",
    name: "Herolac",
    category: "cerial",
    description: "Baby Cerial, Wheat & Dates",
    age: "+4 months",
    image: "herolac-dates.jfif",
    perks: [
      {
        icon: ShieldCheckIcon,
        label: "Rich With Fiber",
        color: "text-blue-500",
      },
      {
        icon: Leaf,
        label: "Organic Ingredients",
        color: "text-green-500",
      },
      {
        icon: Baby,
        label: "Easy To Digest",
        color: "text-rose-500",
      },
    ],
  },
  {
    id: "3",
    name: "Herolac",
    category: "cerial",
    description: "Baby Cerial, Wheat & Fruits",
    age: "+4 months",
    image: "herolac-fruit.jfif",
    perks: [
      {
        icon: ShieldCheckIcon,
        label: "Rich With Fiber",
        color: "text-blue-500",
      },
      {
        icon: Leaf,
        label: "Organic Ingredients",
        color: "text-green-500",
      },
      {
        icon: Baby,
        label: "Easy To Digest",
        color: "text-rose-500",
      },
    ],
  },
  {
    id: "4",
    name: "Herolac",
    category: "cerial",
    description: "Baby Cerial, Rice & Milk",
    age: "+4 months",
    image: "herolac-ricemilk.jfif",
    perks: [
      {
        icon: ShieldCheckIcon,
        label: "Rich With Fiber",
        color: "text-blue-500",
      },
      {
        icon: Leaf,
        label: "Organic Ingredients",
        color: "text-green-500",
      },
      {
        icon: Baby,
        label: "Easy To Digest",
        color: "text-rose-500",
      },
    ],
  },
  {
    id: "5",
    name: "Herolac",
    category: "cerial",
    description: "Baby Cerial, Wheat & Honey",
    age: "+12 months",
    image: "herolac-wheathoney.jfif",
    perks: [
      {
        icon: ShieldCheckIcon,
        label: "Rich With Fiber",
        color: "text-blue-500",
      },
      {
        icon: Leaf,
        label: "Organic Ingredients",
        color: "text-green-500",
      },
      {
        icon: Baby,
        label: "Easy To Digest",
        color: "text-rose-500",
      },
    ],
  },
  {
    id: "6",
    name: "Herolac",
    category: "cerial",
    description: "Baby Cerial, Wheat",
    age: "+4 months",
    image: "herolac-wheat.jfif",
    perks: [
      {
        icon: ShieldCheckIcon,
        label: "Rich With Fiber",
        color: "text-blue-500",
      },
      {
        icon: Leaf,
        label: "Organic Ingredients",
        color: "text-green-500",
      },
      {
        icon: Baby,
        label: "Easy To Digest",
        color: "text-rose-500",
      },
    ],
  },
  {
    id: "7",
    name: "Sinan",
    category: "formula",
    description: "Fat Filled, Boost Protection",
    age: "1-6 years",
    image: "sinan-fatfield.jfif",
    perks: [
      {
        icon: ShieldCheckIcon,
        label: "Fat Filled",
        color: "text-blue-500",
      },
      {
        icon: Leaf,
        label: "Organic Ingredients",
        color: "text-green-500",
      },
      {
        icon: CheckCircle,
        label: "Immunity Boosted",
        color: "text-rose-500",
      },
    ],
  },
  {
    id: "8",
    name: "Sinan",
    category: "formula",
    description: "Boost Protection, Advanced Formula",
    age: "1-6 years",
    image: "sinan-boost.jfif",
    perks: [
      {
        icon: ShieldCheckIcon,
        label: "Full Fat",
        color: "text-blue-500",
      },
      {
        icon: Leaf,
        label: "Organic Ingredients",
        color: "text-green-500",
      },
      {
        icon: CircleCheck,
        label: "Lactose Free",
        color: "text-rose-500",
      },
      {
        icon: Dumbbell,
        label: "Inhanced With Iron",
        color: "text-indigo-500",
      },
    ],
  },
  {
    id: "9",
    name: "Sinan",
    category: "formula",
    description: "Baby Formula, Stage 1",
    age: "0-6 months",
    image: "sinan-1.jfif",
    perks: [
      {
        icon: ShieldCheckIcon,
        label: "DHA & ARA",
        color: "text-blue-500",
      },
      {
        icon: Leaf,
        label: "Organic Ingredients",
        color: "text-green-500",
      },
      {
        icon: CircleCheck,
        label: "Immune Support",
        color: "text-rose-500",
      },
      {
        icon: Baby,
        label: "No Artificial Preservation",
        color: "text-indigo-500",
      },
    ],
  },
  {
    id: "10",
    name: "Sinan",
    category: "formula",
    description: "Baby Formula, Stage 2",
    age: "6-12 months",
    image: "sinan-2.jfif",
    perks: [
      {
        icon: ShieldCheckIcon,
        label: "DHA & ARA",
        color: "text-blue-500",
      },
      {
        icon: Leaf,
        label: "Organic Ingredients",
        color: "text-green-500",
      },
      {
        icon: CircleCheck,
        label: "Immune Support",
        color: "text-rose-500",
      },
      {
        icon: Baby,
        label: "No Artificial Preservation",
        color: "text-indigo-500",
      },
    ],
  },
  {
    id: "11",
    name: "Sinan",
    category: "formula",
    description: "Baby Formula, Stage 3",
    age: "+12 months",
    image: "sinan-3.jfif",
    perks: [
      {
        icon: ShieldCheckIcon,
        label: "DHA & ARA",
        color: "text-blue-500",
      },
      {
        icon: Leaf,
        label: "Organic Ingredients",
        color: "text-green-500",
      },
      {
        icon: CircleCheck,
        label: "Immune Support",
        color: "text-rose-500",
      },
      {
        icon: Baby,
        label: "No Artificial Preservation",
        color: "text-indigo-500",
      },
    ],
  },
];

export type Brand = {
  id: string;
  name: string;
  logo: string;
  new: boolean;
};

export const brands = [
  {
    id: "1",
    label: "Labib",
    name: "Labib Instant Meals",
    logo: "brands/labib.jpg",
    new: false,
  },
  {
    id: "2",
    label: "Herolac",
    name: "Herolac Instant Meals",
    logo: "brands/herolac.jpg",
    new: false,
  },
  {
    id: "3",
    label: "Sinan",
    name: "Sinan-Milk",
    logo: "brands/snan-heart.jpg",
    new: false,
  },
  {
    id: "4",
    label: "Sinan",
    name: "Sinan-Formula",
    logo: "brands/snan.jpg",
    new: false,
  },
  {
    id: "5",
    label: "Jmool",
    name: "Jmool Camels Milk",
    logo: "brands/jmool.jpg",
    new: false,
  },
  {
    id: "6",
    label: "Primo",
    name: "Primo Instant Baby Formula",
    logo: "brands/prime.jpg",
    new: true,
  },
  {
    id: "7",
    label: "Bambino",
    name: "Bambino Baby Diapers",
    logo: "brands/bambino.jpg",
    new: true,
  },
  {
    id: "8",
    label: "LuLu",
    name: "LuLu Baby Diapers",
    logo: "brands/lulu.jpg",
    new: true,
  },
];
