import './App.css';
import React from 'react';
import './index.js';

function App() {
  return (
<div>
    <h1>WELCOME TO MY WEBSITE</h1>
    <div>
        <h2>
            This is the place where i can showcase my profile
        </h2>
        
    </div>
    <h3> 
       I am Jananiksha
    </h3>
    <p>
        Enthusiastic AI&DS student dedicated to lifelong learning and growth in the field of AI and Data Science.
    </p>
    <div>
        <p>
            <b>My Education:</b>
            <p>ABC School </p>
            <p> Kumaraguru College of Technology</p>
        </p>

        <p>
            <b>My Interests:</b>
            <p>Listening to Music</p>
            <p>Reading books</p>
            <p>Travel</p>
        </p>

        <p>
            Hii Hello
        </p>
    </div>
    <div>
        
        <p>
            <b>Skills:</b>
            <p>Python</p>
            <p>FullStack</p>
            <p>Java</p>
        
        </p>


        
        <div class="outerbox">
            <div class="box para1">Contact</div>
            <div class="box para2">Mail</div>
            <div class="box para3">LinkedIn</div>
            <div class="box para4">Instagram</div>
            
        </div>
            
        <p id="output"></p>
    
    <button class="button" onClick="printMessage1()">p1</button>
    <button class="button" onClick="printMessage2()">p2</button>
    <button class="button" onClick="printMessage3()">p3</button>
    <button class="button" onClick="printMessage4()">p4</button>
    

     </div>
    

</div>     
  );
}

export default App;
