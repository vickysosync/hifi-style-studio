import { useState } from "react";

import { FALLBACK_IMAGE, imageFor } from "@/lib/images";
import { cn } from "@/lib/utils";

type ImgProps = {
  /** Unique image seed — never reuse a seed anywhere in the app. */
  seed: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  eager?: boolean;
};

export function Img({ seed, alt, className, width = 800, height = 1000, eager }: ImgProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={failed ? FALLBACK_IMAGE : imageFor(seed, width, height)}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      onLoad={() => setLoaded(true)}
      className={cn(
        "h-full w-full object-cover transition-opacity duration-500",
        loaded || failed ? "opacity-100" : "opacity-0",
        className,
      )}
    />
  );
}
