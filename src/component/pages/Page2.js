import React, { Component } from 'react';
import theImage from './masrafi2.jpg'

class Page2 extends Component {
    render() {
        return (
            <span style={{backgroundColor:"#CB4335"}}>
                <div style={{height:"650px",width:"300px",backgroundColor:"#FCF3CF",float:"left",display:"relative",marginBottom:"50px"}}>
         <img src={theImage} className="img"alt="MyImage"/>
         <h2 style={{marginLeft:"70px"}}>Masrafi Anam</h2>
        <h5 style={{marginLeft:"10px"}}>Southeast University Department of CSE</h5>
        <h3 style={{fontStyle:"oblique",fontWeight:"bold"}}>Al right, this profile is made by me. </h3>

        
<p style={{fontSize:"25px",marginLeft:"80px",marginTop:"190px"}}>FOLLOW ME</p>
<a style={{marginLeft:"20px"}} href="https://www.facebook.com/mdmasrafi.anam"target="_blank" rel="noopener noreferrer">Facebook</a>
<a style={{marginLeft:"8px"}} href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">Youtube</a>
<a style={{marginLeft:"8px"}} href="https://twitter.com/MasrafiAnam"target="_blank"rel="noopener noreferrer">Twiter</a>
<a style={{marginLeft:"8px"}} href="https://www.linkedin.com/feed/"target="_blank"rel="noopener noreferrer">LinkDin</a>
</div>
<table style={{marginLeft:"600px", marginTop:"200px",borderCollapse:"collapse",width:"500px"}}>
  <tr>
    <th style={{border:"2px solid black"}}>Award</th>
    <th style={{border:"2px solid black"}}>Concertration</th>
    <th style={{border:"2px solid black"}}>Institution</th>
    <th style={{border:"2px solid black"}}>Grade/CGPA</th>
    <th style={{border:"2px solid black"}}>Passing Year</th>
  </tr>
  <tr>
    <td style={{border:"2px solid black"}}>CSE</td>
    <td style={{border:"2px solid black"}}>Software</td>
    <td style={{border:"2px solid black"}}>Southeast University</td>
    <td style={{border:"2px solid black"}}> 3.21(Up to 137 Credit)</td>
    <td style={{border:"2px solid black"}}>Continuing</td>
  </tr>
  <tr>
      <td style={{border:"2px solid black"}}>HSC</td>
      <td style={{border:"2px solid black"}}>Science</td>
      <td style={{border:"2px solid black"}}>Jumarbari Adorso Collage</td>
      <td style={{border:"2px solid black"}}>3.80 out of 5.00</td>
      <td style={{border:"2px solid black"}}>2015</td>
  </tr>
  <tr>
      <td style={{border:"2px solid black"}}>SSC</td>
      <td style={{border:"2px solid black"}}>Science</td>
      <td style={{border:"2px solid black"}}>Jumarbari High School</td>
      <td style={{border:"2px solid black"}}> 4.81 out if 5.00</td>
      <td style={{border:"2px solid black"}}>2012</td>
  </tr>
  </table>
            </span>
        );
    }
}

export default Page2;