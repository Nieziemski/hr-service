import React from "react";
import { Link } from "gatsby";

import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";
import logo from "../img/logo-full.jpg";

const Footer = class extends React.Component {
  render() {
    return (
      <>
        <div
          className="section"
          style={{ display: "flex", "justify-content": "center" }}
        >
          <Link to="/">
            <img src={logo} alt="Kaldi" style={{ height: "10em" }} />
          </Link>
        </div>
        <footer className="footer has-background-black has-text-white-ter">
          <div
            className="content has-text-centered"
            style={{ display: "flex", "justify-content": "center" }}
          />
          <div className="content has-text-centered has-background-black has-text-white-ter">
            <div className="container has-background-black has-text-white-ter">
              <div className="columns">
                <div className="column is-4">
                  <section className="menu">
                    <ul className="menu-list">
                      <li>
                        <Link to="/" className="navbar-item">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/about">
                          About
                        </Link>
                      </li>
                    </ul>
                  </section>
                </div>
                <div className="column is-4">
                  <section>
                    <ul className="menu-list">
                      <li>
                        <Link className="navbar-item" to="/blog">
                          Latest Stories
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </section>
                </div>
                <div className="column is-4 social">
                  <a title="facebook" href="#">
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                  <a title="twitter" href="#">
                    <img
                      className="fas fa-lg"
                      src={twitter}
                      alt="Twitter"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                  <a title="instagram" href="#">
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                  <a title="vimeo" href="#">
                    <img
                      src={vimeo}
                      alt="Vimeo"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
};

export default Footer;
