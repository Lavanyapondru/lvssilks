import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { gallery } from "../data/gallery";

export default function About() {
  return (
    <>
      <section className="inner-hero">
        <div className="container">
          <span className="eyebrow">THE WOMEN NEEDS STORY</span>
          <h1>Created around her.</h1>
          <p>
            A dummy story page you can replace with your brand’s real journey,
            values and founder story.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* Image */}
            <div className="col-lg-6">
              <div className="about-image-wrapper">
                <img
                  src={gallery[6]}
                  alt="Women Needs story"
                  className="about-image"
                />
              </div>
            </div>

            {/* Content */}
            <div className="col-lg-6">
              <div className="about-content text-start">

                <SectionTitle
                  eyebrow="OUR IDEA"
                  title="More than a store"
                  text="Women Needs is designed as a warm, approachable Indian women’s lifestyle destination. The goal is to make everyday shopping feel easy — whether she is looking for an outfit, self-care, fabric or a trusted tailor."
                />

                <div className="values">
                  <span><i className="bi bi-heart"></i> Women-first
                  </span>

                  <span> 
                    <i className="bi bi-hand-thumbs-up"></i> 
                     Quality-minded
                  </span>

                  <span>
                    <i className="bi bi-flower1"></i>
                    Thoughtful
                  </span>
                </div>

                <Link
                  to="/contact"
                  className="btn btn-brand mt-4"
                >
                  Talk to Us
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
