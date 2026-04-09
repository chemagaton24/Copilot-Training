"use client";

import type React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

import type { TestableProps } from "@/components/frontend/types";
import { cn } from "@/utilities/ui";

const buttonVariants = cva("", {
  variants: {
    variant: {
      primary: "",
      secondary: "",
      tertiary: "bg-transparent",
    },
    size: {
      sm: "px-2 py-1.5 gap-1 font-label text-label-sm leading-label-sm tracking-label-sm [&_svg]:size-3",
      md: "px-3 py-2.5 gap-1_5 font-label text-label-md leading-label-md tracking-label-md [&_svg]:size-4",
      lg: "px-4 py-2.5 gap-1_5 font-label text-label-lg leading-label-lg tracking-label-lg [&_svg]:size-4",
      "icon-sm": "p-2 [&_svg]:size-3",
      "icon-md": "p-3 [&_svg]:size-4",
      "icon-lg": "p-3.5 [&_svg]:size-4",
    },
    disabled: {
      true: "pointer-events-none",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
  compoundVariants: [
    {
      variant: ["primary", "secondary", "tertiary"],
      className:
        "font-bold inline-flex items-center justify-center whitespace-nowrap rounded-full cursor-pointer focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-dashed focus-visible:outline-border-focus-outer",
    },
    {
      variant: ["primary"],
      className:
        "outline-bg-button-primary-default bg-bg-button-primary-default text-text-button-primary-base-default focus-visible:text-text-button-primary-base-default hover:bg-bg-button-primary-hover hover:text-text-button-primary-base-hover active:bg-bg-button-primary-active active:text-text-button-primary-base-active,",
    },
    {
      variant: ["secondary"],
      className: cn(
        "relative bg-bg-button-secondary-default text-text-button-secondary-base-default outline-border-button-secondary-default hover:bg-bg-button-secondary-hover hover:text-text-button-secondary-base-hover focus-visible:text-text-button-secondary-base-default hover:[&_svg]:text-text-button-secondary-icon-hover",
        "before:pointer-events-none before:absolute before:left-0 before:top-0 before:size-full before:rounded-full before:border before:border-border-button-secondary-default hover:before:border-border-button-secondary-hover active:before:border-border-button-secondary-active",
      ),
    },
    {
      variant: ["tertiary"],
      className: cn(
        "relative bg-bg-button-tertiary-default text-text-button-tertiary-base-default outline-border-button-tertiary-default hover:bg-bg-button-tertiary-hover hover:text-text-button-tertiary-base-hover hover:[&_svg]:text-text-button-tertiary-icon-hover",
        "before:pointer-events-none before:absolute before:left-0 before:top-0 before:size-full before:rounded-full before:border before:border-border-button-tertiary-default hover:before:border-border-button-tertiary-hover active:before:border-border-button-tertiary-active",
      ),
    },
    {
      variant: ["primary"],
      disabled: true,
      className: "bg-bg-button-primary-disabled text-text-button-primary-base-disabled",
    },
    {
      variant: ["secondary"],
      disabled: true,
      className:
        "before:border-border-button-secondary-disabled text-text-button-secondary-icon-disabled [&_svg]:text-text-button-secondary-icon-disabled",
    },
  ],
});

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

// eslint-disable-next-line react-refresh/only-export-components -- CVA variants consumed by other components
export { Button, buttonVariants };
