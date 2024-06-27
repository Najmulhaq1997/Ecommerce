import Heder from "../components/Heder";
import Ad from "../components/Ad";
import QuickLink4 from "../components/QuickLink4";
import Bottom from "../components/Bottom";
import HelthAndWellnessComponents from "../components/HelthAndWellnessComponents";
import "./HealthAndWellness.css";

const HealthAndWellness = () => {
  return (
    <div className="health-and-wellness">
      <Heder
        frameWidth="1201px"
        frameOverflow="unset"
        frameAlignSelf="unset"
        vector="/vector@2x.png"
        vector1="/vector@2x.png"
        image="/image@2x.png"
        image1="/image@2x.png"
        framePosition="absolute"
        frameTop="0px"
        frameLeft="0px"
      />
      <Ad
        sellingOnlineWithAnEcommeAnimationDirection="unset"
        sellingOnlineWithAnEcommeAlignSelf="unset"
        sellingOnlineWithAnEcommeWidth="1201px"
        sellingOnlineWithAnEcommeBackgroundImage="url('/sellingonlinewithanecommercestore-16@3x.png')"
        sellingOnlineWithAnEcommePosition="absolute"
        sellingOnlineWithAnEcommeTop="223px"
        sellingOnlineWithAnEcommeLeft="0px"
      />
      <QuickLink4
        frameSectionAlignSelf="unset"
        frameSectionWidth="1200px"
        containerAlignSelf="unset"
        containerWidth="330px"
        listWidth="unset"
        listAlignSelf="stretch"
        frameHeight="33px"
        frameHeight1="33px"
        frameHeight2="33px"
        frameHeight3="33px"
        containerFlex="unset"
        containerWidth1="760px"
        containerAlignSelf1="unset"
        containerWidth2="971px"
        listWidth1="unset"
        listAlignSelf1="stretch"
        frameFlex="unset"
        frameWidth="168.5px"
        frameFlex1="unset"
        frameMarginLeft="unset"
        frameWidth1="172.6px"
        frameSectionPosition="absolute"
        frameSectionTop="1028.2px"
        frameSectionLeft="0px"
      />
      <Bottom
        containerAlignSelf="unset"
        containerWidth="1200px"
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
        containerPosition="absolute"
        containerTop="1448.2px"
        containerLeft2="0px"
        containerHeight="140px"
        containerAlignSelf1="stretch"
        privacyFlex="unset"
        divAlignSelf="unset"
        termsFlex="unset"
        divAlignSelf1="unset"
        infringementFlex="unset"
      />
      <HelthAndWellnessComponents />
    </div>
  );
};

export default HealthAndWellness;
