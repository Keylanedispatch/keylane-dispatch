import type { MetadataRoute } from "next";
import {equipmentSEO} from "./seo/equipment-data";
const base="https://keylanedispatch.com";
export default function sitemap():MetadataRoute.Sitemap {
 const paths=[
  {path:"",priority:1,changeFrequency:"weekly" as const},
  {path:"/truck-dispatch-services",priority:.9,changeFrequency:"monthly" as const},
  {path:"/owner-operator-dispatch",priority:.9,changeFrequency:"monthly" as const},
  {path:"/dispatch-pricing",priority:.8,changeFrequency:"monthly" as const},
  ...equipmentSEO.map(e=>({path:"/equipment/"+e.slug,priority:.8,changeFrequency:"monthly" as const})),
  {path:"/privacy",priority:.2,changeFrequency:"yearly" as const}
 ];
 return paths.map(p=>({url:base+p.path,changeFrequency:p.changeFrequency,priority:p.priority}));
}
