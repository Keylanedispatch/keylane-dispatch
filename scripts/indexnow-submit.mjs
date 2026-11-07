#!/usr/bin/env node
/**
 * Notify IndexNow of new or changed KeyLane Dispatch pages after deployment.
 * No third-party packages or secret credentials are required.
 */
import {execFileSync} from "node:child_process";
const origin="https://keylanedispatch.com";
const key="5a3a64e86077c145930efca42c04855acd9c8310";
const keyLocation=origin+"/"+key+".txt";
const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms));
const out=(...args)=>console.log("[IndexNow]",...args);

async function verifyKey(){
 for(let attempt=1;attempt<=24;attempt++){
  try{
   const response=await fetch(keyLocation,{cache:"no-store",signal:AbortSignal.timeout(12000)});
   if(response.ok && (await response.text()).trim()===key){out("Public key verified");return;}
  }catch(e){out("Verification pending:",String(e).slice(0,100));}
  if(attempt%4===0)out("Waiting for production deployment. Attempt",attempt);
  await sleep(15000);
 }
 throw new Error("Public key is not available on the production website.");
}
function changedPaths(){
 if(process.env.INDEXNOW_ALL==="true" || process.env.GITHUB_EVENT_NAME==="workflow_dispatch")return null;
 try{return execFileSync("git",["diff","--name-only","HEAD^","HEAD"],{encoding:"utf8"}).trim().split("\n").filter(Boolean);}
 catch{return null;}
}
function urlsForChanges(all,files){
 if(files===null)return all;
 const set=new Set();
 const add=s=>set.add(origin+s);
 const allPages=()=>all.forEach(x=>set.add(x));
 for(const path of files){
  if(/^(app\/layout\.tsx|app\/globals\.css|app\/sitemap\.ts|app\/seo\/|app\/opengraph-image|public\/.*logo|public\/.*icon|public\/[a-f0-9]{40}\.txt|\.github\/workflows\/indexnow\.yml)/.test(path)){allPages();continue;}
  if(path==="app/page.tsx" || path.startsWith("public/media/")){add("/");continue;}
  if(path==="app/equipment/[slug]/page.tsx"){all.filter(u=>u.includes("/equipment/")).forEach(u=>set.add(u));continue;}
  const m=path.match(/^public\/equipment\/(dry-van|reefer|flatbed|hotshot|box-truck|power-only)\./);
  if(m){add("/");add("/equipment/"+m[1]);add("/truck-dispatch-services");continue;}
  const n=path.match(/^app\/(truck-dispatch-services|owner-operator-dispatch|dispatch-pricing|privacy)\/page\.tsx$/);
  if(n){add("/"+n[1]);continue;}
  if(path.startsWith("public/team/")){add("/");}
 }
 return [...set].filter(x=>all.includes(x));
}
await verifyKey();
const response=await fetch(origin+"/sitemap.xml",{cache:"no-store",signal:AbortSignal.timeout(20000)});
if(!response.ok)throw new Error("Cannot load live sitemap: "+response.status);
const xml=await response.text();
const urls=[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1].replaceAll("&amp;","&"));
const changed=changedPaths();
const urlList=urlsForChanges(urls,changed);
if(!urlList.length){out("No indexable page content changed; no submission needed.");process.exit(0);}
out("Submitting",urlList.length,"updated URL(s)");
const submit=await fetch("https://api.indexnow.org/indexnow",{
 method:"POST",
 headers:{"Content-Type":"application/json; charset=utf-8"},
 body:JSON.stringify({host:"keylanedispatch.com",key,keyLocation,urlList}),
 signal:AbortSignal.timeout(30000)
});
const body=await submit.text();
out("Response",submit.status,body.slice(0,400));
if(![200,202].includes(submit.status))throw new Error("IndexNow submission failed: HTTP "+submit.status);
out("URLs successfully received by IndexNow. This does not guarantee indexing.");
