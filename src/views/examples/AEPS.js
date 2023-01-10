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
    // Dropdown,
} from "reactstrap";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "views/examples/Dropdown";
import Dropdown2 from "views/examples/Dropdown2";


import { useEffect } from 'react';

var index = 0;
var page = 0;
var numOfRows = 10;

/**
 * 
 * @param {String dateString} 
 * @returns Formated Date as YYYY-MM-DD
 */
function formatDate(dateString) {
    let date = new Date(dateString);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    if (day < 10) {
        day = 0 + "" + day;
    }
    if (month < 10) {
        month = 0 + "" + month;
    }
    return year + '-' + month + '-' + day;

}

export default function AEPS() {


    const [sdate, setsDate] = useState();
    const [edate, seteDate] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [resMap, setResponse] = useState([]);
    const [count, setCount] = useState(0);
    const [query, setQuery] = useState('')
    

    
    console.log(resMap.filter(row=>row.narration.toLowerCase().includes("")))

    //console.log(filter(query, 0 , resMap))

    
   

// const handleChange = (e) => {
//     setquery(e.target.value)
// }

    const handlstartdate = (e) => {
        console.log(formatDate(e));
        setsDate(e);
    }
    const handlenddate = (e) => {
        seteDate(e);
    }
   
   

    const handelNext = (e) => {
        page += 1;
        setCount(page)
        var token = localStorage.getItem("token");
        if (token !== null || token !== undefined) {
            const myHeaders = new Headers()
            myHeaders.append("Authorization",
                "Bearer " + localStorage.getItem("token"))
            myHeaders.append("Content-Type", "application/json")
            console.log(formatDate(sdate), formatDate(edate));
            var raw = JSON.stringify({
                "endDate": formatDate(edate),
                "startDate": formatDate(sdate),
                "userId": ""
            })
            var requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow",
            };
            let transactionUrl = "https://uat.softmintdigital.com/reportservice/transaction/aepsreport?pageNo=" + page + "&pageSize=" + numOfRows;
            
            fetch(transactionUrl,
                requestOptions
            )
                .then((response) => response.json())
                .then((result) => {
                    index = 0;
                    setResponse(result.report)
                    setIsLoading(false);
                    console.log(transactionUrl);

                })

                .catch((error) => console.log(error));

        }
    }
    const handlePrevious = () => {
        if (page <= 0) {
            page = 0
        } else {
            page -= 1
        }
        setCount(page)

        var token = localStorage.getItem("token");
        if (token !== null || token !== undefined) {
            const myHeaders = new Headers()
            myHeaders.append("Authorization",
                "Bearer " + localStorage.getItem("token"))
            myHeaders.append("Content-Type", "application/json")
            console.log(formatDate(sdate), formatDate(edate));
            var raw = JSON.stringify({
                endDate: formatDate(edate),
                startDate: formatDate(sdate),
                userId: ""
            })
            var requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow",
            };
            let transactionUrl = "https://uat.softmintdigital.com/reportservice/transaction/aepsreport?pageNo=" + page + "&pageSize=" + numOfRows;
            
            fetch(transactionUrl,
                requestOptions
            )
                .then((response) => response.json())
                .then((result) => {
                    index = 0;
                    setResponse(result.report)
                    setIsLoading(false);
                    console.log(result.report);

                })

                .catch((error) => console.log(error));

        }

    }

    const handleApi = () => {
        setIsLoading(true);
        var token = localStorage.getItem("token");
        if (token !== null || token !== undefined) {
            const myHeaders = new Headers()
            myHeaders.append("Authorization",
                "Bearer " + localStorage.getItem("token"))
            myHeaders.append("Content-Type", "application/json")
            console.log(formatDate(sdate), formatDate(edate));
            var raw = JSON.stringify({
                endDate: formatDate(edate),
                startDate: formatDate(sdate),
                userId: ""
            })
            var requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow",
            };
            let transactionUrl = "https://uat.softmintdigital.com/reportservice/transaction/aepsreport?pageNo=" + page + "&pageSize=" + numOfRows;
            
            fetch(transactionUrl,
                requestOptions
            )
                .then((response) => response.json())
                .then((result) => {
                    index = 0;
                    setResponse(result.report)
                    console.log(result.report)
                    setIsLoading(false);


                })

                .catch((error) => console.log(error));

        } else {
            this.props.history.push("/auth/login")
        }
    }
    if (isLoading) return 'loading';



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
                                               
                                                <DatePicker className="form-control" selected={sdate} onChange={handlstartdate} placeholderText="Select Date" showPopperArrow={false} dateFormat="yyyy-MM-dd" id='dates' />
                                               

                                            </Col>
                                            <Col lg="2" md="6">
                                                <h4>End Date: </h4>
                                                <DatePicker className="form-control" selected={edate} dateFormat="yyyy-MM-dd" placeholderText="Select Date" showPopperArrow={false} onChange={handlenddate} id='datee' />

                                               
                                            </Col>
                                            
                                            
                                           



                                            <Col lg="2" md="6">
                                                <h4>Search</h4>
                                                <div>

                                                    <input
                                                        type="text"
                                                        // value={query} 
                                                        onChange={(e)=>setQuery(e.target.value)}
                                                        className="form-control"
                                                        placeholder="Search"
                                                        style={{marginBottom: "2px",}}
                                                    ></input>
                                                </div>
                                            </Col>
                                            <Col lg="2" md="6">
                                                <button type="submit" className="btn btn-success"
                                                    style={{
                                                        backgroundColor: "#11cdef",
                                                       
                                                        textAlign: "center",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        marginTop: "30px",
                                                    }}
                                                    onClick={handleApi}
                                                   
                                                    data-clipboard-text="align-center"
                                                    id="tooltip662352101"
                                              
                                                >
                                                    UPDATE
                                                </button>
                                            </Col>
                                            <Col lg="2" md="6">
                                                <button type="submit" className="btn btn-success"
                                                    style={{
                                                        backgroundColor: "#11cdef",
                                                       
                                                        textAlign: "center",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        marginTop: "30px",
                                                    }}
                                                    
                                                    data-clipboard-text="align-center"
                                                    id="tooltip662352101"
                                              
                                                >
                                                    Export
                                                </button>
                                            </Col>
                                            <Col lg="2" md="6">
                                                <button type="submit" className="btn btn-success"
                                                    style={{
                                                        backgroundColor: "#11cdef",
                                                      
                                                        textAlign: "center",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        marginTop: "30px",
                                                    }}
                                                   
                                                    data-clipboard-text="align-center"
                                                    id="tooltip662352101"
                                               
                                                >
                                                    Export
                                                </button>
                                            </Col>
                                           
                                            {/* <Dropdown /> */}
                                            {/* <Dropdown2 /> */}

                                            
                                        </Row>
                                        {/* <p className="mt-3 mb-0 text-muted text-sm">
                                            <span className="text-success mr-2">

                                            </span>{" "}

                                        </p> */}
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
                                <h3 className=" mt-0">AEPS Report</h3>
                                <div style={{ marginTop: "-2rem" }}>
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
                                                <PaginationLink

                                                    href="#pablo"
                                                   
                                                    tabIndex="-1"
                                                >
                                                     {count}
                                                   
                                                    <span className="sr-only">Previous</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                           

                                            <PaginationItem>
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={handelNext}
                                                >

                                                    <i className="fas fa-angle-right" />
                                                    <span className="sr-only">Next</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                        </Pagination>
                                    </nav>
                                </div>

                            </CardHeader>

                            <Table className="align-items-center table-flush" responsive reflow="true" id="dataTable">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">SR NO.</th>
                                        <th scope="col">username</th>
                                        <th scope="col">userId</th>
                                        <th scope="col">mobile</th>
                                        <th scope="col">adhaar</th>
                                        <th scope="col">marchentTransactionld</th>
                                        <th scope="col">bankRRN</th>
                                        <th scope="col">transaction Type</th>
                                        <th scope="col">transaction Amount</th>
                                        <th scope="col">balanceAmount</th>
                                        <th scope="col">status</th>
                                        <th scope="col">narration</th>
                                        <th scope="col">lin</th>
                                        <th scope="col">bankName</th>
                                        <th scope="col">agentCode</th>
                                        <th scope="col">latitude</th>
                                        <th scope="col">longitude</th>
                                        <th scope="col">date&time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {resMap.filter((row)=>row.narration.includes(query)).map(row => {
                                        return (
                                            <tr >
                                                <td >{index += 1}</td>
                                                <td>{row.username}</td>

                                                <td>{row.userid}</td>
                                                <td >{row.mobile}</td>
                                                <td>{row.adhaar}</td>
                                                <td>{row.marchentTransactionId}</td>
                                                <td>{row.bankRRN}</td>
                                                <td>{row.transactionType}</td>
                                                <td>{row.transactionAmount}</td>
                                                <td>{row.balanceAmount}</td>
                                                <td>{row.status}</td>
                                                <td  key={row.narration}>{row.narration}</td>
                                                <td>{row.iin}</td>
                                                <td>{row.bankName}</td>
                                                <td >{row.agentCode}</td>
                                                <td>{row.latitude}</td>
                                                <td>{row.longitude}</td>
                                                <td>{row.date}&{row.time}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                            <div className="App">
                                
                            </div>
                           </Card>
                    </div>
                </Row>
            </Container>
        </>
    )
}















