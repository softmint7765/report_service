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
import { useState } from "react";
// react component that copies the given text inside your clipboard


// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,

} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { Link } from "react-router-dom";

const Icons = () => {
  const [copiedText, setCopiedText] = useState();
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Report</h3>
              </CardHeader>
              <CardBody>
                <Row className="icon-examples">
                  <Col lg="3" md="6">
                    <Link to="/admin/recharge">

                      <button
                        className="btn-icon-clipboard"
                        id="tooltip982655500"
                        type="button"
                      >
                        <div>
                          {/* <i className="ni ni-active-40" /> */}
                          <i className="ni ni-book-bookmark" />

                          <span >Recharge Report</span>



                        </div>
                      </button>
                    </Link>

                  </Col>
                  <Col lg="3" md="6">

                    <Link to="/admin/transiction">

                      <button
                        className="btn-icon-clipboard"
                        id="tooltip982655500"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-active-40" />

                          <span >Transiction Report</span>



                        </div>
                      </button>
                    </Link>

                  </Col>
                  <Col lg="3" md="6">
                    <Link to="/admin/AEPS">

                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="air-baloon"
                        id="tooltip47550434"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-air-baloon" />

                          <span>Yes AEPS Report</span>


                        </div>
                      </button>
                    </Link>

                  </Col>
                  <Col lg="3" md="6">
                  <Link to="/admin/Earning">

<button
  className="btn-icon-clipboard"
  data-clipboard-text="ambulance"
  id="tooltip382136785"
  type="button"
>
  <div>
    <i className="ni ni-ambulance" />
    <span>Earning Report</span>
  </div>
</button>
</Link>

</Col>
                  <Col lg="3" md="6">
                    <Link to="/admin/AEPS">

                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="album-2"
                        id="tooltip945481346"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-album-2" />

                          <span>ICICI Report</span>


                        </div>
                      </button>
                    </Link>

                  </Col>
                  <Col lg="3" md="6">
                    <Link to="/admin/AEPS">

                      <button
                        className="btn-icon-clipboard"
                        data-clipboard-text="align-center"
                        id="tooltip662352101"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-align-center" />

                          <span>Money Transfer Report</span>


                        </div>
                      </button>
                    </Link>

                  </Col>
                  <Col lg="3" md="6">

                    <button
                      className="btn-icon-clipboard"
                      data-clipboard-text="align-left-2"
                      id="tooltip125499785"
                      type="button"
                    >
                      <div>
                        <i className="ni ni-align-left-2" />
                        <span>Insurance Report</span>
                      </div>
                    </button>

                  </Col>
                 
                  <Col lg="3" md="6">

                    <button
                      className="btn-icon-clipboard"
                      data-clipboard-text="app"
                      id="tooltip3354607"
                      type="button"
                    >
                      <div>
                        <i className="ni ni-app" />
                        <span>IMPS Report</span>
                      </div>
                    </button>

                  </Col>
                  <Col lg="3" md="6">

                    <button
                      className="btn-icon-clipboard"
                      data-clipboard-text="archive-2"
                      id="tooltip949558633"
                      type="button"
                    >
                      <div>
                        <i className="ni ni-archive-2" />
                        <span>Mantra Booking Report</span>
                      </div>
                    </button>
                  </Col>
                  <Col lg="3" md="6">
                    <button
                      className="btn-icon-clipboard"
                      data-clipboard-text="atom"
                      id="tooltip742747005"
                      type="button"
                    >
                      <div>
                        <i className="ni ni-atom" />
                        <span>Mini ATM Booking Report</span>
                      </div>
                    </button>
                  </Col>
                  <Col lg="3" md="6">
                    <button
                      className="btn-icon-clipboard"
                      data-clipboard-text="badge"
                      id="tooltip488565068"
                      type="button"
                    >
                      <div>
                        <i className="ni ni-badge" />
                        <span>PAN Report</span>
                      </div>
                    </button>
                  </Col>
                  <Col lg="3" md="6">
                    <button
                      className="btn-icon-clipboard"
                      data-clipboard-text="bag-17"
                      id="tooltip163626790"
                      type="button"
                    >
                      <div>
                        <i className="ni ni-bag-17" />
                        <span>KYC Report</span>
                      </div>
                    </button>

                  </Col>
                  <Col lg="3" md="6">
                    <button
                      className="btn-icon-clipboard"
                      data-clipboard-text="basket"
                      id="tooltip387253692"
                      type="button"
                    >
                      <div>
                        <i className="ni ni-basket" />
                        <span>P2AMONEY Transfer Report</span>
                      </div>
                    </button>
                  </Col>
                  <Col lg="3" md="6">
                    <button
                      className="btn-icon-clipboard"
                      data-clipboard-text="bell-55"
                      id="tooltip126752761"
                      type="button"
                    >
                      <div>
                        <i className="ni ni-bell-55" />
                        <span>Settlement Report</span>
                      </div>
                    </button>
                  </Col>

                  <Col lg="3" md="6">
                    <button
                      className="btn-icon-clipboard"
                      data-clipboard-text="bold-down"
                      id="tooltip819281856"
                      type="button"
                    >
                      <div>
                        <i className="ni ni-bold-down" />
                        <span>AEPS Log Report</span>
                      </div>
                    </button>
                  </Col>
                  <Col lg="3" md="6">

                    <button
                      className="btn-icon-clipboard"
                      data-clipboard-text="bold-left"
                      id="tooltip881699027"
                      type="button"
                    >
                      <div>
                        <i className="ni ni-bold-left" />
                        <span>Balance Request Report</span>
                      </div>
                    </button>

                  </Col>
                  <Col lg="3" md="6">

                    <button
                      className="btn-icon-clipboard"
                      data-clipboard-text="bold-right"
                      id="tooltip208507461"
                      type="button"
                    >
                      <div>
                        <i className="ni ni-bold-right" />
                        <span>Revert Balance Report</span>
                      </div>
                    </button>

                  </Col>
                  <Col lg="3" md="6">

                    <button
                      className="btn-icon-clipboard"
                      data-clipboard-text="bold-up"
                      id="tooltip105289310"
                      type="button"
                    >
                      <div>
                        <i className="ni ni-bold-up" />
                        <span>Balance Transfer Report</span>
                      </div>
                    </button>

                  </Col>

                  <Col lg="3" md="6">

                    <button
                      className="btn-icon-clipboard"
                      data-clipboard-text="book-bookmark"
                      id="tooltip606002875"
                      type="button"
                    >
                      <div>
                        <i className="ni ni-book-bookmark" />
                        <span>Refund Report</span>
                      </div>
                    </button>

                  </Col>
                  <Col lg="3" md="6">

                    <button
                      className="btn-icon-clipboard"
                      data-clipboard-text="books"
                      id="tooltip484529730"
                      type="button"
                    >
                      <div>
                        <i className="ni ni-books" />
                        <span>Utility Report</span>
                      </div>
                    </button>

                  </Col>
                  <Col lg="3" md="6">

                    <button
                      className="btn-icon-clipboard"
                      data-clipboard-text="box-2"
                      id="tooltip509205883"
                      type="button"
                    >
                      <div>
                        <i className="ni ni-box-2" />
                        <span>NSDL PAN Report</span>
                      </div>
                    </button>

                  </Col>
                  <Col lg="3" md="6">

                    <button
                      className="btn-icon-clipboard"
                      data-clipboard-text="briefcase-24"
                      id="tooltip147778056"
                      type="button"
                    >
                      <div>
                        <i className="ni ni-briefcase-24" />
                        <span>Micro ATM Report</span>
                      </div>
                    </button>

                  </Col>
                  <Col lg="3" md="6">

                    <button
                      className="btn-icon-clipboard"
                      data-clipboard-text="building"
                      id="tooltip157423388"
                      type="button"
                    >
                      <div>
                        <i className="ni ni-building" />
                        <span>TDS Report</span>
                      </div>
                    </button>

                  </Col>
                  <Col lg="3" md="6">

                    <button
                      className="btn-icon-clipboard"
                      data-clipboard-text="bulb-61"
                      id="tooltip126210465"
                      type="button"
                    >
                      <div>
                        <i className="ni ni-bulb-61" />
                        <span>UTI Agent Report</span>
                      </div>
                    </button>

                  </Col>
                  <Col lg="3" md="6">

                    <button
                      className="btn-icon-clipboard"
                      data-clipboard-text="bullet-list-67"
                      id="tooltip672244852"
                      type="button"
                    >
                      <div>
                        <i className="ni ni-bullet-list-67" />
                        <span>Coupon Report</span>
                      </div>
                    </button>

                  </Col>
                  <Col lg="3" md="6">

                    <button
                      className="btn-icon-clipboard"
                      data-clipboard-text="bus-front-12"
                      id="tooltip17383590"
                      type="button"
                    >
                      <div>
                        <i className="ni ni-bus-front-12" />
                        <span>View User</span>
                      </div>
                    </button>

                  </Col>
                  <Col lg="3" md="6">

                    <button
                      className="btn-icon-clipboard"
                      data-clipboard-text="button-pause"
                      id="tooltip721295259"
                      type="button"
                    >
                      <div>
                        <i className="ni ni-button-pause" />
                        <span>Micro ATM Report</span>
                      </div>
                    </button>

                  </Col>














                </Row>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Icons;
