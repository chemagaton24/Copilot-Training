import { DonationDetailMessaging } from "@/components/frontend/ui/DonationDetailMessaging/DonationDetailMessaging";
import { DonationDrive } from "@/components/frontend/ui/DonationDrive/DonationDrive";
import { donationDriveMock } from "@/components/frontend/ui/DonationDrive/DonationDrive.mocks";

export default function Home() {
  return (
    <main className="flex flex-col items-stretch">
      <DonationDetailMessaging />
      <DonationDrive {...donationDriveMock} />
    </main>
  );
}
