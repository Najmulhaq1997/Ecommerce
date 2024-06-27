import Header3 from "../components/Header3";
import Ad from "../components/Ad";
import AutomotiveComp from "../components/AutomotiveComp";
import QuickLink4 from "../components/QuickLink4";
import Bottom from "../components/Bottom";
import "./AutomotiveServices.css";

const AutomotiveServices = () => {
  return (
    <div className="automotive-services">
      <Header3 />
      <Ad
        sellingOnlineWithAnEcommeAnimationDirection="unset"
        sellingOnlineWithAnEcommeAlignSelf="stretch"
        sellingOnlineWithAnEcommeWidth="unset"
        sellingOnlineWithAnEcommeBackgroundImage="url('/sellingonlinewithanecommercestore-1@3x.png')"
        sellingOnlineWithAnEcommePosition="relative"
        sellingOnlineWithAnEcommeTop="unset"
        sellingOnlineWithAnEcommeLeft="unset"
      />
      <AutomotiveComp />
      <QuickLink4 />
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

export default AutomotiveServices;
