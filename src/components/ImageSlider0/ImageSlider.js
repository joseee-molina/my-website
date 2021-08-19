import React, {useState, useEffect, useRef} from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import {SliderData} from './SliderData'


const ImageSlider = () => {
    const [current, setCurrent] = useState(0);
    const length = SliderData.length ;
    const intervalslideshow = useRef(null);
    const nextSlide = () => {
        setCurrent(current === length-1 ? 0 : current+1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current- 1)
    }
    var ciclo;
    function StartCiclo() {
        ciclo = setInterval(() => {
        nextSlide();
    }, 3000);
    }
    
    StartCiclo();
    clearInterval(ciclo)
    

    
            
    useEffect(() => {
        /**intervalslideshow.current = setInterval(() => {
            nextSlide();
        }, 3000);**/
        /**if(SliderData.current){
            SliderData.current.addEventListener('mouseenter', () => {
                clearInterval(intervalslideshow);
            });
        }**/
        
        /**if(SliderData.current){
            SliderData.current.addEventListener('mouseleave', () => {
                intervalslideshow.current = setInterval(() => {
                nextSlide();
            }, 3000);
            });
        }**/
    }, []);

    if(!Array.isArray(SliderData) || SliderData.length <=0){
        return null
    }

    

    return (
        <section className = "slider" >
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>

            {SliderData.map((slide, index) => {
                return (
                    <div className={index=== current ? 'slide active' : 'slide'} key={index} >
                        {index===current && (
                          <img src={slide.image} alt="img" className='image'/>
                        )}
                    </div>
                );
            })}

        </section>

    )
}

export default ImageSlider;
