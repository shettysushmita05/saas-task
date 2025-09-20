import React, { useState, useEffect } from 'react';
import {
  Grid,
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import { Search, FilterList, Add } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setData, setSearchTerm, setFilterStatus, applyFilters } from '../store/slices/dashboardSlice';
import DataTable from '../components/ui/DataTable';
import type { User } from '../types';

// Extended mock data
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
  {
    id: '6',
    name: 'Diana Prince',
    email: 'diana.prince@example.com',
    role: 'User',
    status: 'active',
    lastLogin: '2024-01-13',
    avatar: 'https://i.pravatar.cc/150?img=6',
  },
  {
    id: '7',
    name: 'Eve Adams',
    email: 'eve.adams@example.com',
    role: 'Moderator',
    status: 'inactive',
    lastLogin: '2024-01-08',
    avatar: 'https://i.pravatar.cc/150?img=7',
  },
  {
    id: '8',
    name: 'Frank Miller',
    email: 'frank.miller@example.com',
    role: 'User',
    status: 'pending',
    lastLogin: '2024-01-11',
    avatar: 'https://i.pravatar.cc/150?img=8',
  },
];

const Users: React.FC = () => {
  const dispatch = useAppDispatch();
  const { searchTerm, filterStatus, filteredData } = useAppSelector((state) => state.dashboard);
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  useEffect(() => {
    dispatch(setData(mockUsers));
    dispatch(applyFilters());
  }, [dispatch]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLocalSearchTerm(value);
    dispatch(setSearchTerm(value));
    dispatch(applyFilters());
  };

  const handleStatusFilterChange = (event: any) => {
    const value = event.target.value;
    dispatch(setFilterStatus(value));
    dispatch(applyFilters());
  };

  const handleEditUser = (user: User) => {
    console.log('Edit user:', user);
  };

  const handleDeleteUser = (user: User) => {
    console.log('Delete user:', user);
  };

  const handleViewUser = (user: User) => {
    console.log('View user:', user);
  };

  const handleAddUser = () => {
    console.log('Add new user');
  };

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            User Management
          </Typography>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={handleAddUser}
            sx={{
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 500,
            }}
          >
            Add User
          </Button>
        </Box>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Grid container spacing={3} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  placeholder="Search users..."
                  value={localSearchTerm}
                  onChange={handleSearchChange}
                  InputProps={{
                    startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />,
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                    },
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <FormControl fullWidth>
                  <InputLabel>Status</InputLabel>
                  <Select
                    value={filterStatus}
                    label="Status"
                    onChange={handleStatusFilterChange}
                    sx={{ borderRadius: 2 }}
                  >
                    <MenuItem value="all">All Status</MenuItem>
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="inactive">Inactive</MenuItem>
                    <MenuItem value="pending">Pending</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <Button
                  variant="outlined"
                  startIcon={<FilterList />}
                  fullWidth
                  sx={{
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 500,
                  }}
                >
                  More Filters
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </motion.div>

      {/* Data Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <DataTable
          data={filteredData}
          onEdit={handleEditUser}
          onDelete={handleDeleteUser}
          onView={handleViewUser}
        />
      </motion.div>
    </Box>
  );
};

export default Users;
