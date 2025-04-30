import React from 'react';
import { SoilAnalysis } from '../../types/analysis';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface Props {
  analysis: SoilAnalysis;
}

const SoilAnalysisResult: React.FC<Props> = ({ analysis }) => {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Soil Composition</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Moisture</span>
              <span className="font-semibold">{analysis.moisture}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">pH Level</span>
              <span className="font-semibold">{analysis.ph}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Nitrogen</span>
              <span className="font-semibold">{analysis.nitrogen} mg/kg</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Phosphorus</span>
              <span className="font-semibold">{analysis.phosphorus} mg/kg</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Potassium</span>
              <span className="font-semibold">{analysis.potassium} mg/kg</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Organic Matter</span>
              <span className="font-semibold">{analysis.organicMatter}%</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Suitable Crops</h3>
          <div className="space-y-2">
            {analysis.suitableCrops.map((crop, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>{crop}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {analysis.selectedCropSuitability && (
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Selected Crop Suitability</h3>
          <div className="flex items-center space-x-3">
            {analysis.selectedCropSuitability.suitable ? (
              <CheckCircle className="w-6 h-6 text-green-500" />
            ) : (
              <XCircle className="w-6 h-6 text-red-500" />
            )}
            <span className="text-gray-700">{analysis.selectedCropSuitability.reason}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SoilAnalysisResult;