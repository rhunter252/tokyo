import React, { useState } from "react";
import { Tabs, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import ReactTooltip from "react-tooltip";
// import ModalVideo from "react-modal-video";
import Modal from "react-modal";

const Portfolio = () => {
  // for modal
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  function toggleModalOne() {
    setIsOpen1(!isOpen1);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }

  return (
    <>
      <SimpleReactLightbox>
        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Portfolio</span>
              </div>
            </div>
          </div>
          {/* END TOKYO_TM_TITLE */}

          <div className="portfolio_filter">
            <Tabs>
              <div className="list_wrapper">
                <TabPanel>
                  <ul className="portfolio_list">
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/little lemon screenshot.png"
                            alt="Details"
                            data-tip
                            data-for="detail5"
                            onClick={toggleModalFive}
                          />

                          <ReactTooltip
                            id="detail5"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Little Lemon Restaurant</h5>
                              <span>React</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>

                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/spotify-searcher.png"
                            alt="Details"
                            data-tip
                            data-for="detail"
                            onClick={toggleModalOne}
                          />

                          <ReactTooltip
                            id="detail"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Spotify Searcher</h5>
                              <span>React</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/shortly.png"
                            alt="Details"
                            data-tip
                            data-for="detail2"
                            onClick={toggleModalTwo}
                          />

                          <ReactTooltip
                            id="detail2"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Shortly - link shortener</h5>
                              <span>Web App</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/IPtracker.png"
                            alt="Details"
                            data-tip
                            data-for="detail3"
                            onClick={toggleModalThree}
                          />

                          <ReactTooltip
                            id="detail3"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>IP Address Tracker</h5>
                              <span>Web App</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/artblokz.png"
                            alt="Details"
                            data-tip
                            data-for="detail4"
                            onClick={toggleModalFour}
                          />

                          <ReactTooltip
                            id="detail4"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Art Blokz</h5>
                              <span>Landing Page</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}

                    {/* END DETAILS */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                    >
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/goals screenshot.png"
                            alt="Details"
                            data-tip
                            data-for="detail6"
                            onClick={toggleModalSix}
                          />

                          <ReactTooltip
                            id="detail6"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>GoalSetter</h5>
                              <span>MERN fullstack App</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    {/* END DETAILS */}
                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>
              </div>
              {/* END LIST WRAPPER */}
            </Tabs>
          </div>
        </div>
      </SimpleReactLightbox>

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen5}
        onRequestClose={toggleModalFive}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFive}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img
                  src="assets/img/portfolio/little lemon menu.png"
                  alt="tumb"
                />
                <div
                  className="main"
                  style={{
                    backgroundImage:
                      "url(assets/img/portfolio/little lemon menu.png)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Little Lemon Restaurant Capstone Project</h3>
                <span>React | Chakra UI | Formik</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    A React app for a restaurant using Chakra UI and Formik that
                    allows users to view the restaurant's menu and make
                    reservations. Chakra UI is a UI library for React that
                    provides a set of reusable components for building user
                    interfaces. Formik is a library for handling forms in React.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <a
                        href="https://super-eclair-35aa12.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                      <br />
                      <a
                        href="https://github.com/rhunter252/Little-Lemon-capstone"
                        target="blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>

      <Modal
        isOpen={isOpen1}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/spotify-searcher.png" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/outkast.png)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Spotify Searcher</h3>
                <span>React | Tailwind CSS | Spotify API</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    A React website that uses Tailwind CSS for its simple and
                    responsive design and the Spotify API to retrieve
                    information on artists, albums, and genres.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <a
                        href="https://coruscating-longma-aaf2d7.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                      <br />
                      <a
                        href="https://github.com/rhunter252/Spotify-Searcher"
                        target="blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen2}
        onRequestClose={toggleModalTwo}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalTwo}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img
                  src="assets/img/portfolio/shortly screenshot.png"
                  alt="tumb"
                />
                <div
                  className="main"
                  style={{
                    backgroundImage:
                      "url(assets/img/portfolio/shortly screenshot.png)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Shortly URL Shortening</h3>
                <span>React | Tailwind CSS | Shrtcode API</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    React app that shortens URLs which allows users to input a
                    long URL and then receive a shortened version of the link.
                    The app uses the Shrtcode API to communicate with a server
                    that generates the shortened link. The user then is able to
                    copy and share the shortened link.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <a
                        href="https://illustrious-dusk-23b4de.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                      <br />
                      <a
                        href="https://github.com/rhunter252/Shortly"
                        target="blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img
                  src="assets/img/portfolio/shortly screenshot.png"
                  alt="tumb"
                />
                <div
                  className="main"
                  style={{
                    backgroundImage:
                      "url(assets/img/portfolio/shortly screenshot.png)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Shortly URL Shortening</h3>
                <span>React | Tailwind CSS | Shrtcode API</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    React app that shortens URLs which allows users to input a
                    long URL and then receive a shortened version of the link.
                    The app uses the Shrtcode API to communicate with a server
                    that generates the shortened link. The user then is able to
                    copy and share the shortened link.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <a
                        href="https://illustrious-dusk-23b4de.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                      <br />
                      <a
                        href="https://github.com/rhunter252/Shortly"
                        target="blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/*END MODAL */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img
                  src="assets/img/portfolio/ip tracker screenshot.png"
                  alt="tumb"
                />
                <div
                  className="main"
                  style={{
                    backgroundImage:
                      "url(assets/img/portfolio/ip tracker screenshot.png)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Shortly URL Shortening</h3>
                <span>React | Tailwind CSS | Shrtcode API</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    React app that shortens URLs which allows users to input a
                    long URL and then receive a shortened version of the link.
                    The app uses the Shrtcode API to communicate with a server
                    that generates the shortened link. The user then is able to
                    copy and share the shortened link.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <a
                        href="https://astonishing-cupcake-527df8.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                      <br />
                      <a
                        href="https://github.com/rhunter252/Frontend-Mentor---IP-tracker"
                        target="blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/*END MODAL */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/portfolio/artblokz dog.png" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage:
                      "url(assets/img/portfolio/artblokz dog.png)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Art Blokz</h3>
                <span>HTML | CSS | JavaScript</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    An art portfolio website built using HTML, CSS, and
                    JavaScript for showcasing an artist's work. The HTML
                    provides the basic structure and content of the site, while
                    CSS is used to create a cohesive design and control the
                    layout and styling of the pages. JavaScript is then used to
                    add dynamic elements and interactions, such as image
                    galleries, sliders, and hover effects. The site could also
                    include features such as contact forms and social media
                    integration to make it easy for visitors to connect with the
                    artist and share their work.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <a
                        href="https://rhunter252.github.io/Art-Blokz/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                      <br />
                      <a
                        href="https://github.com/rhunter252/Art-Blokz"
                        target="blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>

      <Modal
        isOpen={isOpen6}
        onRequestClose={toggleModalSix}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalSix}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img
                  src="assets/img/portfolio/goals screenshot.png"
                  alt="tumb"
                />
                <div
                  className="main"
                  style={{
                    backgroundImage:
                      "url(assets/img/portfolio/goals screenshot.png)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>GoalSetter</h3>
                <span>React | Express | Node.js | MongoDB</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>Goals Description</p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <a
                        href="https://illustrious-dusk-23b4de.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                      <br />
                      <a
                        href="https://github.com/rhunter252/Goals-App"
                        target="blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
    </>
  );
};

export default Portfolio;
