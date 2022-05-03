export const Banners = ({ src, title, subtitle }) => {
  return (
    <section id="banner">
      <div class="banner">
        <img src={src} alt="" class="img-fluid" />
      </div>
      <div class="banner_content">
        <h1>{title}</h1>
        <h4>{subtitle}</h4>

        <div class="btn_cont">
          <a href="">
            <button>SHOP MEN</button>
          </a>
          <a href="">
            <button>SHOP WOMEN</button>
          </a>
          <a href="">
            <button>SHOP KIDS</button>
          </a>
        </div>
      </div>
    </section>
  );
};
