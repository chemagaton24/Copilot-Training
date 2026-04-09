import type React from "react";

import { Text } from "@/components/frontend/ui/Text/Text";
import { buttonVariants } from "@/components/frontend/ui/Button/Button";
import { CustomLink } from "@/components/frontend/ui/Link/Link";
import { cn } from "@/utilities/ui";

export type DonationDriveTrackingContext = {
  block_placement: string;
};

export interface DonationDriveProps {
  title: string;
  description?: React.ReactNode;
  tagline?: string;
  supportingText?: string;
  additionalText?: string;
  donationURL: string;
  ctaText: string;
  withBg?: boolean;
  withSideSpacing?: boolean;
  withTopBorder?: boolean;
  className?: string;
  donationTrackingContext?: DonationDriveTrackingContext;
}

export const DonationDrive: React.FC<DonationDriveProps> = ({
  title,
  description,
  tagline,
  supportingText,
  additionalText,
  donationURL,
  ctaText,
  withBg = true,
  withSideSpacing = true,
  withTopBorder = true,
  className,
}) => {
  return (
    <section
      className={cn(
        {
          "bg-bg-base-brand-tertiary-tint": withBg,
          "border-t-3 border-border-link-default": withTopBorder,
        },
        className,
      )}
    >
      <div
        className={cn("flex flex-col gap-y-3 py-4 lg:py-6", {
          "px-4": withSideSpacing,
        })}
      >
        <div className="flex flex-col gap-y-3 border-y border-dashed border-border-base-tertiary py-3">
          <Text
            as="h2"
            breakpoints={{ default: "label-md-bold-condensed" }}
            className="text-text-base-primary"
          >
            {title}
          </Text>

          {description ? (
            <div className="font-body text-body-md leading-body-md tracking-body-md text-text-base-primary">
              {description}
            </div>
          ) : null}

          <Text
            as="span"
            breakpoints={{ default: "body-sm-regular-italic" }}
            className="text-text-base-secondary"
          >
            {tagline}
          </Text>
        </div>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <Text
              as="p"
              breakpoints={{ default: "body-sm-regular" }}
              className="mb-3 text-text-base-primary"
            >
              {supportingText}
            </Text>
            <Text
              as="p"
              breakpoints={{ default: "body-xs-regular" }}
              className="text-text-base-secondary"
            >
              {additionalText}
            </Text>
          </div>
          <div>
            <CustomLink
              href={donationURL}
              className={buttonVariants({ variant: "primary", size: "lg" })}
            >
              <Text breakpoints={{ default: "label-md-bold" }}>{ctaText}</Text>
            </CustomLink>
          </div>
        </div>
      </div>
    </section>
  );
};
