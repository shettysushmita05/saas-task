import React from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  // Legend,
} from 'recharts';
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

interface LineChartExactProps {
  data: any[];
  title: string;
  height?: number;
}

const LineChartExact: React.FC<LineChartExactProps> = ({
  data,
  title,
  height = 300,
}) => {
  const theme = useTheme();

  const CustomTooltip = ({ active, payload, label }: any) => {
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
            {label}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold', color: theme.palette.text.primary }}>
            ${payload[0].value.toLocaleString()}
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
          <Typography variant="h6" sx={{ color: theme.palette.text.primary, fontWeight: 'bold', mb: 2 }}>
            {title}
          </Typography>
          
          {/* Legend */}
          <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#1f2937' }} />
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: '0.875rem' }}>
                Current Week $58,211
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#6b7280' }} />
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: '0.875rem' }}>
                Previous Week $68,768
              </Typography>
            </Box>
          </Box>

          <Box sx={{ width: '100%', height }}>
            <ResponsiveContainer width="100%" height="100%">
              <RechartsLineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
                <XAxis
                  dataKey="name"
                  stroke={theme.palette.text.secondary}
                  fontSize={12}
                  tick={{ fill: theme.palette.text.secondary }}
                />
                <YAxis
                  stroke={theme.palette.text.secondary}
                  fontSize={12}
                  tick={{ fill: theme.palette.text.secondary }}
                  domain={[0, 30]}
                  ticks={[0, 10, 20, 30]}
                  tickFormatter={(value) => `${value}M`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="currentWeek"
                  stroke="#1f2937"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 6, stroke: '#1f2937', strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="previousWeek"
                  stroke="#6b7280"
                  strokeWidth={3}
                  strokeDasharray="5 5"
                  dot={false}
                  activeDot={{ r: 6, stroke: '#6b7280', strokeWidth: 2 }}
                />
              </RechartsLineChart>
            </ResponsiveContainer>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default LineChartExact;
