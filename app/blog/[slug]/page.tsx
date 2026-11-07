import type {Metadata} from "next";
import {notFound} from "next/navigation";
import Link from "next/link";
import {getArticle,listArticles} from "../blog-data";
import {SEOLayout,BASE} from "../../seo/SEOLayout";

type Params={params:Promise<{slug:string}>};
export const dynamicParams=false;
export async function generateStaticParams(){
 const articles=await listArticles();
 return articles.map(x=>({slug:x.slug}));
}
export async function generateMetadata({params}:Params):Promise<Metadata>{
 const {slug}=await params;const post=await getArticle(slug);
 if(!post)return {robots:{index:false,follow:false}};
 return {title:post.title+" | KeyLane Dispatch",description:post.description,
  alternates:{canonical:BASE+"/blog/"+post.slug},
  openGraph:{title:post.title,description:post.description,url:BASE+"/blog/"+post.slug,images:["/opengraph-image"],type:"article",publishedTime:post.publishedAt}
 };
}
export default async function BlogPost({params}:Params){
 const {slug}=await params;const post=await getArticle(slug);if(!post)notFound();
 const schema={"@context":"https://schema.org","@type":"BlogPosting",headline:post.title,
  description:post.description,datePublished:post.publishedAt,dateModified:post.updatedAt,
  mainEntityOfPage:BASE+"/blog/"+post.slug,author:{"@type":"Organization",name:"KeyLane Dispatch"},
  publisher:{"@type":"Organization",name:"KeyLane Dispatch",logo:{"@type":"ImageObject",url:BASE+"/keylane-logo.svg"}},
  isBasedOn:post.sourceUrl,inLanguage:"en-US",
  image:BASE+"/opengraph-image"};
 return <SEOLayout eyebrow={"TRUCKING NEWS · "+post.category.toUpperCase()} title={post.title} description={post.summary} crumbs={[{label:"Trucking News",path:"/blog"},{label:post.title,path:"/blog/"+post.slug}]}>
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/>
 <article className="seo-content-section"><div className="container blog-article">
  <p className="blog-article-meta">Published {new Date(post.publishedAt+"T12:00:00Z").toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",timeZone:"UTC"})} · Source: <a href={post.sourceUrl} rel="noopener noreferrer" target="_blank">{post.sourceTitle}</a></p>
  <div className="blog-article-body">
   {post.sections.map((section,i)=><section key={i}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph,j)=><p key={j}>{paragraph}</p>)}</section>)}
   <div className="blog-takeaways"><h2>Key takeaways for owner-operators</h2><ul>{post.takeaways.map((v,i)=><li key={i}>{v}</li>)}</ul></div>
   <h2>Original source</h2><p>Read the original reporting for the complete facts and context: <a href={post.sourceUrl} target="_blank" rel="noopener noreferrer">{post.sourceTitle}</a>.</p>
   <p className="blog-disclosure">{post.generationNote} This article provides general industry information, not legal, safety, or financial advice. Verify time-sensitive requirements with official sources.</p>
   <p>For dispatch questions, explore <Link href="/truck-dispatch-services">KeyLane truck dispatch services</Link>, <Link href="/owner-operator-dispatch">owner-operator support</Link>, and <Link href="/dispatch-pricing">pricing</Link>.</p>
  </div>
 </div></article>
 </SEOLayout>;
}
