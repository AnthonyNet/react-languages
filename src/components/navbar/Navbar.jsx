import { React, useState } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Menu
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-group">
            <li className="list-group-item" aria_label="Close">
              <Link  to="/"
              style={{ textDecoration: 'none' }}
              >Hlavní stránka</Link>
            </li>

            <li className="list-group-item">
              <Link  to="/english-Irregular-Verbs"
              style={{ textDecoration: 'none' }}
              >English Irregular Verbs</Link>
            </li>

            <li className="list-group-item">
              <Link to="/deutsch-Unregelmassige-Verben"
              style={{ textDecoration: 'none' }}
              >
                Deutsch Unregelmäßige Verben
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navbar;
