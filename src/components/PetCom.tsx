import PersanalServiceComponents from "./PersanalServiceComponents";
import PropTypes from "prop-types";
import "./PetCom.css";

const PetCom = ({ className = "" }) => {
  return (
    <section className={`veterinarians-group ${className}`}>
      <PersanalServiceComponents
        accountants="Veterinarians"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Pet Groomers"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Pet Boarding"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Pet Training"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Pet Sitting Services"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Animal Shelters"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Pet Stores"
        image1="/image-1@2x.png"
      />
    </section>
  );
};

PetCom.propTypes = {
  className: PropTypes.string,
};

export default PetCom;
