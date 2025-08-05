import './app.css';
import Header from './components/header/Header';
import { AppointmentTabsProvider } from './context/AppointmentTabsContext';
import Content from './pages/content/Content';
import { AuthProvider } from './context/AuthContext'
import PrivateRoute from '../privateRoute';
import Login from './pages/authPages/login/Login';
import PasswordRecover from './pages/authPages/passwordRecover/PasswordRecover';
import { AppointmentDateProvider } from './context/AppointmentDataContext';
import { AppointmentProvider } from './context/AppointmentContext';

function App() {
  return (
    <AuthProvider>
      <AppointmentDateProvider>
      <AppointmentProvider>
    <div className='appBody'>
      <Login/>
      <PasswordRecover/>
      <AppointmentTabsProvider>
        <PrivateRoute>
        <Header />
        <Content/>
        </PrivateRoute>
      </AppointmentTabsProvider>
    </div>
    </AppointmentProvider>
    </AppointmentDateProvider>
    </AuthProvider>
  );
}

export default App;
