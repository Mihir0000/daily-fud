import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const SingleBlog = () => {
  return (
    <Layout>
      <section
        className="hero-section about single-blog gap"
        style={{ backgroundImage: "url(assets/img/background-3.png)" }}
        data-aos="flip-up"
        data-aos-delay={300}
        data-aos-duration={400}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="offset-xl-2 col-xl-6 col-lg-12">
              <div className="about-text">
                <ul className="crumbs d-flex">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-solid fa-right-long" />
                      blog
                    </Link>
                  </li>
                  <li className="two">
                    <Link href="/">
                      <i className="fa-solid fa-right-long" />
                      Single Blog Page
                    </Link>
                  </li>
                </ul>
                <div className="quickeat">
                  {" "}
                  <a href="#">restaurants</a> <a href="#">cooking</a>
                </div>
                <h2>127+ Couriers On Our Team!</h2>
                <ul className="data">
                  <li>
                    <h6>
                      <i className="fa-regular fa-calendar-days" />
                      01.Jan. 2022
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <i className="fa-solid fa-eye" />
                      132
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="name-dedails">
                <img alt="girl" src="assets/img/girl.jpg" />
                <h6>Roxie Gilbert</h6>
                <span>press secretary Quickeat</span>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="img-blog-full">
                <img alt="blog-page-img" src="assets/img/blog-page-1.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blog-content */}
      <section className="blog-content gap no-top">
        <div className="container">
          <div className="row">
            <div className="offset-xl-2 col-xl-8 col-lg-12">
              <div className="title-container">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor <span>incididunt ut labore et</span> dolore
                  magna aliqua. Iaculis nunc sed augue lacus viverra vitae
                  congue eu consequat. Id consectetur purus ut faucibus pulvinar
                  elementum integer. <span>Vitae congue mauris</span> rhoncus
                  aenean vel elit scelerisque. Mollis nunc sed id semper. Ac
                  orci phasellus egestas tellus rutrum tellus pellentesque.
                  <br />
                  <br />
                  Urna nec tincidunt praesent semper feugiat nibh sed pulvinar
                  proin. Enim praesent elementum facilisis leo vel fringilla
                  est. Porta nibh venenatis cras sed felis eget velit aliquet
                  sagittis. At in tellus integer feugiat scelerisque varius.
                  Tincidunt arcu non sodales neque sodales ut etiam sit amet.
                  Auctor urna nunc id cursus metus.
                </p>
                <br />
                <h2>
                  H2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h2>
                <p>
                  <b>Iaculis nunc sed augue lacus viverra.</b>
                  <br />
                  Id consectetur purus ut faucibus pulvinar elementum integer.
                  Vitae congue mauris rhoncus aenean vel elit scelerisque.
                  Mollis nunc sed id semper. Ac orci phasellus egestas tellus
                  rutrum tellus pellentesque. Urna nec tincidunt praesent semper
                  feugiat nibh sed.
                  <br />
                  <br />
                  <b>
                    Enim praesent elementum facilisis leo vel fringilla est.
                  </b>
                  <br />
                  Porta nibh venenatis cras sed felis eget velit aliquet
                  sagittis. At in tellus integer feugiat scelerisque varius.
                  Tincidunt arcu non sodales neque sodales ut etiam sit amet.
                  Auctor urna nunc id cursus metus. Eros donec ac odio tempor
                  orci dapibus ultrices in. Suspendisse sed nisi lacus sed. Sed
                  risus ultricies tristique nulla aliquet. Aenean vel elit
                  scelerisque mauris pellentesque pulvinar pellentesque
                  habitant.
                </p>
                <div className="quote">
                  <div className="quote-text">
                    <img alt="quote" src="assets/img/elements-1.svg" />
                    <div className="quote-icon">
                      <h4>
                        Whenever you feel like criticizing any one,» he told me,
                        «just remember that all the people in this world haven’t
                        had the advantages that you’ve had.
                      </h4>
                    </div>
                  </div>
                  <h6>Francis Scott Key Fitzgerald "The Great Gatsby"</h6>
                </div>
                <h3>
                  H3 Massa massa ultricies mi quis hendrerit. Sed enim ut sem
                  viverra aliquet eget sit amet.
                </h3>
                <p>
                  Velit egestas dui id ornare arcu odio ut. Lacus suspendisse
                  faucibus interdum posuere lorem ipsum. Commodo sed egestas
                  egestas fringilla phasellus faucibus. Nullam vehicula ipsum a
                  arcu cursus vitae. Nulla facilisi morbi tempus iaculis urna
                  id. Tortor dignissim convallis aenean et. At erat pellentesque
                  adipiscing commodo elit at.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="photo-blog">
                      <img alt="img" src="assets/img/photo-12.jpg" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="photo-blog">
                      <img alt="img" src="assets/img/photo-13.jpg" />
                    </div>
                  </div>
                </div>
                <h4>
                  H4 Quis imperdiet massa tincidunt nunc pulvinar sapien et. Eu
                  consequat ac felis donec et odio. Platea dictumst quisque
                  sagittis purus.
                </h4>
                <p>
                  In fermentum posuere urna nec. Vestibulum lectus mauris
                  ultrices eros in cursus turpis massa. Nisl purus in mollis
                  nunc sed id. At urna condimentum mattis pellentesque id. Neque
                  ornare aenean euismod elementum nisi quis eleifend quam
                  adipiscing. Sit amet aliquam id diam.
                </p>
                <ul className="blog-list">
                  <li>In fermentum posuere urna nec;</li>
                  <li>Vestibulum lectus mauris ultrices eros;</li>
                  <li>In cursus turpis massa;</li>
                  <li>Nisl purus in mollis nunc sed id;</li>
                  <li>At urna condimentum mattis;</li>
                  <li>IPellentesque habitant morbi tristique.</li>
                </ul>
                <p>
                  At erat pellentesque adipiscing commodo elit. Dignissim enim
                  sit amet venenatis urna cursus eget nunc. Ut ornare lectus sit
                  amet est placerat in egestas erat. Ante metus dictum at
                  tempor. Pulvinar elementum integer enim neque volutpat ac
                  tincidunt vitae semper.
                </p>
                <h6 className="data">Updated: December 26, 2022</h6>
                <div className="quickeat tags">
                  {" "}
                  <a href="#">restaurants</a> <a href="#">cooking</a>
                </div>
              </div>
              <div className="author-gap">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <div className="previous-posts">
                      <img alt="img" src="assets/img/author-posts-1.jpg" />
                      <div>
                        <h6>
                          How Restaurants Can Engage with Millennials in 2022
                        </h6>{" "}
                        <a href="#">Prev. Posts by this author</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="name-dedails">
                      <img alt="girl" src="assets/img/girl.jpg" />
                      <h6>Roxie Gilbert</h6>
                      <span>press secretary Quickeat</span>
                      <ul className="social-media">
                        <li>
                          {" "}
                          <a href="#">
                            <i className="fa-brands fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="#">
                            <i className="fa-brands fa-instagram" />
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="#">
                            <i className="fa-brands fa-twitter" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="previous-posts next">
                      <div>
                        <h6>Why You Should Optimize Your Menu for Delivery</h6>{" "}
                        <a href="#">Next Post by this author</a>
                      </div>
                      <img alt="img" src="assets/img/author-posts-2.jpg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment">
                <h2>
                  <span>9</span> Comments
                </h2>
              </div>
              <ul className="comment gap no-top">
                <li>
                  <div className="comment-text">
                    <p>
                      Vitae congue mauris rhoncus aenean vel elit scelerisque.
                      Mollis nunc sed id semper. Ac orci phasellus egestas
                      tellus rutrum tellus pellentesque. Urna nec tincidunt
                      praesent semper feugiat nibh sed pulvinar proin. Enim
                      praesent elementum facilisis leo vel fringilla est. Porta
                      nibh venenatis cras sed felis eget velit aliquet sagittis.
                      At in tellus integer feugiat scelerisque varius.
                    </p>{" "}
                    <a href="#">
                      <span>
                        Reply
                        <i className="fa-solid fa-reply" />
                      </span>
                    </a>
                  </div>
                  <div className="author-name-comment">
                    <div>
                      <h6>Jackie Johnson</h6>
                      <span>30.Dec. 2022</span>
                    </div>
                    <img alt="man" src="assets/img/author-img-1.jpg" />
                  </div>
                </li>
                <li className="reply one">
                  <div className="comment-text">
                    <p>
                      Auctor urna nunc id cursus metus. Eros donec ac odio
                      tempor orci dapibus ultrices in. Suspendisse sed nisi
                      lacus sed. Sed risus ultricies tristique nulla aliquet.
                    </p>{" "}
                    <a href="#">
                      <span>
                        Reply
                        <i className="fa-solid fa-reply" />
                      </span>
                    </a>
                  </div>
                  <div className="author-name-comment">
                    <img alt="man" src="assets/img/author-img-2.jpg" />
                    <div>
                      <h6>Annie Adamson</h6>
                      <span>30.Dec. 2022</span>
                    </div>
                  </div>
                </li>
                <li className="reply two">
                  <div className="comment-text">
                    <p>
                      Ac felis donec et odio pellentesque. Amet nisl suscipit
                      adipiscing bibendum est ultricies. Tincidunt augue
                      interdum velit euismod. Vitae sapien pellentesque habitant
                      morbi. Feugiat nibh sed pulvinar proin gravida.
                    </p>{" "}
                    <a href="#">
                      <span>
                        Reply
                        <i className="fa-solid fa-reply" />
                      </span>
                    </a>
                  </div>
                  <div className="author-name-comment">
                    <img alt="man" src="assets/img/author-img-3.jpg" />
                    <div>
                      <h6>Annie Adamson</h6>
                      <span>30.Dec. 2022</span>
                    </div>
                  </div>
                </li>
                <li className="reply three">
                  <div className="comment-text">
                    <p>
                      Tortor condimentum lacinia quis vel eros donec ac odio
                      tempor. Varius sit amet mattis vulputate enim. Velit
                      egestas dui id ornare arcu odio ut. Lacus suspendisse
                      faucibus interdum posuere lorem ipsum. Commodo sed egestas
                      egestas fringilla phasellus.
                    </p>{" "}
                    <a href="#">
                      <span>
                        Reply
                        <i className="fa-solid fa-reply" />
                      </span>
                    </a>
                  </div>
                  <div className="author-name-comment">
                    <img alt="man" src="assets/img/author-img-2.jpg" />
                    <div>
                      <h6>Annie Adamson</h6>
                      <span>30.Dec. 2022</span>
                    </div>
                  </div>
                </li>
                <li className="hide-button">
                  {" "}
                  <a href="#">
                    <h6>
                      Hide
                      <i className="fa-solid fa-angle-up" />
                    </h6>
                  </a>
                </li>
                <li>
                  <div className="comment-text">
                    <p>
                      Vitae congue mauris rhoncus aenean vel elit scelerisque.
                      Mollis nunc sed id semper. Ac orci phasellus egestas
                      tellus rutrum tellus pellentesque. Urna nec tincidunt
                      praesent semper feugiat nibh sed pulvinar proin. Enim
                      praesent elementum facilisis leo vel fringilla est. Porta
                      nibh venenatis cras sed felis eget velit aliquet sagittis.
                      At in tellus integer feugiat scelerisque varius.
                    </p>{" "}
                    <a href="#">
                      <span>
                        Reply
                        <i className="fa-solid fa-reply" />
                      </span>
                    </a>
                  </div>
                  <div className="author-name-comment">
                    <div>
                      <h6>Edgar Johnson</h6>
                      <span>30.Dec. 2022</span>
                    </div>
                    <img alt="man" src="assets/img/author-img-4.jpg" />
                  </div>
                </li>
                <li className="show-all-button">
                  <h6>
                    4 more answers{" "}
                    <a href="#">
                      <span>
                        Show All
                        <i className="fa-solid fa-angle-down" />
                      </span>
                    </a>
                  </h6>
                </li>
                <li>
                  <div className="button-gap">
                    {" "}
                    <a href="#" className="button button-2 non">
                      See all comments
                      <i className="fa-solid fa-angle-down" />
                    </a>
                  </div>
                </li>
              </ul>
              <div className="comment">
                <h2>Leave your comment</h2>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="comment-blog"
                >
                  <textarea placeholder="Enter you comment" defaultValue={""} />
                  <div className="row">
                    <div className="col-lg-6">
                      <input type="text" name="name" placeholder="Your Name" />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        name="Email"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <button className="button-price">Publish a comment</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default SingleBlog;
