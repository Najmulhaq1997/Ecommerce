import PersanalServiceComponents from "./PersanalServiceComponents";
import PropTypes from "prop-types";
import "./RetailCompon.css";

const RetailCompon = ({ className = "" }) => {
  return (
    <section className={`clothing-stores-parent ${className}`}>
      <PersanalServiceComponents
        accountants="Clothing Stores"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Shoe Stores"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Jewelry Stores"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Bookstores"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Electronics Stores"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Furniture Stores"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Grocery Stores"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Mechanical Parts Shops"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="Florists"
        image1="/image-1@2x.png"
      />
      <PersanalServiceComponents
        accountants="chemical shop"
        image1="/image-1@2x.png"
      />
    </section>
  );
};

RetailCompon.propTypes = {
  className: PropTypes.string,
};

export default RetailCompon;
