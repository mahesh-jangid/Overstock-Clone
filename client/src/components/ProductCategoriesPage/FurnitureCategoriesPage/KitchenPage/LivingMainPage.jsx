
import "./LivingMainPage.css";

import styled from "styled-components";
// npm install react-icons --save

import { Link } from "react-router-dom";

import { VendorFilter, PriceFilter, MaterialsFilter, SizeFilter } from "./LivingStyled"

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md"

import { BsFillBookmarkFill } from "react-icons/bs"
import { AiFillStar } from "react-icons/ai"

import { FaUserCheck } from "react-icons/fa";

import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addKitchenProductData } from "./action";

import axios from "axios";

// import { Link } from "react-router-dom";

export const FurnitureKitchenMainPage = () => {
    const [sorting, setSorting] = useState("")
    const [vendorarrow, setVendorArrow] = useState(true);
    const [materialsarrow, setMaterialsArrow] = useState(true);
    const [pricearrow, setPriceArrow] = useState(true);
    const [sizearrow, setSizeArrow] = useState(true);
    const LivingData = useSelector((store) => store.FurnitureKitchenPage.kitchendata);
    console.log('DiningData:', LivingData)
    const dispatch = useDispatch();
    console.log('pricearrow:', pricearrow)
    
    console.log('sorting:', sorting)

    const handleChange = (event) => {
        console.log("event : ", event.target.value);
        setSorting(event.target.value);
        sortData();
    }

    const handleCart = async (object) => {
        console.log('object:', object)
        var ProductId = object._id;
        console.log('ProductId:', ProductId)
        fetch("/cart/tokitchenpage")
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            console.log('res1:', res)
            var result = FindProduct(res, ProductId)
            if (!result) {
                Post_Product(ProductId);
            }
            else {
                Patch_Product(result);
            }
        })
        .catch((error) => console.log("error : ",error))
    }

    const FindProduct = (CartsData, id) => {
        console.log('id:', id)
        console.log('CartsData:', CartsData)
        
        for(var i = 0; i < CartsData.length; i++) {
            
            if(CartsData[i].furnitureId === id) {
                console.log("Match");
                return [CartsData[i]._id, CartsData[i].quantity];
            }
        }
        
        console.log("Not Match");
        return false;
    }

    const Post_Product = async (furnitureId) => {
        const result = await fetch("/cart", {
            method : "POST",
            
            headers : {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                furnitureId
            }),
        })
        .then((res) => res.json())
        .then((res) => console.log("res2 : ",res))
        .then((res) => getData())
        .then(() => {

            window.location.reload();
        })
    }

    const Patch_Product = (array) => {
        var quantity = array[1] + 1;
        fetch("/cart/" + array[0] , {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                quantity,
            }),
        })
        .then((res) => 
        {
            return res.json();
        })
        .then((res) => console.log(res))
        .then((res) => getData())
        .then(() => {

            window.location.reload();
        })
    }

    useEffect(() => {
        getData();
    },[]);

    // const getData = async() => {
    //     const data = await fetch("/diningroom").then((data) => 
    //         data.json()
    //     )
    //     setDiningMainData(data);
    // }
    const sortData = () => {
        axios.get(`/Furniture/Kitchen-Furniture/${sorting}`)
        // .then(res => setDiningMainData(res.data))
        .then(res => {
            return dispatch(addKitchenProductData(res.data))
        })
        .catch(error => console.log("Error : ", error))
    }
    const getData = () => {
        axios.get("/Furniture/Kitchen-Furniture")
        // .then(res => setDiningMainData(res.data))
        .then(res => {
            return dispatch(addKitchenProductData(res.data))
        })
        .catch(error => console.log("Error : ", error))
    }

    return (
        <div className="DiningMainContainer">
            <h1 className="DiningHeading">Kitchen Furniture</h1>

            <div className="DiningCategories__OfferBox">
                <div className="DiningCategories__Box">
                    <h5>Kitchen Cabinets</h5>
                    <h5>Kitchen Islands</h5>
                    <h5>Pantry Storage & Organization</h5>
                    <h5>Kitchen Shelves</h5>
                    <h5>Kitchen Carts</h5>
                    <h5 style={{color : "red"}}>{<BsFillBookmarkFill />} Shop All Kitchen Furniture on Sale</h5>
                </div>

                <div className="DiningCategoriesOffer__Box">
                    <div className="DiningCategoriesOffer__Upper-Banner">
                        <img src="https://png.pngtree.com/thumb_back/fw800/back_our/20190622/ourmid/pngtree-home-improvement-coffee-table-creative-warm-color-e-commerce-banner-image_215376.jpg" alt="" />
                    </div>
                    <div className="DiningCategoriesOffer__Lower-Banner">
                        <img src="https://ak1.ostkcdn.com/img/mxc/Q3_2018_1900x950_150-KitchenFurniture-CAT-1311.jpg?imwidth=1200&impolicy=custom" alt="" />
                    </div>
                </div>
            </div>

            <div className="ShopByCategory__Box">
                <h4>Shop By Category</h4>
                <div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/19389944/Porch-Den-Third-Ward-Jefferson-Glass-Sliding-Door-Stackable-Cabinet-8a256d9f-617d-499c-8a5d-28bec7e647f3.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/29139287/Cheyenne-Black-and-Distressed-Gold-Finish-Dining-Set-by-iNSPIRE-Q-Modern-9b35167c-1a47-425e-b889-ec97c3bc671c_1000.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Kitchen Cabinets</p>
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/11850496/Patriot-White-Black-Wooden-Kitchen-Cart-d95cf108-18ec-47f0-ab18-da768115142d.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/25429180/Abbyson-Bevie-Velvet-Dining-Chair-c379f2de-5818-4500-8c7d-e9d671cc2193_600.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Kitchen Islands</p>
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/19567927/Harper-Blvd-Penderton-Rustic-Gray-w-Distressed-Pine-Bakers-Rack-d9777c5b-dabc-47a2-b8b4-e83eb390a1a7.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/1f10c670c78933b7e2e0ca984345608018550d2d/Safavieh-Alyssa-Brown-Rustic-Mid-Century-Dining-Table.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Pantry Storage & Organization</p>
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/20178141/Harper-Blvd-Sifton-White-Wall-Mount-Organizer-Spice-Rack-8c8fc3fb-aa98-43d1-ba00-949b6a424d8b.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/30064853/Novogratz-Nora-3-Piece-Pub-Set-with-Faux-Terrazzo-Top-3e88982e-5e05-4c46-8791-b55fbda2b3d8_600.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Kitchen Shelves</p>
                    </div>
                    <div>
                        <div>

                            <img src="https://ak1.ostkcdn.com/images/products/6593392/Denver-White-Modern-Kitchen-Cart-ce1c285f-945b-435f-8647-51afb040a7e2.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/img/mxc/010720-sp-diningbarfurniture-bmod1-6.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Kitchen Carts</p>
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/7984053/Step-Stool-200e615d-336d-466e-9ce8-7df01d9324b8.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/28626024/Lifestorey-Vilas-Solid-Wood-Buffet-8a28b8d2-f5b8-469e-a6bc-5329221192c4_600.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Step Stools</p>
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/8268206/Cooks-Standard-Wall-Mount-Pot-Rack-36-by-8-Inch-5e378c89-e214-4dd4-af02-f18fbd75dd93.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/28626024/Lifestorey-Vilas-Solid-Wood-Buffet-8a28b8d2-f5b8-469e-a6bc-5329221192c4_600.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Pot Racks</p>
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/10400488/Upton-Home-Mitton-White-Kitchen-Cart-4cfc4a8b-0444-42f4-b46a-41fce7d651c6.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/28626024/Lifestorey-Vilas-Solid-Wood-Buffet-8a28b8d2-f5b8-469e-a6bc-5329221192c4_600.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Butcher Blocks</p>
                    </div>
                </div>
            </div>

            <div className="ShopByCategory__Box">
                <h4>Shop by Size</h4>
                <div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/13985209/Eleanor-Two-Tone-Rolling-Kitchen-Island-with-Wine-Rack-by-iNSPIRE-Q-Classic-a3704a88-24c7-45c6-b0bf-6bbd3be241a1.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/23589485/Carson-Carrington-Tornio-Round-Dining-Set-c35c19a5-381d-4c6b-ba3b-83fc66eab335_600.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Country Kitchen Furniture</p>
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/16180600/Prevail-Dining-Stand-ffe84fdb-d348-442c-b6bd-8b4fce0cc1ca.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/25776175/Simple-Living-Judith-Dining-Set-with-Bench-126a74d3-159a-49ee-9825-981cc408be98_600.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Rustic Kitchen Funiture</p>
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/14646654/Holly-Martin-Zhori-Midcentury-Modern-Bar-Cart-4833f5e4-24e5-4a73-a95c-c664f19d5dec.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/9570455/Simple-Living-5-piece-Baxter-Dining-Set-with-Storage-Ottomans-35f90f81-91ce-49d4-988a-6b4b37870f00_600.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Modern & Contempory Kitchen Furniture</p>
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/13057634/INSPIRE-Q-Metropolitan-Round-Chrome-Metal-Mobile-Bar-Cart-with-Glass-Top-37d1ed32-d0d5-45a9-9fbf-b340d8d5ec90.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/29168118/Garrison-Espresso-Convertible-Dining-Set-by-iNSPIRE-Q-Modern-c449fc47-9f52-44d3-ac71-92db6ae23b47_1000.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Shabby Chic Kitchen Furniture</p>
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/9962323/Metal-Frame-Rustic-Kitchen-Cart-with-Wood-Tabletops-and-Shelves-db93e9ac-bfaf-47f4-9be1-26bf377f9d35.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/30158760/Hayden-9Pc-Dining-Set-b16d73e2-250c-4809-9e41-84778f60f0fa_600.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Industrial Kitchen Furniture</p>
                    </div>
                </div>
            </div>

            <div className="ShopByCategory__Box">
                <h4>Shop by Color</h4>
                <div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/11883819/Natural-Rubberwood-Kitchen-Island-Cart-d687c1df-c069-4681-bb18-6608139f0982.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/23589485/Carson-Carrington-Tornio-Round-Dining-Set-c35c19a5-381d-4c6b-ba3b-83fc66eab335_600.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>White Kitchen Furniture</p>
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/7021882/Natural-Finish-4-drawer-Cart-3e3dc29e-56b2-4d84-8414-a3425844a76f.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/25776175/Simple-Living-Judith-Dining-Set-with-Bench-126a74d3-159a-49ee-9825-981cc408be98_600.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Brown Kitchen Funiture</p>
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/7706036/Grand-Torino-Kitchen-Island-and-Two-Stools-2820d0fc-b880-4fb0-9ff2-6177fd47d454.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/9570455/Simple-Living-5-piece-Baxter-Dining-Set-with-Storage-Ottomans-35f90f81-91ce-49d4-988a-6b4b37870f00_600.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Black Kitchen Furniture</p>
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/12916483/Baxton-Studio-Mneme-Modern-and-Contemporary-Light-Grey-Finished-Wheeled-Kitchen-Cart-with-Butcher-Top-2f111204-1c51-4827-8a44-d43800a419e1.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/29168118/Garrison-Espresso-Convertible-Dining-Set-by-iNSPIRE-Q-Modern-c449fc47-9f52-44d3-ac71-92db6ae23b47_1000.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Grey Kitchen Furniture</p>
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/17167199/Commercial-61-x21-x14-5-Tier-Layer-Shelf-Adjustable-Wire-Metal-Shelving-Rack-986d1ee7-4b1e-43aa-8cc4-e10816a4b934.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/30158760/Hayden-9Pc-Dining-Set-b16d73e2-250c-4809-9e41-84778f60f0fa_600.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Silver Kitchen Furniture</p>
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/14031629/Fitz-Gold-2-tier-Rectangular-Serving-Cart-by-Silverwood-cccf24cb-9625-410f-847f-3f652c0fa6a8.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/30158760/Hayden-9Pc-Dining-Set-b16d73e2-250c-4809-9e41-84778f60f0fa_600.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Gold Kitchen Furniture</p>
                    </div>
                </div>
            </div>

            <div className="ShopByCategory__Box">
                <h4>Shop by Material</h4>
                <div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/15975428/Country-Lodge-Pantry-d98bed1c-b8c2-4d95-94ce-72bca937b3fa.jpg?imWidth=320&impolicy=medium" alt="" />
                        </div>
                        <p>Wood Kitchen Furniture</p>
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/7110113/The-Orleans-Kitchen-Island-by-Home-Styles-ad3bf6d4-0058-4d9f-bf40-f08ab2d70716.jpg?imWidth=320&impolicy=medium" alt="" />
                        </div>
                        <p>Metal Kitchen Funiture</p>
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/16003487/Office-by-kathy-ireland-Echo-56W-Dining-Table-in-Pure-White-978b9d8f-4176-4eab-a070-90f8fc80e398.jpg?imWidth=320&impolicy=medium" alt="" />
                        </div>
                        <p>Plastic Kitchen Furniture</p>
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/13727866/Harper-Blvd-Bellstrom-Lighted-Contemporary-Curio-519a5763-e1fa-4474-9bf5-c00d9a1f19a8.jpg?imWidth=320&impolicy=medium" alt="" />
                        </div>
                        <p>Glass Kitchen Furniture</p>
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/8876118/The-Orleans-Kitchen-Cart-4477a8e3-714e-43be-ae7b-191df7eb7084.jpg?imWidth=320&impolicy=medium" alt="" />
                        </div>

                        <p>Steel Kitchen Furniture</p>
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/19567931/Harper-Blvd-Bannon-Rustic-Brown-w-Distressed-Pine-Bakers-Rack-5219fbba-48c4-4164-85d4-b3f37d1daeae.jpg?imWidth=320&impolicy=medium" alt="" />
                        </div>
                        <p>Iron Kitchen Furniture</p>
                    </div>
                </div>
            </div>

            <div className="Sorting__Box">
                Sort : 
                <select onChange={handleChange} name="bestselling" id="">
                    <option value="">Best Selling</option>
                    <option value="desending">Price High To Low</option>
                    <option value="asending">Price Low To High</option>
                    <option value="">On Sale</option>
                    <option value=""></option>
                </select>
            </div>

            <div className="Filtering__Grid-Container">

                <div className="Filtering__Box">

                    <div id = "VendorBox" onClick={() => {
                        setVendorArrow(!vendorarrow)
                    }}>
                        <div id = "Vendor">Categories</div>
                        <div id = "VendorUpDownArrowBox">{vendorarrow ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}</div>
                    </div>
                    <VendorFilter vendorarrow = {vendorarrow} id = "VendorFilterBox">
                        <fieldset id = "VendorFieldset">
                            <legend>Categories</legend>
                                <a className="Category__Filter" href="#">Kitchen & Dining Room Chairs</a>
                                <a className="Category__Filter" href="#">Counter & Bar Stools</a>
                                <a className="Category__Filter" href="#">Kitchen & Dining Room Sets</a>
                                <a className="Category__Filter" href="#">Kitchen & Dining Room Tables</a>
                                <a className="Category__Filter" href="#">Home Bars</a>
                                <a className="Category__Filter" href="#">Bar & Pub Tables</a>
                        </fieldset>
                    </VendorFilter>

                    <div id = "PriceBox" onClick={() => {
                            setPriceArrow(!pricearrow)
                        }}>
                        <div id = "Price">Price</div>
                        <div id = "PriceUpDownArrowBox">{pricearrow ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}</div>
                    </div>
                    <PriceFilter pricearrow = {pricearrow} id = "PriceFilterBox">
                        <fieldset id = "PriceFieldset">
                            <legend>Price</legend>
                                <div>
                                    <input class = "PriceInput" type="checkbox" id = "l17477" value = "l17477" />
                                    <label class = "Pricelabel" for="l17477">Under INR 17477</label>
                                </div>
                                <div>
                                    <input class = "PriceInput" type="checkbox" id = "l17477g34954" value = "l17477g34954" />
                                    <label class = "Pricelabel" for="l17477g34954">INR 17477 - INR 34954</label>
                                </div>
                                <div>
                                    <input class = "PriceInput" type="checkbox" id = "l34954g69909" value = "l34954g69909" />
                                    <label class = "Pricelabel" for="l34954g69909">INR 34954 - INR 69909</label>
                                </div>
                                <div>
                                    <input class = "PriceInput" type="checkbox" id = "l69909g218467" value = "l69909g218467" />
                                    <label class = "Pricelabel" for="l69909g218467">INR 69909 - INR 218467</label>
                                </div>
                        </fieldset>
                    </PriceFilter>
                    
                    <div id = "MaterialsBox" onClick={() => {
                            setMaterialsArrow(!materialsarrow)
                        }}>
                        <div id = "Materials">Materials</div>
                        <div id = "MaterialsUpDownArrowBox">{materialsarrow ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}</div>
                    </div>
                    <MaterialsFilter materialsarrow = {materialsarrow} id = "MaterialsFilterBox">
                        <fieldset id = "MaterialsFieldset">
                            <legend>Materials</legend>
                                <div>
                                    <input class = "MaterialsInput" type="checkbox" id = "wood" value = "wood" />
                                    <label class = "Materialslabel" for="wood">Wood</label>
                                </div>
                                <div>
                                    <input class = "MaterialsInput" type="checkbox" id = "glass" value = "glass" />
                                    <label class = "glass" for="l17477g34954">Glass</label>
                                </div>
                                <div>
                                    <input class = "MaterialsInput" type="checkbox" id = "metal" value = "metal" />
                                    <label class = "Materialslabel" for="metal">Metal</label>
                                </div>
                                <div>
                                    <input class = "MaterialsInput" type="checkbox" id = "leather" value = "leather" />
                                    <label class = "Materialslabel" for="leather">Leather</label>
                                </div>
                                <div>
                                    <input class = "MaterialsInput" type="checkbox" id = "marble" value = "marble" />
                                    <label class = "Materialslabel" for="marble">Marble</label>
                                </div>
                        </fieldset>
                    </MaterialsFilter>

                    <div id = "SizeBox" onClick={() => {
                            setSizeArrow(!sizearrow)
                        }}>
                        <div id = "Size">Size</div>
                        <div id = "SizeUpDownArrowBox">{sizearrow ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}</div>
                    </div>
                    <SizeFilter sizearrow = {sizearrow} id = "SizeFilterBox">
                        <fieldset id = "SizeFieldset">
                            <legend>Size</legend>
                                <div>
                                    <input class = "SizeInput" type="checkbox" id = "e7" value = "e7" />
                                    <label class = "Sizelabel" for="e7">7 - Piece</label>
                                </div>
                                <div>
                                    <input class = "SizeInput" type="checkbox" id = "e5" value = "e5" />
                                    <label class = "glass" for="e5">5 - Piece</label>
                                </div>
                                <div>
                                    <input class = "SizeInput" type="checkbox" id = "e3" value = "e3" />
                                    <label class = "Sizelabel" for="e3">3 - Piece</label>
                                </div>
                                <div>
                                    <input class = "SizeInput" type="checkbox" id = "e2" value = "e2" />
                                    <label class = "Sizelabel" for="e2">2 - Piece</label>
                                </div>
                        </fieldset>
                    </SizeFilter>
                </div>

                <div className="Grid__Box">
                    {LivingData.map((element,index) => {
                        return (
                            <div key={index}>
                                    <a target={"_blank"} href={`/ProductDetails/Furniture/Kitchen-Furniture/${element._id}`} style={{ textDecoration : "none"}}>
                                        <div style={{textDecoration : "none", border : "0"}} className="Grid__Box-Image">
                                            <img src={element.image} alt="" />
                                        </div>
                                    </a>
                                    <div className="Grid__Box-Content">
                                        <p>{element.sale === "start" ? "Sale Starts at INR" : "INR"} : {element.price}</p>
                                        <div>
                                            <div>
                                                {Array(element.star).fill().map((_,i) =>{
                                                    return (
                                                        <p style={{color : "yellow"}}>{<AiFillStar />}</p>
                                                    )
                                                })}
                                            </div>
                                            <p>{element.rating} : {<FaUserCheck />} </p>
                                        </div>
                                        <div className="DropDown__Box">
                                            <h4>{element.title}</h4>
                                            <button onClick={() => {

                                                handleCart(element);

                                            }}>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                        )
                    })}
                    {/* <div>
                        <div className="Grid__Box-Image">
                            <img src="" alt="" />
                        </div>
                        <div className="Grid__Box-Content">
                            <p>Lorem, ipsum.</p>
                            <div>
                                <div>
                                    <p>🌟</p>
                                </div>
                                <p>Lorem.</p>
                            </div>
                            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                        </div>
                    </div>
                    <div>
                        <div className="Grid__Box-Image">
                            <img src="" alt="" />
                        </div>
                        <div className="Grid__Box-Content">
                            <p>Lorem, ipsum.</p>
                            <div>
                                <div>
                                    <p>🌟</p>
                                </div>
                                <p>Lorem.</p>
                            </div>
                            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                        </div>
                    </div>
                    <div>
                        <div className="Grid__Box-Image">
                            <img src="" alt="" />
                        </div>
                        <div className="Grid__Box-Content">
                            <p>Lorem, ipsum.</p>
                            <div>
                                <div>
                                    <p>🌟</p>
                                </div>
                                <p>Lorem.</p>
                            </div>
                            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                        </div>
                    </div>
                    <div>
                        <div className="Grid__Box-Image">
                            <img src="" alt="" />
                        </div>
                        <div className="Grid__Box-Content">
                            <p>Lorem, ipsum.</p>
                            <div>
                                <div>
                                    <p>🌟</p>
                                </div>
                                <p>Lorem.</p>
                            </div>
                            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                        </div>
                    </div>
                    <div>
                        <div className="Grid__Box-Image">
                            <img src="" alt="" />
                        </div>
                        <div className="Grid__Box-Content">
                            <p>Lorem, ipsum.</p>
                            <div>
                                <div>
                                    <p>🌟</p>
                                </div>
                                <p>Lorem.</p>
                            </div>
                            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                        </div>
                    </div> */}
                </div>
            </div>

        </div>
    )

}