import { Fragment, useState } from "react";
const Item = ({ item }) => {
  const [cardInfo, setCardInfo] = useState(false);
  const [quantity, setQuantity] = useState(1);
  return (
    <div
      className="col-xl-4 col-lg-6"
      data-aos="flip-up"
      data-aos-delay={200}
      data-aos-duration={300}
      key={item.id}
    >
      <div className="dish">
        <img alt="food-dish" src={item.image} />
        <div
          className="dish-foods"
          style={{
            display: cardInfo == item.id ? "none" : "block",
          }}
        >
          <h3>{item.title}</h3>
          <div className="dish-icon">
            <div className="cafa-button">
              {" "}
              {item.tags.map((tag, i) => (
                <Fragment key={i}>
                  <a href="#">{tag}</a>{" "}
                </Fragment>
              ))}
            </div>
            <div className="dish-icon end">
              <i
                className="info fa-solid fa-circle-info"
                onClick={() =>
                  setCardInfo(cardInfo == item.id ? false : item.id)
                }
              />
              <div className="star">
                {" "}
                <a href="#">
                  <i className="fa-solid fa-heart" />
                </a>
              </div>
            </div>
          </div>
          <div className="price">
            <h2>${item.price}</h2>
            <div className="qty-input">
              <button
                className="qty-count qty-count--minus"
                data-action="minus"
                type="button"
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              >
                -
              </button>
              <input
                className="product-qty"
                type="number"
                name="product-qty"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <button
                className="qty-count qty-count--add"
                data-action="add"
                type="button"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          <button className="button-price">
            Add to Basket
            <i className="fa-solid fa-bag-shopping" />
          </button>
        </div>
        <div
          className="dish-info"
          style={{
            display: cardInfo == item.id ? "block" : "none",
          }}
        >
          <i
            className="info2 fa-solid fa-xmark"
            onClick={() => setCardInfo(false)}
          />
          <h5>{item.title}</h5>
          <div className="cafa-button">
            {" "}
            {item.tags.map((tag, i) => (
              <Fragment key={i}>
                <a href="#">{tag}</a>{" "}
              </Fragment>
            ))}
          </div>
          <p>
            In egestas erat imperdiet sed euismod nisi porta. Ultrices sagittis
            orci a scelerisque. Diam quam nulla porttitor.
          </p>
          <ul className="menu-dish">
            <li>Nulla porttitor massa id;</li>
            <li>Aliquam vestibulum morbi;</li>
            <li>Blandit donec adipiscing;</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Item;
