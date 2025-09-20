import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Avatar,
  IconButton,
  TextField,
  InputAdornment,
  useTheme,
} from '@mui/material';
import {
  Star as StarIcon,
  Search as SearchIcon,
  Sun as SunIcon,
  Clock as ClockIcon,
  Bell as BellIcon,
  List as ListIcon,
} from 'lucide-react';
import { useAppDispatch } from '../../hooks';
import { toggleTheme, toggleLeftSidebar, toggleRightSidebar } from '../../store/slices/themeSlice';

const TopNavbar: React.FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  // const { leftSidebarOpen, rightSidebarOpen } = useAppSelector((state) => state.theme);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.divider}`,
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: 3 }}>
        {/* Left Section - User Profile and Navigation */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* User Profile */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Avatar
              sx={{
                width: 32,
                height: 32,
                bgcolor: theme.palette.primary.main,
                fontSize: '0.875rem',
              }}
            >
              B
            </Avatar>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 500,
                fontSize: '0.875rem',
              }}
            >
              ByeWind
            </Typography>
          </Box>

          {/* Separator */}
          <Box
            sx={{
              width: 1,
              height: 20,
              backgroundColor: theme.palette.success.main,
              mx: 1,
            }}
          />

          {/* Navigation Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton
              size="small"
              onClick={() => dispatch(toggleLeftSidebar())}
              sx={{
                color: theme.palette.text.secondary,
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
            >
              <ListIcon size={16} />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                color: theme.palette.text.secondary,
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
            >
              <StarIcon size={16} />
            </IconButton>
          </Box>

          {/* Breadcrumb */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: '0.875rem',
              }}
            >
              Dashboards
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: '0.875rem',
              }}
            >
              /
            </Typography>
            <Box sx={{ position: 'relative' }}>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.primary,
                  fontSize: '0.875rem',
                  fontWeight: 500,
                }}
              >
                Default
              </Typography>
              {/* Orange badge */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -8,
                  left: -8,
                  width: 16,
                  height: 12,
                  backgroundColor: '#f59e0b',
                  borderRadius: 0.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: 'white',
                    fontSize: '0.625rem',
                    fontWeight: 'bold',
                    lineHeight: 1,
                  }}
                >
                  3F
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Center Section - Search Bar */}
        <Box sx={{ flex: 1, maxWidth: 400, mx: 4 }}>
          <TextField
            placeholder="Search"
            size="small"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon size={16} color={theme.palette.text.secondary} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      color: theme.palette.text.secondary,
                      fontSize: '0.75rem',
                    }}
                  >
                    <Typography variant="caption" sx={{ fontSize: '0.75rem' }}>
                      ⌘
                    </Typography>
                    <Typography variant="caption" sx={{ fontSize: '0.75rem' }}>
                      /
                    </Typography>
                  </Box>
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: theme.palette.action.hover,
                borderRadius: 1,
                '& fieldset': {
                  border: 'none',
                },
                '&:hover fieldset': {
                  border: 'none',
                },
                '&.Mui-focused fieldset': {
                  border: 'none',
                },
              },
              '& .MuiInputBase-input': {
                color: theme.palette.text.primary,
                fontSize: '0.875rem',
                '&::placeholder': {
                  color: theme.palette.text.secondary,
                  opacity: 1,
                },
              },
            }}
          />
        </Box>

        {/* Right Section - Utility Icons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* Theme Toggle */}
          <IconButton
            size="small"
            onClick={() => dispatch(toggleTheme())}
            sx={{
              color: theme.palette.text.secondary,
              '&:hover': {
                backgroundColor: theme.palette.action.hover,
              },
            }}
          >
            <SunIcon size={16} />
          </IconButton>

          {/* Clock Icon */}
          <IconButton
            size="small"
            sx={{
              color: theme.palette.text.secondary,
              '&:hover': {
                backgroundColor: theme.palette.action.hover,
              },
            }}
          >
            <ClockIcon size={16} />
          </IconButton>

          {/* Notifications */}
          <IconButton
            size="small"
            sx={{
              color: theme.palette.text.secondary,
              '&:hover': {
                backgroundColor: theme.palette.action.hover,
              },
            }}
          >
            <BellIcon size={16} />
          </IconButton>

          {/* Right Sidebar Toggle */}
          <IconButton
            size="small"
            onClick={() => dispatch(toggleRightSidebar())}
            sx={{
              color: theme.palette.text.secondary,
              '&:hover': {
                backgroundColor: theme.palette.action.hover,
              },
            }}
          >
            <ListIcon size={16} />
          </IconButton>

          {/* Notifications Text */}
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.primary,
              fontWeight: 600,
              fontSize: '0.875rem',
              ml: 1,
            }}
          >
            Notifications
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavbar;