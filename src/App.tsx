import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import NotificationContainer from './components/NotificationContainer';
import NotificationScheduler from './components/NotificationScheduler';
import { NotificationProvider } from './contexts/NotificationContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LibraryProvider } from './contexts/LibraryContext';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

function App() {
  return (
    <AuthProvider>
      <LibraryProvider>
        <NotificationProvider>
          <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50/20">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route 
                path="/" 
                element={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                } 
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <NotificationContainer />
            <NotificationScheduler />
          </div>
        </NotificationProvider>
      </LibraryProvider>
    </AuthProvider>
  );
}

export default App;
