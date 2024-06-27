import { memo } from "react";
import MenuelistCom from "./MenuelistCom";
import PropTypes from "prop-types";
import "./List1.css";

const List1 = memo(({ className = "" }) => {
  return (
    <div className={`frame85 ${className}`}>
      <div className="frame86">
        <div className="product-list">
          <MenuelistCom
            component37Position="absolute"
            component37Top="0px"
            component37Left="0px"
          />
        </div>
      </div>
    </div>
  );
});

List1.propTypes = {
  className: PropTypes.string,
};

export default List1;
