import type { DonationDriveProps } from "./DonationDrive";

const defaultDonationDriveMock: DonationDriveProps = {
  title: "Give today",
  description: (
    <p>
      The Internet provides an endless stream of content. Not all of it is worth your time.
      That&apos;s why, every day, we curate the most essential news and information—from all
      sides and across mediums.
    </p>
  ),
  tagline: "Trusted by policymakers and citizens alike since 2000",
  supportingText: "Would you consider supporting us today?",
  additionalText:
    "Contributing through the foundation supports essential initiatives that drive meaningful change.",
  donationURL: "#",
  ctaText: "Donate Today",
};

export const donationDriveMock: DonationDriveProps = {
  ...defaultDonationDriveMock,
};

export const donationDriveMockWithVisits: DonationDriveProps = {
  ...defaultDonationDriveMock,
};
