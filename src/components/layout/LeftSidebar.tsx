import React, { useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Avatar,
  Divider,
  useTheme,
  Drawer,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import {
  
  
  Folder as FolderIcon,
  Book as BookIcon,
  Person as PersonIcon,
  Business as BusinessIcon,
  Article as ArticleIcon,
  Chat as ChatIcon,
  ExpandLess,
  ExpandMore,
  PieChart as PieChartIcon,
  CheckBox as CheckBoxIcon,
  Assignment as AssignmentIcon,
} from '@mui/icons-material';


const LeftSidebar: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { leftSidebarOpen } = useAppSelector((state) => state.theme);
  const [userProfileOpen, setUserProfileOpen] = useState(true);
  const [accountOpen, setAccountOpen] = useState(false);
  const [corporateOpen, setCorporateOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);

  const handleUserProfileClick = () => {
    setUserProfileOpen(!userProfileOpen);
  };

  const handleAccountClick = () => {
    setAccountOpen(!accountOpen);
  };

  const handleCorporateClick = () => {
    setCorporateOpen(!corporateOpen);
  };

  const handleBlogClick = () => {
    setBlogOpen(!blogOpen);
  };

  const handleSocialClick = () => {
    setSocialOpen(!socialOpen);
  };

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={leftSidebarOpen}
      sx={{
        width: leftSidebarOpen ? 280 : 0,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 280,
          boxSizing: 'border-box',
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          borderRight: `1px solid ${theme.palette.divider}`,
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      }}
    >
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
      {/* Header with Logo and Avatar */}
      <Box sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar sx={{ bgcolor: '#6366f1', width: 40, height: 40 }}>
          B
        </Avatar>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: theme.palette.text.primary }}>
          ByeWind
        </Typography>
      </Box>

      <Divider sx={{ borderColor: theme.palette.divider }} />

      {/* Favorites Section */}
      <Box sx={{ p: 2 }}>
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 1, px: 2 }}>
          Favorites
        </Typography>
        <List dense>
          <ListItem disablePadding>
            <ListItemButton sx={{ px: 2, py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 20, mr: 1 }}>
                <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: theme.palette.text.secondary }} />
              </ListItemIcon>
              <ListItemText primary="Overview" sx={{ '& .MuiListItemText-primary': { fontSize: '0.875rem' } }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ px: 2, py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 20, mr: 1 }}>
                <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: theme.palette.text.secondary }} />
              </ListItemIcon>
              <ListItemText primary="Projects" sx={{ '& .MuiListItemText-primary': { fontSize: '0.875rem' } }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      <Divider sx={{ borderColor: theme.palette.divider }} />

      {/* Recently Section */}
      <Box sx={{ p: 2 }}>
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 1, px: 2 }}>
          Recently
        </Typography>
        <List dense>
          <ListItem disablePadding>
            <ListItemButton sx={{ px: 2, py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 20, mr: 1 }}>
                <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: theme.palette.text.secondary }} />
              </ListItemIcon>
              <ListItemText primary="Projects" sx={{ '& .MuiListItemText-primary': { fontSize: '0.875rem' } }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      <Divider sx={{ borderColor: theme.palette.divider }} />

      {/* Dashboards Section */}
      <Box sx={{ p: 2 }}>
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 1, px: 2 }}>
          Dashboards
        </Typography>
        <List dense>
          <ListItem disablePadding>
            <ListItemButton 
              onClick={() => navigate('/')}
              sx={{ 
                px: 2, 
                py: 0.5,
                backgroundColor: '#6366f1',
                borderRadius: 1,
                '&:hover': { backgroundColor: '#6366f1' }
              }}
            >
              <ListItemIcon sx={{ minWidth: 20, mr: 1 }}>
                <PieChartIcon sx={{ fontSize: 16, color: 'white' }} />
              </ListItemIcon>
              <ListItemText 
                primary="Default" 
                sx={{ '& .MuiListItemText-primary': { fontSize: '0.875rem', color: 'white', fontWeight: 500 } }} 
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ px: 2, py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 20, mr: 1 }}>
                <CheckBoxIcon sx={{ fontSize: 16, color: theme.palette.text.secondary }} />
              </ListItemIcon>
              <ListItemText primary="eCommerce" sx={{ '& .MuiListItemText-primary': { fontSize: '0.875rem' } }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ px: 2, py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 20, mr: 1 }}>
                <CheckBoxIcon sx={{ fontSize: 16, color: theme.palette.text.secondary }} />
              </ListItemIcon>
              <ListItemText primary="eCommerce" sx={{ '& .MuiListItemText-primary': { fontSize: '0.875rem' } }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ px: 2, py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 20, mr: 1 }}>
                <FolderIcon sx={{ fontSize: 16, color: theme.palette.text.secondary }} />
              </ListItemIcon>
              <ListItemText primary="Projects" sx={{ '& .MuiListItemText-primary': { fontSize: '0.875rem' } }} />
              <ExpandMore sx={{ fontSize: 16, color: theme.palette.text.secondary }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ px: 2, py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 20, mr: 1 }}>
                <BookIcon sx={{ fontSize: 16, color: theme.palette.text.secondary }} />
              </ListItemIcon>
              <ListItemText primary="Online Courses" sx={{ '& .MuiListItemText-primary': { fontSize: '0.875rem' } }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      <Divider sx={{ borderColor: theme.palette.divider }} />

      {/* Pages Section */}
      <Box sx={{ p: 2, flexGrow: 1 }}>
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 1, px: 2 }}>
          Pages
        </Typography>
        <List dense>
          {/* User Profile */}
          <ListItem disablePadding>
            <ListItemButton onClick={handleUserProfileClick} sx={{ px: 2, py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 20, mr: 1 }}>
                <PersonIcon sx={{ fontSize: 16, color: theme.palette.text.secondary }} />
              </ListItemIcon>
              <ListItemText primary="User Profile" sx={{ '& .MuiListItemText-primary': { fontSize: '0.875rem' } }} />
              {userProfileOpen ? <ExpandLess sx={{ fontSize: 16, color: theme.palette.text.secondary }} /> : <ExpandMore sx={{ fontSize: 16, color: theme.palette.text.secondary }} />}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/orders')} sx={{ px: 2, py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 20, mr: 1 }}>
                <AssignmentIcon sx={{ fontSize: 16, color: theme.palette.text.secondary }} />
              </ListItemIcon>
              <ListItemText primary="Order List" sx={{ '& .MuiListItemText-primary': { fontSize: '0.875rem' } }} />
            </ListItemButton>
          </ListItem>
          <Collapse in={userProfileOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding dense>
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: 4, py: 0.5 }}>
                  <ListItemText primary="Overview" sx={{ '& .MuiListItemText-primary': { fontSize: '0.875rem' } }} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: 4, py: 0.5 }}>
                  <ListItemText primary="Projects" sx={{ '& .MuiListItemText-primary': { fontSize: '0.875rem' } }} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: 4, py: 0.5 }}>
                  <ListItemText primary="Campaigns" sx={{ '& .MuiListItemText-primary': { fontSize: '0.875rem' } }} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: 4, py: 0.5 }}>
                  <ListItemText primary="Documents" sx={{ '& .MuiListItemText-primary': { fontSize: '0.875rem' } }} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: 4, py: 0.5 }}>
                  <ListItemText primary="Followers" sx={{ '& .MuiListItemText-primary': { fontSize: '0.875rem' } }} />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>

          {/* Account */}
          <ListItem disablePadding>
            <ListItemButton onClick={handleAccountClick} sx={{ px: 2, py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 20, mr: 1 }}>
                <AssignmentIcon sx={{ fontSize: 16, color: theme.palette.text.secondary }} />
              </ListItemIcon>
              <ListItemText primary="Account" sx={{ '& .MuiListItemText-primary': { fontSize: '0.875rem' } }} />
              {accountOpen ? <ExpandLess sx={{ fontSize: 16, color: '#9ca3af' }} /> : <ExpandMore sx={{ fontSize: 16, color: '#9ca3af' }} />}
            </ListItemButton>
          </ListItem>

          {/* Corporate */}
          <ListItem disablePadding>
            <ListItemButton onClick={handleCorporateClick} sx={{ px: 2, py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 20, mr: 1 }}>
                <BusinessIcon sx={{ fontSize: 16, color: '#9ca3af' }} />
              </ListItemIcon>
              <ListItemText primary="Corporate" sx={{ '& .MuiListItemText-primary': { fontSize: '0.875rem' } }} />
              {corporateOpen ? <ExpandLess sx={{ fontSize: 16, color: '#9ca3af' }} /> : <ExpandMore sx={{ fontSize: 16, color: '#9ca3af' }} />}
            </ListItemButton>
          </ListItem>

          {/* Blog */}
          <ListItem disablePadding>
            <ListItemButton onClick={handleBlogClick} sx={{ px: 2, py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 20, mr: 1 }}>
                <ArticleIcon sx={{ fontSize: 16, color: '#9ca3af' }} />
              </ListItemIcon>
              <ListItemText primary="Blog" sx={{ '& .MuiListItemText-primary': { fontSize: '0.875rem' } }} />
              {blogOpen ? <ExpandLess sx={{ fontSize: 16, color: '#9ca3af' }} /> : <ExpandMore sx={{ fontSize: 16, color: '#9ca3af' }} />}
            </ListItemButton>
          </ListItem>

          {/* Social */}
          <ListItem disablePadding>
            <ListItemButton onClick={handleSocialClick} sx={{ px: 2, py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 20, mr: 1 }}>
                <ChatIcon sx={{ fontSize: 16, color: '#9ca3af' }} />
              </ListItemIcon>
              <ListItemText primary="Social" sx={{ '& .MuiListItemText-primary': { fontSize: '0.875rem' } }} />
              {socialOpen ? <ExpandLess sx={{ fontSize: 16, color: '#9ca3af' }} /> : <ExpandMore sx={{ fontSize: 16, color: '#9ca3af' }} />}
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      </Box>
    </Drawer>
  );
};

export default LeftSidebar;
