import type { Metadata } from "next";
import DesktopOS from "@/components/desktop/DesktopOS";

export const metadata: Metadata = {
  title: "ARIHANT LODHA — Desktop",
  description: "16 | building in stealth | prev @ rove (yc w24)",
};

export default function DesktopPage() {
  return <DesktopOS />;
}
