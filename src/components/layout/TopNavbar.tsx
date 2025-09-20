import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { toggleTheme, toggleLeftSidebar, toggleRightSidebar } from '../../store/slices/themeSlice';
import {
  Star,
  Search,
  Sun,
  Clock,
  Bell,
  List,
} from 'lucide-react';

const TopNavbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { mode } = useAppSelector((state) => state.theme);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 h-16 border-b ${
      mode === 'dark' 
        ? 'bg-white border-gray-200' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="flex items-center justify-between h-full px-6">
        {/* Left Section - User Profile and Navigation */}
        <div className="flex items-center ">
          {/* User Profile */}
          <div className="flex items-center mr-20 space-x-3">
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">B</span>
            </div>
            <span className={`text-sm font-medium ${
              mode === 'dark' ? 'text-gray-900' : 'text-gray-900'
            }`}>
              ByeWind
            </span>
          </div>

          

          {/* Navigation Icons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => dispatch(toggleLeftSidebar())}
              className={`p-1.5 rounded-md hover:bg-gray-100 ${
                mode === 'dark' ? 'text-gray-600' : 'text-gray-600'
              }`}
            >
              <List size={16} />
            </button>
            <button
              className={`p-1.5 rounded-md hover:bg-gray-100 ${
                mode === 'dark' ? 'text-gray-600' : 'text-gray-600'
              }`}
            >
              <Star size={16} />
            </button>
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center space-x-1">
            <span className={`text-sm ${
              mode === 'dark' ? 'text-gray-600' : 'text-gray-600'
            }`}>
              Dashboards
            </span>
            <span className={`text-sm ${
              mode === 'dark' ? 'text-gray-600' : 'text-gray-600'
            }`}>
              /
            </span>
            <div className="relative">
              <span className={`text-sm font-medium ${
                mode === 'dark' ? 'text-gray-900' : 'text-gray-900'
              }`}>
                Default
              </span>
              
            </div>
          </div>
        </div>

        {/* Center Section - Search Bar */}
        <div className="flex-1 max-w-md ">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={10} className="text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-16 py-2 rounded-md border-0 bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
          </div>
        </div>

        {/* Right Section - Utility Icons */}
        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          <button
            onClick={() => dispatch(toggleTheme())}
            className={`p-1.5 rounded-md hover:bg-gray-100 ${
              mode === 'dark' ? 'text-gray-600' : 'text-gray-600'
            }`}
          >
            <Sun size={16} />
          </button>

          {/* Clock Icon */}
          <button
            className={`p-1.5 rounded-md hover:bg-gray-100 ${
              mode === 'dark' ? 'text-gray-600' : 'text-gray-600'
            }`}
          >
            <Clock size={16} />
          </button>

          {/* Notifications */}
          <button
            className={`p-1.5 rounded-md hover:bg-gray-100 ${
              mode === 'dark' ? 'text-gray-600' : 'text-gray-600'
            }`}
          >
            <Bell size={16} />
          </button>

          {/* Right Sidebar Toggle */}
          <button
            onClick={() => dispatch(toggleRightSidebar())}
            className={`p-1.5 rounded-md hover:bg-gray-100 ${
              mode === 'dark' ? 'text-gray-600' : 'text-gray-600'
            }`}
          >
            <List size={16} />
          </button>

          {/* Notifications Text */}
          <span className={`text-sm font-semibold ml-2 ${
            mode === 'dark' ? 'text-gray-900' : 'text-gray-900'
          }`}>
            Notifications
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;