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
} from "reactstrap";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";


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

export default function Transiction() {


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
        if (resMap.length < numOfRows) {
           
        }else{
            if (page >= 0 && resMap.length === numOfRows){
                page += 1
            }
        }
       
        setCount(page)
        handleApi();
    }
    const handlePrevious = () => {
        if (page <= 0) {
            page = 0
        } else {
            page -= 1
        }
        setCount(page)

        handleApi();

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
            let transactionUrl = "https://uat.softmintdigital.com/reportservice/transaction/transactionreport?pageNo=0&pageSize=" + numOfRows;
            fetch(transactionUrl,
                requestOptions
            )
                .then((response) => response.json())
                .then((result) => {
                    index = 0;
                    setResponse(result.report)
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
                                <h3 className=" mt-0">Transiction Report</h3>
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
                                        <th scope="col">name</th>
                                        <th scope="col">firmName</th>
                                        <th scope="col">wlnm</th>
                                        <th scope="col">wlId</th>
                                        <th scope="col">userId</th>
                                        <th scope="col">transId</th>
                                        <th scope="col">adopbal</th>
                                        <th scope="col">openingBal</th>
                                        <th scope="col">credit</th>
                                        <th scope="col">debit</th>
                                        <th scope="col">closingBal</th>
                                        <th scope="col">adclbal</th>
                                        <th scope="col">narration</th>
                                        <th scope="col">remarks</th>
                                        <th scope="col">date&time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {resMap.filter((row)=>row.narration.includes(query)).map(row => {
                                        return (
                                            <tr >
                                                <td >{index += 1}</td>
                                                <td>{row.name}</td>
                                                <td >{row.firmName}</td>
                                                <td>{row.wlnm}</td>
                                                <td>{row.wlId}</td>
                                                <td>{row.userId}</td>
                                                <td>{row.transId}</td>
                                                <td>{row.adopbal}</td>
                                                <td>{row.openingBal}</td>
                                                <td>{row.credit}</td>
                                                <td>{row.debit}</td>
                                                <td>{row.closingBal}</td>
                                                <td>{row.adclbal}</td>
                                                <td  key={row.narration}>{row.narration}</td>
                                                <td>{row.remarks}</td>
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















