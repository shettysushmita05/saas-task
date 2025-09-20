import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface ThemeState {
  mode: 'light' | 'dark';
  primaryColor: string;
  secondaryColor: string;
  leftSidebarOpen: boolean;
  rightSidebarOpen: boolean;
}

const initialState: ThemeState = {
  mode: 'light',
  primaryColor: '#6366f1',
  secondaryColor: '#dc004e',
  leftSidebarOpen: true,
  rightSidebarOpen: true,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.mode = action.payload;
    },
    setPrimaryColor: (state, action: PayloadAction<string>) => {
      state.primaryColor = action.payload;
    },
    setSecondaryColor: (state, action: PayloadAction<string>) => {
      state.secondaryColor = action.payload;
    },
    toggleLeftSidebar: (state) => {
      state.leftSidebarOpen = !state.leftSidebarOpen;
    },
    toggleRightSidebar: (state) => {
      state.rightSidebarOpen = !state.rightSidebarOpen;
    },
  },
});

export const { toggleTheme, setTheme, setPrimaryColor, setSecondaryColor, toggleLeftSidebar, toggleRightSidebar } = themeSlice.actions;
export default themeSlice.reducer;
