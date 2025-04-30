import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud as CloudSun, Sprout, Flower2 as Plant } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Monitor Your Crop Health
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Get real-time insights about weather conditions, soil health, and crop diagnostics
          to optimize your farming decisions.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <Link
          to="/weather"
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <CloudSun className="w-12 h-12 text-blue-500" />
            <h2 className="text-xl font-semibold">Weather Analysis</h2>
            <p className="text-gray-600">
              Get real-time weather updates and crop recommendations based on current conditions.
            </p>
          </div>
        </Link>

        <Link
          to="/soil"
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <Sprout className="w-12 h-12 text-green-500" />
            <h2 className="text-xl font-semibold">Soil Analysis</h2>
            <p className="text-gray-600">
              Upload soil images for analysis and get detailed insights about soil health.
            </p>
          </div>
        </Link>

        <Link
          to="/crop"
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <Plant className="w-12 h-12 text-green-600" />
            <h2 className="text-xl font-semibold">Crop Diagnostics</h2>
            <p className="text-gray-600">
              Identify crop health issues and get recommended solutions.
            </p>
          </div>
        </Link>
      </div>

      <div className="mt-12 bg-green-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Why Choose Our Platform?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="font-semibold mb-2">Real-time Analysis</h3>
            <p className="text-gray-600">Get instant insights about your crops and soil</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold mb-2">Smart Recommendations</h3>
            <p className="text-gray-600">Receive data-driven farming suggestions</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold mb-2">Easy to Use</h3>
            <p className="text-gray-600">Simple interface for all your farming needs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;