import { useState } from "react";
import data from "../data";

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];


const checkNumber = (number) => {
  if(number> data.length - 1){
    return 0
  }
  if (number < 0) {
    return people.length - 1;
  }
  return number
}


  const handleNext = () => {
    // return index < data.length - 1 ? setIndex(index + 1) : setIndex(0);

    setIndex((index)=>{
      let newIndex = index +1
      return checkNumber(newIndex)
    })
  };

  const handlePrev = () => {
    // return index === 0 ? setIndex(data.length - 1) : setIndex(index - 1);

    setIndex((index)=>{
      let newIndex = index - 1
      return checkNumber(newIndex)
    })

  };

  const handleRandom = () => {
    let rndmNum = Math.floor(Math.random() * data.length);
    
    // if(rndmNum===data.length-1){
    //   rndmNum = 0
    // }
    // if(rndmNum === 0){
    //   rndmNum = index +1
    // }
    if (rndmNum === index) {
      rndmNum = index +1
     } 
    setIndex(checkNumber(rndmNum));
  };

  return (
    <div className="review">
      <div className="img-div">
        <img src={image} alt={name} width="300px" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div className="button-container">
        <button className="prev-btn" onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={handleRandom}>
        Suprise me
      </button>
    </div>
  );
};

export default Review;
