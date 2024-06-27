import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./ProductMenu.css";

const ProductMenu = ({ className = "", onComponentClick }) => {
  const navigate = useNavigate();

  const onComponentClick1 = useCallback(() => {
    navigate("/restaurants-menu-full-view");
  }, [navigate]);

  return (
    <button className={`component-2 ${className}`} onClick={onComponentClick}>
      <div className="component-2-child" />
      <img
        className="ses-chicken-biryani-recipe-736-icon1"
        alt=""
        src="/seschickenbiryanirecipe7367850heroaed211926bb0e4ca1be510695c15ce111-1@2x.png"
      />
      <h3 className="product-name1">{`Product Name `}</h3>
      <div className="rs-900001">RS 90000</div>
    </button>
  );
};

ProductMenu.propTypes = {
  className: PropTypes.string,

  /** Action props */
  onComponentClick: PropTypes.func,
};

export default ProductMenu;
