import Aos from "aos";
import { Fragment, useEffect } from "react";
import niceSelect from "react-nice-select";
import VideoPopup from "../components/VideoPopup";
import Footer from "./Footer";
import Header from "./Header";
const Layout = ({ children, headerExtaClass }) => {
  useEffect(() => {
    Aos.init();
    niceSelect();
  }, []);
  return (
    <Fragment>
      <VideoPopup />
      <Header extraClass={headerExtaClass} />
      {children}
      <Footer />
    </Fragment>
  );
};
export default Layout;
