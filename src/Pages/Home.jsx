import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Home.css";
import Accordion from "../Components/Accordion.jsx";
//images
import IntroImage from "../assets/intro-image.png";
import tipsImage from "../assets/football-tips.png";
import Epl from "../assets/epl.jpeg";
import ChampionsLeague from "../assets/champions-l.png";
import Europa from "../assets/europa-l.png";
import FaqsImage from "../assets/faqs-image.png";
import GetItOnGoogle from "../assets/google.png";

// icons
import { FaRegBell } from "react-icons/fa";
import { PiSoccerBallFill } from "react-icons/pi";
import { MdFileDownload } from "react-icons/md";
import { IoIosColorWand } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-content">
      <div className="telegram-icon section">
        <NavLink to="https://t.me/+zplaKMZX9YYyN2Q0">
          {" "}
          <div className="telegram-icon-s"> <FaTelegram className="t-icon" />
          Join our telegram</div>{" "}
         
        </NavLink>
      </div>
      <div className="intro-section container section">
        <div className="intro-section-header">
          <div className="intro-icon">
            <PiSoccerBallFill className="intro-icon-icon" />
            <h4>Football sure betting tips</h4>
          </div>

          <div className="intro-title">
            <h1>
              Get free football predictions and previews for all leagues,
              updated daily.
            </h1>
          </div>

          <div className="intro-content-p">
            <p>
              Get the best free football betting tips for today’s matches. Our
              experts provide insider advice on all the big games. Check out our
              tips below and good luck!
            </p>
          </div>
          <div className="intro-button">
            <NavLink to="https://play.google.com/store/apps/details?id=com.newstreak.footballtips">
              Football sure tips app
            </NavLink>
            <PiSoccerBallFill className="soccer-icon" />
          </div>
        </div>

        <div className="intro-section-image">
          <img src={IntroImage} alt="" />
        </div>
      </div>

      {/* <div className="accuracy container section">
        <div className="accuracy-small-header">
          <FaRegBell /> <h4>Accurate football prediction</h4>
        </div>

        <div className="accuracy-content">
          <h3>
            We achieve an accuracy rate of 85-90% by using the most relevant
            statistics, information, and trends to make our football
            predictions.
          </h3>
          <div className="accuracy-button-section">
            <NavLink
              className="accuracy-button"
              to="https://play.google.com/store/apps/details?id=com.newstreak.footballtips"
            >
              download football sure tips
            </NavLink>
            <PiSoccerBallFill />
          </div>
        </div>
      </div>

      <div className="more-football-tips">
        <div className="more-football-tips-image">
          <img src={tipsImage} alt="" />
        </div>

        <div className="more-football-tips-content">
          <div className="more-football-tips-small-header">
            <PiSoccerBallFill /> <h4>Football predictions</h4>
          </div>

          <div className="more-football-tips-main-header">
            <h2>want more football tips?</h2>
          </div>

          <div className="more-football-tips-paragraph">
            <p>
              On our Football Sure Tips app, you’ll find comprehensive match
              analyses, previews, and predictions for various competitions.
              Additionally, we provide tips and predictions tailored by league
              to assist you in making informed decisions.
            </p>
          </div>

          <div className="more-football-tips-league-list">
            <ol>
              <li>english Premier league</li>
              <li>Champions league</li>
              <li>Spanish La Liga</li>
              <li>MLS</li>
              <li>German Bundesliga</li>
              <li>Europa League</li>
              <li>French Ligue 1</li>
              <li>Italian Serie A</li>
              <li>Sky Bet Championship</li>
            </ol>
          </div>

          <div className="more-football-tips-button">
            <NavLink to="https://play.google.com/store/apps/details?id=com.newstreak.footballtips">
              Download Football sure tips app
            </NavLink>
            <MdFileDownload />
          </div>
        </div>
      </div>

      <div className="football-predictions-by-league container section">
        <div className="football-predictions-by-league-title">
          <h3>Football predictions by league</h3>
        </div>

        <div className="leagues">
          <div className="english-l">
            <div className="league-image">
              <img src={Epl} alt="" />
            </div>

            <div className="league-name">
              <h3>English Premier League predictions</h3>
            </div>

            <div className="league-content">
              <p>
                We cover every English Premier League match, offering a wide
                range of predictions and tips. With insights on Premier League
                players and in-depth match analyses, we provide comprehensive
                coverage of the world’s most popular league.
              </p>
            </div>
          </div>

          <div className="champions-l">
            <div className="league-image">
              <img src={ChampionsLeague} alt="" />
            </div>

            <div className="league-name">
              <h3>Champions League predictions</h3>
            </div>

            <div className="league-content">
              <p>
                Bringing together top talents from Europe’s major leagues, the
                Champions League consistently delivers high-quality football.
                Our free tips match this standard, covering everything from the
                August qualifiers to the May final.
              </p>
            </div>
          </div>

          <div className="europa-league">
            <div className="league-image">
              <img src={Europa} alt="" />
            </div>

            <div className="league-name">
              <h3>Europa League predictions</h3>
            </div>

            <div className="league-content">
              <p>
                No European cup competition offers as many matches as the Europa
                League. From the intense group stage to the thrilling first
                knockout round featuring 32 teams, we cover every match. Rest
                assured, you won’t miss out on any action.
              </p>
            </div>
          </div>
        </div>

        <div className="view-more-leagues">
          <NavLink to="">more leagues</NavLink>
        </div>
      </div>

      <div className="faqs-section container section">
        <div className="faqs-contents">
          <div className="faqs-small-header">
            <IoIosColorWand className="faqs-icon" /> <h4>Football Sure Tips</h4>
          </div>
          <div className="faqs-main-header">
            <h3>Football Sure Tips FAQs</h3>
          </div>
          <div className="faqs-accordion">
            <Accordion />
          </div>
        </div>

        <div className="faqs-image-section">
          <img src={FaqsImage} alt="" />
        </div>
      </div> */}

      <div className="download-section section">
        <div className="download-header">
          <h2>Download Football Sure Tips app today</h2>
        </div>
        <div className="download-content">
          <p>
            Check out the free bets section in the Football Sure Tips app and
            choose your favorite. It's simple - just download the Football Sure
            Tips app and you'll have access to free betting tips right away!{" "}
          </p>
        </div>
        <div className="download-link-button">
          <NavLink to="https://play.google.com/store/apps/details?id=com.newstreak.footballtips">
            <img src={GetItOnGoogle} alt="" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
