import { Container, Row, Col } from "react-bootstrap";
import '../styles/footer.css'
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import whatsapp_logo from "../assets/images/whatsapp_logo.png";
import twitter_logo from "../assets/images/twitter_logo.png";
import instagram_logo from "../assets/images/instagram_logo.png";
import linkedin_logo from "../assets/images/linkedin_logo.png";
import mail_img from "../assets/images/mail_img.png";
import location_img from "../assets/images/location_img.png";
import phone_img from "../assets/images/phone_img.png";


export default function Footer() {
    return (
        <>
            <div className="footer text-white">
                <Container fluid className="footer-container-fluid">
                    <Row className="footer-first-row">
                        <Container className="footer-inner-container">
                            <Row>
                                <Col className="footer-first-col" xl={{ span: 4, offset: 2 }} lg={{ span: 5, offset: 1 }} md={{ span: 6, offset: 1 }} sm={{ span: 10, offset: 1 }}>
                                    <Row>
                                        <Col sm={12}>
                                            <div className="brand-logo d-flex  align-items-center">
                                                <img
                                                    src={logo}
                                                    width="100"
                                                    height="100"
                                                    alt="Tool Edge Technology Logo"
                                                />
                                                <h3 className="ms-3"><span>Tool Edge</span><br />Technology</h3>
                                            </div>
                                        </Col>
                                        <Col sm={12}>
                                            <p>At Tooledge Technology, we are proud to be
                                                at the forefront of precision engineering
                                                and manufacturing</p>
                                        </Col>
                                        <Col className="footer-social-media" sm={12}>
                                            <Link>
                                                <img
                                                    src={whatsapp_logo}
                                                    width="30"
                                                    height="30"
                                                    alt="whatsapp"
                                                />
                                            </Link>
                                            <Link>
                                                <img
                                                    src={twitter_logo}
                                                    width="30"
                                                    height="30"
                                                    alt="twitter"
                                                />
                                            </Link>
                                            <Link>
                                                <img
                                                    src={instagram_logo}
                                                    width="30"
                                                    height="30"
                                                    alt="instagram"
                                                />
                                            </Link>
                                            <Link>
                                                <img
                                                    src={linkedin_logo}
                                                    width="30"
                                                    height="30"
                                                    alt="linkedin"
                                                />
                                            </Link>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl={{ span: 4, offset: 1 }} lg={{ span: 4, offset: 1 }} md={{ span: 5, offset: 0 }} sm={{ span: 10, offset: 1 }}>
                                    <Row className="footer-contacts">
                                        <Col sm={12}>
                                            <h4>Official Info</h4>
                                        </Col>
                                        <Col sm={12}>
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src={mail_img}
                                                    width="30"
                                                    height="30"
                                                    alt="mail"
                                                />
                                                <p>Info@tooledgetechnology.com</p>
                                            </div>
                                        </Col>
                                        <Col sm={12}>
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src={location_img}
                                                    width="30"
                                                    height="30"
                                                    alt="location"
                                                />
                                                <p>Sr. No. 44/1, Ganapati Matha Ind.
                                                    Estate, In Front of Ganapati Mandir,
                                                    Warje Malwadi, Pune-411058</p>
                                            </div>
                                        </Col>
                                        <Col sm={12}>
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src={phone_img}
                                                    width="30"
                                                    height="30"
                                                    alt="phone"
                                                />
                                                <p>+91 9767440411<br />
                                                    +91 7841939121</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                    <Row className="footer-last-row">
                        <Container fluid>
                            <Row className="footer-links align-items-center">
                                <Col className="text-center">
                                    <NavLink activeClassName="active" to="/">Home</NavLink>
                                    <NavLink activeClassName="active" to="/about">About</NavLink>
                                    <NavLink activeClassName="active" to="/services">Services</NavLink>
                                    <NavLink activeClassName="active" to="/contacts">Contacts</NavLink>
                                </Col>
                            </Row>
                            <Row className="footer-copyright align-items-center text-center">
                                <Col>©Copyright 2024 Tool Edge Technology. All rights reserved.</Col>
                            </Row>
                        </Container>
                    </Row>
                </Container>
            </div>
        </>
    );
}