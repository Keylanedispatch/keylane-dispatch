/**
 * Create locally served equipment and team images before a Next.js build.
 * Original images are retrieved from credited stock-photo pages and the
 * owner's uploaded image CDN, then converted to 1200x675 WebP.
 * We use fit:contain so the whole truck remains visible in the preview.
 */
import {mkdir,writeFile,readFile} from "node:fs/promises";
import sharp from "sharp";

const equipment=[
 ["dry-van",6563903],
 ["reefer",93398],
 ["flatbed",37538286],
 ["hotshot",14438396],
 ["box-truck",31049388],
 ["power-only",33262905],
];
const ownerPrefix="https://d2ol7oe51mr4n9.cloudfront.net/user_3KDHRDt0DvhfzvxUfoeWZe32LTY/";
const team=[
 ["johnson-headshot","f77c2078-78c5-4486-a696-86ed91c16bae.png"],
 ["johnson-desk","e18da861-cd44-439e-b319-dc58b14c2a51.png"],
];
const gradient=Buffer.from(`<svg width="1200" height="675" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#07101d" stop-opacity=".04"/><stop offset="100%" stop-color="#07101d" stop-opacity=".24"/></linearGradient></defs><rect width="1200" height="675" fill="url(#g)"/></svg>`);
async function download(url){
 const response=await fetch(url,{headers:{"user-agent":"KeyLaneMediaBuild/1.0"},signal:AbortSignal.timeout(30000)});
 if(!response.ok) throw new Error(`Image download HTTP ${response.status} for ${url}`);
 const bytes=Buffer.from(await response.arrayBuffer());
 if(bytes.length<10000) throw new Error(`Unexpectedly short file: ${url}`);
 return bytes;
}
await mkdir("public/equipment",{recursive:true});
await mkdir("public/team",{recursive:true});
for(const [type,id] of equipment){
 const url=`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1800`;
 try{
  const bytes=await download(url);
  const base=await sharp(bytes).rotate().resize(1200,675,{fit:"contain",background:"#e8edf2"}).toBuffer();
  await sharp(base).composite([{input:gradient}]).webp({quality:82,effort:5}).toFile(`public/equipment/${type}.webp`);
  console.log(`Media OK equipment/${type}.webp`);
 }catch(error){console.error(`Media unavailable equipment/${type}.webp: ${error.message}`);process.exitCode=1;}
}
for(const [type,filename] of team){
 const url=ownerPrefix+filename;
 try{
  const bytes=await download(url);
  await sharp(bytes).rotate().resize({width:1400,height:1200,fit:"inside",withoutEnlargement:true}).webp({quality:85,effort:5}).toFile(`public/team/${type}.webp`);
  console.log(`Media OK team/${type}.webp`);
 }catch(error){console.error(`Media unavailable team/${type}.webp: ${error.message}`);process.exitCode=1;}
}
