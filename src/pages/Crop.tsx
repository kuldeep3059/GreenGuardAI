import React, { useState } from 'react';
import { Upload, Flower2 as Plant, AlertCircle } from 'lucide-react';
import { CropHealth } from '../types/analysis';
import CropHealthResult from '../components/analysis/CropHealthResult';

const Crop = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState<CropHealth | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(event.target.files[0]);
      setAnalysis(null); // Reset analysis when new image is uploaded
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    // Mock analysis result
    const mockAnalysis: CropHealth = {
      status: Math.random() > 0.6 ? 'healthy' : Math.random() > 0.3 ? 'moderate' : 'unhealthy',
      confidence: Math.floor(Math.random() * 20 + 80), // 80-99%
      issues: Math.random() > 0.5 ? [
        {
          name: 'Leaf Spots',
          severity: 'medium',
          description: 'Brown spots observed on leaves indicating possible fungal infection',
          solution: 'Apply copper-based fungicide and ensure proper air circulation between plants'
        },
        {
          name: 'Nutrient Deficiency',
          severity: 'low',
          description: 'Slight yellowing of leaves suggesting nitrogen deficiency',
          solution: 'Apply balanced NPK fertilizer and monitor soil pH levels'
        }
      ] : []
    };

    setAnalysis(mockAnalysis);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Crop Health Diagnostics</h1>
        <p className="text-gray-600">
          Upload images of your crops for health analysis
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Upload Crop Image
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

        <button
          type="submit"
          disabled={!selectedImage}
          className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Analyze Crop Health
        </button>
      </form>

      {selectedImage && (
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Selected Image</h2>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected crop"
            className="w-full max-w-md mx-auto rounded-lg"
          />
        </div>
      )}

      {analysis && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-6">Analysis Results</h2>
          <CropHealthResult analysis={analysis} />
        </div>
      )}

      <div className="bg-yellow-50 p-6 rounded-xl">
        <div className="flex items-center space-x-3">
          <AlertCircle className="w-6 h-6 text-yellow-600" />
          <h2 className="text-xl font-semibold text-yellow-800">Tips</h2>
        </div>
        <ul className="mt-4 space-y-2 text-yellow-800">
          <li>• Take clear, well-lit photos of your crops</li>
          <li>• Include both healthy and affected areas in the image</li>
          <li>• Capture images from different angles if possible</li>
          <li>• Ensure the image is in focus and not blurry</li>
        </ul>
      </div>
    </div>
  );
};

export default Crop;