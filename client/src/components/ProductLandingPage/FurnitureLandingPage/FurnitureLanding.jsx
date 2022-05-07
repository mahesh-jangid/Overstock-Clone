
import "./FurnitureLanding.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


export const FurnitureLanding = () => {

    return (

        <div className="Furniture__Container">
            <div id="furniture_headDiv">
                <p>Furniture</p>
            </div>

            <div className="picshow_1">
                <div>
                    <p>Featured categories</p>
                
                    <a id="livingRoom" href="/Furniture/Living-Room-Furniture">Living Room Furniture</a>
                
                    <a href = "/Furniture/Dining-Room-Bar-Furniture" id="diningRoom">Dining Room Furniture</a>
                
                    <a href = "/Furniture/Bedroom-Furniture" id="bedRoom">Bedroom Furniture</a>
                
                    <a href = "" id="patio">Patio Furniture</a>
                
                    <a href = "/Furniture/Kitchen-Furniture" id="kitchen">Kitchen Furniture</a>
                
                    <a href = "" id="entryway">Entryway Furniture</a>
                
                    <a href = "" id="homeOffice">Home Office Furniture</a>
                
                    <a href = "" id="smallSpace">Small Space Furniture</a>
                
                    <a href = "" id="bathroom">Bathroom Furniture</a>
                
                    <a href = "" id="mattress">Mattresses</a>
                
                    <a href = "" id="recreation">Recreation Room</a>
                
                    <a href = "" id="kids">Kids & Toddler Furniture</a>
                
                    <a href = "" id="gym">Home Gym</a>
                
                    <a href = "">Shop All Furniture on Sale</a>
                </div>

                <div>
                    <div>
                        <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURNI_Hero_Desktop.jpg?imwidth=680&impolicy=medium?imwidth=750" alt="" />
                    </div>
                    <div>
                        <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURN_MM_012.png?imwidth=320&impolicy=medium?imwidth=384" alt="" />
                        <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURN_MM_022.png?imwidth=320&impolicy=medium?imwidth=384" alt="" />
                    </div>
                </div>
            </div>


            <p id="Popular__Heading">Popular Furniture Categories</p>

            <div className="picshow_2">
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURNI_PopCat_1.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="livingRoom">Patio Furniture</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURNI_PopCat_2.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="diningRoom">Living Room Funiture</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURNI_PopCat_3.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="bedroom">Dining Room Funiture</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURNI_PopCat_4.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="patio">Bedroom Furniture</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/09062021_FALL2021_Furni_PopCat_10.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="homeOffice">Mattresses</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURNI_PopCat_6.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="smallSpace">Home Office Furniture</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_FURNITURE_PopCat_6_SmallSpaceFurniture.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="kitchen">Small Space Furniture</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_FURNITURE_PopCat_7_KitchenFurniture.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="entryWay">Kitchen Furniture</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURNI_PopCat_9.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="bathroom">Entryway Furniture</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURNI_PopCat_10.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="mattress">Bathroom Furniture</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/09062021_FALL2021_Furni_PopCat_11.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="recreation">Recreation Room Furniture</p>
                </div>
                <div onClick={() => {
                    window.location.href = "/Furniture/Bedroom-Furniture"
                }}>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURNI_PopCat_12.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="kids">Kids & Toddler Room Furniture</p>
                </div>
            </div>

            <div className="picshow_3">
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURNI_688x444_BG01.jpg?imwidth=1024&impolicy=medium" alt="" />
                </div>
                <div>
                    <p>How to Decorate With a Chaise Lounge</p>
                    <p>
                        Self-indulgent and relaxing chaise lounge chairs embody the mantra, 
                        treat yourself! You may picture old Hollywood glamor or Victorian 
                        parlors when you think of chaise lounges. But these luxurious long 
                        chairs can neatly fit into any decor scheme, be it mid-mod or farmhouse chic. 
                        Whether for the foot of your bed or a reading nook in the living room, these 
                        tips will help you find a trendy chaise lounge for your home.
                    </p>
                    <button>Read More</button>
                </div>
            </div>

            <div className="picshow_4">
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURNI_688x444_BG02.jpg?imwidth=1024&impolicy=medium" alt="" />
                </div>
                <div>
                    <p>Home Office Ideas on a Budget</p>
                    <p>
                        Many of us are working from home for the foreseeable future - and 
                        looking to keep some cash in reserve. The privacy, the productivity…we’re 
                        all missing a few perks of the professional workspace. These office decor 
                        tips will help you set up a productive home office without breaking the bank
                    </p>
                    <button>Read More</button>
                </div>
            </div>



            <p id = "Popular__Heading">Shop More Furniture</p>
            <div className="picshow_5">
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular1.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="couch">Sofas & Couches</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular2.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="sectionalSofa">Sectional Sofas</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular3.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="livingRoom">Living Room Sets</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular4.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="accentTable">Accent Tables</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular5.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="loveSeat">Loveseats</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular6.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="accentChair">Accent Chairs</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/12242020-gnp-furniture-219x219_shop_more_diningrm.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="diningRoom">Dining Sets</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular8.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="diningRoom">Dining Tables</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular9.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="diningRoom">Dining Chairs</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular10.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="buffets">Buffets</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular11.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="barStool">Bar Stools</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular12.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="bed">Beds</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular13.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="bed">Bedroom Sets</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular14.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="bed">Headboards</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular15.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="chest">Chests & Dressers</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular16.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="nightstand">Nightstands</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-furniture-otherPopular17.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="kids">Kids & Toddler Beds</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/071718_sale_square.svg" alt="" />
                    <p>Shop All Furniture on Sale</p>
                </div>
            </div>
        </div>
    )
}