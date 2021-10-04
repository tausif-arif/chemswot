import React from "react";
import "../App.css";

const Home = () => {
  return (
    <div className="main_home">
      <div className="section1">
        <h1 className="h1tag">Welcome to IB Chemistry</h1>
        <div className="second_heading">
          <h1 className="h1tag2">Structured Complete Course</h1>
          <h1 className="h1tag2">In Ib Chemistry</h1>
        </div>
        <div className="third_heading">
          <div className="h1tag3">
            Learn from the best having 20+ Years experience
          </div>
        </div>
        <div className="fourth_section">
          <button className="btn">Buy Now</button>
        </div>
        <img className="img1" src="/img1.jpg" alt="images" />
      </div>
      <div className="section2">
        <h1 className="h1sctn2 container">FEATURES</h1>
        <div className="sctn2_2nddiv container">
          <h1 className="firstpara_sctn2">
            Chemswot offers the following main benefits
          </h1>
          <p className="para_sctn2">
            Our Resources will help you achieve your dream Ib diploma score by
            our accurate topic detail capturing
          </p>
        </div>
        <div className="div_sectn2_card container mt-4">
          <div className="diary cards">
            <img className="mt-4" src="/diary.jpg" alt="diary" />
            <h3 className="h3_of_card mt-2 ">Accurate Notes</h3>
            <p className="first_card_para">
              Includes designed Mindmaps and puzzles
            </p>
          </div>
          <div className="ppt cards">
            <div className="pptimg mt-4">
              <img src="/ppt.png" alt="ppt" />
            </div>
            <h3 className="h3_of_card mt-2 text-center">Animated PPT's</h3>
            <p className="first_card_para m-3 ">
              Includes textbook questions and examples
            </p>
          </div>
          <div className="note cards">
            <img className="mt-4" src="/note.jpg" alt="note" />
            <h3 className="h3_of_card mt-2">Topicwise Quiz</h3>
            <p className="first_card_para">
              Includes MCQ Paper 1 type questions
            </p>
          </div>
        </div>
      </div>
      <div className="section3 container-fluid">
        <div className="divblue ">
          <div className="offer">
            <h1 className="offers">OFFERS BY CHEMSWOT</h1>
          </div>
          <div className="sctn3violet">
            
              <div className="monthlyplans">
                <h1 className="monthly_plan">Montly Plan</h1>
                <p className="just500">Get all at just 500</p>
                <button className="monthlyplan">Buy Now</button>
              </div>
              <div className="yearlyplans">
                <h1 className="monthly_plan">Yearly Plan</h1>
                <p className="just500">Get all at just 5000</p>
                <button className="monthlyplan">Buy Now</button>
              </div>

              <div className="reactlogo"><img src="/reactlogo.png" alt="reactlogo"/></div>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
