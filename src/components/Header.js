import  React  from "react";
import { Link } from "react-router-dom"

const Header = () => (
    <nav className="navbar sticky-top navbar-dark bg-dark">
        <a className="navbar-brand" href="/" style={{textAlign: "center"}}>Blogmania</a>
    </nav>
);

export default Header;