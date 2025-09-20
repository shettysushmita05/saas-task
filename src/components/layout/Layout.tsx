import React from 'react';
import { Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import TopNavbar from './TopNavbar';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import { useAppSelector } from '../../hooks';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { leftSidebarOpen, rightSidebarOpen } = useAppSelector((state) => state.theme);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: theme.palette.background.default }}>
      {/* Left Sidebar */}
      {leftSidebarOpen && <LeftSidebar />}
      
      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: theme.palette.background.default,
          transition: theme.transitions.create(['margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <TopNavbar />
        
        <Box
          component="div"
          sx={{
            flexGrow: 1,
            marginTop: '64px', // Height of AppBar
            minHeight: 'calc(100vh - 64px)',
            padding: 3,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </Box>
      </Box>

      {/* Right Sidebar */}
      {rightSidebarOpen && <RightSidebar />}
    </Box>
  );
};

export default Layout;