export const Deals = ({ offers }) => {
  return (
    <div class="container-fluid universalSpacingX">
      <div class="row">
        <div class="col limitedtimeDiv">
          <div class="limitedtimeHeadingDiv">
            <h2 class="limitedtimeHeading">Limited-Time Deals</h2>
          </div>
        </div>
      </div>

      <div class="row universalSpacing">
        <div class="col">
          <div class="offerContainer">
            {offers.map((items) => {
              return (
                <div class="offerCard">
                  <a
                    href="category.html"
                    class="offerCardLink"
                    onclick="page(`Rugs`)"
                  >
                    <div class="offerCardImgDiv">
                      <img
                        style={{ backgroundColor: "#FEF8E8" }}
                        class="offerCardImg"
                        src={items.src}
                        alt=""
                      />
                    </div>
                    <div class="offerCardTitleDiv">
                      <h3 class="title-xs offerCardTitle">{items.title}</h3>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
