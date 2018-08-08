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
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">

                            
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section id="about" className="body2">
            <div className="container">
                <div className="row">
                    <div className="col-lg">
                    
                    <h1>Our Mission</h1>                  
                    <p>HOPICS is dedicated to providing the highest quality innovative social service to South Los Angeles with an emphasis on behavioral health and housing stability.</p>
                 <div className="col-lg">   
                    <h1>Our Vision</h1>                    
                    <p>To provide the best quality of service to homeless and low-income households in South Los Angeles and surrounding areas and to employ the most qualified staff availableand build our services and programs to meet the diverse needs of the community.</p>
                </div>
                </div>
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
