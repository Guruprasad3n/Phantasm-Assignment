import BarChartApp from "../Components/Charts/BarChart";
import PieChartApp from "../Components/Charts/PieChart";
import RecentOrder from "../Components/Charts/RecentOrder";
import Layout from "../Components/Layout";

function Products() {
  return (
    <>
      <Layout>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          {/* <h1>Dashboard</h1> */}
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

export default Products;
