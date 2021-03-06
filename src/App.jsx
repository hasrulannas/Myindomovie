import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import MovielistPage from "./pages/Movielist";
import SignInPage from "./pages/SignIn";
import DetailPage from "./pages/Details";
import HelpPage from "./pages/Help";
import { Route, Routes } from 'react-router-dom';
import NavBarComp from "./components/NavBarComp";
import Footer from "./components/FooterComp";
import './assets/css/App.css'

function App() {
  return (
    <div className="my-component">
      <NavBarComp />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/movies" element={<MovielistPage />}></Route>
        <Route path="/register" element={<SignInPage />}></Route>
        <Route path="/details" element={<DetailPage />}></Route>
        <Route path="/help" element={<HelpPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
