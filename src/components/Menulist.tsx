import ShopDetailsInMenu from "./ShopDetailsInMenu";
import PropTypes from "prop-types";
import "./Menulist.css";

const Menulist = ({ className = "" }) => {
  return (
    <div className={`frame111 ${className}`}>
      <div className="frame112" />
      <div className="frame113">
        <div className="frame114">
          <img
            className="frame-child43"
            alt=""
            src="/rectangle-1538471@2x.png"
          />
          <div className="frame115" />
        </div>
      </div>
      <ShopDetailsInMenu />
    </div>
  );
};

Menulist.propTypes = {
  className: PropTypes.string,
};

export default Menulist;
