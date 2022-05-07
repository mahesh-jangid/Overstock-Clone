
import "./BathLanding.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


export const BathLanding = () => {

    return (

        <div className="Furniture__Container">
            <div id="furniture_headDiv">
                <p>Bedding & Bath</p>
            </div>

            <div className="picshow_1">
                <div>
                    <p>Featured categories</p>

                    <p>Featured categories</p>
                    <p>Quilts & Coverlets</p>
                    <p>Sheets & Pillowcases</p>
                    <p>Duvet Covers & Sets</p>
                    <p>Comforters & Duvet Inserts</p>
                    <p>Bedspreads</p>
                    <p>Bath Linens</p>
                    <p>Blankets & Throws</p>
                    <p>Mattresses</p>
                    <p>Bed-in-a-Bag</p>
                    <p>Mattress Pad & Toppers</p>
                    <p>Bed Pillows</p>
                    <p>Kids Bedding</p>
                    <p>Shop All Furniture on Sale</p>
                </div>

                <div>
                    <div>
                        <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_BBL_Hero_Desktop.jpg?imwidth=680&impolicy=medium?imwidth=750" alt="" />
                    </div>
                    <div>
                        <img src="https://ak1.ostkcdn.com/images/products/21751919/Madison-Park-Virginia-Blush-3-Piece-Cotton-Chenille-Medallion-Comforter-Set-6dfefb42-1f43-47ce-ad5e-cead54b2202f.jpg?imWidth=320&impolicy=medium" alt="" />
                        <img src="https://ak1.ostkcdn.com/images/products/14206725/Smart-Cool-by-Sleep-Philosophy-Microfiber-White-Coolmax-Down-Alternative-Comforter-70da5b36-227a-44bc-b5c3-7ebf69c89a66.jpg?imWidth=320&impolicy=medium" alt="" />
                    </div>
                </div>
            </div>

            {/*  */}
            <p id="Popular__Heading">Popular Bedding & Bath Categories</p>

            <div className="picshow_2">
                <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_BBL_PopCat_1.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="livingRoom">Comforter Sets</p>
                </div>
                <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_BBL_PopCat_2.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="diningRoom">Quilts & Coverlets</p>
                </div>
                <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_BBL_PopCat_3.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="bedroom">Sheets & Pillowcases</p>
                </div>
                <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_BBL_PopCat_4.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="patio">Duvet Covers & Sets</p>
                </div>
                <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/09062021_FALL2021_BBL_PopCat_5.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="homeOffice">Comforters & Duvet Inserts</p>
                </div>
                <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_BBL_PopCat_6.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="smallSpace">Blankets & Throws</p>
                </div>
                <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_BBL_PopCat_7.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="kitchen">Mattresses</p>
                </div>
                <div>
                <img src="https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_BBL_PopCat_8.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="entryWay">Bath Towels</p>
                </div>
            </div>
            {/*  */}

            {/*  */}
            {/* <p id="Popular__Heading">Shop Popular Rug Colors</p> */}

            <div className="picshow_2">
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_BBL_PopCat_9.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="livingRoom">Shower Curtains & Accessories</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/12212020-gnp-bbl-PopCat_9.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="diningRoom">Bath Accessories</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_BBL_PopCat_11.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="bedroom">Bath Rugs & Mats</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/09062021_FALL2021_BBL_PopCat_11.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="patio">Mattress Pads & Toppers</p>
                </div>
            </div>
            {/*  */}

            <div className="picshow_3">
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_BBL_688x444_BG01.jpg?imwidth=1024&impolicy=medium" alt="" />
                </div>
                <div>
                    <p>How to Choose a Mattress</p>
                    <p>
                    Choosing the perfect mattress comes down to your sleep needs, like your go-to sleep position or whether you’re prone to allergies. Our mattress buying guide dives into mattress sizes, types, and firmness levels to help you invest in your best night's sleep. Read on to learn more about each mattress type and find a combination of comfort and support that works for you.
                    </p>
                    <button>Read More</button>
                </div>
            </div>

            <div className="picshow_4">
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_BBL_688x444_BG02.jpg?imwidth=1024&impolicy=medium" alt="" />
                </div>
                <div>
                    <p>How to Decorate with a Monochromatic Color Scheme</p>
                    <p>
                    Whether modern, vintage, patterned, or plain, the bedding you choose sets the mood for the rest of your bedroom. With a few simple touches, you can curate bedding that reflects your style and matches your decor. Check out these trendy bedding ideas based on popular decor styles and get inspired for your bedding revamp.
                    </p>
                    <button>Read More</button>
                </div>
            </div>



            <p id="Popular__Heading">Shop More Bedding & Bath</p>
            <div className="picshow_5">

                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-beddingbath-otherPopular1.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="couch">Memory Foam Toppers</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-beddingbath-otherPopular2.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="sectionalSofa">Down Comforters</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/12212020-gnp-bbl-219x219_shop_more01.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="livingRoom">Pillow Shams</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-beddingbath-otherPopular4.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="accentTable">Mattress Pads & Protectors</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-beddingbath-otherPopular5.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="loveSeat">Heated & Electric Blankets</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-beddingbath-otherPopular6.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="accentChair">Pillows</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/10312020-gnp-beddingbath-175x175_otherPopular7.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="diningRoom">Decorative Throw Pillows</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-beddingbath-otherPopular8.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="diningRoom">Bath Robes</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-beddingbath-otherPopular9.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="diningRoom">Bathroom Sets</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-beddingbath-otherPopular10.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="buffets">Pillow Protectors</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-beddingbath-otherPopular11.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="barStool">Bed Skirts</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/12212020-gnp-bbl-219x219_shop_more02.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="bed">Daybed Sets</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-beddingbath-otherPopular13.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="bed">Bedspreads</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-beddingbath-otherPopular14.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="bed">Kids Bedding</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-beddingbath-otherPopular15.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="chest">Blackout Curtains</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/10312020-gnp-bedding-175x175_otherPopular2.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="nightstand">Duvet Covers & Sets</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/040120201-gnp-bmod-newarrivals.png?imwidth=200&impolicy=medium" alt="" />
                    <p id="kids">Shop More Bedding & Bath</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/071718_sale_square.svg" alt="" />
                    <p>Shop All Bedding & Bath on Sale</p>
                </div>

            </div>
        </div>
    )
}