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
    <div className={`min-h-screen flex ${
      mode === 'dark' ? 'bg-black' : 'bg-gray-50'
    }`}>
      {/* Left Sidebar */}
      <LeftSidebar />
      
      {/* Main Content Area with TopNavbar */}
      <div className="flex-1 flex flex-col">
        <TopNavbar />
        
        <main className="flex-1 p-6">
          <div className="animate-fade-in">
            {children}
          </div>
        </main>
      </div>

      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
};

export default Layout;