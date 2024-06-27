import Header2 from "../components/Header2";
import Ad from "../components/Ad";
import HomeServiceComponents from "../components/HomeServiceComponents";
import QuickLink1 from "../components/QuickLink1";
import Bottom from "../components/Bottom";
import "./HomeServices.css";

const HomeServices = () => {
  return (
    <div className="home-services">
      <Header2
        header1Width="unset"
        header1AlignSelf="stretch"
        header1Height="155px"
        header1Width1="1200px"
        header1Flex="1"
        logosvsWidth="unset"
        logosvsHeight="unset"
        logosvsDisplay="flex"
        logosvsFlexDirection="row"
        logosvsGap="3px"
        vector="/vector12@2x.png"
        vectorIconPosition="relative"
        vectorIconHeight="31px"
        vectorIconWidth="76.5px"
        vectorIconTop="unset"
        vectorIconRight="unset"
        vectorIconBottom="unset"
        vectorIconLeft="unset"
        vectorIconOverflow="unset"
        vectorIconMaxHeight="unset"
        vector1="/vector13@2x.png"
        vectorIconPosition1="relative"
        vectorIconHeight1="24px"
        vectorIconWidth1="59.4px"
        vectorIconTop1="unset"
        vectorIconRight1="unset"
        vectorIconBottom1="unset"
        vectorIconLeft1="unset"
        vectorIconOverflow1="unset"
        vectorIconMaxHeight1="unset"
        inputMainAutoSuggestWidth="unset"
        inputMainAutoSuggestAlignSelf="stretch"
        image="/image@2x.png"
        image1="/image@2x.png"
      />
      <Ad sellingOnlineWithAnEcommeAnimationDirection="normal" />
      <HomeServiceComponents />
      <QuickLink1
        frameSectionWidth="unset"
        frameSectionAlignSelf="stretch"
        borderWidth="1205px"
        containerWidth="785px"
      />
      <Bottom />
    </div>
  );
};

export default HomeServices;
