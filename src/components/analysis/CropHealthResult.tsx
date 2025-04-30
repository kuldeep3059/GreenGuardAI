import React from 'react';
import { CropHealth } from '../../types/analysis';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

interface Props {
  analysis: CropHealth;
}

const CropHealthResult: React.FC<Props> = ({ analysis }) => {
  const getStatusIcon = () => {
    switch (analysis.status) {
      case 'healthy':
        return <CheckCircle className="w-8 h-8 text-green-500" />;
      case 'moderate':
        return <AlertTriangle className="w-8 h-8 text-yellow-500" />;
      case 'unhealthy':
        return <XCircle className="w-8 h-8 text-red-500" />;
    }
  };

  const getStatusColor = () => {
    switch (analysis.status) {
      case 'healthy':
        return 'text-green-700 bg-green-50';
      case 'moderate':
        return 'text-yellow-700 bg-yellow-50';
      case 'unhealthy':
        return 'text-red-700 bg-red-50';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-center space-x-4 mb-6">
          {getStatusIcon()}
          <div>
            <h3 className="text-lg font-semibold capitalize">
              {analysis.status} Condition
            </h3>
            <p className="text-gray-600">
              Confidence: {analysis.confidence}%
            </p>
          </div>
        </div>
      </div>

      {analysis.issues.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Identified Issues</h3>
          {analysis.issues.map((issue, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold">{issue.name}</h4>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  issue.severity === 'high' ? 'bg-red-100 text-red-700' :
                  issue.severity === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {issue.severity} severity
                </span>
              </div>
              <p className="text-gray-600 mb-4">{issue.description}</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Recommended Solution:</h5>
                <p className="text-gray-700">{issue.solution}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CropHealthResult;