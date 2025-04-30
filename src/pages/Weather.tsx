import React from 'react';
import { useGeolocation } from '../hooks/useGeolocation';
import { Cloud as CloudSun, Droplets, Wind } from 'lucide-react';

const Weather = () => {
  const { latitude, longitude, loading, error } = useGeolocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading weather data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        Error: {error}
      </div>
    );
  }

  // For demo purposes, using mock data
  const weatherData = {
    temperature: 24,
    humidity: 65,
    windSpeed: 12,
    description: 'Partly Cloudy',
    recommendation: 'Ideal conditions for growing wheat and barley'
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Weather Analysis</h1>
        <p className="text-gray-600">
          Current weather conditions and crop recommendations
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center space-x-4">
            <CloudSun className="w-8 h-8 text-yellow-500" />
            <div>
              <p className="text-gray-600">Temperature</p>
              <p className="text-2xl font-bold">{weatherData.temperature}°C</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center space-x-4">
            <Droplets className="w-8 h-8 text-blue-500" />
            <div>
              <p className="text-gray-600">Humidity</p>
              <p className="text-2xl font-bold">{weatherData.humidity}%</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center space-x-4">
            <Wind className="w-8 h-8 text-gray-500" />
            <div>
              <p className="text-gray-600">Wind Speed</p>
              <p className="text-2xl font-bold">{weatherData.windSpeed} km/h</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Crop Recommendations</h2>
        <p className="text-gray-600">{weatherData.recommendation}</p>
      </div>

      <div className="bg-green-50 p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Your Location</h2>
        <p className="text-gray-600">
          Latitude: {latitude?.toFixed(4)}, Longitude: {longitude?.toFixed(4)}
        </p>
      </div>
    </div>
  );
};

export default Weather;