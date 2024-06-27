import { memo, useMemo } from "react";
import PropTypes from "prop-types";
import "./Ad.css";

const Ad = memo(
  ({
    className = "",
    sellingOnlineWithAnEcommeAnimationDirection,
    sellingOnlineWithAnEcommeAlignSelf,
    sellingOnlineWithAnEcommeWidth,
    sellingOnlineWithAnEcommeBackgroundImage,
    sellingOnlineWithAnEcommePosition,
    sellingOnlineWithAnEcommeTop,
    sellingOnlineWithAnEcommeLeft,
  }) => {
    const sellingOnlineWithAnEcommerStyle = useMemo(() => {
      return {
        animationDirection: sellingOnlineWithAnEcommeAnimationDirection,
        alignSelf: sellingOnlineWithAnEcommeAlignSelf,
        width: sellingOnlineWithAnEcommeWidth,
        backgroundImage: sellingOnlineWithAnEcommeBackgroundImage,
        position: sellingOnlineWithAnEcommePosition,
        top: sellingOnlineWithAnEcommeTop,
        left: sellingOnlineWithAnEcommeLeft,
      };
    }, [
      sellingOnlineWithAnEcommeAnimationDirection,
      sellingOnlineWithAnEcommeAlignSelf,
      sellingOnlineWithAnEcommeWidth,
      sellingOnlineWithAnEcommeBackgroundImage,
      sellingOnlineWithAnEcommePosition,
      sellingOnlineWithAnEcommeTop,
      sellingOnlineWithAnEcommeLeft,
    ]);

    return (
      <section
        className={`selling-online-with-an-ecommer ${className}`}
        style={sellingOnlineWithAnEcommerStyle}
      />
    );
  }
);

Ad.propTypes = {
  className: PropTypes.string,

  /** Style props */
  sellingOnlineWithAnEcommeAnimationDirection: PropTypes.any,
  sellingOnlineWithAnEcommeAlignSelf: PropTypes.any,
  sellingOnlineWithAnEcommeWidth: PropTypes.any,
  sellingOnlineWithAnEcommeBackgroundImage: PropTypes.any,
  sellingOnlineWithAnEcommePosition: PropTypes.any,
  sellingOnlineWithAnEcommeTop: PropTypes.any,
  sellingOnlineWithAnEcommeLeft: PropTypes.any,
};

export default Ad;
