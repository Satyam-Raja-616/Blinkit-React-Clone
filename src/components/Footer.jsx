import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-top bg-light py-5 mt-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <h5 className="fw-bold mb-2">
              <span style={{ color: "#f8cb46" }}>blink</span>

              <span style={{ color: "#0c831f" }}>it</span>
            </h5>

            <p className="text-secondary small col-8 col-md-6">
              Superfast delivery of groceries and essentials in 10 minutes.
            </p>
          </div>

          <div className="col-6 col-md-4">
            <h6 className="fw-bold small text-uppercase mb-3">Useful Links</h6>

            <ul className="list-unstyled small d-flex flex-column gap-2 mb-0">
              <li>
                <Link to="#" className="text-decoration-none text-secondary">
                  Blog
                </Link>
              </li>

              <li>
                <Link to="#" className="text-decoration-none text-secondary">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link to="#" className="text-decoration-none text-secondary">
                  Terms
                </Link>
              </li>

              <li>
                <Link to="#" className="text-decoration-none text-secondary">
                  FAQs
                </Link>
              </li>

              <li>
                <Link to="#" className="text-decoration-none text-secondary">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-4">
            <h6 className="fw-bold small text-uppercase mb-3">Download App</h6>

            <div className="d-flex flex-column gap-2">
              <p className="text-secondary small">Google Play</p>
              <p className="text-secondary small">Play Store</p>
            </div>
          </div>
        </div>

        <div className="text-center text-secondary small border-top pt-3 mt-4">
          © 2026 Blinkit Clone, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
