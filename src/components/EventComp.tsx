import PersanalServiceComponents from "./PersanalServiceComponents";
import PropTypes from "prop-types";
import "./EventComp.css";

const EventComp = ({ className = "" }) => {
  return (
    <section className={`event-planners-parent ${className}`}>
      <PersanalServiceComponents
        accountants="Event Planners"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Wedding Planners"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Photographers"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Florists"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="DJs and Bands"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Rental Services (chairs, tents, etc.)"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Caterers"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Venues"
        image1="/image-1@2x.png"
      />
    </section>
  );
};

EventComp.propTypes = {
  className: PropTypes.string,
};

export default EventComp;
