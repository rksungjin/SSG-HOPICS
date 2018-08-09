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
                            </li>
                        </ul> 
                    </div>
                </div>     
            </section>
            <hr />
            <section id="announcement-4" className="container pt-4">
                <div className="row">
                    <div className="col-lg-12 col-lg">
                        <h3 className="text-primary">CES Entry Points and Outreach Resources</h3>
                        <p>Encounter a homeless family? Please have the family call: 211</p>
                        <br />
                        <ul>
                            <li><h4>Drop in centers for single adults:</h4>
                                <ul>
                                    <li>
                                        <h5 className="text-primary">St. Joseph Center</h5>
                                        <p>404 Lincoln Blvd, Venice, CA.  (310) 396-6878</p>
                                        <p>Hours of Operation: Mon, Tues, Thurs: 7:30am-4:30pm, Wed: 7:30am-Noon, Fri: 7:30am-3:30pm</p>
                                        <br />
                                    </li>
                                    <li>
                                    <h5 className="text-primary">The People Concern</h5>
                                        <p>503 Olympic Blvd, Santa Monica, CA.  (310) 450-4050</p>
                                        <p>Hours of Operation: Mon-Fri: 9:00am-5:00pm, Sat, Sun: 8:00am-Noon</p>
                                        <br />
                                    </li>
                                </ul>
                            </li>      
                        </ul> 
                        <ul>
                            <li><h4>Drop in for Youth ages 12-25:</h4>
                                <ul>
                                    <li>
                                        <h5 className="text-primary">Safe Place For Youth</h5>
                                        <p>2469 Lincoln Blvd, Venice, CA.  (310) 902-2283</p>
                                        <p>Hours of Operation: Drop in Tues, Weds, Thurs: 1:00pm-5:00pm, Appointments Mon-Fri: 10:00am-6:00pm</p>
                                        <br />
                                    </li>
                                </ul>
                            </li>      
                        </ul> 
                        <ul>
                            <li><h4>Mental Health Services:</h4>
                                <ul>
                                    <li>
                                        <h5 className="text-primary">Mental Health Urgent Care Center, Exodus Recovery</h5>
                                        <p>11444 W. Washington Blvd. Suite D, Los Angeles, CA 90066-6024</p>
                                        <p>Hours of Operation: 24 Hour Psychiatric Crisis Center - open 24 hours a day, 7 days a week, 365 days per year</p>
                                        <br />
                                    </li>
                                    <li>
                                    <h5 className="text-primary">DMH SB-82 Mobile Triage Team</h5>
                                        <p>call (310) 482-6600 to make a referral</p>
                                        <br />
                                    </li>
                                    <li>
                                    <h5 className="text-primary">Psychiatric Mobile Response Team</h5>
                                        <p>call (310) 482-3260</p>
                                        <p>Teams hae legal authority per Welfare and Institutions Code 5150 and 5585</p>
                                        <br />
                                    </li>
                                    <li>
                                    <h5 className="text-primary">Whole Person Care</h5>
                                        <p>for referrals call (844) 804-5200</p>
                                        <p>Whole Person Care focuses on the following: 1) People experiencing homelessness, 2) People recently released from incarceration 3) People with mental health issues 4) People experiencing substance use disorder 5) People with multiple medical conditions 60 Women experiencing barriers to a healthy pregnancy</p>
                                        <br />
                                    </li>

                                </ul>
                            </li>      
                        </ul> 
                    </div>
                </div>     
            </section>
        
      </div>
    );
  }
}
