import { NavLink, Link } from "react-router-dom";

const links = [
  ["/", "Home"],
  ["/clothing", "Clothing"],
  ["/women-products", "Women Products"],
  ["/innerwear", "Inner Wear"],
  ["/skincare", "Skincare"],
  ["/dress-materials", "Dress Materials"],
  ["/stitching", "Stitching"],
  ["/gallery", "Gallery"],
  ["/about", "About"],
  ["/contact", "Contact"],
];

export default function Navbar() {

  const closeMobileMenu = () => {
    const nav = document.getElementById("nav");

    if (nav && nav.classList.contains("show")) {
      nav.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top site-nav">
      <div className="container">

        {/* LOGO */}
        <Link
          className="navbar-brand brand"
          to="/"
          onClick={closeMobileMenu}
        >
           <div className="d-flex gap-2"> <span className="brand-mark">LVS</span><span className="fs-5"><b>Laxmi</b> vara<small className="text-dark">silks </small></span>
</div>
        </Link>


        {/* MOBILE HAMBURGER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>


        {/* NAVIGATION */}
        <div
          className="collapse navbar-collapse"
          id="nav"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">

            {links.map(([to, label]) => (
              <li
                className="nav-item"
                key={to}
              >
                <NavLink
                  className="nav-link"
                  to={to}
                  onClick={closeMobileMenu}
                >
                  {label}
                </NavLink>
              </li>
            ))}


            {/* ENQUIRE BUTTON */}
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <Link
                className="btn btn-brand btn-sm px-3"
                to="/contact"
                onClick={closeMobileMenu}
              >
                <i className="bi bi-chat-heart me-1"></i>
                Enquire
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}