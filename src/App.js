import React from 'react';
import"./App.css";
import pic from "./image.jpg";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
function App(){

  return(
    <div>
      <div class="column1">
      <br/>
      <img src={pic} alt="my" class="center" border= "3px"/></div>
      <div class="column2">
        <br/>
        <br/>
      <h1>RASHMI <i>JAYASUNDARA</i></h1></div>
      <div class="column2">
      <h2> Profile </h2>
      <p>I am a third-year undergraduate in the Faculty of Science studying <strong>Computer Science, Statistics and Mathematics</strong> at the
         University of Colombo. As a Computer Science student, I'm looking forward to learning about how Computer science is used in the real
         world. I like to learn new things and improve my skills.<br/>
         <br/>
          I am able to work under pressure and in a team environment. I enjoy working with team members. Moreover, I am a quick learner and would like to broaden my knowledge.</p></div>
     
    <div class="column1">
      <h2>Personal Information</h2>
      <strong>Name:</strong><dd>Rashmi Nirmani Nimeshika Jayasundara</dd>
             <strong>Birthday:</strong> <dd>23/12/1997</dd>
             <strong>Gender:</strong> <dd>Female</dd>
             <strong>NIC:</strong><dd>978581366V</dd>
             <strong>Nationality:</strong><dd>SriLankan</dd>
    </div>

    <div class="column2">
      <h2>Education</h2>
      <ol><li><h3>Bachelor of Computer Science, Statistics and Mathematics in Physical Science(2019 present)</h3>
        <ul> University of Colombo,Colombo<br/>
           Computer Science, Statistics, Applied Mathematics,Information Technology, Pure Mathematics</ul></li>
         
      <li><h3>G.C.E Advance Level Examination,2017</h3>
          <ul>Holy Family Balika,Kurunegala<br/>  
           Combined Mathematics: A, Chemistry: B, Physics: C</ul></li>


      <li><h3>G.C.E Advance Level Examination,2013</h3>
        <ul> Holy Family Balika,Kurunegala<br/>  
              A: 8'S | C: 1<br/>
              Mathematics: A, Science: A, English: C<br/>
              English:B (G.C.E. O/L in 2018)</ul></li>

      <li><h3>Diploma in English,2018</h3>
        <ul>National Youth Service Council,Kurunegala</ul></li>

      <li><h3>Certificate course in Practical Training in Tamil Language,2019</h3>
        <ul>Department of Official Languages & University of Colombo</ul></li>
      </ol>
      </div>
      
      <div class="column1">
      <h2>Objective</h2>
      <ul><li>Seek an entry-level position in a high-level professional environment to begin my career.</li>
             <li>Make a significant contributionto the success of the company while enhancing my skills.</li>
             <li>  Interested in a challenging career.</li></ul></div>
             

      <div class="column1">
      <h2>Interests</h2>       
      <ul><li>Learning New Skills</li>
          <li>Club Memberships</li>
          <li>Following new technolog</li></ul></div>
        
      <div class="column1"> 
      <h2>Skills</h2>
      <h3>Soft skills</h3>
      <table >
        <thead>
          <tr>
            <th>Skill</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Problem Solving</td>
            <td><ProgressBar variant="info" now={80}/></td>
          </tr>
          <tr>
            <td>Leadership</td>
            <td><ProgressBar variant="info" now={80}/></td>
          </tr>
          <tr>
            <td>Team work</td>
            <td><ProgressBar variant="info" now={100}/></td>
          </tr>
          <tr>
            <td>Creativity</td>
            <td><ProgressBar variant="info" now={80}/></td>
          </tr>
          <tr> 
            <td>Communication</td>
            <td><ProgressBar variant="info" now={90}/></td>
          </tr>
          <tr>
            <td>Version controlling</td>
            <td><ProgressBar variant="info" now={50}/></td>
          </tr>
          <br/>

          <h3>Computer Literacy</h3>
          <tr>
            <td>MS Office</td>
            <td><ProgressBar variant="info" now={90}/></td>
          </tr>
          <tr>
            <td>Unity</td>
            <td><ProgressBar variant="info" now={70}/></td>
          </tr>
          <tr>
            <td>Java, C#</td>
            <td><ProgressBar variant="info" now={60}/></td>
          </tr>
          <tr>
            <td>HTML,CSS</td>
            <td><ProgressBar variant="info" now={90}/></td>
          </tr>
          <tr>
            <td>React.js</td>
            <td><ProgressBar variant="info" now={50}/></td>
          </tr>
          <br/>

          <h3>Languages</h3>
          <tr>
            <td>Sinhala</td>
            <td><ProgressBar variant="info" now={100}/></td>
          </tr>
          <tr>
            <td>English</td>
            <td><ProgressBar variant="info" now={70}/></td>
          </tr>
          <tr>
            <td>Tamil</td>
            <td><ProgressBar variant="info" now={40}/></td>
          </tr>

        </tbody>

      </table>
     
     </div>

     
    </div>
    
  );
}
export default App;