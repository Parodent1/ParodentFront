import './app.css';
import Header from './components/header/Header';
import { AppointmentTabsProvider } from './context/AppointmentTabsContext';
import Content from './pages/content/Content';
import { AuthProvider } from './context/AuthContext'
import PrivateRoute from '../privateRoute';

function App() {
  return (
    <AuthProvider>
    <div className='appBody'>
      <AppointmentTabsProvider>
        <PrivateRoute>
        <Header />
        <Content/>
        </PrivateRoute>
      </AppointmentTabsProvider>
    </div>
    </AuthProvider>
  );
}

export default App;
