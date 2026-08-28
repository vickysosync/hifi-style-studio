export type OrderStatus = "Processing" | "Confirmed" | "Shipped" | "Delivered" | "Cancelled";

export type OrderItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  qty: number;
  size?: string | undefined;
  color?: string | undefined;
};

export type Order = {
  id: string;
  customer: string;
  email: string;
  phone: string;
  date: string;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  delivery: number;
  total: number;
  status: OrderStatus;
  payment: string;
  address: string;
};

export const orders: Order[] = [
  {
    id: "HF-100241", customer: "Ananya Deshmukh", email: "ananya.d@example.com", phone: "+91 98220 41123",
    date: "2026-08-21",
    items: [
      { id: "P001", name: "Royal Wine Designer Saree", image: "product-royal-wine-designer-saree", price: 2499, qty: 1, size: "M", color: "Wine" },
      { id: "P014", name: "Rose Pink Statement Top", image: "product-rose-pink-statement-top", price: 899, qty: 2, size: "S", color: "Rose" },
    ],
    subtotal: 4297, discount: 430, delivery: 0, total: 3867, status: "Delivered", payment: "UPI",
    address: "Flat 402, Sai Residency, Kharadi, Pune 411014",
  },
  {
    id: "HF-100242", customer: "Fatima Shaikh", email: "fatima.s@example.com", phone: "+91 90280 33907",
    date: "2026-08-24",
    items: [{ id: "P008", name: "Blush Embroidered Sharara", image: "product-blush-embroidered-sharara", price: 3899, qty: 1, size: "L", color: "Blush" }],
    subtotal: 3899, discount: 0, delivery: 0, total: 3899, status: "Shipped", payment: "Card",
    address: "B-12, Rose Enclave, Viman Nagar, Pune 411014",
  },
  {
    id: "HF-100243", customer: "Sneha Kulkarni", email: "sneha.k@example.com", phone: "+91 99700 88214",
    date: "2026-08-25",
    items: [{ id: "P010", name: "Midnight Floral One Piece", image: "product-midnight-floral-one-piece", price: 1699, qty: 1, size: "M", color: "Navy" }],
    subtotal: 1699, discount: 170, delivery: 79, total: 1608, status: "Processing", payment: "Cash on Delivery",
    address: "Lane 5, Chandan Nagar, Wadgaon Sheri, Pune 411014",
  },
  {
    id: "HF-100244", customer: "Zoya Ansari", email: "zoya.a@example.com", phone: "+91 99217 74310",
    date: "2026-08-26",
    items: [{ id: "P020", name: "Crimson Bridal Lehenga Set", image: "product-crimson-bridal-lehenga-set", price: 12999, qty: 1, size: "M", color: "Wine" }],
    subtotal: 12999, discount: 1950, delivery: 0, total: 11049, status: "Confirmed", payment: "UPI",
    address: "301, Green Meadows, Kalyani Nagar, Pune 411006",
  },
  {
    id: "HF-100245", customer: "Ritika Jain", email: "ritika.jain@example.com", phone: "+91 97640 12008",
    date: "2026-08-27",
    items: [{ id: "P017", name: "Classic High-Rise Denim", image: "product-classic-high-rise-denim", price: 1599, qty: 2, size: "28", color: "Blue" }],
    subtotal: 3198, discount: 0, delivery: 0, total: 3198, status: "Processing", payment: "Card",
    address: "A-9, Silver Oak, Wadgaon Sheri, Pune 411014",
  },
  {
    id: "HF-100246", customer: "Manasi Patil", email: "manasi.p@example.com", phone: "+91 93710 66452",
    date: "2026-08-27",
    items: [{ id: "P006", name: "Lavender Anarkali Suit", image: "product-lavender-anarkali-suit", price: 3499, qty: 1, size: "L", color: "Lavender" }],
    subtotal: 3499, discount: 350, delivery: 0, total: 3149, status: "Cancelled", payment: "Cash on Delivery",
    address: "Plot 22, Shivaji Chowk, Chandan Nagar, Pune 411014",
  },
];
