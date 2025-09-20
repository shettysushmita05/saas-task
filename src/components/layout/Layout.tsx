import React from 'react';
import { useAppSelector } from '../../hooks';
import TopNavbar from './TopNavbar';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { mode } = useAppSelector((state) => state.theme);

  return (
    <div className={`min-h-screen ${
      mode === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Top Navigation Bar - Fixed at top */}
      <TopNavbar />
      
      <div className="flex pt-16">
        {/* Left Sidebar */}
        <LeftSidebar />
        
        {/* Main Content Area */}
        <main className="flex-1 p-6">
          <div className="animate-fade-in">
            {children}
          </div>
        </main>

        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </div>
  );
};

export default Layout;