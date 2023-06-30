import "./quality.css";
import Briefcase from "../../../public/Assets/Briefcase.svg";
import File from "../../../public/Assets/File.svg";
import File1 from "../../../public/Assets/File1.svg";
function Quality() {
  return (
    <>
      <div className="qualityMain">
        <div className="qualityChildMain">
          <div className="qualityChild">
            <div className="border">
              <img src={Briefcase} alt="" />
            </div>
            <div>
              <p className="qQualit">Quality</p>
              <p className="qNub">4932</p>
            </div>
          </div>
          <div className="qualityChild">
            <div className="border">
              <img src={File} alt="" />
            </div>
            <div>
              <p className="qQualit">Shipped</p>
              <p className="qNub">1,032</p>
            </div>
          </div>
          <div className="qualityChild">
            <div className="border">
              <img src={File1} alt="" />
            </div>

            <div>
              <p className="qQualit">Shipped</p>
              <p className="qNub">1,032</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Quality;
