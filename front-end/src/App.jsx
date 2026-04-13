import { Route, Routes } from "react-router-dom";
import Layout from "./Components/layout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Employees from "./Pages/Employee/Employee";


function App() {
  return (
    <>
   <Layout>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/employee" element={<Employees />} />
    </Routes>
   </Layout>
    </>
  )
}

export default App;