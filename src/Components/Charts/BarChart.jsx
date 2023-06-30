import "./barChart.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  {
    name: "Jan",
    uv: 40,
    pv: 24,
  },
  {
    name: "Feb",
    uv: 30,
    pv: 13,
  },
  {
    name: "Mar",
    uv: 20,
    pv: 98,
  },
  {
    name: "Apr",
    uv: 27,
    pv: 39,
  },
  {
    name: "May",
    uv: 18,
    pv: 48,
  },
  {
    name: "Jun",
    uv: 23,
    pv: 38,
  },
  {
    name: "Jul",
    uv: 34,
    pv: 43,
  },
  {
    name: "Aug",
    uv: 34,
    pv: 43,
  },
  {
    name: "Sep",
    uv: 34,
    pv: 43,
  },
  {
    name: "Oct",
    uv: 34,
    pv: 43,
  },
  {
    name: "Nov",
    uv: 34,
    pv: 43,
  },
  {
    name: "Dec",
    uv: 34,
    pv: 43,
  },
];

function BarChartApp() {
  return (
    <div className="barChartMain">
      <div className="barChartChild1">
        <div>
          <p className="productStatic">Product Statistic</p>
        </div>
        <div>
          <p className="total">Total Customers</p>
          <p className="price">12,345,678</p>
          <p className="total">
            {" "}
            <span style={{ color: "#3CCF95" }}>+23%</span> than last month{" "}
          </p>
        </div>
        <div className="proCirtSmall">
          <div className="barChcircle">
            <div className="barCHinnerCircle"></div>
          </div>
         <div>
          <p  className="monthName"> Last Month</p>
          <p> 123,456</p>
         </div>
        </div>
        <div className="proCirtSmall"  >
          <div className="barChcircle" style={{backgroundColor:"#2F4C8F"}}>
            <div className="barCHinnerCircle"></div>
          </div>
         <div>
          <p className="monthName"> Current Month</p>
          <p> 123,456</p>
         </div>
        </div>
      </div>
      <div className="barChartChild2">
        <div className="rightDigSele">
          <div className="date">December 2021</div>
          <select className="selec" name="" id="" placeholder="Month">
            <option value="">Month</option>
          </select>
        </div>
        <BarChart
          width={700}
          height={300}
          data={data}
          // margin={{
          //   top: 5,
          //   right: 30,
          //   left: 20,
          //   bottom: 5
          // }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pv" fill="#2F4C8F" background={{ fill: "#eee" }} />
          <Bar dataKey="uv" fill="#FC0011" />
        </BarChart>
      </div>
    </div>
  );
}
export default BarChartApp;
