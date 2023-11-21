import { BrowserRouter as Link, Route, Routes} from "react-router-dom";
import Offers from "./Pages/Offers";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import ForgotPassword from "./Pages/ForgotPassword";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import RegisterProperty from "./Pages/RegisterProperty";

function App() {

  return (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/register" element={<RegisterProperty />} />
    </Routes>
  </div>
  )
}


export default App;