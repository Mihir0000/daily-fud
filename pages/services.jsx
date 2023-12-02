import Subscribe from "@/src/components/Subscribe";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const Services = () => {
  return (
    <Layout>
      <section
        className="hero-section about gap"
        style={{ backgroundImage: "url(assets/img/background.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12"
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
                      Service
                    </Link>
                  </li>
                </ul>
                <h2>Service shows good taste</h2>
                <p>
                  Mauris nunc congue nisi vitae suscipit tellus mauris. Ac
                  tincidunt vitae semper quis lectus. Sollicitudin ac orci
                  phasellus egestas tellus.
                </p>{" "}
                <Link href="/restaurants" className="button button-2">
                  Select Restaurant
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="hero-section-img-service">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="counter-img">
                      <img alt="man" src="/assets/img/man-1.jpg" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="counter-img-data">
                      <h2>1K+</h2>
                      <span>
                        Food
                        <br /> Delivered
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="counter-img-data black">
                      <h2>12</h2>
                      <span>
                        Best
                        <br />
                        Restaurants
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="counter-img">
                      <img alt="man" src="/assets/img/man-1.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Cards */}
      <section className="services-cards gap">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="services-info">
                <h2>Make you easier and happier</h2>
                <p>
                  Risus quis varius quam quisque id diam vel quam elementum.
                  Luctus venenatis lectus magna fringilla urna porttitor rhoncus
                  dolor. Mauris pharetra et ultrices neque. Id ornare arcu odio
                  ut sem. Sed vulputate mi sit amet mauris.
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="services-card-style">
                <i className="fa-regular fa-clock" />
                <h4>
                  {" "}
                  <a href="#">
                    Save
                    <br />
                    Your Time
                  </a>
                </h4>
                <p>
                  Turpis cursus in hac habitasse platea. Magna fringilla urna
                  porttitor dolor purus non enim. Molestie nunc non blandit.
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="services-card-style">
                <i className="fa-solid fa-plate-wheat" />
                <h4>
                  {" "}
                  <a href="#">
                    Variety
                    <br />
                    Food
                  </a>
                </h4>
                <p>
                  Tempor orci dapibus ultrices in iaculis nunc sed augue. Sed
                  euismod nisi porta lorem mollis aliquam ut porttitor leo.
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6"
              data-aos="flip-up"
              data-aos-delay={600}
              data-aos-duration={700}
            >
              <div className="services-card-style">
                <i className="fa-solid fa-utensils" />
                <h4>
                  {" "}
                  <a href="#">
                    Free
                    <br />
                    Delivery
                  </a>
                </h4>
                <p>
                  Cras fermentum odio eu feugiat pretium nibh ipsum. Ut faucibus
                  pulvinar elementum integer .
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6"
              data-aos="flip-up"
              data-aos-delay={700}
              data-aos-duration={800}
            >
              <div className="services-card-style">
                <i className="fa-solid fa-tag" />
                <h4>
                  {" "}
                  <a href="#">
                    Regular
                    <br />
                    Discounts
                  </a>
                </h4>
                <p>
                  Morbi leo urna molestie at elementum eu facilisis sed odio.
                  Mattis nunc sed blandit libero volutpat sed cras ornare.
                </p>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-12"
              data-aos="flip-up"
              data-aos-delay={900}
              data-aos-duration={1000}
            >
              <div className="services-cards-text">
                <h2>Best quality Food and Restaurant</h2>
                <ul className="paragraph">
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    <h5>Duis ultricies lacus sed turpis tincidunt;</h5>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    <h5>Lectus vestibulum mattis ullamcorper;</h5>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    <h5>Massa tempor nec feugiat nisl pretium;</h5>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />
                    <h5>velit sed ullamcorper morbi tincidunt ornare.</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* works-section */}
      <section className="works-section gap" style={{ background: "#fcfcfc" }}>
        <div className="container">
          <div
            className="hading"
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration={300}
          >
            <h2>How it works</h2>
            <p>
              Magna sit amet purus gravida quis blandit turpis cursus. Venenatis
              tellus in metus vulputate eu scelerisque felis.
            </p>
          </div>
          <div className="row ">
            <div
              className="col-lg-4"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="work-card service">
                <img alt="img" src="/assets/img/Illustration-1.png" />
                <h4>Select Restaurant</h4>
                <p>
                  Non enim praesent elementum facilisis leo vel fringilla.
                  Lectus proin nibh nisl condimentum id. Quis varius quam
                  quisque id diam vel.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="work-card service">
                <img alt="img" src="/assets/img/Illustration-2.png" />
                <h4>Select menu</h4>
                <p>
                  Eu mi bibendum neque egestas congue quisque. Nulla facilisi
                  morbi tempus iaculis lectus urna id volutpat lacus. Odio ut
                  sem nulla{" "}
                </p>
              </div>
            </div>
            <div
              className="col-lg-4"
              data-aos="flip-up"
              data-aos-delay={500}
              data-aos-duration={600}
            >
              <div className="work-card service">
                <img alt="img" src="/assets/img/illustration-3.png" />
                <h4>Wait for delivery</h4>
                <p>
                  Nunc lobortis mattis aliquam faucibus. Nibh ipsum consequat
                  nisl vel pretium lectus quam id leo. A scelerisque purus
                  semper eget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sit at Home Section */}
      <section className="sit-at-home-section gap">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="sit-at-img">
                <img alt="man" src="/assets/img/man-3.jpg" />
                <div className="counter-img-data">
                  <h2>976</h2>
                  <span>
                    Satisfied
                    <br />
                    Customer
                  </span>
                </div>
              </div>
            </div>
            <div
              className="offset-xl-1 col-xl-5 col-lg-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="sit-at-home-description">
                <h2>Sit at Home We Will Take Care Your Order</h2>
                <p>
                  Magna sit amet purus gravida quis blandit turpis cursus.
                  Venenatis tellus in metus vulputate eu scelerisque felis.
                </p>
                <ul className="food-dishes">
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa-solid fa-burger" />
                      Burgers
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa-solid fa-drumstick-bite" />
                      Chicken
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa-solid fa-cheese" />
                      Steaks
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa-solid fa-pizza-slice" />
                      Pizza
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa-solid fa-fish" />
                      Pizza
                    </a>
                  </li>
                </ul>{" "}
                <Link href="/restaurant-card" className="button button-2">
                  Order Now
                </Link>
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
export default Services;
