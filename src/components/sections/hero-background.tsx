"use client";

import { memo } from "react";
import { Waves } from "@/components/ui/wave-background";

/*
 * Isolated + memoized: hero re-renders (locale change, scroll transforms)
 * never touch this subtree.
 *
 * Transparent background + top/bottom fade mask — the page background flows
 * straight through into the next section, so there is no visible seam.
 */
export const HeroBackground = memo(function HeroBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 text-foreground/12 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_72%,transparent)]"
    >
      <Waves strokeColor="currentColor" backgroundColor="transparent" />
    </div>
  );
});
