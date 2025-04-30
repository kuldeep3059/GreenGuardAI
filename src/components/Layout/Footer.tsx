import React from 'react';
import { Code, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <Code className="w-5 h-5 text-green-600" />
            <span className="text-gray-600">Developed with</span>
            <Heart className="w-5 h-5 text-red-500" />
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-gray-600">
            <span className="hover:text-green-600 transition-colors">Saurabh</span>
            <span className="text-gray-400">•</span>
            <span className="hover:text-green-600 transition-colors">Kuldeep</span>
            <span className="text-gray-400">•</span>
            <span className="hover:text-green-600 transition-colors">Nihal</span>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} CropHealth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;