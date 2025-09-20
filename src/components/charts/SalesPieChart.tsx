import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useAppSelector } from '../../hooks';

interface SalesPieChartProps {
  data: Array<{
    name: string;
    value: number;
    color: string;
  }>;
}

const SalesPieChart: React.FC<SalesPieChartProps> = ({ data }) => {
  const { mode } = useAppSelector((state) => state.theme);

  const CustomTooltip = ({ active, payload }: any) => {
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
            {payload[0].name}
          </p>
          <p className={`text-sm ${
            mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {payload[0].value}%
          </p>
        </div>
      );
    }
    return null;
  };

  const renderLabel = (entry: any) => {
    return `${entry.value}%`;
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
        Total Sales
      </h3>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="bottom" 
              height={36}
              formatter={(value) => (
                <span className={`text-sm ${
                  mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {value}
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      {/* Center total */}
      <div className="text-center mt-4">
        <p className={`text-2xl font-bold ${
          mode === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          38.6%
        </p>
        <p className={`text-sm ${
          mode === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Total Sales
        </p>
      </div>
    </div>
  );
};

export default SalesPieChart;