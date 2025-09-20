import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: React.ReactNode;
  delay?: number;
}

const MetricCard: React.FC<MetricCardProps> = ({
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
      whileHover={{ y: -5 }}
    >
      <Card
        sx={{
          height: '100%',
          background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.action.hover} 100%)`,
          border: `1px solid ${theme.palette.divider}`,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: theme.shadows[8],
            transform: 'translateY(-2px)',
          },
        }}
      >
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box>
              <Typography
                color="text.secondary"
                gutterBottom
                variant="body2"
                sx={{ fontWeight: 500 }}
              >
                {title}
              </Typography>
              <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                {value}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                {changeType === 'increase' ? (
                  <TrendingUp size={16} color={theme.palette.success.main} />
                ) : (
                  <TrendingDown size={16} color={theme.palette.error.main} />
                )}
                <Typography
                  variant="body2"
                  sx={{
                    ml: 0.5,
                    color: changeType === 'increase' ? 'success.main' : 'error.main',
                    fontWeight: 500,
                  }}
                >
                  {change > 0 ? '+' : ''}{change}%
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                  vs last month
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

export default MetricCard;
