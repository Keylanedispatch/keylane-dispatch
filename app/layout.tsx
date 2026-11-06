import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
 title: "KeyLane Dispatch | Better Lanes. Better Rates.",
 description: "Carrier-focused freight dispatch support for U.S. owner-operators and small fleets. Explore our services, equipment types, and dispatch fee calculator.",
 metadataBase: new URL("https://keylanedispatch.com"),
 openGraph: {title:"KeyLane Dispatch | Better Lanes. Better Rates.",description:"Professional truck dispatching built around your business.",type:"website"},
};
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><body>{children}</body></html>
}
