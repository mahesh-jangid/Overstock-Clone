
import { useEffect, useState } from "react";
import "./ProductDetails.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { store } from "../../Redux/store";
import { useSelector, useDispatch } from "react-redux";
import { addProductDetails } from "./action";

export const ProductDetails = () => {
    
    const { area, subcate, cate ,id } = useParams();
    console.log('subcate:', subcate)
    console.log('cate:', cate)
    console.log('area:', area)
    console.log('id:', id)
    const [data, setdata] = useState();
    const [tarunImage, settarunImage] = useState({});
    const dispatch = useDispatch();

    const ProductDetailsData = useSelector((store) => store.ProductDetails.productdetailsdata);
    console.log('ProductDetailsData:', ProductDetailsData)
    
    console.log('data:', data)
    // console.log('props:', props)
    useEffect(() => {
        getData();
    },[]);

    const getData = () => {
        axios.get(`/${area}/${id}`)
        
        // .then(res => setdata(res.data))
        .then(res => dispatch(addProductDetails(res.data)))
        .then(error => console.log(`Error : ${error}`))
    }
    // useEffect(() => {
    //     fetch(``)
    //       .then((res) => res.json())
    //       .then(() => {
    //         // setData();
    //         // setimagearr();
    //       });
    //   }, []);


    const handleAddCart = (data) => {

        if (localStorage.getItem("") === null) {
        localStorage.setItem("", JSON.stringify([]));
        }
        let cart = JSON.parse(localStorage.getItem(""));
        cart.push(data[0]);
        localStorage.setItem("", JSON.stringify());
    };


return (
    

 <div>
     <div class="Product">
     <div>
       <p className="path">
         <span id="maincatergory1">Home Goods</span>
         <span className="e-margin">/</span>
         <span id="mainsubcatergory2">Furniture</span>
         <span className="e-margin">/</span>
         <span id="subcatergory3">Living Room Furniture</span>
         <span className="e-margin">/</span>
         <span id="catergory4">Loveseats</span>
       </p>
     </div>
     < div className="item">
       <div className="sliders">
         <div className="slider1">
           <div>
             <img
               id="productImage"
               src={ProductDetailsData.image}
               alt=""
             />
           </div>
           <button
             className="prev-arr"
             tabindex="0"
             aria-label="scroll left to next product image"
           >
             <svg
               className="gallery-svg"
               viewBox="0 0 12 20"
               width="26"
               height="26"
             >
          <path
                 d="M10.0002222 0L0 9.9997778 10.0002222 20l1.6142581-1.6142581-8.4370764-8.3859641 8.4370764-8.4375209"
                 fill-rule="evenodd"
                 fill="#545658"
               ></path>
             </svg>
           </button>
           <button
             className="next-arr"
             aria-label="scroll right to next product image"
           >
         <svg
               className="gallery-svg"
               viewBox="0 0 12 20"
               width="26"
               height="26"
      >
               <path
                 d="M1.5622222 0L0 1.5622222 8.3853333 10 0 18.3857778 1.5622222 20l10-10"
                 fill-rule="evenodd"
                 fill="#545658"
               ></path>
             </svg>
          </button>
        </div>

        <div className="slider2">
              <div className="prev">
                <span
                  ><svg
                    className="gallery-svg"
                    viewBox="0 0 12 20"
                    width="26"
                    height="26"
                  >
                    <path
                      d="M10.0002222 0L0 9.9997778 10.0002222 20l1.6142581-1.6142581-8.4370764-8.3859641 8.4370764-8.4375209"
                      fill-rule="evenodd"
                      fill="#545658"
                    ></path>
                  </svg>
                </span>
              </div>
              <div></div>
              <div id="iconsSlides">
                <div className="iconSlides">
                  <div className="active">

                    <img src={ProductDetailsData.image} alt="" id="img1p" />
                  </div>
                  <div>
                    <img src={ProductDetailsData.image1} alt="" id="img2p" />
                  </div>
                  <div>
                    <img src={ProductDetailsData.image2} alt="" id="img3p" />
                  </div>
                  <div>

                    <img src={ProductDetailsData.image3} alt="" id="img4p" />
                  </div>
                  <div>
                    <img src={ProductDetailsData.image4} alt="" id="img5p" />
                  </div>
                  <div>
                    <img src={ProductDetailsData.image1} alt="" id="img6p" />
                  </div>
                </div>
              </div>
              <div></div>
              <div className="next">
                <span
                  ><svg
                    className="gallery-svg"
                    viewBox="0 0 12 20"
                    width="26"
                    height="26"
                  >
                    <path
                      d="M1.5622222 0L0 1.5622222 8.3853333 10 0 18.3857778 1.5622222 20l10-10"
                      fill-rule="evenodd"
                      fill="#545658"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="item-info">
            <div>
              <p id="productName1" className="title">

                {ProductDetailsData.title}
                {/* {data.title} */}
              </p>
              <div className="company">
                <span>by</span><a href="">Christopher Knight Home</a>
              </div>
            </div>
            <div className="star-rating">
              <div>
                    {Array(4).fill().map((_,i) =>{
                          return (
                              <span className="fa fa-star checked"></span>
                          )
                    })}
                {/* <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star unchecked"></span> */}
              </div>
              <div>
                <svg className="review-action-caret-down" viewBox="0 0 32 32">
                  <path
                    d="M25.125 12.563c0 0.313-0.125 0.563-0.313 0.813l-8 8c-0.25 0.25-0.5 0.313-0.813 0.313s-0.563-0.063-0.813-0.313l-8-8c-0.188-0.25-0.313-0.5-0.313-0.813s0.125-0.563 0.313-0.813c0.25-0.188 0.5-0.313 0.813-0.313h16c0.313 0 0.563 0.125 0.813 0.313 0.188 0.25 0.313 0.5 0.313 0.813z"
                  ></path>
                </svg>
              </div>
              <div>
                <p>{ProductDetailsData.rating} Reviews</p>
              </div>
            </div>
            <div className="price">
              <span>{ProductDetailsData.sale === "start" ? "Sale Start at INR" : "INR" } : 
                {/* Sale: INR  */}
                {ProductDetailsData.price}
                {/* {data.price} */}
              </span>
              <div id="productprice1"></div>
            </div>
            <div className="frameDiv">
              <div className="frameColor">
                <p>Color</p>
                <p></p>
              </div>
              <div className="frame">
                <div>
                  <div className="frame-img2">
                    <div className="frame-image2">
                      <img src={ProductDetailsData.image} alt="" id="colorImg1" />
                    </div>
                  </div>
                  <div>
                    <p id="colorName1"></p>
                  </div>
                </div>
                <div>
                  <div className="frame-img1">
                    <div className="frame-image1">
                      <img src="" alt="" id="colorImg2" />
                    </div>
                  </div>
                  <div>
                    <p id="colorName2"></p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <select id="qtyP" name="quantity" className="qty">
                <option value="1">Quantity: 1</option>
                <option value="2">Quantity: 2</option>
                <option value="3">Quantity: 3</option>
                <option value="4">Quantity: 4</option>
                <option value="5">Quantity: 5</option>
                <option value="6">Quantity: 6</option>
                <option value="7">Quantity: 7</option>
                <option value="8">Quantity: 8</option>
                <option value="9">Quantity: 9</option>
                <option value="10">Quantity: 10</option>
                <option value="11">Quantity: 11</option>
                <option value="12">Quantity: 12</option>
                <option value="13">Quantity: 13</option>
                <option value="14">Quantity: 14</option>
                <option value="15">Quantity: 15</option>
                <option value="16">Quantity: 16</option>
                <option value="17">Quantity: 17</option>
                <option value="18">Quantity: 18</option>
                <option value="19">Quantity: 19</option>
                <option value="20">Quantity: 20</option>
              </select>
            </div>
            <div className="bar">
              <hr />
            </div>
            <div className="item-num">
              <p id="_id"></p>
            </div>
            <div className="shop">
              <button  className="add"
              onClick={() => {
                handleAddCart(data);
              }} id="addToCart">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="social-header">
          <h2>Share This Product:</h2>
        </div>
        <div className="social-icons">
          <div className="os-share-email">
            <div className="social-icon-container email">
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 32 32"
                version="1.1"
              >
                <desc>Created with sketchtool.</desc>
                <defs></defs>
                <g
                  id="Final-Social-Icons"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="PDP-Control-≥-970px-Social-Icons"
                    transform="translate(-90.000000, -836.000000)"
                  >
                    <g
                      id="New-Icons"
                      transform="translate(84.000000, 814.000000)"
                    >
                      <g id="Email" transform="translate(6.000000, 22.000000)">
                        <path
                          d="M16,0 C7.164,0 0,7.164 0,16 C0,24.838 7.164,32 16,32 C24.837,32 32,24.838 32,16 C32,7.164 24.837,0 16,0"
                          id="Fill-26"
                          fill="#444444"
                        ></path>
                        <path
                          d="M23.9013,13.7271 L16.7863,18.8311 C16.3043,19.1361 15.7713,19.2471 14.9753,18.8591 L8.0983,14.0151 C7.9283,13.8701 7.6663,13.9901 7.6663,14.2131 L7.6663,20.3661 C7.6663,21.1581 8.3143,21.8061 9.1063,21.8061 L22.8943,21.8061 C23.6863,21.8061 24.3333,21.1581 24.3333,20.3661 L24.3333,13.9241 C24.3333,13.7001 24.0703,13.5801 23.9013,13.7271"
                          id="Fill-28"
                          fill="#FEFEFE"
                        ></path>
                        <path
                          d="M14.9758,17.3738 C15.5388,17.7668 16.2558,17.7098 16.7868,17.3458 L24.2978,11.9608 C24.3668,11.9008 24.2978,11.7798 24.2978,11.6888 C24.2978,10.8668 23.6618,10.1938 22.8398,10.1938 L9.1608,10.1938 C8.3388,10.1938 7.6658,10.8668 7.6658,11.6888 L7.6658,12.0138 C7.6658,12.1058 7.7068,12.1938 7.7768,12.2538 L14.9758,17.3738 Z"
                          id="Fill-30"
                          fill="#FEFEFE"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 34 34"
                version="1.1"
              >
                <g id="Atoms" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g
                    id="Social-Media-Desktop"
                    transform="translate(-457.000000, -620.000000)"
                    stroke="#444444"
                  >
                    <g
                      id="Page-1"
                      transform="translate(458.000000, 621.000000)"
                    >
                      <path
                        d="M16,0.484848485 C7.43175758,0.484848485 0.484848485,7.43175758 0.484848485,16 C0.484848485,24.5701818 7.43175758,31.5151515 16,31.5151515 C24.5692121,31.5151515 31.5151515,24.5701818 31.5151515,16 C31.5151515,7.43175758 24.5692121,0.484848485 16,0.484848485 L16,0.484848485 Z"
                        id="Stroke-1"
                        stroke-width="1.5"
                      ></path>
                      <path
                        d="M23.6618667,12.8263758 L16.7624727,17.7757091 C16.2950788,18.0714667 15.7782303,18.179103 15.0063515,17.8028606 L8.33774545,13.1056485 C8.17289697,12.9650424 7.91883636,13.0814061 7.91883636,13.2976485 L7.91883636,20.2338909 C7.91883636,21.0018909 8.5472,21.6302545 9.3152,21.6302545 L22.6853818,21.6302545 C23.4533818,21.6302545 24.0807758,21.0018909 24.0807758,20.2338909 L24.0807758,13.0174061 C24.0807758,12.8001939 23.8257455,12.6838303 23.6618667,12.8263758 L23.6618667,12.8263758 Z"
                        id="Stroke-3"
                        stroke="#444444"
                      ></path>
                      <path
                        d="M15.0068364,17.8170182 C15.5527758,18.1981091 16.2480485,18.1428364 16.7629576,17.7898667 L24.0463515,12.5680485 C24.1132606,12.5098667 24.0463515,11.9076848 24.0463515,11.8194424 C24.0463515,11.0223515 23.4296242,10.3697455 22.6325333,10.3697455 L9.36804848,10.3697455 C8.57095758,10.3697455 7.91835152,11.0223515 7.91835152,11.8194424 L7.91835152,12.6194424 C7.91835152,12.7086545 7.95810909,12.7939879 8.02598788,12.8521697 L15.0068364,17.8170182 L15.0068364,17.8170182 Z"
                        id="Stroke-5"
                        stroke="#444444"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          < div className="os-share-facebook">
            <div className="social-icon-container pinterest color">
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 32 32"
                version="1.1"
              >
                <desc>Created with sketchtool.</desc>
                <defs></defs>
                <g
                  id="Final-Social-Icons"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="PDP-Control-≥-970px-Social-Icons"
                    transform="translate(-134.000000, -836.000000)"
                    fill="#355F9F"
                  >
                    <g
                      id="New-Icons"
                      transform="translate(84.000000, 814.000000)"
                    >
                      <g id="FB" transform="translate(50.000000, 22.000000)">
                        <path
                          d="M19.428,16.006 L17.186,16.006 L17.186,24 L13.864,24 L13.864,16.006 L12.283,16.006 L12.283,13.182 L13.864,13.182 L13.864,11.354 C13.864,10.045 14.485,8 17.216,8 L19.677,8.01 L19.677,10.752 L17.891,10.752 C17.6,10.752 17.186,10.897 17.186,11.522 L17.186,13.182 L19.719,13.182 L19.428,16.006 Z M16,0 C7.164,0 0,7.164 0,16 C0,24.838 7.164,32 16,32 C24.837,32 32,24.838 32,16 C32,7.164 24.837,0 16,0 L16,0 Z"
                          id="Fill-1"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 32 32"
                version="1.1"
              >
                <g
                  id="Atoms"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Social-Media-Phone"
                    transform="translate(-535.000000, -619.000000)"
                  >
                    <g
                      id="Page-1"
                      transform="translate(535.000000, 619.000000)"
                    >
                      <path
                        d="M16,0.484848485 C7.43175758,0.484848485 0.484848485,7.43175758 0.484848485,16 C0.484848485,24.5701818 7.43175758,31.5151515 16,31.5151515 C24.5692121,31.5151515 31.5151515,24.5701818 31.5151515,16 C31.5151515,7.43175758 24.5692121,0.484848485 16,0.484848485 L16,0.484848485 Z"
                        id="Stroke-1"
                        stroke="#355F9F"
                      ></path>
                      <path
                        d="M19.3239273,16.0057212 L17.1498667,16.0057212 L17.1498667,23.7574788 L13.9285333,23.7574788 L13.9285333,16.0057212 L12.3954424,16.0057212 L12.3954424,13.267297 L13.9285333,13.267297 L13.9285333,11.4946909 C13.9285333,10.2253576 14.5307152,8.24232727 17.1789576,8.24232727 L19.5653818,8.25202424 L19.5653818,10.9109333 L17.833503,10.9109333 C17.5513212,10.9109333 17.1498667,11.0515394 17.1498667,11.6576 L17.1498667,13.267297 L19.6061091,13.267297 L19.3239273,16.0057212 Z"
                        id="Fill-3"
                        fill="#355F9F"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            </div>
          
            <div className="os-share-gplus">
            <div className="social-icon-container twitter color">
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 32 32"
                version="1.1"
              >
                <desc>Created with sketchtool.</desc>
                <defs></defs>
                <g
                  id="Final-Social-Icons"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="PDP-Control-≥-970px-Social-Icons"
                    transform="translate(-223.000000, -836.000000)"
                    fill="#2BA9E1"
                  >
                    <g
                      id="New-Icons"
                      transform="translate(84.000000, 814.000000)"
                    >
                      <g
                        id="Twitter"
                        transform="translate(139.000000, 22.000000)"
                      >
                        <path
                          d="M22.362,12.738 C22.369,12.879 22.372,13.019 22.372,13.162 C22.372,17.5 19.07,22.502 13.032,22.502 C11.177,22.502 9.453,21.959 8,21.027 C8.258,21.056 8.518,21.072 8.783,21.072 C10.322,21.072 11.736,20.549 12.859,19.668 C11.424,19.64 10.211,18.691 9.794,17.388 C9.994,17.425 10.199,17.447 10.411,17.447 C10.711,17.447 11.001,17.406 11.275,17.332 C9.775,17.029 8.642,15.703 8.642,14.113 L8.642,14.072 C9.086,14.318 9.592,14.465 10.13,14.482 C9.249,13.894 8.67,12.888 8.67,11.75 C8.67,11.148 8.832,10.584 9.114,10.099 C10.732,12.086 13.152,13.392 15.88,13.529 C15.824,13.289 15.795,13.039 15.795,12.781 C15.795,10.968 17.264,9.5 19.078,9.5 C20.021,9.5 20.875,9.898 21.473,10.535 C22.22,10.388 22.924,10.115 23.558,9.738 C23.312,10.506 22.793,11.148 22.115,11.554 C22.779,11.476 23.412,11.299 24,11.039 C23.56,11.697 23.004,12.275 22.362,12.738 M16,0 C7.164,0 0,7.164 0,16 C0,24.838 7.164,32 16,32 C24.836,32 32,24.838 32,16 C32,7.164 24.836,0 16,0"
                          id="Fill-3"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 32 32"
                version="1.1"
              >
                <g
                  id="Atoms"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Social-Media-Phone"
                    transform="translate(-670.000000, -619.000000)"
                  >
                    <g
                      id="Page-1"
                      transform="translate(670.000000, 619.000000)"
                    >
                      <path
                        d="M16,0.484848485 C7.43175758,0.484848485 0.484848485,7.43175758 0.484848485,16 C0.484848485,24.5701818 7.43175758,31.5151515 16,31.5151515 C24.5682424,31.5151515 31.5151515,24.5701818 31.5151515,16 C31.5151515,7.43175758 24.5682424,0.484848485 16,0.484848485 L16,0.484848485 Z"
                        id="Stroke-1"
                        stroke="#2CA9E0"
                      ></path>
                      <path
                        d="M22.169503,12.8371394 C22.1762909,12.9738667 22.1792,13.1096242 22.1792,13.2482909 C22.1792,17.4548364 18.9772606,22.3052606 13.1222303,22.3052606 C11.3234424,22.3052606 9.65168485,21.7787152 8.24271515,20.8749576 C8.49192727,20.9030788 8.74501818,20.9185939 9.00198788,20.9185939 C10.4943515,20.9185939 11.865503,20.4114424 12.9544727,19.5571394 C11.5619879,19.5299879 10.3867152,18.6097455 9.98235152,17.3462303 C10.1762909,17.3821091 10.3750788,17.4034424 10.5806545,17.4034424 C10.8715636,17.4034424 11.1527758,17.3636848 11.4184727,17.2919273 C9.96392727,16.9981091 8.86526061,15.7122909 8.86526061,14.1704727 L8.86526061,14.1307152 C9.29580606,14.3692606 9.78647273,14.5118061 10.3081697,14.5282909 C9.45386667,13.9581091 8.89241212,12.9825939 8.89241212,11.8790788 C8.89241212,11.2953212 9.04950303,10.7484121 9.32295758,10.2781091 C10.8919273,12.204897 13.2385939,13.4713212 15.8839273,13.6041697 C15.8296242,13.3714424 15.801503,13.1290182 15.801503,12.8788364 C15.801503,11.1207758 17.2259879,9.69726061 18.9850182,9.69726061 C19.8994424,9.69726061 20.7275636,10.0832 21.3074424,10.700897 C22.0318061,10.5583515 22.713503,10.2936242 23.3292606,9.92804848 C23.0907152,10.6727758 22.5874424,11.2953212 21.9299879,11.6890182 C22.5738667,11.6133818 23.1876848,11.4417455 23.7578667,11.1896242 C23.3312,11.8276848 22.7920485,12.3881697 22.169503,12.8371394"
                        id="Fill-3"
                        fill="#2CA9E0"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="os-share-pinterest">
            <div className="social-icon-container pinterest color">
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 32 32"
                version="1.1"
              >
                <desc>Created with sketchtool.</desc>
                <defs></defs>
                <g
                  id="Final-Social-Icons"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="PDP-Control-≥-970px-Social-Icons"
                    transform="translate(-266.000000, -836.000000)"
                    fill="#CB2026"
                  >
                    <g
                      id="New-Icons"
                      transform="translate(84.000000, 814.000000)"
                    >
                      <g
                        id="Pinterest"
                        transform="translate(182.000000, 22.000000)"
                      >
                        <path
                          d="M17.652,19.562 C16.66,19.562 15.726,19.027 15.407,18.417 C15.407,18.417 14.873,20.535 14.76,20.943 C14.362,22.388 13.191,23.833 13.101,23.951 C13.038,24.033 12.897,24.007 12.882,23.898 C12.857,23.714 12.558,21.892 12.91,20.406 C13.087,19.66 14.092,15.398 14.092,15.398 C14.092,15.398 13.799,14.812 13.799,13.945 C13.799,12.582 14.589,11.566 15.572,11.566 C16.408,11.566 16.81,12.193 16.81,12.945 C16.81,13.785 16.276,15.042 16,16.207 C15.769,17.181 16.488,17.976 17.45,17.976 C19.191,17.976 20.364,15.74 20.364,13.089 C20.364,11.076 19.007,9.568 16.54,9.568 C13.753,9.568 12.015,11.648 12.015,13.97 C12.015,14.771 12.252,15.335 12.622,15.771 C12.792,15.972 12.815,16.054 12.754,16.285 C12.709,16.453 12.609,16.861 12.566,17.021 C12.506,17.255 12.316,17.337 12.106,17.251 C10.822,16.728 10.224,15.322 10.224,13.74 C10.224,11.13 12.425,7.999 16.793,7.999 C20.302,7.999 22.611,10.539 22.611,13.265 C22.611,16.869 20.606,19.562 17.652,19.562 M16,0 C7.164,0 0,7.164 0,15.999 C0,24.837 7.164,32 16,32 C24.836,32 32,24.837 32,15.999 C32,7.164 24.836,0 16,0"
                          id="Fill-5"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 34 34"
                version="1.1"
              >
                <desc>Created with sketchtool.</desc>
                <defs></defs>
                <g
                  id="Final-Social-Icons"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="PDP-Redesign≥-970px-Social-Icons-Hover"
                    transform="translate(-265.000000, -808.000000)"
                  >
                    <g
                      id="Top-Content"
                      transform="translate(73.000000, 149.000000)"
                    >
                      <g
                        id="Social"
                        transform="translate(11.000000, 638.000000)"
                      >
                        <g id="New-Icons">
                          <g
                            id="Icons-Hover"
                            transform="translate(6.000000, 22.000000)"
                          >
                            <g
                              id="pinterest_hover"
                              transform="translate(176.000000, 0.000000)"
                            >
                              <path
                                d="M16,0.484848485 C7.43175758,0.484848485 0.484848485,7.43175758 0.484848485,16 C0.484848485,24.5701818 7.43175758,31.5151515 16,31.5151515 C24.5682424,31.5151515 31.5151515,24.5701818 31.5151515,16 C31.5151515,7.43175758 24.5682424,0.484848485 16,0.484848485 L16,0.484848485 L16,0.484848485 Z"
                                id="Stroke-1"
                                stroke="#CA2026"
                                stroke-width="1.5"
                              ></path>
                              <path
                                d="M17.6022303,19.4545455 C16.6402909,19.4545455 15.7345939,18.9357576 15.4252606,18.3442424 C15.4252606,18.3442424 14.9074424,20.3980606 14.7978667,20.793697 C14.4119273,22.1949091 13.2764121,23.5961212 13.1891394,23.7105455 C13.1280485,23.7900606 12.9913212,23.7648485 12.9767758,23.6591515 C12.9525333,23.4807273 12.6625939,21.7139394 13.0039273,20.2729697 C13.1755636,19.5495758 14.1510788,15.4167273 14.1510788,15.4167273 C14.1510788,15.4167273 13.8650182,14.8484848 13.8650182,14.0077576 C13.8650182,12.6860606 14.6320485,11.7008485 15.5852606,11.7008485 C16.3959273,11.7008485 16.7857455,12.3088485 16.7857455,13.0380606 C16.7857455,13.8526061 16.2679273,15.0715152 16.0002909,16.2012121 C15.7762909,17.145697 16.473503,17.9166061 17.4063515,17.9166061 C19.0945939,17.9166061 20.2320485,15.7483636 20.2320485,13.177697 C20.2320485,11.225697 18.9161697,9.76339394 16.5239273,9.76339394 C13.8213818,9.76339394 12.1360485,11.7803636 12.1360485,14.032 C12.1360485,14.8087273 12.3658667,15.3556364 12.7246545,15.7784242 C12.889503,15.9733333 12.9118061,16.0528485 12.8526545,16.2768485 C12.8090182,16.4397576 12.7120485,16.8353939 12.6703515,16.9905455 C12.6121697,17.2174545 12.4279273,17.2969697 12.2242909,17.2135758 C10.9792,16.7064242 10.3993212,15.3430303 10.3993212,13.8089697 C10.3993212,11.2780606 12.5336242,8.24193939 16.7692606,8.24193939 C20.1719273,8.24193939 22.4109576,10.7049697 22.4109576,13.3483636 C22.4109576,16.8431515 20.4667152,19.4545455 17.6022303,19.4545455"
                                id="Fill-3"
                                fill="#CA2026"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="reviews-star">
          <div>
            <div className="quote-icon">
              <svg className="quote-left" viewBox="0 0 512 512">
                <path
                  d="M239.965,290.345v95.771c0,13.304-4.656,24.608-13.966,33.918C216.686,429.347,205.38,434,192.081,434H96.312    c-13.304,0-24.608-4.653-33.918-13.967c-9.313-9.31-13.966-20.614-13.966-33.918V210.536c0-17.291,3.367-33.794,10.101-49.506    s15.837-29.305,27.309-40.777c11.473-11.473,25.065-20.576,40.777-27.31s32.211-10.101,49.505-10.101h15.962    c4.321,0,8.062,1.583,11.224,4.739c3.156,3.161,4.738,6.901,4.738,11.223v31.923c0,4.326-1.582,8.066-4.738,11.223    c-3.161,3.16-6.902,4.739-11.224,4.739h-15.962c-17.624,0-32.67,6.235-45.141,18.705c-12.47,12.47-18.705,27.52-18.705,45.142    v7.981c0,6.652,2.326,12.306,6.983,16.959c4.653,4.657,10.308,6.983,16.959,6.983h55.865c13.3,0,24.605,4.657,33.919,13.966    C235.309,265.74,239.965,277.045,239.965,290.345z M463.426,290.345v95.771c0,13.304-4.656,24.608-13.965,33.918    C440.148,429.347,428.842,434,415.543,434h-95.77c-13.305,0-24.609-4.653-33.918-13.967c-9.314-9.31-13.967-20.614-13.967-33.918    V210.536c0-17.291,3.367-33.794,10.1-49.506c6.734-15.712,15.838-29.305,27.311-40.777c11.473-11.473,25.064-20.576,40.777-27.31    c15.711-6.734,32.211-10.101,49.504-10.101h15.963c4.32,0,8.062,1.583,11.223,4.739c3.156,3.161,4.738,6.901,4.738,11.223v31.923    c0,4.326-1.582,8.066-4.738,11.223c-3.16,3.16-6.902,4.739-11.223,4.739H399.58c-17.625,0-32.67,6.235-45.141,18.705    c-12.469,12.47-18.705,27.52-18.705,45.142v7.981c0,6.652,2.326,12.306,6.984,16.959c4.652,4.657,10.307,6.983,16.957,6.983    h55.867c13.299,0,24.605,4.657,33.918,13.966C458.77,265.74,463.426,277.045,463.426,290.345z"
                ></path>
              </svg>
            </div>
          </div>
          <div>
            <div>
              <p className="feat-rev-content">
                It's a great fit for my office. I wish it was easier to find
                covers for the smaller couches.
              </p>
            </div>
            <div className="reviews-stars">
              <div>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
              </div>
              <div><a href="">See All Reviews</a></div>
            </div>
          </div>
        </div>
        <div className="anchor-box">
          <div><a href="">Details & Specs</a></div>
          <div><a href="">Customer Reviews</a></div>
          <div>
            <a href="">Q & A</a>
          </div>
          <div><a href="">Tips & Inspiration</a></div>
        </div>
        <div className="detailsSpecs">
          <div className="details-heading none"><p>Details</p></div>
          <div className="details-heading block"><p>Details</p></div>
          <div className="details-heading block"><p>Specs</p></div>
          <div className="details-table">
            <p>ITEM#: 27983516</p>
            <p>
              Bring comfort and mid-century aesthetic to your decor with this
              Candace loveseat. The loveseat features a straight back, tapered
              armrests, and splayed feet that add a hint of retro charm to the
              design. The gorgeous polyester upholstery and biscuit tufted
              detailing on the back and seat complete the stylish luxury of this
              beautiful loveseat.
            </p>
            <p className="head">Features:</p>
            <ul>
              <li>Made from rubberwood</li>
              <li>Polyester fabric upholstery</li>
              <li>See option selection for available colors</li>
              <li>Walnut finish legs</li>
              <li>Assembly required</li>
              <li>Hand-crafted detail</li>
            </ul>
            <p className="head">Dimensions:</p>
            <ul>
              <li>
                Overall: 54.00 inches deep x 31.50 inches wide x 32.68 inches
              </li>
            </ul>
            <p className="head">high</p>
            <ul>
              <li>
                Seat: 21.87 inches deep x 42.52 inches wide x 17.32 inches high
              </li>
            </ul>
          </div>
          <div className="details-heading none"><p>Specs</p></div>
          <div className="details-table">
            <div className="select">
              <h2>Features</h2>
              <select className="translation-select" aria-label="language">
                <option value="ar">عربي (Arabic)</option>
                <option value="zh">简体中文 (Chinese)</option>
                <option value="en" selected="">English (English)</option>
                <option value="fr">Français (French)</option>
                <option value="de">Deutsch (German)</option>
                <option value="hi">हिंदी (Hindi)</option>
                <option value="ja">日本語 (Japanese)</option>
                <option value="pt">Português (Portuguese)</option>
                <option value="es">Español (Spanish)</option>
                <option value="tl">Tagalog (Tagalog)</option>
                <option value="tr">Türkçe (Turkish)</option>
                <option value="ur">اردو (Urdu)</option>
              </select>
              <svg
                className="specs-info-svg"
                data-toggle="tooltip"
                data-placement="top"
                data-container="body"
                title=""
                aria-hidden="true"
                aria-label="Specs Information"
                viewBox="0 0 32 32"
                data-original-title="We're working on getting the whole site translated for you, but in the meantime, key product features have been translated for your convenience."
              >
                <path
                  d="M20.563 24.563v-2.875c0-0.125-0.063-0.25-0.125-0.375-0.125-0.125-0.25-0.188-0.438-0.188h-1.688v-9.125c0-0.188-0.063-0.313-0.188-0.438-0.125-0.063-0.25-0.125-0.438-0.125h-5.688c-0.188 0-0.313 0.063-0.438 0.125-0.063 0.125-0.125 0.25-0.125 0.438v2.875c0 0.125 0.063 0.313 0.125 0.375 0.125 0.125 0.25 0.188 0.438 0.188h1.688v5.688h-1.688c-0.188 0-0.313 0.063-0.438 0.188-0.063 0.125-0.125 0.25-0.125 0.375v2.875c0 0.188 0.063 0.313 0.125 0.438 0.125 0.063 0.25 0.125 0.438 0.125h8c0.188 0 0.313-0.063 0.438-0.125 0.063-0.125 0.125-0.25 0.125-0.438zM18.313 8.563v-2.875c0-0.125-0.063-0.25-0.188-0.375s-0.25-0.188-0.438-0.188h-3.375c-0.188 0-0.313 0.063-0.438 0.188s-0.188 0.25-0.188 0.375v2.875c0 0.188 0.063 0.313 0.188 0.438 0.125 0.063 0.25 0.125 0.438 0.125h3.375c0.188 0 0.313-0.063 0.438-0.125 0.125-0.125 0.188-0.25 0.188-0.438zM29.688 16c0 2.5-0.563 4.813-1.813 6.875-1.25 2.125-2.875 3.75-5 5-2.063 1.25-4.375 1.813-6.875 1.813s-4.813-0.563-6.875-1.813c-2.125-1.25-3.75-2.875-5-5-1.25-2.063-1.813-4.375-1.813-6.875s0.563-4.813 1.813-6.875c1.25-2.125 2.875-3.75 5-5 2.063-1.25 4.375-1.813 6.875-1.813s4.813 0.563 6.875 1.813c2.125 1.25 3.75 2.875 5 5 1.25 2.063 1.813 4.375 1.813 6.875z"
                ></path>
              </svg>
            </div>
            <div className="table">
              <div>Style</div>
              <div>Mid-Century Modern Nautical & Coastal</div>
              <div>Material</div>
              <div>Fabric Rubberwood</div>
              <div>Type</div>
              <div>Settee</div>
              <div>Pattern</div>
              <div>Solid</div>
              <div>Print</div>
              <div>Solid</div>
              <div>Assembly</div>
              <div>Assembly Required</div>
              <div>Arm Style</div>
              <div>Squre Arms</div>
              <div>Back Style</div>
              <div>Tufted Back</div>
              <div>Color</div>
              <div>Beign Brown Grey</div>
              <div>Cushion fill</div>
              <div>Foam</div>
              <div>Seat Comfort</div>
              <div>Semi-Firm</div>
              <div>Seat Style</div>
              <div>Single Cushion</div>
              <div>Seats Up To</div>
              <div>2</div>
              <div>Upholstery Material</div>
              <div>Fabric</div>
              <div>Dimensions</div>
              <div>54.0 In. X 31.5 In. X 32.68 In.</div>
              <div>Warranty</div>
              <div>90 day Manufacturer</div>
              <div>Model Number</div>
              <div>305542</div>
              <div>Country of Origin</div>
              <div>China</div>
            </div>
          </div>
        </div>
        <div className="customerReviews">
          <div>
            <div className="review_head">Customer Reviews</div>
            <div className="ratings_btns">
              <div className="rating-div">
                <div className="rating">4.0</div>
                <div>
                  <div style={{display: "flex"}}>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star unchecked"></span>
                  </div>
                  <div className="reviews-count">137 Reviews</div>
                </div>
              </div>
              <div className="reviews-btns">
                <div className="all-reviews">
                  <button>See All Reviews</button>
                </div>
                <div>
                  <button>Write a Review</button>
                </div>
              </div>
            </div>
            <div className="rating-bar">
              <div>
                <div>5 Stars</div>
                <div><div className="bar1"></div></div>
                <div>83</div>
              </div>
              <div>
                <div>4 Stars</div>
                <div><div className="bar2"></div></div>
                <div>29</div>
              </div>
              <div>
                <div>3 Stars</div>
                <div><div className="bar3"></div></div>
                <div>16</div>
              </div>
              <div>
                <div>2 Stars</div>
                <div><div className="bar4"></div></div>
                <div>4</div>
              </div>
              <div>
                <div>1 Stars</div>
                <div><div className="bar5"></div></div>
                <div>5</div>
              </div>
            </div>
          </div>
          <div>
            <div className="review_head">Customer Reviews</div>
            <div className="reviews_imgs">
              <div>
                <img
                  src="https://i.postimg.cc/tCjdpZZk/Candace-Mid-century-Modern-Fabric-Loveseat-by-Christopher-Knight-Home-41179930.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://i.postimg.cc/wxcy5WM5/Candace-Mid-century-Modern-Fabric-Loveseat-by-Christopher-Knight-Home-41068420.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://i.postimg.cc/FKL1YpwL/Candace-Mid-century-Modern-Fabric-Loveseat-by-Christopher-Knight-Home-41068420.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://i.postimg.cc/wxcy5WM5/Candace-Mid-century-Modern-Fabric-Loveseat-by-Christopher-Knight-Home-41068420.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://i.postimg.cc/G2P2Q2L3/Candace-Mid-century-Modern-Fabric-Loveseat-by-Christopher-Knight-Home-40888281.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://i.postimg.cc/tJXgmjJ3/Candace-Mid-century-Modern-Fabric-Loveseat-by-Christopher-Knight-Home-40867479.jpg"
                  alt=""
                />
              </div>
            </div>


            <div class="all-images-anchor">
              <a href="">SeeAll Customer Images</a>
            </div>
          </div>
        </div>
        <div class="filterDiv">
          <div>
            <div>Sort By:</div>
            <div>
              <div class="dropDownHead">Most Relevant</div>
              <div class="dropDownContainer">
                <div>Most Relevant</div>
                <div>Rating: High-Low</div>
                <div>Rating Low-High</div>
                <div>Most Helpful</div>
                <div>Most Recent</div>
              </div>
              <div class="dropDown-icon">
                <svg class="up-down-caret" viewBox="0 0 32 32">
                  <path
                    d="M25.125 19.438c0 0.313-0.125 0.563-0.313 0.813l-8 8c-0.25 0.188-0.5 0.313-0.813 0.313s-0.563-0.125-0.813-0.313l-8-8c-0.188-0.25-0.313-0.5-0.313-0.813s0.125-0.563 0.313-0.813c0.25-0.25 0.5-0.313 0.813-0.313h16c0.313 0 0.563 0.063 0.813 0.313 0.188 0.25 0.313 0.5 0.313 0.813zM25.125 12.563c0 0.313-0.125 0.563-0.313 0.813-0.25 0.25-0.5 0.313-0.813 0.313h-16c-0.313 0-0.563-0.063-0.813-0.313-0.188-0.25-0.313-0.5-0.313-0.813s0.125-0.563 0.313-0.813l8-8c0.25-0.188 0.5-0.313 0.813-0.313s0.563 0.125 0.813 0.313l8 8c0.188 0.25 0.313 0.5 0.313 0.813z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <div>filter by:</div>
            <div>
              <div class="dropDownHead">All Ratings</div>
              <div class="dropDownContainer stars-dropdown">
                <div>All Ratings</div>
                <div>
                  <div>5 Stars</div>
                  <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                  </div>
                  <div>83</div>
                </div>
                <div>
                  <div>4 Stars</div>
                  <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star unchecked"></span>
                  </div>
                  <div>29</div>
                </div>
                <div>
                  <div>3 Stars</div>
                  <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star unchecked"></span>
                    <span class="fa fa-star unchecked"></span>
                  </div>
                  <div>16</div>
                </div>
                <div>
                  <div>2 Stars</div>
                  <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star unchecked"></span>
                    <span class="fa fa-star unchecked"></span>
                    <span class="fa fa-star unchecked"></span>
                  </div>
                  <div>4</div>
                </div>
                <div>
                  <div>1 Stars</div>
                  <div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star unchecked"></span>
                    <span class="fa fa-star unchecked"></span>
                    <span class="fa fa-star unchecked"></span>
                    <span class="fa fa-star unchecked"></span>
                  </div>
                  <div>5</div>
                </div>
              </div>
              <div class="dropDown-icon">
                <svg class="up-down-caret" viewBox="0 0 32 32">
                  <path
                    d="M25.125 19.438c0 0.313-0.125 0.563-0.313 0.813l-8 8c-0.25 0.188-0.5 0.313-0.813 0.313s-0.563-0.125-0.813-0.313l-8-8c-0.188-0.25-0.313-0.5-0.313-0.813s0.125-0.563 0.313-0.813c0.25-0.25 0.5-0.313 0.813-0.313h16c0.313 0 0.563 0.063 0.813 0.313 0.188 0.25 0.313 0.5 0.313 0.813zM25.125 12.563c0 0.313-0.125 0.563-0.313 0.813-0.25 0.25-0.5 0.313-0.813 0.313h-16c-0.313 0-0.563-0.063-0.813-0.313-0.188-0.25-0.313-0.5-0.313-0.813s0.125-0.563 0.313-0.813l8-8c0.25-0.188 0.5-0.313 0.813-0.313s0.563 0.125 0.813 0.313l8 8c0.188 0.25 0.313 0.5 0.313 0.813z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="ratings-info">
          <div class="info-div">
            <div>Lightweight</div>
            <div>
              <div>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star unchecked"></span>
                <span class="fa fa-star unchecked"></span>
              </div>
              <div class="verified-info">Verified Purchase</div>
              <div>Option: beige</div>
            </div>
            <div>
              This loveseat is very lightweight and moves very easily on hard
              surface floors so if you do not have it up against a wall you may
              want to invest in rubber feet. If I had seen this in person before
              I purchased I would have kept looking for something heavier and
              more comfortable. It is very stiff and not very padded. The
              light-colored fabric picks up dirt easily so you will want to have
              clean hands before you put it together (tip: wash your hands after
              you open the box). I do not think it was worth the cost for my
              needs
            </div>
            <div>
              <div>
                This user earned $4.00 in rewards for writing this review.
              </div>
              <div>Learn More</div>
            </div>
            <div class="info-img">
              <img
                src="https://i.postimg.cc/tCjdpZZk/Candace-Mid-century-Modern-Fabric-Loveseat-by-Christopher-Knight-Home-41179930.jpg"
                alt=""
              />
            </div>
            <div class="helpful3">
              <div>
                <div>St Teresa C.</div>
                <div>Aug 11, 2021</div>
              </div>
              <div>
                <button class="pull-right helpful-review-button">
                  <svg class="icon-like" viewBox="0 0 32 32">
                    <polyline
                      fill="none"
                      points="6,23 1,23 1,12 6,12"
                      stroke-linecap="square"
                      stroke-miterlimit="10"
                      stroke-width="2"
                    ></polyline>
                    <path
                      d="M6,12L9,1l0,0c1.7,0,3,1.3,3,3v6h7.5c1.8,0,3.2,1.6,3,3.5l-1.1,7c-0.2,1.5-1.5,2.5-3,2.5H6V12z"
                      fill="none"
                      stroke-linecap="square"
                      stroke-miterlimit="10"
                      stroke-width="2"
                    ></path>
                  </svg>
                  <span class="helpful-text">Helpful</span
                  ><span class="positive-feedback">3</span>
                </button>
              </div>
            </div>
          </div>
          <div class="info-div">
            <div>This loveseat is very comfortable</div>
            <div>
              <div>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
              </div>
              <div class="verified-info">Verified Purchase</div>
              <div>Option: mocha</div>
            </div>
            <div>
              Perfect for a small bedroom or living space. This loveseat is very
              comfortable,firm and solid and well made. Looks like the picture!
              We’re using it in my guest bedroom. The fabric is very nice. I am
              well pleased with this purchase.
            </div>
            <div>
              <div>
                This user earned $10.00 in rewards for writing this review.
              </div>
              <div>Learn More</div>
            </div>
            <div class="info-img">
              <img
                src="https://i.postimg.cc/wxcy5WM5/Candace-Mid-century-Modern-Fabric-Loveseat-by-Christopher-Knight-Home-41068420.jpg"
                alt=""
              />
            </div>
            <div class="helpful3">
              <div>
                <div>An Overstock Customer</div>
                <div>Dec 21, 2018</div>
              </div>
              <div>
                <button class="pull-right helpful-review-button">
                  <svg class="icon-like" viewBox="0 0 32 32">
                    <polyline
                      fill="none"
                      points="6,23 1,23 1,12 6,12"
                      stroke-linecap="square"
                      stroke-miterlimit="10"
                      stroke-width="2"
                    ></polyline>
                    <path
                      d="M6,12L9,1l0,0c1.7,0,3,1.3,3,3v6h7.5c1.8,0,3.2,1.6,3,3.5l-1.1,7c-0.2,1.5-1.5,2.5-3,2.5H6V12z"
                      fill="none"
                      stroke-linecap="square"
                      stroke-miterlimit="10"
                      stroke-width="2"
                    ></path>
                  </svg>
                  <span class="helpful-text">Helpful</span
                  ><span class="positive-feedback">3</span>
                </button>
              </div>
            </div>
          </div>
          <div class="info-div">
            <div>Cute but not comfortable</div>
            <div>
              <div>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star unchecked"></span>
              </div>
              <div class="verified-info">Verified Purchase</div>
              <div>Option: Dark Gray</div>
            </div>
            <div>
              This looks like a love seat but it's really just a bigger chair. I
              still like it. It's cute, the perfect color and it's the match to
              my chairs I purchase a few years back. The quality is ok and it
              serves it's purpose I just can't really cozy up on it and only one
              person can sit if you don't want to elbow anybody.
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div class="info-img">
              <img
                src="https://i.postimg.cc/tJXgmjJ3/Candace-Mid-century-Modern-Fabric-Loveseat-by-Christopher-Knight-Home-40867479.jpg"
                alt=""
              />
            </div>
            <div class="helpful3">
              <div>
                <div>grans05</div>
                <div>Apr 19, 2021</div>
              </div>
              <div>
                <button class="pull-right helpful-review-button">
                  <svg class="icon-like" viewBox="0 0 32 32">
                    <polyline
                      fill="none"
                      points="6,23 1,23 1,12 6,12"
                      stroke-linecap="square"
                      stroke-miterlimit="10"
                      stroke-width="2"
                    ></polyline>
                    <path
                      d="M6,12L9,1l0,0c1.7,0,3,1.3,3,3v6h7.5c1.8,0,3.2,1.6,3,3.5l-1.1,7c-0.2,1.5-1.5,2.5-3,2.5H6V12z"
                      fill="none"
                      stroke-linecap="square"
                      stroke-miterlimit="10"
                      stroke-width="2"
                    ></path>
                  </svg>
                  <span class="helpful-text">Helpful</span
                  ><span class="positive-feedback">3</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="expand-reviews">
          <div>Disclosures & Guidelines</div>
          <div>
            <a class="see-all pull-right"
              ><span>See all 137 Reviews </span
              ><svg color="inherit" viewBox="0 0 24 24">
                <polyline
                  fill="none"
                  stroke="inherit"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-miterlimit="10"
                  points="7,2 17,12 7,22 "
                  transform="translate(0, 0)"
                  stroke-linejoin="miter"
                ></polyline>
              </svg>
            </a>
          </div>
        </div>
        <div class="QA">
          <div><h2>Questions & Answers</h2></div>
          <div>
            <button>Ask a Question</button>
          </div>
        </div>
        <div class="QA-main">
          <div class="QA-content">
            <div class="info">
              <div>
                <div>Q:</div>
                <div>
                  <div class="dark">
                    "Is there a couch cover for this? Or has anyone found one
                    that fits this?"
                  </div>
                </div>
              </div>
              <div>
                <div>A:</div>
                <div>
                  <div>
                    Thank you for asking if there are covers for the Loveseat.
                    We do see there are a few different types and sizes
                    available on Overstock's website. We recommend checking the
                    size you need before purchasing. We hope this information
                    was helpful.
                  </div>
                  <div class="overstock">Overstock</div>
                  <div>Oct 14, 2021</div>
                </div>
              </div>
            </div>
            <div class="follow-content">
              <div class="existing-q-subscribe">
                <input
                  type="hidden"
                  name="productQuestionSubscribe"
                  value="true"
                />
                <a
                  data-omni-on="click"
                  data-omni-name="Subscribe to Question"
                  data-omni-var="eVar4"
                  data-omni-val="PRODPG:Questions:Subscribe"
                  tabindex="0"
                  role="button"
                >
                  <svg class="ppqa-envelope" viewBox="0 0 32 32">
                    <path
                      d="M32 11.688v14.188c0 0.75-0.25 1.438-0.813 2s-1.25 0.813-2.063 0.813h-26.25c-0.813 0-1.5-0.25-2.063-0.813s-0.813-1.25-0.813-2v-14.188c0.5 0.563 1.125 1.063 1.813 1.563 4.313 2.938 7.25 4.938 8.875 6.125 0.688 0.5 1.25 0.938 1.625 1.188 0.438 0.25 1 0.563 1.688 0.875 0.75 0.25 1.375 0.438 2 0.438v0c0.625 0 1.25-0.188 2-0.438 0.688-0.313 1.25-0.625 1.688-0.875 0.375-0.25 0.938-0.688 1.625-1.188 2.063-1.438 5-3.5 8.875-6.125 0.688-0.5 1.313-1 1.813-1.563zM32 6.438c0 0.938-0.313 1.813-0.875 2.688s-1.313 1.563-2.188 2.188c-4.438 3.125-7.25 5.063-8.375 5.813-0.063 0.063-0.375 0.25-0.75 0.563-0.375 0.25-0.688 0.5-0.938 0.688-0.25 0.125-0.563 0.313-0.938 0.563-0.375 0.188-0.688 0.375-1 0.5-0.375 0.063-0.625 0.125-0.938 0.125v0c-0.313 0-0.563-0.063-0.938-0.125-0.313-0.125-0.625-0.313-1-0.5-0.375-0.25-0.688-0.438-0.938-0.563-0.25-0.188-0.563-0.438-0.938-0.688-0.375-0.313-0.688-0.5-0.75-0.563-1.125-0.75-2.688-1.875-4.688-3.25-2.063-1.438-3.25-2.25-3.688-2.563-0.75-0.5-1.438-1.188-2.063-2.063-0.688-0.875-1-1.688-1-2.438 0-0.938 0.25-1.688 0.75-2.313s1.188-0.938 2.125-0.938h26.25c0.813 0 1.438 0.313 2 0.875s0.875 1.188 0.875 2z"
                    ></path>
                  </svg>
                  <span class="follow">Follow</span>
                </a>
              </div>
              <div class="ask-ques">
                <div>Ask Question</div>
              </div>
            </div>
          </div>
          <div class="QA-content">
            <div class="info">
              <div>
                <div>Q:</div>
                <div>
                  <div class="dark">"is the weight limit for each side?"</div>
                </div>
              </div>
              <div>
                <div>A:</div>
                <div>
                  <div>The weight capacity is 300Lbs per seater.</div>
                  <div class="overstock">Overstock</div>
                  <div>Sep 24, 2021</div>
                </div>
              </div>
            </div>
            <div class="follow-content">
              <div class="existing-q-subscribe">
                <input
                  type="hidden"
                  name="productQuestionSubscribe"
                  value="true"
                />
                <a
                  data-omni-on="click"
                  data-omni-name="Subscribe to Question"
                  data-omni-var="eVar4"
                  data-omni-val="PRODPG:Questions:Subscribe"
                  tabindex="0"
                  role="button"
                >
                  <svg class="ppqa-envelope" viewBox="0 0 32 32">
                    <path
                      d="M32 11.688v14.188c0 0.75-0.25 1.438-0.813 2s-1.25 0.813-2.063 0.813h-26.25c-0.813 0-1.5-0.25-2.063-0.813s-0.813-1.25-0.813-2v-14.188c0.5 0.563 1.125 1.063 1.813 1.563 4.313 2.938 7.25 4.938 8.875 6.125 0.688 0.5 1.25 0.938 1.625 1.188 0.438 0.25 1 0.563 1.688 0.875 0.75 0.25 1.375 0.438 2 0.438v0c0.625 0 1.25-0.188 2-0.438 0.688-0.313 1.25-0.625 1.688-0.875 0.375-0.25 0.938-0.688 1.625-1.188 2.063-1.438 5-3.5 8.875-6.125 0.688-0.5 1.313-1 1.813-1.563zM32 6.438c0 0.938-0.313 1.813-0.875 2.688s-1.313 1.563-2.188 2.188c-4.438 3.125-7.25 5.063-8.375 5.813-0.063 0.063-0.375 0.25-0.75 0.563-0.375 0.25-0.688 0.5-0.938 0.688-0.25 0.125-0.563 0.313-0.938 0.563-0.375 0.188-0.688 0.375-1 0.5-0.375 0.063-0.625 0.125-0.938 0.125v0c-0.313 0-0.563-0.063-0.938-0.125-0.313-0.125-0.625-0.313-1-0.5-0.375-0.25-0.688-0.438-0.938-0.563-0.25-0.188-0.563-0.438-0.938-0.688-0.375-0.313-0.688-0.5-0.75-0.563-1.125-0.75-2.688-1.875-4.688-3.25-2.063-1.438-3.25-2.25-3.688-2.563-0.75-0.5-1.438-1.188-2.063-2.063-0.688-0.875-1-1.688-1-2.438 0-0.938 0.25-1.688 0.75-2.313s1.188-0.938 2.125-0.938h26.25c0.813 0 1.438 0.313 2 0.875s0.875 1.188 0.875 2z"
                    ></path>
                  </svg>
                  <span class="follow">Follow</span>
                </a>
              </div>
              <div class="ask-ques">
                <div>Ask Question</div>
              </div>
            </div>
          </div>
          <div class="QA-content">
            <div class="info">
              <div>
                <div>Q:</div>
                <div>
                  <div class="dark">"Are the cushions washable"</div>
                </div>
              </div>
              <div>
                <div>A:</div>
                <div>
                  <div>Unfortunately, the cushion are not washable.</div>
                  <div class="overstock">Overstock</div>
                  <div>May 12, 2021</div>
                </div>
              </div>
            </div>
            <div class="follow-content">
              <div class="existing-q-subscribe">
                <input
                  type="hidden"
                  name="productQuestionSubscribe"
                  value="true"
                />
                <a
                  data-omni-on="click"
                  data-omni-name="Subscribe to Question"
                  data-omni-var="eVar4"
                  data-omni-val="PRODPG:Questions:Subscribe"
                  tabindex="0"
                  role="button"
                >
                  <svg class="ppqa-envelope" viewBox="0 0 32 32">
                    <path
                      d="M32 11.688v14.188c0 0.75-0.25 1.438-0.813 2s-1.25 0.813-2.063 0.813h-26.25c-0.813 0-1.5-0.25-2.063-0.813s-0.813-1.25-0.813-2v-14.188c0.5 0.563 1.125 1.063 1.813 1.563 4.313 2.938 7.25 4.938 8.875 6.125 0.688 0.5 1.25 0.938 1.625 1.188 0.438 0.25 1 0.563 1.688 0.875 0.75 0.25 1.375 0.438 2 0.438v0c0.625 0 1.25-0.188 2-0.438 0.688-0.313 1.25-0.625 1.688-0.875 0.375-0.25 0.938-0.688 1.625-1.188 2.063-1.438 5-3.5 8.875-6.125 0.688-0.5 1.313-1 1.813-1.563zM32 6.438c0 0.938-0.313 1.813-0.875 2.688s-1.313 1.563-2.188 2.188c-4.438 3.125-7.25 5.063-8.375 5.813-0.063 0.063-0.375 0.25-0.75 0.563-0.375 0.25-0.688 0.5-0.938 0.688-0.25 0.125-0.563 0.313-0.938 0.563-0.375 0.188-0.688 0.375-1 0.5-0.375 0.063-0.625 0.125-0.938 0.125v0c-0.313 0-0.563-0.063-0.938-0.125-0.313-0.125-0.625-0.313-1-0.5-0.375-0.25-0.688-0.438-0.938-0.563-0.25-0.188-0.563-0.438-0.938-0.688-0.375-0.313-0.688-0.5-0.75-0.563-1.125-0.75-2.688-1.875-4.688-3.25-2.063-1.438-3.25-2.25-3.688-2.563-0.75-0.5-1.438-1.188-2.063-2.063-0.688-0.875-1-1.688-1-2.438 0-0.938 0.25-1.688 0.75-2.313s1.188-0.938 2.125-0.938h26.25c0.813 0 1.438 0.313 2 0.875s0.875 1.188 0.875 2z"
                    ></path>
                  </svg>
                  <span class="follow">Follow</span>
                </a>
              </div>
              <div class="ask-ques">
                <div>Ask Question</div>
              </div>
            </div>
          </div>
          <div class="QA-content">
            <div class="info">
              <div>
                <div>Q:</div>
                <div>
                  <div class="dark">
                    "will material hold up to wiping down with damp cloth
                    frequently"
                  </div>
                </div>
              </div>
              <div>
                <div>A:</div>
                <div>
                  <div>
                    Yes, please absorb the moisture as soon as possible after
                    wiping with a damp cloth.
                  </div>
                  <div class="overstock">Overstock</div>
                  <div>Jan 28, 2021</div>
                </div>
              </div>
            </div>
            <div class="follow-content">
              <div class="existing-q-subscribe">
                <input
                  type="hidden"
                  name="productQuestionSubscribe"
                  value="true"
                />
                <a
                  data-omni-on="click"
                  data-omni-name="Subscribe to Question"
                  data-omni-var="eVar4"
                  data-omni-val="PRODPG:Questions:Subscribe"
                  tabindex="0"
                  role="button"
                >
                  <svg class="ppqa-envelope" viewBox="0 0 32 32">
                    <path
                      d="M32 11.688v14.188c0 0.75-0.25 1.438-0.813 2s-1.25 0.813-2.063 0.813h-26.25c-0.813 0-1.5-0.25-2.063-0.813s-0.813-1.25-0.813-2v-14.188c0.5 0.563 1.125 1.063 1.813 1.563 4.313 2.938 7.25 4.938 8.875 6.125 0.688 0.5 1.25 0.938 1.625 1.188 0.438 0.25 1 0.563 1.688 0.875 0.75 0.25 1.375 0.438 2 0.438v0c0.625 0 1.25-0.188 2-0.438 0.688-0.313 1.25-0.625 1.688-0.875 0.375-0.25 0.938-0.688 1.625-1.188 2.063-1.438 5-3.5 8.875-6.125 0.688-0.5 1.313-1 1.813-1.563zM32 6.438c0 0.938-0.313 1.813-0.875 2.688s-1.313 1.563-2.188 2.188c-4.438 3.125-7.25 5.063-8.375 5.813-0.063 0.063-0.375 0.25-0.75 0.563-0.375 0.25-0.688 0.5-0.938 0.688-0.25 0.125-0.563 0.313-0.938 0.563-0.375 0.188-0.688 0.375-1 0.5-0.375 0.063-0.625 0.125-0.938 0.125v0c-0.313 0-0.563-0.063-0.938-0.125-0.313-0.125-0.625-0.313-1-0.5-0.375-0.25-0.688-0.438-0.938-0.563-0.25-0.188-0.563-0.438-0.938-0.688-0.375-0.313-0.688-0.5-0.75-0.563-1.125-0.75-2.688-1.875-4.688-3.25-2.063-1.438-3.25-2.25-3.688-2.563-0.75-0.5-1.438-1.188-2.063-2.063-0.688-0.875-1-1.688-1-2.438 0-0.938 0.25-1.688 0.75-2.313s1.188-0.938 2.125-0.938h26.25c0.813 0 1.438 0.313 2 0.875s0.875 1.188 0.875 2z"
                    ></path>
                  </svg>
                  <span class="follow">Follow</span>
                </a>
              </div>
              <div class="ask-ques">
                <div>Ask Question</div>
              </div>
            </div>
          </div>
          <div class="QA-content">
            <div class="info">
              <div>
                <div>Q:</div>
                <div>
                  <div class="dark">
                    "Does this product contains wood dust(proposition 65) which
                    can cause cancer?"
                  </div>
                </div>
              </div>
              <div>
                <div>A:</div>
                <div>
                  <div>
                    This has no prop 65 which means our product under the safe
                    limit of the chemicals
                  </div>
                  <div class="overstock">Overstock</div>
                  <div>Jan 8, 2021</div>
                </div>
              </div>
            </div>
            <div class="follow-content">
              <div class="existing-q-subscribe">
                <input
                  type="hidden"
                  name="productQuestionSubscribe"
                  value="true"
                />
                <a
                  data-omni-on="click"
                  data-omni-name="Subscribe to Question"
                  data-omni-var="eVar4"
                  data-omni-val="PRODPG:Questions:Subscribe"
                  tabindex="0"
                  role="button"
                >
                  <svg class="ppqa-envelope" viewBox="0 0 32 32">
                    <path
                      d="M32 11.688v14.188c0 0.75-0.25 1.438-0.813 2s-1.25 0.813-2.063 0.813h-26.25c-0.813 0-1.5-0.25-2.063-0.813s-0.813-1.25-0.813-2v-14.188c0.5 0.563 1.125 1.063 1.813 1.563 4.313 2.938 7.25 4.938 8.875 6.125 0.688 0.5 1.25 0.938 1.625 1.188 0.438 0.25 1 0.563 1.688 0.875 0.75 0.25 1.375 0.438 2 0.438v0c0.625 0 1.25-0.188 2-0.438 0.688-0.313 1.25-0.625 1.688-0.875 0.375-0.25 0.938-0.688 1.625-1.188 2.063-1.438 5-3.5 8.875-6.125 0.688-0.5 1.313-1 1.813-1.563zM32 6.438c0 0.938-0.313 1.813-0.875 2.688s-1.313 1.563-2.188 2.188c-4.438 3.125-7.25 5.063-8.375 5.813-0.063 0.063-0.375 0.25-0.75 0.563-0.375 0.25-0.688 0.5-0.938 0.688-0.25 0.125-0.563 0.313-0.938 0.563-0.375 0.188-0.688 0.375-1 0.5-0.375 0.063-0.625 0.125-0.938 0.125v0c-0.313 0-0.563-0.063-0.938-0.125-0.313-0.125-0.625-0.313-1-0.5-0.375-0.25-0.688-0.438-0.938-0.563-0.25-0.188-0.563-0.438-0.938-0.688-0.375-0.313-0.688-0.5-0.75-0.563-1.125-0.75-2.688-1.875-4.688-3.25-2.063-1.438-3.25-2.25-3.688-2.563-0.75-0.5-1.438-1.188-2.063-2.063-0.688-0.875-1-1.688-1-2.438 0-0.938 0.25-1.688 0.75-2.313s1.188-0.938 2.125-0.938h26.25c0.813 0 1.438 0.313 2 0.875s0.875 1.188 0.875 2z"
                    ></path>
                  </svg>
                  <span class="follow">Follow</span>
                </a>
              </div>
              <div class="ask-ques">
                <div>Ask Question</div>
              </div>
            </div>
          </div>
        </div>
        <div class="show-all-btn">
          <button>Show All Questions</button>
        </div>
        <div class="shoping-data">
          <div>Shopping Tips & Inspiration</div>
          <div class="shoping-info-div">
            <div class="shoping-info">
              <div>
                <div class="dark">Why You Need a Loveseat</div>
                <div class="normal">
                  Your seating affects your entire layout and how you arrange
                  the rest of your furniture. Here's how to know if a loveseat
                  is the right fit for your design.
                </div>
              </div>
              <div>
                <div class="dark">Best Kid-friendly Fabric for Sofas</div>
                <div class="normal">
                  Best Kid-friendly Fabric for Sofas from Overstock.com. Our
                  guides provide customers with information about the best
                  kid-friendly fabric for sofas.
                </div>
              </div>
              <div>
                <div class="dark">
                  Best Sectional Sofas & Couches for Small Spaces
                </div>
                <div class="normal">
                  A small living room or apartment shouldn’t cramp your ability
                  to lounge comfortably on a sofa or couch. In a small space,
                  the right couch can add comfort to your living room without
                  being too bulky or disrupting the flow. It’s typically
                  recommended to have a sofa that measures between 88 and 96
                  inches wide, but that isn’t always an option in small homes.
                  Luckily, there is a wide range of small sectionals, loveseats,
                  settees, and other couches that might be a perfect fit for
                  your space. Keep reading to find the ideal sofa for your home.
                </div>
              </div>
              <div>
                <div class="dark">
                  Pet-Friendly Furniture: 3 Things to Consider
                </div>
                <div class="normal">
                  Your pet's shedding and sharp claws can damage your furniture
                  upholstery. Learn how to prevent or clean up after pet-related
                  damage.
                </div>
              </div>
              <div>
                <div class="dark">How To Clean A Faux Leather Chair</div>
                <div class="normal">
                  Faux leather chairs deliver the supple feel and elegant
                  aesthetic of leather. Here's how to clean your chair to
                  prevent cracks and preserve color depth.
                </div>
              </div>
              <div>
                <div class="dark">How To Clean A Microfiber Chair</div>
                <div class="normal">
                  Refresh the overall look and feel of your microfiber chair.
                  Follow the safe and simple methods in this guide to remove
                  stains and restore softness.
                </div>
              </div>
              <div>
                <div class="dark">How To Clean A Polyester Sofa</div>
                <div class="normal">
                  A polyester sofa is the heart of your home, so it's bound to
                  get dirty. Here's how to clean the upholstery to bring it back
                  to life.
                </div>
              </div>
              <div>
                <div class="dark">How To Clean A Velvet Chair</div>
                <div class="normal">
                  A velvet chair is a lush and luxurious accent piece. Here's
                  how to refresh and revive velvet upholstery while protecting
                  the delicate pile.
                </div>
              </div>
              <div>
                <div class="dark">How To Clean A Suede Chair</div>
                <div class="normal">
                  With its soft, supple surface, a suede chair is a luxe
                  investment piece. Done properly, regular cleaning can keep the
                  velvety upholstery looking like new.
                </div>
              </div>
              <div>
                <div class="dark">How To Clean A Chenille Sofa</div>
                <div class="normal">
                  When it's time to clean your chenille sofa, safe methods and
                  products can refresh the fabric without disrupting the
                  delicate pile.
                </div>
              </div>
              <div>
                <div class="dark">Spirit of the Southwest</div>
                <div class="normal">
                  Capture the enchanting aura cast by red rock and turquise
                  stone in home furnishings and decorative accessories inspired
                  by the American Southwest.
                </div>
              </div>
              <div>
                <div class="dark">Mixed Material Home</div>
                <div class="normal">
                  Reclaimed Wood and Cement. Marble and Metal. Leather and Wood.
                  These materials didn’t used to be mixed but now they've come
                  together for a winning combination.
                </div>
              </div>
            </div>
          </div>
          <div class="navigations-div">
            <div class="navigations">
              <div>
                <svg id="tips-inpsiration-chevron" viewBox="0 0 32 32">
                  <path
                    d="M29.938 20.688c0 0.688-0.25 1.188-0.688 1.625l-1.313 1.375c-0.5 0.438-1 0.625-1.625 0.625-0.688 0-1.188-0.188-1.625-0.625l-8.688-8.688-8.688 8.688c-0.438 0.438-0.938 0.625-1.625 0.625-0.625 0-1.125-0.188-1.563-0.625l-1.375-1.375c-0.438-0.438-0.688-0.938-0.688-1.625 0-0.625 0.25-1.125 0.688-1.625l11.625-11.625c0.438-0.438 1-0.625 1.625-0.625s1.188 0.188 1.625 0.625l11.625 11.625c0.438 0.5 0.688 1 0.688 1.625z"
                  ></path>
                </svg>
              </div>
              <div>
                <svg viewBox="0 0 32 32">
                  <path
                    d="M29.938 10.563c0 0.625-0.25 1.188-0.688 1.625l-11.625 11.625c-0.438 0.438-1 0.688-1.625 0.688s-1.188-0.25-1.625-0.688l-11.625-11.625c-0.438-0.438-0.688-1-0.688-1.625s0.25-1.188 0.688-1.625l1.313-1.313c0.5-0.438 1.063-0.688 1.625-0.688 0.688 0 1.188 0.25 1.625 0.688l8.688 8.688 8.688-8.688c0.438-0.438 0.938-0.688 1.625-0.688 0.563 0 1.125 0.25 1.625 0.688l1.313 1.313c0.438 0.5 0.688 1 0.688 1.625z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="anchor-links">
          <div>People Also Searched</div>
          <div>
            <div>
              <a href="">Modern & Contemporary Living Room Furniture</a>
            </div>
            <div><a href="">Traditional Living Room Furniture</a></div>
            <div><a href="">Mid-Century Modern Living Room Furniture</a></div>
            <div><a href="">Farmhouse Living Room Furniture</a></div>
            <div><a href="">Rustic Living Room Furniture</a></div>
            <div><a href="">Leather Living Room Furniture</a></div>
            <div><a href="">Grey Living Room Furniture</a></div>
            <div><a href="">Nautical & Coastal Living Room Furniture</a></div>
          </div>
        </div>
      </div>
      <div class="row"><div id="footerPut" class="col"></div></div>

            </div>
)
}