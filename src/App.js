import './App.css';
import React from 'react';
import './index.js';

function App() {
  return (
  <div>
  <div>
    <h1>WELCOME TO MY WEBSITE</h1>
    </div>
        

    <h3> 
       <b>I'm Jananiksha</b>
    </h3>
    <p id="output"></p>
    
    <button class="button" onClick="printMessage1()">Contact No</button>
    <button class="button" onClick="printMessage2()">Mail ID</button>
    <button class="button" onClick="printMessage3()">LinkedIn</button>
    <button class="button" onClick="printMessage4()">Instagram</button>
    <h4>
        Enthusiastic AI&DS student dedicated to lifelong learning and growth in the field of AI and Data Science.
    </h4>
    <div>
    <h5>Education:</h5>
        <p>
            <p>Breeks All India Secondary School </p>
            <p>AVB Matriculation Higher Secondary School</p>
            <p>Kumaraguru College of Technology</p>
        </p>

    <h6>Hobbies:</h6>
        <p>
            <p>Listening to Music</p>
            <p>Reading books</p>
            <p>Travel</p>
        </p>

        
    </div>
        <div>
    <h7>Skills:</h7>
        <p>
            <p>Python</p>
            <p>FullStack</p>
            <p>Java</p>
        
        </p>


        <h8>Languages Known:</h8>
        <div class="outerbox">
            <div class="box"className="para1">Tamil</div>
            <div class="box" className="para2">English</div>
            <div class="box" className="para3">Hindi</div>
            <div class="box" className="para4">French</div>
        </div> 
    </div>
    <div>
        
    </div>
    </div>
    );
}

export default App;