import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import background_img from "../assets/images/hero_section_bg.gif"
import "../styles/heroSection.css"

export default function HomeHeroSection(props) {
  return (
    <>
      <section className="hero" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background_img})`}}>
      </section>
      <Container className="hero-container d-flex align-items-center" style={{ color: '#FFFFFF' }} fluid>
        <Row className="home-hero-content">
          <Col sm={12}><h2>{props.content_start} <br /><span>{props.content_end}</span></h2></Col>
          <Col sm={12}><h5><span>| </span>{props.content_tagline} </h5></Col>
          <Col sm={12}><Button variant={"light"} style={{ fontWeight: 'bold' }}>{props.content_btn} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5" />
          </svg></Button></Col>
        </Row>
      </Container>
    </>
  );
}
