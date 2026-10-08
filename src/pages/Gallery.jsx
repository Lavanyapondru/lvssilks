import { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { products } from "../data/products";

export default function Gallery() {
  const [active, setActive] = useState(null);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    // Get all product images
    const images = products
      .map((product) => product.image)
      .filter(Boolean);

    // Automatically shuffle all images
    const shuffledImages = [...images].sort(
      () => Math.random() - 0.5
    );

    setGallery(shuffledImages);
  }, []);

  return (
    <section className="page-section">
      <div className="container">

        <SectionTitle
          eyebrow="OUR WORLD"
          title="Women Needs Gallery"
          text="Explore our latest collection."
        />

        {/* Gallery */}
        <div className="gallery-grid">
          {gallery.map((src, i) => (
            <button
              className="gallery-item"
              onClick={() => setActive(i)}
              key={`${src}-${i}`}
            >
              <img
                src={src}
                alt={`Women Needs gallery ${i + 1}`}
              />

              <span>
                View <i className="bi bi-plus-lg"></i>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="lightbox"
          onClick={() => setActive(null)}
        >
          <button
            className="close-lightbox"
            onClick={() => setActive(null)}
          >
            <i className="bi bi-x-lg"></i>
          </button>

          {/* Previous Image */}
          <button
            className="gallery-arrow left"
            onClick={(e) => {
              e.stopPropagation();

              setActive(
                (active - 1 + gallery.length) %
                  gallery.length
              );
            }}
          >
            <i className="bi bi-chevron-left"></i>
          </button>

          {/* Enlarged Image */}
          <img
            src={gallery[active]}
            alt="Gallery enlarged"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next Image */}
          <button
            className="gallery-arrow right"
            onClick={(e) => {
              e.stopPropagation();

              setActive(
                (active + 1) % gallery.length
              );
            }}
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      )}
    </section>
  );
}
