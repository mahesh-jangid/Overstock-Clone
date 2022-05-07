
import './App.css';

// import "bootstrap/dist/css/bootstrap.min.css"

import { Routes, Route } from "react-router-dom";
import { DiningMainPage } from "./components/ProductCategoriesPage/FurnitureCategoriesPage/DiningPage/DiningMainPage";
import { ProductDetails } from './components/ProductDetailsPage/ProductDetails';
import { FurnitureLanding } from './components/ProductLandingPage/FurnitureLandingPage/FurnitureLanding';
import { Cart } from './components/Cart/Cart';
import { Navbar } from "./components/Header/Navbar";
import { Payment } from './components/Checkout/Payment';
import { Thankyou } from './components/Success/Thank';
import { LivingMainPage } from './components/ProductCategoriesPage/FurnitureCategoriesPage/LivingPage/LivingMainPage';
import { KitchenDiningRoomSets } from './components/ProductCategoriesPage/FurnitureCategoriesPage/DiningPage/DiningCategoriesPage/KitchenDiningRoom/KitchenDiningRoomSets';
import { BedroomMainPage } from './components/ProductCategoriesPage/FurnitureCategoriesPage/BedroomPage/LivingMainPage';
import { FurnitureKitchenMainPage } from './components/ProductCategoriesPage/FurnitureCategoriesPage/KitchenPage/LivingMainPage';
import { RugsLanding } from './components/ProductLandingPage/RugsLandingPage/RugsLanding';
import { DecorLanding } from './components/ProductLandingPage/DecorLandingPage/DecorLanding';
import { HomeImprovementLanding } from './components/ProductLandingPage/HomeImprovementPage/HomeImprovement';
import { JewelryWatchesStoreLanding } from './components/ProductLandingPage/JewelryWatchesStorePage/JewelryWatchesStore';
import { BathLanding } from './components/ProductLandingPage/BathLandingPage/BathLanding';
import { OutdoorLanding } from './components/ProductLandingPage/OutdoorLandingPage/Outdoor';

function App() {
  return (
    <div className="App">
      {/* Hello To The MERN Stack Project */}
      {/* <button className="btn btn-primary">Click Me</button> */}
      <Routes>
        <Route path="/" element = {
          <>
            <Navbar />
            {/*  */}
          </>
        }></Route>
        <Route path="/FurniturePage" element = {
          <>
            <Navbar />
            <FurnitureLanding />
          </>
        }></Route>
        <Route path="/RugsPage" element = {
          <>
            <Navbar />
            <RugsLanding />
          </>
        }></Route>
        <Route path="/DecorPage" element = {
          <>
            <Navbar />
            <DecorLanding />
          </>
        }></Route>
        <Route path="/HomeImprovementPage" element = {
          <>
            <Navbar />
            <HomeImprovementLanding />
          </>    
        }></Route>
        <Route path="/Jewelry-Watches-Store-Page" element = {
          <>
            <Navbar />
            <JewelryWatchesStoreLanding />
          </>
        }></Route>
        <Route path="/Bedding-Bath-Page" element = {
          <>
            <Navbar />
            <BathLanding />
          </>
        }></Route>
        <Route path="/Outdoor-Landing-Page" element = {
          <>
            <Navbar />
            <OutdoorLanding />
          </>
        }></Route>
        <Route path="/Furniture/Dining-Room-Bar-Furniture" element = {
          <>
            <Navbar />
            <DiningMainPage />
          </>
        }></Route>
        <Route path="/Furniture/Living-Room-Furniture" element = {
          <>
            <Navbar />
            <LivingMainPage />
          </>
        }></Route>
        <Route path="/Furniture/Bedroom-Furniture" element = {
          <>
            <Navbar />
            <BedroomMainPage />
          </>
        }></Route>
        <Route path="/Furniture/Kitchen-Furniture" element = {
          <>
            <Navbar />
            <FurnitureKitchenMainPage />
          </>
        }></Route>
        <Route path="/Furniture/Kitchen-Dining-Room-Sets" element = {
          <>

            <Navbar />
            <KitchenDiningRoomSets />
          </>
        }></Route>
        <Route path="/ProductDetails/:area/:cate/:id" element = {
          <>
            <Navbar />
            <ProductDetails />
          </>
        }></Route>
        <Route path="/ProductDetails/:area/:cate/:subcate/:id" element = {
          <>
            <Navbar />
            <ProductDetails />
          </>
        }></Route>
        <Route path="/cart" element = {
          <>
            <Navbar />
            <Cart />
          </>
        }></Route>
        <Route path="/Payment" element = {
          <>
            <Payment />
          </>
        }></Route>
        <Route path="/Success" element = {
          <>
            <Thankyou />
          </>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
