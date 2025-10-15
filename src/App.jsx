import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar/>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/watchlist" element={<Watchlist/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/profile" element={<Profile/>}/>
          </Routes>
          <Footer/>
        </main>
      </div>
    </Router>
  )
}

export default App;