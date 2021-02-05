import React, {Component} from 'react';
class Home extends Component {
    render() {
	    return (
            <div>
            <nav className="navbar navbar-default ">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a className="navbar-brand" href="#myPage" style={{padding: '5px'}}> <img src="images/Space (1).png" alt="" /> </a>
              </div>
              <div className="collapse navbar-collapse " id="myNavbar" style={{float: 'right'}}>
                <ul className="nav navbar-nav navbar-center " id="navitems">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about.html">Templates</a></li>
                  <li><a href="#portfolio">Price</a></li>
                  <li><a href="#pricing">Help</a></li>
                  <li><button id="touch">Get In Touch</button></li>
                </ul>
              </div>
            </nav>
            {/* Container (inspiration Section) */}
            <div className="inspiration">
              <div className="row">
                <div className="col-sm-6" style={{paddingLeft: '100px'}} width="100%">
                  <h5 id="des1">DESIGN INSPIRATION</h5>
                  <h1 id="des2">Convallis turpis erat tempus, viverra aliquet. </h1><br /><br />
                  <button id="des3">Get In Touch</button><br /><br /><br /><br />
                  <h4 id="des4">I feel so much less stressed ❤️ as I now know by the book.”
                  </h4><br /><br />
                  <img src="images/Ellipse 34 (1).png" alt="" style={{backgroundBlendMode: 'normal', float: 'left'}} />
                  <h5 id="des5">Andry Ford</h5>
                  <h6 id="des6">CEO at Whatever</h6>
                </div>
                <div className="col-sm-6">
                  <img src="images/Slider.png" alt="" width="100%" />
                </div>
              </div>
            </div>
            {/* Container (inspiration Section) */}
            {/* Container (info Section) */}
            <div className="information">
              <div className="container">
                <div className="row">
                  <div className="col-sm-5">
                    <img src="images/Group582.jpg" alt="" width="100%" style={{paddingTop: '200px', paddingBottom: '100px'}} />
                  </div>
                  <div className="col-sm-7">
                    <h1 id="req">Requirements gathering
                      and analysis for references.
                    </h1>
                    <p id="con">Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a,
                      duis
                      volutpat. Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a,
                      duis
                      volutpat.
                    </p>
                    <img src="images/Group516.jpg" alt="" width="100%" style={{paddingTop: '125px'}} />
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <img src="images/Player.jpg" alt="" width="100%" style={{paddingTop: '100px', paddingBottom: '50px'}} />
                  </div>
                  <div className="col-sm-6">
                    <h1 id="the">The best design for your studio website
                    </h1>
                    <p id="tur">Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada duis
                      volutpat.
                    </p>
                    <h1 id="exp">Experienced team</h1>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <h1 id="the">The best design for your studio website
                    </h1>
                    <p id="tur">Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada duis
                      volutpat.
                    </p>
                    <h1 id="exp">Experienced team</h1>
                  </div>
                  <div className="col-sm-6">
                    <img src="images/Playewr.png" alt="" width="100%" style={{paddingTop: '50px', paddingBottom: '100px'}} />
                  </div>
                </div>
              </div>
            </div>
            {/* Container (info Section) */}
            {/* Container (carousel Section) */}
            <div className="carousel1">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <h6 id="design">Design concept</h6>
                    <h1 id="best">The best design for your<br />
                      studio website</h1>
                    <div className="carousel slide" data-ride="carousel">
                      {/* Wrapper for slides */}
                      <div className="carousel-inner">
                        <div className="col-sm-3">
                          <div className="item active">
                            <div className="card">
                              <div className="card-body">
                                <h6 className="card-subtitle ">Name</h6>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat,
                                  viverra magna risus aliquam massa.
                                  Ac aliquam ac volutpat, viverra magna risus. </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="item active">
                            <div className="card">
                              <div className="card-body">
                                <h6 className="card-subtitle">Name</h6>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat,
                                  viverra magna risus aliquam massa.
                                  Ac aliquam ac volutpat, viverra magna risus. </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="item active">
                            <div className="card">
                              <div className="card-body">
                                <h6 className="card-subtitle ">Name</h6>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat,
                                  viverra magna risus aliquam massa.
                                  Ac aliquam ac volutpat, viverra magna risus. </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="item active">
                            <div className="card">
                              <div className="card-body">
                                <h6 className="card-subtitle mb-2 text-muted">Name</h6>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat,
                                  viverra magna risus aliquam massa.
                                  Ac aliquam ac volutpat, viverra magna risus. </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Container (carousel Section) */}
            {/* Container (TEXT Section) */}
            <div className="text1">
              <img src="images/Vector 2.png" alt="" style={{float: 'right', color: '#FFC928', paddingTop: '0px', borderRadius: '20px'}} />
              <div className="row">
                <div className="col-sm-8" style={{padding: '150px', paddingBottom: '50px'}}>
                  <h4 id="t1">Design concept</h4>
                  <h2 id="t2">The best design for your studio website</h2>
                  <p id="t3">Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis
                    volutpat. Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis
                    volutpat.
                  </p>
                </div>
                <div className="col-sm-4">
                </div>
              </div>
              <div className="row" style={{padding: '120px', paddingTop: '0px', paddingBottom: '10px'}}>
                <div className="col-sm-6">
                  <div className="col-sm-2">
                    <img src="images/icon2.png" alt="" style={{paddingTop: '15px'}} />
                  </div>
                  <div className="col-sm-10">
                    <h3 className="t4">Design concept</h3>
                    <p className="t5">Vitae nulla nunc euismod vel nunc euismod velpretium tellus accumsan nulla nunc euismod ve
                      semper.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="col-sm-2">
                    <img src="images/icon1.png" alt="" style={{paddingTop: '15px'}} />
                  </div>
                  <div className="col-sm-10">
                    <h3 className="t4">Developing websites</h3>
                    <p className="t5">Vitae nulla euismod velpretium tellus accumsan nulla nunc euismod ve semper.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row" style={{padding: '120px', paddingTop: '0px'}}>
                <div className="col-sm-6">
                  <div className="col-sm-2">
                    <img src="images/icon1.png" alt="" style={{paddingTop: '15px'}} />
                  </div>
                  <div className="col-sm-10">
                    <h3 className="t4">Developing websites</h3>
                    <p className="t5">Vitae nulla euismod velpretium tellus accumsan nulla nunc euismod ve semper.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="col-sm-2">
                    <img src="images/icon2.png" alt="" style={{paddingTop: '15px'}} />
                  </div>
                  <div className="col-sm-10">
                    <h3 className="t4">Design concept</h3>
                    <p className="t5">Vitae nulla nunc euismod vel nunc euismod velpretium tellus accumsan nulla nunc euismod ve
                      semper.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row" style={{padding: '150px', paddingTop: '0px'}}>
                <div className="col-sm-6">
                  <h1 id="t6">The best design for your
                    studio website</h1>
                </div>
                <div className="col-sm-6">
                  <h4 id="t7"> Experienced team</h4>
                </div>
              </div>
              <div className="row" style={{padding: '150px', paddingTop: '0px'}}>
                <div className="col-sm-4">
                  <div className="card">
                    <div className="card-body" style={{padding: '30px'}}>
                      <h5 className="card-title" id="c1">Audit</h5><br />
                      <p className="card-text" id="t10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam
                        massa.
                        Ac aliquam ac volutpat, viverra magna risus.
                      </p>
                    </div>
                    <div className="card-footer " style={{padding: '30px', paddingTop: '0px', paddingBottom: '10px'}}>
                      Experienced team
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card">
                    <div className="card-body" style={{padding: '30px'}}>
                      <h5 className="card-title" id="c2">Teamwork</h5><br />
                      <p className="card-text" id="t11">
                        Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam
                        massa.
                        Ac aliquam ac volutpat, viverra magna risus.
                      </p>
                    </div>
                    <div className="card-footer " style={{padding: '30px', paddingTop: '0px', paddingBottom: '10px'}}>
                      Experienced team
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card">
                    <div className="card-body" style={{padding: '30px'}}>
                      <h5 className="card-title" id="c3">Create</h5><br />
                      <p className="card-text" id="t12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam
                        massa.
                        Ac aliquam ac volutpat, viverra magna risus.
                      </p>
                    </div>
                    <div className="card-footer " style={{padding: '30px', paddingTop: '0px', paddingBottom: '10px'}}>
                      Experienced team
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Container (TEXT Section) */}
            {/* Container (Leadership Section) */}
            <div className="text1" style={{margin: '100px'}}>
              <div className="row">
                <div className="col-sm-12">
                  <h1 id="our">Our leadership</h1>
                  <p id="l1">Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit <br />ipsum malesuada a,
                    duis volutpat.</p>
                  <br /><br />
                </div>
              </div>
              <div className="row" style={{padding: '10px'}}>
                <div className="col-sm-3">
                  <img src="images/Rectangle 41.png" alt="" width="100%" />
                  <h3 className="andry">Andry Ford</h3>
                  <h6 className="ceo"> CEO at Whatever</h6>
                </div>
                <div className="col-sm-3">
                  <img src="images/Rectangle 40.png" alt="" width="100%" />
                  <h3 className="andry">Andry Ford</h3>
                  <h6 className="ceo"> CEO at Whatever</h6>
                </div>
                <div className="col-sm-3">
                  <img src="images/Rectangle 39.png" alt="" width="100%" />
                  <h3 className="andry">Andry Ford</h3>
                  <h6 className="ceo"> CEO at Whatever</h6>
                </div>
                <div className="col-sm-3">
                  <img src="images/Rectangle 38.png" alt="" width="100%" />
                  <h3 className="andry">Andry Ford</h3>
                  <h6 className="ceo"> CEO at Whatever</h6>
                </div>
              </div>
            </div>
            {/* Container (Leadership Section) */}
            {/* Container (Review Section) */}
            <div className="review">
              <div className="row">
                <div className="col-sm-2">
                  <img src="images/Vector 3.png" alt="" />
                </div>
                <div className="col-sm-8">
                  <p id="every">“Every single person comes away and says - wow that's a really slick experience, that was so easy
                    to use. I feel so much less stressed as I now know we’re doing everything by the book.”
                  </p><br /> <br />
                  <img src="images/Ellipse 34.png" alt="" style={{backgroundBlendMode: 'normal', float: 'left'}} />
                  <h6 className="ford"> Andry Ford</h6>
                  <h6 className="ceo1">CEO at Whatever</h6>
                  <br /><br /><br /><br />
                  <p id="feel">I feel so much less stressed ❤️ as I now know we’re doing everything by the book.”
                  </p> <br /><br />
                  <img src="images/Ellipse 34 (1).png" alt="" style={{backgroundBlendMode: 'normal', float: 'left'}} />
                  <h6 className="ford"> Andry Ford</h6>
                  <h6 className="ceo1">CEO at Whatever</h6>
                </div>
                <div className="col-sm-2">
                  <img src="images/Vector 2 (2).png" alt="" style={{float: 'right'}} />
                </div>
              </div>
            </div>
            {/* Container (Review Section) */}
            {/* Container (CTA Section) */}
            <div className="cta" style={{marginTop: '150px', marginBottom: '150px'}}>
              <div className="row">
                <div className="col-sm-1" />
                <div className="col-sm-10" style={{backgroundColor: '#FFF4D4', borderRadius: '20px'}}>
                  <div className="row">
                    <div className="col-sm-8" style={{padding: '80px'}}>
                      <h1 id="a1">All-in-one platform for business</h1>
                      <p id="a2">Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus
                        aliquam massa. Ac aliquam ac volutpat, viverra magna risus. </p>
                    </div>
                    <img src="images/Vector4.png" alt="" style={{float: 'right'}} />
                    <div className="col-sm-4">
                      <button id="btn22">Get In Touch</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-1" />
              </div>
            </div>
            {/* Container (CTA Section) */}
            {/* Container (footer Section) */}
            <div className="footer-top" style={{backgroundColor: '#1f262e', marginBottom: '1px'}}>
              <div className="container-fluid" style={{padding: '100px'}}>
                <div className="row">
                  <div className="col-sm-6">
                    <h4 id="spc">Space</h4><br />
                    <p id="thw">The best design for your web studio website. Vitae nulla nunc euismod vel pretium tellus accumsan
                      semper. Vitae nulla nunc euismod vel pretium tellus accumsan semper.
                    </p>
                  </div>
                  <div className="col-sm-2">
                    <h4 className="too">Pages</h4><br />
                    <ul style={{listStyleType: 'none'}} className="list1">
                      <li>Templates</li>
                      <li>Price</li>
                      <li>Help</li>
                      <li>Contact</li>
                    </ul>
                  </div>
                  <div className="col-sm-2">
                    <h4 className="too">Demos</h4><br />
                    <ul style={{listStyleType: 'none'}} className="list1">
                      <li>Dark theme</li>
                      <li>Light theme</li>
                      <li>Classic theme</li>
                    </ul>
                  </div>
                  <div className="col-sm-2">
                    <h4 className="too">Resources</h4><br />
                    <ul style={{listStyleType: 'none'}} className="list1">
                      <li>Documentation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Container (footer Section) */}
            <div className="footer">
              <div className="row">
                <div className="col-sm-6">
                  <span id="call"> © 2019-2020 All Rights Reserved.</span>
                </div>
                <div className="col-sm-2" />
                <div className="col-sm-4">
                  <h1 id="terms">Terms of Service</h1>
                </div>
              </div>
            </div>
          </div> 
	     );
    }
}
export default Home;