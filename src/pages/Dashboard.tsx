import React, { useEffect } from 'react';
import {
  Grid,
  Box,
  Typography,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Users, TrendingUp, DollarSign, Activity } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setData, applyFilters } from '../store/slices/dashboardSlice';
import MetricCard from '../components/dashboard/MetricCard';
import LineChart from '../components/charts/LineChart';
import PieChart from '../components/charts/PieChart';
import DataTable from '../components/ui/DataTable';
import type { User } from '../types';

// Mock data
const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    status: 'active',
    lastLogin: '2024-01-15',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'User',
    status: 'active',
    lastLogin: '2024-01-14',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    role: 'Moderator',
    status: 'inactive',
    lastLogin: '2024-01-10',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: '4',
    name: 'Alice Brown',
    email: 'alice.brown@example.com',
    role: 'User',
    status: 'pending',
    lastLogin: '2024-01-12',
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
  {
    id: '5',
    name: 'Charlie Wilson',
    email: 'charlie.wilson@example.com',
    role: 'Admin',
    status: 'active',
    lastLogin: '2024-01-15',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
];

const chartData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
];

const pieData = [
  { name: 'Active', value: 65, count: 325 },
  { name: 'Inactive', value: 25, count: 125 },
  { name: 'Pending', value: 10, count: 50 },
];

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.dashboard);

  useEffect(() => {
    // Simulate loading data
    dispatch(setData(mockUsers));
    dispatch(applyFilters());
  }, [dispatch]);

  const handleEditUser = (user: User) => {
    console.log('Edit user:', user);
  };

  const handleDeleteUser = (user: User) => {
    console.log('Delete user:', user);
  };

  const handleViewUser = (user: User) => {
    console.log('View user:', user);
  };

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          Dashboard Overview
        </Typography>
      </motion.div>

      {/* Metrics Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <MetricCard
            title="Total Users"
            value="1,234"
            change={12.5}
            changeType="increase"
            icon={<Users size={24} />}
            delay={0}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <MetricCard
            title="Revenue"
            value="$45,678"
            change={8.2}
            changeType="increase"
            icon={<DollarSign size={24} />}
            delay={0.1}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <MetricCard
            title="Growth Rate"
            value="23.4%"
            change={-2.1}
            changeType="decrease"
            icon={<TrendingUp size={24} />}
            delay={0.2}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <MetricCard
            title="Active Sessions"
            value="567"
            change={15.3}
            changeType="increase"
            icon={<Activity size={24} />}
            delay={0.3}
          />
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <LineChart
            data={chartData}
            title="Revenue Trend"
            dataKey="value"
            xAxisKey="name"
            color={theme.palette.primary.main}
            height={350}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <PieChart
            data={pieData}
            title="User Status Distribution"
            dataKey="value"
            nameKey="name"
            height={350}
          />
        </Grid>
      </Grid>

      {/* Data Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
          Recent Users
        </Typography>
        <DataTable
          data={data}
          onEdit={handleEditUser}
          onDelete={handleDeleteUser}
          onView={handleViewUser}
        />
      </motion.div>
    </Box>
  );
};

export default Dashboard;
