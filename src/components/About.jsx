import React, { useState } from "react";
import Modal from "react-modal";
import Brand from "./Brand";

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="tokyo_tm_about">
        <div className="about_image ">
          <img src="assets/img/slider/webdev-laptop.jpg" alt="about" />
        </div>
        <div className="description">
          <h3 className="name">Web Developer &amp; HTML Email Developer</h3>
          <div className="description_inner">
            <div className="left">
              <p>
                I started playing with computers when I was 11 years-old. Since
                then, I've been tinkering with all sorts of technologies that in
                some way or another led me to work on video production, creating
                websites, and web applications. I'm a lifelong learner 🎓, a
                father👶🏽🧒🏽, a husband💍, and I might have a thing for video
                games. 🎮
              </p>
              <div className="tokyo_tm_button">
                <button onClick={toggleModal} className="ib-button">
                  Read More
                </button>
              </div>
              {/* END TOKYO BUTTON */}
            </div>
            {/* END LEFT */}
            <div className="right">
              <ul>
                <li>
                  <p>
                    <span>Email:</span>
                    <a href="mailto:randyh252@gmail.com">randyh252@gmail.com</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone:</span>
                    <a href="tel:+13366154399">336-615-4399</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Study:</span>N.C. Agricultural & Technical State
                    University
                  </p>
                </li>
                <li>
                  <span>Major:</span>
                  Computer Science
                </li>
              </ul>
              {/* END UL */}
            </div>
            {/* END RIGHT */}
          </div>
          {/* END DESCRIPTION INNER */}
        </div>
      </div>

      {/* START ABOUT POPUP BOX */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_about">
          <button className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END POPUP CLOSE BUTTON */}
          <div className="box-inner">
            <div
              className="description_wrap scrollable"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="my_box">
                <div className="left">
                  <div className="about_title">
                    <h3>Languages</h3>
                  </div>
                  {/* END ABOUT TITLE */}

                  <div className="tokyo_progress">
                    <div>
                      <span>
                        <span className="label">Javascript</span>
                      </span>
                    </div>

                    <div>
                      <span>
                        <span className="label">HTML</span>
                      </span>
                    </div>

                    <div>
                      <span>
                        <span className="label">CSS</span>
                      </span>
                    </div>
                  </div>
                  {/* END PROGRESS */}
                </div>
                {/* END LEFT */}

                <div className="right">
                  <div className="about_title">
                    <h3>Frameworks & Libraries</h3>
                  </div>
                  {/* END TITLE */}
                  <div className="tokyo_progress">
                    <div>
                      <span>
                        <span className="label">React.js</span>
                      </span>
                    </div>

                    <div>
                      <span>
                        <span className="label">Tailwind CSS</span>
                      </span>
                    </div>

                    <div>
                      <span>
                        <span className="label">Bootstrap</span>
                      </span>
                    </div>
                    <div>
                      <span>
                        <span className="label">Node.js</span>
                      </span>
                    </div>

                    <div>
                      <span>
                        <span className="label">Jest</span>
                      </span>
                    </div>
                    <div>
                      <span>
                        <span className="label">Sanity.io</span>
                      </span>
                    </div>
                    <div>
                      <span>
                        <span className="label">Express.js</span>
                      </span>
                    </div>
                  </div>
                  {/* EDN TOKYO PROGRESS */}
                </div>
                {/* END RIGHT */}
              </div>
              {/* END MYBOX */}

              {/* <div className="counter">
                <div className="about_title">
                  <h3>Fun Facts</h3>
                </div>
                <ul>
                  <li>
                    <div className="list_inner">
                      <h3>777+</h3>
                      <span>Projects Completed</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>3K</h3>
                      <span>Happy Clients</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>9K+</h3>
                      <span>Lines of Code</span>
                    </div>
                  </li>
                </ul>
                {/* END COUNTER CONTENT */}
              {/*</div>*/}
              {/* END COUNTER */}

              <div className="partners">
                <div className="about_title">
                  <h3>Tools</h3>
                </div>
                <Brand />
              </div>
              {/* END PARTNER SLIDER */}
            </div>
          </div>
        </div>
      </Modal>
      {/* END ABOUT POPUP BOX */}
    </>
  );
};

export default About;
