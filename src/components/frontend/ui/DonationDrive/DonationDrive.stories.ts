import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { DonationDrive } from "./DonationDrive";
import { donationDriveMock, donationDriveMockWithVisits } from "./DonationDrive.mocks";

const meta = {
  title: "ui/Donation Drive",
  component: DonationDrive,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof DonationDrive>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithVisitCount: Story = {
  args: donationDriveMockWithVisits,
};

export const WithoutVisitCount: Story = {
  args: donationDriveMock,
};
