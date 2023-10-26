import Home from './Home';
import Header from "./components/Header";
import Footer from './components/Footer'
import Services from "./Services"
import Vision from './Vision';
import OnlineDr from './OnlineDr';
import Dataset from './Dataset';
import Framework from './Framework';
import Mentorship from './Mentorship';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SwaasthyaSathi from './SwaasthyaSathi';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/SwaasthyaSathi" element={<SwaasthyaSathi />} />
          <Route path="/services" element={<Services />} />
          <Route path="/onlinedr" element={<OnlineDr />} />
          <Route path="/dataset" element={<Dataset />} />
          <Route path="/framework" element={<Framework />} />
          <Route path="/mentorship" element={<Mentorship />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
