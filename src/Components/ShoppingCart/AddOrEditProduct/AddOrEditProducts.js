import React,{useRef} from "react";

import "./AddOrEditProducts.css";


const AddOrEditProducts =({Save,removeItem,product})=>{
    const titleRef = useRef();
    const priceRef = useRef();
    const commit = () =>
    {
        let item = {...product};
        item.title = titleRef.current.value;
        item.price = priceRef.current.value;
        Save(item);
    }
    return(
        <section>
                <div>
                  <span>مدل لپتاپ : </span>
                  <input defaultValue={product.title} ref={titleRef} />
                </div>
                <div>
                  <span>قیمت :  </span>
                  <input defaultValue={product.price} ref={priceRef} />

                </div>
                   <div>
              
                <button onClick={()=>commit(product)}>
                  ذخیره
                </button>
                  <button onClick={()=>removeItem(product.id,false)}>
                لغو
                </button>
                
                </div>
            
              
                
               
              </section>
    )
}

export default AddOrEditProducts