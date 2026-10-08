import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Clothing() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { key: "all", label: "All" },
    { key: "sarees", label: "Sarees" },
    { key: "ethnic", label: "Ethnic Wear" },
    { key: "western", label: "Western Wear" },
    // { key: "innerwear", label: "Inner wear" },
    { key: "personal", label: "Night Wear" },
    { key: "kids", label: "kids Wear" },
    // { key: "lounge", label: "Home & Lounge" },
    // { key: "materials", label: "materials" },
  ];

  const list = products.filter((p) => {
    // All tab: show all clothing and personal products
    if (activeTab === "all") {
      return (
        p.category === "clothing" ||
        p.category === "personal"
      );
    }

    // Other tabs: show matching subcategory
    return (
      (p.category === "clothing" || p.category === "personal") &&
      p.subcategory === activeTab
    );
  });

  return (
    <>
      <section className="inner-hero">
        <div className="container">
          <span className="eyebrow">
            FASHION • COMFORT • CONFIDENCE
          </span>

          <h1>Women’s Clothing</h1>

          <p>
            Sarees, kurtis, dresses, ethnic sets, lounge styles and
            personal essentials for every mood and moment.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionTitle
            eyebrow="CLOSET EDIT"
            title="From everyday to occasion wear"
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
                {tab.label}
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
