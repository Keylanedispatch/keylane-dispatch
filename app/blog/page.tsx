import type {Metadata} from "next";
import Link from "next/link";
import {listArticles} from "./blog-data";
import {SEOLayout,BASE} from "../seo/SEOLayout";

export async function generateMetadata():Promise<Metadata>{
 const posts=await listArticles();
 return {title:"Trucking News and Owner-Operator Insights | KeyLane Dispatch",
  description:"Practical U.S. trucking news and insights for owner-operators. Learn what industry developments may mean for lanes, freight operations, and carrier decisions.",
  alternates:{canonical:BASE+"/blog"},
  robots:posts.length?{index:true,follow:true}:{index:false,follow:true}
 };
}
export default async function Blog(){
 const posts=await listArticles();
 return <SEOLayout eyebrow="KEYLANE DISPATCH JOURNAL" title="Trucking news and practical insights for U.S. carriers" description="Industry developments, freight-market context, and clear takeaways for owner-operators and small fleets. We link to original reporting and distinguish reported facts from practical considerations." crumbs={[{label:"Trucking News",path:"/blog"}]}>
 <section className="seo-content-section"><div className="container">
  {posts.length?<div className="blog-post-grid">{posts.map(post=><article className="blog-card" key={post.slug}><span className="section-kicker">{post.category} · {new Date(post.publishedAt+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",timeZone:"UTC"})}</span><h2><Link href={"/blog/"+post.slug}>{post.title}</Link></h2><p>{post.description}</p><Link className="blog-read-more" href={"/blog/"+post.slug}>Read analysis →</Link></article>)}</div>:
  <div className="seo-prose"><h2>News coverage is being prepared</h2><p>We will publish useful coverage when there is a relevant, verifiable U.S. trucking development. The blog is not a syndicated copy of other news sites. In the meantime, explore our <Link href="/truck-dispatch-services">truck dispatch services</Link> and <Link href="/owner-operator-dispatch">owner-operator guides</Link>.</p></div>}
 </div></section></SEOLayout>;
}
