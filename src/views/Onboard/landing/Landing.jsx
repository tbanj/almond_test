import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './landing.css';
import NavBar from '../../common/nav';
class Landing extends Component {
  state = {
    name: "", email: "", message: "", checkActive: ''
  }
  handleOnChange = data => {

    const { name, value } = data.target;
    this.setState({ [name]: value });
    console.log(this.state);
  }

  handleKeyRequest = () => {
    console.log('hi');
    this.props.history.push('/admin-register');
  }


  componentDidMount() {
    console.log(this.props.history.location.pathname);
  }


  render() {
    return (
      <React.Fragment >
        <NavBar bgColor="bg-teal" beActive={this.props.history.location.pathname} />



        <section className="main-header backGroundColor" >
          <div className="container containerImage">
            <div className="row">

              <div className="col-md-5">
                <img src="/theme_assets/sitestatics/img/Clear White1.png" className="img-fluid" alt="mobile look" />
              </div>
              <div className="col-md-7">
                <div className="mx-5">
                  <h1 className="_half-width _margin-50 bluecolor bold ">Get paid Fast, Securely & Reliable</h1>
                  <p className="_half-width-p _margin-25 ashcolor ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis eu sed
                      mauris non dignissim. Nam mi pretium, id eu ipsum orci nisl. rr
                    </p>
                  <div className="_margin-26">
                    <img src="/theme_assets/sitestatics/img/playstore-button.png" className="img-fluid" alt="mobile look" />
                  </div>
                </div>
              </div>
            </div>

          </div>


        </section>
        <div className="row toPay container-fluid headingToPayMobile" >
          <div className="container ">
            <h3 className=" toPayHeader"> How OPay can help you </h3>
            <div className="row my-5">
              <div className="col-md-3">
                <span className="piggyCss"> <img className="img-fluid"
                  src="/theme_assets/sitestatics/img/piggy-bank.svg" alt="piggy bank" /></span>
                <h5 className="toPaysubHeader"> Personal Finances</h5>
                <span ><img alt="divider circle" src="/theme_assets/sitestatics/img/piggy-bank.svg" className="rounded-circle dividerCircle" /></span>
                <hr className="dividerCss"></hr>
                <p className="toPayText toPayPosition">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>

              </div>
              <div className="col-md-3">
                <span className="piggyCss"> <img className="img-fluid"
                  src="/theme_assets/sitestatics/img/building.svg" alt="building bank" /></span>
                <h5 className="toPaysubHeader">Business Finances</h5>
                <span ><img alt="divider circle" src="/theme_assets/sitestatics/img/building.svg" className="rounded-circle dividerCircle" /></span>
                <hr className="dividerCss"></hr>
                <p className="toPayText toPayPosition">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>

              </div>
              <div className="col-md-3">
                <span className="piggyCss"> <img className="img-fluid"
                  src="/theme_assets/sitestatics/img/shield.svg" alt="shield" /></span>
                <h5 className="toPaysubHeader">Secure Finance</h5>
                <span ><img alt="divider circle" src="/theme_assets/sitestatics/img/shield.svg" className="rounded-circle dividerCircle" /></span>
                <hr className="dividerCss"></hr>
                <p className="toPayText toPayPosition">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>

              </div>
              <div className="col-md-3">
                <span className="piggyCss"> <img className="img-fluid"
                  src="/theme_assets/sitestatics/img/rocket-ship.svg" alt="rocket-ship" /></span>
                <h5 className="toPaysubHeader">Fast Payment</h5>
                <span ><img alt="divider circle" src="/theme_assets/sitestatics/img/rocket-ship.svg" className="rounded-circle dividerCircle" /></span>
                <hr className="dividerCss"></hr>
                <p className="toPayText toPayPosition">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>

              </div>
            </div>


            <div className="row container">
              <div className="col-md-7 ">
                <div className="row">
                  <div className="col-md-4"></div>
                  <h3 className="col-md-8 toPayHeader" id="meetSample">Meet Sample</h3>
                </div>
                <div className="row">
                  <div className="col-md-4 ">
                    <img className="img-fluid" src="/theme_assets/sitestatics/img/bar-768564_1920.png" alt="bar visual" />
                  </div>
                  <p className="toPayText col-md-8 removePadding">
                    Sample is NavLink platform designed for merchant or seller. It has all the features that are needed
                 and frequently used by Seller. Handling payments & Inventory! <br />
                    <Link style={{ color: '#00AEB5' }} to="/">Learn More</Link>
                  </p>
                </div>
                <div className="row ">
                  <div className="col-md-4"></div>
                  <div className="col-md-4 emptyBoxBackground"></div>
                  <img src="/theme_assets/sitestatics/img/jaime-lopes-1371775-unsplash.png" className="col-md-4 removePadding img-fluid" alt="" />

                </div>

                <div className="row ">
                  <div className="col-md-4"></div>
                  <div className="col-md-4 "></div>
                  <div className="col-md-4 emptyBoxBackground">
                  </div>
                </div>

                <div className="container topWhiteTwo">
                  <img src='/theme_assets/sitestatics/img/Clear White2.png' alt='clear white' />
                </div>
              </div>

              {/* 2nd half */}
              <div className="col-md-5 mt-5">
                <div className="row container-fluid">
                  <div className='col-md-6 adjustMarginMobile'>
                    <img src='/theme_assets/sitestatics/img/Group 2_comapatibility.png' className='img-fluid' alt='' />
                    <h6 className='appReview'>Compatibility </h6>
                    <p>You don't have to own NavLink smartphone, Sample works with all mobile phones. Android users can find us on Google Play Store and IOS users, we are near the corners</p>
                  </div>
                  <div className='col-md-6'>
                    <img src='/theme_assets/sitestatics/img/Group 2.1_secure.png' className='img-fluid' alt='' />
                    <h6 className='appReview'>Highly Secure </h6>
                    <p>You don't have to own NavLink smartphone, Sample works with all mobile phones. Android users can find us on Google Play Store and IOS users, we are near the corners</p>
                  </div>
                </div>

                <div className="row ">
                  <div className='col-md-6 '>
                    <img src='/theme_assets/sitestatics/img/Group 2_payment.png' className='img-fluid' alt='' />
                    <h6 className='appReview'>Payment Solutions.</h6>
                    <p>E-Commerce made easy with Sample -- Buy and Sell at your convience.</p>
                  </div>

                </div>

                <div id="containerPositionFeature" className="container ">
                  <div className="row cardFeatures col-md-12">
                    <img className="imgFeatures" src="/theme_assets/sitestatics/img/Group 8.png" alt="features" />
                    <h3 className="toPayHeader posFeatures">Features</h3>
                    <ul className="mx-4">
                      <li className="featutePText">
                        <span><img alt="divider circle" src="/theme_assets/sitestatics/img/piggy-bank.svg"
                          className="rounded-circle dividerCircle" />
                        </span>
                        <span className="mx-3">Available on USSD <strong>*726#</strong></span>
                      </li>
                      <li className="featutePText"><span><img alt="divider circle" src="/theme_assets/sitestatics/img/piggy-bank.svg"
                        className="rounded-circle dividerCircle" />
                      </span>
                        <span className="mx-3"> Settle (liquidate): real-time</span>
                      </li>
                      <li className="featutePText">
                        <span><img alt="divider circle" src="/theme_assets/sitestatics/img/piggy-bank.svg"
                          className="rounded-circle dividerCircle" />
                        </span>
                        <span className="mx-3"> Secure Access – Encryption</span>
                      </li>
                      <li className="featutePText">
                        <span><img alt="divider circle" src="/theme_assets/sitestatics/img/piggy-bank.svg"
                          className="rounded-circle dividerCircle" />
                        </span>
                        <span className="mx-3">Real-time monitoring and reporting</span>
                      </li>
                      <li className="featutePText">
                        <span><img alt="divider circle" src="/theme_assets/sitestatics/img/piggy-bank.svg"
                          className="rounded-circle dividerCircle" />
                        </span>
                        <span className="mx-3"> Support multiple Users</span>
                      </li>
                      <li className="featutePText">
                        <span><img alt="divider circle" src="/theme_assets/sitestatics/img/piggy-bank.svg"
                          className="rounded-circle dividerCircle" />
                        </span>
                        <span className="mx-3"> Dashboard with insights and analytics</span>
                      </li>
                      <li className="featutePText">
                        <span><img alt="divider circle" src="/theme_assets/sitestatics/img/piggy-bank.svg"
                          className="rounded-circle dividerCircle" />
                        </span>
                        <span className="mx-3">Integrated with BK and Ecobank</span>
                      </li>
                    </ul>

                    <div id="playstoreFeature">
                      <img alt="playstore" src="/theme_assets/sitestatics/img/playstore-button.png" />
                    </div>
                  </div>
                </div>


              </div>


            </div>

            <div class=" addCss container">
              <div class="row">
                <ul >
                  <p id="copyrightText">Copyright © 2019 Oltranz Ltd. All rights</p>
                </ul>
                <ul id="footerMobile" class="ml-auto" >
                  <div class="copyText">FAQs
                            <span class="ml-4"><img src="/theme_assets/sitestatics/img/brands-and-logotypes.svg" alt="brands-and-logotypes-2" /></span>
                    <span class="ml-4"><img src="/theme_assets/sitestatics/img/facebook-logo.svg" alt="facebook" /></span>
                    <span class="ml-4"><img src="/theme_assets/sitestatics/img/twitter-logo-silhouette.svg" alt="twitter" /></span>
                    <span class="ml-4"><img src="/theme_assets/sitestatics/img/instagram-logo.svg" alt="instagram" /></span>
                    <span class="ml-4"><img src="/theme_assets/sitestatics/img/linkedin-logo.svg" alt="linkedln" /></span>
                  </div>
                </ul>
              </div>
            </div>

          </div>
        </div>












      </React.Fragment>);
  }
}

export default Landing;