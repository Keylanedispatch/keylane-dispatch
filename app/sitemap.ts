import type { MetadataRoute } from "next";
import {equipmentSEO} from "./seo/equipment-data";
import {listArticles} from "./blog/blog-data";
const base="https://keylanedispatch.com";
export default async function sitemap():Promise<MetadataRoute.Sitemap> {
 const articles=await listArticles();
 const paths=[
  {path:"",priority:1,changeFrequency:"weekly" as const},
  {path:"/truck-dispatch-services",priority:.9,changeFrequency:"monthly" as const},
  {path:"/owner-operator-dispatch",priority:.9,changeFrequency:"monthly" as const},
  {path:"/dispatch-pricing",priority:.8,changeFrequency:"monthly" as const},
  ...equipmentSEO.map(e=>({path:"/equipment/"+e.slug,priority:.8,changeFrequency:"monthly" as const})),
  ...(articles.length ? [{path:"/blog",priority:.7,changeFrequency:"weekly" as const}] : []),
  ...articles.map(article=>({path:"/blog/"+article.slug,priority:.7,changeFrequency:"monthly" as const})),
  {path:"/privacy",priority:.2,changeFrequency:"yearly" as const}
 ];
 return paths.map(p=>({url:base+p.path,changeFrequency:p.changeFrequency,priority:p.priority}));
}
