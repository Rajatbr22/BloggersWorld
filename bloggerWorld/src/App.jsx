import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css';
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-slate-900 text-white">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}