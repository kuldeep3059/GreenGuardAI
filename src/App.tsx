import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Weather from './pages/Weather';
import Soil from './pages/Soil';
import Crop from './pages/Crop';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/soil" element={<Soil />} />
          <Route path="/crop" element={<Crop />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;