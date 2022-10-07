import React, { useState } from "react";
import { useSelector } from "react-redux";
import QuoraHeader from "./QuoraHeader";
import { selectUser } from "../feature/userSlice";
import "./css/HomePage.css";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const HomePage = () => {
  const user = useSelector(selectUser);
  const [showBasic, setShowBasic] = useState(false);

  return (
    <div className="home">
      <QuoraHeader />
      <motion.div
        className="Home"
        initial={{ opacity: 0 }}
        animate={{ opacity: "100%" }}
        exit={{ opacity: 0 }}
      >
        <div className="Front">
        <p><span>OnlyQnA</span> is a web application that offers students a platform to ask their questions and pose their difficulties.Iusto a libero nam eum, at rerum aperiam magnam deleniti, enim eligendi, consectetur ut placeat ex quam porro voluptate. Distinctio!</p>

        <img className="LogoH" src="https://github.com/Arjun-Zan-D/OnlyCharity/blob/main/img/onlyQnAXIE.png?raw=true" alt="" />
        {/* <h1 className="GD">Got Doubts?</h1> */}

        
        
         
        </div>

        
        <div class="box">
          <h1 className="Madeby">Made by</h1>
      <div class="card">
        <div class="imgBx">
            <img src="https://github.com/Arjun-Zan-D/OnlyCharity/blob/main/img/WhatsApp%20Image%202022-04-26%20at%204.40.58%20PM.jpeg?raw=true" alt="images"/>
        </div>
        <div class="details">
            <h2>Mrunal Vaidya<br/><span>Developer</span></h2>
        </div>
      </div>
    
       <div class="card">
         <div class="imgBx">
            <img src="https://github.com/Arjun-Zan-D/OnlyCharity/blob/main/img/Arjun.jpeg?raw=true" alt="images"/>
         </div>
         <div class="details">
            <h2>Arjun Singh Shishodia<br/><span>Designer</span></h2>
          </div>
       </div>

       <div class="card">
         <div class="imgBx">
            <img src="https://github.com/Arjun-Zan-D/OnlyCharity/blob/main/img/Gaurav%20Vengurlekar%20.jpg?raw=true" alt="images"/>
         </div>
         <div class="details">
            <h2>Gaurav Vengurlekar<br/><span>Member</span></h2>
          </div>
       </div>
       <div class="card">
         <div class="imgBx">
            <img src="https://github.com/Arjun-Zan-D/OnlyCharity/blob/main/img/Screenshot%20(67).png?raw=true" alt="images"/>
         </div>
         <div class="details">
            <h2>Shailesh Teddu<br/><span>Helper</span></h2>
          </div>
       </div>
 
  </div>
<div className="builtby">
  <h1 className="MadeWith">Made With</h1>
  <div class="mern-logos">
  <div class="mongo-logo">
    <div class="topmongo">
      <div class="rightleave"></div>
      <div class="leftleave"></div>
    </div>
    <div class="chunk"></div>
  </div>
  <div class="express-logo">
    <div class="expressive"></div>
  </div>
  <div class="react-logo">
    <div class="reactive"></div>
  </div>
  <div class="nodes">
    <div class="node-logo"/>
    <div class="nodive"/>
  </div>
</div>
</div>


<div class="footer">
  <div class="inner-footer">


    <div class="footer-items">
      {/* <h1>OnlyQnA</h1> */}
      <img className="footerlogo" src="https://github.com/Arjun-Zan-D/OnlyCharity/blob/main/img/onlyQnAXIE.png?raw=true" alt="" />
      <p>OnlyQNA is a web application that offers students a place to ask their questions and pose their difficulties. People who have answers respond to the questions and assist
    people in gaining detailed information about the subject. On this network, freshmen may engage with college seniors and alumni.
</p>
    </div>


    <div class="footer-items">
      <h3>Quick Links</h3>
      <div class="border1"></div> 
        <ul>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Search</li></a>
          <a href="#"><li>Unanswerd</li></a>
          <a href="#"><li>Profile</li></a>
        </ul>
    </div>


    <div class="footer-items">
      <h3>Documentation</h3>
      <div class="border1"></div>  
        <ul>
          <a href="#"><li>Presentation</li></a>
          <a href="#"><li>SRS</li></a>
          <a href="#"><li>WBS/Gantt Chart</li></a>
          <a href="#"><li>RMMA</li></a>
        </ul>
    </div>


    <div class="footer-items">
      <h3>Contact us</h3>
      <div class="border1"></div>
        <ul>
          <li><i class="fa fa-map-marker" aria-hidden="true"></i>Xavier Institute of Engineering, Mahim Causeway, Mahim 400016</li>
          <li><i class="fa fa-phone" aria-hidden="true"></i>123456789</li>
          <li><i class="fa fa-envelope" aria-hidden="true"></i>office@xavier.ac.in</li>
        </ul> 
      

        <div class="social-media">
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-google-plus-square"></i></a>
        </div> 
    </div>
  </div>
  

  <div class="footer-bottom">
    Copyright &copy; Xavier Institute and engineering 2022-23
  </div>
</div>

        
        
      </motion.div>
    </div>
  );
};

export default HomePage;
