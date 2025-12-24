import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <div className="home-info-bg">
        <h1 className="sm:text-xl sm:leading-snug text-center">
          Hi, I'm
          <span className="font-semibold mx-2">Shriya</span>
          👋
          <br />
          A Software Engineer from Vellore Institute Of Technology, Chennai
        </h1>
      </div>
    );

  if (currentStage === 2) {
    return (
      <div className="home-info-bg">
        <div className="info-box">
          <p className="font-medium sm:text-xl text-center">
            Worked with many companies <br />
            and picked up many skills along the way
          </p>

          <Link to="/about" className="neo-btn mt-4 inline-flex">
            Learn more
            <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
          </Link>
        </div>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="home-info-bg">
        <div className="info-box">
          <p className="font-medium sm:text-xl text-center">
            Interned with 2 companies as a Data Analyst and at IIT as a Research Intern
          </p>

          <Link to="/projects" className="neo-btn mt-4 inline-flex">
            Visit my portfolio
            <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
          </Link>
        </div>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="home-info-bg">
        <div className="info-box">
          <p className="font-medium sm:text-xl text-center">
            Need a project done or looking for a dev? <br />
            I'm just a few keystrokes away
          </p>

          <Link to="/contact" className="neo-btn mt-4 inline-flex">
            Let's talk
            <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
          </Link>
        </div>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
