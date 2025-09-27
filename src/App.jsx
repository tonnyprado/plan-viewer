// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PlanViewer from "./PlanViewer";
import Calisthenics from "./Calisthenics";
import WeightLog from "./WeightLog";

export default function App(){
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<PlanViewer />} />
        <Route path="/calisthenics" element={<Calisthenics />} />
        <Route path="/peso" element={<WeightLog />} />
      </Routes>
    </div>
  );
}
