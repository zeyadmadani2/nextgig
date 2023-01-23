import { useSelector } from "react-redux"
import styled from "styled-components"
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "../configuration/Config";
const Job=styled.div
`
display:flex;
align-items:center;
gap:30px;
width:100%;
margin:20px;
`

const CandidateCard=({jobid})=>
{
    const [candidate,setCandidate]=useState(0)
    useEffect(()=>
{
  window.scrollTo(0,0)
  const fun=async()=>
  {
const res=await axiosInstance.get(`/Employee/getspecificemployee/${jobid}`)
setCandidate(res.data)
  }
  fun()
},[])
    const navigate=useNavigate()
    const {currentUser}=useSelector(state=>state.user)
return(<>
<Job style={{borderBottom:"2px solid grey"}}> 
<div><img className="jkHYKUjuljhBKUGTJGyhkiUGBio" width={100} height={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png"/></div>
<div style={{textAlign:"left"}}>
<h3>
    <div className="changeFont" style={{width:80,height:30,backgroundColor:"grey",borderRadius:15,color:"white",fontSize:15,display:"flex",alignItems:"center",justifyContent:"center"}}>Applied</div>
</h3>
<h3>Name: {candidate.name}</h3>
<h6>
    Location: {
        candidate.address && candidate.country ? candidate.address + "," + candidate.country : <span style={{color:"crimson",textDecoration:"line-through"}}>Not Provided</span>
    }</h6>
<h6>Email: {candidate.email}</h6>
<h6 style={{display:"flex",alignItems:"center",gap:10,cursor:"pointer"}}>
 <InsertDriveFileIcon style={{fontSize:25}}/>
 <a href={candidate.resumeURL}><h5 className="changeFont" style={{marginTop:10}}>View Resume</h5></a></h6>
</div>
</Job>
</>)
}
export default CandidateCard 