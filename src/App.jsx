import SignUp from "./pages/signUp/SignUp"
import SignIn from "./pages/signIn/SignIn"

import WeeklySchedule from "./pages/weeklySchedule/WeeklySchedule"
import Reception from "./pages/reception/Reception"
import MonthlySchedule from "./pages/monthlySchedule/MonthlySchedule"
import AllClients from "./pages/allClients/AllClients"
import PersonalCardsStuff from "./pages/personalCardsStuff/PersonalCardsStuff"
import './app.css'

function App() {

  return (
    <div className="appBody">
      <SignIn/>
      <SignUp/>
      <WeeklySchedule/>
      <MonthlySchedule/>
      <AllClients/>
    <PersonalCardsStuff/>
      {/* <Reception/> */}
    </div>
  )
}

export default App
