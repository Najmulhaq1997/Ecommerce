import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HomePageComp from "./HomePageComp";
import CateringServices from "./CateringServices";
import PropTypes from "prop-types";
import "./FoodDiningComponents.css";

const FoodDiningComponents = ({ className = "" }) => {
  const navigate = useNavigate();

  const onRestaurantsClick = useCallback(() => {
    navigate("/restaurants");
  }, [navigate]);

  return (
    <section className={`restaurants-parent ${className}`}>
      <HomePageComp
        sportsAndOutdoors="Restaurants"
        image1="/image-1@2x.png"
        propFlex="1"
        propBorder="none"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        onFoodAndDiningClick={onRestaurantsClick}
        sportsAndOutdoorsMargin="unset"
        sportsAndOutdoorsFontWeight="unset"
        sportsAndOutdoorsOpacity="unset"
      />
      <HomePageComp
        sportsAndOutdoors="Cafes"
        image1="/image-1@2x.png"
        propFlex="1"
        propBorder="none"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        sportsAndOutdoorsMargin="unset"
        sportsAndOutdoorsFontWeight="unset"
        sportsAndOutdoorsOpacity="unset"
      />
      <HomePageComp
        sportsAndOutdoors="Bakeries"
        image1="/image-1@2x.png"
        propFlex="1"
        propBorder="none"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        sportsAndOutdoorsMargin="unset"
        sportsAndOutdoorsFontWeight="unset"
        sportsAndOutdoorsOpacity="unset"
      />
      <CateringServices />
      <HomePageComp
        sportsAndOutdoors="Food Trucks"
        image1="/image-1@2x.png"
        propFlex="1"
        propBorder="none"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        sportsAndOutdoorsMargin="unset"
        sportsAndOutdoorsFontWeight="unset"
        sportsAndOutdoorsOpacity="unset"
      />
      <HomePageComp
        sportsAndOutdoors="Fast Food"
        image1="/image-1@2x.png"
        propFlex="1"
        propBorder="none"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        sportsAndOutdoorsMargin="unset"
        sportsAndOutdoorsFontWeight="unset"
        sportsAndOutdoorsOpacity="unset"
      />
    </section>
  );
};

FoodDiningComponents.propTypes = {
  className: PropTypes.string,
};

export default FoodDiningComponents;
