import SignUp from "./pages/signUp/SignUp"
import SignIn from "./pages/signIn/SignIn"

import WeeklySchedule from "./pages/weeklySchedule/WeeklySchedule"
import Reception from "./pages/reception/Reception"
import MonthlySchedule from "./pages/monthlySchedule/MonthlySchedule"
import './app.css'

function App() {

  return (
    <div className="appBody">
      <SignIn/>
      <SignUp/>
      <WeeklySchedule/>
      <MonthlySchedule/>
      {/* <Reception/> */}
    </div>
  )
}

export default App
