import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'index.js';


function App() {
  return (
    <>
    <h1 style="color:black">WELCOME TO MY WEBSITE</h1>
    <div>
        <h2 class="p.padTop" style="color: black;">
            This is the place where i can showcase my profile
        </h2>
        
    </div>
    <h3 style="color: black;"> 
       I am Jananiksha
    </h3>
    <p style="color: black;">
        Enthusiastic AI&DS student dedicated to lifelong learning and growth in the field of AI and Data Science.
    </p>
    <div>
        <p style="color:black">
            <b>My Education:</b>
            <p style="padding-left: 5%;"> ABC School</p>
            <p style="padding-left: 5%;"> Kumaraguru College of Technology</p>
        </p>

        <p style="color: black;">
            <b>My Interests:</b>
            <p style="padding-left: 5%;">Listening to Music</p>
            <p style="padding-left: 5%;">Reading books</p>
            <p style="padding-left: 5%;">Travel</p>
        </p>

        <p>
            Hii Hello
        </p>
    </div>
    <div>
        
        <p style="color:black;">
            <b>Skills:</b>
            <p style="padding-left: 5%;">Python</p>
            <p style="padding-left: 5%;">FullStack</p>
            <p style="padding-left: 5%;">Java</p>
        
        </p>


        
        <div class="outerbox">
            <div className="box"class="para1" style="color: black;">Tamil</div>
            <div className="box" class="para2" style="color: black;">English</div>
            <div className="box" class="para3" style="color: black;">Hindi</div>
            <div className="box" class="para4" style="color: black;">French</div>
            
    </div>
            
        <p id="output"></p>
    
    <button class="button" onClick="printMessage1()">Contact No</button>
    <button class="button" onClick="printMessage2()">MailID</button>
    <button class="button" onClick="printMessage3()">LinkedIn</button>
    <button class="button" onClick="printMessage4()">InstaID</button>
    

     </div>
    

    </>     
  );
}

export default App;
