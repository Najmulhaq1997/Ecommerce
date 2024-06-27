import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HomePageComp from "./HomePageComp";
import PropTypes from "prop-types";
import "./HomePageComponents.css";

const HomePageComponents = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFoodAndDiningClick = useCallback(() => {
    navigate("/food-and-dining");
  }, [navigate]);

  const onHealthAndWellnessClick = useCallback(() => {
    navigate("/health-and-wellness");
  }, [navigate]);

  const onHomeServicesClick = useCallback(() => {
    navigate("/home-services");
  }, [navigate]);

  const onPersonalServicesClick = useCallback(() => {
    navigate("/personal-services");
  }, [navigate]);

  const onProfessionalServicesClick = useCallback(() => {
    navigate("/professional-services");
  }, [navigate]);

  const onRetailAndShoppingClick = useCallback(() => {
    navigate("/retail-and-shopping");
  }, [navigate]);

  const onAutomotiveServicesClick = useCallback(() => {
    navigate("/automotive-services");
  }, [navigate]);

  const onEducationAndTrainingClick = useCallback(() => {
    navigate("/education-and-training");
  }, [navigate]);

  const onEntertainmentAndRecreationClick = useCallback(() => {
    navigate("/entertainment-and-recreation");
  }, [navigate]);

  const onTravelAndAccommodationClick = useCallback(() => {
    navigate("/travel-and-accommodation");
  }, [navigate]);

  const onRealEstateClick = useCallback(() => {
    navigate("/real-estate");
  }, [navigate]);

  const onEventsAndWeddingsClick = useCallback(() => {
    navigate("/events-and-weddings");
  }, [navigate]);

  const onPetsAndAnimalsClick = useCallback(() => {
    navigate("/pets-and-animals");
  }, [navigate]);

  const onTechnologyAndElectronicsClick = useCallback(() => {
    navigate("/technology-and-electronics");
  }, [navigate]);

  return (
    <section className={`food-and-dining-parent ${className}`}>
      <HomePageComp
        sportsAndOutdoors="Food and Dining"
        image1="/image-1@2x.png"
        propFlex="unset"
        propBorder="none"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        onFoodAndDiningClick={onFoodAndDiningClick}
        sportsAndOutdoorsMargin="unset"
        sportsAndOutdoorsFontWeight="unset"
        sportsAndOutdoorsOpacity="unset"
      />
      <HomePageComp
        sportsAndOutdoors="Health and Wellness"
        image1="/image-1@2x.png"
        propFlex="unset"
        propBorder="none"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        onFoodAndDiningClick={onHealthAndWellnessClick}
        sportsAndOutdoorsMargin="unset"
        sportsAndOutdoorsFontWeight="unset"
        sportsAndOutdoorsOpacity="unset"
      />
      <HomePageComp
        sportsAndOutdoors="Home Services"
        image1="/image-1@2x.png"
        propFlex="unset"
        propBorder="none"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        onFoodAndDiningClick={onHomeServicesClick}
        sportsAndOutdoorsMargin="unset"
        sportsAndOutdoorsFontWeight="unset"
        sportsAndOutdoorsOpacity="unset"
      />
      <HomePageComp
        sportsAndOutdoors="Personal Services"
        image1="/image-1@2x.png"
        propFlex="unset"
        propBorder="none"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        onFoodAndDiningClick={onPersonalServicesClick}
        sportsAndOutdoorsMargin="unset"
        sportsAndOutdoorsFontWeight="unset"
        sportsAndOutdoorsOpacity="unset"
      />
      <HomePageComp
        sportsAndOutdoors="Professional Services"
        image1="/image-1@2x.png"
        propFlex="unset"
        propBorder="none"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        onFoodAndDiningClick={onProfessionalServicesClick}
        sportsAndOutdoorsMargin="unset"
        sportsAndOutdoorsFontWeight="unset"
        sportsAndOutdoorsOpacity="unset"
      />
      <HomePageComp
        sportsAndOutdoors="Retail and Shopping"
        image1="/image-1@2x.png"
        propFlex="unset"
        propBorder="none"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        onFoodAndDiningClick={onRetailAndShoppingClick}
        sportsAndOutdoorsMargin="unset"
        sportsAndOutdoorsFontWeight="unset"
        sportsAndOutdoorsOpacity="unset"
      />
      <HomePageComp
        sportsAndOutdoors="Automotive Services"
        image1="/image-1@2x.png"
        propFlex="unset"
        propBorder="none"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        onFoodAndDiningClick={onAutomotiveServicesClick}
        sportsAndOutdoorsMargin="unset"
        sportsAndOutdoorsFontWeight="unset"
        sportsAndOutdoorsOpacity="unset"
      />
      <HomePageComp
        sportsAndOutdoors="Education and Training"
        image1="/image-1@2x.png"
        propFlex="unset"
        propBorder="none"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        onFoodAndDiningClick={onEducationAndTrainingClick}
        sportsAndOutdoorsMargin="unset"
        sportsAndOutdoorsFontWeight="unset"
        sportsAndOutdoorsOpacity="unset"
      />
      <HomePageComp
        sportsAndOutdoors="Entertainment and Recreation"
        image1="/image-1@2x.png"
        propFlex="unset"
        propBorder="none"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        onFoodAndDiningClick={onEntertainmentAndRecreationClick}
        sportsAndOutdoorsMargin="unset"
        sportsAndOutdoorsFontWeight="unset"
        sportsAndOutdoorsOpacity="unset"
      />
      <HomePageComp
        sportsAndOutdoors="Travel and Accommodation"
        image1="/image-1@2x.png"
        propFlex="unset"
        propBorder="none"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        onFoodAndDiningClick={onTravelAndAccommodationClick}
        sportsAndOutdoorsMargin="unset"
        sportsAndOutdoorsFontWeight="unset"
        sportsAndOutdoorsOpacity="unset"
      />
      <HomePageComp
        sportsAndOutdoors="Real Estate"
        image1="/image-1@2x.png"
        propFlex="unset"
        propBorder="none"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        onFoodAndDiningClick={onRealEstateClick}
        sportsAndOutdoorsMargin="unset"
        sportsAndOutdoorsFontWeight="unset"
        sportsAndOutdoorsOpacity="unset"
      />
      <HomePageComp
        sportsAndOutdoors="Events and Weddings"
        image1="/image-1@2x.png"
        propFlex="unset"
        propBorder="none"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        onFoodAndDiningClick={onEventsAndWeddingsClick}
        sportsAndOutdoorsMargin="unset"
        sportsAndOutdoorsFontWeight="unset"
        sportsAndOutdoorsOpacity="unset"
      />
      <HomePageComp
        sportsAndOutdoors="Pets and Animals"
        image1="/image-1@2x.png"
        propFlex="unset"
        propBorder="none"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        onFoodAndDiningClick={onPetsAndAnimalsClick}
        sportsAndOutdoorsMargin="unset"
        sportsAndOutdoorsFontWeight="unset"
        sportsAndOutdoorsOpacity="unset"
      />
      <HomePageComp
        sportsAndOutdoors="Technology and Electronics"
        image1="/image-1@2x.png"
        propFlex="unset"
        propBorder="none"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        onFoodAndDiningClick={onTechnologyAndElectronicsClick}
        sportsAndOutdoorsMargin="unset"
        sportsAndOutdoorsFontWeight="unset"
        sportsAndOutdoorsOpacity="unset"
      />
      <HomePageComp
        sportsAndOutdoors="Sports and Outdoors"
        image1="/image-1@2x.png"
      />
    </section>
  );
};

HomePageComponents.propTypes = {
  className: PropTypes.string,
};

export default HomePageComponents;
