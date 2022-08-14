import React from "react";
import { Fade } from "react-reveal"

function Footer(){
    return(
      <div class="text-center p-6 bg-black footer">
        <Fade bottom duration={1000} distance="40px">
        <h2 className="text-2xl sm:text-4xl font-bold text-white">
          
       
          
         Made with ❤️ by Vinod
     
         </h2> </Fade>
        <span class="text-white">&copy; 2022 Copyright - </span>
        <a class="link-underline text-white font-bold" href="https://rahulkarda.netlify.app">Rahul Karda</a>
      </div>
    )
}


export default Footer