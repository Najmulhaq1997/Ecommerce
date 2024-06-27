import TravelAndAccoComp from "./TravelAndAccoComp";
import PropTypes from "prop-types";
import "./TravelCom.css";

const TravelCom = ({ className = "" }) => {
  return (
    <section className={`hotels-parent ${className}`}>
      <TravelAndAccoComp hotels="Hotels" image1="/image-1@2x.png" />
      <TravelAndAccoComp hotels="Bed and Breakfasts" image1="/image-1@2x.png" />
      <TravelAndAccoComp hotels="Hostels" image1="/image-1@2x.png" />
      <TravelAndAccoComp hotels="Tour Operators" image1="/image-1@2x.png" />
      <TravelAndAccoComp hotels="Train Stations" image1="/image-1@2x.png" />
      <TravelAndAccoComp hotels="Travel Agencies" image1="/image-1@2x.png" />
    </section>
  );
};

TravelCom.propTypes = {
  className: PropTypes.string,
};

export default TravelCom;
