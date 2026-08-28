export type Review = {
  id: string;
  customer: string;
  productId: string;
  productName: string;
  rating: number;
  text: string;
  date: string;
  status: "Approved" | "Pending" | "Hidden";
  avatar: string;
};

export const reviews: Review[] = [
  { id: "R1", customer: "Ananya Deshmukh", productId: "P001", productName: "Royal Wine Designer Saree", rating: 5, text: "Beautiful collection and very helpful staff. Found the perfect outfit for a family function.", date: "2026-06-11", status: "Approved", avatar: "avatar-ananya" },
  { id: "R2", customer: "Sneha Kulkarni", productId: "P010", productName: "Midnight Floral One Piece", rating: 4, text: "Lovely fabric and the fit was spot on. Delivery to Kharadi was quick too.", date: "2026-05-28", status: "Approved", avatar: "avatar-sneha" },
  { id: "R3", customer: "Fatima Shaikh", productId: "P008", productName: "Blush Embroidered Sharara", rating: 5, text: "Wore the sharara for my cousin's mehendi and got compliments all evening.", date: "2026-07-02", status: "Approved", avatar: "avatar-fatima" },
  { id: "R4", customer: "Ritika Jain", productId: "P017", productName: "Classic High-Rise Denim", rating: 4, text: "Denim quality is genuinely good for the price. Will shop again.", date: "2026-04-19", status: "Approved", avatar: "avatar-ritika" },
  { id: "R5", customer: "Zoya Ansari", productId: "P020", productName: "Crimson Bridal Lehenga Set", rating: 5, text: "The bridal set was everything I hoped for. The team helped with alterations patiently.", date: "2026-03-22", status: "Pending", avatar: "avatar-zoya" },
  { id: "R6", customer: "Manasi Patil", productId: "P014", productName: "Rose Pink Statement Top", rating: 4, text: "Great everyday top, colour is exactly as shown on the website.", date: "2026-07-15", status: "Approved", avatar: "avatar-manasi" },
];
