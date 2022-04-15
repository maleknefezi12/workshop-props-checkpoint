import React from "react";
import PropTypes from 'prop-types'; 

function Welcome(props) {  
  const styleObject ={color:"red",textAlign:'center'}
    return (
      <div style={styleObject} >
  
    <img src={props.children} alt="hun" className="img"/>
    <h1>{props.name}</h1>
    <h1>{props.bio}</h1>
    <h1>{props.profession} </h1>
    <em>{props.default}</em>
    <button onClick={()=>props.handelfullname(props.name)}>
      Check here
</button>
  
    </div>
    )
  }

  Welcome.defaultProps = {
    name:"malek nefzi",
    bio:"test",
    profession:"dev",
    default:"check",
    }
    
   Welcome.propTypes = {
 name: PropTypes.string,
 bio: PropTypes.string,
 profession: PropTypes.string,
   };

   
  export default Welcome;