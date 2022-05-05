import "./cart.css";
export const Cart = (props) => {
  // const { cartItems, onAdd, onRemove } = props;
  const cartItems = [];
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div>
      <div className="container">
        <div className="products">
          <div className="items">
            <div className="imgCont">
              <img
                src="https://ak1.ostkcdn.com/images/products/is/images/direct/eb694f01bd8ba34799601956fb999287fa686ee5/Dressing-Mirror-Arched-Wall-Mirror-Standing%2C-Leaning-Hanging.jpg?impolicy=mediumlow"
                alt=""
              />
            </div>
            <div className="info">
              <div>
                <span>Lorem, ipsum dolor.</span>
              </div>
              <div>Lorem ipsum dolor sit.</div>
              <div>lorem</div>
              <div>
                <select
                  className="qty-select"
                  autoComplete="off"
                  name="qty-select"
                >
                  <option label="0 (Remove)" value="0">
                    0 (Remove)
                  </option>
                  <option selected label="1 " value="1">
                    1{" "}
                  </option>
                  <option label="2 " value="2">
                    2{" "}
                  </option>
                  <option label="3 " value="3">
                    3{" "}
                  </option>
                  <option label="4 " value="4">
                    4{" "}
                  </option>
                  <option label="5 " value="5">
                    5{" "}
                  </option>
                  <option label="6 " value="6">
                    6{" "}
                  </option>
                  <option label="7 " value="7">
                    7{" "}
                  </option>
                  <option label="8 " value="8">
                    8{" "}
                  </option>
                  <option label="9 " value="9">
                    9{" "}
                  </option>
                  <option label="10 " value="10">
                    10{" "}
                  </option>
                  <option label="11 " value="11">
                    11{" "}
                  </option>
                  <option label="12 " value="12">
                    12{" "}
                  </option>
                  <option label="13 " value="13">
                    13{" "}
                  </option>
                  <option label="14 " value="14">
                    14{" "}
                  </option>
                  <option label="15 " value="15">
                    15{" "}
                  </option>
                  <option label="16 " value="16">
                    16{" "}
                  </option>
                  <option label="17 " value="17">
                    17{" "}
                  </option>
                  <option label="18 " value="18">
                    18{" "}
                  </option>
                  <option label="19 " value="19">
                    19{" "}
                  </option>
                  <option label="20 " value="20">
                    20{" "}
                  </option>
                </select>
              </div>

              <div className="remove">
                <a>Remove</a>
                <a>Save For Later</a>
              </div>
            </div>
          </div>
        </div>
        <div className="total">
          <div className="nr main-totals-wrap-international">
            <div className="og oo">
              <span data-cy="subtotal-totals-line-item-label">(3) Items:</span>
              <span data-cy="subtotal-totals-line-item" className="undefined ">
                INR 292,887.48
              </span>
            </div>
            <div className="og oq">
              <span data-cy="total-totals-line-item-label">Your Total:</span>
              <span data-cy="total-totals-line-item" className="undefined ">
                INR 292,887.48
              </span>
            </div>

            <a
              className="cl-button cl-button-lg cl-button-primary pc"
              href=""
              aria-label="check out now button in main totals section"
              data-cy="totals-checkout-button-desktop"
              id="stationaryButtonDesktop"
              data-cl-tracking="button_5.1.0"
            >
              <button>
                <svg
                  className="cl-icon"
                  fill="#2f3337"
                  height="24"
                  stroke="#2f3337"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>Lock</title>
                  <path
                    d="M12 1a4.95 4.95 0 00-5 5v3h10V6a4.95 4.95 0 00-5-5zM19 9H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V11a2 2 0 00-2-2z"
                    stroke="inherit"
                    fill="none"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12 17a2 2 0 100-4 2 2 0 000 4zM12 17v2"
                    stroke="inherit"
                    fill="none"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Check Out
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
