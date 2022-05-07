
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
import { addLivingProductData } from "./action";

import { Navbar } from "../../../Header/Navbar";

import axios from "axios";

// import { Link } from "react-router-dom";

export const LivingMainPage = () => {
    const [sorting, setSorting] = useState("")
    const [vendorarrow, setVendorArrow] = useState(true);
    const [materialsarrow, setMaterialsArrow] = useState(true);
    const [pricearrow, setPriceArrow] = useState(true);
    const [sizearrow, setSizeArrow] = useState(true);
    const LivingData = useSelector((store) => store.FurnitureLivingPage.livingdata);
    // console.log('DiningData:', LivingData)
    let CartData;
    console.log('CartData:', CartData)
    const dispatch = useDispatch();
    // console.log('pricearrow:', pricearrow)
    
    // console.log('sorting:', sorting)

    const handleChange = (event) => {
        console.log("event : ", event.target.value);
        setSorting(event.target.value);
        sortData();
    }
    const handleCart = async (object) => {
        // console.log('object:', object)
        var ProductId = object._id;
        console.log('ProductId:', ProductId)
        fetch("/cart/tolivingpage")
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            console.log('res1:', res)
            CartData = res;
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
        // console.log('id:', id)
        // console.log('CartsData:', CartsData)
        
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
        axios.get(`/Furniture/Living-Room-Furniture/${sorting}`)
        // .then(res => setDiningMainData(res.data))
        .then(res => {
            return dispatch(addLivingProductData(res.data))
        })
        .catch(error => console.log("Error : ", error))
    }
    const getData = () => {
        axios.get("/Furniture/Living-Room-Furniture")
        // .then(res => setDiningMainData(res.data))
        .then(res => {
            return dispatch(addLivingProductData(res.data))
        })
        .catch(error => console.log("Error : ", error))
    }
    return (
        <div className="DiningMainContainer">
            <h1 className="DiningHeading">Living Room Furniture</h1>

            <div className="DiningCategories__OfferBox">
                <div className="DiningCategories__Box">
                    <h5>Sofas & Couches</h5>
                    <h5>Sectional Sofas</h5>
                    <h5>Coffee, Sofa & End Tables</h5>
                    <h5>Accent Chairs</h5>
                    <h5>Living Room Sets</h5>
                    <h5>TV Stands</h5>
                    <h5 style={{color : "red"}}>{<BsFillBookmarkFill />} Shop All Living Room Furniture on Sale</h5>
                </div>

                <div className="DiningCategoriesOffer__Box">
                    <div className="DiningCategoriesOffer__Upper-Banner">
                        <img src="https://png.pngtree.com/thumb_back/fw800/back_our/20190622/ourmid/pngtree-home-improvement-coffee-table-creative-warm-color-e-commerce-banner-image_215376.jpg" alt="" />
                    </div>
                    <div className="DiningCategoriesOffer__Lower-Banner">
                        {/* <img src="https://ak1.ostkcdn.com/img/mxc/03242022_2022Spring_DRFurn_AMOD.jpg?imwidth=1200&impolicy=custom" alt="" /> */}
                    </div>
                </div>
            </div>

            <div className="ShopByCategory__Box">
                <h4>Shop By Category</h4>
                <div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/da8e341a52b0b4168f5531527177130eec875ca8/Carson-Carrington-Odhult-Tufted-Contemporary-Tuxedo-Sofa.jpg?imWidth=320&impolicy=medium" alt="" />
                        </div>
                        <p>Sofas & Couches</p>
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/22341232/Candace-Mid-Century-Modern-Fabric-Arm-Chair-and-Loveseat-Set-by-Christopher-Knight-Home-087d71b4-c7d8-4352-b7f5-ac19c5a60ce2_1000.jpg?imWidth=320&impolicy=medium" alt="" />
                        </div>
                        <p>Living Room Sets</p>
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/24151999/Welles-Mid-Century-2-Piece-Chaise-Sectional-Sofa-Set-With-Tufted-by-Christopher-Knight-Home-62f39e28-0a20-4594-8815-be5fb283c2b1_1000.jpg?imWidth=320&impolicy=medium" alt="" />
                        </div>
                        <p>Sectional Sofas</p>
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/cc3e23e59b0b7275ff6cb732d7c2d7f6f18df9e9/The-Grey-Barn-70%22-Rustic-Fireplace-TV-Stand-Console.jpg?imWidth=320&impolicy=medium" alt="" />
                        </div>
                        <p>TV Stands & Entertainment</p>
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/2c822047c6482dd072478dac0a517f7fd4ba74f2/Berwick-Metal-and-Wood-Nesting-Basket-Tables.jpg?imWidth=320&impolicy=medium" alt="" />
                        </div>
                        <p>Console Coffee & End Tables</p>
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/f7e4607f8a2129ab4b1ab22cd1769a61b681c3db/Abbyson-Holloway-Mid-century-Top-Grain-Leather-Pushback-Recliner.jpg?imWidth=320&impolicy=medium" alt="" />
                        </div>
                        <p>Recliner Chairs & Rocking Recliners</p>
                    </div>
                </div>
            </div>

            <div className="ShopByCategory__Box">
                <h4>Top Trending</h4>
                <div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/dfd768dd6f5ec2fc877af8695096a5ff4e9942e4/Copper-Grove-Dhi-Upholstered-Armchair.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/25776175/Simple-Living-Judith-Dining-Set-with-Bench-126a74d3-159a-49ee-9825-981cc408be98_600.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Living Room Chairs</p>
                        {/* <p>Lorem ipsum dolor sit.</p> */}
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/14741699/Christopher-Knight-Home-Yuny-Round-Fabric-Ottoman-Pouf-43157217-9e91-49f5-9440-a293f5a47a18_1000.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/9570455/Simple-Living-5-piece-Baxter-Dining-Set-with-Storage-Ottomans-35f90f81-91ce-49d4-988a-6b4b37870f00_600.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Ottomans & Storage Ottomans</p>
                        {/* <p>Lorem ipsum dolor sit.</p> */}
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/a32ab49e9155e1abe7a5903331149853a3e02c18/Carson-Carrington-Hedeby-Upholstered-Fabric-Loveseat.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/29168118/Garrison-Espresso-Convertible-Dining-Set-by-iNSPIRE-Q-Modern-c449fc47-9f52-44d3-ac71-92db6ae23b47_1000.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Loverseats</p>
                        {/* <p>Lorem ipsum dolor sit.</p> */}
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/0485073b17812f0a60e7686583f28e805f0aeac8/Ramses-Modern-Grey-Bookcase-Display-Cabinet.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/30158760/Hayden-9Pc-Dining-Set-b16d73e2-250c-4809-9e41-84778f60f0fa_600.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Bookshelves & Bookcases</p>
                        {/* <p>Lorem ipsum dolor sit.</p> */}
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/b6158f17126c52bc350f84c94db20fa716543fce/Abbyson-Carson-Mid-century-Tufted-Convertible-Futon-Sleeper-Sofa.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/20306618/Carbon-Loft-Kettering-Metal-Chairs-and-84-inch-Table-with-Leaves-Dining-Set-6a8d35a5-86cb-4d1a-83b2-780088503347_1000.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Futons</p>
                        {/* <p>Lorem ipsum dolor sit.</p> */}
                    </div>
                    <div>
                        <div>
                           <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/bf33b0970649fedab76cbe0913b1911ddc4ea7f6/Morgan-Creek-Antique-White-Storage-Hall-Bench.jpg?imWidth=320&impolicy=medium" alt="" /> 
                        </div>
                        <p>Benches & Settees</p>
                        {/* <p>Lorem ipsum dolor sit.</p> */}
                    </div>
                </div>
            </div>

            <div className="ShopByCategory__Box">
                <h4>Shop Our Style</h4>
                <div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/img/mxc/10222019_LRFurni_z_ThirdBMOD1_ModernandContemporaryLivingRoomFurniture.jpg?imWidth=320&impolicy=medium" alt="" />
                        </div>
                        <p>Modern & Contempor ary Living Room Furniture</p>
                        {/* <p>Lorem ipsum dolor sit.</p> */}
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/img/mxc/10222019_LRFurni_z_ThirdBMOD2_RusticLivingRoomFurniture.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/25776175/Simple-Living-Judith-Dining-Set-with-Bench-126a74d3-159a-49ee-9825-981cc408be98_600.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Rustic Living Room Furniture</p>
                        {/* <p>Lorem ipsum dolor sit.</p> */}
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/img/mxc/10222019_LRFurni_z_ThirdBMOD3_FarmhouseLivingRoomFurniture.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/9570455/Simple-Living-5-piece-Baxter-Dining-Set-with-Storage-Ottomans-35f90f81-91ce-49d4-988a-6b4b37870f00_600.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Farmhouse Living Room Furniture</p>
                        {/* <p>Lorem ipsum dolor sit.</p> */}
                    </div>
                    <div>
                        <div>
                           <img src="https://ak1.ostkcdn.com/img/mxc/10222019_LRFurni_z_ThirdBMOD4_TraditionalLivingRoomFurniture.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/29168118/Garrison-Espresso-Convertible-Dining-Set-by-iNSPIRE-Q-Modern-c449fc47-9f52-44d3-ac71-92db6ae23b47_1000.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Traditional Living Room Furniture</p>
                        {/* <p>Lorem ipsum dolor sit.</p> */}
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/img/mxc/10222019_LRFurni_z_ThirdBMOD5_MidCenturyModernLivingRoomFurniture.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/30158760/Hayden-9Pc-Dining-Set-b16d73e2-250c-4809-9e41-84778f60f0fa_600.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Mid-Century Modern Living Furniture</p>
                        {/* <p>Lorem ipsum dolor sit.</p> */}
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/img/mxc/10222019_LRFurni_z_ThirdBMOD6_NauticalandCoastalLivingRoomFurniture.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/20306618/Carbon-Loft-Kettering-Metal-Chairs-and-84-inch-Table-with-Leaves-Dining-Set-6a8d35a5-86cb-4d1a-83b2-780088503347_1000.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Nautical & Coastal Living Room Furniture</p>
                        {/* <p>Lorem ipsum dolor sit.</p> */}
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
                                <a className="Category__Filter" href="#">Coffee Console, Sofa & End Tables</a>
                                <a className="Category__Filter" href="#">Living Room Chairs</a>
                                <a className="Category__Filter" href="#">TV Stands & Enterainment</a>
                                <a className="Category__Filter" href="#">Ottomans & Storage Ottomans</a>
                                <a className="Category__Filter" href="#">Benches & Settees</a>
                                <a className="Category__Filter" href="#">Bookshelves & Bookcases</a>
                                <a className="Category__Filter" href="#">Bookshelves & Bookcases</a>
                                <a className="Category__Filter" href="#">Sofas & Couches</a>
                                <a className="Category__Filter" href="#">Recliner Chairs & Rocking Recliners</a>
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
                                    <a target={"_blank"} href={`/ProductDetails/Furniture/Living-Room-Furniture/${element._id}`} style={{ textDecoration : "none"}}>
                                        <div style={{border : "0", textDecoration : "none"}} className="Grid__Box-Image">
                                            <img style={{ textDecoration : "none"}} src={element.image} alt="" />
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