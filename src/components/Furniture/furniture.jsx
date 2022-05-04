import "./furniture.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


export const Furniture = () => {

    return (

        <div>
 <div id="furniture_headDiv">
        <p>Furniture</p>
    </div>
    
    <div id="picshow_1">
        <div>
            <div>  
                <p>Featured categories</p>
            </div>
            <div>
                <p id="livingRoom">Living Room Furniture</p>
            </div>
            <div>       
                <p id="diningRoom">Dining Room Furniture</p>
            </div>
            <div>
                <p id="bedRoom">Bedroom Furniture</p>
            </div>
            <div>
                <p id="patio">Patio Furniture</p>
            </div>
            <div>
                <p id="kitchen">Kitchen Furniture</p>
            </div>
            <div>
                <p id="entryway">Entryway Furniture</p>
            </div>
            <div>
                <p id="homeOffice">Home Office Furniture</p>
            </div>
            <div>
                <p id="smallSpace">Small Space Furniture</p>
            </div>
            <div>
                <p id="bathroom">Bathroom Furniture</p>
            </div>
            <div>
                <p id="mattress">Mattresses</p>
            </div>
            <div>
                <p id="recreation">Recreation Room</p>
            </div>
            <div>
                <p id="kids">Kids & Toddler Furniture</p>
            </div>
            <div>
                <p id="gym">Home Gym</p>
            </div>
            <div>
                <p>Shop All Furniture on Sale</p>
            </div>
            
        </div>
    
        <div>
            <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/02142022_Desktop_Furniture_ChristopherKnight.jpg?imwidth=680&impolicy=medium?imwidth=750" alt="" />
            </div>
            <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_688x444_BG01.jpg?imwidth=1024&impolicy=medium" alt="" />
                <img src="https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_FURNITURE_MM_02.png?imwidth=320&impolicy=medium?imwidth=384" alt="" />
            </div>
        </div>
    </div>
    
    
    <div id="picshow_2">
        <p>Popular Furniture Categories</p>
    
        <div>
            <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_FURNITURE_PopCat_1_LivingRoomFurniture.jpg?imwidth=400&impolicy=medium" alt="" />
                <p id="livingRoom">Living Room Furniture</p>
            </div>
            <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_FURNITURE_PopCat_2_DiningRoomFurniture.jpg?imwidth=400&impolicy=medium" alt="" />
                <p id="diningRoom">Dining Room Furniture</p>
            </div>
            <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_FURNITURE_PopCat_3_BedroomFurniture.jpg?imwidth=400&impolicy=medium" alt="" />
                <p id="bedroom">Bedroom Furniture</p>
            </div>
            <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_FURNITURE_PopCat_4_PatioFurniture.jpg?imwidth=400&impolicy=medium" alt="" />
                <p id="patio">Patio Furniture</p>
            </div>
        </div>
        <div>
            <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_FURNITURE_PopCat_5_OfficeFurniture.jpg?imwidth=400&impolicy=medium" alt="" />
                <p id="homeOffice">Home Office Furniture</p>
            </div>
            <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_FURNITURE_PopCat_6_SmallSpaceFurniture.jpg?imwidth=400&impolicy=medium" alt="" />
                <p id="smallSpace">Small Space Furniture</p>
            </div>
            <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_FURNITURE_PopCat_7_KitchenFurniture.jpg?imwidth=400&impolicy=medium" alt="" />
                <p id="kitchen">Kitchen Furniture</p>
            </div>
            <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_FURNITURE_PopCat_8_EntrywayFurniture.jpg?imwidth=400&impolicy=medium" alt="" />
                <p id="entryWay">Entryway Furniture</p>
            </div>
        </div>
        <div>
            <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/10122021_FURNI_PopCat_9.jpg?imwidth=400&impolicy=medium" alt="" />
                <p id="bathroom">Bathroom Furniture</p>
            </div>
            <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/09062021_FALL2021_Furni_PopCat_10.jpg?imwidth=400&impolicy=medium" alt="" />
                <p id="mattress">Mattresses</p>
            </div>
            <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/09062021_FALL2021_Furni_PopCat_11.jpg?imwidth=400&impolicy=medium" alt="" />
                <p id="recreation">Recreation Room Furniture</p>
            </div>
            <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/09062021_FALL2021_Furni_PopCat_12.jpg?imwidth=400&impolicy=medium" alt="" />
                <p id="kids">Kids & Toddler Room Furniture</p>
            </div>
        </div>
    </div>
    
    
    <div id="picshow_3">
        <div>
            <img src="https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_FURNITURE_688x444_BG01.jpg?imwidth=1024&impolicy=medium" alt="" />
        </div>
        <div>
            <p>Top 4 TV Stand Styles</p>
            <p>
                From traditional, wooden designs to metallic, urban ones, the perfect TV stand 
                should match the decor of your living room. You can harmonize the overall look of your
                interior when you explore these top TV stand styles.
    
            </p>
            <button>Read More</button>
        </div>
    </div>
    
    <div id="picshow_4">
        
        <div>
            <p>How to Decorate a Living Room With Black Furniture</p>
            <p>
                Black furniture is sleek, beautiful, and bold. With the right pieces, you can dress
                your living room up or down and achieve a look that feels like home. No matter what
                look you're going for, here are a few tips for decorating your living room with black furniture.
    
            </p>
            <button>Read More</button>
        </div>
        <div>
            <img src="https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_FURNITURE_688x444_BG02.jpg?imwidth=1024&impolicy=medium" alt="" />
        </div>
    </div>
    
    
    
    <div id="picshow_5">
        <p>Shop More Furniture</p>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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

     </div>
    )
}