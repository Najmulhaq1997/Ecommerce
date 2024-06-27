import PersanalServiceComponents from "./PersanalServiceComponents";
import PropTypes from "prop-types";
import "./EDUCom.css";

const EDUCom = ({ className = "" }) => {
  return (
    <section className={`schools-and-colleges-parent ${className}`}>
      <PersanalServiceComponents
        accountants="Schools and Colleges"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Language Schools"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Music Schools"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Dance Schools"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Tutoring Services"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Driving Schools"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Vocational Training"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Art Classes"
        image1="/image-1@2x.png"
      />
    </section>
  );
};

EDUCom.propTypes = {
  className: PropTypes.string,
};

export default EDUCom;
