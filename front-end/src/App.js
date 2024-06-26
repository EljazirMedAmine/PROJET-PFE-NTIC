import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Activitie from "./component/Activitie/Activitie";
import Hotels from "./component/Hotels/Hotels";
import ContactUs from "./component/ContactUs/ContactUs";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import DetailActivities from "./component/DetailActivities/DetailActivities";
import RestaurantPage from "./RestaurantPage";
import Header from "./component/Header/Header"; // Import Header component
import Reservation from "./component/Reservation/Reservation";
import Payment from "./component/cards/cards";
import Spots from "./component/Spots/Spots";
import About from "./component/About/About";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/ContactUs" element={<ContactUs />} />
                <Route path="/" element={<Header />} />
                <Route path="/Activitiespage" element={<Activitie />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/RestaurantPage/*" element={<RestaurantPage />} />
                <Route path="/Hotels" element={<Hotels />} />
                <Route path="/Spots" element={<Spots />} />
                <Route path="/About" element={<About />} />
                <Route path="/activities/:id" element={<DetailActivities />} />
                <Route path="/Hotels/:idd" element={<Reservation />} />
                <Route path="/pay/:idp" element={<Payment />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
