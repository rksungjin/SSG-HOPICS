// Include React
import React, { Component } from 'react';
import Nav from '../children/Nav'

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
 
       


            <header className="mt-5">
                <div className="">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <h1> testing of Announcement Page</h1>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section id="about" className="container content-section text-center">
                <div className="row">
                    <div className="col-lg-12 col-lg">
                        <h2>Our Mission</h2> 
                        <p>To provide the best quality of service to homeless and low-income households in South Los Angeles and surrounding areas and to employ the most qualified staff available and build our services and programs to meet the diverse needs of the community.</p>
                    </div>
                </div>     
                
            </section>

        
      </div>
    );
  }
}
