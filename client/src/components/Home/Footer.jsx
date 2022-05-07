export const Footer = () => {
  return (
    <>
      <div id="footerContainer">
        <div className="box1Footer">
          <div className="footerMediaDiv">
            <div className="footerDiv_1">
              <a className="paraInfoFooter">My Account</a>
              <a className="paraInfoFooter">Email Preferences</a>
              <a className="paraInfoFooter">International Help</a>
              <a className="paraInfoFooter">Privacy Policy</a>
              <a className="paraInfoFooter">Accessibility</a>
              <a className="paraInfoFooter">Sales and Deals</a>
            </div>
            <div className="footerDiv_2">
              <a className="paraInfoFooter">Terms & Conditions</a>
              <a className="paraInfoFooter">Privacy Policy</a>
              <a className="paraInfoFooter">*Promotion Terms</a>
              <a className="paraInfoFooter">Return Policy</a>
            </div>
          </div>
          <div className="infoDiv">
            <a className="headInfoFooter">MY ACCOUNT</a>
            <a className="paraInfoFooter">Orders & Returns</a>
            <a className="paraInfoFooter">Email Preferences</a>
            <a className="paraInfoFooter">Account Settings</a>
          </div>
          <div className="infoDiv">
            <a className="headInfoFooter">LET US HELP</a>
            <a className="paraInfoFooter">Contact Customer Care</a>
            <a className="paraInfoFooter">Shipping Information</a>
            <a className="paraInfoFooter">Return Policy</a>
            <a className="paraInfoFooter">International Help</a>
            <a className="paraInfoFooter">Accessibility</a>
          </div>
          <div className="infoDiv">
            <a className="headInfoFooter">COMPANY INFORMATION</a>
            <a className="paraInfoFooter">About Overstock™</a>
            <a className="paraInfoFooter">Careers</a>
            <a className="paraInfoFooter">Sell Your Products</a>
            <a className="paraInfoFooter">Overstock™ Investor Relations</a>
            <a className="paraInfoFooter">Overstock Dividend FAQs</a>
            <a className="paraInfoFooter">
              Overstock™ Supply Chain Transparency
            </a>
          </div>
          <div className="infoDiv">
            <a className="headInfoFooter">MORE WAYS TO SHOP</a>
            <a className="paraInfoFooter">Tips & Ideas</a>
            <a className="paraInfoFooter">Deals</a>
            <a className="paraInfoFooter">Clearance</a>
            <a className="paraInfoFooter">New Arrivals</a>
          </div>
        </div>

        <div className="box2Footer">
          <a className="mediaAnchor">Ship to:</a>
          <div className="copyrightSec">
            <p>
              {" "}
              © Copyright 2021, Overstock.com®, Inc. <br /> 799 Coliseum Way
              Midvale, UT 84047 | 1-800-843-2446{" "}
            </p>
          </div>
          <div className="privacySec">
            <a>Privacy</a>
            <a>PolicyTerms & Conditions</a>
            <a>*Promotion Terms</a>
            <a>Ship to:</a>
          </div>
        </div>
      </div>
    </>
  );
};
