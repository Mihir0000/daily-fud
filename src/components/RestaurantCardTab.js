import { useState } from "react";
import Item from "./Item";

const RestaurantCardTab = ({ items }) => {
  const [activeTab, setActiveTab] = useState("breakfast");
  return (
    <section className="tabs gap">
      <div className="container">
        <div className="tabs-img-back">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="Provides"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={300}
              >
                <div
                  className="nav nav-pills me-3"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                    className={`nav-link ${
                      activeTab == "breakfast" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("breakfast")}
                  >
                    Breakfast
                  </button>
                  <button
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                    className={`nav-link ${
                      activeTab == "lunch" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("lunch")}
                  >
                    Lunch
                  </button>
                  <button
                    id="v-pills-messages-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-messages"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                    className={`nav-link ${
                      activeTab == "dinner" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("dinner")}
                  >
                    Dinner
                  </button>
                </div>
                <div className="like-meal">
                  {" "}
                  <a href="#">
                    <i className="fa-solid fa-heart" />
                    Like Meals
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className={`tab-pane fade ${
                    activeTab == "breakfast" ? "show active" : ""
                  }`}
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="row">
                    {items.map(
                      (item, i) =>
                        i <= 5 &&
                        item.category.includes("breakfast") && (
                          <Item item={item} key={item.id} />
                        )
                    )}
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab == "lunch" ? "show active" : ""
                  }`}
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <div className="row">
                    {items.map(
                      (item, i) =>
                        i <= 5 &&
                        item.category.includes("lunch") && (
                          <Item item={item} key={item.id} />
                        )
                    )}
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab == "dinner" ? "show active" : ""
                  }`}
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  <div className="row">
                    {items.map(
                      (item, i) =>
                        i <= 5 &&
                        item.category.includes("dinner") && (
                          <Item item={item} key={item.id} />
                        )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RestaurantCardTab;
