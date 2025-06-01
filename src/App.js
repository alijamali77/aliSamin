import React from "react";
import Slider from "./Components/Home/slider/Slider";
import Footer from "./Components/Home/Footer/Footer";
import Header from "./Components/Home/Header/Header";
import News from "./Components/Home/News/News";


const App = ()=>{
  return(
    <section>
      <Header />

      <main>
  
         <Slider />
         <News />
        
      </main>
    <Footer/>
    </section>
   
  );
};

export default App