import React from "react";
import "./ShowProducts.css";

const ShowProducts =({product,remove,add,selected,editItem})=>{
    return(
         <section>
                <div>
                  <span>مدل لپتاپ : </span>
                  <span>{product.title}</span>
                </div>
                <div>
                  <span>قیمت :  </span>
                  <span>{product.price}</span>
                </div>
                <div>
                {
                
                selected?
                <button onClick={()=>remove(product)}>
                  حذف از سبد خرید
                </button>:
                <span>

                <button onClick={()=>add(product)}>
                  افزودن به سبد خرید
                </button>
            
               
                <button onClick={()=>editItem(product)}>ویرایش</button>
                </span>
                 }
                </div>
              
                
               
              </section>
    )
}
export default ShowProducts