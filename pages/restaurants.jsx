import Subscribe from "@/src/components/Subscribe";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const Restaurants = () => {
  return (
    <Layout>
      {/* hero-section */}
      <section className="hero-section about gap">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="about-text">
                <ul className="crumbs d-flex">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="two">
                    <Link href="/">
                      <i className="fa-solid fa-right-long" />
                      Restaurants
                    </Link>
                  </li>
                </ul>
                <h2>Restaurants</h2>
                <p>
                  Egestas sed tempus urna et pharetra pharetra massa. Fermentum
                  posuere urna nec tincidunt praesent semper.
                </p>
                <div className="restaurant">
                  <div className="nice-select-one">
                    <select className="nice-select Advice">
                      <option>Choose a Restaurant</option>
                      <option>Choose a Restaurant 1</option>
                      <option>Choose a Restaurant 2</option>
                      <option>Choose a Restaurant 3</option>
                      <option>Choose a Restaurant 4</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="restaurants-girl-img food-photo-section">
                <img alt="man" src="assets/img/photo-11.png" />{" "}
                <a href="#" className="one">
                  <i className="fa-solid fa-burger" />
                  Burgers
                </a>{" "}
                <a href="#" className="two">
                  <i className="fa-solid fa-drumstick-bite" />
                  Chicken
                </a>{" "}
                <a href="#" className="three">
                  <i className="fa-solid fa-cheese" />
                  Steaks
                </a>{" "}
                <a href="#" className="for">
                  <i className="fa-solid fa-pizza-slice" />
                  Fish
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner */}
      <section
        className="banner"
        data-aos="fade-up"
        data-aos-delay={200}
        data-aos-duration={300}
      >
        <div className="container">
          <div
            className="banner-img"
            style={{ backgroundImage: "url(assets/img/food-4.jpg)" }}
          >
            <div className="banner-logo">
              <h4>
                Restaurant
                <br />
                of the Month
                <span className="chevron chevron--left" />
              </h4>
              <div className="banner-wilmington">
                <img alt="logo" src="assets/img/logo-s.jpg" />
                <h6>The Wilmington</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-12">
                <div className="choose-lunches">
                  <h2>Choose 2 lunches</h2>
                  <h3>pay for one</h3>{" "}
                  <a href="#" className="button button-2 non">
                    Order Now
                    <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* best-restaurants */}
      <section className="best-restaurants gap">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="logos-card restaurant-page ">
                <img alt="logo" src="assets/img/logos-2.jpg" />
                <div className="cafa">
                  <h4>
                    {" "}
                    <a href="#">Kennington Lane Cafe</a>
                  </h4>
                  <div>
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-regular fa-star" />
                  </div>
                  <div className="cafa-button">
                    {" "}
                    <a href="#">american</a> <a href="#">steakhouse</a>
                    <a className="end" href="#">
                      seafood
                    </a>
                  </div>
                  <p>
                    Non enim praesent elementum facilisis leo vel fringilla.
                    Lectus proin nibh nisl condimentum id. Quis varius quam
                    quisque id diam vel.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="logos-card restaurant-page">
                <img alt="logo" src="assets/img/logos-1.jpg" />
                <div className="cafa">
                  <h4>
                    <Link href="restaurant-card">The Wilmington</Link>
                  </h4>
                  <div>
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                  </div>
                  <div className="cafa-button">
                    {" "}
                    <a href="#">american</a> <a href="#">steakhouse</a>
                    <a className="end" href="#">
                      seafood
                    </a>
                  </div>
                  <p>
                    Vulputate enim nulla aliquet porttitor lacus luctus.
                    Suscipit adipiscing bibendum est ultricies integer. Sed
                    adipiscing diam donec adipiscing tristique.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="logos-card restaurant-page two">
                <img alt="logo" src="assets/img/logos-3.jpg" />
                <div className="cafa">
                  <h4>
                    <Link href="restaurant-card">Kings Arms</Link>
                  </h4>
                  <div>
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-regular fa-star-half-stroke" />
                  </div>
                  <div className="cafa-button">
                    {" "}
                    <a href="#">healthy</a> <a href="#">steakhouse</a>
                    <a className="end" href="#">
                      vegetarian
                    </a>
                  </div>
                  <p>
                    Tortor at risus viverra adipiscing at in tellus. Cras semper
                    auctor neque vitae tempus. Dui accumsan sit amet nulla
                    facilisi. Sed adipiscing diam .
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={500}
              data-aos-duration={600}
            >
              <div className="logos-card restaurant-page two">
                <img alt="logo" src="assets/img/logos-4.jpg" />
                <div className="cafa">
                  <h4>
                    <Link href="restaurant-card">The Victoria</Link>
                  </h4>
                  <div>
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-regular fa-star" />
                  </div>
                  <div className="cafa-button">
                    {" "}
                    <a href="#">american</a> <a href="#">steakhouse</a>
                    <a className="end" href="#">
                      seafood
                    </a>
                  </div>
                  <p>
                    Non enim praesent elementum facilisis leo vel fringilla.
                    Lectus proin nibh nisl condimentum id. Quis varius quam
                    quisque id diam vel.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="logos-card restaurant-page two">
                <img alt="logo" src="assets/img/logos-5.jpg" />
                <div className="cafa">
                  <h4>
                    <Link href="restaurant-card">Lanes of London</Link>
                  </h4>
                  <div>
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                  </div>
                  <div className="cafa-button">
                    {" "}
                    <a href="#">american</a> <a href="#">steakhouse</a>
                    <a className="end" href="#">
                      seafood
                    </a>
                  </div>
                  <p>
                    At erat pellentesque adipiscing commodo elit at imperdiet
                    dui. Suspendisse faucibus interdum posuere lorem. Elit sed
                    vulputate mi sit.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="logos-card restaurant-page two">
                <img alt="logo" src="assets/img/logos-6.jpg" />
                <div className="cafa">
                  <h4>
                    <Link href="restaurant-card">The Andover Arms</Link>
                  </h4>
                  <div>
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-regular fa-star-half-stroke" />
                  </div>
                  <div className="cafa-button">
                    {" "}
                    <a href="#">healthy</a> <a href="#">steakhouse</a>
                    <a className="end" href="#">
                      vegetarian
                    </a>
                  </div>
                  <p>
                    Lacus vestibulum sed arcu non odio euismod lacinia at. Id
                    neque aliquam vestibulum morbi. Ante metus dictum
                    ullamcorper a lacus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* subscribe-section */}
      <Subscribe />
    </Layout>
  );
};
export default Restaurants;
