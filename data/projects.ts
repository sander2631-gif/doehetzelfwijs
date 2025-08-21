export type ProductLink = { name: string; url: string };
export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  steps: string[];
  products: ProductLink[];
  category: string;
};

export const categories = [
  { title: "Schilderen & Afwerken", image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=1200&q=80&auto=format&fit=crop" },
  { title: "Vloeren", image: "https://images.unsplash.com/photo-1618213837799-25d1d8b5682b?w=1200&q=80&auto=format&fit=crop" },
  { title: "Sanitair & Badkamer", image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200&q=80&auto=format&fit=crop" },
  { title: "Tuin & Buiten", image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1200&q=80&auto=format&fit=crop" },
  { title: "Elektriciteit & Verlichting", image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1200&q=80&auto=format&fit=crop" },
  { title: "Keuken", image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=1200&q=80&auto=format&fit=crop" },
  { title: "Isolatie", image: "https://images.unsplash.com/photo-1600585154340-1e4ce9a2d69b?w=1200&q=80&auto=format&fit=crop" },
  { title: "Muren & Wanden", image: "https://images.unsplash.com/photo-1582582621959-48d9a2a444ef?w=1200&q=80&auto=format&fit=crop" },
  { title: "Dak & Zolder", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80&auto=format&fit=crop" },
];

export const projects: Project[] = [
  {
    slug: "laminaat-leggen",
    title: "Laminaat leggen",
    description: "Stap-voor-stap gids om zelf laminaat te leggen.",
    image: "https://images.unsplash.com/photo-1578236617563-3b3b3b3b3b3b?w=1200&q=80&auto=format&fit=crop",
    steps: [
      "Meet de kamer en bereken de hoeveelheid laminaat.",
      "Leg een ondervloer.",
      "Begin langs een rechte muur en klik de planken in elkaar.",
      "Gebruik afstandhouders voor uitzettingsvoegen.",
      "Zaag planken op maat bij obstakels."
    ],
    products: [
      { name: "Ondervloerrollen", url: "https://www.bol.com/nl/nl/s/?searchtext=ondervloer" },
      { name: "Laminaatset met afstandhouders", url: "https://www.gamma.nl/assortiment/q/laminaatset" },
      { name: "Decoupeerzaag", url: "https://www.bol.com/nl/nl/s/?searchtext=decoupeerzaag" }
    ],
    category: "Vloeren"
  },
  {
    slug: "muur-verven",
    title: "Muur verven",
    description: "Handige tips voor strak schilderwerk.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=1200&q=80&auto=format&fit=crop",
    steps: [
      "Maak de muur schoon en verwijder stof.",
      "Plak randen af met schilderstape.",
      "Breng grondverf aan indien nodig.",
      "Verf eerst de randen en hoeken, daarna grote vlakken.",
      "Laat drogen en breng indien nodig een tweede laag aan."
    ],
    products: [
      { name: "Schilderstape", url: "https://www.gamma.nl/assortiment/q/schilderstape" },
      { name: "Roller met telescoopsteel", url: "https://www.bol.com/nl/nl/s/?searchtext=roller+met+telescoopsteel" },
      { name: "Latex muurverf", url: "https://www.bol.com/nl/nl/s/?searchtext=latex+muurverf" }
    ],
    category: "Schilderen & Afwerken"
  },
  {
    slug: "douchekraan-vervangen",
    title: "Douchekraan vervangen",
    description: "Leer hoe je eenvoudig zelf een kraan vervangt.",
    image: "https://images.unsplash.com/photo-1598300053652-5a77a0e1c1af?w=1200&q=80&auto=format&fit=crop",
    steps: [
      "Zet de hoofdkraan van het water dicht.",
      "Draai de oude kraan los met een waterpomptang.",
      "Controleer de S-koppelingen en vervang indien nodig.",
      "Plaats de nieuwe kraan met teflon tape.",
      "Zet de hoofdkraan weer open en test de nieuwe kraan."
    ],
    products: [
      { name: "Waterpomptang", url: "https://www.bol.com/nl/nl/s/?searchtext=waterpomptang" },
      { name: "Teflon tape", url: "https://www.gamma.nl/assortiment/q/teflon+tape" },
      { name: "Nieuwe douchekraan", url: "https://www.bol.com/nl/nl/s/?searchtext=douchekraan" }
    ],
    category: "Sanitair & Badkamer"
  }
];

export const comparisons = [
  {
    title: "Beste verfrollers getest",
    description: "Vergelijk de populairste verfrollers voor strak schilderwerk.",
    items: [
      { name: "Gamma Verfroller Pro", price: 12.99, rating: 4.5, url: "https://www.gamma.nl/assortiment/q/verfroller" },
      { name: "Action Budgetroller", price: 4.99, rating: 3.8, url: "https://www.action.com/nl-nl/search/?q=verfroller" },
      { name: "Bol.com Roller Set", price: 15.5, rating: 4.2, url: "https://www.bol.com/nl/nl/s/?searchtext=verfroller" }
    ]
  }
];
