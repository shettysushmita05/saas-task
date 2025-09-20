import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface DashboardData {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  lastLogin: string;
  avatar?: string;
}

export interface DashboardState {
  data: DashboardData[];
  filteredData: DashboardData[];
  searchTerm: string;
  filterStatus: string;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
  currentPage: number;
  itemsPerPage: number;
  loading: boolean;
}

const initialState: DashboardState = {
  data: [],
  filteredData: [],
  searchTerm: '',
  filterStatus: 'all',
  sortBy: 'name',
  sortOrder: 'asc',
  currentPage: 1,
  itemsPerPage: 10,
  loading: false,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<DashboardData[]>) => {
      state.data = action.payload;
      state.filteredData = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setFilterStatus: (state, action: PayloadAction<string>) => {
      state.filterStatus = action.payload;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<'asc' | 'desc'>) => {
      state.sortOrder = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    applyFilters: (state) => {
      let filtered = [...state.data];
      
      // Apply search filter
      if (state.searchTerm) {
        filtered = filtered.filter(item =>
          item.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          item.email.toLowerCase().includes(state.searchTerm.toLowerCase())
        );
      }
      
      // Apply status filter
      if (state.filterStatus !== 'all') {
        filtered = filtered.filter(item => item.status === state.filterStatus);
      }
      
      // Apply sorting
      filtered.sort((a, b) => {
        const aValue = a[state.sortBy as keyof DashboardData] || '';
        const bValue = b[state.sortBy as keyof DashboardData] || '';
        
        if (state.sortOrder === 'asc') {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });
      
      state.filteredData = filtered;
    },
  },
});

export const {
  setData,
  setSearchTerm,
  setFilterStatus,
  setSortBy,
  setSortOrder,
  setCurrentPage,
  setItemsPerPage,
  setLoading,
  applyFilters,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
