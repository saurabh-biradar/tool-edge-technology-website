import { Container, Row, Col } from "react-bootstrap";
import HeroSection from "../components/HeroSection";
import bg_image from "../assets/images/service_hero.svg"
import "../styles/about.css"

export default function Services() {
  return (
    <>
        <HeroSection page = "services" content_start = "Our" content_end = "Services" content_tagline = "Providing top-quality services with a focus on precision and timely delivery. Dedicated to meeting all needs." content_btn = "Get a Quote" img = {bg_image}/>
    </>
  );
}

