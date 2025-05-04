import about from "../img/h-about.jpg";
import {
  FaChalkboardTeacher,
  FaLightbulb,
  FaUsers,
  FaGraduationCap,
  FaShareAlt,
} from "react-icons/fa";

export default function About() {
  return (
    <section class="home-about-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="ha-pic">
              <img src={about} alt="" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="ha-text">
              <h2>Event Overview</h2>
              <p>
                Join us on April 9th in Cairo, Egypt, for Finastra's Universal
                Banking Forum, "Reimagine Banking: Adapt. Evolve. Thrive." This
                exclusive event is designed to help you navigate and excel in
                the rapidly evolving banking landscape. Our forum will bring
                together business and technology experts, industry leaders, and
                visionaries to share their insights on the latest trends and
                challenges in the banking sector.
              </p>
              <a href="#" class="ha-btn">
                TOP REASONS WHY THIS IS THE ONLY CONFERENCE YOU NEED TO ATTEND
                IN 2025
              </a>
              <br />
              <br />
              <ul>
                <li>
                  <span>
                    <FaChalkboardTeacher />
                  </span>{" "}
                  Learn from industry experts
                </li>
                <li>
                  <span>
                    <FaLightbulb />
                  </span>{" "}
                  Stay ahead of emerging trends
                </li>
                <li>
                  <span>
                    <FaUsers />
                  </span>{" "}
                  Connect with fellow banking professionals
                </li>
                <li>
                  <span>
                    <FaGraduationCap />
                  </span>{" "}
                  Enhance your knowledge, skills, and network
                </li>
                <li>
                  <span>
                    <FaShareAlt />
                  </span>{" "}
                  Share your expertise and experience with peers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
