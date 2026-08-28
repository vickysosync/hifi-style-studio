import { Link } from "@tanstack/react-router";
import { Eye, Heart, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

import { Img } from "@/components/site/Img";
import { Stars } from "@/components/site/Stars";
import type { Product } from "@/data/products";
import { inr } from "@/lib/format";
import { cn } from "@/lib/utils";
import { useShop } from "@/store/shop";

export function ProductCard({
  product,
  onQuickView,
}: {
  product: Product;
  onQuickView?: (product: Product) => void;
}) {
  const { addToCart, toggleWishlist, isWishlisted } = useShop();
  const wished = isWishlisted(product.id);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card transition duration-300 hover:shadow-[var(--shadow-lift)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
        <Link
          to="/product/$id"
          params={{ id: product.id }}
          aria-label={product.name}
          className="block h-full w-full"
        >
          <Img
            seed={product.image}
            alt={product.name}
            className="transition-transform duration-700 group-hover:scale-105"
          />
        </Link>

        {product.discount > 0 ? (
          <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[11px] font-medium tracking-wide text-primary-foreground">
            {product.discount}% OFF
          </span>
        ) : null}
        {product.stock === 0 ? (
          <span className="absolute right-3 top-3 rounded-full bg-foreground/85 px-2.5 py-1 text-[11px] text-background">
            Sold out
          </span>
        ) : null}

        <button
          type="button"
          onClick={() => {
            toggleWishlist(product.id);
            toast.success(wished ? "Removed from wishlist" : "Saved to wishlist");
          }}
          aria-label="Toggle wishlist"
          className={cn(
            "absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-card/90 backdrop-blur transition hover:bg-card",
            wished ? "text-primary" : "text-muted-foreground",
          )}
        >
          <Heart size={16} className={wished ? "fill-primary" : ""} />
        </button>

        <div className="pointer-events-none absolute inset-x-3 bottom-3 flex translate-y-3 gap-2 opacity-0 transition duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
          {onQuickView ? (
            <button
              type="button"
              onClick={() => onQuickView(product)}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-card/95 px-3 py-2 text-xs font-medium text-foreground shadow-[var(--shadow-soft)] backdrop-blur transition hover:bg-card"
            >
              <Eye size={14} /> Quick View
            </button>
          ) : null}
          <button
            type="button"
            disabled={product.stock === 0}
            onClick={() => {
              addToCart(product.id, 1, product.sizes[0], product.colors[0]);
              toast.success(`${product.name} added to bag`);
            }}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-primary px-3 py-2 text-xs font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition hover:bg-primary-deep disabled:opacity-50"
          >
            <ShoppingBag size={14} /> Add
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {product.categoryName}
        </p>
        <Link
          to="/product/$id"
          params={{ id: product.id }}
          className="font-display text-lg leading-snug text-foreground transition hover:text-primary"
        >
          {product.name}
        </Link>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Stars rating={product.rating} size={12} />
          <span>({product.reviewCount})</span>
        </div>
        <div className="mt-auto flex items-baseline gap-2 pt-2">
          <span className="text-base font-semibold text-foreground">{inr(product.price)}</span>
          <span className="text-sm text-muted-foreground line-through">
            {inr(product.originalPrice)}
          </span>
          <span className="text-xs font-medium text-primary">{product.discount}% OFF</span>
        </div>
      </div>
    </article>
  );
}
