export const storeInfo = {
  businessName: "HIFI FASHIONS",
  tagline: "Your Style. Your Statement.",
  phone: "+91 99217 12268",
  email: "supporthififashons@gmail.com",
  address:
    "Mathura Housing Society, Near Shivaji Chowk, Chandan Nagar, Wadgaon Sheri, Pune, Maharashtra 411014",
  instagram: "@hififashions.pune",
  facebook: "/hififashionspune",
  whatsapp: "+91 99217 12268",
  currency: "INR",
  shippingCharge: 79,
  freeShippingThreshold: 1999,
};

export type StoreSettings = typeof storeInfo;

export const homepageSections = {
  heroBanners: true,
  newArrivals: true,
  featuredCollection: true,
  trendingProducts: true,
  promoBanner: true,
  testimonials: true,
  newsletter: true,
};

export type HomepageSections = typeof homepageSections;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Sarees", to: "/category/sarees" },
  { label: "Ethnic Wear", to: "/category/salwar-suits" },
  { label: "Western Wear", to: "/category/tops" },
  { label: "Dresses", to: "/category/dresses" },
  { label: "Festive Wear", to: "/category/festive-wear" },
  { label: "New Arrivals", to: "/shop", search: { sort: "newest" } },
  { label: "Sale", to: "/shop", search: { sort: "discount" } },
  { label: "Contact", to: "/contact" },
];
