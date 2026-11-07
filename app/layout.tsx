import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
 title: "Truck Dispatch Services USA | KeyLane Dispatch",
 description: "Truck dispatch services for U.S. owner-operators and small fleets. Dry van, reefer, flatbed, hotshot, box truck and power-only support. First load free.",
 metadataBase: new URL("https://keylanedispatch.com"),
 alternates:{canonical:"https://keylanedispatch.com"},
 robots:{index:true,follow:true,googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1}},
 openGraph: {title:"KeyLane Dispatch | Better Lanes. Better Rates.",description:"Professional truck dispatching built around your business.",type:"website",url:"https://keylanedispatch.com",images:[{url:"/opengraph-image",width:1200,height:630,alt:"KeyLane Dispatch. Better lanes. Better rates."}]},
 twitter:{card:"summary_large_image",title:"KeyLane Dispatch | Better Lanes. Better Rates.",images:["/opengraph-image"]},
};
const organizationSchema={
 "@context":"https://schema.org",
 "@type":"Organization",
 name:"KeyLane Dispatch",
 "@id":"https://keylanedispatch.com/#organization",
 description:"Independent truck dispatch services for authorized U.S. motor carriers, owner-operators, and small fleets.",
 areaServed:{"@type":"Country",name:"United States"},
 knowsLanguage:["en","fr","es","ht"],
 contactPoint:{"@type":"ContactPoint",telephone:"+1-404-203-2894",email:"info@keylanedispatch.com",contactType:"customer service",availableLanguage:["English","French","Spanish","Haitian Creole"],areaServed:"US"},
 url:"https://keylanedispatch.com",
 logo:"https://keylanedispatch.com/keylane-logo.svg",
 telephone:"+1-404-203-2894",
 email:"info@keylanedispatch.com",
 sameAs:[
 "https://www.instagram.com/keylanedispatch",
 "https://www.facebook.com/keylanedispatch/",
 "https://www.youtube.com/@KeyLaneDispatch",
 "https://www.tiktok.com/@keylane.dispatch"
 ]
};
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationSchema).replace(/</g,"\\u003c")}} />{children}</body></html>
}
