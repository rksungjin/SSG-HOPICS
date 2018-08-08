import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//require('./nav.css');


export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-custom navbar-light">
          <Link to={"/"}><div className="navbar-brand disabled">SSG-HOPICS</div></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">

          {this.props.authenticated ? (
            <ul className="navbar-nav ml-auto">
              
              <li>
                <Link to={"/crime"} ><div className="nav-link" data-toggle="modal"><p>CRIME REPORT</p></div></Link>
              </li>
              <li>
                  <Link to={"/blog"} ><div className="nav-link" data-toggle="modal"><p>BLOG</p></div></Link>
              </li>
              {/*{this.props.authenticated ? ( */}
                <li>
                  <Link to={"/"} onClick={this.props.logout} ><div className="nav-link" data-toggle="modal"><p>LOGOUT</p></div></Link>
                </li>
            </ul>
              ) : (
                <ul className="navbar-nav ml-auto">
                <li>
                  <Link to={"/login"} ><div className="nav-link" data-toggle="modal"><p>LOGIN</p></div></Link>
                </li>
                </ul>
              )}
            {/*</ul>*/}
          </div>
        </nav>
      </div>











      /*<nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div className="container nav-container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                <i className="fa fa-bars"></i>
            </button>
            <button type="button" className="navbar-toggle navbar-toggle-right" data-toggle="collapse" data-target=".navbar-main-collapse1">
                <i className="glyphicon glyphicon-plus"></i>
            </button>
            <Link to={"/"} ><img className="icon-middle-nav-mobile" src={require("../../img/shapes/shape.png")} /></Link>
          </div>

          <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
              <ul className="nav navbar-nav">
                  <li className="hidden">
                      <a href="#page-top"></a>
                  </li>
                  
                  <li>
                      <a className="page-scroll nav-right-text" href="/pricing/"><p>PRICING</p></a>
                  </li>
                  <li>
                      <a className="page-scroll nav-right-text" href="/crime"><p>CRIME REPORT</p></a>
                  </li>
                  {this.props.authenticated ? (
                    <li>
                      <a href="#" onClick={this.props.logout} ><div className="page-scroll nav-right-text" data-toggle="modal"><p>LOGOUT</p></div></a>
                    </li>
                  ) : (
                    <li>
                      <Link to={"/login"} ><div className="page-scroll nav-right-text" data-toggle="modal"><p>LOGIN</p></div></Link>
                    </li>
                  )}
                  <li>
                      <Link to={"/blog"} ><div className="page-scroll nav-right-text" data-toggle="modal"><p>BLOG</p></div></Link>
                  </li>
              </ul>
          </div>
        </div>
      </nav>*/
    );
  }
}