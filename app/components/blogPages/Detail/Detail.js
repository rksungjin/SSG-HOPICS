import React, { Component } from "react";
import Jumbotron from "../../Jumbotron";
import API from "../../utils/API";
// import EditBtn from "../../components/EditBtn";
//import FontSizeP from "../../components/FontSize/FontSizeP";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../Grid";
//import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../Form";




class Detail extends Component {
  state = {
    blog: {},
    title: "",
    postedBy: "",
    content: ""
  };
  // When this component mounts, grab the blog with the _id of this.props.match.params.id
  // e.g. localhost:3000/blogs/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBlog(this.props.match.params.id)
      .then(res => this.setState({ blog: res.data }))
      .catch(err => console.log(err));
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  loadBlogs () {
    API.getBlogs()
      .then(res => {
        this.setState({ blogs: res.data, title: "", postedBy: "", content: "" })
      })
      .catch(err => console.log(err));
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.postedBy) {
  //     API.saveBlog({
  //       title: this.state.title,
  //       postedBy: this.state.postedBy,
  //       content: this.state.content
  //     })
  //       .then(res => this.loadBlogs())
  //       .catch(err => console.log(err));
  //   }
  // };
  // handlePostSubmit = () => {
  //   var currentPost = $(this)
  //     .parent()
  //     .parent()
  //     .data("post");
  //   window.location.href = "/blog/" + currentPost.id;
  // }

  //insert specific routing - blog/:id/title:, content:
  handleEditBlog = event => {
    event.preventDefault();
    if (this.props.match.params.id) {
      console.log(this.state)
      API.editBlog(this.props.match.params.id, {
        title: this.state.title,
        postedBy: this.state.postedBy,
        content: this.state.content
      })
        .then(res => this.loadBlogs())
        .catch(err => console.log(err));
    }
  };
  //remove post then repost*

  

  // handleEditBlog = id => {
  //   API.editBlog(id)
  //     .then(res => this.loadBlogs())
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-3 sm-0"></Col>
          <Col size="md-6 sm-12">

            <Jumbotron>
              <h4>Edit your post</h4>
            </Jumbotron>
            <form>
              <article>
                <p>
                Current Title: {this.state.blog.title}
                </p>
              </article>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <article>
                <p>
                Currently Posted By: {this.state.blog.postedBy}
                </p>
              </article>
              <Input
                value={this.state.postedBy}
                onChange={this.handleInputChange}
                name="postedBy"
                placeholder="Posted by (required)"
              />
              <article>
                <p>
                Current Content: {this.state.blog.content}
                </p>
              </article>
              <TextArea
                value={this.state.content}
                onChange={this.handleInputChange}
                name="content"
                placeholder="Content"

              />
              <FormBtn
                // disabled={!(this.state.postedBy && this.state.title)}
                // onClick={() => this.deleteBlog(blog._id)}
                onClick={this.handleEditBlog}
                
              >
                Update Post
              </FormBtn>
            </form>


          </Col>
          <Col size="md-3 sm-0"></Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <p>
                {this.state.blog.id}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/blog">← Back to Blog Page</Link>
          </Col>
        </Row>
        <br/>
        {/* <EditBtn onClick={() => this.editBlog(blog._id)} /> */}
      </Container>
      
    );
  }
}

export default Detail;
