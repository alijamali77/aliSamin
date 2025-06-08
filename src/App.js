import React from "react";
import Slider from "./Components/Pages/slider/Slider";
import Footer from "./Components/Pages/Footer/Footer";
import Header from "./Components/Pages/Header/Header";
import News from "./Components/Pages/News/News";
import Calculator from "./Components/Calculator";
import Product from "./Components/ShoppingCart/Products/Product";


const App = ()=>{
  return(
    <section>
      <Header />
      <main>
         <Slider />
           <Calculator />
        <Product />
         <News />
      </main>
    <Footer/>
    </section>
   
  );
};

export default App