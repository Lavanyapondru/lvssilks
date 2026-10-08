import {Link} from "react-router-dom";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import {categories,products} from "../data/products";
import {gallery} from "../data/gallery";

export default function Home(){
 return <>
  <Hero/>
  <section className="py-5"><div className="container"><SectionTitle eyebrow="SHOP BY NEED" title="A little something for every part of her day" text="From festive dressing to everyday comfort and self-care."/><div className="row g-4">{categories.map(c=><div className="col-md-6 col-lg" key={c.path}><Link className="category-card" to={c.path}><i className={"bi "+c.icon}></i><h5>{c.title}</h5><p>{c.text}</p><span>Explore <i className="bi bi-arrow-up-right"></i></span></Link></div>)}</div></div></section>
  <section className="soft-section py-5"><div className="container"><SectionTitle eyebrow="CUSTOMER FAVOURITES" title="Loved pieces, chosen with care"/><div className="row g-4">{products.slice(0,4).map(p=><div className="col-6 col-lg-3" key={p.id}><ProductCard product={p}/></div>)}</div><div className="text-center mt-5"><Link to="/shop" className="btn btn-outline-brand">View All Products</Link></div></div></section>
  <section className="story-strip"><div className="container"><div className="row align-items-center g-5"><div className="col-lg-6"><img src={gallery[3]} alt="Women Needs collection"/></div><div className="col-lg-6"><span className="eyebrow">OUR PROMISE</span><h2>Style that feels like you.</h2><p>Women Needs is a dummy boutique concept created around the idea that women should be able to discover fashion, self-care and tailoring in one comfortable space.</p><Link to="/about" className="btn btn-brand">Know Our Story</Link></div></div></div></section>
 </>;
}