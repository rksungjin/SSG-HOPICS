import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import Main from "./Main";
import Login from "./Login";
import Signup from "./Signup";
import Blogs from "./blogPages/Blogs";
import axios from 'axios';
import Crime from "./Crime";
import Announcement from "./Announcement";
// import Detail from './Detail';
import Detail from './blogPages/Detail';




export default class MainRouter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false
    };

    this.logout = this.logout.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.deAuthenticate = this.deAuthenticate.bind(this);
  }

  authenticate() {
    this.setState({
      authenticated: true
    })
  }

  deAuthenticate() {
    this.setState({
      authenticated: false
    })
  }

  logout() {
    axios.get('/apis/users/logout')
      .then(function (data) {
        this.deAuthenticate();
        window.location.reload();
      }.bind(this)).catch(function (err) {
        console.log(err);
      });
  }

  redirect = () => {
      if (this.state.authenticated === false) {
        return <Redirect to='/signup' />
      }
  }

  render() {
    // this.redirect();
    return (
      <Router>
      	<Switch>
          <Route exact path="/" render={props => 
            <Main
              {...props}
              authenticate={this.authenticate}
              deAuthenticate={this.deAuthenticate}
              authenticated={this.state.authenticated}
              logout={this.logout}
            />} 
          />
          <Route exact path="/login" render={props => 
            <Login
              {...props}
              authenticate={this.authenticate}
              deAuthenticate={this.deAuthenticate}
              authenticated={this.state.authenticated}
              logout={this.logout}
            />}
          />
          <Route exact path="/signup" render={props => 
            <Signup
              {...props}
              authenticate={this.authenticate}
              deAuthenticate={this.deAuthenticate}
              authenticated={this.state.authenticated}
              logout={this.logout}
            />} 
          />
          <Route exact path="/announcement" render={props => 
            <Announcement
              {...props}
              authenticate={this.authenticate}
              deAuthenticate={this.deAuthenticate}
              authenticated={this.state.authenticated}
              logout={this.logout}
            />} 
          />
        {/*<Route exact path="/blog" component={Blogs} /> */}
        <Route exact path="/blog" render={props => 
            <Blogs
              {...props}
              authenticate={this.authenticate}
              deAuthenticate={this.deAuthenticate}
              authenticated={this.state.authenticated}
              logout={this.logout}
            />} 
          />
        {/*<Route exact path="/crime" component={Crime} />*/}
        <Route exact path="/crime" render={props => 
          !this.state.authenticated ? this.redirect() : 
            <Crime
              {...props}
              authenticate={this.authenticate}
              deAuthenticate={this.deAuthenticate}
              authenticated={this.state.authenticated}
              logout={this.logout}
            />} 
          />
            {/* <Route exact path="/edit" render={props => 
            <EditBtn
              {...props}
              authenticate={this.authenticate}
              deAuthenticate={this.deAuthenticate}
              authenticated={this.state.authenticated}
              logout={this.logout}
            />} 
          /> */}
          <Route exact path="/blog/:id" render={props => 
            <Detail
              {...props}
              authenticate={this.authenticate}
              deAuthenticate={this.deAuthenticate}
              authenticated={this.state.authenticated}
              logout={this.logout}
            />} 
          />
        {/* <Route exact path="/blog/:id" component={Detail} /> */}
      	</Switch>
      </Router>
    );
  }
}
//export default MainRouter;