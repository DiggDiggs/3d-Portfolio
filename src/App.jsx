import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact /> {/* Add the Contact component if needed */}
        <StarsCanvas /> {/* Adjust the placement as needed */}
      </div>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        {/* This div might be redundant or could be used for additional styling */}
      </div>
    </BrowserRouter>
  );
};

export default App;
