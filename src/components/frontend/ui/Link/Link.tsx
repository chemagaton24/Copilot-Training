import type { ComponentProps } from "react";
import Link from "next/link";

import { cn } from "@/utilities/ui";

export function CustomLink({
  className,
  ...props
}: ComponentProps<typeof Link>) {
  return <Link className={cn(className)} {...props} />;
}
