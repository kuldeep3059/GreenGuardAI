import React from 'react';
import { NavLink } from 'react-router-dom';
import { Flower2 as Plant, Cloud as CloudSun, Sprout } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink 
            to="/" 
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
          >
            <Plant className="h-8 w-8" />
            <span className="font-bold text-xl tracking-tight">CropHealth</span>
          </NavLink>
          
          <div className="flex space-x-1">
            <NavLink
              to="/weather"
              className={({ isActive }) =>
                `flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'bg-white text-green-700' 
                    : 'hover:bg-green-500 hover:bg-opacity-50'
                }`
              }
            >
              <CloudSun className="h-5 w-5" />
              <span>Weather</span>
            </NavLink>
            
            <NavLink
              to="/soil"
              className={({ isActive }) =>
                `flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'bg-white text-green-700' 
                    : 'hover:bg-green-500 hover:bg-opacity-50'
                }`
              }
            >
              <Sprout className="h-5 w-5" />
              <span>Soil</span>
            </NavLink>
            
            <NavLink
              to="/crop"
              className={({ isActive }) =>
                `flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'bg-white text-green-700' 
                    : 'hover:bg-green-500 hover:bg-opacity-50'
                }`
              }
            >
              <Plant className="h-5 w-5" />
              <span>Crop</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;