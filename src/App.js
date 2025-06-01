import React from "react";
import Slider from "./Components/Pages/slider/Slider";
import Footer from "./Components/Pages/Footer/Footer";
import Header from "./Components/Pages/Header/Header";
import News from "./Components/Pages/News/News";


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