import sharp from "sharp";
import {NextResponse} from "next/server";
export const runtime="nodejs";
const equipment=new Set(["dry-van","reefer","flatbed","hotshot","box-truck","power-only"]);
function wheels(xs:number[],y:number,r=31){
 return xs.map(x=>`<circle cx="${x}" cy="${y}" r="${r+4}" fill="#242b34" stroke="#e5ebef" stroke-width="3"/><circle cx="${x}" cy="${y}" r="${r*.54}" fill="#cbd2d8" stroke="#64727e" stroke-width="3"/><circle cx="${x}" cy="${y}" r="5" fill="#66737d"/>`).join("");
}
function drawing(kind:string){
 const box=kind==="box-truck",pickup=kind==="hotshot",power=kind==="power-only",flat=kind==="flatbed",reefer=kind==="reefer";
 const cab=pickup?`<path d="M68 223h72l32 31h60v66H42v-52z" fill="#c90f09" stroke="#8b0c0b" stroke-width="3"/><path d="M101 228h42l20 24h-62z" fill="#b4dbea"/><rect x="60" y="277" width="18" height="12" rx="2" fill="#fff2ad"/>`: `<path d="M85 180h120l35 48v104H38v-80l42-15z" fill="#d1150d" stroke="#8e1410" stroke-width="3"/><path d="M105 190h82l25 36h-112z" fill="#b9dce9" stroke="#506e80" stroke-width="3"/><path d="M38 265h202v18H38z" fill="#f5f7fa"/><path d="M48 299h191v18H48z" fill="#59636f"/><rect x="49" y="248" width="22" height="14" rx="2" fill="#fff4ba"/>`;
 let cargo="";
 if(power){cargo=`<path d="M228 295h208v22H228z" fill="#64717e"/><path d="M255 279h75v15h-75z" fill="#2a3139"/><path d="M285 270h35v8h-35z" fill="#d7e0e8"/>`;}
 else if(pickup){cargo=`<path d="M234 300h403v13H234z" fill="#6a7782"/><path d="M254 275h14v28h-14z" fill="#687885"/><path d="M262 275h78v8h-78z" fill="#697988"/><path d="M355 278h180v22H355z" fill="#ccbea4"/><path d="M395 260h90v18h-90z" fill="#deca9d"/>`;}
 else if(flat){cargo=`<rect x="248" y="293" width="405" height="20" rx="3" fill="#71808e"/><rect x="300" y="241" width="220" height="50" rx="3" fill="#c4a77d" stroke="#aa8c60" stroke-width="4"/><path d="M326 241v50m55-50v50m57-50v50m50-50v50" stroke="#91704a" stroke-width="4"/><path d="M285 233h250" stroke="#f3c85d" stroke-width="8"/>`;}
 else {
 cargo=`<rect x="${box?220:246}" y="${box?165:145}" width="${box?360:414}" height="${box?150:171}" rx="7" fill="url(#whiteBox)" stroke="#aeb9c4" stroke-width="4"/><path d="M${box?222:249} 181h${box?355:406}" stroke="#e5e9ec" stroke-width="6"/><path d="M${box?225:255} 208h${box?347:396}" stroke="#d4dbe1" stroke-width="3"/>`;
 if(reefer) cargo+=`<rect x="249" y="159" width="46" height="91" rx="6" fill="#e4eaf0" stroke="#9eaab7" stroke-width="4"/><path d="M256 173h32m-30 8h28m-29 10h29m-29 10h29" stroke="#71818f" stroke-width="3"/>`;
 }
 const axle=pickup?[102,202,565,620]:box?[120,525,574]:power?[120,309,363]:[120,309,564,620];
 return `<svg xmlns="http://www.w3.org/2000/svg" width="700" height="400" viewBox="0 0 700 400"><defs><linearGradient id="whiteBox" x1="0" x2="1"><stop stop-color="#ffffff"/><stop offset="1" stop-color="#e5eaf0"/></linearGradient><linearGradient id="bg" x2="0" y2="1"><stop stop-color="#f9fbfd"/><stop offset="1" stop-color="#eef2f7"/></linearGradient></defs><rect width="700" height="400" rx="18" fill="url(#bg)"/><path d="M0 342h700" stroke="#c6ced8" stroke-width="5"/><path d="M12 355h676" stroke="#e1e5ea" stroke-width="2"/><ellipse cx="350" cy="339" rx="305" ry="9" fill="#94a0aa" opacity=".13"/>${cargo}${cab}${wheels(axle,327,pickup?24:29)}<rect x="22" y="28" width="78" height="6" rx="3" fill="#d8150c"/><circle cx="660" cy="35" r="5" fill="#d8150c"/></svg>`;
}
export async function GET(_:Request,{params}:{params:Promise<{type:string}>}){
 const {type}=await params;
 if(!equipment.has(type))return new NextResponse("Not found",{status:404});
 const png=await sharp(Buffer.from(drawing(type))).resize(700,400).png({compressionLevel:8}).toBuffer();
 return new NextResponse(new Uint8Array(png),{headers:{"Content-Type":"image/png","Cache-Control":"public, max-age=3600, s-maxage=86400"}});
}
