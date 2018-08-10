// Include React
import React, { Component } from 'react';
import Nav from './children/Nav'

require('./main2.css');

// Here we include all of the sub-components
// var Form = require("./children/Form");
// var Results = require("./children/Results");
// var History = require("./children/History");

// // Helper for making AJAX requests to our API
// var helpers = require("./utils/helpers");

// Creating the Main component
export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav
          authenticated={this.props.authenticated}
          authenticate={this.props.authenticate}
          deAuthenticate={this.props.deAuthenticate}
          logout={this.props.logout}
        />   

                


        <header className="intro">
            <div className="intro-body">
               
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="wrapper">
                                 <img src={require("../img/homeless3.jpg")} className="img-responsive" className="img-fluid" />
                                                     
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

        <footer>
            <div className="footer">
                <div className="col-lg-12 col-lg">
                <p>5715 S. Broadway, Los Angeles, CA 90037</p>
                
                <p>A Division of Special Service for Groups</p>
            </div>
            </div>
        </footer>
      </div>
    );
  }
}
