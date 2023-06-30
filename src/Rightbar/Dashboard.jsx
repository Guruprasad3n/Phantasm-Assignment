import BarChartApp from "../Components/Charts/BarChart";
import PieChartApp from "../Components/Charts/PieChart";
import Quality from "../Components/Charts/Quality";
import RecentOrder from "../Components/Charts/RecentOrder";
import Layout from "../Components/Layout";
function Dashboard() {
  return (
    <>
      <Layout>
        <div  style={{
              display: "flex",
              flexDirection:"column",
              gap: "15px",
            }} >
          {/* <h1>Dashboard</h1> */}
          <Quality/>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "15px",
            }}
          >
            <PieChartApp />
            <RecentOrder />
          </div>
          <BarChartApp />
        </div>
      </Layout>
    </>
  );
}
export default Dashboard;
