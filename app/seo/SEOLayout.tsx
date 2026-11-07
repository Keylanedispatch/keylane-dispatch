import Link from "next/link";
import type {ReactNode} from "react";
import {SocialLinks} from "../components/SocialLinks";

export const BASE="https://keylanedispatch.com";
export function BreadcrumbJson({items}:{items:{label:string;path:string}[]}){
 const data={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:items.map((item,i)=>({"@type":"ListItem",position:i+1,name:item.label,item:BASE+item.path}))};
 return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,"\\u003c")}}/>;
}
export function SEOLayout({eyebrow,title,description,children,crumbs}:{eyebrow:string;title:string;description:string;children:ReactNode;crumbs:{label:string;path:string}[]}){
 return <main className="seo-page">
  <BreadcrumbJson items={[{label:"Home",path:"/"},...crumbs]}/>
  <header className="seo-header"><div className="container seo-header-row">
    <Link href="/" aria-label="KeyLane Dispatch homepage"><img src="/keylane-logo.svg" alt="KeyLane Dispatch" width={220} height={62}/></Link>
    <nav aria-label="Service pages"><Link href="/truck-dispatch-services">Services</Link><Link href="/owner-operator-dispatch">Owner-Operators</Link><Link href="/dispatch-pricing">Pricing</Link><Link href="/blog">News</Link><Link href="/#contact" className="seo-nav-cta">Get Started</Link></nav>
  </div></header>
  <section className="seo-page-hero"><div className="container seo-hero-grid"><div>
   <span className="section-kicker">{eyebrow}</span><h1>{title}</h1><p>{description}</p>
   <div className="seo-hero-actions"><Link href="/#contact" className="seo-button">Request a Free Consultation</Link><a href="tel:+14042032894" className="seo-outline">Call +1 (404) 203-2894</a></div>
  </div><div className="seo-hero-aside"><span>KEYLANE DISPATCH</span><strong>First dispatched load FREE</strong><p>5% for your first 30 days. 7% afterward. Invoiced Fridays. Cancel with 7 days' notice.</p><small>U.S. motor carriers · English · Français · Español · Kreyòl</small></div></div></section>
  {children}
  <section className="seo-bottom-cta"><div className="container"><h2>Ready to discuss your next load?</h2><p>Tell us your equipment, lanes, and operating preferences. You make the final decisions.</p><Link href="/#contact" className="seo-button">Talk to KeyLane Dispatch</Link></div></section>
  <footer className="seo-footer"><div className="container seo-footer-links"><Link href="/">Home</Link><Link href="/truck-dispatch-services">Truck Dispatch Services</Link><Link href="/owner-operator-dispatch">Owner-Operator Dispatch</Link><Link href="/dispatch-pricing">Pricing</Link><Link href="/blog">Trucking News</Link><Link href="/privacy">Privacy Policy</Link></div><div className="container"><SocialLinks variant="footer"/><p>© KeyLane Dispatch. Independent dispatch services for authorized U.S. motor carriers.</p></div></footer>
 </main>;
}
