import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import '../style/main.scss'

import Hamburger from 'hamburger-react';
import {Navbar, Container, Nav, NavDropdown, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./home.js";
import Learn from "./learn.js";
import WhitePaper from"./whitepaper.js";
import Circulation from"./circulation.js";

import Logo from '../assets/YummyCryptoTransparent.png';
import PCS from '../assets/partners/pancakeswap.png';
import Soku from '../assets/partners/soku.png';
import Bitmart from '../assets/partners/bitmart.png';
import BlueBG from '../assets/BG-1.png';


function Navigation() {
  const [isOpen, setOpen] = useState(false)

  return (
    <Router>
      <Container fluid className="app">
        <Row>
          <Col>
            <Navbar expand="lg" variant="dark">
              <Container className="nav-container">
                <Navbar.Brand href="/"><img alt="transparent Yummy logo"className="transparentlogo"src={Logo}></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" children={<Hamburger color={"#FAFAFA"}toggled={isOpen} toggle={setOpen} />}/>
             
                <Navbar.Collapse id="basic-navbar-nav">                  
                  <Nav className="me-auto left-nav">

                    <NavDropdown className ="drop-down" title="Documents" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1"><a href="https://github.com/Quillhash/Audit_Reports/blob/master/YummyToken%20Smart%20Contract%20Audit%20Report%20-%20QuillAudits.pdf" target="_blank" rel="noreferrer noopener"> Audit</a></NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2"><a href="/whitepaper"> Whitepaper</a> </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown className ="drop-down" title="Buy Yummy" id="basic-nav-dropdown">
                      <Row className="submenu">
                        {/* <Col>
                              <span>Exchange:</span>
                              <NavDropdown.Item href="#action/3.1"><a href="https://www.bitmart.com/trade/en?symbol=YUMMY_USDT" target="_blank" rel="noreferrer noopener"> <img alt="small Bitmart"className="exchange-icon bitmart"src={Bitmart}></img>Bitmart</a> </NavDropdown.Item>
                        </Col>  */}
                        <Col className="swap-menu">
                              <span>Swap:</span>
                              <NavDropdown.Item href="#action/3.1"><a href="https://pancakeswap.finance/swap" target="_blank" rel="noreferrer noopener"> <img alt="small Pancake swap"className="exchange-icon pcs"src={PCS}></img>PancakeSwap</a></NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.2"><a href="https://app.sokuswap.finance/bsc/#/swap?inputCurrency=0xB8c77482e45F1F44dE1745F52C74426C631bDD52?&outputCurrency=0xB003C68917BaB76812797d1b8056822f48E2e4fe" target="_blank" rel="noreferrer noopener"> <img alt="small Soku Swap"className="exchange-icon soku"src={Soku}></img>SokuSwap</a></NavDropdown.Item>         
                        </Col>
                      </Row>
                    </NavDropdown>
                    <Nav.Link href="https://yummycryptomerch.com/" target="_blank" rel="noreferrer noopener">Merchandise</Nav.Link>
                  </Nav>

                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                  <Nav className="me-auto right-nav">
                    <Nav.Link href="#action"><a href="https://twitter.com/YummyCrypto" target="_blank" rel="noreferrer noopener"><i className="fab fa-twitter"></i></a></Nav.Link>
                    <Nav.Link href="#action"><a href="https://t.me/yummycoin" target="_blank" rel="noreferrer noopener"><i className="fab fa-telegram"></i></a></Nav.Link>
                    <Nav.Link href="#action"><a href="https://www.reddit.com/r/yummycoin/" target="_blank" rel="noreferrer noopener"><i className="fab fa-reddit"></i></a></Nav.Link>
                    <Nav.Link href="#action"><a href="https://www.facebook.com/OfficialYummyCoin" target="_blank" rel="noreferrer noopener"><i className="fab fa-facebook"></i></a></Nav.Link>
                    <Nav.Link href="#action"><a href="https://www.instagram.com/yummycharity/" target="_blank" rel="noreferrer noopener"><i className="fab fa-instagram"></i></a></Nav.Link>
                    <Nav.Link href="#action"><a href="https://www.youtube.com/c/YummyProjectOfficial/" target="_blank" rel="noreferrer noopener"><i className="fab fa-youtube"></i></a></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
           
              </Container>
            </Navbar>
          </Col>
        </Row>


            <Switch>
              <Route exact path="/learn" component={Learn}/>
              <Route exact path="/whitepaper" component={WhitePaper}/>     
              <Route exact path="/" component={Home}/>                    
            </Switch>
            


          {/* FOOTER */}
           <Row className="full-socials" style={{ backgroundImage: `url(${BlueBG})` }}>
            <Row className="follow-socials">                      
              <Row className="copyright-social-wrapper">
                <Col className="copyright">
                  <span>© 2021 YUMMY CRYPTO.&nbsp;&nbsp;All rights reserved</span>
                </Col>
                <Col className="socials-footer">
                  <a href="https://twitter.com/YummyCrypto" target="_blank" rel="noreferrer noopener"><i class="fab fa-twitter-square"></i></a>
                  <a href="https://t.me/yummycoin" target="_blank" rel="noreferrer noopener"><i class="fab fa-telegram-plane"></i></a>
                  <a href="https://www.reddit.com/r/yummycoin/" target="_blank" rel="noreferrer noopener"><i class="fab fa-reddit-square"></i></a>
                  <a href="https://www.facebook.com/OfficialYummyCoin" target="_blank" rel="noreferrer noopener"><i class="fab fa-facebook-square"></i></a>
                  <a href="https://www.instagram.com/yummycharity/" target="_blank" rel="noreferrer noopener"><i class="fab fa-instagram-square"></i></a>
                  <a href="https://www.youtube.com/c/YummyProjectOfficial/" target="_blank" rel="noreferrer noopener"><i class="fab fa-youtube-square"></i></a>
                </Col>
              </Row>
            </Row>

            <Col className='disclaimer-wrapper'>            
              <Row className="legal">
                <Col>
                  <p><strong>LEGAL DISCLAIMER: </strong>
                      The information provided on YummyCrypto.com does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of the website’s content as such. The Yummy team does not recommend that any cryptocurrency should be bough, sold, or held by you. Do conduct your own due diligence and consult your financial advisor before making any investment decisions. By purchasing Yummy, you agree that you are not purchasing a security or investment and you agree to hold the team harmless and not liable for any losses or taxes you may incur. You also agree that the team is presenting the token “as is” and is not required to provide any support or services. You should have no expectation of any form from Yummy and its team. Although Yummy is a community driven token for social networking and not a registered digital currency, the team strongly recommends that citizens in areas with government bans on Crypto do not purchase it because the team cannot ensure compliance with your territory’s regulations. Always make sure that you are in compliance with your local laws and regulations before you make any purchase.
                  </p>
                  <p><strong>RISK DISCLOSURE: </strong>
                    Please note there are always risks associated with smart-contracts. Please use at your own risk. Yummy is not a registered broker, analyst, or investment advisor. Everything that’s provided on this site is purely for guidance, informational and educational purposes, and fun. All information contained herein should be independently verified and confirmed. We do not accept any liability for any loss or damage whatsoever caused in reliance upon such information or services. Please be aware of the risks involved with any trading done in any financial market. Do not trade with money that you cannot afford to lose.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>

      </Container>
    </Router>


  );
}

export default Navigation;
