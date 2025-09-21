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
    <div className={`h-16 border-b ${
      mode === 'dark' 
        ? 'bg-black border-gray-700' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="flex items-center justify-between h-full px-6">
        {/* Left Section - User Profile and Navigation */}
        <div className="flex items-center ">
          

          

          {/* Navigation Icons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => dispatch(toggleLeftSidebar())}
              className={`p-1.5 rounded-md ${
                mode === 'dark' ? 'text-white hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <List size={16} />
            </button>
            <button
              className={`p-1.5 rounded-md ${
                mode === 'dark' ? 'text-white hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Star size={16} />
            </button>
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center space-x-1">
            <span className={`text-sm ${
              mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Dashboards
            </span>
            <span className={`text-sm ${
              mode === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              /
            </span>
            <div className="relative">
              <span className={`text-sm font-medium ${
                mode === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Default
              </span>
              
            </div>
          </div>
        </div>

        {/* Center Section - Search Bar */}
        <div className="flex-1 max-w-xs ml-auto mr-15">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={10} className="text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className={`w-full pl-10 pr-16 py-2 rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                mode === 'dark' 
                  ? 'bg-gray-800 text-white placeholder-gray-400' 
                  : 'bg-gray-100 text-gray-900 placeholder-gray-500'
              }`}
            />
            
          </div>
        </div>

        {/* Right Section - Utility Icons */}
        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          <button
            onClick={() => dispatch(toggleTheme())}
            className={`p-1.5 rounded-md ${
              mode === 'dark' ? 'text-white hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Sun size={16} />
          </button>

          {/* Clock Icon */}
          <button
            className={`p-1.5 rounded-md ${
              mode === 'dark' ? 'text-white hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Clock size={16} />
          </button>

          {/* Notifications */}
          <button
            className={`p-1.5 rounded-md ${
              mode === 'dark' ? 'text-white hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Bell size={16} />
          </button>

          {/* Right Sidebar Toggle */}
          <button
            onClick={() => dispatch(toggleRightSidebar())}
            className={`p-1.5 rounded-md ${
              mode === 'dark' ? 'text-white hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <List size={16} />
          </button>

          {/* Notifications Text */}
          
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;