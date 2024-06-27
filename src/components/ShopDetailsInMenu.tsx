import ShopMenueDetailsInMenu from "./ShopMenueDetailsInMenu";
import PropTypes from "prop-types";
import "./ShopDetailsInMenu.css";

const ShopDetailsInMenu = ({ className = "" }) => {
  return (
    <div className={`frame-inner3 ${className}`}>
      <ShopMenueDetailsInMenu />
    </div>
  );
};

ShopDetailsInMenu.propTypes = {
  className: PropTypes.string,
};

export default ShopDetailsInMenu;
