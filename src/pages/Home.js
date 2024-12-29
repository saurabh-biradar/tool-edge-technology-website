import { Container, Row, Col } from "react-bootstrap";
import HeroSection from "../components/HeroSection";
import workingImg from "../assets/images/who_we_are_img.png"
import mahindra_svg from "../assets/images/mahindra_vector.svg"
import godrej_svg from "../assets/images/godrej_vector.svg"
import reliance_svg from "../assets/images/reliance_vector.svg"
import jcb_svg from "../assets/images/jcb_vector.svg"
import ashok_leyland_svg from "../assets/images/ashok_leyland_vector.svg"
import "../styles/home.css"
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import ReactOwlCarousel from "react-owl-carousel";

export default function Home() {
  const [counterOn, setCounterOn] = useState(false);
  const options = {
    loop: false,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    stagePadding: 0,
    dots: true,
    dotsEach: 1,
    responsive: {
      0: {
        items: 1
      },
      360: {
        items: 1
      },
      576: {
        items: 3
      },
      900: {
        items: 4
      },
      1580: {
        items: 5
      }
    }
  };
  return (
    <>
      <HeroSection page="home" content_start="Welcome to" content_end="Tool Edge Technology" content_tagline="Today's Revolution" content_btn="Get a Quote" />
      <Container id="home-who-we-are-section" fluid>
        <Row>
          <Col id="about-img" className="text-center d-none d-lg-block" xl={{ span: 6, offset: 1 }} lg={5}>
            <img src={workingImg} id="floating-image" alt="hero-section-img" />
          </Col>
          <Col id="about-content" className="d-flex align-items-center justify-content-center" xl={5} lg={7} sm={12}>
            <Container fluid>
              <h2 className="home-title">Who We Are?</h2>
              <p>Started in 2014 in Maharashtra, Tool Edge Technology has become a leading manufacturer of CNC components, Jig Fixtures, Plug Gauges, Taper Gauges, and more.

                We pride ourselves on offering high-quality products at affordable prices. Our items are well-loved for their excellent quality, smooth finish, and various  designs.

                Our commitment to timely delivery has earned us the trust and loyalty of our clients.
                <a href="/about">Read More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5" />
                </svg></a>
              </p>
            </Container>
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
      <Container id="home-trusted-partners" fluid>
        <Row id="home-trusted-partners-title">
          <h2 className="home-title">Trusted Partners</h2>
        </Row>
        <Row id="home-partners-section">
          <ReactOwlCarousel class="owl-carousel owl-theme" {...options}>
            <div class="item"><img src={mahindra_svg} alt="mahindra_svg" /></div>
            <div class="item"><img src={godrej_svg} alt="cummins_svg" /></div>
            <div class="item"><img src={reliance_svg} alt="reliance_svg" /></div>
            <div class="item"><img src={jcb_svg} alt="jcb_svg" /></div>
            <div class="item"><img src={ashok_leyland_svg} alt="ashok_leyland_svg" /></div>
          </ReactOwlCarousel>
        </Row>
      </Container>
    </>
  );
}
