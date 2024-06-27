import PersanalServiceComponents from "./PersanalServiceComponents";
import PropTypes from "prop-types";
import "./RealEstateCom.css";

const RealEstateCom = ({ className = "" }) => {
  return (
    <section className={`residential-real-estate-parent ${className}`}>
      <PersanalServiceComponents
        accountants="Residential Real Estate"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Commercial Real Estate"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Property Management"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Real Estate Agents"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Vacation Rentals"
        image1="/image-1@2x.png"
      />
    </section>
  );
};

RealEstateCom.propTypes = {
  className: PropTypes.string,
};

export default RealEstateCom;
