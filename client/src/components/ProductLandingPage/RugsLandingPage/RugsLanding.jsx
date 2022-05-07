
import "./RugsLanding.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


export const RugsLanding = () => {

    return (

        <div className="Furniture__Container">
            <div id="furniture_headDiv">
                <p>Rugs</p>
            </div>

            <div className="picshow_1">
                <div>
                    <p>Featured categories</p>

                    <p>Area Rugs</p>
                    <p>Rug Pads</p>
                    <p>Shag Area Rugs</p>
                    <p>Kitchen Rugs & Mats</p>
                    <p>Stair Treads</p>
                    <p>Unique One Of A Kind Area Rugs</p>
                    <p>Washable Area Rugs</p>
                    <p>Handmade Area Rugs</p>
                    <p>Flatweave Area Rugs</p>
                    <p>Outdoor Area Rugs</p>
                    <p>Runner Area Rugs</p>
                    <p>Kids & Tween Area Rugs</p>
                    <p>Shop All Furniture on Sale</p>
                </div>

                <div>
                    <div>
                        <img src="https://ak1.ostkcdn.com/img/mxc/05022022_Desktop_Rugs_Safavieh.jpg?imwidth=680&impolicy=medium?imwidth=750" alt="" />
                    </div>
                    <div>
                        <img src="https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_RUGS_MM_01.png?imwidth=320&impolicy=medium?imwidth=384" alt="" />
                        <img src="https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_RUGS_MM_02.png?imwidth=320&impolicy=medium?imwidth=384" alt="" />
                    </div>
                </div>
            </div>

            {/*  */}
            <p id="Popular__Heading">Shop Popular Rug Sizes</p>

            <div className="picshow_2">
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_TOPTAX1_3x5-480x480_2.png?imwidth=400&impolicy=medium" alt="" />
                    <p id="livingRoom">3' x 5' Area Rugs</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_TOPTAX2_4x6-480x480_2.png?imwidth=400&impolicy=medium" alt="" />
                    <p id="diningRoom">4' x 6' Area Rugs</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_TOPTAX3_5x8-480x480_2.png?imwidth=400&impolicy=medium" alt="" />
                    <p id="bedroom">5' x 8' Area Rugs</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_TOPTAX4_6x9-480x480_2.png?imwidth=400&impolicy=medium" alt="" />
                    <p id="patio">6' x 9' Area Rugs</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_TOPTAX5_7x9-480x480_2.png?imwidth=400&impolicy=medium" alt="" />
                    <p id="homeOffice">7' x 9' Area Rugs</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_TOPTAX6_8x10-480x480_2.png?imwidth=400&impolicy=medium" alt="" />
                    <p id="smallSpace">8' x 10' Area Rugs</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_TOPTAX7_9x12-480x480_2.png?imwidth=400&impolicy=medium" alt="" />
                    <p id="kitchen">9' x 12' Area Rugs</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_TOPTAX8_10x14-480x480_2.png?imwidth=400&impolicy=medium" alt="" />
                    <p id="entryWay">10' x 14' Area Rugs</p>
                </div>
            </div>
            {/*  */}

            {/*  */}
            <p id="Popular__Heading">Shop Popular Rug Colors</p>

            <div className="picshow_2">
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_MULTITAXA1_Blue_Rugs-336x336_2.png?imwidth=400&impolicy=medium" alt="" />
                    <p id="livingRoom">Blue Rugs</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_MULTITAXA2_Grey_Rugs-336x336_2.png?imwidth=400&impolicy=medium" alt="" />
                    <p id="diningRoom">Grey Rugs</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_MULTITAXA3_Ivory_Rugs-336x336_2.png?imwidth=400&impolicy=medium" alt="" />
                    <p id="bedroom">Ivory Rugs</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_MULTITAXA4_Red_Rugs-336x336_2.png?imwidth=400&impolicy=medium" alt="" />
                    <p id="patio">Red Rugs</p>
                </div>
            </div>
            {/*  */}

            {/*  */}
            <p id="Popular__Heading">Shop Popular Rug Styles</p>

            <div className="picshow_2">
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_MULTITAXB1_Bohemian-Eclectic-lifestyle-336x336.png?imwidth=400&impolicy=medium" alt="" />
                    <p id="livingRoom">Bohemian & Eclectic Area Rugs</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_MULTITAXB2_Modern-Contemporary-lifestyle-336x336.png?imwidth=400&impolicy=medium" alt="" />
                    <p id="diningRoom">Modern & Contemporay Area Rugs</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_MULTITAXB3_Vintage-336x336.png?imwidth=400&impolicy=medium" alt="" />
                    <p id="bedroom">Vintage Area Rugs</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_MULTITAXB4_Shag-336x336.png?imwidth=400&impolicy=medium" alt="" />
                    <p id="patio">Shag Area Rugs</p>
                </div>
            </div>
            {/*  */}

            <div className="picshow_3">
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_RUGS_688x444_BG01.jpg?imwidth=1024&impolicy=medium" alt="" />
                </div>
                <div>
                    <p>Tips on Buying the Best Outdoor Rug</p>
                    <p>
                        Whether for your porch, your patio, or even your living room, 
                        outdoor rugs are built to last. With so many stylish yet functional 
                        outdoor rugs available, you may not know which rug is best for you. 
                        Let these tips for finding weather-resistant and waterproof outdoor 
                        rugs be your guide to your most stylish patio yet.
                    </p>
                    <button>Read More</button>
                </div>
            </div>

            <div className="picshow_4">
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_RUGS_688x444_BG02.jpg?imwidth=1024&impolicy=medium" alt="" />
                </div>
                <div>
                    <p>Top 10 Boho Rugs</p>
                    <p>
                        Both casual and inviting, boho style exudes worldly flair.
                        Whether you're a full-fledged bohemian or are just itching 
                        for some extra color in your spring decor, a boho rug is an 
                        easy way to inject your space with some free-spirited personality. 
                        Read on for our top 10 favorite boho rugs.
                    </p>
                    <button>Read More</button>
                </div>
            </div>



            <p id = "Popular__Heading">Shop More Rugs</p>
            <div className="picshow_5">

                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER1_Area-rugs-267x267.png?imwidth=200&impolicy=medium" alt="" />
                    <p id="couch">Area Rugs</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER2_Rug-Pads-267x267.png?imwidth=200&impolicy=medium" alt="" />
                    <p id="sectionalSofa">Rug Pads</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER3_Shag-rugs-267x267.png?imwidth=200&impolicy=medium" alt="" />
                    <p id="livingRoom">Shag Rugs</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER4_Kitchen-rugs-mats-267x267.png?imwidth=200&impolicy=medium" alt="" />
                    <p id="accentTable">Kitchen Rugs & Mats</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-gnp-rugs_otherPopular4.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="loveSeat">Stair Treads</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER6_One-of-a-kind-267x267.png?imwidth=200&impolicy=medium" alt="" />
                    <p id="accentChair">One of a Kind Rugs</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER7_Machine-Washable-267x267.png?imwidth=200&impolicy=medium" alt="" />
                    <p id="diningRoom">Machine Washable</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-gnp-rugs_otherPopular7.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="diningRoom">Handmade Rugs</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-gnp-rugs_otherPopular8.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="diningRoom">Flat Weave Rugs</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER10_Outdoor-rugs-267x267.png?imwidth=200&impolicy=medium" alt="" />
                    <p id="buffets">Outdoor Rugs</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER11_Runner-rugs-267x267.png?imwidth=200&impolicy=medium" alt="" />
                    <p id="barStool">Runner Rugs</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER12_Kids-tween-rugs-267x267.png?imwidth=200&impolicy=medium" alt="" />
                    <p id="bed">Kids & Tween Rugs</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-gnp-rugs_otherPopular12.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="bed">Door Mats</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER14_Bath-mats-rugs-267x267.png?imwidth=200&impolicy=medium" alt="" />
                    <p id="bed">Bath Math & Rugs</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER15_Persian-rugs-267x267.png?imwidth=200&impolicy=medium" alt="" />
                    <p id="chest">Persian Rugs</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER16_Shop-new-arrivals-267x267.png?imwidth=200&impolicy=medium" alt="" />
                    <p id="nightstand">Shop New Arrivals</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03212022_RUGS_OTHER17_Sales-267x267.png?imwidth=200&impolicy=medium" alt="" />
                    <p id="kids">Shop All Rugs on Sale</p>
                </div>
                
            </div>
        </div>
    )
}