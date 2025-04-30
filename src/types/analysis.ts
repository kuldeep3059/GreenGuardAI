export interface SoilAnalysis {
  moisture: number;
  ph: number;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  organicMatter: number;
  suitableCrops: string[];
  selectedCropSuitability: {
    suitable: boolean;
    reason: string;
  } | null;
}

export interface CropHealth {
  status: 'healthy' | 'moderate' | 'unhealthy';
  confidence: number;
  issues: {
    name: string;
    severity: 'low' | 'medium' | 'high';
    description: string;
    solution: string;
  }[];
}