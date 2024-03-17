import Aboutpage from "./Components/Body/Aboutpage.jsx";
import Navbar from "./Components/Header/Navbar";
import Homepage from "./Components/Body/Homepage.jsx";
import TechStack from "./Components/Body/TechStack.jsx";
import Sidebar from "./Components/Header/Sidebar.jsx";
import Projects from "./Components/Body/Projects.jsx";
import Contact from "./Components/Body/Contact.jsx";
function App() {
  return (
    <div>
       <Navbar/>
       <Sidebar/>
       <Homepage/>
       <Aboutpage/>
       <TechStack/>
       <Projects/>
       <Contact/>
      
    </div>
  );
}

export default App;
