// Include React
import React, { Component } from 'react';
import Nav from '../children/Nav'
import './Announcement.css';

// Creating the Main component
export default class Announcement extends Component {
  render() {
    return (
      <div>
        <Nav
          authenticated={this.props.authenticated}
          authenticate={this.props.authenticate}
          deAuthenticate={this.props.deAuthenticate}
          logout={this.props.logout}
        />   
 
       


            <header className="Announcement" id="announcement-header">
                    <div className="container-fluid text-center border-bottom border-dark">
                        <div className="row pb-1 bg-primary mb-4 text-primary">this invisible blue line
                        </div>
                        <div className="row p-4 bg-primary text-white">
                            <div className="col-lg-12">
                                <h1 className="text-center"> ANNOUNCEMENTS</h1> 
                            </div>
                        </div>
                    </div>
            </header>

            <section id="announcement-1" className="container pt-5">
                <div className="row">
                    <div className="col-lg-12 col-lg">
                        <h3>CES System Meeting</h3> 
                        <h4>This Wednesday our CES System Meeting will be held at the Westchester Municipal Building,</h4>
                        <h4> 7166 Manchester, Los Angeles, 90045.</h4>
                        <h4>See you there!</h4>
                        <br />
                        <h5>On the agenda:</h5>
                        <ul className="text-primary">
                            <li><h5>SHARE! Presentation</h5></li>
                            <li><h5>System Updates</h5></li>
                        </ul>
                    </div>
                </div>     
            </section>
            <hr />
            <section id="announcement-2" className="container pt-4">
                <div className="row">
                    <div className="col-lg-12 col-lg">
                        <h3 className="text-primary">Resources and Updates</h3>
                        <ul>
                            <li>
                                <h5 className="text-primary">CONSERVATORSHIP TRAINING</h5>
                                <p>The Department of Mental Health is hosting a training on Conservatorship, October 3 from 10am-12pm. Please RSVP to Aretha Adams. AAdams@dmh.lacounty.gov</p>
                            <br />
                            </li>
                            <li>
                                <h5 className="text-primary">FUNDING OPPORTUNITY</h5>
                                <p>The Los Angeles County Department of Mental Health (LACDMH) -- through its Prevention and Early Intervention (PEI) funding and in collaboration with CalMHSA -- will award grants to engage communities and promote health and wellbeing.<a href="https://www.dropbox.com/s/n0tlzmth3fid05t/LA-County-Mini-Grants-3-22-2018_FINAL-POSTING-AND-DISTRIBUTION-LH.pdf?dl=0"> See Link to Flyer Here</a></p>
                            <br />
                            </li>
                            <li>
                                <h5 className="text-primary">COUNTYWIDE MATCHING: VETERAN HOUSING RESOURCES</h5>
                                <p>Due to specificity of Vetran Housing Resources, all Veteran Project Based Housing resources are open to all veterans throughout Los Angeles County. If you would like to refer Veteran clients for the following available project based resources, please follow this link <a href="https://goo.gl/sELhPY">(https://goo.gl/sELhPY)</a> to enter Veterans to be considered. In addition, please email Kela Caldwell at kcaldwell@stjosephctr.org with the client's name and HMID ID that you have referred!</p>
                            {/*<br />*/}
                            </li>
                        </ul> 
                    </div>
                </div>     
            </section>
            <hr />
            <section id="announcement-3" className="container pt-4">
                <div className="row">
                    <div className="col-lg-12 col-lg">
                        <h3 className="text-primary">Upcoming Meetings</h3>
                        <ul>
                            <li>
                                <h5 className="text-primary">SPA 5 CES Meeting:</h5>
                                <p>Every 1st Wednesday, 9-10:00am</p>
                                <p>At St. Joseph Center</p>
                                <p>Please join SPA 5 providers, as we stop, collaborate, and listen</p>
                            <br />
                            </li>
                            <li>
                                <h5 className="text-primary">SPA 5 Outreach and Most Vulnerable Case Conferencing:</h5>
                                <p>Every 3rd Wednesday, 9-10:30am</p>
                                <p>At St. Joseph Center</p>
                                <p>Join us as we check-in, collaborate, and create next steps for our SPA's most vulnerable on the streets</p>
                            <br />
                            </li>
                        </ul> 
                    </div>
                </div>     
            </section>
            <hr />
            <section id="announcement-4" className="container pt-4">
                <div className="row">
                    <div className="col-lg-12 col-lg">
                        <h3 className="text-primary">Upcoming Meetings</h3>
                        <ul>
                            <li>
                                <h5 className="text-primary">CES Entry Points and Outreach Resources:</h5>
                                <p>Encounter a homeless family? Please have the family call: 211</p>
                            <br />
                            </li>
                            <li>
                                <h5 className="text-primary">SPA 5 Outreach and Most Vulnerable Case Conferencing:</h5>
                                <p>Every 3rd Wednesday, 9-10:30am</p>
                                <p>At St. Joseph Center</p>
                                <p>Join us as we check-in, collaborate, and create next steps for our SPA's most vulnerable on the streets</p>
                            <br />
                            </li>
                        </ul> 
                    </div>
                </div>     
            </section>


        
      </div>
    );
  }
}
