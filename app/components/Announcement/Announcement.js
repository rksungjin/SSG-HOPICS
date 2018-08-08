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
 
       


            <header className="Announcement">
                <div className="">
                    <div className="container">
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
                        <h2>CES System Meeting</h2> 
                        <p>This Wednesday out CES System Meeting will be held at </p>
                    </div>
                </div>     
                
            </section>

        
      </div>
    );
  }
}
