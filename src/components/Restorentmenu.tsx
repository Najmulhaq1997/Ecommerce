import Heder from "./Heder";
import Menulist from "./Menulist";
import PropTypes from "prop-types";
import "./Restorentmenu.css";

const Restorentmenu = ({ className = "" }) => {
  return (
    <section className={`frame116 ${className}`}>
      <Heder
        vector="/vector@2x.png"
        vector1="/vector@2x.png"
        image="/image@2x.png"
        image1="/image@2x.png"
      />
      <Menulist />
    </section>
  );
};

Restorentmenu.propTypes = {
  className: PropTypes.string,
};

export default Restorentmenu;
