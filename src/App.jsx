import './app.css';
import Header from './components/header/Header';
import { AppointmentTabsProvider } from './context/AppointmentTabsContext';
import Content from './pages/content/Content';

function App() {
  return (
    <div className='appBody'>
      <AppointmentTabsProvider>
        <Header />
        <Content/>
      </AppointmentTabsProvider>
    </div>
  );
}

export default App;
