
import React, {useEffect,useState} from "react";
import './Slider.css';

const images = [
    'assets/images/Slider/1.jpeg',
    'assets/images/Slider/2.jpeg',
    'assets/images/Slider/3.jpeg',
  ];

const Slider = ()=>{
    const [currentIndex,setCurrentIndex] = useState(0)
    const [isHoverd,setIsHovered]=useState(false);
    useEffect(()=>{
        const interval = setInterval( ()=>{
            if(!isHoverd){
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }
        },5000)
        return ()=>clearInterval(interval)
    },[isHoverd])
    return (
        <section
          className="slider"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
          />
        </section>
      );
    };
    
    export default Slider;