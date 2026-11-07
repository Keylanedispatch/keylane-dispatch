import "server-only";
import {readdir,readFile} from "node:fs/promises";
import {join} from "node:path";

export type BlogArticle={
 slug:string;title:string;description:string;publishedAt:string;updatedAt:string;
 sourceTitle:string;sourceUrl:string;sourcePublishedAt:string;
 category:string;summary:string;
 sections:{heading:string;paragraphs:string[]}[];
 takeaways:string[]; generationNote:string;
};
const dir=join(process.cwd(),"content","blog");
export async function listArticles():Promise<BlogArticle[]>{
 let entries:string[];
 try{entries=(await readdir(dir)).filter(x=>x.endsWith(".json"));}catch{return [];}
 const items=await Promise.all(entries.map(async file=>{
  try{const j=JSON.parse(await readFile(join(dir,file),"utf8")) as BlogArticle;
   if(j.slug!==file.slice(0,-5)||!j.title||!j.publishedAt||!Array.isArray(j.sections))return null;
   return j;
  }catch{return null;}
 }));
 return items.filter((x):x is BlogArticle=>Boolean(x)).sort((a,b)=>b.publishedAt.localeCompare(a.publishedAt));
}
export async function getArticle(slug:string){
 if(!/^[a-z0-9-]{4,100}$/.test(slug))return null;
 const articles=await listArticles();return articles.find(x=>x.slug===slug)||null;
}
