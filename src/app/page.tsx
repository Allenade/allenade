import { Desktop } from "@/components/desktop/Desktop";
import { ToggleTheme } from "@/components/layouts/toggle-theme";
import { Mobile } from "@/components/mobile/Mobile";

export default function Home() {
  return (
    <>
      <div className="flex justify-center p-4">
        <ToggleTheme />
      </div>
      <div className="hidden md:block">
        <Desktop />
      </div>
      <div className="block md:hidden">
        <Mobile />
      </div>
    </>
  );
}
