import Aboutpage from "./Components/Body/Aboutpage.jsx";
import Navbar from "./Components/Header/Navbar";
import Homepage from "./Components/Body/Homepage.jsx";
import TechStack from "./Components/Body/TechStack.jsx";
import Sidebar from "./Components/Header/Sidebar.jsx";
function App() {
  return (
    <div>
       <Navbar/>
       <Sidebar/>
       <Homepage/>
       <Aboutpage/>
       <TechStack/>
      
    </div>
  );
}

export default App;
