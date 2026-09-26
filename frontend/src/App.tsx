  import { Routes, Route } from "react-router-dom";
  import Landing from "./pages/landingpage";
  import Login from "./pages/login";
  import LoadingPage from "./pages/loading";
  import Information from "./pages/inform";
  import Employee from "./pages/information/Employee";
  import Owner from "./pages/information/owner";
  

  import EmployeeView from "./pages/EmpView";




  export default function App() {
    return (
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route path="/loading" element={<LoadingPage />} />

        <Route path="/information">
          <Route index element={<Information />} />
          <Route path="employee" element={<Employee />} />
          <Route path="owner" element={<Owner />} />
        </Route>

        <Route path="/dashboard" element={<EmployeeView />} />
        
        
      </Routes>
    );
  }