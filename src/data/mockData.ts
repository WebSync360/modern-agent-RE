export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
  category: "Penthouse" | "Villa" | "Estate";
  architecturalStyle: string;
  materiality: string[]; // Specific 2026 luxury detail
}

export const JULIAN_VANE = {
  name: "Julian Vane",
  title: "Modern Agent & Architectural Advisor",
  bio: "Specializing in the intersection of high-design architecture and premium real estate. Julian doesn't just sell homes; he curates living experiences for the discerning collector.",
  socials: {
    instagram: "@julianvane",
    linkedin: "julianvane-realestate",
  },
  stats: [
    { label: "Sales Volume", value: "$450M+" },
    { label: "Years Experience", value: "12" },
    { label: "Design Awards", value: "4" },
  ]
};

export const PROPERTIES: Property[] = [
  {
    id: "01",
    title: "The Monolith House",
    price: "$12,500,000",
    location: "Malibu, California",
    beds: 5,
    baths: 6,
    sqft: "7,200",
    image: "https://images.unsplash.com/photo-1600585154340-be6199f7d009?auto=format&fit=crop&q=80&w=1200",
    category: "Estate",
    architecturalStyle: "Brutalist Minimalism",
    materiality: ["Raw Concrete", "Blackened Steel", "Oak"],
  },
  {
    id: "02",
    title: "Sky Glass Penthouse",
    price: "$8,900,000",
    location: "Manhattan, NY",
    beds: 3,
    baths: 3.5,
    sqft: "3,100",
    image: "https://images.unsplash.com/photo-1600607687940-477a63739931?auto=format&fit=crop&q=80&w=1200",
    category: "Penthouse",
    architecturalStyle: "Contemporary Glass",
    materiality: ["Frameless Glass", "Calacatta Marble"],
  },
  {
    id: "03",
    title: "The Desert Pavilion",
    price: "$6,200,000",
    location: "Joshua Tree, AZ",
    beds: 4,
    baths: 4,
    sqft: "4,500",
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=1200",
    category: "Villa",
    architecturalStyle: "Desert Modernism",
    materiality: ["Rammed Earth", "Corten Steel"],
  }
];

export const NAV_LINKS = [
  { label: "Listings", href: "#listings" },
  { label: "The Vane Approach", href: "#approach" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "/contact" },
];