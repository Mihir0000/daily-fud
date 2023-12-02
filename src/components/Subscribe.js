const Subscribe = () => {
  return (
    <section
      className="subscribe-section gap"
      style={{ background: '#fcfcfc' }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6"
            data-aos="flip-up"
            data-aos-delay={200}
            data-aos-duration={300}
          >
            <div className="img-subscribe">
              <img alt="Illustration" src="assets/img/illustration-4.png" />
            </div>
          </div>
          <div
            className="col-lg-5 offset-lg-1"
            data-aos="flip-up"
            data-aos-delay={300}
            data-aos-duration={400}
          >
            <div className="get-the-menu">
              <h2>Don't hustle for food anymore</h2>
              {/* <form onSubmit={(e) => e.preventDefault()}>
                <i className="fa-regular fa-bell" />
                <input
                  type="text"
                  name="email"
                  placeholder="Enter email address"
                />
                <button className="button button-2">Subscribe</button>
              </form> */}
              <div>
                <img src="assets/google-play.png" width={170} alt="" />
                <img src="assets/appStore.png" width={170} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Subscribe;
