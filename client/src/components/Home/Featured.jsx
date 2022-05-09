
import "./Home.css";

export const Featured = () => {
  return (
    <>
      <div className="row universalSpacing">
        <div className="col limitedtimeDiv">
          <div className="limitedtimeHeadingDiv">
            <h2 className="limitedtimeHeading">Overstock Featured</h2>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div
            className="styleCardDiv"
            style={{
              display: "flex",
              width: 96 + "%",
              margin: "auto",
              gap: 27 + "px",
            }}
          >
            <div className="styleCard">
              <a className="SliderCardLink">
                <div className="categoryCardImgDiv">
                  <img
                    className="categoryCardImg"
                    src="https://i.postimg.cc/HkxqKqx8/10262020-Shop-Style-Style-Farmhouse.jpg"
                    alt=""
                  />
                </div>
                <div className="sliderCardDiv">
                  <div className="sliderCardHeading">Farmhouse</div>
                  <div className="sliderCardTitle">
                    Rustic meets chic in woven textiles and distressed country
                    decor.
                  </div>
                </div>
              </a>
            </div>
            <div className="styleCard">
              <a className="SliderCardLink">
                <div className="categoryCardImgDiv">
                  <img
                    className="categoryCardImg"
                    src="https://i.postimg.cc/KcTB7jDR/10262020-Shop-Style-Style-Coastal.jpg"
                    alt=""
                  />
                </div>
                <div className="sliderCardDiv">
                  <div className="sliderCardHeading">Coastal</div>
                  <div className="sliderCardTitle">
                    Cool tones and natural textures offer a breezy, carefree
                    space.
                  </div>
                </div>
              </a>
            </div>
            <div className="styleCard">
              <a className="SliderCardLink" href="">
                <div className="categoryCardImgDiv">
                  <img
                    className="categoryCardImg"
                    src="https://i.postimg.cc/prvTJWPF/10262020-Shop-Style-Style-MC.jpg"
                    alt=""
                  />
                </div>
                <div className="sliderCardDiv">
                  <div className="sliderCardHeading">Mid-Century Modern</div>
                  <div className="sliderCardTitle">
                    Clean lines and bright hues create a style both retro and
                    sleek.
                  </div>
                </div>
              </a>
            </div>
            <div className="styleCard">
              <a className="SliderCardLink" href="">
                <div className="categoryCardImgDiv">
                  <img
                    className="categoryCardImg"
                    src="https://i.postimg.cc/prvTJWPF/10262020-Shop-Style-Style-MC.jpg"
                    alt=""
                  />
                </div>
                <div className="sliderCardDiv">
                  <div className="sliderCardHeading">Mid-Century Modern</div>
                  <div className="sliderCardTitle">
                    Clean lines and bright hues create a style both retro and
                    sleek.
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};