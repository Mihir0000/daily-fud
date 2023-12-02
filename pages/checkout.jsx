import CheckoutFuntion from "@/src/components/CheckoutFuntion";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
import { useState } from "react";
const Checkout = () => {
  const [tab, setTab] = useState("card");

  return (
    <Layout>
      <section
        className="hero-section about checkout gap"
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
                  <li>
                    <Link href="/">
                      <i className="fa-solid fa-right-long" />
                      Restaurants{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-solid fa-right-long" />
                      Restaurant Сard
                    </Link>
                  </li>
                  <li className="two">
                    <Link href="/">
                      <i className="fa-solid fa-right-long" />
                      Checkout
                    </Link>
                  </li>
                </ul>
                <h2
                  data-aos="fade-up"
                  data-aos-delay={300}
                  data-aos-duration={400}
                >
                  Checkout
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-delay={400}
                  data-aos-duration={500}
                >
                  Sit amet nisl purus in mollis nunc sed id semper. Condimentum
                  id venenatis a condimentum vitae sapien pellentesque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* checkout-order */}
      <section className="gap">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-5 col-lg-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <CheckoutFuntion />
            </div>
            <div
              className="offset-xl-1 col-xl-6 col-lg-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <form
                onSubmit={(e) => e.preventDefault()}
                className="checkout-form"
              >
                <h4>Buyer information</h4>
                <input type="text" name="Name" placeholder="Full Name" />
                <div className="row">
                  <div className="col-lg-6">
                    <input type="text" name="E-mail" placeholder="E-mail" />
                  </div>
                  <div className="col-lg-6">
                    <input type="text" name="E-mail" placeholder="Phone" />
                  </div>
                </div>
                <h4 className="two">Delivery addresses</h4>
                <select className="nice-select Advice">
                  <option>California</option>
                  <option>California 1</option>
                  <option>California 2</option>
                  <option>California 3</option>
                  <option>California 4</option>
                </select>
                <input type="text" name="Name" placeholder="Street" />
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="E-mail"
                      placeholder="House number"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="number"
                      name="E-mail"
                      placeholder="Apartment number"
                    />
                    <span>*dispensable</span>
                  </div>
                </div>
                <h4 className="two">Payment method</h4>
                <div
                  className="nav nav-pills me-3"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className={`nav-link ${tab === "card" ? "active" : ""}`}
                    onClick={() => setTab("card")}
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    Card
                  </button>
                  <button
                    className={`nav-link ${tab === "Cash" ? "active" : ""}`}
                    onClick={() => setTab("Cash")}
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    Cash
                  </button>
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className={`tab-pane fade ${
                      tab === "card" ? "show active" : ""
                    }`}
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <label>
                      <input
                        type="radio"
                        name="test"
                        defaultValue="small"
                        defaultChecked
                      />
                      <img alt="checkbox-img" src="assets/img/checkbox-1.png" />
                    </label>
                    <label>
                      <input type="radio" name="test" defaultValue="big" />
                      <img alt="checkbox-img" src="assets/img/checkbox-2.png" />
                    </label>
                    <label>
                      <input type="radio" name="test" defaultValue="big" />
                      <img alt="checkbox-img" src="assets/img/checkbox-3.png" />
                    </label>
                    <input
                      type="number"
                      name="Name"
                      placeholder="Card number"
                    />
                    <div className="row">
                      <div className="col-lg-6">
                        <input
                          type="text"
                          name="E-mail"
                          placeholder="Expiration Date"
                        />
                      </div>
                      <div className="col-lg-6">
                        <input type="password" placeholder="CVV" />
                      </div>
                    </div>
                    <label className="checkbox-one">
                      Save my payments details for future purchases
                      <input type="checkbox" defaultChecked="checked" />
                      <span className="checkmark" />
                    </label>
                    <div
                      className="tab-pane fade"
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                    ></div>
                  </div>
                </div>
                <button className="button-price">Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Checkout;
