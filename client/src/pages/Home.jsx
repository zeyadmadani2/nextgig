import Nav from "../components/Nav"
import PageHeading from "../components/PageHeading"
import styled from "styled-components"
import { useEffect, useState } from "react";
import {Container , Row, Col} from 'react-bootstrap'  
import "../styles/Main.css"
import TuneIcon from '@mui/icons-material/Tune';
import JobDescription from "../components/JobDescription"
import Card from "../components/Card"
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import "./style.css"
const Home=({jobs})=>
{

    const Main=styled.div`height:100%`
const Button=styled.button
`
cursor:pointer;
`
const Set=styled.div
`

`

const CardElement=styled.div
`

`
return(<>
    <Nav/>
    <Main className="Main">
     <div className="App">  
     <div className="container">
      <br/>
      <div className="row">
        <div className="col-lg-4">
        <div className="changeFont">All Results</div>
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4"></div>
      </div>
     </div>
   <Container>  
   <Row> 
    <Col></Col>
    <Col style={{fontSize:14,marginTop:8,fontWeight:"bold"}} className="p-2"></Col>  
    <Col></Col>  <Col></Col>  <Col></Col>  <Col></Col>  <Col></Col>  
    <Col className="p-2">

    </Col>  
  
  </Row>  
  <Row>  

 <div className="col-lg-5">
        <div className="set">
        {jobs.map(job=>
          {
           return <Card key={job._id} id={job._id} job={job}/>
          })}
        </div>
        </div>  
        <div className="col-lg-7">
        <JobDescription/>
        </div>   
  </Row>  
</Container>  
    </div>  
    </Main>
    <Footer/>
</>)
}
export default Home