import { Route, Routes, Navigate } from 'react-router-dom';
import CalendarPage from './pages/calendar/CalendarPage';
import DashboardPage from './pages/dashboard/DashboardPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/calendar" replace />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
