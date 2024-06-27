import HomePageComp from "./HomePageComp";
import PropTypes from "prop-types";
import "./HelthAndWellnessComponents.css";

const HelthAndWellnessComponents = ({ className = "" }) => {
  return (
    <div className={`frame262 ${className}`}>
      <div className="frame263">
        <HomePageComp
          sportsAndOutdoors="Hospitals"
          image1="/image-1@2x.png"
          propFlex="unset"
          propBorder="1px solid #000"
          propPosition="absolute"
          propTop="35px"
          propLeft="20px"
          sportsAndOutdoorsMargin="0"
          sportsAndOutdoorsFontWeight="400"
          sportsAndOutdoorsOpacity="unset"
        />
        <HomePageComp
          sportsAndOutdoors="Clinics"
          image1="/image-11@2x.png"
          propFlex="unset"
          propBorder="1px solid #000"
          propPosition="absolute"
          propTop="35px"
          propLeft="230px"
          sportsAndOutdoorsMargin="0"
          sportsAndOutdoorsFontWeight="400"
          sportsAndOutdoorsOpacity="unset"
        />
        <HomePageComp
          sportsAndOutdoors="Pharmacies"
          image1="/image-12@2x.png"
          propFlex="unset"
          propBorder="1px solid #000"
          propPosition="absolute"
          propTop="35px"
          propLeft="440px"
          sportsAndOutdoorsMargin="0"
          sportsAndOutdoorsFontWeight="400"
          sportsAndOutdoorsOpacity="unset"
        />
        <HomePageComp
          sportsAndOutdoors="Gyms and Fitness Centers"
          image1="/image-13@2x.png"
          propFlex="unset"
          propBorder="1px solid #000"
          propPosition="absolute"
          propTop="35px"
          propLeft="650px"
          sportsAndOutdoorsMargin="0"
          sportsAndOutdoorsFontWeight="400"
          sportsAndOutdoorsOpacity="unset"
        />
        <HomePageComp
          sportsAndOutdoors="Mental Health Services"
          image1="/image-14@2x.png"
          propFlex="unset"
          propBorder="1px solid #000"
          propPosition="absolute"
          propTop="35px"
          propLeft="860px"
          sportsAndOutdoorsMargin="0"
          sportsAndOutdoorsFontWeight="400"
          sportsAndOutdoorsOpacity="unset"
        />
        <HomePageComp
          sportsAndOutdoors="Dentists"
          image1="/image-1@2x.png"
          propFlex="unset"
          propBorder="1px solid #000"
          propPosition="absolute"
          propTop="243.1px"
          propLeft="20px"
          sportsAndOutdoorsMargin="0"
          sportsAndOutdoorsFontWeight="400"
          sportsAndOutdoorsOpacity="unset"
        />
        <HomePageComp
          sportsAndOutdoors="Opticians"
          image1="/image-1@2x.png"
          propFlex="unset"
          propBorder="1px solid #000"
          propPosition="absolute"
          propTop="243.1px"
          propLeft="230px"
          sportsAndOutdoorsMargin="0"
          sportsAndOutdoorsFontWeight="400"
          sportsAndOutdoorsOpacity="unset"
        />
        <HomePageComp
          sportsAndOutdoors="Physiotherapists"
          image1="/image-1@2x.png"
          propFlex="unset"
          propBorder="1px solid #000"
          propPosition="absolute"
          propTop="243.1px"
          propLeft="440px"
          sportsAndOutdoorsMargin="0"
          sportsAndOutdoorsFontWeight="400"
          sportsAndOutdoorsOpacity="unset"
        />
        <HomePageComp
          sportsAndOutdoors="Spas and Wellness Centers"
          image1="/image-1@2x.png"
          propFlex="unset"
          propBorder="1px solid #000"
          propPosition="absolute"
          propTop="243.1px"
          propLeft="650px"
          sportsAndOutdoorsMargin="0"
          sportsAndOutdoorsFontWeight="400"
          sportsAndOutdoorsOpacity="unset"
        />
        <HomePageComp
          sportsAndOutdoors="Chiropractors"
          image1="/image-1@2x.png"
          propFlex="unset"
          propBorder="1px solid #000"
          propPosition="absolute"
          propTop="243.1px"
          propLeft="860px"
          sportsAndOutdoorsMargin="0"
          sportsAndOutdoorsFontWeight="400"
          sportsAndOutdoorsOpacity="unset"
        />
      </div>
    </div>
  );
};

HelthAndWellnessComponents.propTypes = {
  className: PropTypes.string,
};

export default HelthAndWellnessComponents;
