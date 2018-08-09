import React, { Component } from "react";
import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import Jumbotron from "../../../components/Jumbotron";
import FontSizeP from "../../../components/FontSize/FontSizeP";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../../components/Grid";
import { List, ListItem } from "../../../components/List";
import { Input, TextArea, FormBtn } from "../../../components/Form";
import Nav from '../../children/Nav';
//import Detail from './Detail';

class Blogs extends Component {
  constructor(props) {
    super(props);

    this.state = {
    blogs: [],
    title: "",
    postedBy: "",
    content: ""
    };
  }
// class Blogs extends Component {
//   state = {
//     blogs: [],
//     title: "",
//     postedBy: "",
//     content: ""
//   };

  componentDidMount() {
    this.loadBlogs();
  }

  loadBlogs () {
    API.getBlogs()
      .then(res => {
        this.setState({ blogs: res.data, title: "", postedBy: "", content: "" })
      })
      .catch(err => console.log(err));
  };

  deleteBlog = id => {
    API.deleteBlog(id)
      .then(res => this.loadBlogs())
      .catch(err => console.log(err));
  };

  editBlog = (_id) => {
    // event.preventDefault();
    if (this.props.match.params.id) {
      // console.log("hi")
      API.editBlog({
        title: this.state.title,
        postedBy: this.state.postedBy,
        content: this.state.content
      })
        .then(res => this.loadBlogs())
        .catch(err => console.log(err));
    }
  };

  // ????????????????
  // ????????????????
  // editBlog = id => {
  //   API.editBlog(id)
  //     .then(res => this.loadBlogs())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.postedBy) {
      API.saveBlog({
        title: this.state.title,
        postedBy: this.state.postedBy,
        content: this.state.content
      })
        .then(res => this.loadBlogs())
        .catch(err => console.log(err));
    }
  };

  render() {


    return (
      <div>
        <Nav
          authenticated={this.props.authenticated}
          authenticate={this.props.authenticate}
          deAuthenticate={this.props.deAuthenticate}
          logout={this.props.logout}
        />  

        <header className="BlogsHead mt-5" id="blog-header">
          <div className="container-fluid text-center border-bottom border-dark">
              <div className="row pb-1 bg-dark mb-4 text-dark">this invisible black text
              </div>
              <div className="row p-4 bg-dark text-white">
                  <div className="col-lg-12">
                      <h1 className="text-center">BLOG</h1> 
                      <p className="text-center">This is a forum for general work-based matters</p>
                  </div>
              </div>
          </div>
        </header>

        <div className="container-fluid">
        <Row>
          <Col size="md-3 sm-0"></Col>
          <Col size="md-6 sm-12">


            {this.state.blogs.length > 0 ? (
              <List>
                {console.log(this.state.blogs)}
                {this.state.blogs.map(blog => (
                  <ListItem key={blog._id}>
                    
                      <strong>
                        <FontSizeP>
                        {blog.title}
                        </FontSizeP>
                        <FontSizeP>
                        Posted by  {blog.postedBy} on {blog.date}
                        </FontSizeP>
                      </strong>
                       <FontSizeP>
                          {blog.content}
                      </FontSizeP>
                    <Link to={"/blog/" + blog._id}>
                    <EditBtn onClick={() => this.editBlog(blog._id)} />    
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBlog(blog._id)} />
                    {/* <EditBtn>
                      <Link to={"/blog" + blog._id}>
                      <strong>
                        {blog.title} by {blog.postedBy}
                      </strong>
                    </Link>
                    </EditBtn> */}
        
                    {/* <Link to={"/blog" + blog._id}>
                 
        
                    </Link> */}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            {/*</Col>

            <Col size="md-6">*/}
            <Jumbotron>
              <h1>Add a Post to this Blog</h1>
            </Jumbotron>
            
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.postedBy}
                onChange={this.handleInputChange}
                name="postedBy"
                placeholder="Posted by (required)"
              />
              <TextArea
                value={this.state.content}
                onChange={this.handleInputChange}
                name="content"
                placeholder="Content"
              />
              <FormBtn
                disabled={!(this.state.postedBy && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit a Post
              </FormBtn>
            </form>
          </Col>
          <Col size="md-3 sm-0"></Col>
          {/*<div className="col col-md-3 col-sm-0"></div>*/}
        </Row>
      </div>
      </div>
    );  
  }
}

export default Blogs;
