import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  useTheme,
} from '@mui/material';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface MetricCardExactProps {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: React.ReactNode;
  delay?: number;
}

const MetricCardExact: React.FC<MetricCardExactProps> = ({
  title,
  value,
  change,
  changeType,
  icon,
  delay = 0,
}) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -2 }}
    >
      <Card
        sx={{
          height: '100%',
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 2,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: theme.shadows[4],
            transform: 'translateY(-2px)',
          },
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="body2"
                sx={{ 
                  color: theme.palette.text.secondary, 
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  mb: 1
                }}
              >
                {title}
              </Typography>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 'bold',
                  color: theme.palette.text.primary,
                  fontSize: '2rem',
                  mb: 1
                }}
              >
                {value}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {changeType === 'increase' ? (
                  <TrendingUp size={16} color="#10b981" />
                ) : (
                  <TrendingDown size={16} color="#ef4444" />
                )}
                <Typography
                  variant="body2"
                  sx={{
                    ml: 0.5,
                    color: changeType === 'increase' ? theme.palette.success.main : theme.palette.error.main,
                    fontWeight: 500,
                    fontSize: '0.875rem',
                  }}
                >
                  {change}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                backgroundColor: theme.palette.primary.main,
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: 48,
                height: 48,
              }}
            >
              {icon}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MetricCardExact;
