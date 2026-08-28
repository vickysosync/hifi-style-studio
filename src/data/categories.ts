export type Category = {
  id: string;
  slug: string;
  name: string;
  image: string;
  blurb: string;
  active: boolean;
};

export const categories: Category[] = [
  { id: "C1", slug: "sarees", name: "Sarees", image: "cat-sarees", blurb: "Drapes with quiet drama", active: true },
  { id: "C2", slug: "salwar-suits", name: "Salwar Suits", image: "cat-salwar", blurb: "Everyday ethnic ease", active: true },
  { id: "C3", slug: "sharara", name: "Sharara", image: "cat-sharara", blurb: "Celebration silhouettes", active: true },
  { id: "C4", slug: "dresses", name: "Dresses", image: "cat-dresses", blurb: "Contemporary one-pieces", active: true },
  { id: "C5", slug: "tops", name: "Tops", image: "cat-tops", blurb: "Statement everyday layers", active: true },
  { id: "C6", slug: "jeans", name: "Jeans", image: "cat-jeans", blurb: "Denim that actually fits", active: true },
  { id: "C7", slug: "bridal-wear", name: "Bridal Wear", image: "cat-bridal", blurb: "For the biggest day", active: true },
  { id: "C8", slug: "festive-wear", name: "Festive Wear", image: "cat-festive", blurb: "Season of celebration", active: true },
];
