import { React, useState } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav>
      <Button className="mt-3" variant="primary" onClick={handleShow}>
        Menu
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-group">
            <li
              className="list-group-item"
              onClick={() => {
                setShow(false);
              }}
            >
              <Link className="navBold" to="/" style={{ textDecoration: "none" }}>
                Main page
              </Link>
            </li>
            <li className="list-group-item">
              <details>
                <ul className="list-group">
                  <li
                    className="list-group-item"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <Link
                      to="/english-Irregular-Verbs"
                      style={{ textDecoration: "none" }}
                    >
                      English Irregular Verbs
                    </Link>
                  </li>
                  <li
                    className="list-group-item"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <Link to="/quiz1" style={{ textDecoration: "none" }}>
                      Quiz 1
                    </Link>
                  </li>
                  <li
                    className="list-group-item"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <Link to="/" style={{ textDecoration: "none" }}>
                      Fake Item
                    </Link>
                  </li>
                  <li
                    className="list-group-item"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <Link to="/" style={{ textDecoration: "none" }}>
                      Fake Item
                    </Link>
                  </li>
                  <li
                    className="list-group-item"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <Link to="/" style={{ textDecoration: "none" }}>
                      Fake Item
                    </Link>
                  </li>
                </ul>

                <summary>English exercise</summary>
              </details>
            </li>

            <li className="list-group-item">
              <details>
                <ul className="list-group">
                  <li
                    className="list-group-item"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <Link
                      to="/deutsch-Unregelmassige-Verben"
                      style={{ textDecoration: "none" }}
                    >
                      Unregelmäßige Verben
                    </Link>
                  </li>
                  <li
                    className="list-group-item"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <Link
                      to="/"
                      style={{ textDecoration: "none" }}
                    >
                      Fake Item
                    </Link>
                  </li>
                  <li
                    className="list-group-item"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <Link
                      to="/"
                      style={{ textDecoration: "none" }}
                    >
                      Fake Item
                    </Link>
                  </li>
                </ul>
                <summary>Deutch Prüfungen</summary>
              </details>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </nav>
  );
};

export default Navbar;

/*
<ul className="list-group">
            <li className="list-group-item" aria_label="Close" onClick={()=>{setShow(false)}}>
              <Link  to="/"
              style={{ textDecoration: 'none' }}
              >Hlavní stránka</Link>
            </li>

            <li className="list-group-item">
              <Link  to="/english-Irregular-Verbs"
              style={{ textDecoration: 'none' }}
              >English Irregular Verbs</Link>
            <details>popis</details>
            </li>

            <li className="list-group-item" onClick={()=>{setShow(false)}}>
              <Link to="/deutsch-Unregelmassige-Verben"
              style={{ textDecoration: 'none' }}
              >
                Deutsch Unregelmäßige Verben
              </Link>
            </li>
            <li className="list-group-item" onClick={()=>{setShow(false)}}>
              <Link to="/quiz1"
              style={{ textDecoration: 'none' }}
              >
                Quiz 1
              </Link>
            </li>
          </ul>
*/
