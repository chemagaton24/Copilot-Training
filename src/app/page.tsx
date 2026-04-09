import { DonationDrive } from "@/components/frontend/ui/DonationDrive/DonationDrive";
import { donationDriveMock } from "@/components/frontend/ui/DonationDrive/DonationDrive.mocks";

export default function Home() {
  return (
    <main>
      <DonationDrive {...donationDriveMock} />
    </main>
  );
}
