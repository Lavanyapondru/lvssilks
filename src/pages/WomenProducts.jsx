import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function WomenProducts() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { key: "all", label: "All", icon: "bi-grid" },
    { key: "Footwear", label: "Footwear", icon: "bi-shoe-prints" },
    { key: "Beauty", label: "Beauty ", icon: "bi-stars" },
    // { key: "Jewellery", label: "Jewellery ", icon: "bi-gem" },
    { key: "Accessories", label: "Handbags", icon: "bi-handbag" },
    // { key: "Makeup", label: "Makeup", icon: "bi-brush" },
    // { key: "Healthcare", label: "Healthcare", icon: "bi-doctor" },
    { key: "Watches", label: "Watches", icon: "bi-watch" },

    // {
    //   key: "Baby&Mom care",
    //   label: "Baby & Mom Care",
    //   icon: "bi-heart",
    // },
  ];

  const list = products.filter((p) => {
    // ALL PRODUCTS
    if (activeTab === "all") {
      return p.category === "womenProducts";
    }

    // SELECTED CATEGORY
    return (
      p.category === "womenProducts" &&
      p.subcategory === activeTab
    );
  });

  return (
    <>
      {/* Hero */}
      <section className="inner-hero">
        <div className="container">
          <span className="eyebrow">
            WOMEN • BEAUTY • COMFORT
          </span>

          <h1>Women’s Products</h1>

          <p>
            Discover footwear, beauty, jewellery, accessories,
            makeup and everyday essentials for women and families.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="page-section">
        <div className="container">

          <SectionTitle
            eyebrow="WOMEN'S COLLECTION"
            title="Everything she needs"
          />

          {/* Tabs */}
          <div className="mini-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                className={activeTab === tab.key ? "active" : ""}
                onClick={() => setActiveTab(tab.key)}
              >
                <i className={`bi ${tab.icon} `}></i>
                <span> {tab.label}</span>
              </button>
            ))}
          </div>

          {/* Products */}
          <div className="row g-4 mt-2">
            {list.length > 0 ? (
              list.map((p) => (
                <div
                  className="col-6 col-md-4 col-lg-3"
                  key={p.id}
                >
                  <ProductCard product={p} />
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <p>No products found in this category.</p>
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
