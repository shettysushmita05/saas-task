import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './store';
import { useAppSelector } from './hooks';
import { lightTheme, darkTheme } from './styles/theme';
import Layout from './components/layout/Layout';
import ECommerceDashboard from './pages/eCommerceDashboard';
import OrderList from './pages/OrderList';

const AppContent: React.FC = () => {
  const { mode } = useAppSelector((state) => state.theme);
  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<ECommerceDashboard />} />
            <Route path="/orders" element={<OrderList />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
