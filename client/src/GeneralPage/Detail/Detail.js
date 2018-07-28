import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    generalissue: {}
  };
  // When this component mounts, grab the generalissue with the _id of this.props.match.params.id
  // e.g. localhost:3000/genealissues/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getGeneralIssue(this.props.match.params.id)
      .then(res => this.setState({ generalissue: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.generalissue.title} by {this.state.generalissue.author}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>
                {this.state.generalissue.synopsis}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to other page - what it call it</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
