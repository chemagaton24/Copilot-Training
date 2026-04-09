import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
import tailwindConfig from "../../tailwind.config";

const twMerge = extendTailwindMerge({
  override: {
    classGroups: {
      "font-size": [
        {
          text: Object.keys(tailwindConfig?.theme?.extend?.fontSize ?? {}),
        },
      ],
      "font-family": Object.keys(tailwindConfig?.theme?.extend?.fontFamily ?? {}),
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
