import React from 'react';
import Tweet from "./tweet.js" ;
import pic from "./image.jpg";

function App(){

  return(
    <div>
      <img src={pic} alt="my"/>
      <h1>RASHMI JAYASUNDARA<br/>University of Colombo</h1>
      <h2> Profile </h2>
      <p>I am a third-year undergraduate in the Faculty of Science studying Computer Science, Statistics and Mathematics at the
         University of Colombo. As a Computer Science student, I'm looking forward to learning about how Computer science is used in the real
         world. I like to learn new things and improve my skills.<br/>I am able to work under pressure and in a team environment. I
        enjoy working with team members. Moreover, I am a quick learner and would like to broaden my knowledge.</p>
     
      <h2>Personal Information</h2>
      <ul><p>Name:Rashmi Nirmani Nimeshika Jayasundara<br/>
             Birthdate:23/12/1997<br/>
             Gender   :Female<br/>
             NIC      :978581366V<br/>
             Nationality:SriLankan</p><br/></ul>
      
      <h2>Education</h2>
      <h3>1.Bachelor of Computer Science, Statistics and Mathematics in Physical Science(2019 present)</h3>
      <p><ul> University of Colombo,Colombo<br/>
              Computer Science, Statistics, Applied Mathematics,Information Technology, Pure Mathematics</ul></p>

      <h3>2.G.C.E Advance Level Examination,2013</h3>
      <p><ul> Holy Family Balika,Kurunegala<br/>  
              A:8'S | C:1<br/>
              Mathematics:A, Science:A, English:C<br/>
              English:B (G.C.E. O/L in 2018)</ul></p>

  

     
    </div>
  );
}
export default App;