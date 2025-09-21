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
  ChevronRight,
  KeyboardArrowDown,
} from '@mui/icons-material';

const LeftSidebar: React.FC = () => {
  const navigate = useNavigate();
  const { mode, leftSidebarOpen } = useAppSelector((state) => state.theme);
  const [userProfileOpen, setUserProfileOpen] = useState(true);

  if (!leftSidebarOpen) return null;

  return (
    <div className={`w-80 h-screen flex flex-col border-r ${
      mode === 'dark' 
        ? 'bg-black border-gray-700' 
        : 'bg-white border-gray-200'
    }`}>
      {/* Header with Logo and Avatar */}
      <div className="p-6 flex items-center space-x-4">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white font-semibold">B</span>
        </div>
        <div>
          <h2 className={`text-lg font-semibold ${
            mode === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            ByeWind
          </h2>
        </div>
      </div>

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
              <img 
                src={mode === 'dark' ? '/white1.svg' : '/1.svg'} 
                alt="Default" 
                className="w-4 h-4 mr-3"
              />
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
              <img 
                src={mode === 'dark' ? '/white2.svg' : '/2.svg'} 
                alt="eCommerce" 
                className="w-4 h-4 mr-3"
              />
              eCommerce
            </button>
            <button
              className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                mode === 'dark'
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <img 
                src={mode === 'dark' ? '/white3.svg' : '/3.svg'} 
                alt="Projects" 
                className="w-4 h-4 mr-3"
              />
              Projects
            </button>
            <button
              className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                mode === 'dark'
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <img 
                src={mode === 'dark' ? '/white4.svg' : '/4.svg'} 
                alt="Online Courses" 
                className="w-4 h-4 mr-3"
              />
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
              className={`w-full flex items-center justify-between py-2 text-sm rounded-md ${
                mode === 'dark'
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center">
                              {userProfileOpen ? <KeyboardArrowDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}

                <img 
                  src={mode === 'dark' ? '/white5.svg' : '/5.svg'} 
                  alt="User Profile" 
                  className="w-4 h-4 mr-3"
                />
                User Profile
              </div>
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
              className={`w-full flex items-center  py-2 text-sm rounded-md ${
                mode === 'dark'
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
                {userProfileOpen ? <KeyboardArrowDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}

              <img 
                src={mode === 'dark' ? '/white6.svg' : '/6.svg'} 
                alt="Order List" 
                className="w-4 h-4 mr-3"
              />
              Order List
            </button>
            <button
              onClick={() => navigate('/users')}
              className={`w-full flex items-center  py-2 text-sm rounded-md ${
                mode === 'dark'
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
                            {userProfileOpen ? <KeyboardArrowDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}

              <img 
                src={mode === 'dark' ? '/white7.svg' : '/7.svg'} 
                alt="Account" 
                className="w-4 h-4 mr-3"
              />
              Account
            </button>
            <button
              className={`w-full flex items-center  py-2 text-sm rounded-md ${
                mode === 'dark'
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
                            {userProfileOpen ? <KeyboardArrowDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}

              <img 
                src={mode === 'dark' ? '/white8.svg' : '/8.svg'} 
                alt="Corporate" 
                className="w-4 h-4 mr-3"
              />
              
              Corporate
            </button>
            <button
              className={`w-full flex items-center py-2 text-sm rounded-md ${
                mode === 'dark'
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
                            {userProfileOpen ? <KeyboardArrowDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}

              <img 
                src={mode === 'dark' ? '/white9.svg' : '/9.svg'} 
                alt="Blog" 
                className="w-4 h-4 mr-3"
              />
              Blog
            </button>
            <button
              className={`w-full flex items-center py-2 text-sm rounded-md ${
                mode === 'dark'
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
                            {userProfileOpen ? <KeyboardArrowDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}

              <img 
                src={mode === 'dark' ? '/white1.svg' : '/1.svg'} 
                alt="Social" 
                className="w-4 h-4 mr-3"
              />
              Social
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;