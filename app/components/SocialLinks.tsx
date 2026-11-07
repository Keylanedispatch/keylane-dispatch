import type {ReactNode} from "react";

const socialProfiles=[
 {name:"Instagram",url:"https://www.instagram.com/keylanedispatch"},
 {name:"Facebook",url:"https://www.facebook.com/keylanedispatch/"},
 {name:"YouTube",url:"https://www.youtube.com/@KeyLaneDispatch"},
 {name:"TikTok",url:"https://www.tiktok.com/@keylane.dispatch"}
] as const;

function Icon({name}:{name:typeof socialProfiles[number]["name"]}){
 const common={width:22,height:22,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.9,strokeLinecap:"round" as const,strokeLinejoin:"round" as const,"aria-hidden":true as const};
 switch(name){
  case "Instagram":return <svg {...common}><rect x="2.5" y="2.5" width="19" height="19" rx="5.4"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.7" cy="6.3" r="1.1" fill="currentColor" stroke="none"/></svg>;
  case "Facebook":return <svg {...common} fill="currentColor" stroke="none"><path d="M14.6 22v-8h2.7l.5-3.3h-3.2V8.6c0-.9.3-1.6 1.6-1.6H18V4.1c-.4-.1-1.5-.2-2.8-.2-2.9 0-4.8 1.8-4.8 5v1.8H7.7V14h2.7v8z"/></svg>;
  case "YouTube":return <svg {...common}><rect x="1.9" y="5" width="20.2" height="14" rx="4.1"/><path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none"/></svg>;
  case "TikTok":return <svg {...common} fill="currentColor" stroke="none"><path d="M16.18 2h-3.24v12.64a3.26 3.26 0 1 1-2.8-3.22V8.13a6.5 6.5 0 1 0 6.04 6.48V8.3a8.1 8.1 0 0 0 4.82 1.57V6.65a4.9 4.9 0 0 1-4.82-4.65z"/></svg>;
 }
}
export const socialLinks=socialProfiles;
export function SocialLinks({variant="contact"}:{variant?:"contact"|"footer"}){
 return <div className={"social-block social-"+variant}>
  <strong className="social-heading">Follow us</strong>
  <div className="social-links">
   {socialProfiles.map(profile=><a key={profile.name} href={profile.url} target="_blank" rel="noopener noreferrer" aria-label={"KeyLane Dispatch on "+profile.name} title={profile.name} className="social-link"><Icon name={profile.name}/></a>)}
  </div>
 </div>;
}
