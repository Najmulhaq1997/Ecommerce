import Heder from "../components/Heder";
import Ad from "../components/Ad";
import RetailCompon from "../components/RetailCompon";
import QuickLink3 from "../components/QuickLink3";
import Bottom from "../components/Bottom";
import "./RetailAndShopping.css";

const RetailAndShopping = () => {
  return (
    <div className="retail-and-shopping">
      <Heder
        frameWidth="unset"
        frameOverflow="unset"
        frameAlignSelf="stretch"
        vector="/vector@2x.png"
        vector1="/vector@2x.png"
        image="/image@2x.png"
        image1="/image@2x.png"
        framePosition="unset"
        frameTop="unset"
        frameLeft="unset"
      />
      <Ad
        sellingOnlineWithAnEcommeAnimationDirection="unset"
        sellingOnlineWithAnEcommeAlignSelf="stretch"
        sellingOnlineWithAnEcommeWidth="unset"
        sellingOnlineWithAnEcommeBackgroundImage="url('/sellingonlinewithanecommercestore-1@3x.png')"
        sellingOnlineWithAnEcommePosition="relative"
        sellingOnlineWithAnEcommeTop="unset"
        sellingOnlineWithAnEcommeLeft="unset"
      />
      <RetailCompon />
      <QuickLink3 />
      <Bottom
        containerAlignSelf="stretch"
        containerWidth="unset"
        containerWidth1="490px"
        copyrights200824AllFlex="1"
        linkFlex="1"
        containerWidth2="5.31%"
        containerRight="8.08%"
        containerLeft="86.61%"
        linkFlex1="1"
        containerWidth3="6.45%"
        containerRight1="9.39%"
        containerLeft1="84.16%"
        linkFlex2="1"
        containerPosition="unset"
        containerTop="unset"
        containerLeft2="unset"
        containerHeight="unset"
        containerAlignSelf1="stretch"
        privacyFlex="unset"
        divAlignSelf="unset"
        termsFlex="unset"
        divAlignSelf1="unset"
        infringementFlex="unset"
      />
    </div>
  );
};

export default RetailAndShopping;
