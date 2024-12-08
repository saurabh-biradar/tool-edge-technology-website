import { Container, Row, Col } from "react-bootstrap";
import HeroSection from "../components/HeroSection";
import bg_image from "../assets/images/contact_hero.svg"
import "../styles/contacts.css"

export default function Contacts() {
  return (
    <>
        <HeroSection page = "contacts" content_start = "Get In" content_end = "Touch" content_tagline = "We are available 24/7 by e-mail or by phone. You can also use our quick contact form to ask a question about our services." content_btn = "Connect Now" img = {bg_image}/>
    </>
  );
}

