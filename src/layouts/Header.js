import Link from 'next/link';
import { useState } from 'react';
import CheckoutFuntion from '../components/CheckoutFuntion';
import MobileMenu from './MobileMenu';

const Header = ({ extraClass }) => {
  const onClick = (e) => {
    const body = document.querySelector('body');
    body.classList.toggle('active');
    e.preventDefault();
  };
  // mobile menu
  const [mobileToggle, setMobileToggle] = useState(false);
  return (
    <header>
      <div className="container">
        {/* <div className="row align-items-center">
          <div className="col-xl-2">
            <div className="header-style">
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={163}
                  height={38}
                  viewBox="0 0 163 38"
                >
                  <g id="Logo" transform="translate(-260 -51)">
                    <g
                      id="Logo-2"
                      data-name="Logo"
                      transform="translate(260 51)"
                    >
                      <g id="Elements">
                        <path
                          id="Path_1429"
                          data-name="Path 1429"
                          d="M315.086,140.507H275.222v-.894c0-11.325,8.941-20.538,19.933-20.538s19.931,9.213,19.931,20.538Z"
                          transform="translate(-270.155 -115.396)"
                          fill="#f29f05"
                        />
                        <path
                          id="Path_1430"
                          data-name="Path 1430"
                          d="M301.13,133.517a1.488,1.488,0,0,1-1.394-.994,11.361,11.361,0,0,0-10.583-7.54,1.528,1.528,0,0,1,0-3.055,14.353,14.353,0,0,1,13.37,9.527,1.541,1.541,0,0,1-.875,1.966A1.444,1.444,0,0,1,301.13,133.517Z"
                          transform="translate(-264.176 -113.935)"
                          fill="#fff"
                        />
                        <path
                          id="Path_1431"
                          data-name="Path 1431"
                          d="M297.343,146.544a14.043,14.043,0,0,1-13.837-14.211h2.975a10.865,10.865,0,1,0,21.723,0h2.975A14.043,14.043,0,0,1,297.343,146.544Z"
                          transform="translate(-266.247 -108.544)"
                          fill="#363636"
                        />
                        <path
                          id="Path_1432"
                          data-name="Path 1432"
                          d="M302.183,132.519a7.064,7.064,0,1,1-14.122,0Z"
                          transform="translate(-264.027 -108.446)"
                          fill="#363636"
                        />
                        <path
                          id="Path_1433"
                          data-name="Path 1433"
                          d="M320.332,134.575H273.3a1.528,1.528,0,0,1,0-3.055h47.033a1.528,1.528,0,0,1,0,3.055Z"
                          transform="translate(-271.815 -108.923)"
                          fill="#f29f05"
                        />
                        <path
                          id="Path_1434"
                          data-name="Path 1434"
                          d="M289.154,123.4a1.507,1.507,0,0,1-1.487-1.528v-3.678a1.488,1.488,0,1,1,2.975,0v3.678A1.508,1.508,0,0,1,289.154,123.4Z"
                          transform="translate(-264.154 -116.667)"
                          fill="#f29f05"
                        />
                        <path
                          id="Path_1435"
                          data-name="Path 1435"
                          d="M284.777,138.133H275.3a1.528,1.528,0,0,1,0-3.055h9.474a1.528,1.528,0,0,1,0,3.055Z"
                          transform="translate(-270.84 -107.068)"
                          fill="#363636"
                        />
                        <path
                          id="Path_1436"
                          data-name="Path 1436"
                          d="M284.8,141.691h-6.5a1.528,1.528,0,0,1,0-3.055h6.5a1.528,1.528,0,0,1,0,3.055Z"
                          transform="translate(-269.379 -105.218)"
                          fill="#363636"
                        />
                      </g>
                    </g>
                    <text
                      id="Quickeat"
                      transform="translate(320 77)"
                      fill="#363636"
                      fontSize={20}
                      fontFamily="Poppins"
                      fontWeight={700}
                    >
                      <tspan x={0} y={0}>
                        QUICK
                      </tspan>
                      <tspan y={0} fill="#f29f05">
                        EAT
                      </tspan>
                    </text>
                  </g>
                </svg>
              </Link>
              <div className="extras bag">
                <a href="#" className="menu-btn" onClick={(e) => onClick(e)}>
                  <i className="fa-solid fa-bag-shopping" />
                </a>
                <div className="bar-menu" onClick={() => setMobileToggle(true)}>
                  <i className="fa-solid fa-bars" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <nav className="navbar">
              <ul className="navbar-links">
                <li className="navbar-dropdown">
                  <Link href="/">Home</Link>
                </li>
                <li className="navbar-dropdown">
                  <Link href="about">About Us</Link>
                </li>
                <li className="navbar-dropdown">
                  <Link href="restaurants">Restaurants</Link>
                  <div className="dropdown">
                    <Link href="restaurants">Restaurants</Link>
                    <Link href="restaurant-card">Restaurant Card</Link>
                    <Link href="checkout">Checkout</Link>
                  </div>
                </li>
                <li className="navbar-dropdown">
                  <Link href="#">Pages</Link>
                  <div className="dropdown">
                    <Link href="blog">Blog</Link>
                    <Link href="single-blog">Single Blog</Link>
                    <Link href="services">Services</Link>
                    <Link href="faq">FAQ</Link>
                    <Link href="pricing-table">Pricing Table</Link>
                    <Link href="become-partner">Become A Partner</Link>
                    <Link href="404">404</Link>
                  </div>
                </li>
                <li className="navbar-dropdown">
                  <Link href="contacts">Contacts</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3">
            <div className="extras bag">
              <a
                href="#"
                id="desktop-menu"
                className="menu-btn"
                onClick={(e) => onClick(e)}
              >
                <i className="fa-solid fa-bag-shopping" />
              </a>
              <Link href="checkout" className="button button-2">
                Order Now
              </Link>
            </div>
          </div>
          <div className="menu-wrap">
            <div className="menu-inner ps ps--active-x ps--active-y">
              <span className="menu-cls-btn" onClick={(e) => onClick(e)}>
                <i className="cls-leftright" />
                <i className="cls-rightleft" />
              </span>
              <CheckoutFuntion sidebar />
            </div>
          </div>
          <div
            className={`mobile-nav hmburger-menu ${mobileToggle ? 'open' : ''}`}
            id="mobile-nav"
            style={{ display: 'block' }}
          >
            <div className="res-log">
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={163}
                  height={38}
                  viewBox="0 0 163 38"
                >
                  <g id="Logo-m" transform="translate(-260 -51)">
                    <g
                      id="Logo-2-m"
                      data-name="Logo"
                      transform="translate(260 51)"
                    >
                      <g id="Elements-m">
                        <path
                          id="Path_3429"
                          data-name="Path 3429"
                          d="M315.086,140.507H275.222v-.894c0-11.325,8.941-20.538,19.933-20.538s19.931,9.213,19.931,20.538Z"
                          transform="translate(-270.155 -115.396)"
                          fill="#f29f05"
                        />
                        <path
                          id="Path_3430"
                          data-name="Path 3430"
                          d="M301.13,133.517a1.488,1.488,0,0,1-1.394-.994,11.361,11.361,0,0,0-10.583-7.54,1.528,1.528,0,0,1,0-3.055,14.353,14.353,0,0,1,13.37,9.527,1.541,1.541,0,0,1-.875,1.966A1.444,1.444,0,0,1,301.13,133.517Z"
                          transform="translate(-264.176 -113.935)"
                          fill="#fff"
                        />
                        <path
                          id="Path_3431"
                          data-name="Path 3431"
                          d="M297.343,146.544a14.043,14.043,0,0,1-13.837-14.211h2.975a10.865,10.865,0,1,0,21.723,0h2.975A14.043,14.043,0,0,1,297.343,146.544Z"
                          transform="translate(-266.247 -108.544)"
                          fill="#363636"
                        />
                        <path
                          id="Path_3432"
                          data-name="Path 3432"
                          d="M302.183,132.519a7.064,7.064,0,1,1-14.122,0Z"
                          transform="translate(-264.027 -108.446)"
                          fill="#363636"
                        />
                        <path
                          id="Path_3433"
                          data-name="Path 3433"
                          d="M320.332,134.575H273.3a1.528,1.528,0,0,1,0-3.055h47.033a1.528,1.528,0,0,1,0,3.055Z"
                          transform="translate(-271.815 -108.923)"
                          fill="#f29f05"
                        />
                        <path
                          id="Path_3434"
                          data-name="Path 3434"
                          d="M289.154,123.4a1.507,1.507,0,0,1-1.487-1.528v-3.678a1.488,1.488,0,1,1,2.975,0v3.678A1.508,1.508,0,0,1,289.154,123.4Z"
                          transform="translate(-264.154 -116.667)"
                          fill="#f29f05"
                        />
                        <path
                          id="Path_3435"
                          data-name="Path 3435"
                          d="M284.777,138.133H275.3a1.528,1.528,0,0,1,0-3.055h9.474a1.528,1.528,0,0,1,0,3.055Z"
                          transform="translate(-270.84 -107.068)"
                          fill="#363636"
                        />
                        <path
                          id="Path_3436"
                          data-name="Path 3436"
                          d="M284.8,141.691h-6.5a1.528,1.528,0,0,1,0-3.055h6.5a1.528,1.528,0,0,1,0,3.055Z"
                          transform="translate(-269.379 -105.218)"
                          fill="#363636"
                        />
                      </g>
                    </g>
                    <text
                      id="Quickeat-m"
                      transform="translate(320 77)"
                      fill="#363636"
                      fontSize={20}
                      fontFamily="Poppins"
                      fontWeight={700}
                    >
                      <tspan x={0} y={0}>
                        QUICK
                      </tspan>
                      <tspan y={0} fill="#f29f05">
                        EAT
                      </tspan>
                    </text>
                  </g>
                </svg>
              </Link>
            </div>
            <MobileMenu />
            <a href="#" id="res-cross" onClick={() => setMobileToggle(false)} />
          </div>
        </div> */}
        <div className="">
          <Link href="/">
            <img src="assets/logo.png" width={70} alt="logo" />
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
