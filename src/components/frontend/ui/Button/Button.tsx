"use client";

import type React from "react";
import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "class-variance-authority";

import type { TestableProps } from "@/components/frontend/types";
import { cn } from "@/utilities/ui";

import { buttonVariants } from "./buttonVariants";

type ButtonBaseProps = Omit<React.ComponentProps<"button">, "disabled">;

interface ButtonProps
  extends ButtonBaseProps,
    VariantProps<typeof buttonVariants>,
    TestableProps {
  asChild?: boolean;
  disabled?: boolean;
}

function Button({
  className,
  variant,
  size,
  disabled,
  asChild = false,
  "data-testid": dataTestId,
  ...props
}: Readonly<ButtonProps>) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-testid={dataTestId ?? "button"}
      className={cn(buttonVariants({ variant, size, disabled }), className)}
      disabled={disabled}
      {...props}
    />
  );
}

export { Button };
