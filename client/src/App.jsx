import "./App.css";

// import "bootstrap/dist/css/bootstrap.min.css"

import { Routes, Route } from "react-router-dom";
import { DiningMainPage } from "./components/ProductCategoriesPage/FurnitureCategoriesPage/DiningPage/DiningMainPage";
import { ProductDetails } from "./components/ProductDetailsPage/ProductDetails";
import { FurnitureLanding } from "./components/ProductLandingPage/FurnitureLandingPage/FurnitureLanding";
import { Cart } from "./components/Cart/Cart";
import { Navbar } from "./components/Header/Navbar";
import { Payment } from "./components/Checkout/Payment";
import { Thankyou } from "./components/Success/Thank";
import { LivingMainPage } from "./components/ProductCategoriesPage/FurnitureCategoriesPage/LivingPage/LivingMainPage";
import { KitchenDiningRoomSets } from "./components/ProductCategoriesPage/FurnitureCategoriesPage/DiningPage/DiningCategoriesPage/KitchenDiningRoom/KitchenDiningRoomSets";
import { BedroomMainPage } from "./components/ProductCategoriesPage/FurnitureCategoriesPage/BedroomPage/LivingMainPage";
import { FurnitureKitchenMainPage } from "./components/ProductCategoriesPage/FurnitureCategoriesPage/KitchenPage/LivingMainPage";
import { RugsLanding } from "./components/ProductLandingPage/RugsLandingPage/RugsLanding";
import { DecorLanding } from "./components/ProductLandingPage/DecorLandingPage/DecorLanding";
import { HomeImprovementLanding } from "./components/ProductLandingPage/HomeImprovementPage/HomeImprovement";
import { JewelryWatchesStoreLanding } from "./components/ProductLandingPage/JewelryWatchesStorePage/JewelryWatchesStore";
import { BathLanding } from "./components/ProductLandingPage/BathLandingPage/BathLanding";
import { OutdoorLanding } from "./components/ProductLandingPage/OutdoorLandingPage/Outdoor";

import { Hero } from "./components/Home/Hero";
import { Deals } from "./components/Home/Deals";
import { Banners } from "./components/Home/Banners";

import { StaticProd } from "./components/Home/StaticProd";
import { ImageSlider } from "./components/Home/HomeCarousel";
import { Featured } from "./components/Home/Featured";
import { Footer } from "./components/Home/Footer";

import { Login } from "./Logins/Login.jsx";
import { Register } from "./Logins/Register.jsx";

