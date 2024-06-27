import PersanalServiceComponents from "./PersanalServiceComponents";
import PropTypes from "prop-types";
import "./AutomotiveComp.css";

const AutomotiveComp = ({ className = "" }) => {
  return (
    <section className={`car-dealerships-parent ${className}`}>
      <PersanalServiceComponents
        accountants="Car Dealerships"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Auto Repair Shops"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Car Washes"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Tire Shops"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Car Rental Services"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Towing Services"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Auto Parts Stores"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Motorcycle Repair"
        image1="/image-1@2x.png"
      />
    </section>
  );
};

AutomotiveComp.propTypes = {
  className: PropTypes.string,
};

export default AutomotiveComp;
