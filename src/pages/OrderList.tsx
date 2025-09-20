import React, { useState } from 'react';
import { useAppSelector } from '../hooks';
import { Search, Plus, Filter, ArrowUpDown } from 'lucide-react';

const OrderList: React.FC = () => {
  const { mode } = useAppSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock order data matching the design
  const orders = [
    { id: '#CM9801', user: 'Natali Craig', project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress', statusColor: 'bg-purple-500' },
    { id: '#CM9802', user: 'Kate Morrison', project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: 'Complete', statusColor: 'bg-green-500' },
    { id: '#CM9803', user: 'Drew Cano', project: 'Client Project', address: 'Bagwell Avenue Ocala', date: '1 hour ago', status: 'Pending', statusColor: 'bg-blue-500' },
    { id: '#CM9804', user: 'Orlando Diggs', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved', statusColor: 'bg-yellow-500' },
    { id: '#CM9805', user: 'Andi Lane', project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected', statusColor: 'bg-red-500' },
    { id: '#CM9806', user: 'Natali Craig', project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress', statusColor: 'bg-purple-500' },
    { id: '#CM9807', user: 'Kate Morrison', project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: 'Complete', statusColor: 'bg-green-500' },
    { id: '#CM9808', user: 'Drew Cano', project: 'Client Project', address: 'Bagwell Avenue Ocala', date: '1 hour ago', status: 'Pending', statusColor: 'bg-blue-500' },
    { id: '#CM9809', user: 'Orlando Diggs', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved', statusColor: 'bg-yellow-500' },
    { id: '#CM9810', user: 'Andi Lane', project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected', statusColor: 'bg-red-500' },
  ];

  const filteredOrders = orders.filter(order =>
    order.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Complete':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Pending':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'In Progress':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'Approved':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Rejected':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className={`min-h-screen ${
      mode === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className={`text-2xl font-bold ${
            mode === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Order List
          </h1>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <button className={`p-2 rounded-md border ${
              mode === 'dark'
                ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}>
              <Plus className="w-4 h-4" />
            </button>
            <button className={`p-2 rounded-md border ${
              mode === 'dark'
                ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}>
              <Filter className="w-4 h-4" />
            </button>
            <button className={`p-2 rounded-md border ${
              mode === 'dark'
                ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}>
              <ArrowUpDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className={`w-4 h-4 ${
                mode === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`} />
            </div>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-md border ${
                mode === 'dark'
                  ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>
        </div>

        {/* Orders Table */}
        <div className={`rounded-lg border overflow-hidden ${
          mode === 'dark' 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-white border-gray-200'
        }`}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className={`${
                mode === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <tr>
                  <th className={`text-left py-4 px-6 text-sm font-medium ${
                    mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Order ID
                  </th>
                  <th className={`text-left py-4 px-6 text-sm font-medium ${
                    mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    User
                  </th>
                  <th className={`text-left py-4 px-6 text-sm font-medium ${
                    mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Project
                  </th>
                  <th className={`text-left py-4 px-6 text-sm font-medium ${
                    mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Address
                  </th>
                  <th className={`text-left py-4 px-6 text-sm font-medium ${
                    mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Date
                  </th>
                  <th className={`text-left py-4 px-6 text-sm font-medium ${
                    mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order, index) => (
                  <tr 
                    key={index}
                    className={`border-t ${
                      mode === 'dark' ? 'border-gray-700' : 'border-gray-200'
                    } ${
                      index % 2 === 0 
                        ? (mode === 'dark' ? 'bg-gray-800' : 'bg-white')
                        : (mode === 'dark' ? 'bg-gray-750' : 'bg-gray-50')
                    } hover:${
                      mode === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                    } transition-colors`}
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className={`rounded border ${
                            mode === 'dark' 
                              ? 'border-gray-600 bg-gray-700' 
                              : 'border-gray-300 bg-white'
                          }`}
                        />
                        <span className={`ml-3 text-sm font-medium ${
                          mode === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {order.id}
                        </span>
                      </div>
                    </td>
                    <td className={`py-4 px-6 text-sm ${
                      mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-xs font-semibold">
                            {order.user.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        {order.user}
                      </div>
                    </td>
                    <td className={`py-4 px-6 text-sm ${
                      mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {order.project}
                    </td>
                    <td className={`py-4 px-6 text-sm ${
                      mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <div className="flex items-center">
                        {order.address}
                        <svg className="w-4 h-4 ml-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </td>
                    <td className={`py-4 px-6 text-sm ${
                      mode === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {order.date}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full ${order.statusColor} mr-2`}></div>
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                        {order.status === 'Rejected' && (
                          <svg className="w-4 h-4 ml-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                          </svg>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center space-x-2">
            <button className={`px-3 py-2 text-sm rounded-md border ${
              mode === 'dark'
                ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}>
              &lt;
            </button>
            <button className={`px-3 py-2 text-sm rounded-md ${
              mode === 'dark'
                ? 'bg-blue-600 text-white'
                : 'bg-blue-500 text-white'
            }`}>
              1
            </button>
            <button className={`px-3 py-2 text-sm rounded-md border ${
              mode === 'dark'
                ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}>
              2
            </button>
            <button className={`px-3 py-2 text-sm rounded-md border ${
              mode === 'dark'
                ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}>
              3
            </button>
            <button className={`px-3 py-2 text-sm rounded-md border ${
              mode === 'dark'
                ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}>
              4
            </button>
            <button className={`px-3 py-2 text-sm rounded-md border ${
              mode === 'dark'
                ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}>
              5
            </button>
            <button className={`px-3 py-2 text-sm rounded-md border ${
              mode === 'dark'
                ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}>
              &gt;
            </button>
          </div>
          
          {/* Bottom pagination indicator */}
          <div className={`px-4 py-2 rounded-md ${
            mode === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
          }`}>
            <span className={`text-sm ${
              mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              &lt; 2/4 &gt;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;