function App() {
  const imagess = [
    {
      id: 1,
      src: "https://ak1.ostkcdn.com/img/mxc/03282022_HP_Editorial_Frame_2.jpg?imwidth=1920",
      heading: "Storage With Style",
      subhead:
        "Keep your space neat with decorative storage and organization essentials.",
    },
    {
      id: 2,
      src: "https://ak1.ostkcdn.com/img/mxc/03282022_HP_Editorial_Frame_3.jpg?imwidth=1920",
      heading: "New Arrivals : Tables",
      subhead:
        "Shop the latest living room with new coffee, console, sofa, and end tables.",
    },
    {
      id: 3,
      src: "https://ak1.ostkcdn.com/img/mxc/03282022_HP_Editorial_Frame_5.jpg?imwidth=1920",
      heading: "Top Rated Lightning",
      subhead:
        "Brighten up your new year space with customer favorite lighting & ceiling fans.",
    },
    {
      id: 3,
      src: "https://ak1.ostkcdn.com/img/mxc/03282022_HP_Editorial_Frame_5.jpg?imwidth=1920",
      heading: "Chic Shag Rugs​",
      subhead: "Opt for classic comforts with plush and pretty shag rugs.",
    },
    {
      id: 3,
      src: "https://ak1.ostkcdn.com/img/mxc/03282022_HP_Editorial_Frame_5.jpg?imwidth=1920",

      heading: "Top-Rated Mattresses",
      subhead:
        "Stop counting sheep & start getting sleep with great deals on great mattresses.",
    },
    {
      id: 3,
      src: "https://ak1.ostkcdn.com/img/mxc/03282022_HP_Editorial_Frame_1.jpg?imwidth=1920",
      heading: "Top-Rated Mattresses",
      subhead:
        "Stop counting sheep & start getting sleep with great deals on great mattresses.",
    },
  ];
  // --------------Home Static Products -------------///
  const Static_Products = [
    {
      src: "https://i.postimg.cc/DzNmvYz8/11192021-Cat-Silo-Furniture.png",
      Title: "Furniture",
    },
    {
      src: "https://i.postimg.cc/tT2ymTM0/11152021-Cat-Silo-Area-Rugs.png",
      Title: "Area Rugs",
    },
    {
      src: "https://i.postimg.cc/W4fcMKFj/11152021-Cat-Silo-Bed-Bath.png",
      Title: "Bed & Baths",
    },
    {
      src: "https://i.postimg.cc/Xv5k8BXJ/11152021-Cat-Silo-Decor.png",
      Title: "Home Decor",
    },
    {
      src: "https://i.postimg.cc/V6RMGqwY/Cat-Silo-Window-040721.jpg",
      Title: "Window Treatment",
    },
    {
      src: "https://i.postimg.cc/yYJgc4D6/11152021-Cat-Silo-Kitchen.png",
      Title: "Kitchen",
    },
    {
      src: "https://i.postimg.cc/3JPyZSGX/11192021-Cat-Silo-Outdoor.png",
      Title: "Outdoor",
    },
    {
      src: "https://i.postimg.cc/4dNn3rCg/01112021-Cat-Silo-Home-Imp.jpg",
      Title: "Home Improvement",
    },
    {
      src: "https://i.postimg.cc/hvW7NgSK/05062021-gnp-jewelrywatches-Pop-Cat-10.jpg",
      Title: "Jwellery & Watches Store",
    },
    {
      src: "https://i.postimg.cc/fTXhwsD6/06232021-gnp-gifts-219x219-Small-Appliances.jpg",
      Title: "Gift Ideas",
    },
    {
      src: "https://i.postimg.cc/wxN3j5Z3/11152021-Cat-Silo-Lighting.png",
      Title: "Lightning",
    },
    {
      src: "https://i.postimg.cc/SsMQjqZH/Cat-Silo-All-Deals-040721.jpg",
      Title: "Shop All Deals",
    },
  ];
  const Offer_Deals = [
    {
      src: "https://ak1.ostkcdn.com/img/mxc/04292022_HB_INTL_2.svg?imwidth=1920",
      title: "Select Garden & Patio",
    },
    {
      src: "https://ak1.ostkcdn.com/img/mxc/04292022_HB_INTL_1.svg?imwidth=1920",
      title: "Select Living Room Furniture",
    },
    {
      src: "https://ak1.ostkcdn.com/img/mxc/04292022_HB_INTL_3.svg?imwidth=1920",
      title: "Select Dining Room Furniture",
    },
    {
      src: "https://ak1.ostkcdn.com/img/mxc/04292022_HB_INTL_4.svg?imwidth=1920",
      title: "Select Home Decor",
    },
    {
      src: "https://ak1.ostkcdn.com/img/mxc/04292022_V3_HB_DOMESTIC_5.svg?imwidth=1920",
      title: "Select Bedding & Bath",
    },
    {
      src: "https://ak1.ostkcdn.com/img/mxc/04292022_HB_INTL_6.svg?imwidth=1920",
      title: "Select Lighting & Ceiling Fans",
    },
  ];
  return (
    <div className="App">
      {/* Hello To The MERN Stack Project */}
      {/* <button className="btn btn-primary">Click Me</button> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Deals offers={Offer_Deals} />
              <Banners
                src={
                  "https://overstock-clone.s3.ap-south-1.amazonaws.com/01102022-FreshKitchenFurn-Desktop.svg"
                }
                title={" Home Decore Refresh"}
                subtitle={"Save On Fresh Styles to update yours space"}
              />
              <StaticProd prod={Static_Products} />
              <ImageSlider imagess={imagess} />
              <Banners
                src={
                  "https://ak1.ostkcdn.com/img/mxc/04282022_SpringTimeSlumber_INTL_Desktop.svg?imwidth=1920"
                }
                title={"Bright New Year"}
                subtitle={"Save On Brilliant lightning to cheer up any space"}
              />
              <Featured />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/FurniturePage"
          element={
            <>
              <Navbar />
              <FurnitureLanding />
            </>
          }
        ></Route>
        <Route
          path="/RugsPage"
          element={
            <>
              <Navbar />
              <RugsLanding />
            </>
          }
        ></Route>
        <Route
          path="/DecorPage"
          element={
            <>
              <Navbar />
              <DecorLanding />
            </>
          }
        ></Route>
        <Route
          path="/HomeImprovementPage"
          element={
            <>
              <Navbar />
              <HomeImprovementLanding />
            </>
          }
        ></Route>
        <Route
          path="/Jewelry-Watches-Store-Page"
          element={
            <>
              <Navbar />
              <JewelryWatchesStoreLanding />
            </>
          }
        ></Route>
        <Route
          path="/Bedding-Bath-Page"
          element={
            <>
              <Navbar />
              <BathLanding />
            </>
          }
        ></Route>
        <Route
          path="/Outdoor-Landing-Page"
          element={
            <>
              <Navbar />
              <OutdoorLanding />
            </>
          }
        ></Route>
        <Route
          path="/Furniture/Dining-Room-Bar-Furniture"
          element={
            <>
              <Navbar />
              <DiningMainPage />
            </>
          }
        ></Route>
        <Route
          path="/Furniture/Living-Room-Furniture"
          element={
            <>
              <Navbar />
              <LivingMainPage />
            </>
          }
        ></Route>
        <Route
          path="/Furniture/Bedroom-Furniture"
          element={
            <>
              <Navbar />
              <BedroomMainPage />
            </>
          }
        ></Route>
        <Route
          path="/Furniture/Kitchen-Furniture"
          element={
            <>
              <Navbar />
              <FurnitureKitchenMainPage />
            </>
          }
        ></Route>
        <Route
          path="/Furniture/Kitchen-Dining-Room-Sets"
          element={
            <>
              <Navbar />
              <KitchenDiningRoomSets />
            </>
          }
        ></Route>
        <Route
          path="/ProductDetails/:area/:cate/:id"
          element={
            <>
              <Navbar />
              <ProductDetails />
            </>
          }
        ></Route>
        <Route
          path="/ProductDetails/:area/:cate/:subcate/:id"
          element={
            <>
              <Navbar />
              <ProductDetails />
            </>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <Cart />
            </>
          }
        ></Route>
        <Route
          path="/Payment"
          element={
            <>
              <Payment />
            </>
          }
        ></Route>
        <Route
          path="/Success"
          element={
            <>
              <Thankyou />
            </>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
            </>
          }
        ></Route>

        <Route
          exact
          path="/register"
          element={
            <>
              <Navbar />
              <Register />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
