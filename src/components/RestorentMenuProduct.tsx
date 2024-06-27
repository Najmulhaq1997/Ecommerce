import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProductMenu from "./ProductMenu";
import PropTypes from "prop-types";
import "./RestorentMenuProduct.css";

const RestorentMenuProduct = ({ className = "" }) => {
  const navigate = useNavigate();

  const onComponentClick = useCallback(() => {
    navigate("/restaurants-menu-full-view");
  }, [navigate]);

  return (
    <section className={`frame117 ${className}`} menu>
      <div className="frame-parent28">
        <div className="frame118">
          <ProductMenu onComponentClick={onComponentClick} />
          <ProductMenu />
          <ProductMenu />
        </div>
        <div className="frame118">
          <ProductMenu />
          <ProductMenu />
          <ProductMenu />
        </div>
        <div className="frame118">
          <ProductMenu />
          <ProductMenu />
          <ProductMenu />
        </div>
        <div className="frame118">
          <ProductMenu />
          <ProductMenu />
          <ProductMenu />
        </div>
      </div>
    </section>
  );
};

RestorentMenuProduct.propTypes = {
  className: PropTypes.string,
};

export default RestorentMenuProduct;
