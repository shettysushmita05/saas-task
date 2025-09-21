import React, { useState } from 'react';
import { useAppSelector } from '../hooks';
import { Search, Plus, Filter, ArrowUpDown } from 'lucide-react';

const Users: React.FC = () => {
  const { mode } = useAppSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock user data
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', avatar: 'JD' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', avatar: 'JS' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'Inactive', avatar: 'BJ' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'Active', avatar: 'AB' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Admin', status: 'Active', avatar: 'CW' },
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Inactive':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-black dark:text-gray-300';
    }
  };

  return (
    <div className={`min-h-screen ${
      mode === 'dark' ? 'bg-black' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className={`text-2xl font-bold ${
            mode === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Users
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
              placeholder="Search users..."
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

        {/* Users Table */}
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
                    User
                  </th>
                  <th className={`text-left py-4 px-6 text-sm font-medium ${
                    mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email
                  </th>
                  <th className={`text-left py-4 px-6 text-sm font-medium ${
                    mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Role
                  </th>
                  <th className={`text-left py-4 px-6 text-sm font-medium ${
                    mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Status
                  </th>
                  <th className={`text-left py-4 px-6 text-sm font-medium ${
                    mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <tr 
                    key={user.id}
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
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-semibold">
                            {user.avatar}
                          </span>
                        </div>
                        <div>
                          <p className={`text-sm font-medium ${
                            mode === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}>
                            {user.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className={`py-4 px-6 text-sm ${
                      mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {user.email}
                    </td>
                    <td className={`py-4 px-6 text-sm ${
                      mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {user.role}
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(user.status)}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <button className={`px-3 py-1 text-xs rounded ${
                          mode === 'dark'
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-blue-500 text-white hover:bg-blue-600'
                        }`}>
                          Edit
                        </button>
                        <button className={`px-3 py-1 text-xs rounded ${
                          mode === 'dark'
                            ? 'bg-red-600 text-white hover:bg-red-700'
                            : 'bg-red-500 text-white hover:bg-red-600'
                        }`}>
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;