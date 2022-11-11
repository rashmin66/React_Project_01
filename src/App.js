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
      <Tweet 
      details1="Personal information" 
      details2="Name:Rashmi Nirmani Nimeshika Jayasundara"
      details3="Birthdate:23/12/1997"
      details4="Gender:Female"
      />
      <Tweet />

     
    </div>
  );
}
export default App;