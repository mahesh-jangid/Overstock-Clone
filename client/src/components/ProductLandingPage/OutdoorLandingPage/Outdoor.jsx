
import "./Outdoor.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


export const OutdoorLanding = () => {

    return (

        <div className="Furniture__Container">
            <div id="furniture_headDiv">
                <p>Outdoor</p>
            </div>

            <div className="picshow_1">
                <div>
                    <p>Featured categories</p>

                    <p>Patio Furniture</p>
                    <p>Outdoor Decor</p>
                    <p>Outdoor Rugs</p>
                    <p>Garden Accents</p>
                    <p>Fire Pits & Chimineas</p>
                    <p>Patio Umbrellas & Shades</p>
                    <p>Gardening & Yard Care</p>
                    <p>Outdoor Storage</p>
                    <p>Outdoor Lighting</p>
                    <p>Swing Sets</p>
                    <p>Grills & Outdoor Cooking</p>
                    <p>Hot Tubs, Spas & Accessories</p>
                    <p>Swimming Pools & Accessories</p>
                    <p>Shop All Furniture on Sale</p>
                </div>

                <div>
                    <div>
                        <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_OUTDOOR_Hero_Desktop.jpg?imwidth=680&impolicy=medium?imwidth=750" alt="" />
                    </div>
                    <div>
                        <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/92e8e8a36e87cb6935ea78091b041debff5e710b/Brookside%C2%A0Iris%C2%A0Rattan-Outdoor-Seating-Set%C2%A0with-Patio-Table%C2%A0.jpg?imwidth=480&impolicy=medium" alt="" />
                        <img src="https://ak1.ostkcdn.com/images/products/is/images/direct/2ce5434ee0008bdb6fd6ac752e28a3f45ead7a7d/3-pc.-Outdoor-Cushioned-Wicker-Chat-Set.jpg?imwidth=480&impolicy=medium" alt="" />
                    </div>
                </div>
            </div>

            {/*  */}
            <p id="Popular__Heading">Popular Outdoor Categories</p>

            <div className="picshow_2">
                <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_OUTDOOR_PopCat_1.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="livingRoom">Patio Furniture</p>
                </div>
                <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/09062021_FALL2021_Outdoor_PopCat_2.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="diningRoom">Outdoor Rugs</p>
                </div>
                <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_OUTDOOR_PopCat_3.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="bedroom">Outdoor Decor</p>
                </div>
                <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_OUTDOOR_Popcat_4.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="patio">Fire Pits & Chimineas</p>
                </div>
                <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_OUTDOOR_PopCat_5.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="homeOffice">Garden Accents</p>
                </div>
                <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_OUTDOOR_PopCat_6.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="smallSpace">Outdoor Lighting</p>
                </div>
                <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_OUTDOOR_PopCat_7.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="kitchen">Patio Umbrellas & Shades</p>
                </div>
                <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-PopCat_7.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="entryWay">Gardening & Yard Care</p>
                </div>
            </div>
            {/*  */}

            {/*  */}
            {/* <p id="Popular__Heading">Shop Popular Rug Colors</p> */}

            <div className="picshow_2">
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_OUTDOOR_PopCat_9.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="livingRoom">Outdoor Storage</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-PopCat_12.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="diningRoom">Swing Sets</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-PopCat_9.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="bedroom">Grills & Outdoor Cooking</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_OUTDOOR_PopCat_12.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="patio">Outdoor Dining</p>
                </div>
            </div>
            {/*  */}

            <div className="picshow_3">
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_OUTDOOR_688x444_BG01.png?imwidth=1024&impolicy=medium" alt="" />
                </div>
                <div>
                    <p>5 Small Outdoor Patio Ideas</p>
                    <p>
                    Having any sort of outdoor space, even a modest one, is a welcome retreat as the temps start to warm up from winter. To get the most from your patio, thoughtful furniture arrangement and decor choices can make all the difference. Here are five ideas for outdoor patio layouts to help you get started.
                    </p>
                    <button>Read More</button>
                </div>
            </div>

            <div className="picshow_4">
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_OUTDOOR_688x444_BG02.png?imwidth=1024&impolicy=medium" alt="" />
                </div>
                <div>
                    <p>Everything You Need to Know About Outdoor Rugs</p>
                    <p>
                    When you’re dreaming of longer days and warmer temperatures, capture all of your optimism and excitement for the summer season in a vibrant outdoor rug. The best outdoor rugs create flow between your spaces and soften the hardy surfaces of your home’s exterior. Use these helpful tips to get the most from your outdoor area rugs, no matter what time of year it is.
                    </p>
                    <button>Read More</button>
                </div>
            </div>



            <p id="Popular__Heading">Shop More Outdoor</p>
            <div className="picshow_5">

                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular1.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="couch">Outdoor Sectionals</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular2.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="sectionalSofa">Outdoor Dining Sets</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular3.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="livingRoom">Hammocks & Swings</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular4.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="accentTable">Outdoor Cushions & Pillows</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular5.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="loveSeat">Bistro Sets</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular6.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="accentChair">Outdoor Coffee & Side Tables</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular7.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="diningRoom">Outdoor Chaise Lounges</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular8.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="diningRoom">Outdoor Bar Carts</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular9.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="diningRoom">Outdoor Club Chairs</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular10.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="buffets">Adirondack Chairs</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular11.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="barStool">Outdoor Benches</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular12.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="bed">Planters, Hangers & Stands</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular13.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="bed">Outdoor Fountains</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular14.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="bed">Outdoor Wall Lighting</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular15.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="chest">String Lights</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular16.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="nightstand">Solar Lights</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-patiogarden-175x175_otherPopular17.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="kids">Garden Accents</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/071718_sale_square.svg" alt="" />
                    <p>Shop All Outdoor on Sale</p>
                </div>

            </div>
        </div>
    )
}