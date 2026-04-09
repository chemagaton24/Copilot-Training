import type React from "react";

import { CustomLink } from "@/components/frontend/ui/Link/Link";
import { Text } from "@/components/frontend/ui/Text/Text";
import { cn } from "@/utilities/ui";

export interface DonationDetailMessagingProps {
  className?: any;
}

/** CMS-style snippet (demo: avoid raw HTML in production without sanitization). */
const CMS_LEAD_HTML =
  "Our journalistic content is free to all, and we&apos;re committed to keeping it that way. But, like all quality endeavors, it is expensive to produce.";

export const DonationDetailMessaging: React.FC<DonationDetailMessagingProps> = ({
  className,
}) => {
  console.log("DonationDetailMessaging");

  return (
    <section
      className={cn(
        "flex w-full max-w-[43.5rem] flex-col gap-6 bg-bg-base-brand-tertiary-tint p-8 text-text-base-primary",
        className,
      )}
    >
      <header className="flex w-full flex-col gap-6">
        <div className="flex flex-col gap-1">
          <Text
            as="h1"
            className="font-display text-display-sm font-bold leading-display-sm tracking-display-sm"
          >
            Support Our Mission
          </Text>
          <Text
            as="p"
            breakpoints={{ default: "heading-sm-bold" }}
            className="text-text-base-primary"
          >
            Honesty, Accuracy, and Viewpoint Diversity in the Media
          </Text>
        </div>
        <Text
          as="p"
          breakpoints={{ default: "body-md-regular" }}
          className="italic text-text-base-secondary"
        >
          Donations to RealClear Media Fund are tax-deductible (EIN: 20-1382746).
        </Text>
      </header>

      <div
        aria-hidden
        className="h-px w-full border-t border-dashed border-border-base-tertiary"
      />

      <div className="flex flex-col gap-8">
        <div
          className="font-heading-serif text-heading-md font-medium leading-heading-md tracking-heading-md text-text-base-primary"
          dangerouslySetInnerHTML={{ __html: CMS_LEAD_HTML }}
        />

        <div className="flex flex-col gap-5 text-text-base-primary">
          <Text as="p" breakpoints={{ default: "body-md-regular" }}>
            RealClearPolitics, along with more than a dozen sister sites, provides a rich and
            unique collection of thought encompassing an impressive variety of disciplines. And
            the RealClearPolitics Polling Average is widely recognized as the nation&apos;s
            leading authority in election polling.
          </Text>
          <Text as="p" breakpoints={{ default: "body-md-regular" }}>
            The articles curated on RealClear pages are the product of thoughtful,
            time-sensitive human judgment, not algorithms. Every morning, RealClear editors rise
            early and survey the Internet for the must-read news, analysis, commentary, and
            investigative journalism of the day—across a wide span of perspectives.
          </Text>
          <Text as="p" breakpoints={{ default: "body-md-regular" }}>
            RealClear&apos;s professional reporters cover the nation&apos;s most important
            stories from the White House and across the nation, and their work is edited to the
            highest of standards.
          </Text>
          <Text as="p" breakpoints={{ default: "body-md-regular" }}>
            Your tax-deductible charitable gift to RealClear Media Fund (EIN: 20-1382746)
            supports all these efforts and helps promote an informed public discourse and
            debate. You are investing in the maintenance of democracy.
          </Text>
          <Text as="p" breakpoints={{ default: "body-md-regular" }}>
            Making a contribution today couldn&apos;t be easier. To give by credit card, complete
            the form below. If you&apos;d prefer to give by check, please mail to:
          </Text>
          <address className="font-body text-body-md not-italic leading-body-md tracking-body-md">
            RealClear Media Fund
            <br />
            1534 16th Street NW
            <br />
            Washington, DC 20036
          </address>
          <Text as="p" breakpoints={{ default: "body-md-regular" }}>
            If you have any questions, please contact us at{" "}
            <CustomLink
              href="mailto:support@realclearmediafund.org"
              className="text-text-link-default-base-default underline decoration-solid underline-offset-2 visited:text-text-link-default-base-visited hover:text-text-link-default-base-hover"
            >
              support@realclearmediafund.org
            </CustomLink>
            .
          </Text>
        </div>
      </div>
    </section>
  );
};
