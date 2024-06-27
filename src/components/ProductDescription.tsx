import PropTypes from "prop-types";
import "./ProductDescription.css";

const ProductDescription = ({ className = "" }) => {
  return (
    <section className={`frame126 ${className}`}>
      <div className="frame127">
        <h2 className="briyane-appears-to-container">
          <p className="briyane-appears-to">
            Briyane" appears to be a variant spelling of "biryani," a popular
            and flavorful mixed rice dish originating from the Indian
            subcontinent. Biryani is known for its rich aroma, vibrant colors,
            and complex flavors, making it a beloved dish in many South Asian
            and Middle Eastern cuisines. Here are some key characteristics of
            biryani:
          </p>
          <p className="briyane-appears-to">Ingredients</p>
          <ol className="rice-typically-long-grain-ba">
            <li className="rice-typically-long-grain">
              Rice: Typically, long-grain basmati rice is used, which is known
              for its fragrance and fluffy texture.
            </li>
            <li className="rice-typically-long-grain">
              Meat: Commonly includes chicken, beef, lamb, goat, or seafood.
              However, vegetarian versions with paneer or vegetables are also
              popular.
            </li>
            <li className="rice-typically-long-grain">
              Spices and Herbs: A blend of spices such as cumin, cloves,
              cardamom, cinnamon, bay leaves, and star anise. Fresh herbs like
              mint and cilantro are often added.
            </li>
            <li className="rice-typically-long-grain">
              Yogurt and Ghee: Yogurt is used for marination, adding tenderness
              and flavor to the meat. Ghee (clarified butter) adds richness to
              the dish.
            </li>
            <li className="rice-typically-long-grain">
              Saffron: This precious spice is usually soaked in milk and
              sprinkled over the rice, giving it a golden hue and unique flavor.
            </li>
            <li>
              Aromatics: Onions, garlic, and ginger are commonly used, often
              fried until caramelized for added depth of flavor.
            </li>
          </ol>
        </h2>
      </div>
      <div className="frame128">
        <div className="frame129">
          <div className="rs-90001">RS 9000</div>
        </div>
        <div className="frame130">
          <div className="frame-child45" />
          <div className="frame131">
            <div className="get-directions-frame">
              <h2 className="get-directions2" direction>
                Get Directions
              </h2>
            </div>
            <div className="rectangle-parent25">
              <input
                className="rectangle-input3"
                readOnly={true}
                type="checkbox"
                icn
              />
              <img className="group-child17" alt="" src="/vector-1@2x.png" />
            </div>
          </div>
          <button className="frame-child46" />
          <div className="frame132">
            <div className="frame-child47" />
          </div>
          <div className="frame133">
            <img className="image-4-icon2" alt="" src="/image-4@2x.png" />
          </div>
          <button className="frame134">
            <h2 className="chat4">Chat</h2>
          </button>
          <div className="frame135">
            <div className="frame-parent29">
              <img className="frame-icon1" alt="" src="/frame@2x.png" />
              <div className="frame136">
                <h1 className="baticalo-sri-lanka2">Baticalo, Sri Lanka.</h1>
              </div>
            </div>
          </div>
          <div className="frame137">
            <div className="frame-parent30">
              <button className="frame138" />
              <div className="frame139">
                <div className="line-mdphone-call2" />
              </div>
              <img className="frame-icon2" alt="" src="/frame@2x.png" />
              <div className="div10">094 700000000</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ProductDescription.propTypes = {
  className: PropTypes.string,
};

export default ProductDescription;
