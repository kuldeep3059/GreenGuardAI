import React, { useState } from 'react';
import { Upload, Sprout } from 'lucide-react';
import { SoilAnalysis } from '../types/analysis';
import SoilAnalysisResult from '../components/analysis/SoilAnalysisResult';

const Soil = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedCrop, setSelectedCrop] = useState('');
  const [analysis, setAnalysis] = useState<SoilAnalysis | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(event.target.files[0]);
      setAnalysis(null); // Reset analysis when new image is uploaded
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    // Mock analysis result
    const mockAnalysis: SoilAnalysis = {
      moisture: 35,
      ph: 6.8,
      nitrogen: 120,
      phosphorus: 45,
      potassium: 180,
      organicMatter: 3.2,
      suitableCrops: ['Wheat', 'Corn', 'Soybeans', 'Barley'],
      selectedCropSuitability: selectedCrop ? {
        suitable: Math.random() > 0.3,
        reason: Math.random() > 0.3 
          ? `This soil is well-suited for ${selectedCrop} cultivation due to optimal pH and nutrient levels.`
          : `This soil may not be ideal for ${selectedCrop} due to low nitrogen content and pH levels.`
      } : null
    };

    setAnalysis(mockAnalysis);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Soil Analysis</h1>
        <p className="text-gray-600">
          Upload a soil image and get detailed insights
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Upload Soil Image
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
              <div className="flex flex-col items-center">
                <Upload className="w-12 h-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">
                  Drag and drop or click to upload
                </p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="mt-4"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Select Crop
            </label>
            <select
              value={selectedCrop}
              onChange={(e) => setSelectedCrop(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option value="">Select a crop</option>
              <option value="wheat">Wheat</option>
              <option value="rice">Rice</option>
              <option value="corn">Corn</option>
              <option value="soybean">Soybean</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={!selectedImage}
          className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Analyze Soil
        </button>
      </form>

      {selectedImage && (
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Selected Image</h2>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected soil"
            className="w-full max-w-md mx-auto rounded-lg"
          />
        </div>
      )}

      {analysis && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-6">Analysis Results</h2>
          <SoilAnalysisResult analysis={analysis} />
        </div>
      )}
    </div>
  );
};

export default Soil;