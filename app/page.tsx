"use client";
import {useEffect,useState} from "react";
import {ArrowRight, ArrowUpRight, Check, ChevronDown, ChevronRight, ClipboardList, FileCheck2, Headphones, Menu, Phone, Route, ShieldCheck, Truck, X, Calculator, Mail, MapPin, Zap, Clock3, Send} from "lucide-react";

const PHONE="+1 (404) 203-2894";
const TEL="+14042032894";
const WA="https://wa.me/14042032894";
const equipment=[
  {name:"Dry Van",code:"DV",description:"Keep your dry van moving with freight searches aligned with your lanes.",detail:"53-ft trailers and other configurations reviewed individually."},
  {name:"Reefer",code:"RF",description:"Temperature-sensitive freight coordination and appointment details.",detail:"Refrigerated equipment and operational requirements reviewed."},
  {name:"Flatbed",code:"FB",description:"Find fitting loads and coordinate equipment-specific requirements.",detail:"Securement, dimensions, and load details confirmed with the carrier."},
  {name:"Hotshot",code:"HS",description:"Find freight opportunities that match your truck and trailer.",detail:"Equipment, insurance, and broker eligibility vary by load."},
  {name:"Box Truck",code:"BX",description:"Regional and over-the-road opportunities based on your capabilities.",detail:"Cargo area, weight capacity, and authority reviewed."},
  {name:"Power Only",code:"PO",description:"Coordinate qualified tractor-only hauling opportunities.",detail:"Trailer interchange and insurance terms vary by broker."},
];
const faqs=[
 {q:"What does a truck dispatcher do?",a:"We help authorized motor carriers search for suitable loads, communicate with brokers, coordinate pickups and deliveries, and organize dispatch paperwork. The carrier remains responsible for its operations."},
 {q:"Do you guarantee loads or rates?",a:"No. Load availability and rates depend on equipment, market conditions, carrier qualifications, and each broker's requirements. You stay in control of which loads you accept."},
 {q:"Does KeyLane work with new authorities?",a:"We review new carriers individually. Some brokers have authority-age and insurance requirements that can limit available freight."},
 {q:"Who pays the dispatch fee?",a:"Your first dispatched load is free. After that, dispatch service is 5% for the first 30 days, then 7%. We invoice every Friday, and you can cancel with 7 days’ notice."},
 {q:"What do I need to get started?",a:"Tell us your equipment, MC/DOT details, operating region, and preferred lanes. After a consultation, we can outline the documents required for your carrier agreement."},
 {q:"Are you a freight broker?",a:"No. KeyLane is a dispatch service working for you, the carrier. Brokers pay you or your factoring company directly. We never handle your freight money."},
];
function Brand({light=false}:{light?:boolean}){
 return <a className="brand" href="/#top" aria-label="KeyLane Dispatch home"><img src="/keylane-logo.svg" alt="KeyLane Dispatch" width="230" height="65" /></a>
}
export default function Home(){
 const [menuOpen,setMenuOpen]=useState(false);
 useEffect(()=>{
  const targets=document.querySelectorAll(".section-heading,.service-card,.equipment-layout,.pricing-copy,.calculator,.center-heading,.step,.faq-grid,.contact-copy,.lead-form,.intro-grid,.languages-inner,.founder-inner");
  if(!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches){targets.forEach(el=>el.classList.add("is-visible"));return;}
  targets.forEach(el=>el.classList.add("scroll-reveal"));
  const observer=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}});
  },{rootMargin:"0px 0px -48px 0px",threshold:0.12});
  targets.forEach(el=>observer.observe(el));
  return ()=>observer.disconnect();
 },[]);
 const [gross,setGross]=useState(6000);
 const [percent,setPercent]=useState(7);
 const [selected,setSelected]=useState("Dry Van");
 const [openFaq,setOpenFaq]=useState<number|null>(0);
 const [form,setForm]=useState({name:"",phone:"",email:"",equipment:"",message:"",consent:false});
 const [formStatus,setFormStatus]=useState<"idle"|"sending"|"success"|"error">("idle");
 const [formError,setFormError]=useState("");
 const formId=process.env.NEXT_PUBLIC_FORMSPREE_ID;
 const fee=gross*percent/100;
 const fmt=(v:number)=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(v);
 async function sendInquiry(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault();
  if(!form.consent || formStatus==="sending") return;
  if(!formId){setFormError("Online inquiries are being configured. Please email or call KeyLane directly.");setFormStatus("error");return;}
  setFormStatus("sending");setFormError("");
  try{
   const response=await fetch("https://formspree.io/f/"+encodeURIComponent(formId),{
     method:"POST",
     headers:{"Content-Type":"application/json","Accept":"application/json"},
     body:JSON.stringify({name:form.name,phone:form.phone,email:form.email,equipment:form.equipment,message:form.message||"Not provided",_subject:"New KeyLane carrier inquiry",consent:"Yes"})
   });
   if(!response.ok)throw new Error("Submission was not accepted.");
   setFormStatus("success");
   setForm({name:"",phone:"",email:"",equipment:"",message:"",consent:false});
  }catch{
   setFormError("We could not send your inquiry. Please contact info@keylanedispatch.com or call us.");
   setFormStatus("error");
  }
 }
 const services=[
  {icon:<Route/>,title:"Load Search & Planning",text:"Find freight opportunities that suit your equipment, lanes, and availability."},
  {icon:<Headphones/>,title:"Broker Communication",text:"Support with load discussions, rate negotiations, and coordination."},
  {icon:<ClipboardList/>,title:"Dispatch Paperwork",text:"Help organize load details, confirmations, and operational documents."},
  {icon:<Clock3/>,title:"Pickup & Delivery Support",text:"Keep appointment details and shipment updates organized."},
  {icon:<FileCheck2/>,title:"Carrier-Focused Reporting",text:"Clear load summaries and dispatch fee records for your business."},
  {icon:<ShieldCheck/>,title:"You Stay in Control",text:"You decide whether to accept each load. No forced dispatch."}
 ];
 return <main id="top">
  <div className="top-strip"><span>DISPATCH SUPPORT FOR U.S. MOTOR CARRIERS</span><a href={"tel:"+TEL}><Phone size={13}/> {PHONE}</a></div>
  <header className="site-header"><div className="container header-inner">
    <Brand/>
    <nav className={menuOpen?"nav nav-open":"nav"} aria-label="Primary navigation">
      {[["Services","#services"],["Equipment","#equipment"],["Pricing","#pricing"],["How it works","#process"],["FAQ","#faq"]].map(([label,url])=><a key={label} href={url} onClick={()=>setMenuOpen(false)}>{label}</a>)}
      <a className="nav-mobile-cta" href="#contact" onClick={()=>setMenuOpen(false)}>Get Started <ArrowRight size={16}/></a>
    </nav>
    <div className="header-actions"><a className="header-phone" href={"tel:"+TEL}><Phone size={15}/>{PHONE}</a><a className="btn btn-red header-cta" href="#contact">Get Started <ArrowUpRight size={17}/></a></div>
    <button className="mobile-menu" aria-label={menuOpen?"Close menu":"Open menu"} aria-expanded={menuOpen} onClick={()=>setMenuOpen(v=>!v)}>{menuOpen?<X/>:<Menu/>}</button>
  </div></header>
  <section className="hero" aria-labelledby="hero-title">
   <div className="hero-photo" role="img" aria-label="American long-nose semi truck traveling on a highway at dusk"/><div className="hero-road-glow" aria-hidden="true"><span/><span/><span/></div><div className="hero-red-halo" aria-hidden="true"/>
   <div className="hero-shade"/>
   <div className="container hero-inner">
    <div className="hero-copy">
     <span className="eyebrow hero-eyebrow"><span className="red-line"/> BUILT FOR OWNER-OPERATORS & SMALL FLEETS</span><div className="hero-offer"><span>WELCOME OFFER</span><strong>YOUR FIRST LOAD IS FREE</strong></div>
     <h1 id="hero-title"><span className="hero-title-line">BETTER LANES.</span><br/><em className="hero-title-line hero-title-red">BETTER RATES.</em></h1>
     <p>Your first dispatched load is FREE. Then it's 5% for 30 days, 7% after. Drive with confidence and dispatch support in four languages.</p>
     <div className="hero-buttons"><a className="btn btn-red btn-lg" href="#contact">Get a Free Consultation <ArrowUpRight size={19}/></a><a className="btn btn-outline-light btn-lg" href="#services">Explore Our Services <ArrowRight size={19}/></a></div>
     <div className="hero-benefits"><span><Check size={15}/> First load free</span><span><Check size={15}/> No forced dispatch</span><span><Check size={15}/> EN · FR · ES · KREYÒL</span></div>
    </div>
    <div className="hero-card"><div className="card-small-icon"><Truck size={23}/></div><div><strong>Your business. Your route.</strong><span>Dispatch support built around your goals.</span></div><ArrowUpRight size={18}/></div>
   </div>
   <div className="hero-bottom-line"/>
  </section>
  <section className="intro-band"><div className="container intro-grid">
    <div><span className="section-kicker">WELCOME TO KEYLANE</span><h2>You drive the business.<br/><span>We support the dispatch.</span></h2></div>
    <div><p>KeyLane Dispatch helps independent U.S. motor carriers find opportunities, communicate with brokers, and stay organized from pickup to delivery.</p><a className="text-link" href="#process">See how it works <ArrowUpRight size={18}/></a></div>
   </div></section>
  <section className="languages-band" id="languages"><div className="container languages-inner"><div><span className="section-kicker">FOUR LANGUAGES. ONE DISPATCH PARTNER.</span><h2>We speak your language.</h2><p>Work with Johnson in the language you're most comfortable using. Clear communication from your first call to your next load.</p></div><div className="language-list"><div><span>EN</span><strong>English</strong></div><div><span>FR</span><strong>Français</strong></div><div><span>ES</span><strong>Español</strong></div><div><span>HT</span><strong>Kreyòl</strong></div></div></div></section>
  <section className="section services-section" id="services"><div className="container">
   <div className="section-heading"><div><span className="section-kicker">WHAT WE HANDLE</span><h2>Dispatching that <span>moves with you.</span></h2></div><p>Practical support for the work behind every load. You make the final business decisions.</p></div>
   <div className="services-grid">{services.map((s,i)=><article className="service-card" key={s.title}><span className="service-index">0{i+1}</span><div className="service-icon">{s.icon}</div><h3>{s.title}</h3><p>{s.text}</p><ChevronRight className="service-arrow" size={19}/></article>)}</div>
  </div></section>
  <section className="section equipment-section" id="equipment"><div className="container">
   <div className="section-heading"><div><span className="section-kicker">EQUIPMENT WE REVIEW</span><h2>Built for <span>your type of truck.</span></h2></div><p>Select your equipment to see how our dispatch service may fit your operation.</p></div>
   <div className="equipment-layout"><div className="equipment-options">{equipment.map(item=><button className={selected===item.name?"equipment-option selected":"equipment-option"} key={item.name} onClick={()=>setSelected(item.name)} aria-pressed={selected===item.name}><span className="equip-code">{item.code}</span><span>{item.name}</span><ArrowUpRight size={19}/></button>)}</div><div className="equipment-detail"><div className="equip-detail-top"><Truck size={31}/><span>KEYLANE / EQUIPMENT</span></div><span className="detail-label">YOUR SELECTED EQUIPMENT</span><h3>{selected}</h3><p>{equipment.find(e=>e.name===selected)?.description}</p><div className="detail-note"><Check size={17}/>{equipment.find(e=>e.name===selected)?.detail}</div><a className="btn btn-red" href="#contact" onClick={()=>setForm(f=>({...f,equipment:selected}))}>Request Dispatch Support <ArrowUpRight size={17}/></a></div></div>
  </div></section>
  <section className="section pricing-section" id="pricing"><div className="container pricing-grid"><div className="pricing-copy"><span className="section-kicker">TRANSPARENT PRICING</span><h2>Know the numbers <span>before you begin.</span></h2><p>Your first dispatched load is free. Then pay 5% for your first 30 days and 7% afterward. We invoice every Friday, and you can cancel with 7 days’ notice.</p><div className="price-points"><div><Check size={17}/> First dispatched load: FREE</div><div><Check size={17}/> First 30 days: 5%, then 7%</div><div><Check size={17}/> Invoiced every Friday</div><div><Check size={17}/> Cancel with 7 days’ notice</div></div><a className="text-link" href="#contact">Discuss your operation <ArrowUpRight size={18}/></a></div><div className="calculator"><div className="calculator-top"><span><Calculator size={19}/> DISPATCH FEE CALCULATOR</span><span className="calculator-live"><span/> INTERACTIVE</span></div><label htmlFor="revenue">Estimated weekly gross load revenue</label><div className="big-value">{fmt(gross)}</div><input id="revenue" type="range" min="1000" max="20000" step="500" value={gross} onChange={e=>setGross(Number(e.target.value))}/><div className="range-labels"><span>$1,000</span><span>$20,000</span></div><div className="rate-head">Your dispatch fee rate</div><div className="rate-buttons"><button className={percent===5?"rate-button active":"rate-button"} onClick={()=>setPercent(5)}>5% <small>First 30 days</small></button><button className={percent===7?"rate-button active":"rate-button"} onClick={()=>setPercent(7)}>7% <small>After 30 days</small></button></div><div className="calc-results"><div><span>Estimated dispatch fee</span><strong>{fmt(fee)}</strong></div><div><span>Gross less dispatch fee</span><strong>{fmt(gross-fee)}</strong></div></div><p className="calc-note">Your first dispatched load is free. Calculator estimates percentage-based fees on later loads. The remaining amount is before fuel, insurance, maintenance and other carrier costs.</p></div></div></section>
  <section className="section process-section" id="process"><div className="container"><div className="center-heading"><span className="section-kicker">THREE SIMPLE STEPS</span><h2>From inquiry <span>to the road.</span></h2><p>We keep onboarding straightforward so you understand the process before you commit.</p></div><div className="steps">{[{n:"01",t:"Tell us about your truck",d:"Share equipment type, preferred lanes, authority details, and dispatch needs."},{n:"02",t:"Talk with KeyLane",d:"We'll discuss your goals, eligibility, scope of service, and potential fees."},{n:"03",t:"Get set up",d:"If we're a fit, complete a written carrier agreement and secure onboarding."}].map(s=><div className="step" key={s.n}><span>{s.n}</span><h3>{s.t}</h3><p>{s.d}</p></div>)}</div></div></section>
  <section className="founder-band"><div className="container founder-inner"><img className="founder-official-logo" src="/keylane-icon.svg" alt="" width="90" height="90"/><div><span className="section-kicker">MEET JOHNSON · CERTIFIED DISPATCHER</span><h2>Meet Johnson, <em>your dispatcher.</em></h2><p>I'm Johnson, a certified dispatcher. I support carriers in English, Français, Español, and Kreyòl. Work with someone who understands your language, your lanes, and your business.</p></div><a className="btn btn-red" href="#contact">Let's Talk <ArrowUpRight size={18}/></a></div></section>
  <section className="section faq-section" id="faq"><div className="container faq-grid"><div><span className="section-kicker">GOOD QUESTIONS. CLEAR ANSWERS.</span><h2>Everything you need <span>to know.</span></h2><p>More questions? Talk with us directly before signing anything.</p><a className="text-link" href={"mailto:info@keylanedispatch.com"}>info@keylanedispatch.com <ArrowUpRight size={18}/></a></div><div className="faq-list">{faqs.map((item,i)=><div className="faq-item" key={item.q}><button onClick={()=>setOpenFaq(openFaq===i?null:i)} aria-expanded={openFaq===i}><span>{item.q}</span><ChevronDown className={openFaq===i?"turn":""} size={19}/></button>{openFaq===i&&<p>{item.a}</p>}</div>)}</div></div></section>
  <section className="section contact-section" id="contact"><div className="container contact-grid"><div className="contact-copy"><span className="section-kicker">LET'S GET YOUR TRUCK MOVING</span><h2>Ready for a better <span>dispatch experience?</span></h2><p>Tell us about your carrier operation. We'll review your request and discuss the next steps.</p><div className="contact-method"><Phone size={20}/><a href={"tel:"+TEL}>{PHONE}</a></div><div className="contact-method"><Mail size={20}/><a href="mailto:info@keylanedispatch.com">info@keylanedispatch.com</a></div><div className="contact-method"><MapPin size={20}/><span>Serving authorized motor carriers across the U.S.</span></div><div className="business-hours"><strong>BUSINESS HOURS (EASTERN TIME)</strong><span>Mon–Fri: 7:00 AM–7:00 PM ET</span><span>Sat: 8:00 AM–1:00 PM ET</span><span>Sun: Closed</span></div><p className="contact-small">We don't guarantee load volume, rate levels, or broker acceptance. Onboarding eligibility is confirmed during consultation.</p></div><form className="lead-form" onSubmit={sendInquiry}><div className="form-title"><span>START HERE</span><h3>Free dispatch consultation</h3><p>Complete this form to send your inquiry directly to our team.</p></div><div className="form-row"><label>Full name<input required placeholder="Your name" autoComplete="name" value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))}/></label><label>Phone number<input required placeholder="+1 (___) ___-____" type="tel" autoComplete="tel" value={form.phone} onChange={e=>setForm(f=>({...f,phone:e.target.value}))}/></label></div><label>Email address<input required type="email" autoComplete="email" placeholder="you@company.com" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))}/></label><label>Truck type<select required value={form.equipment} onChange={e=>setForm(f=>({...f,equipment:e.target.value}))}><option value="">Select your equipment</option>{equipment.map(e=><option key={e.name} value={e.name}>{e.name}</option>)}</select></label><label>Tell us about your operation (optional)<textarea rows={3} placeholder="Truck count, lanes, questions..." value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))}/></label><label className="consent"><input required type="checkbox" checked={form.consent} onChange={e=>setForm(f=>({...f,consent:e.target.checked}))}/><span>I agree to share these details with KeyLane Dispatch to respond to my inquiry.</span></label><button className="btn btn-red btn-submit" type="submit" disabled={formStatus==="sending"||formStatus==="success"||!formId}>{formStatus==="sending"?"Sending...":formStatus==="success"?"Inquiry Sent":"Send My Inquiry"} <Send size={18}/></button>{!formId&&<p className="form-note">Online submissions are being configured. For now, email <a href="mailto:info@keylanedispatch.com">info@keylanedispatch.com</a> or call us.</p>}{formStatus==="success"&&<p className="form-notice" role="status">Your inquiry was sent successfully. Our team will review it.</p>}{formStatus==="error"&&<p className="form-error" role="alert">{formError}</p>}</form></div></section>
  <footer className="footer"><div className="container"><div className="footer-top"><div><Brand light/><p>Carrier-focused dispatch support.<br/>Built around your road ahead.</p></div><div className="footer-links"><a href="#services">Services</a><a href="#equipment">Equipment</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a><a href="#contact">Contact</a><a href="/privacy">Privacy Policy</a></div><div className="footer-contact"><strong>LET'S CONNECT</strong><a href={"tel:"+TEL}>{PHONE}</a><a href="mailto:info@keylanedispatch.com">info@keylanedispatch.com</a><a href="mailto:dispatch@keylanedispatch.com">dispatch@keylanedispatch.com</a><span>Mon–Fri 7 AM–7 PM ET</span><span>Sat 8 AM–1 PM ET</span></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} KeyLane Dispatch. All rights reserved.</span><span>Independent dispatch services for U.S. motor carriers.</span></div></div></footer>
  <a href={WA} target="_blank" rel="noopener noreferrer" className="float-contact" aria-label="Contact KeyLane on WhatsApp"><img src="/whatsapp.svg" alt="" width="24" height="24"/><span>WhatsApp</span></a>
 </main>
}
