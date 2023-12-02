import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) => (value === activeMenu ? "active" : "");
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="about">About Us</Link>
      </li>
      <li className={`menu-item-has-children ${activeLi("Restaurants")}`}>
        <a href="#" onClick={() => activeMenuSet("Restaurants")}>
          Restaurants
        </a>
        <ul className="sub-menu">
          <li>
            <Link href="restaurants">Restaurants</Link>
          </li>
          <li>
            <Link href="restaurant-card">Restaurant Card</Link>
          </li>
          <li>
            <Link href="checkout">Checkout</Link>
          </li>
        </ul>
      </li>
      <li className={`menu-item-has-children ${activeLi("Pages")}`}>
        <a href="#" onClick={() => activeMenuSet("Pages")}>
          Pages
        </a>
        <ul className="sub-menu">
          <li>
            <Link href="blog">Blog</Link>
          </li>
          <li>
            <Link href="single-blog">Single Blog</Link>
          </li>
          <li>
            <Link href="services">Services</Link>
          </li>
          <li>
            <Link href="faq">FAQ</Link>
          </li>
          <li>
            <Link href="pricing-table">Pricing Table</Link>
          </li>
          <li>
            <Link href="become-partner">Become A Partner</Link>
          </li>
          <li>
            <Link href="404">404</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="contact">contacts</Link>
      </li>
    </ul>
  );
};
export default MobileMenu;
