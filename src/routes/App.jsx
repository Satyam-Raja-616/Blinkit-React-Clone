import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SidebarCart from "../components/SidebarCart";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <div className="d-flex flex-grow:1 align-items-start">
        <div className="flex-grow:1">
          <Outlet />
        </div>
        
        <SidebarCart />
      </div>
      <Footer />
    </div>
  );
}

export default App;
