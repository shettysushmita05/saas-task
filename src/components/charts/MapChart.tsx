import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';

interface MapChartProps {
  title: string;
  locations: Array<{
    name: string;
    revenue: string;
  }>;
}

const MapChart: React.FC<MapChartProps> = ({ title, locations }) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        sx={{
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 2,
        }}
      >
        <CardContent>
          <Typography variant='h6' sx={{ color: theme.palette.text.primary, fontWeight: 'bold', mb: 2 }}>
            {title}
          </Typography>
          
          {/* Simple Map Representation */}
          <Box
            sx={{
              width: '100%',
              height: 200,
              backgroundColor: theme.palette.action.hover,
              borderRadius: 1,
              border: `1px solid ${theme.palette.divider}`,
              
              position: 'relative',
              mb: 2,
              overflow: 'hidden',
            }}
          >
            {/* Simple world map representation */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                height: '80%',
                backgroundColor: theme.palette.divider,
                
                borderRadius: '50%',
                opacity: 0.3,
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '30%',
                left: '20%',
                width: 8,
                height: 8,
                backgroundColor: '#6366f1',
                borderRadius: '50%',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '40%',
                left: '15%',
                width: 8,
                height: 8,
                backgroundColor: '#10b981',
                borderRadius: '50%',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '60%',
                left: '80%',
                width: 8,
                height: 8,
                backgroundColor: '#f59e0b',
                borderRadius: '50%',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '75%',
                width: 8,
                height: 8,
                backgroundColor: '#ef4444',
                borderRadius: '50%',
              }}
            />
          </Box>

          {/* Location List */}
          <List dense>
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant='body2' sx={{ color: theme.palette.text.primary, fontSize: '0.875rem' }}>
                          {location.name}
                        </Typography>
                        <Typography variant='body2' sx={{ color: theme.palette.text.secondary, fontSize: '0.875rem' }}>
                          {location.revenue}
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>
              </motion.div>
            ))}
          </List>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MapChart;
