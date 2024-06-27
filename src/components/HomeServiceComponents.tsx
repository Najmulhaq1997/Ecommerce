import { memo } from "react";
import HomePageComp from "./HomePageComp";
import PropTypes from "prop-types";
import "./HomeServiceComponents.css";

const HomeServiceComponents = memo(({ className = "" }) => {
  return (
    <section className={`plumbers-parent ${className}`}>
      <HomePageComp
        sportsAndOutdoors="Plumbers"
        image1="/image-1@2x.png"
        propFlex="unset"
        propBorder="none"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        sportsAndOutdoorsMargin="0"
        sportsAndOutdoorsFontWeight="400"
        sportsAndOutdoorsOpacity="unset"
      />
      <HomePageComp
        sportsAndOutdoors="Electricians"
        image1="/image-1@2x.png"
        propFlex="unset"
        propBorder="none"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        sportsAndOutdoorsMargin="0"
        sportsAndOutdoorsFontWeight="400"
        sportsAndOutdoorsOpacity="unset"
      />
      <HomePageComp
        sportsAndOutdoors="HVAC Services"
        image1="/image-1@2x.png"
        propFlex="unset"
        propBorder="none"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        sportsAndOutdoorsMargin="0"
        sportsAndOutdoorsFontWeight="400"
        sportsAndOutdoorsOpacity="unset"
      />
      <HomePageComp
        sportsAndOutdoors="Home Cleaning Services"
        image1="/image-1@2x.png"
        propFlex="unset"
        propBorder="none"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        sportsAndOutdoorsMargin="0"
        sportsAndOutdoorsFontWeight="400"
        sportsAndOutdoorsOpacity="unset"
      />
      <HomePageComp
        sportsAndOutdoors="Pest Control"
        image1="/image-1@2x.png"
        propFlex="unset"
        propBorder="none"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        sportsAndOutdoorsMargin="0"
        sportsAndOutdoorsFontWeight="400"
        sportsAndOutdoorsOpacity="unset"
      />
      <HomePageComp
        sportsAndOutdoors="Landscaping and Gardening"
        image1="/image-1@2x.png"
        propFlex="unset"
        propBorder="none"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        sportsAndOutdoorsMargin="0"
        sportsAndOutdoorsFontWeight="400"
        sportsAndOutdoorsOpacity="unset"
      />
      <HomePageComp
        sportsAndOutdoors="Home Repair and Maintenance"
        image1="/image-1@2x.png"
        propFlex="unset"
        propBorder="none"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        sportsAndOutdoorsMargin="0"
        sportsAndOutdoorsFontWeight="400"
        sportsAndOutdoorsOpacity="unset"
      />
      <HomePageComp
        sportsAndOutdoors="Locksmiths"
        image1="/image-1@2x.png"
        propFlex="unset"
        propBorder="none"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        sportsAndOutdoorsMargin="0"
        sportsAndOutdoorsFontWeight="400"
        sportsAndOutdoorsOpacity="unset"
      />
      <HomePageComp
        sportsAndOutdoors="Interior Designers"
        image1="/image-1@2x.png"
        propFlex="unset"
        propBorder="none"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        sportsAndOutdoorsMargin="0"
        sportsAndOutdoorsFontWeight="400"
        sportsAndOutdoorsOpacity="unset"
      />
      <HomePageComp
        sportsAndOutdoors="Moving Services"
        image1="/image-1@2x.png"
        propFlex="unset"
        propBorder="none"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        sportsAndOutdoorsMargin="0"
        sportsAndOutdoorsFontWeight="400"
        sportsAndOutdoorsOpacity="unset"
      />
    </section>
  );
});

HomeServiceComponents.propTypes = {
  className: PropTypes.string,
};

export default HomeServiceComponents;
