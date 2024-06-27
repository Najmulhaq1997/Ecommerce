import { useMemo } from "react";
import Lists from "./Lists";
import PropTypes from "prop-types";
import "./List.css";

const List = ({
  className = "",
  propTop,
  propLeft,
  frameOpacity,
  onRectangleButtonClick,
}) => {
  const frameStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      opacity: frameOpacity,
    };
  }, [propTop, propLeft, frameOpacity]);

  return (
    <div className={`frame88 ${className}`} style={frameStyle}>
      <Lists />
    </div>
  );
};

List.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  frameOpacity: PropTypes.any,

  /** Action props */
  onRectangleButtonClick: PropTypes.func,
};

export default List;
