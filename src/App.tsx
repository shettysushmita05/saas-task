import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { useAppSelector } from './hooks';
import Layout from './components/layout/Layout';
import ECommerceDashboard from './pages/eCommerceDashboard';
import OrderList from './pages/OrderList';
import Users from './pages/Users';

const AppContent: React.FC = () => {
  const { mode } = useAppSelector((state) => state.theme);

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  return (
    <div className={mode === 'dark' ? 'dark' : ''}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<ECommerceDashboard />} />
            <Route path="/orders" element={<OrderList />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </Layout>
      </Router>
    </div>
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