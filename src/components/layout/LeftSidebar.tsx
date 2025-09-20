import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import {
  Book as BookIcon,
  Person as PersonIcon,
  Business as BusinessIcon,
  Article as ArticleIcon,
  Chat as ChatIcon,
  PieChart as PieChartIcon,
  CheckBox as CheckBoxIcon,
  ExpandLess,
  ExpandMore,
} from '@mui/icons-material';

const LeftSidebar: React.FC = () => {
  const navigate = useNavigate();
  const { mode, leftSidebarOpen } = useAppSelector((state) => state.theme);
  const [userProfileOpen, setUserProfileOpen] = useState(true);

  if (!leftSidebarOpen) return null;

  return (
    <div className={`w-80 h-screen flex flex-col border-r ${
      mode === 'dark' 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-200'
    }`}>
    

      {/* Navigation Menu */}
      <div className="flex-1 px-4 pb-4">
        {/* Favorites and Recently */}
        <div className="mb-6">
          <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
            <button className={`px-3 py-2 text-sm font-medium border-b-2 ${
              mode === 'dark' 
                ? 'text-white border-white' 
                : 'text-gray-900 border-gray-900'
            }`}>
              Favorites
            </button>
            <button className={`px-3 py-2 text-sm font-medium border-b-2 border-transparent ${
              mode === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Recently
            </button>
          </div>
          <div className="space-y-1">
            <button className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
              mode === 'dark'
                ? 'text-gray-300 hover:bg-gray-700'
                : 'text-gray-700 hover:bg-gray-100'
            }`}>
              {/* <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div> */}
              Overview
            </button>
            <button className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
              mode === 'dark'
                ? 'text-gray-300 hover:bg-gray-700'
                : 'text-gray-700 hover:bg-gray-100'
            }`}>
              
              Projects
            </button>
          </div>
        </div>

        {/* Dashboards */}
        <div className="mb-6">
          <h3 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
            mode === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Dashboards
          </h3>
          <div className="space-y-1">
            <button
              onClick={() => navigate('/')}
              className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                mode === 'dark'
                  ? 'bg-gray-700 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <div >
                <img src="/default.svg" alt="Blueberry" className="w-5 h-5 mr-4"/>
                
              </div>
              
              Default
            </button>
            <button
              onClick={() => navigate('/')}
              className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                mode === 'dark'
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <CheckBoxIcon className="w-4 h-4 mr-3 text-gray-400" />
              eCommerce
            </button>
            <button
              className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                mode === 'dark'
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <PieChartIcon className="w-4 h-4 mr-3 text-gray-400" />
              Projects
            </button>
            <button
              className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                mode === 'dark'
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <BookIcon className="w-4 h-4 mr-3 text-gray-400" />
              Online Courses
            </button>
          </div>
        </div>

        {/* Pages */}
        <div className="mb-6">
          <h3 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
            mode === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Pages
          </h3>
          <div className="space-y-1">
            <button
              onClick={() => setUserProfileOpen(!userProfileOpen)}
              className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md ${
                mode === 'dark'
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center">
                <PersonIcon className="w-4 h-4 mr-3 text-gray-400" />
                User Profile
              </div>
              {userProfileOpen ? <ExpandLess className="w-4 h-4 text-gray-400" /> : <ExpandMore className="w-4 h-4 text-gray-400" />}
            </button>
            
            {userProfileOpen && (
              <div className="ml-6 space-y-1">
                <button className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                  mode === 'dark'
                    ? 'text-gray-300 hover:bg-gray-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}>
                  
                  Overview
                </button>
                <button className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                  mode === 'dark'
                    ? 'text-gray-300 hover:bg-gray-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}>
                 
                  Projects
                </button>
                <button className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                  mode === 'dark'
                    ? 'text-gray-300 hover:bg-gray-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}>
                 
                  Campaigns
                </button>
                <button className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                  mode === 'dark'
                    ? 'text-gray-300 hover:bg-gray-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}>
                  
                  Documents
                </button>
                <button className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                  mode === 'dark'
                    ? 'text-gray-300 hover:bg-gray-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}>
                 
                  Followers
                </button>
              </div>
            )}

            <button
              onClick={() => navigate('/orders')}
              className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                mode === 'dark'
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <PersonIcon className="w-4 h-4 mr-3 text-gray-400" />
              Order List
            </button>
            <button
              onClick={() => navigate('/users')}
              className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                mode === 'dark'
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <PersonIcon className="w-4 h-4 mr-3 text-gray-400" />
              Account
            </button>
            <button
              className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                mode === 'dark'
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <BusinessIcon className="w-4 h-4 mr-3 text-gray-400" />
              Corporate
            </button>
            <button
              className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                mode === 'dark'
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <ArticleIcon className="w-4 h-4 mr-3 text-gray-400" />
              Blog
            </button>
            <button
              className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                mode === 'dark'
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <ChatIcon className="w-4 h-4 mr-3 text-gray-400" />
              Social
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;