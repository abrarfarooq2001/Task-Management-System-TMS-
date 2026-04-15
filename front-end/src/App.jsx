import { Route, Routes } from "react-router-dom";
import Layout from "./Components/layout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Employees from "./Pages/Employee/Employee";
import Department from "./Pages/Deparment/Department";
import EmployeeForm from "./Pages/Employee/Employee-form";


function App() {
  return (
    <>
   <Layout>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/employee" element={<Employees />} />
      <Route path="/department" element={<Department/>} />
      <Route path="/employee-form" element={<EmployeeForm/>} />
    </Routes>
   </Layout>
    </>
  )
}

export default App;