import React, {useEffect } from "react";
import {Container, Row, Col, Button} from 'react-bootstrap';
import Aos from "aos";
import "aos/dist/aos.css";

import YummyLogoTransparent from '../assets/YummyLogoTransparent.svg';
import BKFCLogo from '../assets/partners/BareKnuckle.png';
import CoinGecko from '../assets/partners/CoinGecko.png';
import BitmartLogo from '../assets/partners/bitmart.png';
import CoinBase from '../assets/partners/coinbase.png';
import CoinHunt from '../assets/partners/coinhunt.png';
import CoinMarket from '../assets/partners/coinmarketcap.png';
import BSCscan from '../assets/partners/bscscan.png';
import Bcharity from '../assets/partners/Bcharity.png';
import Foundation from '../assets/partners/21foundation.png';
import Sorai from '../assets/partners/sorai.png';
import MDAppeal from '../assets/partners/mdappeal.jpg';
import SpaceGang from '../assets/partners/spacegang.png';
import Soku from '../assets/partners/soku.png';
import DreamField from '../assets/partners/dreamfield_logo.png';
import Minty from '../assets/partners/minty.svg'
import Slam from '../assets/partners/slam.png'
import PCS from '../assets/partners/pancakeswap.png';

import WaveDivider from '../assets/wave.svg';
import Sprout from '../assets/sprout.png';


 
function Home() {

  useEffect(()=>{
    Aos.init({
      once:true
    });
  },[])


return (
    <Container fluid className="home-wrapper">
       <Row className="animate__animated animate__fadeIn  landing-wrapper">
        <Col  className="landing-paragraph-wrapper">
            <Row className="landing-text-container">
              <Row className="landing-phrase"><p>Together We're<span>Changing Lives</span>Across The Globe.</p></Row>   
              <Row className="landing-details"><p>Yummy Crypto is a project launched on May 1st with a clear vision to deliver value to holders while providing contributions to help solve some of the world's most pressing issues.</p></Row>
              <Row className="button-wrapper">
                <Button className="join-our-cause" href="/learn">Learn How To Buy Yummy    <i class="fas fa-long-arrow-alt-right"></i> </Button>
              </Row>
          </Row>
        </Col>
        <Col className="video-contract-wrapper">
            <div className="video-wrapper">
                <iframe width="700" height="363" src="https://www.youtube.com/embed/oFu2nYNiIm8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={false}></iframe>
            </div>
            <span className="contract">CONTRACT ADDRESS: 0xB003C68917BaB76812797d1b8056822f48E2e4fe <i className="far fa-clipboard"></i></span>            
        </Col>
      </Row> 

    
      <Row className="divider-content-wrapper">
        <Row data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" className="first-message">
          <Col className="yummylogo-column">
            <Row className="yummylogo-wrapper">
              <img alt="yummy logo" className="yummylogo"src={YummyLogoTransparent}></img>
            </Row>
          </Col>
          <Col className="divider-message-wrapper">
            <Row className="divider-message">
              <p>Within our short history, we've already <strong>donated over $1.1M, and</strong> <strong>35% of the total token supply has been burned</strong> as a method to return value to our holders. And that's just the start of it! </p>
              <p>We recently introduced our <strong className="text-emphasis">Growth Fund</strong> to further maximize Yummy holders' returns through <strong>daily buybacks and burns.</strong> In addition, we have secured partnerships with prominent industry players such as Bare Knuckle FC to further advance our social exposure within the crypto space and have much more in the works!</p>
              </Row>
          </Col>
        </Row>

        <Row data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="1000" className="numbers-wrapper">
          <Col className="numbers"><strong>$1,125,000</strong>
            <h3>AMOUNT DONATED</h3>
            <p>Total of our (blockchain verified) donations to Binance Lunch For Children.</p>
          </Col>
          <Col className="numbers"><strong>3,416,653</strong>
            <h3>MEALS SERVED</h3>
            <p>Every meal served represents a real person with a full stomach because of you.</p>
          </Col>
          <Col className="numbers"><strong>75,000+</strong>
            <h3>HOLDERS</h3>
            <p>75,000 holders who have decided to join us in our mission to make the World a better place.</p>
          </Col>
        </Row>               
      </Row>
      <Row className="wave-wrapper">
        <img alt="wave divider" className="wave-divider"src={WaveDivider}></img>
      </Row>

      <Row className="darkBG" >
        <Row className="text-sprout-wrapper">
          <Col className="darkBG-text">
            <p>Our leadership team is thoroughly passionate about the long term growth of Yummy. We work hard to have a positive impact in the World while also <strong className="text-emphasis">maximizing the returns to our Token Holders</strong> through exceptional tokenomics.</p>
            <p>We are placing an emphasis on complete transparency, sustainable strategic growth decisions and innovative marketing campaigns that will ensure Yummy will reach its maximum potential.</p>
            <p>In addition to daily updates throughout our social channels, our leadership is very frequently available on the Yummy Coin Telegram for you to ask questions, give feedback or provide ideas. All are welcome to our Telegram/Discord channels, even non-Yummy holders.</p>
          </Col>
          <Col className="sprout-image-wrapper">
            <img alt="sprout" className="sprout"src={Sprout}></img>
          </Col>
        </Row>
        <Row className="partner-grid-wrapper">
          <span>Check Out Our Partners!</span>
          <div className="partner-grid">
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://www.bareknuckle.tv/" data-aos="fade-up"  data-aos-delay="400" data-aos-duration="1000">
              <img alt="BKFC"src={BKFCLogo}></img>
            </a>
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://www.sokuswap.org/" data-aos="fade-down" data-aos-delay="400" data-aos-duration="1000">
              <img alt="Soku Swap"src={Soku}></img>
            </a>
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://mintyswap.com/" data-aos="fade-down" data-aos-delay="400" data-aos-duration="1000">
              <img alt="Minty Swap"src={Minty}></img>
            </a>
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://pancakeswap.finance/swap" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
              <img alt="Pancake Swap"src={PCS}></img>
            </a>
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://www.dreamfield.co/" data-aos="fade-down" data-aos-delay="400" data-aos-duration="1000"> 
              <img alt="DreamField"src={DreamField}></img>
            </a>
            <a className="logo-container square" target="_blank" rel="noreferrer noopener" href="https://slamtoken.com/" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
              <img alt="Slam Token"src={Slam}></img>
            </a>            
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://www.bitmart.com/en" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
              <img alt="Bitmart Exchange"src={BitmartLogo}></img>
            </a>
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://www.binance.charity/" data-aos="fade-down" data-aos-delay="400" data-aos-duration="1000">
              <img alt="Binance Charity"src={Bcharity}></img>
            </a>
            <a className="logo-container square" target="_blank" rel="noreferrer noopener" href="https://marinadalglishappeal.org/" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
              <img alt="MDAppeal"src={MDAppeal}></img>
            </a>
            <a className="logo-container square" target="_blank" rel="noreferrer noopener" href="https://oursorai.com/" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
              <img alt="Sorai"src={Sorai}></img>
            </a>
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://21foundation.com/" data-aos="fade-down" data-aos-delay="400" data-aos-duration="1000">
              <img alt="21 foundation"src={Foundation}></img>
            </a>            
            <a className="logo-container square" target="_blank" rel="noreferrer noopener" href="https://spacegang.club/" data-aos="fade-down" data-aos-delay="400" data-aos-duration="1000">
              <img alt="SpaceGang"src={SpaceGang}></img>
            </a>
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://www.coinbase.com/" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
              <img alt="Coinbase Exchange"src={CoinBase}></img>
            </a>
            <a className="logo-container square" target="_blank" rel="noreferrer noopener" href="https://coinhunt.cc/" data-aos="fade-down" data-aos-delay="400" data-aos-duration="1000">
              <img alt="CoinHunt"src={CoinHunt}></img>
            </a>
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://coinmarketcap.com/" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
              <img alt="Coinmarketcap"src={CoinMarket}></img>
            </a>
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://www.coingecko.com/en" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
              <img alt="Coin Gecko"src={CoinGecko}></img>
            </a>
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://bscscan.com/" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
              <img alt="BSCscan"src={BSCscan}></img>
            </a>
                                    
          </div>
        </Row>
        </Row>
      
</Container>
    
  );
}

export default Home;