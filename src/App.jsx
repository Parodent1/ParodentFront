import './app.css';
import Header from './components/header/Header';
import { AppointmentTabsProvider } from './context/AppointmentTabsContext';
import Content from './pages/content/Content';
import Login from './pages/authPages/login/Login';
import PasswordRecover from './pages/authPages/passwordRecover/PasswordRecover';

function App() {
  return (
    <div className='appBody'>
      {/* <Login/>
      <PasswordRecover/> */}
      <AppointmentTabsProvider>
        <Header />
        <Content/>
      </AppointmentTabsProvider>
    </div>
  );
}

export default App;
