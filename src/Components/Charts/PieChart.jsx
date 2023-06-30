import "./pieChart.css";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Group A", value: 300 },
  { name: "Group B", value: 55 },
];
const COLORS = ["#2F4C8F", "#FC0011"];
function PieChartApp() {
  return (
    <>
      <div className="pieChartMain">
        <div className="pieChild">
          <p className="pieHead" style={{ marginBottom: "2.5rem" }}>
            Product Details
          </p>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "",
              gap: "1rem",
            }}
          >
            <div className="headCircle">
              <div className="circle">
                <div className="innerCircle"></div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "150%",
                }}
              >
                <p className="paraText">Low Stock Items</p>
                <p className="paraNumb">25</p>
              </div>
            </div>
            <div className="headCircle">
              <div className="circle" style={{ backgroundColor: "red" }}>
                <div className="innerCircle"></div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "150%",
                }}
              >
                <p className="paraText">All Item Groups</p>
                <p className="paraNumb">4408</p>
              </div>
            </div>
            <div className="headCircle">
              <div className="circle">
                <div className="innerCircle"></div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",

                  width: "150%",
                }}
              >
                <p className="paraText">Smok</p>
                <p className="paraNumb">560</p>
              </div>
            </div>
            <div className="headCircle">
              <div className="circle" style={{ backgroundColor: "red" }}>
                <div className="innerCircle"></div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "150%",
                }}
              >
                <p className="paraText">E-Liquids</p>
                <p className="paraNumb">1000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pieChild1">
          <p className="pieHead">Active Items</p>
          <PieChart width={400} height={400}>
            <Pie
              className="color"
              data={data}
              cx={120}
              cy={100}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </>
  );
}

export default PieChartApp;
