import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Col,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
} from 'reactstrap'
import DatePicker from 'react-datepicker'
import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'

import { useEffect } from 'react'

var index = 0
var page = 0

var numOfRows = 10

/**
 *
 * @param {String dateString}
 * @returns Formated Date as YYYY-MM-DD
 */
function formatDate(dateString) {
  let date = new Date(dateString)
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  if (day < 10) {
    day = 0 + '' + day
  }
  if (month < 10) {
    month = 0 + '' + month
  }
  return year + '-' + month + '-' + day
}

export default function Transiction() {
  const [sdate, setsDate] = useState()
  const [edate, seteDate] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [resMap, setResponse] = useState([])
  const [count, setCount] = useState(0)
  const [usertype, setUserType] = useState('')

  var startDate = new Date(sdate)
  var endDate = new Date(edate)
  var timediff = endDate.getTime() - startDate.getTime()
  var datediff = timediff / (1000 * 3600 * 24) + 1

  const handlstartdate = (e) => {
    console.log(formatDate(e))
    setsDate(e)
  }
  const handlenddate = (e) => {
    seteDate(e)
  }
  const handelNext = (e) => {
    if (page >= 1) {
      page = 0
    } else {
      page += 0
    }
    setCount(page)

    page += 1
    setCount(page)
  }
  const handlePrevious = () => {
    if (page <= 0) {
      page = 0
    } else {
      page -= 1
    }
    setCount(page)

    var token = localStorage.getItem('token')
    if (token !== null || token !== undefined) {
      const myHeaders = new Headers()
      myHeaders.append(
        'Authorization',
        'Bearer ' + localStorage.getItem('token'),
      )
      myHeaders.append('Content-Type', 'application/json')
      console.log(formatDate(sdate), formatDate(edate))
      var raw = JSON.stringify({
        endDate: formatDate(edate),
        startDate: formatDate(sdate),
        userId: '',
      })
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      }
      let transactionUrl =
        'https://uat.softmintdigital.com/reportservice/recharge/rechargeReport?pageNo=' +
        page +
        '&pageSize=' +
        numOfRows
      fetch(transactionUrl, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          index = 0
          setResponse(result.responseData.List)
          setIsLoading(false)
          console.log(transactionUrl)
        })

        .catch((error) => console.log(error))
    }
  }

  const handleApi = () => {
    setIsLoading(true)

    console.log(
      localStorage.getItem('rollId'),
      localStorage.getItem('useridEarning'),
    )
    var token = localStorage.getItem('token')
    var rollid = localStorage.getItem('rollId')
    var userId = localStorage.getItem('useridEarning')
    if (token !== null || token !== undefined) {
      var myHeaders = new Headers()
      myHeaders.append(
        'Authorization',
        'Bearer ' + localStorage.getItem('token'),
      )
      myHeaders.append('Content-Type', 'application/json')
      console.log(sdate, edate)
      var myHeaders = new Headers()
      myHeaders.append('Authorization', 'Bearer '.concat(token))
      myHeaders.append('Content-Type', 'application/json')

      var raw = JSON.stringify({
        startDate: sdate,
        endDate: edate,
        userId: 'P13CT3',
        userType: usertype,
        status: 'All',
        operator: '0',
      })

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      }

      fetch(
        'https://uat.softmintdigital.com/reportservice/recharge/rechargeReport?pageNo=' +
          page +
          '&pageSize=' +
          numOfRows,
        requestOptions,
      )
        .then((response) => response.json())
        .then((result) => {
          index = 0
          setResponse(result.report)
          console.log(result)
          if (result.report === undefined) {
            setResponse([])
          } else {
            setResponse(result.report)
          }
          localStorage.removeItem('useridEarning')
          localStorage.removeItem('rollId')

          setIsLoading(false)
        })
        .catch((error) => console.log(error))
    } else {
      this.props.history.push('/')
    }
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
                        <h4>Start Date: </h4>

                        <DatePicker
                          className="form-control"
                          selected={sdate}
                          onChange={handlstartdate}
                          placeholderText="Select Date"
                          showPopperArrow={false}
                          dateFormat="yyyy-MM-dd"
                          id="dates"
                        />
                      </Col>
                      <Col lg="2" md="6">
                        <h4>End Date: </h4>
                        <DatePicker
                          className="form-control"
                          selected={edate}
                          dateFormat="yyyy-MM-dd"
                          placeholderText="Select Date"
                          showPopperArrow={false}
                          onChange={handlenddate}
                          id="datee"
                        />
                      </Col>
                      <Col lg="2" md="6">
                        <h4>Search</h4>
                        <div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                            style={{
                              marginBottom: '2px',
                            }}
                          ></input>
                        </div>
                      </Col>
                      <Col lg="2" md="6">
                        <button
                          type="submit"
                          className="btn btn-success"
                          style={{
                            backgroundColor: '#11cdef',

                            textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '30px',
                          }}
                          onClick={handleApi}
                          data-clipboard-text="align-center"
                          id="tooltip662352101"
                        >
                          UPDATE
                        </button>
                      </Col>
                      <Col lg="2" md="6">
                        <button
                          type="submit"
                          className="btn btn-success"
                          style={{
                            backgroundColor: '#11cdef',

                            textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '30px',
                          }}
                          data-clipboard-text="align-center"
                          id="tooltip662352101"
                        >
                          Export
                        </button>
                      </Col>
                      <Col lg="2" md="6">
                        <button
                          type="submit"
                          className="btn btn-success"
                          style={{
                            backgroundColor: '#11cdef',

                            textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '30px',
                          }}
                          data-clipboard-text="align-center"
                          id="tooltip662352101"
                        >
                          Export
                        </button>
                      </Col>
                      
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2"></span>{' '}
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <Container className="mt--7" fluid style={{ backgroundColor: '#' }}>
        <Row className="mb--20">
          <div className="col">
            <Card className="shadow">
              <CardHeader className=" border-0">
                <h3 className=" mt-0">Recharge Report</h3>
                <div style={{ marginTop: '-2rem' }}>
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="pagination">
                        <PaginationLink
                          href="#pablo"
                          onClick={handlePrevious}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="pagination">
                        <PaginationLink href="#pablo" tabIndex="-1">
                          {count}

                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>

                      <PaginationItem>
                        <PaginationLink href="#pablo" onClick={handelNext}>
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </div>
              </CardHeader>

              <Table
                className="align-items-center table-flush"
                responsive
                reflow="true"
                id="dataTable"
              >
                <thead className="thead-light">
                  <tr>
                    <th scope="col">SR NO.</th>
                    <th scope="col">userId</th>
                    <th scope="col">mobile</th>
                    <th scope="col">operatorId</th>
                    <th scope="col">openBal</th>
                    <th scope="col">amount</th>
                    <th scope="col">charge</th>
                    <th scope="col">comm</th>
                    <th scope="col">closeBal</th>
                    <th scope="col">tid</th>
                    <th scope="col">oid</th>

                    <th scope="col">ptid</th>
                    <th scope="col">status</th>
                    <th scope="col">validation</th>

                    <th scope="col">source</th>
                    <th scope="col">apiId</th>
                    <th scope="col">roleId</th>

                    <th scope="col">wlId</th>
                    <th scope="col">name</th>
                    <th scope="col">firmName</th>

                    <th scope="col">serviceProvider</th>
                    <th scope="col">apiName</th>
                    <th scope="col">whitelebel</th>
                    <th scope="col">userMobile</th>
                    <th scope="col">date&time</th>
                  </tr>
                </thead>
                <tbody>
                  {resMap.map((row) => {
                    return (
                      <tr>
                        <td>{(index += 1)}</td>

                        <td>{row.userId}</td>
                        <td>{row.mobile}</td>

                        <td>{row.operatorId}</td>
                        <td>{row.openBal}</td>
                        <td>{row.amount}</td>

                        <td>{row.charge}</td>

                        <td>{row.comm}</td>
                        <td>{row.closeBal}</td>
                        <td>{row.tid}</td>
                        <td>{row.oid}</td>
                        <td>{row.ptid}</td>

                        <td>{row.status}</td>
                        <td>{row.validation}</td>
                        <td>{row.source}</td>
                        <td>{row.apiId}</td>
                        <td>{row.roleId}</td>
                        <td>{row.wlId}</td>

                        <td>{row.name}</td>
                        <td>{row.firmName}</td>
                        <td>{row.serviceProvider}</td>
                        <td>{row.apiName}</td>
                        <td>{row.whiteLebel}</td>
                        <td>{row.userMobile}</td>

                        <td>
                          {row.date}&{row.time}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
              <div className="App"></div>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  )
}
