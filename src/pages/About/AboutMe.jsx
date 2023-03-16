import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/ui/Button";
import SubHeading from "../../components/ui/SubHeading";
// import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import logo from "../../images/about.jpg";

const StyleAboutMe = styled.section`
  & .about_img {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease-out 0s;
    & .icon {
      position: absolute;
      font-size: 8rem;
      font-weight: 800;
      color: ${({ theme }) => theme.color.primary};
      visibility: hidden;
      transition: all 0.4s ease-out 0s;
      opacity: 0;
      transform: scale(0);
    }
    &:hover .icon {
      visibility: visible;
      transition: all 0.4s ease-out 0s;
      transform: scale(100%);
      opacity: 1;
    }
  }
  & .about_data {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    & h3 {
      margin-bottom: 0.8rem;
      font-weight: bold;
      font-size: 3.2rem;
      & span {
        color: ${({ theme }) => theme.color.primary};
        font-family: "Nunito", sans-serif;
      }
    }
    & p {
      margin-bottom: 2rem;
      text-align: justify;
    }
    & ul {
      margin-bottom: 2.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      & li b {
        display: inline-block;
        min-width: 12rem;
        position: relative;
        margin-right: 1rem;
        font-family: "Nunito", sans-serif;
      }
      & li b::before {
        position: absolute;
        content: ":";
        right: 0;
      }
    }
  }
  @media screen and (max-width: 768px) {
    & .about_img {
      & .icon {
        font-size: 6rem;
      }
    }
    & .about_data {
      & h3 {
        padding-top: 2rem;
        font-size: 3rem;
      }
    }
  }
`;

const AboutMe = () => {
  return (
    <StyleAboutMe className="section about_hero">
      <div className="container-fluid">
        <div className="row">
          <SubHeading text="About Me" />
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <picture className="about_img">
              <img className="img-fluid" src={logo} alt="Nitin Rawat" />
              {/* <HiMagnifyingGlassPlus className="icon" /> */}
            </picture>
          </div>
          <div className="col-md-6 about_data">
            <h3>
              I am <span>Nitin Rawat</span>
            </h3>
            <p>
              As a front-end web developer, I develop websites, Code I provide
              is clean, and easy to understand with pixel-perfect design. I also
              use web animations to make them more engaging.
            </p>
            <ul className="p-0">
              <li>
                <b>Full Name</b>Nitin Rawat
              </li>
              <li>
                <b>Age</b>20 Years
              </li>
              <li>
                <b>Nationality</b>Indian
              </li>
              <li>
                <b>Languages</b>Hindi, English
              </li>
              <li>
                <b>Address</b>Dayalpur, Karawal Nagar
              </li>
              <li>
                <b>Freelance</b>Available
              </li>
            </ul>
            <Link target="_blank" to="https://resume.io/r/lHr3iBgOr">
              <Button text="Download CV" />
            </Link>
          </div>
        </div>
      </div>
    </StyleAboutMe>
  );
};

export default AboutMe;
