import "../../App.css";

export const Banner = () => {
  return (
    <div class="contianer-fluid">
      <div class="row">
        <div class="col">
          <a href="category.html">
            <div class="banner">
              <div class="bannerDiv">
                <div>
                  <img
                    class="bannerimg1"
                    src="https://overstock-clone.s3.ap-south-1.amazonaws.com/01102022-HP-A1-1400x550_INTL.webp"
                  />
                </div>
                <div>
                  <img
                    class="bannerimg2"
                    src="https://overstock-clone.s3.ap-south-1.amazonaws.com/01102022-HP-A1-1400x550_INTL.svg"
                  />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
