import PersanalServiceComponents from "./PersanalServiceComponents";
import PropTypes from "prop-types";
import "./TechCom.css";

const TechCom = ({ className = "" }) => {
  return (
    <section className={`veterinarians-parent ${className}`}>
      <PersanalServiceComponents
        accountants="Computer Repair"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Mobile Phone Repair"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Electronic Stores"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Home Automation Services"
        image1="/image-1@2x.png"
      />
    </section>
  );
};

TechCom.propTypes = {
  className: PropTypes.string,
};

export default TechCom;
