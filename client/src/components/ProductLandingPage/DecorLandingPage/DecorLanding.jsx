
import "./DecorLanding.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


export const DecorLanding = () => {

    return (

        <div className="Furniture__Container">
            <div id="furniture_headDiv">
                <p>Home Decor</p>
            </div>

            <div className="picshow_1">
                <div>
                    <p>Featured categories</p>

                    <p>Fireplaces</p>
                    <p>Window Treatments</p>
                    <p>Mirrors</p>
                    <p>Wall Art</p>
                    <p>Wall Decor</p>
                    <p>Throw Pillows</p>
                    <p>Decorative Accessories</p>
                    <p>Accent Pieces</p>
                    <p>Lighting</p>
                    <p>Doormats</p>
                    <p>Outdoor Decor</p>
                    <p>Rugs</p>
                    <p>Slipcovers & Furniture Covers</p>
                </div>

                <div>
                    <div>
                        <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_Hero_Desktop.jpg?imwidth=680&impolicy=medium?imwidth=750" alt="" />
                    </div>
                    <div>
                        <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_MM_012.png?imwidth=320&impolicy=medium?imwidth=384" alt="" />
                        <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_MM_022.png?imwidth=320&impolicy=medium?imwidth=384" alt="" />
                    </div>
                </div>
            </div>

            {/*  */}
            <p id="Popular__Heading">Popular Home Decor Categories</p>

            <div className="picshow_2">
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_1.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="livingRoom">3' x 5' Area Rugs</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_2.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="diningRoom">Outdoor Decor</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_3.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="bedroom">Mirrors</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_3.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="patio">Window Treatments</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_4.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="homeOffice">Wall Art</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_5.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="smallSpace">Throw Pillows</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_6.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="kitchen">Wall Decor</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_PopCat_7.jpg?imwidth=400&impolicy=medium" alt="" />
                    <p id="entryWay">Decorative Accessories</p>
                </div>
            </div>
            {/*  */}

            

            <div className="picshow_3">
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_688x444_BG01.jpg?imwidth=1024&impolicy=medium" alt="" />
                </div>
                <div>
                    <p>Biophilic Design: How to Restore Nature to Your Home</p>
                    <p>
                        If any design trend proves that your surroundings can improve your well-being, it’s biophilic interior design. This life-loving approach to decorating uses natural elements to restore your sense of wellness. Here are 10 easy, impactful ways to refresh your interior with resemblances to the great outdoors.
                    </p>
                    <button>Read More</button>
                </div>
            </div>

            <div className="picshow_4">
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_688x444_BG02.jpg?imwidth=1024&impolicy=medium" alt="" />
                </div>
                <div>
                    <p>How to Decorate with a Monochromatic Color Scheme</p>
                    <p>
                        With a simple color palette leading the way, monochromatic design lets you get creative with textures, designs, and contrast. Take a look at three different rooms where we let one color take the wheel and show you how to create a monochromatic design in your own homek
                    </p>
                    <button>Read More</button>
                </div>
            </div>



            <p id="Popular__Heading">Shop More Home Decor</p>
            <div className="picshow_5">

                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular1.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="couch">Ceiling Lights</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular2.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="sectionalSofa">Lamps</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular3.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="livingRoom">Flush Mounts</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular4.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="accentTable">Wall Lights</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular5.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="loveSeat">Ceiling Fans</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular6.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="accentChair">Blinds & Shades</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular7.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="diningRoom">Curtain Rods & Hardware</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular8.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="diningRoom">Clocks</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular9.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="diningRoom">Decorative Shelves</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular10.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="buffets">Silk Plants</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular11.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="barStool">Vases</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular12.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="bed">Picture Frames & Albums</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular13.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="bed">Doormats</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular14.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="bed">Canvas Art</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular15.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="chest">Prints</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular16.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="nightstand">Fire Pits & Chimineas</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/03232020-homedecor-otherPopular17.jpg?imwidth=200&impolicy=medium" alt="" />
                    <p id="kids">Planters, Hangers & Stands</p>
                </div>
                <div>
                    <img src="https://ak1.ostkcdn.com/img/mxc/071718_sale_square.svg" alt="" />
                    <p>Shop All Home Decor on Sale</p>
                </div>

            </div>
        </div>
    )
}