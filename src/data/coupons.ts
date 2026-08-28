export type Coupon = {
  id: string;
  code: string;
  description: string;
  percent: number;
  minOrder: number;
  active: boolean;
};

export const coupons: Coupon[] = [
  { id: "CP1", code: "HIFI10", description: "10% off on all orders", percent: 10, minOrder: 999, active: true },
  { id: "CP2", code: "FASHION15", description: "15% off above ₹2,999", percent: 15, minOrder: 2999, active: true },
  { id: "CP3", code: "FESTIVE20", description: "20% off festive edit", percent: 20, minOrder: 4999, active: false },
];
