export type Customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  orders: number;
  totalSpent: number;
  status: "Active" | "Inactive";
  joined: string;
};

export const customers: Customer[] = [
  { id: "CU1", name: "Ananya Deshmukh", email: "ananya.d@example.com", phone: "+91 98220 41123", orders: 6, totalSpent: 18450, status: "Active", joined: "2025-11-04" },
  { id: "CU2", name: "Sneha Kulkarni", email: "sneha.k@example.com", phone: "+91 99700 88214", orders: 3, totalSpent: 8720, status: "Active", joined: "2026-01-19" },
  { id: "CU3", name: "Fatima Shaikh", email: "fatima.s@example.com", phone: "+91 90280 33907", orders: 9, totalSpent: 41200, status: "Active", joined: "2025-08-27" },
  { id: "CU4", name: "Priya Nair", email: "priya.nair@example.com", phone: "+91 88060 55471", orders: 1, totalSpent: 2499, status: "Inactive", joined: "2026-03-12" },
  { id: "CU5", name: "Ritika Jain", email: "ritika.jain@example.com", phone: "+91 97640 12008", orders: 4, totalSpent: 15380, status: "Active", joined: "2025-12-01" },
  { id: "CU6", name: "Manasi Patil", email: "manasi.p@example.com", phone: "+91 93710 66452", orders: 2, totalSpent: 5290, status: "Active", joined: "2026-02-14" },
  { id: "CU7", name: "Zoya Ansari", email: "zoya.a@example.com", phone: "+91 99217 74310", orders: 7, totalSpent: 26740, status: "Active", joined: "2025-09-30" },
  { id: "CU8", name: "Gauri Bhosale", email: "gauri.b@example.com", phone: "+91 82370 90188", orders: 0, totalSpent: 0, status: "Inactive", joined: "2026-04-08" },
];
