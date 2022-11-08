import "./App.css";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
// import Logout from "./components/Logout";
import ContactList from "./components/ContactList";
// import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/login" element={<Login />}></Route> */}
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        {/* <Route path="/logout" element={<Logout />}></Route> */}
        <Route path="/contactList" element={<ContactList />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
