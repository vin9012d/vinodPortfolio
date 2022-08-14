import React from "react";
import Typewriter from "typewriter-effect";

function Footer(){
    return(
      <div class="text-center p-6 bg-black footer">
        <h2 className="text-2xl sm:text-4xl font-bold text-white">
          
       
        
      <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("GeeksForGeeks")
         
       .pauseFor(1000)
       .deleteAll()
       .typeString("Welcomes You")
       .start();
       }} />
       
         </h2>
        <span class="text-white">&copy; 2022 Copyright - </span>
        <a class="link-underline text-white font-bold" href="https://rahulkarda.netlify.app">Rahul Karda</a>
      </div>
    )
}


export default Footer