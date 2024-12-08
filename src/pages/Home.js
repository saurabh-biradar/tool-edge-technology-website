import { Container, Row, Col } from "react-bootstrap";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <>
        <HeroSection page = "home" content_start = "Welcome to" content_end = "Tool Edge Technology" content_tagline = "Today's Revolution" content_btn = "Get a Quote"/>
    </>
  );
}

