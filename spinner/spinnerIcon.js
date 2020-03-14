import React from "react";

const spinner = ()=>{
  
    return(
<svg xmlns="http://www.w3.org/2000/svg"  style={{background: "none"}}  width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<g transform="translate(50 50)">
  <g transform="scale(0.7)">
    <g transform="translate(-50 -50)">
      <g transform="rotate(317.258 50 50)">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="0.7575757575757576s"></animateTransform>
        <path fill-opacity="0.8" fill="#701d72" d="M50 50L50 0A50 50 0 0 1 100 50Z"></path>
      </g>
      <g transform="rotate(57.9307 50 50)">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="1.0101010101010102s"></animateTransform>
        <path fill-opacity="0.8" fill="#5699d2" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(90 50 50)"></path>
      </g>
      <g transform="rotate(158.623 50 50)">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="1.5151515151515151s"></animateTransform>
        <path fill-opacity="0.8" fill="#d8ebf9" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(180 50 50)"></path>
      </g>
      <g transform="rotate(259.31 50 50)">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="3.0303030303030303s"></animateTransform>
        <path fill-opacity="0.8" fill="#cc71ae" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(270 50 50)"></path>
      </g>
    </g>
  </g>
</g>
</svg>
      
    );
        
    

}
export default spinner; 