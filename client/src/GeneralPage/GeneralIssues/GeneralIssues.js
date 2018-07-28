import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class GeneralIssues extends Component {
  state = {
    generalissues: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadGeneralIssues();
  }

  loadGeneralIssues = () => {
    API.getGeneralIssues()
      .then(res =>
        this.setState({ generalissues: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteGeneralIssue = id => {
    API.deleteGeneralIssue(id)
      .then(res => this.loadGeneralIssues())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveGeneralIssue({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadGeneralIssues())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>General</h1>
              This is a forum for agencies-wide announcements and work-based matters
            </Jumbotron>
            {this.state.generalissues.length ? (
              <List>
                {this.state.generalissues.map(generalissue => (
                  <ListItem key={generalissue._id}>
                    {/*<Link to={"/generalissues/" + generalissue._id}>*/}
                      <strong>
                        {generalissue.title} by {generalissue.author}
                        {generalissue.synopsis}
                      </strong>
                    {/*</Link>*/}
                    <DeleteBtn onClick={() => this.deleteGeneralIssue(generalissue._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>

          <Col size="md-6">
            <Jumbotron>
              <h1>Add a post to General</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit to General
              </FormBtn>
            </form>
          </Col>
          
        </Row>
      </Container>
    );
  }
}

export default GeneralIssues;
