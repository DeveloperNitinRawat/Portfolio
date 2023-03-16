import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BgAnimation from "./BgAnimation";

const RightBody = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
  overflow-x: hidden;
  & .hero_data {
    margin: auto;
    text-align: center;
    & h1 {
      margin-bottom: 1rem;
      color: ${({ theme }) => theme.color.white};
      & span {
        color: ${({ theme }) => theme.color.primary};
        font-family: "Nunito", sans-serif;
      }
    }
    & p {
      font-size: 1.9rem;
    }
    & .social_links {
      display: flex;
      gap: 3rem;
      justify-content: center;
      margin-top: 2rem;
      & .link {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        border-radius: 100%;
        border: 1px solid ${({ theme }) => theme.color.borderColor};
        & .social_icon {
          font-size: 2.5rem;
        }
      }
    }
  }
  @media screen and (max-width: 992px) {
    & .hero_data {
      & h1 {
        font-size: 4.7rem;
      }
      & p {
        font-size: 1.7rem;
      }
    }
  }
  @media screen and (max-width: 768px) {
    & .hero_data {
      & h1 {
        font-size: 4.3rem;
      }
      & p {
        font-size: 1.6rem;
      }
    }
  }
`;

const Home = () => {
  return (
    <>
      <RightBody className="right_body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 hero_data">
              <h1>
                Hi, I am <span>Nitin Rawat</span>
              </h1>
              <p>
                As a front-end web developer, I develop websites, Code I provide
                is clean, maintainable, and easy to understand. As well as
                making websites more interactive, I use web animations to make
                them more engaging with pixel-perfect design.
              </p>
              <div className="social_links">
                <Link
                  target="_blank"
                  to="https://www.facebook.com/developernitinrawat/"
                  className="link"
                >
                  <AiFillFacebook className="social_icon" />
                </Link>
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/developernitinrawat/"
                  className="link"
                >
                  <AiFillLinkedin className="social_icon" />
                </Link>
                <Link
                  target="_blank"
                  to="https://wa.me/+918595702536?text=Hello,%20I%20have%20a%20project%20for%20you.%20My%20name%20is"
                  className="link"
                >
                  <AiOutlineWhatsApp className="social_icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </RightBody>
      <BgAnimation />
    </>
  );
};

export default Home;
