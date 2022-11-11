import React from 'react';
import"./App.css";
function tweet(props){
    return(
        <div className='tweet'>
        <h3>{props.details1}</h3>    
       <ol><p2>{props.details2}</p2><br/>
        <p3>{props.details3}</p3><br/>
        <p4>{props.details4}</p4><br/>
        <p5>{props.details5}</p5><br/>
        <p6>{props.details6}</p6><br/>
        <p7>{props.details7}</p7> </ol>
        
        </div>
    );
}
export default tweet;