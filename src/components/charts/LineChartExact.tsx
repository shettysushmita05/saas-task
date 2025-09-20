import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useAppSelector } from '../../hooks';

interface LineChartExactProps {
  data: Array<{
    name: string;
    revenue: number;
  }>;
}

const LineChartExact: React.FC<LineChartExactProps> = ({ data }) => {
  const { mode } = useAppSelector((state) => state.theme);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className={`p-3 rounded-lg border shadow-lg ${
          mode === 'dark' 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-white border-gray-200'
        }`}>
          <p className={`text-sm font-medium ${
            mode === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {label}
          </p>
          <p className={`text-sm ${
            mode === 'dark' ? 'text-blue-400' : 'text-blue-600'
          }`}>
            Revenue: ${payload[0].value.toLocaleString()}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`p-6 rounded-lg border ${
      mode === 'dark' 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-200'
    }`}>
      <h3 className={`text-lg font-semibold mb-4 ${
        mode === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        Revenue Trend
      </h3>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke={mode === 'dark' ? '#374151' : '#e5e7eb'} 
            />
            <XAxis 
              dataKey="name" 
              stroke={mode === 'dark' ? '#9ca3af' : '#6b7280'}
              tick={{ fill: mode === 'dark' ? '#9ca3af' : '#6b7280' }}
            />
            <YAxis 
              stroke={mode === 'dark' ? '#9ca3af' : '#6b7280'}
              tick={{ fill: mode === 'dark' ? '#9ca3af' : '#6b7280' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#3b82f6" 
              strokeWidth={3}
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChartExact;