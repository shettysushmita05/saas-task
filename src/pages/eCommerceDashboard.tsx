import React from 'react';
import {
  Grid,
  Box,
  Typography,
  
} from '@mui/material';
import { motion } from 'framer-motion';
import { Users, ShoppingCart, DollarSign, TrendingUp } from 'lucide-react';
import MetricCardExact from '../components/dashboard/MetricCardExact';
import BarChartExact from '../components/charts/BarChartExact';
import LineChartExact from '../components/charts/LineChartExact';
import MapChart from '../components/charts/MapChart';
import ProductsTable from '../components/charts/ProductsTable';
import SalesPieChart from '../components/charts/SalesPieChart';

const ECommerceDashboard: React.FC = () => {
  // const theme = useTheme();

  // Mock data matching the design
  const projectionsData = [
    { name: 'Jan', actuals: 12, projections: 15 },
    { name: 'Feb', actuals: 19, projections: 18 },
    { name: 'Mar', actuals: 3, projections: 8 },
    { name: 'Apr', actuals: 5, projections: 12 },
    { name: 'May', actuals: 2, projections: 6 },
    { name: 'Jun', actuals: 3, projections: 8 },
  ];

  const revenueData = [
    { name: 'Jan', currentWeek: 10, previousWeek: 12 },
    { name: 'Feb', currentWeek: 15, previousWeek: 18 },
    { name: 'Mar', currentWeek: 8, previousWeek: 10 },
    { name: 'Apr', currentWeek: 12, previousWeek: 15 },
    { name: 'May', currentWeek: 6, previousWeek: 8 },
    { name: 'Jun', currentWeek: 8, previousWeek: 10 },
  ];

  const locations = [
    { name: 'New York', revenue: '72K' },
    { name: 'San Francisco', revenue: '39K' },
    { name: 'Sydney', revenue: '25K' },
    { name: 'Singapore', revenue: '61K' },
  ];

  const products = [
    { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
    { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
    { name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
    { name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
    { name: 'Marco Shoes', price: '$28.75', quantity: 69, amount: '$1,983.75' },
  ];

  const salesData = [
    { name: 'Direct', value: 300.56 },
    { name: 'Affiliate', value: 135.18 },
    { name: 'Sponsored', value: 154.02 },
    { name: 'E-mail', value: 48.96 },
  ];

  return (
    <Box sx={{ p: 3, backgroundColor: 'transparent', minHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" sx={{ color: 'inherit', fontWeight: 'bold', mb: 3 }}>
          eCommerce
        </Typography>
      </motion.div>

      {/* Metrics Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <MetricCardExact
            title="Customers"
            value="3,781"
            change="+11.01%"
            changeType="increase"
            icon={<Users size={24} />}
            delay={0}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <MetricCardExact
            title="Orders"
            value="1,219"
            change="-0.03%"
            changeType="decrease"
            icon={<ShoppingCart size={24} />}
            delay={0.1}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <MetricCardExact
            title="Revenue"
            value="$695"
            change="+15.03%"
            changeType="increase"
            icon={<DollarSign size={24} />}
            delay={0.2}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <MetricCardExact
            title="Growth"
            value="30.1%"
            change="+6.08%"
            changeType="increase"
            icon={<TrendingUp size={24} />}
            delay={0.3}
          />
        </Grid>
      </Grid>

      {/* Charts Row 1 */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <BarChartExact
            data={projectionsData}
            title="Projections vs Actuals"
            height={350}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <MapChart
            title="Revenue by Location"
            locations={locations}
          />
        </Grid>
      </Grid>

      {/* Charts Row 2 */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <LineChartExact
            data={revenueData}
            title="Revenue"
            height={350}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <SalesPieChart
            title="Total Sales"
            data={salesData}
            centerValue="38.6%"
          />
        </Grid>
      </Grid>

      {/* Bottom Row */}
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          <ProductsTable
            title="Top Selling Products"
            products={products}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          {/* Empty space or additional content */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ECommerceDashboard;
