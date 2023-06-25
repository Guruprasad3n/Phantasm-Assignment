import "./recentOrder.css";
function RecentOrder() {
  return (
    <>
      <div className="recentOrderMain">
        <div>
          <p className="heading">Recent Orders</p>
          <p className="smallText">Maiores dicta atque dolorem temporibus </p>
        </div>

        <div className="rightDivLeftRight">
          <div className="">
            <div className="mainVartical">
            <div className="vertical"></div>
            </div>
            <div className="mainCirclePo">
              <div className="rightCircle" style={{ backgroundColor: "red" }}>
                <div className="rightInnerCircle"></div>
              </div>
            </div>
            <div className="mainCirclePo1">
              <div className="rightCircle1" style={{ backgroundColor: "red" }}>
                <div className="rightInnerCircle1"></div>
              </div>
            </div>
            <div className="mainCirclePo2">
              <div className="rightCircle2" style={{ backgroundColor: "red" }}>
                <div className="rightInnerCircle2"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="flexDire">
              <div className="lineH">
                <p className="big">January 2nd, 04:35 AM</p>
                <p className="small">
                  Illum omnis quo illum nisi. Nesciunt est accusamus.{" "}
                </p>
              </div>
              <div className="lineH">
                <p className="big">January 4th, 06:19 AM</p>
                <p className="small">
                  Corrupti unde qui molestiae labore ad adipisci ve{" "}
                </p>
              </div>
              <div className="lineH">
                <p className="big">January 5th, 12:34 AM</p>
                <p className="small">
                  Maiores doloribus qui. Repellat accusamus minima{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default RecentOrder;
