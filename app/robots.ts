import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
 return {
  rules:{userAgent:"*",allow:"/"},
  sitemap:"https://keylanedispatch.com/sitemap.xml",
  host:"https://keylanedispatch.com",
 };
}
