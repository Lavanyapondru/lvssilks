import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Innerwear() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { key: "all", label: "All" },
    { key: "bra", label: "Bras" },
    { key: "panties", label: "Panties" },
    { key: "sets", label: "Lingerie Sets" },
    { key: "shapewear", label: "Shapewear" },
    { key: "sportswear", label: "Sports Wear" },
    { key: "camisoles", label: "Camisoles" },
    // { key: "swimwear", label: "Swimwear" },
  ];

  // Filter products based on selected tab
  const list = products.filter((product) => {
    // Show every innerwear product
    if (activeTab === "all") {
      return product.category === "innerwear";
    }

    // Show products matching the selected subcategory
    return (
      product.category === "innerwear" &&
      product.subcategory === activeTab
    );
  });

  return (
    <>
      {/* Hero Section */}
      <section className="inner-hero">
        <div className="container">
          <span className="eyebrow">
            COMFORT • CONFIDENCE • EVERYDAY ESSENTIALS
          </span>

          <h1>Women’s Innerwear</h1>

          <p>
            Everyday comfort with bras, panties, sets, shapewear,
            camisoles and essential innerwear for every need.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="page-section">
        <div className="container">
          <SectionTitle
            eyebrow="INNERWEAR EDIT"
            title="Comfort that feels just right"
          />

          {/* Category Tabs */}
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

          {/* Product Grid */}
          <div className="row g-4 mt-2">
            {list.length > 0 ? (
              list.map((product) => (
                <div
                  className="col-6 col-md-4 col-lg-3"
                  key={product.id}
                >
                  <ProductCard product={product} />
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

