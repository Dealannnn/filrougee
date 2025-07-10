import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'; // nouveau
import LoginAdmin from './pages/admin/LoginAdmin';
import AdminDashboard from './pages/admin/AdminDashboard';
import ProtectedRoute from './pages/admin/ProtectedRoute';


function App() {
  return (
    <Router>
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<Home />} />

        {/* Admin login */}
        <Route path="/admin/login" element={<LoginAdmin />} />

        {/* Dashboard admin (protégé par une route sécurisée) */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
