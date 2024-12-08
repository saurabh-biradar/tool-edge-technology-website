import { Container, Row, Col } from "react-bootstrap";
import HeroSection from "../components/HeroSection";
import bg_image from "../assets/images/about_hero.svg"
import "../styles/about.css"

export default function About() {
  return (
    <>
        <HeroSection page = "about" content_start = "Who" content_end = "We Are?" content_tagline = "We are manufacturer of CNC Components, Jig Fixtures, Taper Gauges and much more." content_btn = "Know More" img = {bg_image}/>
    </>
  );
}

