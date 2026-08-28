export type Banner = {
  id: string;
  heading: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  active: boolean;
};

export const banners: Banner[] = [
  {
    id: "B1",
    heading: "Elevate Your Everyday Style",
    subtitle:
      "Discover elegant ethnic wear and contemporary fashion curated for every occasion.",
    buttonText: "Shop Collection",
    buttonLink: "/shop",
    image: "hero-banner-one",
    active: true,
  },
  {
    id: "B2",
    heading: "The Festive Edit Is Here",
    subtitle: "Silks, sequins and sharara sets made for the celebration season.",
    buttonText: "Explore New Arrivals",
    buttonLink: "/category/festive-wear",
    image: "hero-banner-two",
    active: true,
  },
  {
    id: "B3",
    heading: "Western Wear, Reimagined",
    subtitle: "Dresses, tops and denim with a boutique finish — straight from Chandan Nagar.",
    buttonText: "Shop Western",
    buttonLink: "/category/dresses",
    image: "hero-banner-three",
    active: true,
  },
];
