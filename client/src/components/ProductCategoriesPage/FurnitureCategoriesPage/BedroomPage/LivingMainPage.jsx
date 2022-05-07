
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
import { addBedroomProductData } from "./action";

import axios from "axios";

// import { Link } from "react-router-dom";

export const BedroomMainPage = () => {
    const [sorting, setSorting] = useState("")
    const [vendorarrow, setVendorArrow] = useState(true);
    const [materialsarrow, setMaterialsArrow] = useState(true);
    const [pricearrow, setPriceArrow] = useState(true);
    const [sizearrow, setSizeArrow] = useState(true);
    const LivingData = useSelector((store) => store.FurnitureBedroomPage.bedroomdata);
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
        fetch("/cart/tobedroompage")
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
        axios.get(`/Furniture/Bedroom-Furniture/${sorting}`)
        // .then(res => setDiningMainData(res.data))
        .then(res => {
            return dispatch(addBedroomProductData(res.data))
        })
        .catch(error => console.log("Error : ", error))
    }
    const getData = () => {
        axios.get("/Furniture/Bedroom-Furniture")
        // .then(res => setDiningMainData(res.data))
        .then(res => {
            return dispatch(addBedroomProductData(res.data))
        })
        .catch(error => console.log("Error : ", error))
    }

    return (
        <div className="DiningMainContainer">
            <h1 className="DiningHeading">Bedroom Furniture</h1>

            <div className="DiningCategories__OfferBox">
                <div className="DiningCategories__Box">
                    <h5>Beds</h5>
                    <h5>Bedroom Sets</h5>
                    <h5>Dressers & Chests</h5>
                    <h5>Nightstands & Bedside Tables</h5>
                    <h5>Headboards</h5>
                    <h5>Armoires & Wardrobe Closets</h5>
                    <h5 style={{color : "red"}}>{<BsFillBookmarkFill />} Shop All Bedroom Furniture on Sale</h5>
                </div>

                <div className="DiningCategoriesOffer__Box">
                    <div className="DiningCategoriesOffer__Upper-Banner">
                        <img src="https://png.pngtree.com/thumb_back/fw800/back_our/20190622/ourmid/pngtree-home-improvement-coffee-table-creative-warm-color-e-commerce-banner-image_215376.jpg" alt="" />
                    </div>
                    <div className="DiningCategoriesOffer__Lower-Banner">
                        <img src="https://ak1.ostkcdn.com/img/mxc/12202021_2022Winter_BRFurn_AMOD.jpg?imwidth=1200&impolicy=custom" alt="" />
                    </div>
                </div>
            </div>

            <div className="ShopByCategory__Box">
                <h4>Popular Categories</h4>
                {/* <h4>Shop By Category</h4> */}
                <div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/b3f49865907eec83f1a24f7856d17c559c883c29/Giselle-Antique-Graceful-Dark-Bronze-Victorian-Iron-Bed-by-iNSPIRE-Q-Classic.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/29139287/Cheyenne-Black-and-Distressed-Gold-Finish-Dining-Set-by-iNSPIRE-Q-Modern-9b35167c-1a47-425e-b889-ec97c3bc671c_1000.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Beds</p>
                        {/* <p>Lorem ipsum dolor sit.</p> */}
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/b2f5ba19a79290f60aa76a1378c09fc849049dae/Novogratz-Kelly-6-Drawer-Dresser.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/25429180/Abbyson-Bevie-Velvet-Dining-Chair-c379f2de-5818-4500-8c7d-e9d671cc2193_600.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Dressers</p>
                        {/* <p>Lorem ipsum dolor sit.</p> */}
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/0b23d2a580f970b6f81b61917d2e3c20e15202e6/Furniture-of-America-Inyx-Walnut-3-piece-Bedroom-Set-with-2-Nightstands.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/1f10c670c78933b7e2e0ca984345608018550d2d/Safavieh-Alyssa-Brown-Rustic-Mid-Century-Dining-Table.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Bedroom Sets</p>
                        {/* <p>Lorem ipsum dolor sit.</p> */}
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/d97f071fb17e9bc2b887a4aa6eee0553ea2eb7eb/Picket-House-Furnishings-Brody-Side-Table-in-Grey.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/30064853/Novogratz-Nora-3-Piece-Pub-Set-with-Faux-Terrazzo-Top-3e88982e-5e05-4c46-8791-b55fbda2b3d8_600.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Nightstands & Bedside Tables</p>
                        {/* <p>Lorem ipsum dolor sit.</p> */}
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/25948344a4a53d8a16a796ce01f547bc40bffc23/Brookside-Emmie-Adjustable-Upholstered-Headboard.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/img/mxc/010720-sp-diningbarfurniture-bmod1-6.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Headboards</p>
                        {/* <p>Lorem ipsum dolor sit.</p> */}
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/images/products/17783850/Melina-Tufted-Linen-Wingback-Bed-by-iNSPIRE-Q-Bold-d2f81d06-f240-4737-bb73-d94419a26a12_320.jpg?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/28626024/Lifestorey-Vilas-Solid-Wood-Buffet-8a28b8d2-f5b8-469e-a6bc-5329221192c4_600.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Platform Beds</p>
                        {/* <p>Lorem ipsum dolor sit.</p> */}
                    </div>
                </div>
            </div>

            <div className="ShopByCategory__Box">
                <h4>Shop by Bed Size</h4>
                <div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/img/mxc/BedroomSP_Icon_twinheadboard@3x.png?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/23589485/Carson-Carrington-Tornio-Round-Dining-Set-c35c19a5-381d-4c6b-ba3b-83fc66eab335_600.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Twin</p>
                        {/* <p>Lorem ipsum dolor sit.</p> */}
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/img/mxc/BedroomSP_Icon_Fullheadboard@3x.png?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/25776175/Simple-Living-Judith-Dining-Set-with-Bench-126a74d3-159a-49ee-9825-981cc408be98_600.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Full</p>
                        {/* <p>Lorem ipsum dolor sit.</p> */}
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/img/mxc/BedroomSP_Icon_Queenheadboard@3x.png?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/9570455/Simple-Living-5-piece-Baxter-Dining-Set-with-Storage-Ottomans-35f90f81-91ce-49d4-988a-6b4b37870f00_600.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>Queen</p>
                        {/* <p>Lorem ipsum dolor sit.</p> */}
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/img/mxc/BedroomSP_Icon_Kingheadboard@3x.png?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/29168118/Garrison-Espresso-Convertible-Dining-Set-by-iNSPIRE-Q-Modern-c449fc47-9f52-44d3-ac71-92db6ae23b47_1000.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>King</p>
                        {/* <p>Lorem ipsum dolor sit.</p> */}
                    </div>
                    <div>
                        <div>
                            <img src="https://ak1.ostkcdn.com/img/mxc/BedroomSP_Icon_CalKingheadboard@3x.png?imWidth=320&impolicy=medium" alt="" />
                            {/* <img src="https://ak1.ostkcdn.com/images/products/30158760/Hayden-9Pc-Dining-Set-b16d73e2-250c-4809-9e41-84778f60f0fa_600.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
                        <p>California King</p>
                        {/* <p>Lorem ipsum dolor sit.</p> */}
                    </div>
                    <div>
                        <div>
                            {/* <img src="https://ak1.ostkcdn.com/images/products/20306618/Carbon-Loft-Kettering-Metal-Chairs-and-84-inch-Table-with-Leaves-Dining-Set-6a8d35a5-86cb-4d1a-83b2-780088503347_1000.jpg?imWidth=320&impolicy=medium" alt="" /> */}
                        </div>
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
                    <option value=""></option>
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
                                <a className="Category__Filter" href="#">Beds</a>
                                <a className="Category__Filter" href="#">Bedroom Sets</a>
                                <a className="Category__Filter" href="#">Dressers & Chests</a>
                                <a className="Category__Filter" href="#">Nightstands & Bedside Tables</a>
                                <a className="Category__Filter" href="#">Headboards</a>
                                <a className="Category__Filter" href="#">Armoires & Wardrobe Closets</a>
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
                                    <a target={"_blank"} href={`/ProductDetails/Furniture/Bedroom-Furniture/${element._id}`} style={{ textDecoration : "none"}}>
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