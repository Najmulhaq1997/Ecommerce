import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import "./MenueList.css";

const MenueList = ({ className = "", onRectangleButtonClick }) => {
  return (
    <div className={`component-371 ${className}`}>
      <button className="component-37-inner" />
      <img
        className="component-37-child1"
        alt=""
        src="/rectangle-153842@2x.png"
      />
      <h1 className="hajiyar-hottel1">Hajiyar Hottel</h1>
      <Slider className="group-slider" width="203.9px" colorScheme="teal">
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <div className="rectangle-parent21">
        <div className="group-child11" />
        <div className="div7">4.5</div>
        <div className="rating1">500 Rating</div>
      </div>
      <div className="image-2-group">
        <img className="image-2-icon1" alt="" src="/image-2@2x.png" />
        <h1 className="baticalo-sri-lanka1">Baticalo, Sri Lanka.</h1>
      </div>
      <div className="people-recently-enquired-group">
        <div className="people-recently-enquired1">
          115 People Recently Enquired
        </div>
        <img className="image-5-icon1" alt="" src="/image-5@2x.png" />
      </div>
      <button className="image-6" />
      <div className="rectangle-parent22">
        <button className="group-child12" onClick={onRectangleButtonClick} />
        <button className="group-child13" />
        <img className="image-4-icon1" alt="" src="/image-4@2x.png" />
        <h2 className="chat2">Chat</h2>
        <button className="group-child14" />
        <div className="div8">094 700000000</div>
        <h2 className="menu1">Menu</h2>
        <div className="line-mdphone-call1" />
        <img className="group-icon2" alt="" src="/group@2x.png" />
      </div>
    </div>
  );
};

MenueList.propTypes = {
  className: PropTypes.string,

  /** Action props */
  onRectangleButtonClick: PropTypes.func,
};

export default MenueList;
