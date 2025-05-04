import logo from "../img/logo.png";

export default function Header() {
  return (
    <header class="header-section">
      <div class="container">
        <div class="logo">
          <a href="./index.html">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div class="nav-menu">
          <nav class="mainmenu mobile-menu">
            <ul>
              <li class="active">
                <a href="#event-overview">Event Overview</a>
              </li>
              <li>
                <a href="#our-speakers">Our Speakers</a>
              </li>
              <li>
                <a href="#agenda">Agenda</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          {/* <a href="#" class="primary-btn top-btn">
            <i class="fa fa-ticket"></i> Register Now
          </a> */}
        </div>
        <div id="mobile-menu-wrap"></div>
      </div>
    </header>
  );
}
