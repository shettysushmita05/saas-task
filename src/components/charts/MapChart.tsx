import React from 'react';
import { useAppSelector } from '../../hooks';

const MapChart: React.FC = () => {
  const { mode } = useAppSelector((state) => state.theme);

  return (
    <div className={`p-6 rounded-lg border ${
      mode === 'dark' 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-200'
    }`}>
      <h3 className={`text-lg font-semibold mb-4 ${
        mode === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        Revenue by Location
      </h3>
      
      <div className="relative">
        {/* World Map SVG */}
        <img 
          src="/Worldmap.svg" 
          alt="World Map" 
          className="w-full h-auto"
        />
        
        {/* Location indicators */}
        <div className="absolute top-4 left-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className={`text-sm font-medium ${
              mode === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              New York
            </span>
            <span className={`text-sm ${
              mode === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              72K
            </span>
          </div>
        </div>
        
        <div className="absolute top-8 right-8">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className={`text-sm font-medium ${
              mode === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              San Francisco
            </span>
            <span className={`text-sm ${
              mode === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              39K
            </span>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-8">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className={`text-sm font-medium ${
              mode === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Sydney
            </span>
            <span className={`text-sm ${
              mode === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              25K
            </span>
          </div>
        </div>
        
        <div className="absolute bottom-4 right-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className={`text-sm font-medium ${
              mode === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Singapore
            </span>
            <span className={`text-sm ${
              mode === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              61K
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapChart;