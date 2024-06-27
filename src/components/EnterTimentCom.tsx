import PersanalServiceComponents from "./PersanalServiceComponents";
import PropTypes from "prop-types";
import "./EnterTimentCom.css";

const EnterTimentCom = ({ className = "" }) => {
  return (
    <section className={`movie-theaters-parent ${className}`}>
      <PersanalServiceComponents
        accountants="Movie Theaters"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Amusement Parks"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Museums and Galleries"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Sports Facilities"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Bowling Alleys"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Gaming Centers"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Event Venues"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Nightclubs"
        image1="/image-1@2x.png"
      />
    </section>
  );
};

EnterTimentCom.propTypes = {
  className: PropTypes.string,
};

export default EnterTimentCom;
