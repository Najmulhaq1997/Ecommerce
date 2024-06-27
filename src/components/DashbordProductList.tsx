import PropTypes from "prop-types";
import "./DashbordProductList.css";

const DashbordProductList = ({
  className = "",
  maskGroup,
  maskGroup1,
  maskGroup2,
  maskGroup3,
  maskGroup4,
}) => {
  return (
    <div className={`frame290 ${className}`}>
      <div className="frame291">
        <div className="frame292">
          <div className="frame-child57" />
        </div>
        <div className="frame293">
          <div className="chinese-yakisbo2">{`Chinese Yakisbo `}</div>
        </div>
      </div>
      <div className="frame294">
        <div className="frame295">
          <div className="frame-child58" />
        </div>
        <div className="frame296">
          <div className="amet-minim-mollit1">{`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. `}</div>
        </div>
      </div>
      <div className="frame297">
        <div className="frame298">
          <div className="wrapper1">
            <div className="div13">4.5</div>
          </div>
        </div>
        <div className="frame299">
          <div className="mask-group-container">
            <img className="mask-group-icon10" alt="" src={maskGroup} />
            <img className="mask-group-icon11" alt="" src={maskGroup1} />
            <img className="mask-group-icon12" alt="" src={maskGroup2} />
            <img className="mask-group-icon13" alt="" src={maskGroup3} />
            <img className="mask-group-icon14" alt="" src={maskGroup4} />
          </div>
        </div>
      </div>
      <div className="frame300">
        <img className="frame-icon5" alt="" src="/frame1.svg" />
        <div className="frame301">
          <div className="frame301">
            <div className="div14">$5.08</div>
          </div>
          <div className="frame303">
            <div className="frame-child59" />
          </div>
        </div>
      </div>
    </div>
  );
};

DashbordProductList.propTypes = {
  className: PropTypes.string,
  maskGroup: PropTypes.string,
  maskGroup1: PropTypes.string,
  maskGroup2: PropTypes.string,
  maskGroup3: PropTypes.string,
  maskGroup4: PropTypes.string,
};

export default DashbordProductList;
