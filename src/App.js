
import './App.css';
import { Route, Routes } from "react-router-dom"
// import HomePage from "./components/pages/HomePage"
import ParticlesBackground from "./components/ParticlesBackground"
import SocialLinks from "./components/SocialLinks"

function App() {
  return (
    <>  
        <SocialLinks />
        <Routes>
        <Route path="/" element={<ParticlesBackground />} />
        </Routes>
    </>
  );
}

export default App;
