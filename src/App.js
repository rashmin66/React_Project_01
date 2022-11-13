import React from 'react';
import Tweet from "./tweet.js" ;
import pic from "./image.jpg";

function App(){

  return(
    <div>
      <div class="column1">
      <img src={pic} alt="my" class="center" img border= "3px solid #555" /></div>
      <div class="column2">
      <h1>RASHMI JAYASUNDARA<br/>University of Colombo</h1></div>
      <div class="column2">
      <h2> Profile </h2>
      <p>I am a third-year undergraduate in the Faculty of Science studying Computer Science, Statistics and Mathematics at the
         University of Colombo. As a Computer Science student, I'm looking forward to learning about how Computer science is used in the real
         world. I like to learn new things and improve my skills.<br/>I am able to work under pressure and in a team environment. I
        enjoy working with team members. Moreover, I am a quick learner and would like to broaden my knowledge.</p></div>
     
    <div class="column1">
      <h2>Personal Information</h2>
      <ul><p><li>Name:Rashmi Nirmani Nimeshika Jayasundara</li>
             <li>Birthdate:23/12/1997</li>
             <li>Gender   :Female</li>
             <li>NIC      :978581366V</li>
             <li>Nationality:SriLankan</li></p></ul></div>

    <div class="column2">
      <h2>Education</h2>
      <h3>1.Bachelor of Computer Science, Statistics and Mathematics in Physical Science(2019 present)</h3>
      <p><ul> University of Colombo,Colombo<br/>
              Computer Science, Statistics, Applied Mathematics,Information Technology, Pure Mathematics</ul></p>
         
      <h3>2.G.C.E Advance Level Examination,2017</h3>
      <p><ul> Holy Family Balika,Kurunegala<br/>  
              Combined Mathematics: A, Chemistry: B, Physics: C</ul></p>


      <h3>3.G.C.E Advance Level Examination,2013</h3>
      <p><ul> Holy Family Balika,Kurunegala<br/>  
              A: 8'S | C: 1<br/>
              Mathematics: A, Science: A, English: C<br/>
              English:B (G.C.E. O/L in 2018)</ul></p>

      <h3>4.Diploma in English,2018</h3>
      <p><ul>National Youth Service Council,Kurunegala</ul></p>

      <h3>5.Certificate course in Practical Training in Tamil Language,2019</h3>
      <p><ul>Department of Official Languages & University of Colombo</ul></p></div>
      
      <div class="column1">
      <h2>Objective</h2>
      <ul><p><li>Seek an entry-level position in a high-level professional environment to begin my career.</li>
             <li>Make a significant contributionto the success of the company while enhancing my skills.</li>
             <li>  Interested in a challenging career.</li></p></ul></div>
     
    </div>
  );
}
export default App;