
import "./JewelryWatchesStore.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


export const JewelryWatchesStoreLanding = () => {

    return (

        <div className="Furniture__Container">
            <div id="furniture_headDiv">
                <p>Jewelry & Watches Store</p>
            </div>

            <div className="picshow_1">
                <div>
                    <p>Featured categories</p>

                    <p>Rings</p>
                    <p>Wedding Rings</p>
                    <p>Storage & Organization</p>
                    <p>Faucets</p>
                    <p>Flooring</p>
                    <p>Appliances</p>
                    <p>Showers</p>
                    <p>Hardware</p>
                    <p>Sinks</p>
                </div>

                <div>
                    <div>
                        <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_JEWELRY_Hero_Desktop.jpg?imwidth=680&impolicy=medium?imwidth=750" alt="" />
                    </div>
                    <div>
                        <img src="https://ak1.ostkcdn.com/img/mxc/09062021_FALL2021_Jewlwatches_MM_01.png?imwidth=320&impolicy=medium?imwidth=384" alt="" />
                        <img src="https://ak1.ostkcdn.com/img/mxc/09062021_jewelry_MM_02.png?imwidth=320&impolicy=medium?imwidth=384" alt="" />
                    </div>
                </div>
            </div>

            {/*  */}
            <p id="Popular__Heading">Popular Jewelry & Watches Categories</p>

            <div className="picshow_2">
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-jewelrywatches-PopCat_1.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Rings</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-jewelrywatches-PopCat_2.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Earrings</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-jewelrywatches-PopCat_3.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Necklaces</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/02182021-gnp-jewelrywatches-PopCat_4.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Bracelets</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-jewelrywatches-PopCat_5.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Men's Watches</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/02182021-gnp-jewelrywatches-PopCat_6.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Women's Watches</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/02182021-gnp-jewelrywatches-PopCat_7.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Luxury Watches</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/09202021_JewelryandWatches_WatchWinders.png?imwidth=400&impolicy=medium" alt="" />
                    <p>Watch Winders</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-jewelrywatches-PopCat_9.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Diamons Jewelry</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/02182021-gnp-jewelrywatches-PopCat_10.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Gemstone Jewelry</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-jewelrywatches-PopCat_11.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Gold Jewelry</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/02182021-gnp-jewelrywatches-PopCat_12.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p>Pearl Jewelry</p>
                </div>
            </div>
            {/*  */}

            <div className="picshow_3">
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_JEWELRY_gemstone_jewelry_buying_guide2.jpg?imwidth=1024&impolicy=medium" alt="" />
                </div>
                <div>
                    <p>Gemstone Jewelry Buying Guide</p>
                    <p>
                        Gemstones have long held cultural significance in the fashion 
                        world as dazzling accessories and signifiers of important milestones. 
                        From classic sparkle to exotic hues, gemstone jewelry can amplify personal style,
                        perfect an outfit, and make a meaningful gift or keepsake. Whether you're expanding 
                        your personal jewelry collection or giving a gift to someone you care about, keep reading 
                        for more tips on how to buy a gemstone.
                    </p>
                    <button>Read More</button>
                </div>
            </div>

            <div className="picshow_4">
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_JEWELRY_BG02.jpg?imwidth=1024&impolicy=medium" alt="" />
                </div>
                <div>
                    <p>How to Pick an Engagement Ring</p>
                    <p>
                        Choosing to spend forever with someone is probably the easiest decision in the world, 
                        but finding the perfect engagement ring that expresses your love and complements their 
                        style might be another story. Between the nerves and making your proposal a wonderful surprise, 
                        you might be feeling a little lost when it comes to choosing a ring. We're here to walk you through 
                        the process step by step so you can buy an engagement ring that is just as dazzling as they are.
                    </p>
                    <button>Read More</button>
                </div>
            </div>



            <p id = "Popular__Heading">Shop More Categories</p>
            <div className="picshow_5">
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-jewelrywatches-175x175_otherPopular2.jpg?imwidth=200&impolicy=medium" alt="" />
                    
                    <p>Engagement Rings</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-jewelrywatches-175x175_otherPopular3.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Moissanite Rings</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-jewelrywatches-175x175_otherPopular4.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Cubic Zirconia Rings</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-jewelrywatches-175x175_otherPopular8.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Men's Rings</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-jewelrywatches-175x175_otherPopular9.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Diamond Earrings</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/05062021-gnp-jewelrywatches-PopCat_6.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>One of A Kind Jewelry</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/05062021-gnp-jewelrywatches-PopCat_7.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Fine Jewelry</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-jewelrywatches-175x175_otherPopular12.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Fashion Jewerly</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-jewelrywatches-175x175_otherPopular13.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Men's Jewerly</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/05062021-gnp-jewelrywatches-PopCat_10.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Gemstone Jewerly</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/05062021-gnp-jewelrywatches-PopCat_11.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Sterling Silver Earrings</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/05062021-gnp-jewelrywatches-PopCat_12.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Designer Jewelry</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/05062021-gnp-jewelrywatches-PopCat_13.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Gold Chains & Necklaces</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-jewelrywatches-175x175_otherPopular7.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Men's Wedding Bands</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-jewelrywatches-175x175_otherPopular14.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Jewelry Boxes</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03312020-gnp-jewelrywatches-175x175_otherPopular15.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p>Watch Boxes</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/040120201-gnp-bmod-newarrivals.png?imwidth=200&impolicy=medium" alt="" />
                    <p>Shop More Jewelry & Watches</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/071718_sale_square.svg" alt="" />
                    <p>Shop All Jewelry & Watches on Sale</p>
                </div>
            </div>
        </div>
    )
}