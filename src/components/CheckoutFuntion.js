import { useEffect, useState } from "react";

const CheckoutFuntion = ({ sidebar }) => {
  const [cartData, setCartData] = useState([
    {
      id: 1,
      image: "/assets/img/order-1.png",
      title: "Egg, kiwi and sauce chilli",
      tags: ["breakfast", "brunch"],
      price: 39,
      quantity: 1,
      category: ["breakfast", "lunch", "dinner"],
    },
    {
      id: 2,
      image: "/assets/img/order-2.png",
      title: "Potatoes with pork and dried fruits",
      tags: ["breakfast", "brunch"],
      price: 49,
      quantity: 1,
      category: ["breakfast", "dinner"],
    },
  ]);
  // total price
  const [subTotal, setSubTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setSubTotal(subTotal_());
    setTotalPrice(Number(subTotal_()).toFixed(2));
    localStorage.setItem(
      "munfirm",
      JSON.stringify({ subTotal, totalPrice, cartData })
    );
  });

  const subTotal_ = () => {
    return cartData
      .map((item) => item.price * item.quantity)
      .reduce((prev, next) => prev + next, 0)
      .toFixed(2);
  };

  const updateQuantity = (item, type, value) => {
    let findCartItem = cartData.find((cart, i) => i === item);
    findCartItem.quantity =
      type == "-"
        ? findCartItem.quantity === 1
          ? 1
          : findCartItem.quantity - 1
        : type == "+"
        ? findCartItem.quantity + 1
        : value;
    setCartData([...cartData]);
  };
  return (
    <div className="checkout-order">
      <div className="title-checkout">
        <h2>Your order:</h2>
        {!sidebar && <h6>{cartData.length}</h6>}
      </div>
      <div className="banner-wilmington">
        <img alt="logo" src="assets/img/logo-s.jpg" />
        <h6>Kennington Lane Cafe</h6>
      </div>
      <ul>
        {cartData.map((item, i) => (
          <li className="price-list" key={item.id}>
            <i
              className="closeButton fa-solid fa-xmark"
              onClick={() =>
                setCartData(cartData.filter((c) => c.id !== item.id))
              }
            />
            <div className="counter-container">
              <div className="counter-food">
                <img alt="food" src={item.image} />
                <h4>{item.title}</h4>
              </div>
              <h3>${item.price}</h3>
            </div>
            <div className="price">
              <div>
                <h2>${item.price}</h2>
                <span>Sum</span>
              </div>
              <div>
                <div className="qty-input">
                  <button
                    className="qty-count qty-count--minus"
                    data-action="minus"
                    type="button"
                    onClick={() => updateQuantity(i, "-")}
                  >
                    -
                  </button>
                  <input
                    className="product-qty"
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(i, "value", Number(e.target.value))
                    }
                    name="quantity"
                  />
                  <button
                    className="qty-count qty-count--add"
                    data-action="add"
                    type="button"
                    onClick={() => updateQuantity(i, "+")}
                  >
                    +
                  </button>
                </div>
                <span>Quantity</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="totel-price">
        <span>Total order:</span>
        <h5>$ {Number(totalPrice).toFixed(2)}</h5>
      </div>
      <div className="totel-price">
        <span>To pay:</span>
        <h2>$ {Number(totalPrice).toFixed(2)}</h2>
      </div>
    </div>
  );
};
export default CheckoutFuntion;
