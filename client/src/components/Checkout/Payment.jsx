
import { useEffect, useState } from "react";

import "./Payment.css";

import { Link, useParams } from "react-router-dom";

import axios from "axios";


export const Payment = () => {

    return (
        <div>
          
          <div className="overstock_div"> 
        <img src="data:image/png;base64,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"/>
        <p> You are using our secure server</p>
    </div>

    <div className="overstock_div2">
        <img src="data:image/png;base64,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"/>
        <p>Secure checkout provided by FedEx International.<br></br>
            Your order total includes customs and taxes, if applicable.</p>
    </div>

    <div className = "returnAnchor_div"><a className = "returnAnchor">Back to Cart</a></div>
    <div id="addressContainer">
        <div className="addressBox1">
            <div className="addressBoxHead">
                <p>Billing Address</p>
            </div>
            <div className= "bilingInputDiv">
                <div className="bilingLabel">
                    <label className = "topEle boldLabel">EMAIL</label> 
                    <label  className = "boldLabel">First Name</label>
                    <label  className = "boldLabel">Last Name</label> 
                    <label className = "boldLabel">Company</label> 
                    <label className = "boldLabel">Address Line 1</label>
                    <label className = "boldLabel">Address Line 2</label>
                    <label className = "boldLabel">Country</label> 
                    <label className = "boldLabel">City</label> 
                    <label className = "boldLabel">State</label> 
                    <label className = "boldLabel">Zip code</label> 
                </div>
                <div className="bilingInput">
                    <input className = "topEle" id="email" type="text" required/>
                    <input id="firstName"  type="text" required />
                    <input id="lastName" type="text" required/>
                    <input id="company" type="text" />
                    <input id="address1" type="text" required/>
                    <input id="address2" type="text" />
                    <select className="form-select countrySelect" id = "country" aria-label="Default select example" required>
                        <option selected>Select Country</option>
                            <option value="india">India</option>
                            <option value="canada">Canada</option>
                            <option value="china">China</option>
                            <option value="japan">Japan</option>
                            <option value="russia">Russia</option>
                            <option value="france">France</option>
                 </select>
                    <input id="city" type="text" required/>
                    <input id="state" type="text" />
                    <input id="zipcode" type="text" />

                </div>
            </div>
            

        </div>


        <div className="addressBox2">
            <div className="addressBoxHead">
                <p>Shipping Address</p>
            </div>
            <div className= "bilingInputDiv">
                <div className="bilingLabel increaseDivWidth">
                    <label className = "topEle boldLabel">EMAIL</label> 
                    <label className = "boldLabel">First Name</label>
                    <label className = "boldLabel">Last Name</label> 
                    <label className = "boldLabel">Company</label> 
                    <label className = "boldLabel">Address Line 1</label>
                    <label className = "boldLabel">Address Line 2</label>
                    <label className = "boldLabel">Country</label> 
                    <label className = "boldLabel">City</label> 
                    <label className = "boldLabel">State</label> 
                    <label className = "boldLabel">Zip code</label> 
                </div>
                <div className="bilingInput">
                    <input className = "topEle" id="email2" type="text" />
                    <input id="firstName2" type="text" />
                    <input id="lastName2" type="text" />
                    <input id="company2" type="text" />
                    <input id="address12" type="text" />
                    <input id="shipping_address22" type="text" />
                    <select className="form-select countrySelect" id = "country2" aria-label="Default select example">
                            <option selected>Select Country</option>
                            <option value="india">India</option>
                            <option value="canada">Canada</option>
                            <option value="china">China</option>
                            <option value="japan">Japan</option>
                            <option value="russia">Russia</option>
                            <option value="france">France</option>
                     </select>
                    <input id="city2" type="text" />
                    <input id="state2" type="text" />
                    <input id="zipcode2" type="text" />
                </div>
            </div>
            
        </div>
    </div>

    <div className = "paymentsItemInfo">
        <div>

        </div>
        <div className = "methodShipping">
            <div className="headShipping">
                <p>Shipping Method</p>
            </div>
            <div className = "shippingInfo">
                <div className = "shippingDiv2">
                     <div>
                        <input type="radio" name = "shippingMethod" value="standard" />
                         <span><b>International Standard</b> - 11785.06 INR</span>
                         <p className = "green">Estimated Delivery Date: 10-05-2022</p>
                     </div>
                     <div>
                        <input type="radio" name = "shippingMethod" value="express" />
                        <span><b>International Express</b> - 14405.21 INR</span>
                        <p className = "green">Estimated Delivery Date: 9-05-2022</p>
                     </div>
                </div>
            </div>
        </div>
       
    </div>

    <div className = "paymentUserDetails">
        <div className = "payment_divHead">
            <p>Payment Information</p>
        </div>
        <div className = "paymentDetails">
            <div className = "imgDiv">
                <img src = "https://e7.pngegg.com/pngimages/27/252/png-clipart-mastercard-visa-credit-card-paypal-logo-mastercard-text-display-advertising.png"/>
            </div>
            <div className = "cardInfo">
                <div className="cardQuery">
                    <p>Card Type</p>
                    <p>Cardholder Name</p>
                    <p className="expcvv_text">Expiry</p>
                    <p className="expcvv_text2">CVV</p>
                </div>
                <div className="cardQueryResult">
                    <select className="inputbox" name="card_type" id="card_type" required>
                        <option value="">Select Card</option>
                        <option value="Visa">Visa</option>
                        <option value="RuPay">RuPay</option>
                        <option value="MasterCard">MasterCard</option>
                      </select>
                    <input type="text" className="inputbox" name="name" id="name" required />
                    <input type="date" className="inputbox" name="exp_date" id="exp_date" required />
                    <input type="password" className="inputbox" name="cvv" id="cvv" required />
                </div>
            </div>
        </div>
    </div>

    <div id="t3">
                    <input type="checkbox" />
                    <span id="five">When you sign up for email, you'll get exclusive coupons, sale notifications, and product ideas.</span>
                    <br />
                    <br />
                </div>
                    <button onClick={() =>{
                        window.location.href = "/Success";
                    }} type="submit" className="button">Place order</button>

  <hr></hr>


<div>
    © 2021 Overstock.com All Rights Reserved
</div>
</div>
    )
}