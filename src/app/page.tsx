import { Desktop } from "@/components/desktop/Desktop";
import { Mobile } from "@/components/mobile/Mobile";

export default function Home() {
  return (
    <>
      <div className="hidden md:block">
        <Desktop />
      </div>
      <div className="block md:hidden">
        <Mobile />
      </div>
    </>
  );
}
