

import "./HomeImprovement.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


export const HomeImprovementLanding = () => {

    return (

        <div className="Furniture__Container">
            <div id="furniture_headDiv">
                <p>Home Improvement</p>
            </div>

            <div className="picshow_1">
                <div>
                    <p>Featured categories</p>

                    <p>Lighting</p>
                    
                    <p>Bathroom Vanities</p>
                    <p>Storage & Organization</p>
                    <p>Faucets</p>
                    <p>Flooring</p>
                    <p>Appliances</p>
                    <p>Showers</p>
                    <p>Hardware</p>
                    <p>Sinks</p>
                    <p>Yard Care</p>

                    <p>Electrical</p>
                </div>

                <div>
                    <div>
                        <img src="https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_HOMEIMPROVEMENT_Hero_Desktop.jpg?imwidth=680&impolicy=medium?imwidth=750" alt="" />
                    </div>
                    <div>
                        <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_HOMEIMP_MM_012.png?imwidth=320&impolicy=medium?imwidth=384" alt="" />

                        <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_HOMEIMP_MM_022.png?imwidth=320&impolicy=medium?imwidth=384" alt="" />
                    </div>
                </div>
            </div>

            {/*  */}
            <p id="Popular__Heading">Bathroom & Kitchen Renovation Essentials</p>

            <div className="picshow_2">
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-PopCat_1.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Bathroom Vanities</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-PopCat_10.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Showers</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-PopCat_2.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Bathtubs</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-PopCat_11.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Toilet</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/02182021-gnp-homeimprovement-bathroom-PopCat_5.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Vanity Mirrors</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-PopCat_3.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Bathroom Sinks</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/02182021-gnp-homeimprovement-bathroom-PopCat_7.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Bathroom Faucets</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/02182021-gnp-homeimprovement-bathroom-PopCat_8.jpg?imwidth=400&impolicy=medium" alt="" />
                    
                    <p>Bathroom Hardware</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-PopCat_14.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Kitchen Faucets</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-PopCat_13.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Kitchen Sinks</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-PopCat_19.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Kitchen Cabinets</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/02182021-gnp-homeimprovement-kitchen-PopCat_4.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Backsplash Tile</p>
                </div>
            </div>
            {/*  */}

            {/*  */}
            <p id="Popular__Heading">Home Renovation Essentials</p>

            <div className="picshow_2">
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/02182021-gnp-homeimprovement-home-PopCat_1.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Lighting & Ceiling Fans</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-PopCat_17.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Flooring</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/02182021-gnp-homeimprovement-home-PopCat_3.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Major Appliances</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/02182021-gnp-homeimprovement-home-PopCat_4.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Storage & Organization</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-PopCat_16.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Cabinet Hardware</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/02182021-gnp-homeimprovement-home-PopCat_6.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Wallpaper</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/09202021_HomeImprovement_DOORS.jpeg?imwidth=400&impolicy=medium" alt="" />
                    <p>Doors</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/09202021_HomeImprovement_DOORS.jpeg?imwidth=400&impolicy=medium" alt="" />
                    <p>Tile</p>
                </div>
            </div>
            {/*  */}

            {/*  */}
            <p id="Popular__Heading">Outdoor Renovation Essentials</p>

            <div className="picshow_2">
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/02182021-gnp-homeimprovement-outdoor-PopCat_1.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Outdoor Storage & Sheds</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-PopCat_26.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Decking</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/02182021-gnp-homeimprovement-outdoor-PopCat_3.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Outdoor Lighting</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-PopCat_22.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Firepits & Chimineas</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/02182021-gnp-homeimprovement-outdoor-PopCat_5.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Gazebos & Pergolas</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/02182021-gnp-homeimprovement-outdoor-PopCat_6.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Gardening</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-PopCat_28.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Yard Care Tools</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-PopCat_24.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Garage Storage</p>
                </div>
            </div>
            {/*  */}

            <div className="picshow_3">
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_HOMEIMP_BG01.jpg?imwidth=1024&impolicy=medium" alt="" />
                </div>
                <div>
                    <p>Bathroom Paint Ideas</p>
                    <p>
                        From compact half-baths to luxurious master attachments, 
                        bathrooms offer the chance to experiment with color. 
                        Find the best paint for your bathroom with 
                        these popular bathroom paint colors.
                    </p>
                    <button>Read More</button>
                </div>
            </div>

            <div className="picshow_4">
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_HOMEIMP_BG02.jpg?imwidth=1024&impolicy=medium" alt="" />
                </div>
                <div>
                    <p>How to Style Dining Room Wallpaper</p>
                    <p>
                        Dining rooms aren’t usually where you find bold prints and patterns. 
                        So when you’re working with wallpaper designs for your dining room, 
                        there are a few things to keep in mind. Whether you're installing a 
                        vibrant print or looking for ways to style around one that's already 
                        in your home, read on for five expert tips on rocking 
                        wallpaper in your dining room.
                    </p>
                    <button>Read More</button>
                </div>
            </div>



            <p id = "Popular__Heading">Shop More Home Improvement</p>
            <div className="picshow_5">

                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-175x175_otherPopular14.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Hardware</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-175x175_otherPopular15.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Doors & Windows</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/02182021-gnp-homeimprovement-219x219_shop_more03.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Fencing & Privacy Screens</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-175x175_otherPopular17.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Wall Coverings</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-175x175_otherPopular2.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Showerheads</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/02182021-gnp-homeimprovement-219x219_shop_more06.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Kitchen & Pantry Storage</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-175x175_otherPopular16.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Power Tools</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/02182021-gnp-homeimprovement-219x219_shop_more08.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Bathroom Shelving</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/02182021-gnp-homeimprovement-219x219_shop_more09.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Heating & Cooling</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-175x175_otherPopular3.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Bidets</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-175x175_otherPopular1.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Sink & Faucet Sets</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-175x175_otherPopular5.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Plumbing</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-175x175_otherPopular7.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Ranges & Ovens</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-175x175_otherPopular8.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Range Hoods</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-175x175_otherPopular11.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Air Quality</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-gnp-homeimprovment-175x175_otherPopular12.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Vacuums</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/02182021-gnp-homeimprovement-219x219_shop_more17.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Sauna & Steam</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/071718_sale_square.svg" alt="" />
                    <p>Shop All Home Improvement on Sale</p>
                </div>
                
            </div>
        </div>
    )
}