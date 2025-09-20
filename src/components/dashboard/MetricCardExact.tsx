import React from 'react';
import { useAppSelector } from '../../hooks';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardExactProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ReactNode;
}

const MetricCardExact: React.FC<MetricCardExactProps> = ({
  title,
  value,
  change,
  trend,
  icon,
}) => {
  const { mode } = useAppSelector((state) => state.theme);

  return (
    <div className={`p-6 rounded-lg border ${
      mode === 'dark' 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className={`text-sm font-medium ${
            mode === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {title}
          </p>
          <p className={`text-2xl font-bold mt-1 ${
            mode === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {value}
          </p>
          <div className="flex items-center mt-2">
            {trend === 'up' ? (
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
            )}
            <span className={`text-sm font-medium ${
              trend === 'up' ? 'text-green-500' : 'text-red-500'
            }`}>
              {change}
            </span>
          </div>
        </div>
        <div className={`p-3 rounded-lg ${
          mode === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
        }`}>
          <div className={`${
            mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricCardExact;