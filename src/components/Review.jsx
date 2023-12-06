import { useState } from "react";
import  data  from   "../data";

import  { FaChevronLeft , FaChevronRight , FaQuoteRight } from  "react-icons/fa";

const Review = () => {

    const [index,setIndex] = useState(0)
    const {name,job,image,text} = data[index]

const handleNext = () =>{

index < 4 ? setIndex(index + 1) : setIndex(0)   ;

}

const handlePrev = () =>{

    index === 0  ?  setIndex(5)  : setIndex(index - 1);
}

  return (
    <div className="review">
        <div>
            <img src={image} alt={name}  width="300px"/>
            <span className="quote-icon">
                <FaQuoteRight/>

            </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>

        <div className="button-container">
            <button className="prev-btn" onClick={handlePrev}>
                <FaChevronLeft/>
            </button>
            <button className="next-btn" onClick={handleNext}>
                <FaChevronRight/>
            </button>
           
        </div>
        <button className="random-btn">Suprise me</button>
    </div>
  )
}

export default Review;