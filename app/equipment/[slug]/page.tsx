import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {equipmentSEO,equipmentBySlug} from "../../seo/equipment-data";
import {SEOLayout,BASE} from "../../seo/SEOLayout";

type Params={params:Promise<{slug:string}>};
export function generateStaticParams(){return equipmentSEO.map(e=>({slug:e.slug}));}
export async function generateMetadata({params}:Params):Promise<Metadata>{
 const {slug}=await params;const e=equipmentBySlug(slug);if(!e)return {};
 return {title:e.title+" | KeyLane Dispatch",description:e.description,alternates:{canonical:BASE+"/equipment/"+slug},openGraph:{title:e.title,description:e.description,url:BASE+"/equipment/"+slug,images:["/opengraph-image"]}};
}
export default async function EquipmentPage({params}:Params){
 const {slug}=await params;const e=equipmentBySlug(slug);if(!e)notFound();
 const json={"@context":"https://schema.org","@type":"Service",name:e.name+" Dispatch Services",serviceType:e.name+" freight dispatch coordination",provider:{"@type":"Organization",name:"KeyLane Dispatch",url:BASE},areaServed:{"@type":"Country",name:"United States"},description:e.description,offers:{"@type":"Offer",description:"First dispatched load free; 5% for 30 days, then 7%; Friday invoices; 7-day cancellation notice."}};
 return <SEOLayout eyebrow="U.S. TRUCK DISPATCH SUPPORT" title={e.title} description={e.intro} crumbs={[{label:"Dispatch Services",path:"/truck-dispatch-services"},{label:e.name,path:"/equipment/"+slug}]}>
   <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(json).replace(/</g,"\\u003c")}}/>
   <section className="seo-content-section"><div className="container seo-equipment-intro">
     <div><span className="section-kicker">EQUIPMENT SUPPORT</span><h2>Dispatch designed around your {e.name.toLowerCase()} operation</h2><p>{e.intro}</p><p>{e.fit}</p></div>
     <div className="seo-equipment-visual"><img src={"/equipment/"+slug+".webp"} width={1200} height={675} loading="eager" alt={"Approved illustration of "+e.name+" truck equipment supported by KeyLane Dispatch"}/></div>
   </div></section>
   <section className="seo-content-section seo-soft"><div className="container"><h2>How KeyLane supports {e.name.toLowerCase()} carriers</h2><div className="seo-feature-grid">
    <article><span>01</span><h3>Load search and broker communication</h3><p>{e.loads}</p></article>
    <article><span>02</span><h3>Lane and equipment planning</h3><p>{e.planning}</p></article>
    <article><span>03</span><h3>Dispatch documents and coordination</h3><p>{e.paperwork}</p></article>
   </div></div></section>
   <section className="seo-content-section"><div className="container seo-prose"><h2>{e.question}</h2><p>{e.answer}</p><h2>What we ask before onboarding</h2><p>We review your MC/DOT details, insurance and equipment information, operating lanes, and availability. Some freight brokers may have authority-age or insurance requirements. KeyLane never guarantees freight volume, rates, or broker acceptance.</p><h2>Who receives the freight payment?</h2><p>The broker pays you or your factoring company directly. KeyLane works on behalf of the motor carrier under a dispatch service agreement and does not receive your freight payments.</p></div></section>
   <section className="seo-content-section seo-soft"><div className="container"><h2>Explore other equipment types</h2><div className="seo-equipment-links">{equipmentSEO.filter(x=>x.slug!==slug).map(x=><Link key={x.slug} href={"/equipment/"+x.slug}><img src={"/equipment/"+x.slug+".webp"} width={300} height={169} loading="lazy" alt={x.name+" truck illustration"}/><span>{x.name} Dispatch</span></Link>)}</div></div></section>
 </SEOLayout>;
}
