import React, { Component } from 'react';
import Blog from '../components/Blog';

class Blogs extends Component {
    state = {
        blogs: null
    };

    // componentDidMount = async () => {
    //     const result = await getBlogs();
    //     console.log(result);
    // }

  render() {
    return (
        <Blog />
    );
  }
}

export default Blogs;