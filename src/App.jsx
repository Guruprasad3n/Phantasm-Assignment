import "./App.css";
import Dashboard from "./Rightbar/Dashboard";
import {Routes, Route} from "react-router-dom"
import Products from "./Rightbar/Products";
import Customers from "./Rightbar/Customers";
import MultiChannel from "./Rightbar/MultiChannel";
import Shopping from "./Rightbar/Shopping";
import Marketing from "./Rightbar/Marketing";
import Report from "./Rightbar/Report";
import Vendor from "./Rightbar/Vendor";
import SalseOrder from "./Rightbar/SalseOrder";
import Packages from "./Rightbar/Packages";
import Delivery from "./Rightbar/Delivery";
import CustomerCare from "./Rightbar/CustomerCare";
import Invoice from "./Rightbar/Invoice";

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/customers" element={<Customers/>}/>
      <Route path="/multichannel" element={<MultiChannel/>}/>
      <Route path="/shopping" element={<Shopping/>}/>
      <Route path="/marketing" element={<Marketing/>}/>
      <Route path="/report" element={<Report/>}/>
      <Route path="/vendor" element={<Vendor/>}/>
      <Route path="/salseorder" element={<SalseOrder/>}/>
      <Route path="/packages" element={<Packages/>}/>
      <Route path="/delivery" element={<Delivery/>}/>
      <Route path="/customercare" element={<CustomerCare/>}/>
      <Route path="/invoice" element={<Invoice/>}/>
     </Routes>
    </>
  );
}

export default App;
