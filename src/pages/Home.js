import { Container, Row, Col, Button, NavLink } from "react-bootstrap";
import HeroSection from "../components/HeroSection";
import workingImg from "../assets/images/working.svg"
import "../styles/home.css"
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

export default function Home() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <HeroSection page="home" content_start="Welcome to" content_end="Tool Edge Technology" content_tagline="Today's Revolution" content_btn="Get a Quote" />
      <Container id="home-who-we-are-section" fluid>
        <Row>
          <h2 className="home-title">Who We Are?</h2>
        </Row>
        <Row>
          <Col id="about-img" className="d-flex align-items-center justify-content-center" xxl={{ span: 6, offset: 1 }} lg={5} sm={12}>
            <img src={workingImg} id="floating-image" alt="hero-section-img" />
          </Col>
          <Col id="about-content" className="d-flex align-items-center justify-content-center" xxl={5} lg={7} sm={12}>
            <p>Started in 2014 in Maharashtra, Tool Edge Technology has become a leading manufacturer of CNC components, Jig Fixtures, Plug Gauges, Taper Gauges, and more.

              We pride ourselves on offering high-quality products at affordable prices. Our items are well-loved for their excellent quality, smooth finish, and various  designs.

              Our commitment to timely delivery has earned us the trust and loyalty of our clients.
              <a href="/about">Read More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5" />
              </svg></a>
            </p>
          </Col>
        </Row>
      </Container>
      <Container id="home-why-companies-trust-us" fluid>
        <Row id="home-numbers-title">
          <h2 className="home-title">Why Companies<br className="visible-on-small-screens" /> Trust Us</h2>
        </Row>
        <ScrollTrigger onEnter={() => setCounterOn(true)}>
          <Row id="home-numbers">
            <Col className="home-subtitles" md={3} sm={6}><p><span>{counterOn && <CountUp start={0} end={17} duration={3} delay={0} />}</span><br />Years in industry</p></Col>
            <Col className="home-subtitles" md={3} sm={6}><p><span>{counterOn && <CountUp start={0} end={50} duration={3} delay={0} />}+</span><br />Products Made</p></Col>
            <Col className="home-subtitles" md={3} sm={6}><p><span>#{counterOn && <CountUp start={0} end={100} duration={3} delay={0} />}</span><br />Successful Projects</p></Col>
            <Col className="home-subtitles" md={3} sm={6}><p><span>{counterOn && <CountUp start={0} end={150} duration={3} delay={0} />}+</span><br />Happy Clients</p></Col>
          </Row>
        </ScrollTrigger>
      </Container>
    </>
  );
}
