import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Activitie from './component/Activitie/Activitie';
import Hotels from './component/Hotels/Hotels';
import ContactUs from './component/ContactUs/ContactUs';
import SignIn from './SignIn';
import SignUp from './SignUp';
import DetailActivities from './component/DetailActivities/DetailActivities';
import RestaurantPage from './RestaurantPage';
import Header from './component/Header/Header';
import Reservation from './component/Reservation/Reservation';
import Payment from './component/cards/cards';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/' element={<Header />} />
        <Route path='/Activitiespage' element={<Activitie />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/RestaurantPage/*' element={<RestaurantPage />} />
        <Route path='/Hotels' element={<Hotels />} />
        <Route path='/activities/:id' element={<DetailActivities />} />
        <Route path='/Hotels/:idd' element={<Reservation />} />
        <Route path='/pay/:idp' element={<Payment/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
