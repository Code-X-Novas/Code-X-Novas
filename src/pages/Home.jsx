import HeroWithNavbar from "../components/HeroWithNavbar";
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
