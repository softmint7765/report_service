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
// reactstrap components
import {
  Badge,
  Card,
  CardHeader,


  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
 
  Table,
  Container,
  Row,
  
} from "reactstrap";

import "react-datepicker/dist/react-datepicker.css";

// core components
import { CardBody,  Col } from "reactstrap";



const ICICI = () => {






  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">

            <Row>
              <Col lg="12" xl="12" >
                <Card className="card-stats mb-4 mb-xl-0">

                  <CardBody>
                    <Row>
                      <Col lg="2" md="6">


                        <h4>From</h4>
                        <div>

                          <form style={{ marginTop: "5px" }}>
                            <label>
                              <input type="date" style={{ height: "36px" }} />
                            </label>
                          </form>



                        </div>

                      </Col>
                      <Col lg="2" md="6">


                        <h4>To</h4>
                        <div>


                          <form style={{ marginTop: "5px" }}>
                            <label>
                              <input type="date" style={{ height: "36px" }} />
                            </label>
                          </form>
                        </div>


                      </Col>
                      <Col lg="2" md="6">




                        <h4>Search</h4>
                        <div>


                          <input placeholder="Search" style={{ height: "36px", width: "140px", marginBottom: "2px" }}></input>

                        </div>


                      </Col>
                      <Col lg="2" md="6">

                        <button
                          style={{ backgroundColor: "#11cdef", height: "10px", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "27px" }}
                          className="btn-icon-clipboard"
                          data-clipboard-text="align-center"
                          id="tooltip662352101"
                          type="button"
                        >
                          Search
                        </button>

                      </Col>
                      <Col lg="2" md="6">

                        <button
                          style={{ backgroundColor: "#11cdef", height: "10px", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "27px" }}
                          className="btn-icon-clipboard"
                          data-clipboard-text="align-center"
                          id="tooltip662352101"
                          type="button"
                        >
                          Reset


                        </button>

                      </Col>
                      <Col lg="2" md="6">

                        <button
                          style={{ backgroundColor: "#11cdef", height: "10px", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "27px" }}
                          className="btn-icon-clipboard"
                          data-clipboard-text="align-center"
                          id="tooltip662352101"
                          type="button"
                        >
                          Export
                          <div>

                          </div>
                        </button>

                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                      </span>{" "}
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <Container className="mt--7" fluid style={{ backgroundColor: "#" }}>
        <Row className="mb--20">
          <div className="col">
            <Card className="shadow">
              <CardHeader className=" border-0">
                <h3 className=" mb-0"> ICICI Report</h3>
              </CardHeader>
              <Table
                className="align-items-center table-flush"
                responsive
              >
                <thead className="thead-light">
                  <tr>
                    <th scope="col">SR NO.</th>
                    <th scope="col">Username</th>
                    <th scope="col">	Email</th>
                    <th scope="col">Total Scan</th>
                    <th scope="col">Registration Date & Time</th>
                    <th scope="col">Action</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">

                        <Media>
                          <span className="mb-0 text-sm">
                            1
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>Anshul Sharma</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        anshulsharma90981@gmail
                      </Badge>
                    </td>

                    <td>
                      <div className="avatar-group"><span className="mr-2">+728543290</span>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">	Nov 27, 2022 5:40 PM</span>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">

                        <Media>
                          <span className="mb-0 text-sm">
                            2
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>Anshul Sharma </td>
                    <td>
                      <Badge color="" className="badge-dot">
                        <i className="bg-success" />
                        anshulsharma90981@gmail.com
                      </Badge>
                    </td>

                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">+98765429887</span>

                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">Nov 27, 2022 5:40 PM</span>

                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >

                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">

                      <Media>
                        <span className="mb-0 text-sm">3</span>
                      </Media>

                    </th>
                    <td>Anshul Sharma</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-danger" />
                        anshulsharma90981@gmail
                      </Badge>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">+98563210000</span>

                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">	Nov 27, 2022 5:40 PM</span>

                      </div>
                    </td>



                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">

                      <Media>
                        <span className="mb-0 text-sm">
                          4
                        </span>
                      </Media>
                      {/* </Media> */}
                    </th>
                    <td>Anshul Sharma</td>
                    <td>
                      <Badge color="" className="badge-dot">
                        <i className="bg-info" />
                        anshulsharma90981@gmail
                      </Badge>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">+98563210000</span>

                      </div>
                    </td>
                    <td>
                      <div className="">
                        <div className="d-flex align-items-center">
                          <span className="mr-2">Nov 27, 2022 5:40 PM</span>
                          <div>

                          </div>
                        </div>








                      </div>
                    </td>

                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">

                      <Media>
                        <span className="mb-0 text-sm">
                          5
                        </span>
                      </Media>

                    </th>
                    <td>Anshul Sharma</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        anshulsharma90981@gmail
                      </Badge>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">+98563210000</span>

                      </div>
                    </td>
                    <td>
                      <div className="">
                        <div className="d-flex align-items-center">
                          <span className="mr-2">Nov 27, 2022 5:40 PM</span>
                        </div>
                      </div>
                    </td>



                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ICICI;
