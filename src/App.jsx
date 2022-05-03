import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Home/Navbar";
import { Banner } from "./components/Home/Banner";
import { Deals } from "./components/Home/Deals";
import { Banners } from "./components/Home/Banners";
import { FurnitureProducts } from "./components/FurnitureProd/FurnitureProducts";
import { ProtectedRoute } from "./components/PrivateRoute/ProtectedRoute";
import { Login } from "./components/Login/Login";

function App() {
  const Offer_Deals = [
    {
      src: "https://ak1.ostkcdn.com/img/mxc/04292022_HB_INTL_1.svg?imwidth=1920",
      title: "Select Garden & Patio",
    },
    {
      src: "https://ak1.ostkcdn.com/img/mxc/04292022_HB_INTL_2.svg?imwidth=1920",
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
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout"></Route>
        <Route
          path="/furniture"
          element={
            <ProtectedRoute>
              <FurnitureProducts />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>

      <Banner />
      <Deals offers={Offer_Deals} />
      <Banners
        src={
          "https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/~regional~IND~others~KOP~DEC+2021~Mayze-Glow_Desktop_1440x500_1.jpg/fmt/jpg/fmt/png"
        }
        title={" Home Decore Refresh"}
        subtitle={"Save On Fresh Styles to update yours space"}
      />
    </div>
  );
}

export default App;
