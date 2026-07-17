import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dancing Bears Detail Co. | Mobile Car Detailing",
  description: "Premium mobile auto detailing with bold early-2000s style and a showroom shine.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
