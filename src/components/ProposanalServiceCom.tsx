import { useMemo } from "react";
import HomePageComp from "./HomePageComp";
import PropTypes from "prop-types";
import "./ProposanalServiceCom.css";

const ProposanalServiceCom = ({
  className = "",
  frameSectionWidth,
  frameSectionHeight,
  frameSectionGap,
}) => {
  const frameSectionStyle = useMemo(() => {
    return {
      width: frameSectionWidth,
      height: frameSectionHeight,
      gap: frameSectionGap,
    };
  }, [frameSectionWidth, frameSectionHeight, frameSectionGap]);

  return (
    <section
      className={`hair-salons-parent ${className}`}
      style={frameSectionStyle}
    >
      <HomePageComp
        sportsAndOutdoors="Hair Salons"
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
        sportsAndOutdoors="Beauty Salons"
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
        sportsAndOutdoors="Barber Shops"
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
        sportsAndOutdoors="Nail Salons"
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
        sportsAndOutdoors="Massage Therapists"
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
        sportsAndOutdoors="Personal Trainers"
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
        sportsAndOutdoors="Tattoo Parlors"
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
        sportsAndOutdoors="Dry Cleaning and Laundry Services"
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
        sportsAndOutdoors="Tailors and Alterations"
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
};

ProposanalServiceCom.propTypes = {
  className: PropTypes.string,

  /** Style props */
  frameSectionWidth: PropTypes.any,
  frameSectionHeight: PropTypes.any,
  frameSectionGap: PropTypes.any,
};

export default ProposanalServiceCom;
