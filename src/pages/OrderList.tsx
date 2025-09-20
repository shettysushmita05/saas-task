import React, { useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Checkbox,
  Avatar,
  // Chip,
  IconButton,
  useTheme,
} from '@mui/material';
import {
  Add as AddIcon,
  FilterList as FilterIcon,
  Sort as SortIcon,
  Search as SearchIcon,
  MoreVert as MoreVertIcon,
  CalendarToday as CalendarIcon,
  Description as DescriptionIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

interface Order {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  project: string;
  address: string;
  date: string;
  status: 'In Progress' | 'Complete' | 'Pending' | 'Approved' | 'Rejected';
  hasDocument?: boolean;
}

const OrderList: React.FC = () => {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Mock data matching the design
  const orders: Order[] = [
    {
      id: '#CM9801',
      user: { name: 'Natali Craig', avatar: 'NC' },
      project: 'Landing Page',
      address: 'Meadow Lane Oakland',
      date: 'Just now',
      status: 'In Progress',
    },
    {
      id: '#CM9802',
      user: { name: 'Drew Cano', avatar: 'DC' },
      project: 'E-commerce',
      address: 'Meadow Lane Oakland',
      date: 'A minute ago',
      status: 'Complete',
    },
    {
      id: '#CM9803',
      user: { name: 'Orlando Diggs', avatar: 'OD' },
      project: 'Mobile App',
      address: 'Meadow Lane Oakland',
      date: 'Yesterday',
      status: 'Pending',
    },
    {
      id: '#CM9804',
      user: { name: 'Andi Lane', avatar: 'AL' },
      project: 'Website Redesign',
      address: 'Meadow Lane Oakland',
      date: 'Feb 2, 2023',
      status: 'Approved',
    },
    {
      id: '#CM9805',
      user: { name: 'Kate Morrison', avatar: 'KM' },
      project: 'Dashboard',
      address: 'Meadow Lane Oakland',
      date: 'Feb 1, 2023',
      status: 'Rejected',
      hasDocument: true,
    },
    // Duplicate entries to match the design
    {
      id: '#CM9801',
      user: { name: 'Natali Craig', avatar: 'NC' },
      project: 'Landing Page',
      address: 'Meadow Lane Oakland',
      date: 'Just now',
      status: 'In Progress',
    },
    {
      id: '#CM9802',
      user: { name: 'Drew Cano', avatar: 'DC' },
      project: 'E-commerce',
      address: 'Meadow Lane Oakland',
      date: 'A minute ago',
      status: 'Complete',
    },
    {
      id: '#CM9803',
      user: { name: 'Orlando Diggs', avatar: 'OD' },
      project: 'Mobile App',
      address: 'Meadow Lane Oakland',
      date: 'Yesterday',
      status: 'Pending',
    },
    {
      id: '#CM9804',
      user: { name: 'Andi Lane', avatar: 'AL' },
      project: 'Website Redesign',
      address: 'Meadow Lane Oakland',
      date: 'Feb 2, 2023',
      status: 'Approved',
    },
    {
      id: '#CM9805',
      user: { name: 'Kate Morrison', avatar: 'KM' },
      project: 'Dashboard',
      address: 'Meadow Lane Oakland',
      date: 'Feb 1, 2023',
      status: 'Rejected',
      hasDocument: true,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress':
        return '#3b82f6';
      case 'Complete':
        return '#10b981';
      case 'Pending':
        return '#06b6d4';
      case 'Approved':
        return '#f59e0b';
      case 'Rejected':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedOrders = orders.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ p: 3, backgroundColor: 'transparent', minHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" sx={{ color: 'inherit', fontWeight: 'bold', mb: 3 }}>
          Order List
        </Typography>
      </motion.div>

      {/* Action Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton sx={{ color: 'white', backgroundColor: '#2a2a2a', '&:hover': { backgroundColor: '#333' } }}>
              <AddIcon />
            </IconButton>
            <IconButton sx={{ color: 'white', backgroundColor: '#2a2a2a', '&:hover': { backgroundColor: '#333' } }}>
              <FilterIcon />
            </IconButton>
            <IconButton sx={{ color: 'white', backgroundColor: '#2a2a2a', '&:hover': { backgroundColor: '#333' } }}>
              <SortIcon />
            </IconButton>
          </Box>
          
          <Box
            sx={{
              position: 'relative',
              borderRadius: 1,
              backgroundColor: theme.palette.action.hover,
              border: `1px solid ${theme.palette.divider}`,
              width: 200,
            }}
          >
            <Box
              sx={{
                padding: '8px 12px',
                display: 'flex',
                alignItems: 'center',
                pointerEvents: 'none',
              }}
            >
              <SearchIcon sx={{ color: theme.palette.text.secondary, mr: 1, fontSize: 20 }} />
              <input
                placeholder="Search"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: theme.palette.text.primary,
                  fontSize: '0.875rem',
                  width: '100%',
                  outline: 'none',
                }}
              />
            </Box>
          </Box>
        </Box>
      </motion.div>

      {/* Data Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <TableContainer 
          component={Paper} 
          sx={{ 
            backgroundColor: theme.palette.background.paper, 
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 2,
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: theme.palette.text.secondary, borderColor: theme.palette.divider, fontSize: '0.875rem' }}>
                  <Checkbox sx={{ color: theme.palette.text.secondary }} />
                </TableCell>
                <TableCell sx={{ color: theme.palette.text.secondary, borderColor: theme.palette.divider, fontSize: '0.875rem' }}>
                  Order ID
                </TableCell>
                <TableCell sx={{ color: theme.palette.text.secondary, borderColor: theme.palette.divider, fontSize: '0.875rem' }}>
                  User
                </TableCell>
                <TableCell sx={{ color: theme.palette.text.secondary, borderColor: theme.palette.divider, fontSize: '0.875rem' }}>
                  Project
                </TableCell>
                <TableCell sx={{ color: theme.palette.text.secondary, borderColor: theme.palette.divider, fontSize: '0.875rem' }}>
                  Address
                </TableCell>
                <TableCell sx={{ color: theme.palette.text.secondary, borderColor: theme.palette.divider, fontSize: '0.875rem' }}>
                  Date
                </TableCell>
                <TableCell sx={{ color: theme.palette.text.secondary, borderColor: theme.palette.divider, fontSize: '0.875rem' }}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedOrders.map((order, index) => (
                <TableRow
                  key={`${order.id}-${index}`}
                  hover
                  sx={{
                      '&:hover': {
                        backgroundColor: theme.palette.action.hover,
                      },
                  }}
                >
                  <TableCell sx={{ borderColor: theme.palette.divider }}>
                    <Checkbox 
                      sx={{ color: theme.palette.text.secondary }}
                      checked={order.id === '#CM9804'}
                    />
                  </TableCell>
                    <TableCell sx={{ color: theme.palette.text.primary, borderColor: theme.palette.divider, fontSize: '0.875rem' }}>
                    {order.id}
                  </TableCell>
                  <TableCell sx={{ borderColor: '#333' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar sx={{ width: 32, height: 32, bgcolor: '#6366f1', fontSize: '0.75rem' }}>
                        {order.user.avatar}
                      </Avatar>
                      <Typography variant="body2" sx={{ color: 'white', fontSize: '0.875rem' }}>
                        {order.user.name}
                      </Typography>
                    </Box>
                  </TableCell>
                    <TableCell sx={{ color: theme.palette.text.primary, borderColor: theme.palette.divider, fontSize: '0.875rem' }}>
                    {order.project}
                  </TableCell>
                  <TableCell sx={{ borderColor: '#333' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="body2" sx={{ color: 'white', fontSize: '0.875rem' }}>
                        {order.address}
                      </Typography>
                      {order.hasDocument && (
                        <DescriptionIcon sx={{ fontSize: 16, color: '#9ca3af' }} />
                      )}
                    </Box>
                  </TableCell>
                  <TableCell sx={{ borderColor: '#333' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CalendarIcon sx={{ fontSize: 16, color: '#9ca3af' }} />
                      <Typography variant="body2" sx={{ color: 'white', fontSize: '0.875rem' }}>
                        {order.date}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ borderColor: '#333' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          backgroundColor: getStatusColor(order.status),
                        }}
                      />
                      <Typography variant="body2" sx={{ color: 'white', fontSize: '0.875rem' }}>
                        {order.status}
                      </Typography>
                      {order.status === 'Rejected' && (
                        <IconButton size="small" sx={{ color: '#9ca3af' }}>
                          <MoreVertIcon sx={{ fontSize: 16 }} />
                        </IconButton>
                      )}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={orders.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{
              color: 'white',
              borderTop: '1px solid #333',
              '& .MuiTablePagination-toolbar': {
                color: 'white',
              },
              '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows': {
                color: 'white',
              },
              '& .MuiIconButton-root': {
                color: 'white',
              },
            }}
          />
        </TableContainer>
      </motion.div>
    </Box>
  );
};

export default OrderList;
