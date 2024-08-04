import "./App.css";
import Hotels from "./components/hotel-show-section/hotels";
import Layout from "./components/layout/layout";
import HotelDetails from "./pages/hotel-detail/hotelDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Cookies from 'js-cookie';
function App() {
 


  return (

    <Layout>
      <div className="w-[100%] flex flex-col">
        <Router>
          <Routes>
            <Route path="/" element={<Hotels />} />
            <Route path="/hotel/:id" element={<HotelDetails />} />
          </Routes>
        </Router>
      </div>
    </Layout>
    
  );
}

export default App;
