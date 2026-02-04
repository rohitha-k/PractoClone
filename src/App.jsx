import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import ArticleDetails from "./components/Home/ArticlesDetails";
import FindDoctors from "./components/Doctors/FindDoctors";
import DoctorsPage from "./components/Doctors/DoctorsPage";
import SurgeriesPage from "./components/Surgeries/SurgeriesPage";


import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Appointments from "./components/Appointments/Appointments";
import BookingPage from "./components/Appointments/BookingPage";
import BookingSummary from "./components/Appointments/BookingSummary";

function App() {


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="article/:id" element={<ArticleDetails />} />
        <Route path="doctors" element={<FindDoctors />} />
        <Route path="search" element={<DoctorsPage />} />
        <Route path="video-consult" element={<h1>Video Consult Page</h1>} />


        <Route path="surgeries" element={<SurgeriesPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="booking/:doctorId" element={<BookingPage />} />
        <Route path="booking-summary" element={<BookingSummary />} />
      </Route>
    </Routes>

  );
}

export default App;


