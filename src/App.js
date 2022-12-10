import Home from "./pages/Home";
import LoggedIn from "./pages/LoggedIn";
// import LoginButton from "./components/login";
// import LogoutButton from "./components/logout";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";    

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route 
            path="/loggedin" 
            element={<LoggedIn/>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
