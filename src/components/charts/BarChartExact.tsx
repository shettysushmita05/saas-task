import React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

interface BarChartExactProps {
  data: any[];
  title: string;
  height?: number;
}

const BarChartExact: React.FC<BarChartExactProps> = ({
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
            {payload[0].value}M
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
          <Box sx={{ width: '100%', height }}>
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
                <Legend />
                <Bar dataKey="actuals" fill="#6366f1" radius={[4, 4, 0, 0]} />
                <Bar dataKey="projections" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </RechartsBarChart>
            </ResponsiveContainer>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BarChartExact;
