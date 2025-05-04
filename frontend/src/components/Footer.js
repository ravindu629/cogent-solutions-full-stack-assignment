import award1 from "../img/awards/award-1.png";
import award2 from "../img/awards/award-2.png";
import award3 from "../img/awards/award-3.png";
import award4 from "../img/awards/award-4.png";

export default function Footer() {
  return (
    <footer className="footer-section bg-black text-white py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h4 className="fw-bold">Cogent Solutions™</h4>
            <br />
            <p>
              Through our conferences, we transform your business challenges
              into opportunities. Our clients include leading government
              entities and Fortune 500 companies.
            </p>

            <h5 className="mt-4">Awards</h5>
            <div className="d-flex flex-wrap gap-3 mt-3">
              {[award1, award2, award3, award4].map((award, index) => (
                <img
                  key={index}
                  src={award}
                  alt={`Award ${index + 1}`}
                  height={120}
                  style={{ maxWidth: "100%", objectFit: "contain" }}
                />
              ))}
            </div>
          </div>

          <div className="col-12 col-md-6">
            <h4 className="fw-bold">Our Office</h4>
            <br />
            <ul className="list-unstyled">
              <li className="mt-2 d-flex align-items-start">
                <i className="fa fa-map-marker me-3 mt-1"></i>&nbsp;&nbsp;
                <span>
                  <strong>Middle East & Africa HQ:</strong> Office No: 209, The
                  Metropolis Tower, Business Bay, Dubai, UAE
                </span>
              </li>
              <li className="mt-2 d-flex align-items-start">
                <i className="fa fa-map-marker me-3 mt-1"></i>&nbsp;&nbsp;
                <span>
                  <strong>Asia Pacific HQ:</strong> 7th floor, Green Lanka
                  Tower, Colombo, Sri Lanka
                </span>
              </li>
              <li className="mt-2 d-flex align-items-start">
                <i className="fa fa-map-marker me-3 mt-1"></i>&nbsp;&nbsp;
                <span>
                  <strong>Saudi Arabia HQ:</strong> Riyadh, Saudi Arabia
                </span>
              </li>
              <li className="mt-3 d-flex align-items-center">
                <i className="fa fa-phone me-3"></i>&nbsp;&nbsp;
                <span>+971 50 5718867</span>
              </li>
              <li className="mt-2 d-flex align-items-center">
                <i className="fa fa-envelope me-3"></i>&nbsp;&nbsp;
                <a
                  href="mailto:partnerships@cogentsolutions.ae"
                  className="text-white text-decoration-none"
                >
                  partnerships@cogentsolutions.ae
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row pt-3 border-top border-secondary mt-4">
          <div className="col-12 col-md-6 text-center text-md-start">
            <p className="mb-2 mb-md-0">
              &copy; {new Date().getFullYear()} Cogent Solutions Event
              Management LLC. All Rights Reserved.
            </p>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end align-items-center mt-3 mt-md-0">
            <div className="ft-social">
              <a href="#" className="text-white me-3" aria-label="LinkedIn">
                <i className="fa fa-linkedin"></i>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="#" className="text-white me-3" aria-label="Facebook">
                <i className="fa fa-facebook"></i>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="#" className="text-white me-3" aria-label="Instagram">
                <i className="fa fa-instagram"></i>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="#" className="text-white" aria-label="Twitter">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
