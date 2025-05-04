import About from "./components/About";
import AboutUs from "./components/AboutUs";
import Agenda from "./components/Agenda";
import ContactForm from "./components/ContactForm";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Speakers from "./components/Speakers";

function App() {
  return (
    <div>
      <div id="preloder">
        <div class="loader"></div>
      </div>
      <Header />
      <Hero />
      <Counter />
      <section id="event-overview">
        <About />
      </section>
      <section id="our-speakers">
        <Speakers />
      </section>
      <section id="agenda">
        <Agenda />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
}

export default App;
