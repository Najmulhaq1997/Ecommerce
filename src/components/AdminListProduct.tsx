import { useMemo } from "react";
import PropTypes from "prop-types";
import "./AdminListProduct.css";

const AdminListProduct = ({
  className = "",
  kisspngChowMeinChineseNoo,
  propPosition,
  propTop,
  propLeft,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propPosition, propTop, propLeft]);

  return (
    <div
      className={`kisspng-chow-mein-chinese-nood-parent ${className}`}
      style={frameDiv1Style}
    >
      <img
        className="kisspng-chow-mein-chinese-nood-icon"
        alt=""
        src={kisspngChowMeinChineseNoo}
      />
      <div className="chinese-yakisbo">{`Chinese Yakisbo `}</div>
      <div className="frame-child52" />
    </div>
  );
};

AdminListProduct.propTypes = {
  className: PropTypes.string,
  kisspngChowMeinChineseNoo: PropTypes.string,

  /** Style props */
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default AdminListProduct;
