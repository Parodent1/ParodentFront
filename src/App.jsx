import './app.css';
import Header from './components/header/Header';
<<<<<<< HEAD
=======
import { AppointmentTabsProvider } from './context/AppointmentTabsContext';
>>>>>>> 33cbe627c445291d1b8df11be8f7f3892ffaee8b
import Content from './pages/content/Content';

function App() {
  return (
    <div className='appBody'>
<<<<<<< HEAD
      <Header />
      <Content />
=======
      <AppointmentTabsProvider>
        <Header />
        <Content/>
      </AppointmentTabsProvider>
>>>>>>> 33cbe627c445291d1b8df11be8f7f3892ffaee8b
    </div>
  );
}

export default App;
