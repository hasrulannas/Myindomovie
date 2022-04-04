import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import MovielistPage from "./pages/Movielist";
import SignInPage from "./pages/SignIn";
import { Route, Routes } from 'react-router-dom';
import NavBarComp from "./components/NavBarComp";

function App() {
  return (
    <div>
      <container>
        <NavBarComp />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/movies" element={<MovielistPage />}></Route>
          <Route path="/register" element={<SignInPage />}></Route>
        </Routes>
      </container>
    </div>
  );
}

export default App;
