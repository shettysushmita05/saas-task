import React from 'react';
import { useAppSelector } from '../../hooks';

interface ProductsTableProps {
  data: Array<{
    name: string;
    price: string;
    quantity: number;
    amount: string;
  }>;
}

const ProductsTable: React.FC<ProductsTableProps> = ({ data }) => {
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
        Top Selling Products
      </h3>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={`border-b ${
              mode === 'dark' ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <th className={`text-left py-3 px-2 text-sm font-medium ${
                mode === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Name
              </th>
              <th className={`text-left py-3 px-2 text-sm font-medium ${
                mode === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Price
              </th>
              <th className={`text-left py-3 px-2 text-sm font-medium ${
                mode === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Quantity
              </th>
              <th className={`text-left py-3 px-2 text-sm font-medium ${
                mode === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((product, index) => (
              <tr 
                key={index}
                className={`border-b ${
                  mode === 'dark' ? 'border-gray-700' : 'border-gray-200'
                } hover:${
                  mode === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
                } transition-colors`}
              >
                <td className={`py-3 px-2 text-sm ${
                  mode === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {product.name}
                </td>
                <td className={`py-3 px-2 text-sm ${
                  mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {product.price}
                </td>
                <td className={`py-3 px-2 text-sm ${
                  mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {product.quantity}
                </td>
                <td className={`py-3 px-2 text-sm font-medium ${
                  mode === 'dark' ? 'text-green-400' : 'text-green-600'
                }`}>
                  {product.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsTable;