export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  lastLogin: string;
  avatar?: string;
}

export interface ChartData {
  name: string;
  value: number;
  color?: string;
}

export interface MetricCard {
  title: string;
  value: string | number;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: string;
}

export interface TableColumn {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right' | 'left' | 'center';
  format?: (value: any) => string;
}

export interface FilterOptions {
  search: string;
  status: string;
  role: string;
  dateRange: {
    start: Date | null;
    end: Date | null;
  };
}

