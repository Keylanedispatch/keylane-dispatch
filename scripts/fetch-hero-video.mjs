import {mkdir,stat,writeFile} from "node:fs/promises";
import {join} from "node:path";
const file=join(process.cwd(),"public","media","keylane-live-drive.mp4");
const url="https://videos.pexels.com/video-files/17899033/17899033-hd_1920_1080_24fps.mp4";
try{
 try{const st=await stat(file);if(st.size>100000){console.log("Hero footage already present");process.exit(0)}}catch{}
 const r=await fetch(url,{headers:{"User-Agent":"Mozilla/5.0 KeyLaneDispatch Website","Accept":"video/mp4,*/*"}});
 if(!r.ok)throw new Error("Video download HTTP "+r.status);
 const bytes=new Uint8Array(await r.arrayBuffer());
 if(bytes.length<100000 || bytes.length>50*1024*1024)throw new Error("Unexpected footage size "+bytes.length);
 await mkdir(join(process.cwd(),"public","media"),{recursive:true});
 await writeFile(file,bytes);
 console.log("Saved licensed Pexels driving footage, "+bytes.length+" bytes");
}catch(err){console.warn("Could not cache driving footage; remote video fallback remains available:",String(err));}
