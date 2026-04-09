import type { ElementType, HTMLAttributes, LabelHTMLAttributes, ReactNode } from "react";

import type { TestableProps } from "@/components/frontend/types";
import { cn } from "@/utilities/ui";

import { textVariants } from "./Text.typographies";

type TextVariant = keyof typeof textVariants;
type Breakpoint = keyof (typeof textVariants)["heading-md-bold-condensed"];
interface BreakpointObject {
  [key: string]: TextVariant;
}
interface TextProps
  extends HTMLAttributes<HTMLElement>,
    LabelHTMLAttributes<HTMLElement>,
    TestableProps {
  as?: ElementType;
  children: ReactNode;
  breakpoints?: BreakpointObject;
}
export const Text = ({
  as: Tag = "span",
  children,
  breakpoints = {},
  className,
  "data-testid": dataTestId,
  ...rest
}: TextProps) => {
  const classes = Object.keys(breakpoints)
    .map((bp) => {
      const variant = breakpoints[bp as Breakpoint];
      // Typography variant keys are a fixed union; runtime values always match `textVariants`.
      // eslint-disable-next-line security/detect-object-injection -- keyed by TypographyTypes
      const variantStyles = variant ? textVariants[variant] : undefined;
      if (variant && variantStyles && bp in variantStyles) {
        return variantStyles[bp as Breakpoint];
      }
      return "";
    })
    .join(" ");

  return (
    <Tag className={cn(classes, className)} data-testid={dataTestId ?? "text"} {...rest}>
      {children}
    </Tag>
  );
};
