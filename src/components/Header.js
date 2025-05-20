import { BrowserRouter, Link, Route } from "react-router-dom";
import Projects from "../pages/Projects";
import Home from "../pages/Home";
import Articles from "../pages/Articles";
import ProjectPage from "../pages/ProjetcPage";
import SingleArticle from "../pages/SingleArticle";

import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
  return (
    <BrowserRouter>
      <Navbar className="nav-background fixed-top" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="brand">
              Portfolio
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="menu-toogle-original-icon"
          >
            <p className="menu-toogle-icon">Menu</p>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link to="/" className="item">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/projects" className="item">
                  Projects
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/blog" className="item">
                  Blog
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/blog" component={Articles} />
      <Route path="/project/:project_id" component={ProjectPage} />
      <Route path="/article/:post_id" component={SingleArticle} />
    </BrowserRouter>
  );
}

export default Header;
