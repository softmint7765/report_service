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
  CardFooter,
  Input,
  FormGroup,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
  Button,
} from "reactstrap";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// core components
import { CardBody, CardTitle, Col } from "reactstrap";
import { useState } from "react";

const Recharge = (props) => {
  var index = 0;
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1ZCI6IjEiLCJzY29wZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifV0sImlzcyI6InN5c3RlbSIsImlhdCI6MTY2OTcwOTU1NywiZXhwIjoxNjY5NzEyNTU3fQ.JXwhbtGi0j5RdOa3tzs8F3FO41HAHDQ_zNEMZz6HePo"
  );
  // const setState = (props) => {
  //   res = props;
  //   return res;
  // }
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    "https://uat.softmintdigital.com/reportservice/user/yesbank-inactive-user/7",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
      props.data = JSON.parse(JSON.stringify(result))
    })
    .catch((error) => console.log(error));
  // const classes = useStyles();
  console.log(props.data);
  const rows = [];
  for (let i = 0; i < resvar.responseData.List.size; i++) {
    rows.push(
      <tr>
        <th scope="row">
          <Media className="align-items-center">
            <Media>
              <span className="mb-0 text-sm">1</span>
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
          <div className="avatar-group">
            <span className="mr-2">+728543290</span>
          </div>
        </td>
        <td>
          <div className="d-flex align-items-center">
            <span className="mr-2"> Nov 27, 2022 5:40 PM</span>
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
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Something else here
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </td>
      </tr>
    );
  }

  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col lg="12" xl="12">
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
                          <input
                            placeholder="Search"
                            style={{
                              height: "36px",
                              width: "140px",
                              marginBottom: "2px",
                            }}
                          ></input>
                        </div>
                      </Col>
                      <Col lg="2" md="6">
                        <button
                          style={{
                            backgroundColor: "#11cdef",
                            height: "10px",
                            textAlign: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "20px",
                          }}
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
                          style={{
                            backgroundColor: "#11cdef",
                            height: "10px",
                            textAlign: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "20px",
                          }}
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
                          style={{
                            backgroundColor: "#11cdef",
                            height: "10px",
                            textAlign: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "20px",
                          }}
                          className="btn-icon-clipboard"
                          data-clipboard-text="align-center"
                          id="tooltip662352101"
                          type="button"
                        >
                          Export
                          <div></div>
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
                <h3 className=" mb-0">Recharge Report</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">SR NO.</th>
                    <th scope="col">Username</th>
                    <th scope="col"> Email</th>
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
                          <span className="mb-0 text-sm">1</span>
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
                      <div className="avatar-group">
                        <span className="mr-2">+728543290</span>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2"> Nov 27, 2022 5:40 PM</span>
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

export default Recharge;
