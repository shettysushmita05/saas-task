export const API_ENDPOINTS = {
  USERS: '/api/users',
  ANALYTICS: '/api/analytics',
  DASHBOARD: '/api/dashboard',
} as const;

export const ROUTES = {
  DASHBOARD: '/',
  USERS: '/users',
  ANALYTICS: '/analytics',
  SETTINGS: '/settings',
  NOTIFICATIONS: '/notifications',
  HELP: '/help',
} as const;

export const TABLE_CONFIG = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [5, 10, 25, 50],
  SORT_ORDERS: {
    ASC: 'asc',
    DESC: 'desc',
  },
} as const;

export const THEME_CONFIG = {
  LIGHT: 'light',
  DARK: 'dark',
  COLORS: {
    PRIMARY: '#1976d2',
    SECONDARY: '#dc004e',
    SUCCESS: '#2e7d32',
    WARNING: '#f57c00',
    ERROR: '#d32f2f',
    INFO: '#0288d1',
  },
} as const;

export const ANIMATION_CONFIG = {
  DURATION: {
    FAST: 0.2,
    NORMAL: 0.3,
    SLOW: 0.5,
  },
  EASING: {
    EASE_IN_OUT: 'ease-in-out',
    EASE_OUT: 'ease-out',
    EASE_IN: 'ease-in',
  },
} as const;

