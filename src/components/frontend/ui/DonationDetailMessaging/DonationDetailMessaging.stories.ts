import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { DonationDetailMessaging } from "./DonationDetailMessaging";

const meta = {
  title: "ui/Donation Detail Messaging",
  component: DonationDetailMessaging,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof DonationDetailMessaging>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
