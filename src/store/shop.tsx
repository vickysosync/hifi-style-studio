import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { banners as seedBanners, type Banner } from "@/data/banners";
import { categories as seedCategories, type Category } from "@/data/categories";
import { coupons as seedCoupons, type Coupon } from "@/data/coupons";
import { customers as seedCustomers, type Customer } from "@/data/customers";
import { orders as seedOrders, type Order, type OrderStatus } from "@/data/orders";
import { products as seedProducts, type Product } from "@/data/products";
import { reviews as seedReviews, type Review } from "@/data/reviews";
import {
  homepageSections as seedSections,
  storeInfo,
  type HomepageSections,
  type StoreSettings,
} from "@/data/store";

export type CartLine = {
  productId: string;
  qty: number;
  size?: string;
  color?: string;
};

const KEY = "hifi:v1";

type Persisted = {
  cart: CartLine[];
  wishlist: string[];
  products: Product[];
  categories: Category[];
  banners: Banner[];
  coupons: Coupon[];
  reviews: Review[];
  orders: Order[];
  customers: Customer[];
  settings: StoreSettings;
  sections: HomepageSections;
  adminAuth: boolean;
};

const initial: Persisted = {
  cart: [],
  wishlist: [],
  products: seedProducts,
  categories: seedCategories,
  banners: seedBanners,
  coupons: seedCoupons,
  reviews: seedReviews,
  orders: seedOrders,
  customers: seedCustomers,
  settings: storeInfo,
  sections: seedSections,
  adminAuth: false,
};

type ShopContextValue = Persisted & {
  hydrated: boolean;
  update: (patch: Partial<Persisted>) => void;
  addToCart: (productId: string, qty?: number, size?: string, color?: string) => void;
  updateQty: (productId: string, qty: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  placeOrder: (order: Order) => void;
  setOrderStatus: (id: string, status: OrderStatus) => void;
  reset: () => void;
};

const ShopContext = createContext<ShopContextValue | null>(null);

export function ShopProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<Persisted>(initial);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setState((s) => ({ ...s, ...(JSON.parse(raw) as Partial<Persisted>) }));
    } catch {
      /* ignore malformed demo data */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch {
      /* storage full / unavailable */
    }
  }, [state, hydrated]);

  const update = useCallback((patch: Partial<Persisted>) => {
    setState((s) => ({ ...s, ...patch }));
  }, []);

  const addToCart = useCallback(
    (productId: string, qty = 1, size?: string, color?: string) => {
      setState((s) => {
        const existing = s.cart.find((l) => l.productId === productId);
        const cart = existing
          ? s.cart.map((l) =>
              l.productId === productId
                ? { ...l, qty: l.qty + qty, size: size ?? l.size, color: color ?? l.color }
                : l,
            )
          : [...s.cart, { productId, qty, size, color }];
        return { ...s, cart };
      });
    },
    [],
  );

  const updateQty = useCallback((productId: string, qty: number) => {
    setState((s) => ({
      ...s,
      cart:
        qty <= 0
          ? s.cart.filter((l) => l.productId !== productId)
          : s.cart.map((l) => (l.productId === productId ? { ...l, qty } : l)),
    }));
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setState((s) => ({ ...s, cart: s.cart.filter((l) => l.productId !== productId) }));
  }, []);

  const clearCart = useCallback(() => setState((s) => ({ ...s, cart: [] })), []);

  const toggleWishlist = useCallback((productId: string) => {
    setState((s) => ({
      ...s,
      wishlist: s.wishlist.includes(productId)
        ? s.wishlist.filter((id) => id !== productId)
        : [...s.wishlist, productId],
    }));
  }, []);

  const isWishlisted = useCallback(
    (productId: string) => state.wishlist.includes(productId),
    [state.wishlist],
  );

  const placeOrder = useCallback((order: Order) => {
    setState((s) => ({ ...s, orders: [order, ...s.orders], cart: [] }));
  }, []);

  const setOrderStatus = useCallback((id: string, status: OrderStatus) => {
    setState((s) => ({
      ...s,
      orders: s.orders.map((o) => (o.id === id ? { ...o, status } : o)),
    }));
  }, []);

  const reset = useCallback(() => {
    setState(initial);
  }, []);

  const value = useMemo<ShopContextValue>(
    () => ({
      ...state,
      hydrated,
      update,
      addToCart,
      updateQty,
      removeFromCart,
      clearCart,
      toggleWishlist,
      isWishlisted,
      placeOrder,
      setOrderStatus,
      reset,
    }),
    [
      state,
      hydrated,
      update,
      addToCart,
      updateQty,
      removeFromCart,
      clearCart,
      toggleWishlist,
      isWishlisted,
      placeOrder,
      setOrderStatus,
      reset,
    ],
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used inside ShopProvider");
  return ctx;
}

export function useCartLines() {
  const { cart, products } = useShop();
  return cart
    .map((line) => {
      const product = products.find((p) => p.id === line.productId);
      return product ? { ...line, product } : null;
    })
    .filter(Boolean) as Array<CartLine & { product: Product }>;
}
