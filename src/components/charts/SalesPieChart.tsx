import React from 'react';
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  // Legend,
} from 'recharts';
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

interface SalesPieChartProps {
  title: string;
  data: any[];
  centerValue: string;
}

const SalesPieChart: React.FC<SalesPieChartProps> = ({
  title,
  data,
  centerValue,
}) => {
  const theme = useTheme();

  const colors = ['#8b5cf6', '#6366f1', '#10b981', '#f59e0b', '#ef4444'];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <Box
          sx={{
            backgroundColor: theme.palette.background.paper,
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 2,
            p: 2,
            boxShadow: theme.shadows[4],
          }}
        >
          <Typography variant="body2" color={theme.palette.text.secondary}>
            {payload[0].name}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold', color: theme.palette.text.primary }}>
            ${payload[0].value}
          </Typography>
        </Box>
      );
    }
    return null;
  };

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
          
          <Box sx={{ width: '100%', height: 300, position: 'relative' }}>
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </RechartsPieChart>
            </ResponsiveContainer>
            
            {/* Center Text */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
              }}
            >
              <Typography variant='h4' sx={{ color: theme.palette.text.primary, fontWeight: 'bold' }}>
                {centerValue}
              </Typography>
            </Box>
          </Box>

          {/* Legend */}
          <Box sx={{ mt: 2 }}>
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      backgroundColor: colors[index % colors.length],
                      mr: 1,
                    }}
                  />
                  <Typography variant='body2' sx={{ color: theme.palette.text.primary, fontSize: '0.875rem' }}>
                    {item.name} ${item.value}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SalesPieChart;
