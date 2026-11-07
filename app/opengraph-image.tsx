import {ImageResponse} from "next/og";
import {readFile} from "node:fs/promises";
import {join} from "node:path";

export const runtime="nodejs";
export const alt="KeyLane Dispatch. Better Lanes. Better Rates.";
export const size={width:1200,height:630};
export const contentType="image/png";

export default async function Image(){
 const logo=await readFile(join(process.cwd(),"public/keylane-logo-light.svg"));
 const logoUri="data:image/svg+xml;base64,"+logo.toString("base64");
 return new ImageResponse(
  <div style={{display:"flex",flexDirection:"column",width:"100%",height:"100%",background:"#0B0D12",padding:"60px 74px",color:"#fff",justifyContent:"space-between",fontFamily:"Arial,sans-serif"}}>
   <div style={{display:"flex",alignItems:"center"}}>
    <img src={logoUri} alt="KeyLane Dispatch" width={420} height={120} style={{objectFit:"contain",objectPosition:"left center"}}/>
   </div>
   <div style={{display:"flex",flexDirection:"column",gap:12}}>
    <div style={{display:"flex",fontSize:76,fontWeight:900,letterSpacing:-3}}>BETTER LANES.</div>
    <div style={{display:"flex",fontSize:76,fontWeight:900,letterSpacing:-3,color:"#F42520"}}>BETTER RATES.</div>
    <div style={{display:"flex",fontSize:28,marginTop:18,color:"#e9ebf0"}}>Your first dispatched load is free.</div>
   </div>
   <div style={{display:"flex",width:"100%",height:7,background:"linear-gradient(90deg, #e10600 0%, #e10600 54%, #353a43 54%)"}}/>
  </div>,
  {...size}
 );
}
