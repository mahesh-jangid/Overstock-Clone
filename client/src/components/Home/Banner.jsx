
export const Banners = ({ src, title, subtitle }) => {
    return (
      <section id="banner">
        <div className="banner">
          {/* <img src={src} alt="" className="img-fluid" /> */}
        {/* <p>Hello</p> */}
        </div>
        <div className="banner_content">
          <h1>{title}</h1>
          <h4>{subtitle}</h4>
  
          <div className="btn_cont">
            <a href="">
              <button>SHOP NOW</button>
            </a>
          </div>
        </div>
      </section>
    );
  };