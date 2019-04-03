import  React  from "react";

const Blog = ({ blog }) => (
    <div className="card" style={{width: 200}}>
        <img className="card-img-top" alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">Test</h5>
          <p className="card-text">Description Text</p>
          <a href="/" className="btn btn-primary">Click Me!</a>
        </div>
      </div>
);

export default Blog;