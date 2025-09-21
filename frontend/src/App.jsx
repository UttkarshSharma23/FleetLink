import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddVehiclePage from './pages/AddVehiclePage';
import SearchAndBookPage from './pages/SearchAndBookPage';
import NotFoundPage from './pages/NotFoundPage';
import { BookingProvider } from './context/BookingContext'; 
import './App.css';

const App = () => {
  return (
    <Router>
      <BookingProvider> 
        <div className="App">
          <Routes>
            <Route path="/" element={<SearchAndBookPage />} />
            <Route path="/add-vehicle" element={<AddVehiclePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </BookingProvider>
    </Router>
  );
};

export default App;