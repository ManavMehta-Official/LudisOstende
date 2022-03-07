import React from 'react';
import './home.css';
import {SiDribbble} from 'react-icons/si';
import {BsInstagram, BsTwitter} from 'react-icons/bs';
import {FaHeart} from 'react-icons/fa';
import {HiOutlineChevronUp} from 'react-icons/hi'
import {BsFillHandbagFill} from 'react-icons/bs';
import {MdSportsVolleyball} from 'react-icons/md';
import shoe_img from '../../images/shoe.png';
import shoe1_img from '../../images/shoe1.jpeg';
import shoe2_img from '../../images/shoe2.jpeg';
import shoe3_img from '../../images/shoe3.jpeg';
import galleryImg from '../../images/galleryImg.jpeg';
import galleryImg1 from '../../images/galleryImg1.jpeg';
import galleryImg2 from '../../images/galleryImg2.jpeg';

export default function home() {
  return (
    <div>
        <section style={{"backgroundColor": "rgb(247 248 249)", "height": "90vh", "padding": "0% 2%"}}>
            <div className="row">
                <div className="col-sm-6">
                    <h1 className='home-brand'>Ludis Ostende</h1>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </p>
                    <button className='heroBtn Btn'>PRODUCTS</button> &nbsp;&nbsp;
                    <button className='heroBtn Btn'>SPORTS WEAR</button> <br /><br /><br /><br /><br />

                    <a href="#!" className='ludis-socials'><SiDribbble /></a> <br />
                    <a href="#!" className='ludis-socials'><BsInstagram /></a> <br />
                    <a href="#!" className='ludis-socials'><BsTwitter /></a><br />
                </div>
                <div className="col-sm-6">
                  <img src={shoe_img} alt="shoe" className='img-fluid' style={{"width": "120%"}} />
                </div>
            </div>
        </section>

        <section style={{"backgroundColor": "white", "height": "80vh"}}>
          <h1 className='section-header mx-auto text-center' style={{"marginTop": "2%"}}>LIVE EVENT</h1>
          <div style={{"padding": "2% 5%"}}>
            <div className="live-event" style={{"padding": "2% 5%"}}>
              <h1 className='event-title'>LUDIS OSTENDE EVENT</h1>
              <div className="col-sm-6">
                <p className='text-white' style={{"font-weight": "500"}}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Contrary to popular belief, Lorem Ipsum is not simply random text.
                </p>
                <button className='Btn eventBtn'>JOIN INITIAIVE</button>
              </div>
              
            </div>
          </div>
        </section>

        <section style={{"margin-top": "4%", "backgroundColor": "rgb(247 248 249)"}}>
          <h1 className='section-header'>
          &nbsp;&nbsp;TRENDING
          </h1>
          <div className="row" style={{"padding": "1% 2%"}}>
            <div className="col-sm-4">
              <div class="card">
                <img src={shoe1_img} class="card-img-top" alt="shoe" />
                <div class="card-body">
                  <h5 class="card-title">NIKE SUPER SHOES</h5>
                  <p className='text-muted'>$499 &nbsp; | &nbsp; Running Shoes</p>
                  <p class="card-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                  <div className="row">
                    <div className="col-sm-6 my-auto">
                      <button href="#!" class="Btn cardBtn">VIEW PRODUCT</button>
                    </div>
                    <div className="col-sm-6 my-auto" style={{"textAlign": "right"}}>
                    <button className="Btn bagBtn ms-auto"><BsFillHandbagFill /></button> &nbsp;
                    <button className="Btn heartBtn ms-auto"><FaHeart /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div class="card">
                <img src={shoe2_img} class="card-img-top" alt="shoe" />
                <div class="card-body">
                  <h5 class="card-title">PUMA WHITE SNEAKERS</h5>
                  <p className='text-muted'>$799 &nbsp; | &nbsp; Casual Wear</p>
                  <p class="card-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                  <div className="row">
                    <div className="col-sm-6 my-auto">
                      <button href="#!" class="Btn cardBtn">VIEW PRODUCT</button>
                    </div>
                    <div className="col-sm-6 my-auto" style={{"textAlign": "right"}}>
                    <button className="Btn bagBtn ms-auto"><BsFillHandbagFill /></button>&nbsp;
                      <button className="Btn heartBtn ms-auto"><FaHeart /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div class="card" style={{"margin-bottom": "5%"}}>
                <img src={shoe3_img} class="card-img-top" alt="shoe" />
                <div class="card-body">
                  <h5 class="card-title">NIKE AIR MAX</h5>
                  <p className='text-muted'>$1499 &nbsp; | &nbsp; Sports Shoes</p>
                  <p class="card-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                  <div className="row">
                    <div className="col-sm-6 my-auto">
                      <button href="#!" class="Btn cardBtn">VIEW PRODUCT</button>
                    </div>
                    <div className="col-sm-6 my-auto" style={{"textAlign": "right"}}>
                    <button className="Btn bagBtn ms-auto"><BsFillHandbagFill /></button>&nbsp;
                      <button className="Btn heartBtn ms-auto"><FaHeart /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='mx-auto text-center' style={{"backgroundColor":"black", "paddingTop": "5%"}}>
          <div></div>
          <h1 className='text-center section-header' style={{"color": "white"}}>SPORTS WEEK 85% OFF ON ALL SHOES</h1>
          <button className='Btn offerBtn' style={{"marginBottom": '5%'}}>LEARN MORE</button>
        </section>

        <section style={{'padding': "1% 2%", "backgroundColor": "white"}}>
          <h1 className="section-header">GALLERY</h1>
          <div className="row" style={{"padding": "2% 4%"}}>
            <div className="col-sm-6 my-auto">
                <img src={galleryImg} alt="gallery football" class="img-fluid" style={{"border-radius": "2rem"}} />
            </div>
            <div className="col-sm-6">
              <img src={galleryImg1} alt="gallery football" class="img-fluid" style={{"border-radius": "2rem", "marginBottom": "1%"}} />
              <img src={galleryImg2} alt="gallery football" class="img-fluid" style={{"border-radius": "2rem", "marginTop": "1%"}} />
            </div>
          </div>
        </section>

        <section className='text-center' style={{"backgroundColor": "rgb(247 248 249)"}}>
          <a href="#" class="back2top text-center">BACK TO TOP <HiOutlineChevronUp /></a>
        </section>

        <section style={{"backgroundColor": "rgb(255, 238, 0)", "padding": "2.5% 5%"}} className="mx-auto text-center">
            <h1 className='section-header' style={{"fontSize": "4rem"}}>JOIN LUDIS OSTENDE AND GET 15% OFF</h1>
            <button className='Btn signup'>SIGN UP</button>
        </section>

        <section style={{"backgroundColor": "black"}}>
          <div className="row">
            <div className="col-sm-4">
              <div className="row" style={{"padding": "2% 4%"}}>
                <div className="col-sm-2">
                  <h1 className='footer-brand' style={{"textAlign": "right"}}><MdSportsVolleyball /></h1>
                </div>
                <div className="col-sm-10">
                <h1 className='footer-brand' style={{"textAlign": "left"}}>LUDIS <br /> OSTENDE</h1>
                </div>
              </div>
              
            </div>
            <div className="col-sm-8" style={{"padding": "2% 4%"}}>
              <div className="row">
                <div className="col-sm-4">
                  <h4 className='text-white' style={{"textDecoration": "4px solid white underline"}}>FEATURED</h4>
                  <a href="#!" className="footer-link">Nike super shoes</a> <br/>
                  <a href="#!" className="footer-link">Puma white sneakers</a><br/>
                  <a href="#!" className="footer-link">Nike pro air</a><br/>
                  <a href="#!" className="footer-link">Adidas F1 edition</a><br/>
                  <a href="#!" className="footer-link">Puma Benz</a>
                </div>
                <div className="col-sm-4">
                  <h4 className='text-white' style={{"textDecoration": "4px solid white underline"}}>SHOWROOMS</h4>
                  <a href="#!" className="footer-link">United States</a> <br/>
                  <a href="#!" className="footer-link">United Kingdom</a><br/>
                  <a href="#!" className="footer-link">France</a><br/>
                  <a href="#!" className="footer-link">India</a><br/>
                  <a href="#!" className="footer-link">Japan</a><br/>
                  <a href="#!" className="footer-link">Russia</a><br/>
                  <a href="#!" className="footer-link">Austrailia</a>
                </div>
                <div className="col-sm-4">
                  <h4 className='text-white' style={{"textDecoration": "4px solid white underline"}}>CONTACT US</h4>
                  <a href="#!" className="footer-link">Instagram</a> <br/>
                  <a href="#!" className="footer-link">Twitter</a><br/>
                  <a href="#!" className="footer-link">YouTube</a><br/>
                  <a href="#!" className="footer-link">Facebook</a><br/>
                  <a href="#!" className="footer-link">+91 8844884499</a><br/>
                  <a href="#!" className="footer-link">info@ludisostende.com</a><br/>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
