// Mock product catalogue for the HIFI FASHIONS frontend demo.
export type Product = {
  id: string; sku: string; name: string; slug: string; category: string; categoryName: string;
  price: number; originalPrice: number; discount: number; rating: number; reviewCount: number;
  stock: number; image: string; gallery: string[]; sizes: string[]; colors: string[];
  fabric: string; fit: string; care: string; description: string;
  featured: boolean; newArrival: boolean; trending: boolean; createdAt: string; sold: number;
};

export const products: Product[] = [
  {
    "id": "P001",
    "sku": "HIFI-1001",
    "name": "Royal Wine Designer Saree",
    "slug": "royal-wine-designer-saree",
    "category": "sarees",
    "categoryName": "Sarees",
    "price": 2499,
    "originalPrice": 3499,
    "discount": 29,
    "rating": 3.8,
    "reviewCount": 12,
    "stock": 4,
    "image": "product-royal-wine-designer-saree",
    "gallery": [
      "product-royal-wine-designer-saree-g1",
      "product-royal-wine-designer-saree-g2",
      "product-royal-wine-designer-saree-g3"
    ],
    "sizes": [
      "XS",
      "S",
      "M"
    ],
    "colors": [
      "Wine",
      "Blush",
      "Black"
    ],
    "fabric": "Georgette",
    "fit": "Regular Fit",
    "care": "Dry clean recommended. Do not bleach. Warm iron on reverse.",
    "description": "Royal Wine Designer Saree from the HIFI FASHIONS studio in Chandan Nagar, Pune. Crafted in georgette with a refined sarees silhouette, it is finished with detailing that carries beautifully from daylight gatherings to evening celebrations.",
    "featured": true,
    "newArrival": true,
    "trending": false,
    "createdAt": "2026-01-01",
    "sold": 5
  },
  {
    "id": "P002",
    "sku": "HIFI-1002",
    "name": "Emerald Party Saree",
    "slug": "emerald-party-saree",
    "category": "sarees",
    "categoryName": "Sarees",
    "price": 3199,
    "originalPrice": 4499,
    "discount": 29,
    "rating": 4.5,
    "reviewCount": 25,
    "stock": 18,
    "image": "product-emerald-party-saree",
    "gallery": [
      "product-emerald-party-saree-g1",
      "product-emerald-party-saree-g2",
      "product-emerald-party-saree-g3"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      "Ivory",
      "Gold",
      "Navy"
    ],
    "fabric": "Satin Silk",
    "fit": "Relaxed Fit",
    "care": "Dry clean recommended. Do not bleach. Warm iron on reverse.",
    "description": "Emerald Party Saree from the HIFI FASHIONS studio in Chandan Nagar, Pune. Crafted in satin silk with a refined sarees silhouette, it is finished with detailing that carries beautifully from daylight gatherings to evening celebrations.",
    "featured": false,
    "newArrival": true,
    "trending": false,
    "createdAt": "2026-02-02",
    "sold": 22
  },
  {
    "id": "P003",
    "sku": "HIFI-1003",
    "name": "Golden Zari Silk Saree",
    "slug": "golden-zari-silk-saree",
    "category": "sarees",
    "categoryName": "Sarees",
    "price": 4299,
    "originalPrice": 5999,
    "discount": 28,
    "rating": 4,
    "reviewCount": 38,
    "stock": 32,
    "image": "product-golden-zari-silk-saree",
    "gallery": [
      "product-golden-zari-silk-saree-g1",
      "product-golden-zari-silk-saree-g2",
      "product-golden-zari-silk-saree-g3"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Emerald",
      "Black",
      "Rose"
    ],
    "fabric": "Kanjivaram Silk",
    "fit": "Slim Fit",
    "care": "Dry clean recommended. Do not bleach. Warm iron on reverse.",
    "description": "Golden Zari Silk Saree from the HIFI FASHIONS studio in Chandan Nagar, Pune. Crafted in kanjivaram silk with a refined sarees silhouette, it is finished with detailing that carries beautifully from daylight gatherings to evening celebrations.",
    "featured": false,
    "newArrival": true,
    "trending": false,
    "createdAt": "2026-03-03",
    "sold": 39
  },
  {
    "id": "P004",
    "sku": "HIFI-1004",
    "name": "Pastel Organza Saree",
    "slug": "pastel-organza-saree",
    "category": "sarees",
    "categoryName": "Sarees",
    "price": 1999,
    "originalPrice": 2899,
    "discount": 31,
    "rating": 4.7,
    "reviewCount": 51,
    "stock": 7,
    "image": "product-pastel-organza-saree",
    "gallery": [
      "product-pastel-organza-saree-g1",
      "product-pastel-organza-saree-g2",
      "product-pastel-organza-saree-g3"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Blush",
      "Navy",
      "Wine"
    ],
    "fabric": "Organza",
    "fit": "Flared",
    "care": "Dry clean recommended. Do not bleach. Warm iron on reverse.",
    "description": "Pastel Organza Saree from the HIFI FASHIONS studio in Chandan Nagar, Pune. Crafted in organza with a refined sarees silhouette, it is finished with detailing that carries beautifully from daylight gatherings to evening celebrations.",
    "featured": false,
    "newArrival": true,
    "trending": false,
    "createdAt": "2026-04-04",
    "sold": 56
  },
  {
    "id": "P005",
    "sku": "HIFI-1005",
    "name": "Ivory Festive Salwar Set",
    "slug": "ivory-festive-salwar-set",
    "category": "salwar-suits",
    "categoryName": "Salwar Suits",
    "price": 2799,
    "originalPrice": 3899,
    "discount": 28,
    "rating": 4.2,
    "reviewCount": 64,
    "stock": 25,
    "image": "product-ivory-festive-salwar-set",
    "gallery": [
      "product-ivory-festive-salwar-set-g1",
      "product-ivory-festive-salwar-set-g2",
      "product-ivory-festive-salwar-set-g3"
    ],
    "sizes": [
      "XS",
      "S",
      "M"
    ],
    "colors": [
      "Gold",
      "Rose",
      "Ivory"
    ],
    "fabric": "Chanderi",
    "fit": "Regular Fit",
    "care": "Dry clean recommended. Do not bleach. Warm iron on reverse.",
    "description": "Ivory Festive Salwar Set from the HIFI FASHIONS studio in Chandan Nagar, Pune. Crafted in chanderi with a refined salwar suits silhouette, it is finished with detailing that carries beautifully from daylight gatherings to evening celebrations.",
    "featured": false,
    "newArrival": true,
    "trending": false,
    "createdAt": "2026-05-05",
    "sold": 73
  },
  {
    "id": "P006",
    "sku": "HIFI-1006",
    "name": "Lavender Anarkali Suit",
    "slug": "lavender-anarkali-suit",
    "category": "salwar-suits",
    "categoryName": "Salwar Suits",
    "price": 3499,
    "originalPrice": 4799,
    "discount": 27,
    "rating": 4.9,
    "reviewCount": 77,
    "stock": 0,
    "image": "product-lavender-anarkali-suit",
    "gallery": [
      "product-lavender-anarkali-suit-g1",
      "product-lavender-anarkali-suit-g2",
      "product-lavender-anarkali-suit-g3"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      "Black",
      "Wine",
      "Emerald"
    ],
    "fabric": "Viscose Rayon",
    "fit": "Relaxed Fit",
    "care": "Dry clean recommended. Do not bleach. Warm iron on reverse.",
    "description": "Lavender Anarkali Suit from the HIFI FASHIONS studio in Chandan Nagar, Pune. Crafted in viscose rayon with a refined salwar suits silhouette, it is finished with detailing that carries beautifully from daylight gatherings to evening celebrations.",
    "featured": true,
    "newArrival": true,
    "trending": false,
    "createdAt": "2026-06-06",
    "sold": 90
  },
  {
    "id": "P007",
    "sku": "HIFI-1007",
    "name": "Teal Palazzo Suit Set",
    "slug": "teal-palazzo-suit-set",
    "category": "salwar-suits",
    "categoryName": "Salwar Suits",
    "price": 2199,
    "originalPrice": 2999,
    "discount": 27,
    "rating": 4.4,
    "reviewCount": 90,
    "stock": 14,
    "image": "product-teal-palazzo-suit-set",
    "gallery": [
      "product-teal-palazzo-suit-set-g1",
      "product-teal-palazzo-suit-set-g2",
      "product-teal-palazzo-suit-set-g3"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Ivory",
      "Blush"
    ],
    "fabric": "Cotton Blend",
    "fit": "Slim Fit",
    "care": "Dry clean recommended. Do not bleach. Warm iron on reverse.",
    "description": "Teal Palazzo Suit Set from the HIFI FASHIONS studio in Chandan Nagar, Pune. Crafted in cotton blend with a refined salwar suits silhouette, it is finished with detailing that carries beautifully from daylight gatherings to evening celebrations.",
    "featured": false,
    "newArrival": true,
    "trending": false,
    "createdAt": "2026-07-07",
    "sold": 107
  },
  {
    "id": "P008",
    "sku": "HIFI-1008",
    "name": "Blush Embroidered Sharara",
    "slug": "blush-embroidered-sharara",
    "category": "sharara",
    "categoryName": "Sharara",
    "price": 3899,
    "originalPrice": 5299,
    "discount": 26,
    "rating": 3.9,
    "reviewCount": 23,
    "stock": 41,
    "image": "product-blush-embroidered-sharara",
    "gallery": [
      "product-blush-embroidered-sharara-g1",
      "product-blush-embroidered-sharara-g2",
      "product-blush-embroidered-sharara-g3"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Rose",
      "Emerald",
      "Gold"
    ],
    "fabric": "Net & Silk",
    "fit": "Flared",
    "care": "Dry clean recommended. Do not bleach. Warm iron on reverse.",
    "description": "Blush Embroidered Sharara from the HIFI FASHIONS studio in Chandan Nagar, Pune. Crafted in net & silk with a refined sharara silhouette, it is finished with detailing that carries beautifully from daylight gatherings to evening celebrations.",
    "featured": false,
    "newArrival": true,
    "trending": false,
    "createdAt": "2026-08-08",
    "sold": 124
  },
  {
    "id": "P009",
    "sku": "HIFI-1009",
    "name": "Maroon Mirror Work Sharara",
    "slug": "maroon-mirror-work-sharara",
    "category": "sharara",
    "categoryName": "Sharara",
    "price": 4199,
    "originalPrice": 5699,
    "discount": 26,
    "rating": 4.6,
    "reviewCount": 36,
    "stock": 4,
    "image": "product-maroon-mirror-work-sharara",
    "gallery": [
      "product-maroon-mirror-work-sharara-g1",
      "product-maroon-mirror-work-sharara-g2",
      "product-maroon-mirror-work-sharara-g3"
    ],
    "sizes": [
      "XS",
      "S",
      "M"
    ],
    "colors": [
      "Wine",
      "Blush",
      "Black"
    ],
    "fabric": "Georgette",
    "fit": "Regular Fit",
    "care": "Dry clean recommended. Do not bleach. Warm iron on reverse.",
    "description": "Maroon Mirror Work Sharara from the HIFI FASHIONS studio in Chandan Nagar, Pune. Crafted in georgette with a refined sharara silhouette, it is finished with detailing that carries beautifully from daylight gatherings to evening celebrations.",
    "featured": false,
    "newArrival": true,
    "trending": false,
    "createdAt": "2026-01-09",
    "sold": 21
  },
  {
    "id": "P010",
    "sku": "HIFI-1010",
    "name": "Midnight Floral One Piece",
    "slug": "midnight-floral-one-piece",
    "category": "dresses",
    "categoryName": "Dresses",
    "price": 1699,
    "originalPrice": 2399,
    "discount": 29,
    "rating": 4.1,
    "reviewCount": 49,
    "stock": 18,
    "image": "product-midnight-floral-one-piece",
    "gallery": [
      "product-midnight-floral-one-piece-g1",
      "product-midnight-floral-one-piece-g2",
      "product-midnight-floral-one-piece-g3"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      "Ivory",
      "Gold",
      "Navy"
    ],
    "fabric": "Crepe",
    "fit": "Relaxed Fit",
    "care": "Dry clean recommended. Do not bleach. Warm iron on reverse.",
    "description": "Midnight Floral One Piece from the HIFI FASHIONS studio in Chandan Nagar, Pune. Crafted in crepe with a refined dresses silhouette, it is finished with detailing that carries beautifully from daylight gatherings to evening celebrations.",
    "featured": false,
    "newArrival": true,
    "trending": false,
    "createdAt": "2026-02-10",
    "sold": 38
  },
  {
    "id": "P011",
    "sku": "HIFI-1011",
    "name": "Ivory Ruffle Midi Dress",
    "slug": "ivory-ruffle-midi-dress",
    "category": "dresses",
    "categoryName": "Dresses",
    "price": 1899,
    "originalPrice": 2699,
    "discount": 30,
    "rating": 4.8,
    "reviewCount": 62,
    "stock": 32,
    "image": "product-ivory-ruffle-midi-dress",
    "gallery": [
      "product-ivory-ruffle-midi-dress-g1",
      "product-ivory-ruffle-midi-dress-g2",
      "product-ivory-ruffle-midi-dress-g3"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Emerald",
      "Black",
      "Rose"
    ],
    "fabric": "Poly Crepe",
    "fit": "Slim Fit",
    "care": "Dry clean recommended. Do not bleach. Warm iron on reverse.",
    "description": "Ivory Ruffle Midi Dress from the HIFI FASHIONS studio in Chandan Nagar, Pune. Crafted in poly crepe with a refined dresses silhouette, it is finished with detailing that carries beautifully from daylight gatherings to evening celebrations.",
    "featured": true,
    "newArrival": true,
    "trending": false,
    "createdAt": "2026-03-11",
    "sold": 55
  },
  {
    "id": "P012",
    "sku": "HIFI-1012",
    "name": "Wine Bodycon Party Dress",
    "slug": "wine-bodycon-party-dress",
    "category": "dresses",
    "categoryName": "Dresses",
    "price": 2099,
    "originalPrice": 2999,
    "discount": 30,
    "rating": 4.3,
    "reviewCount": 75,
    "stock": 7,
    "image": "product-wine-bodycon-party-dress",
    "gallery": [
      "product-wine-bodycon-party-dress-g1",
      "product-wine-bodycon-party-dress-g2",
      "product-wine-bodycon-party-dress-g3"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Blush",
      "Navy",
      "Wine"
    ],
    "fabric": "Scuba Knit",
    "fit": "Flared",
    "care": "Dry clean recommended. Do not bleach. Warm iron on reverse.",
    "description": "Wine Bodycon Party Dress from the HIFI FASHIONS studio in Chandan Nagar, Pune. Crafted in scuba knit with a refined dresses silhouette, it is finished with detailing that carries beautifully from daylight gatherings to evening celebrations.",
    "featured": false,
    "newArrival": true,
    "trending": false,
    "createdAt": "2026-04-12",
    "sold": 72
  },
  {
    "id": "P013",
    "sku": "HIFI-1013",
    "name": "Olive Wrap Maxi Dress",
    "slug": "olive-wrap-maxi-dress",
    "category": "dresses",
    "categoryName": "Dresses",
    "price": 2299,
    "originalPrice": 3199,
    "discount": 28,
    "rating": 3.8,
    "reviewCount": 88,
    "stock": 25,
    "image": "product-olive-wrap-maxi-dress",
    "gallery": [
      "product-olive-wrap-maxi-dress-g1",
      "product-olive-wrap-maxi-dress-g2",
      "product-olive-wrap-maxi-dress-g3"
    ],
    "sizes": [
      "XS",
      "S",
      "M"
    ],
    "colors": [
      "Gold",
      "Rose",
      "Ivory"
    ],
    "fabric": "Rayon",
    "fit": "Regular Fit",
    "care": "Dry clean recommended. Do not bleach. Warm iron on reverse.",
    "description": "Olive Wrap Maxi Dress from the HIFI FASHIONS studio in Chandan Nagar, Pune. Crafted in rayon with a refined dresses silhouette, it is finished with detailing that carries beautifully from daylight gatherings to evening celebrations.",
    "featured": false,
    "newArrival": false,
    "trending": true,
    "createdAt": "2026-05-13",
    "sold": 89
  },
  {
    "id": "P014",
    "sku": "HIFI-1014",
    "name": "Rose Pink Statement Top",
    "slug": "rose-pink-statement-top",
    "category": "tops",
    "categoryName": "Tops",
    "price": 899,
    "originalPrice": 1299,
    "discount": 31,
    "rating": 4.5,
    "reviewCount": 21,
    "stock": 0,
    "image": "product-rose-pink-statement-top",
    "gallery": [
      "product-rose-pink-statement-top-g1",
      "product-rose-pink-statement-top-g2",
      "product-rose-pink-statement-top-g3"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      "Black",
      "Wine",
      "Emerald"
    ],
    "fabric": "Cotton Poplin",
    "fit": "Relaxed Fit",
    "care": "Dry clean recommended. Do not bleach. Warm iron on reverse.",
    "description": "Rose Pink Statement Top from the HIFI FASHIONS studio in Chandan Nagar, Pune. Crafted in cotton poplin with a refined tops silhouette, it is finished with detailing that carries beautifully from daylight gatherings to evening celebrations.",
    "featured": false,
    "newArrival": false,
    "trending": true,
    "createdAt": "2026-06-14",
    "sold": 106
  },
  {
    "id": "P015",
    "sku": "HIFI-1015",
    "name": "Ivory Puff Sleeve Blouse",
    "slug": "ivory-puff-sleeve-blouse",
    "category": "tops",
    "categoryName": "Tops",
    "price": 1099,
    "originalPrice": 1499,
    "discount": 27,
    "rating": 4,
    "reviewCount": 34,
    "stock": 14,
    "image": "product-ivory-puff-sleeve-blouse",
    "gallery": [
      "product-ivory-puff-sleeve-blouse-g1",
      "product-ivory-puff-sleeve-blouse-g2",
      "product-ivory-puff-sleeve-blouse-g3"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Ivory",
      "Blush"
    ],
    "fabric": "Georgette",
    "fit": "Slim Fit",
    "care": "Dry clean recommended. Do not bleach. Warm iron on reverse.",
    "description": "Ivory Puff Sleeve Blouse from the HIFI FASHIONS studio in Chandan Nagar, Pune. Crafted in georgette with a refined tops silhouette, it is finished with detailing that carries beautifully from daylight gatherings to evening celebrations.",
    "featured": false,
    "newArrival": false,
    "trending": true,
    "createdAt": "2026-07-15",
    "sold": 123
  },
  {
    "id": "P016",
    "sku": "HIFI-1016",
    "name": "Striped Casual Crop Top",
    "slug": "striped-casual-crop-top",
    "category": "tops",
    "categoryName": "Tops",
    "price": 749,
    "originalPrice": 1099,
    "discount": 32,
    "rating": 4.7,
    "reviewCount": 47,
    "stock": 41,
    "image": "product-striped-casual-crop-top",
    "gallery": [
      "product-striped-casual-crop-top-g1",
      "product-striped-casual-crop-top-g2",
      "product-striped-casual-crop-top-g3"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Rose",
      "Emerald",
      "Gold"
    ],
    "fabric": "Cotton Jersey",
    "fit": "Flared",
    "care": "Dry clean recommended. Do not bleach. Warm iron on reverse.",
    "description": "Striped Casual Crop Top from the HIFI FASHIONS studio in Chandan Nagar, Pune. Crafted in cotton jersey with a refined tops silhouette, it is finished with detailing that carries beautifully from daylight gatherings to evening celebrations.",
    "featured": true,
    "newArrival": false,
    "trending": true,
    "createdAt": "2026-08-16",
    "sold": 20
  },
  {
    "id": "P017",
    "sku": "HIFI-1017",
    "name": "Classic High-Rise Denim",
    "slug": "classic-high-rise-denim",
    "category": "jeans",
    "categoryName": "Jeans",
    "price": 1599,
    "originalPrice": 2299,
    "discount": 30,
    "rating": 4.2,
    "reviewCount": 60,
    "stock": 4,
    "image": "product-classic-high-rise-denim",
    "gallery": [
      "product-classic-high-rise-denim-g1",
      "product-classic-high-rise-denim-g2",
      "product-classic-high-rise-denim-g3"
    ],
    "sizes": [
      "XS",
      "S",
      "M"
    ],
    "colors": [
      "Wine",
      "Blush",
      "Black"
    ],
    "fabric": "Stretch Denim",
    "fit": "Regular Fit",
    "care": "Dry clean recommended. Do not bleach. Warm iron on reverse.",
    "description": "Classic High-Rise Denim from the HIFI FASHIONS studio in Chandan Nagar, Pune. Crafted in stretch denim with a refined jeans silhouette, it is finished with detailing that carries beautifully from daylight gatherings to evening celebrations.",
    "featured": false,
    "newArrival": false,
    "trending": true,
    "createdAt": "2026-01-17",
    "sold": 37
  },
  {
    "id": "P018",
    "sku": "HIFI-1018",
    "name": "Wide Leg Blue Jeans",
    "slug": "wide-leg-blue-jeans",
    "category": "jeans",
    "categoryName": "Jeans",
    "price": 1799,
    "originalPrice": 2499,
    "discount": 28,
    "rating": 4.9,
    "reviewCount": 73,
    "stock": 18,
    "image": "product-wide-leg-blue-jeans",
    "gallery": [
      "product-wide-leg-blue-jeans-g1",
      "product-wide-leg-blue-jeans-g2",
      "product-wide-leg-blue-jeans-g3"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      "Ivory",
      "Gold",
      "Navy"
    ],
    "fabric": "Rigid Denim",
    "fit": "Relaxed Fit",
    "care": "Dry clean recommended. Do not bleach. Warm iron on reverse.",
    "description": "Wide Leg Blue Jeans from the HIFI FASHIONS studio in Chandan Nagar, Pune. Crafted in rigid denim with a refined jeans silhouette, it is finished with detailing that carries beautifully from daylight gatherings to evening celebrations.",
    "featured": false,
    "newArrival": false,
    "trending": true,
    "createdAt": "2026-02-18",
    "sold": 54
  },
  {
    "id": "P019",
    "sku": "HIFI-1019",
    "name": "Black Skinny Fit Jeans",
    "slug": "black-skinny-fit-jeans",
    "category": "jeans",
    "categoryName": "Jeans",
    "price": 1499,
    "originalPrice": 2099,
    "discount": 29,
    "rating": 4.4,
    "reviewCount": 86,
    "stock": 32,
    "image": "product-black-skinny-fit-jeans",
    "gallery": [
      "product-black-skinny-fit-jeans-g1",
      "product-black-skinny-fit-jeans-g2",
      "product-black-skinny-fit-jeans-g3"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Emerald",
      "Black",
      "Rose"
    ],
    "fabric": "Stretch Denim",
    "fit": "Slim Fit",
    "care": "Dry clean recommended. Do not bleach. Warm iron on reverse.",
    "description": "Black Skinny Fit Jeans from the HIFI FASHIONS studio in Chandan Nagar, Pune. Crafted in stretch denim with a refined jeans silhouette, it is finished with detailing that carries beautifully from daylight gatherings to evening celebrations.",
    "featured": false,
    "newArrival": false,
    "trending": true,
    "createdAt": "2026-03-19",
    "sold": 71
  },
  {
    "id": "P020",
    "sku": "HIFI-1020",
    "name": "Crimson Bridal Lehenga Set",
    "slug": "crimson-bridal-lehenga-set",
    "category": "bridal-wear",
    "categoryName": "Bridal Wear",
    "price": 12999,
    "originalPrice": 18999,
    "discount": 32,
    "rating": 3.9,
    "reviewCount": 19,
    "stock": 7,
    "image": "product-crimson-bridal-lehenga-set",
    "gallery": [
      "product-crimson-bridal-lehenga-set-g1",
      "product-crimson-bridal-lehenga-set-g2",
      "product-crimson-bridal-lehenga-set-g3"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Blush",
      "Navy",
      "Wine"
    ],
    "fabric": "Raw Silk",
    "fit": "Flared",
    "care": "Dry clean recommended. Do not bleach. Warm iron on reverse.",
    "description": "Crimson Bridal Lehenga Set from the HIFI FASHIONS studio in Chandan Nagar, Pune. Crafted in raw silk with a refined bridal wear silhouette, it is finished with detailing that carries beautifully from daylight gatherings to evening celebrations.",
    "featured": false,
    "newArrival": false,
    "trending": true,
    "createdAt": "2026-04-20",
    "sold": 88
  },
  {
    "id": "P021",
    "sku": "HIFI-1021",
    "name": "Regal Gold Bridal Saree",
    "slug": "regal-gold-bridal-saree",
    "category": "bridal-wear",
    "categoryName": "Bridal Wear",
    "price": 9999,
    "originalPrice": 14499,
    "discount": 31,
    "rating": 4.6,
    "reviewCount": 32,
    "stock": 25,
    "image": "product-regal-gold-bridal-saree",
    "gallery": [
      "product-regal-gold-bridal-saree-g1",
      "product-regal-gold-bridal-saree-g2",
      "product-regal-gold-bridal-saree-g3"
    ],
    "sizes": [
      "XS",
      "S",
      "M"
    ],
    "colors": [
      "Gold",
      "Rose",
      "Ivory"
    ],
    "fabric": "Banarasi Silk",
    "fit": "Regular Fit",
    "care": "Dry clean recommended. Do not bleach. Warm iron on reverse.",
    "description": "Regal Gold Bridal Saree from the HIFI FASHIONS studio in Chandan Nagar, Pune. Crafted in banarasi silk with a refined bridal wear silhouette, it is finished with detailing that carries beautifully from daylight gatherings to evening celebrations.",
    "featured": true,
    "newArrival": false,
    "trending": true,
    "createdAt": "2026-05-21",
    "sold": 105
  },
  {
    "id": "P022",
    "sku": "HIFI-1022",
    "name": "Rani Pink Festive Gharara",
    "slug": "rani-pink-festive-gharara",
    "category": "festive-wear",
    "categoryName": "Festive Wear",
    "price": 4599,
    "originalPrice": 6299,
    "discount": 27,
    "rating": 4.1,
    "reviewCount": 45,
    "stock": 0,
    "image": "product-rani-pink-festive-gharara",
    "gallery": [
      "product-rani-pink-festive-gharara-g1",
      "product-rani-pink-festive-gharara-g2",
      "product-rani-pink-festive-gharara-g3"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      "Black",
      "Wine",
      "Emerald"
    ],
    "fabric": "Silk Blend",
    "fit": "Relaxed Fit",
    "care": "Dry clean recommended. Do not bleach. Warm iron on reverse.",
    "description": "Rani Pink Festive Gharara from the HIFI FASHIONS studio in Chandan Nagar, Pune. Crafted in silk blend with a refined festive wear silhouette, it is finished with detailing that carries beautifully from daylight gatherings to evening celebrations.",
    "featured": false,
    "newArrival": false,
    "trending": true,
    "createdAt": "2026-06-22",
    "sold": 122
  },
  {
    "id": "P023",
    "sku": "HIFI-1023",
    "name": "Peach Sequin Festive Kurta",
    "slug": "peach-sequin-festive-kurta",
    "category": "festive-wear",
    "categoryName": "Festive Wear",
    "price": 2899,
    "originalPrice": 3999,
    "discount": 28,
    "rating": 4.8,
    "reviewCount": 58,
    "stock": 14,
    "image": "product-peach-sequin-festive-kurta",
    "gallery": [
      "product-peach-sequin-festive-kurta-g1",
      "product-peach-sequin-festive-kurta-g2",
      "product-peach-sequin-festive-kurta-g3"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Ivory",
      "Blush"
    ],
    "fabric": "Georgette",
    "fit": "Slim Fit",
    "care": "Dry clean recommended. Do not bleach. Warm iron on reverse.",
    "description": "Peach Sequin Festive Kurta from the HIFI FASHIONS studio in Chandan Nagar, Pune. Crafted in georgette with a refined festive wear silhouette, it is finished with detailing that carries beautifully from daylight gatherings to evening celebrations.",
    "featured": false,
    "newArrival": false,
    "trending": true,
    "createdAt": "2026-07-23",
    "sold": 19
  },
  {
    "id": "P024",
    "sku": "HIFI-1024",
    "name": "Copper Glow Festive Saree",
    "slug": "copper-glow-festive-saree",
    "category": "festive-wear",
    "categoryName": "Festive Wear",
    "price": 3599,
    "originalPrice": 4899,
    "discount": 27,
    "rating": 4.3,
    "reviewCount": 71,
    "stock": 41,
    "image": "product-copper-glow-festive-saree",
    "gallery": [
      "product-copper-glow-festive-saree-g1",
      "product-copper-glow-festive-saree-g2",
      "product-copper-glow-festive-saree-g3"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Rose",
      "Emerald",
      "Gold"
    ],
    "fabric": "Tissue Silk",
    "fit": "Flared",
    "care": "Dry clean recommended. Do not bleach. Warm iron on reverse.",
    "description": "Copper Glow Festive Saree from the HIFI FASHIONS studio in Chandan Nagar, Pune. Crafted in tissue silk with a refined festive wear silhouette, it is finished with detailing that carries beautifully from daylight gatherings to evening celebrations.",
    "featured": false,
    "newArrival": false,
    "trending": true,
    "createdAt": "2026-08-24",
    "sold": 36
  }
];
