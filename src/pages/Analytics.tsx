import React from 'react';
import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { BarChart3, PieChart as PieChartIcon, TrendingUp, Users } from 'lucide-react';
import LineChart from '../components/charts/LineChart';
import PieChart from '../components/charts/PieChart';

const Analytics: React.FC = () => {
  const theme = useTheme();

  const revenueData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 2000 },
    { name: 'Apr', value: 2780 },
    { name: 'May', value: 1890 },
    { name: 'Jun', value: 2390 },
    { name: 'Jul', value: 3490 },
    { name: 'Aug', value: 4200 },
    { name: 'Sep', value: 3800 },
    { name: 'Oct', value: 4500 },
    { name: 'Nov', value: 5200 },
    { name: 'Dec', value: 4800 },
  ];

  const userGrowthData = [
    { name: 'Jan', value: 100 },
    { name: 'Feb', value: 150 },
    { name: 'Mar', value: 200 },
    { name: 'Apr', value: 250 },
    { name: 'May', value: 300 },
    { name: 'Jun', value: 350 },
    { name: 'Jul', value: 400 },
  ];

  const deviceData = [
    { name: 'Desktop', value: 45, count: 450 },
    { name: 'Mobile', value: 35, count: 350 },
    { name: 'Tablet', value: 20, count: 200 },
  ];

  const trafficData = [
    { name: 'Direct', value: 40, count: 400 },
    { name: 'Organic', value: 30, count: 300 },
    { name: 'Social', value: 20, count: 200 },
    { name: 'Referral', value: 10, count: 100 },
  ];

  const StatCard = ({ title, value, icon, color }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
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
              <Typography color="text.secondary" gutterBottom variant="body2">
                {title}
              </Typography>
              <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                {value}
              </Typography>
            </Box>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                backgroundColor: color,
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

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          Analytics Dashboard
        </Typography>
      </motion.div>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Total Revenue"
            value="$125,430"
            icon={<TrendingUp size={24} />}
            color={theme.palette.primary.main}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Active Users"
            value="12,543"
            icon={<Users size={24} />}
            color={theme.palette.secondary.main}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Page Views"
            value="2.4M"
            icon={<BarChart3 size={24} />}
            color={theme.palette.success.main}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Conversion Rate"
            value="3.2%"
            icon={<PieChartIcon size={24} />}
            color={theme.palette.warning.main}
          />
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <LineChart
            data={revenueData}
            title="Monthly Revenue"
            dataKey="value"
            xAxisKey="name"
            color={theme.palette.primary.main}
            height={400}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <PieChart
            data={deviceData}
            title="Device Distribution"
            dataKey="value"
            nameKey="name"
            height={400}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          <LineChart
            data={userGrowthData}
            title="User Growth"
            dataKey="value"
            xAxisKey="name"
            color={theme.palette.secondary.main}
            height={400}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <PieChart
            data={trafficData}
            title="Traffic Sources"
            dataKey="value"
            nameKey="name"
            height={400}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analytics;
