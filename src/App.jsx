import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import AdminDashboard from "./AdminDashboard";
import AdminApplicationManagement from "./AdminApplicationManagement";
import AdminJobManagement from "./AdminJobManagement";
import AdminMessageManagement from "./AdminMessageManagement";
import AdminReportsAnalytics from "./AdminReportsAnalytics";
import AdminUserManagement from "./AdminUserManagement";
import CompanyDashboard from "./CompanyDashboard";
import CompanyApplicationManagement from "./CompanyApplicationManagement";
import CompanyEngineerSearch from "./CompanyEngineerSearch";
import CompanyJobManagement from "./CompanyJobManagement";
import CompanyMessageManagement from "./CompanyMessageManagement";
import UserDashboard from "./UserDashboard";
import UserCoachingSection from "./UserCoachingSection";
import UserJobSearch from "./UserJobSearch";
import UserProfileManagement from "./UserProfileManagement";
import UserApplicationManagement from "./UserApplicationManagement";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/AdminDashboard" element={<AdminDashboard />} />

      <Route path="/AdminUserManagement" element={<AdminUserManagement />} />
      <Route path="/AdminJobManagement" element={<AdminJobManagement />} />
      <Route
        path="/AdminApplicationManagement"
        element={<AdminApplicationManagement />}
      />
      <Route
        path="/AdminMessageManagement"
        element={<AdminMessageManagement />}
      />
      <Route
        path="/AdminReportsAnalytics"
        element={<AdminReportsAnalytics />}
      />
      <Route path="/CompanyDashboard" element={<CompanyDashboard />} />
      <Route
        path="/CompanyApplicationManagement"
        element={<CompanyApplicationManagement />}
      />
      <Route
        path="/CompanyEngineerSearch"
        element={<CompanyEngineerSearch />}
      />
      <Route path="/CompanyJobManagement" element={<CompanyJobManagement />} />
      <Route
        path="/CompanyMessageManagement"
        element={<CompanyMessageManagement />}
      />

      <Route path="/UserDashboard" element={<UserDashboard />} />
      <Route
        path="/UserApplicationManagement"
        element={<UserApplicationManagement />}
      />
      <Route path="/UserCoachingSection" element={<UserCoachingSection />} />
      <Route path="/UserJobSearch" element={<UserJobSearch />} />
      <Route
        path="/UserProfileManagement"
        element={<UserProfileManagement />}
      />
    </Routes>
  );
};

export default App;
