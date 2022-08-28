import React from 'react'
import "../Footer/Footer.css"
import { GrTwitter } from "react-icons/gr"
import {  ImFacebook } from "react-icons/im"
import { GrInstagram } from "react-icons/gr"
import { AiFillLinkedin } from "react-icons/ai"
import { GrYoutube} from "react-icons/gr"



export default function Footer() {
  return (
      <div className='Footer-countiner'>
    <div className='footer'>

        <div className='easy-ahead'>
           <div className='mange'>
             
           <h3>Easy
               <span>ahead</span>
            </h3>

            <p>We take the work out of connecting with others so you can accomplish more.</p>

            <select > 
                <option value="">English</option>
                <option value="">Hindi</option>
                <option value="">France</option>
                <option value="">China</option>
                <option value="">Portuges</option>
                <option value="">Espanol</option>
            </select>


            <div className='playstor'>
              
            <img src="https://assets-marketing-site.calendly.com/static/AppStore-15f01eefb2013206cc7e26d98fbe95fb.svg" alt="" />
            
         
            
            </div>
            <GrTwitter style={{ color: "black" , paddiingLeft: "0px",paddingTop:"20px"}} />
            <ImFacebook style={{ color: "black", paddingLeft: "20px",paddingTop:"20px" }} />

            <GrInstagram style={{ color: "black", paddingLeft: "20px",paddingTop:"20px" }} />

            <AiFillLinkedin style={{ color: "black" , paddingLeft: "20px" }} />
            <GrYoutube style={{ color: "black" , paddingLeft: "20px", paddingTop:"20px"}} />




              
              

           </div>

        </div>



        <div className='table-foooter'>
            <table>
                <tr>
                    <th>About</th>
                 
                    <th>Solutions</th>
                
                    <th>Popular Features</th>
                </tr>

                <tr>
                    <td>About Calaendly</td>
                    <td>Customer Success</td>
                    <td>Embed Calendly</td>

                </tr>

                <tr>
                   <td>Contact Sales</td>
                    <td>Sales</td>
                    <td>Availability</td>
                </tr>

                <tr>
                    <td>Newsroom</td>
                    <td>Recuiting</td>
                    <td>Sending Notifications</td>
                </tr>

                <tr>
                    <td>Careers</td>
                    <td>Information</td>
                    <td>Using Calendly Mobile</td>
                </tr>

                <tr>
                    <td></td>
                    <td>Techonology</td>
                </tr>

                <tr>
                    <td>Security</td>
                    <td>Marketing</td>
                </tr>

                <tr>
                    <th>Support</th>
                    <th>Add-Ons</th>
                    <th>Developers</th>
                </tr>

                <tr>
                    <td>Help Center</td>
                    <td>Download for Chorme</td>
                    <td>Developer Tools</td>
                </tr>

                <tr>
                    <td>Video Tutorials</td>
                    <td>Download for Firefox</td>
                    <td></td>
                </tr>
                
                <tr>
                    <td>Cookie Settings</td>
                    <td></td>
                    <td></td>
                </tr>

            </table>

           

           
        </div>
     


    </div>
    </div>
  )
}
