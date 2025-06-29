import SignUp from "./pages/signUp/SignUp"
import SignIn from "./pages/signIn/SignIn"

import WeeklySchedule from "./pages/weeklySchedule/WeeklySchedule"
import './app.css'

function App() {

  return (
    <div className="appBody">
      <SignIn/>
      <SignUp/>
      <WeeklySchedule/>
    </div>
  )
}

export default App
