import React from "react";

export default function AboutUs() {
  return (
    <section className="aboutus about-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>About Finastra</h2>
              <p className="f-para">
                Finastra is a global provider of financial services software
                applications across Lending, Payments, Treasury and Capital
                Markets, and Universal (retail and digital) Banking. Committed
                to unlocking the potential of people, businesses and communities
                everywhere, its vision is to accelerate the future of Open
                Finance through technology and collaboration, and its pioneering
                approach is why it is trusted by ~8,100 financial institutions,
                including 45 of the world's top 50 banks.
              </p>
              <p>
                For more information, visit{" "}
                <a
                  href="https://www.finastra.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aboutus-link"
                >
                  www.finastra.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
