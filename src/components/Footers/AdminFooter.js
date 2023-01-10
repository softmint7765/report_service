/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.Softmint.com/product/argon-dashboard-react
* Copyright 2022 Softmint (https://www.Softmint.com)
* Licensed under MIT (https://github.com/Softmintofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Softmint

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
       <Col xl="6">
          <Nav className="nav-footer justify-content-center justify-content-xl-end">
            <NavItem>
              <NavLink
                href="https://www.Softmint.com?ref=adr-admin-footer"
                rel="noopener noreferrer"
                target="_blank"
              >
              </NavLink>
            </NavItem>
         </Nav>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
