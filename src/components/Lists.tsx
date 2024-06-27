import { memo } from "react";
import MenueList from "./MenueList";
import PropTypes from "prop-types";
import "./Lists.css";

const Lists = memo(({ className = "" }) => {
  return (
    <div className={`frame87 ${className}`}>
      <div className="product-list1">
        <MenueList />
      </div>
    </div>
  );
});

Lists.propTypes = {
  className: PropTypes.string,
};

export default Lists;
