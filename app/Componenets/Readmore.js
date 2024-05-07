"use client"
import React, { useState } from "react";


function ReadMoreLess() {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div className="card">
      

      <p className="text-large text-gray-600" style={{fontSize:'22px'}}>
            Hello there! I'm NamitSingh, a passionate web developer with two years of experience in the ever-evolving world of web technologies. Currently, I'm on an exciting journey of continuous learning and exploration, constantly honing my skills and pushing the boundaries of what's possible in web development.

My toolbox includes HTML, CSS 
            </p>
      {isShowMore && (
        <p className="text-large text-gray-600" style={{fontSize:'22px'}}>
          and a deep understanding of modern JavaScript frameworks like React and Next.js. I thrive on the challenges of crafting elegant and efficient solutions, whether it's building responsive layouts, optimizing performance, or integrating RESTful APIs to create dynamic web experiences.

With a keen eye for detail and a love for clean, maintainable code, I strive to deliver exceptional user experiences that not only meet but exceed expectations. Let's collaborate and bring your ideas to life on the web!
        </p>
      )}

      <button onClick={toggleReadMoreLess}>
        {isShowMore ? "⬆️" : " View⬇️More"}
      </button>
    </div>
  );
}

export default ReadMoreLess;