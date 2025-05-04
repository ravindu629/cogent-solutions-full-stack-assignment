import hero from "../img/hero.jpg";
import hero_right from "../img/hero-right.png";
import org from "../img/organization.png";

export default function Hero() {
  return (
    <section
      class="hero-section set-bg"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="hero-text">
              <span>Organized By</span>
              <br />
              <br />
              <img src={org} alt="Logo" style={{ width: "320px" }} />
              <br />
              <h2>
                Reimagine Banking
                <br /> Adapt. Evolve. Thrive.
              </h2>
              <span>Date: 9th August 2025, </span>
              <span>The Nile Ritz-Carlton, Cairo, Egypt</span>
              <br />
              <span>Time: 9:30 AM - 2:00 PM GMT+2</span>
              <br />
              <br />
              <a href="#" class="primary-btn register-btn">
                Register Now
              </a>
            </div>
          </div>
          <div class="col-lg-5">
            <img src={hero_right} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
