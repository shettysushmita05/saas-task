import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  useTheme,
  Drawer,
} from '@mui/material';
import { useAppSelector } from '../../hooks';
import {
  
  BugReport as BugReportIcon,
  PersonAdd as PersonAddIcon,
  Refresh as RefreshIcon,
  Description as DescriptionIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const RightSidebar: React.FC = () => {
  const theme = useTheme();
  const { rightSidebarOpen } = useAppSelector((state) => state.theme);

  const notifications = [
    {
      icon: <BugReportIcon sx={{ fontSize: 16, color: '#ef4444' }} />,
      text: "You have a bug that needs to be fixed",
      time: "Just now"
    },
    {
      icon: <PersonAddIcon sx={{ fontSize: 16, color: '#10b981' }} />,
      text: "New user registered",
      time: "59 minutes ago"
    },
    {
      icon: <BugReportIcon sx={{ fontSize: 16, color: '#ef4444' }} />,
      text: "You have a bug that needs to be fixed",
      time: "2 hours ago"
    },
    {
      icon: <PersonAddIcon sx={{ fontSize: 16, color: '#10b981' }} />,
      text: "New user registered",
      time: "3 hours ago"
    }
  ];

  const activities = [
    {
      icon: <RefreshIcon sx={{ fontSize: 16, color: '#6366f1' }} />,
      text: "Released a new version",
      time: "Just now"
    },
    {
      icon: <BugReportIcon sx={{ fontSize: 16, color: '#ef4444' }} />,
      text: "Submitted a bug",
      time: "59 minutes ago"
    },
    {
      icon: <DescriptionIcon sx={{ fontSize: 16, color: '#f59e0b' }} />,
      text: "Created a new document",
      time: "2 hours ago"
    },
    {
      icon: <DeleteIcon sx={{ fontSize: 16, color: '#ef4444' }} />,
      text: "Deleted a file",
      time: "3 hours ago"
    }
  ];

  const contacts = [
    { name: "Natali Craig", avatar: "NC", color: "#6366f1" },
    { name: "Drew Cano", avatar: "DC", color: "#10b981" },
    { name: "Orlando Diggs", avatar: "OD", color: "#f59e0b" },
    { name: "Andi Lane", avatar: "AL", color: "#ef4444" },
    { name: "Kate Morrison", avatar: "KM", color: "#8b5cf6" },
  ];

  return (
    <Drawer
      variant="persistent"
      anchor="right"
      open={rightSidebarOpen}
      sx={{
        width: rightSidebarOpen ? 280 : 0,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 280,
          boxSizing: 'border-box',
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          borderLeft: `1px solid ${theme.palette.divider}`,
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
          overflowY: 'auto',
        }}
      >
      {/* Notifications Section */}
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ color: theme.palette.text.primary, fontWeight: 'bold', mb: 2 }}>
          Notifications
        </Typography>
        <List dense>
          {notifications.map((notification, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemButton sx={{ p: 1, borderRadius: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    {notification.icon}
                  </ListItemIcon>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" sx={{ color: theme.palette.text.primary, fontSize: '0.875rem' }}>
                      {notification.text}
                    </Typography>
                    <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontSize: '0.75rem' }}>
                      {notification.time}
                    </Typography>
                  </Box>
                </ListItemButton>
              </ListItem>
            </motion.div>
          ))}
        </List>
      </Box>

      <Divider sx={{ borderColor: '#333' }} />

      {/* Activities Section */}
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ color: theme.palette.text.primary, fontWeight: 'bold', mb: 2 }}>
          Activities
        </Typography>
        <List dense>
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: (index + 4) * 0.1 }}
            >
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemButton sx={{ p: 1, borderRadius: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    {activity.icon}
                  </ListItemIcon>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" sx={{ color: theme.palette.text.primary, fontSize: '0.875rem' }}>
                      {activity.text}
                    </Typography>
                    <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontSize: '0.75rem' }}>
                      {activity.time}
                    </Typography>
                  </Box>
                </ListItemButton>
              </ListItem>
            </motion.div>
          ))}
        </List>
      </Box>

      <Divider sx={{ borderColor: '#333' }} />

      {/* Contacts Section */}
      <Box sx={{ p: 3, flexGrow: 1 }}>
        <Typography variant="h6" sx={{ color: theme.palette.text.primary, fontWeight: 'bold', mb: 2 }}>
          Contacts
        </Typography>
        <List dense>
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: (index + 8) * 0.1 }}
            >
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemButton sx={{ p: 1, borderRadius: 1 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <Avatar sx={{ width: 32, height: 32, bgcolor: contact.color, fontSize: '0.75rem' }}>
                      {contact.avatar}
                    </Avatar>
                  </ListItemIcon>
                  <ListItemText 
                    primary={contact.name}
                    sx={{ '& .MuiListItemText-primary': { fontSize: '0.875rem', color: theme.palette.text.primary } }}
                  />
                </ListItemButton>
              </ListItem>
            </motion.div>
          ))}
        </List>
      </Box>
      </Box>
    </Drawer>
  );
};

export default RightSidebar;
