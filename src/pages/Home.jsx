import HeroWithNavbar from "../components/HeroWithNavbar";
import SEO from "../components/SEO";
import About from "./About";
import Services from "./Services";
import Works from "./Works";
import Career from "./Career";
import Blogs from "./Blogs";
import Products from "./Products";
import ContactUs from "./Contact"

export default function Home() {
  return (
    <div>
      <SEO
        title="Code X Novas — Digital Product Studio | Web & Product Design"
        description="We build modern, fast websites and digital products that help startups and teams scale. Services: web design, product engineering, brand systems."
        url="https://codexnovas.in/"
      />
      <HeroWithNavbar />
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="works"><Works /></section>
      <section id="career"><Career /></section>
      <section id="blogs"><Blogs /></section>
      <section id="products"><Products /></section>
      <section id="contact"><ContactUs /></section>
    </div>
  );
}
