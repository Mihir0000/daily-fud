import Subscribe from "@/src/components/Subscribe";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const PricingTable = () => {
  return (
    <Layout>
      <section
        className="hero-section about gap"
        style={{ backgroundImage: "url(assets/img/background-3.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="about-text pricing-table">
                <ul
                  className="crumbs d-flex"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  data-aos-duration={300}
                >
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="two">
                    <Link href="/">
                      <i className="fa-solid fa-right-long" />
                      Pricing Table
                    </Link>
                  </li>
                </ul>
                <h2
                  data-aos="fade-up"
                  data-aos-delay={300}
                  data-aos-duration={400}
                >
                  Lunch sets
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-delay={400}
                  data-aos-duration={500}
                >
                  Ultricies lacus sed turpis tincidunt id aliquet risus feugiat.
                  Mauris augue neque gravida in fermentum et sollicitudin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* pricing-table-cards */}
      <section className="gap no-top">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div
                className="pricing-table-cards"
                style={{ backgroundImage: "url(assets/img/blur-1.png)" }}
              >
                <img alt="food" src="assets/img/food-5.png" />
                <div className="pricing-table-cards-pric">
                  <h6>
                    <i className="fa-solid fa-box" />
                    x3
                  </h6>
                  <h4>
                    $112<span>/ per week</span>
                  </h4>
                  <h3>Small Business Lunch</h3>
                </div>
                <p>
                  Commodo viverra maecenas accumsan lacus vel facilisis volutpat
                  est. Amet justo donec enim malesuada diam vulputate ut
                  pharetra.
                </p>
                <ul className="pricing-plan-list">
                  <li>
                    <h5>
                      <i className="fa-solid fa-circle-check" />
                      Sem et tortor consequat id porta;
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <i className="fa-solid fa-circle-check" />
                      Facilisis magna etiam tempor;
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <i className="fa-solid fa-circle-check" />
                      Nec tincidunt praesent semper;
                    </h5>
                  </li>
                  <li className="color">
                    <h5>
                      <i className="fa-solid fa-circle-check" />
                      Nibh sed pulvinar proin;
                    </h5>
                  </li>
                  <li className="color">
                    <h5>
                      <i className="fa-solid fa-circle-check" />
                      Vulputate mi sit amet mauris;
                    </h5>
                  </li>
                  <li className="color">
                    <h5>
                      <i className="fa-solid fa-circle-check" />
                      Elit ut aliquam purus sit amet;
                    </h5>
                  </li>
                </ul>
                <button className="button-price">Order now</button>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div
                className="pricing-table-cards"
                style={{ backgroundImage: "url(assets/img/blur-2.png)" }}
              >
                <img alt="food" src="assets/img/food-6.png" />
                <div className="pricing-table-cards-pric">
                  <h6>
                    <i className="fa-solid fa-box" />
                    x6
                  </h6>
                  <h4>
                    $270<span>/ per week</span>
                  </h4>
                  <h3>Large Business Lunch</h3>
                </div>
                <p>
                  Volutpat est velit egestas dui id. Elementum eu facilisis sed
                  odio morbi quis. Imperdiet nulla malesuada pellentesque elit.
                </p>
                <ul className="pricing-plan-list">
                  <li>
                    <h5>
                      <i className="fa-solid fa-circle-check" />
                      Sem et tortor consequat id porta;
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <i className="fa-solid fa-circle-check" />
                      Facilisis magna etiam tempor;
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <i className="fa-solid fa-circle-check" />
                      Nec tincidunt praesent semper;
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <i className="fa-solid fa-circle-check" />
                      Nibh sed pulvinar proin;
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <i className="fa-solid fa-circle-check" />
                      Vulputate mi sit amet mauris;
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <i className="fa-solid fa-circle-check" />
                      Elit ut aliquam purus sit amet;
                    </h5>
                  </li>
                </ul>
                <button className="button-price">Order now</button>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay={500}
              data-aos-duration={600}
            >
              <div
                className="pricing-table-cards"
                style={{ backgroundImage: "url(assets/img/blur-3.png)" }}
              >
                <img alt="food" src="assets/img/food-7.png" />
                <div className="pricing-table-cards-pric">
                  <h6>
                    <i className="fa-solid fa-box" />
                    x4
                  </h6>
                  <h4>
                    $180<span>/ per week</span>
                  </h4>
                  <h3>Medium Business Lunch</h3>
                </div>
                <p>
                  Facilisi morbi tempus iaculis urna. Consequat id porta nibh
                  venenatis cras sed felis eget. Lorem ipsum dolor sit amet
                  consectetur adipiscing elit.
                </p>
                <ul className="pricing-plan-list">
                  <li>
                    <h5>
                      <i className="fa-solid fa-circle-check" />
                      Sem et tortor consequat id porta;
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <i className="fa-solid fa-circle-check" />
                      Facilisis magna etiam tempor;
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <i className="fa-solid fa-circle-check" />
                      Nec tincidunt praesent semper;
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <i className="fa-solid fa-circle-check" />
                      Nibh sed pulvinar proin;
                    </h5>
                  </li>
                  <li className="color">
                    <h5>
                      <i className="fa-solid fa-circle-check" />
                      Vulputate mi sit amet mauris;
                    </h5>
                  </li>
                  <li className="color">
                    <h5>
                      <i className="fa-solid fa-circle-check" />
                      Elit ut aliquam purus sit amet;
                    </h5>
                  </li>
                </ul>
                <button className="button-price">Order now</button>
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
export default PricingTable;
