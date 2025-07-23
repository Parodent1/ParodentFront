import SignUp from "./pages/authPages/signUp/SignUp";
import SignIn from "./pages/authPages/signIn/SignIn";

import WeeklySchedule from "./pages/content/weeklySchedule/WeeklySchedule";
import MonthlySchedule from "./pages/content/monthlySchedule/MonthlySchedule";
import AllClients from "./pages/content/allClients/AllClients";
import PersonalCardsStuff from "./pages/content/personalCardsStuff/PersonalCardsStuff";
import "./app.css";

function App() {

  return (
    <div className="appBody">
      <SignIn />
      <SignUp />
      <WeeklySchedule />
      <MonthlySchedule />
      <AllClients/>
      <PersonalCardsStuff />
    </div>
  );
}

export default App;
