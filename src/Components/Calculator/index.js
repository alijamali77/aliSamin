import React,{useRef,useState} from "react";
import './Calculator.css'

const Calculator = () =>{
   const numARef = useRef();
   const numBRef = useRef();
   const [result,setResult] = useState(0)
    const Calcs = (msg)=>{
        let temp = 0
        switch(msg)
        {
            case "+":
                temp = parseInt(numARef.current.value) + parseInt(numBRef.current.value)
            break;
            case "-":
                temp = parseInt(numARef.current.value) - parseInt(numBRef.current.value)
            break;
            case "*":
                temp = parseInt(numARef.current.value) * parseInt(numBRef.current.value)
            break;
            case "/":
                temp = parseInt(numARef.current.value) / parseInt(numBRef.current.value)
            break;
            default:
                temp=0;
            break;
            
        }
        setResult(temp)

     

        }
    const ClearForm = ()=>
    {
        numARef.current.value='';
        numBRef.current.value='';
        
        setResult(0)



    }

      
    
    return(
        <section id="Calculator">
            <section className="Operations">
                <section>
                    <ul>
                        <li>
                            <label>
                                عدد اول : 
                            </label>
                            <input ref={numARef} />
                        </li>
                        <li>
                            <label>
                                عدد دوم : 
                            </label>
                           <input ref={numBRef} />
                        </li>
                    </ul>
                    
                </section>
                <section className="Result"> 
                    <h3>
                        {result}
                    </h3>
                   

                </section>


            </section>

            <section className="Operators">
                    <button onClick={()=>Calcs("+")}>
                        +
                    </button>
                    <button onClick={()=>Calcs("-")}>
                        -
                    </button>
                    <button onClick={()=>Calcs("*")}>
                        *
                    </button>
                    <button onClick={()=>Calcs("/")}>
                        /
                    </button>
                    <button onClick={()=>ClearForm()}>
                        پاک کردن
                    </button>
            </section>
        </section>
    )
}

export default Calculator