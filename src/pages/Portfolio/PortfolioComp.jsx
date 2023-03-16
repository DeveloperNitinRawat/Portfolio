import { Link } from "react-router-dom";
import styled from "styled-components";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { BiLink } from "react-icons/bi";
import { useState } from "react";
import FsLightbox from "fslightbox-react";

const StylePortfolioComp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: all 0.4s ease-out;
  & .img_container {
    display: block;
    position: relative;
    &::before {
      position: absolute;
      content: "";
      width: calc(100% - 30px);
      height: calc(100% - 30px);
      left: 15px;
      top: 15px;
      background: hsla(0, 0%, 100%, 0.9);
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transform-origin: 0;
      transform-origin: 0;
      transition: all 0.4s ease-out;
    }
    &:hover::before {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
    & ul {
      position: absolute;
      display: flex;
      justify-content: center;
      gap: 2rem;
      width: 100%;
      top: 50%;
      left: 0;
      padding: 0;
      visibility: hidden;
      transition: all 0.3s linear;
      opacity: 0;
      & li .icon {
        font-size: 2.5rem;
        padding: 1.5rem;
        display: flex;
        justify-content: center;
        align-content: center;
        background-color: ${({ theme }) => theme.color.borderColor};
        border-radius: 50%;
        color: ${({ theme }) => theme.color.white};
        transition: all 0.3s linear;
      }
      & li .icon:hover {
        background-color: ${({ theme }) => theme.color.primary};
        transition: all 0.3s linear;
      }
    }
    &:hover ul {
      visibility: visible;
      transform: translateY(-50%);
      opacity: 1;
      transition: all 0.4s ease-in-out 0.2s;
    }
  }
  & .data {
    & .link {
      color: #fff;
      font-size: 2.3rem;
      transition: all 0.3s linear;
    }
    & .link:hover {
      color: ${({ theme }) => theme.color.primary};
      transition: all 0.3s linear;
    }
  }
  @media screen and (max-width: 992px) {
    & .data {
      & .link {
        font-size: 2.2rem;
      }
    }
    @media screen and (max-width: 768px) {
      & .data {
        & .link {
          font-size: 2.1rem;
        }
      }
    }
  }
`;

const PortfolioComp = ({ imgData, title, para, link }) => {
  const [toggler, setToggler] = useState(false);
  return (
    <StylePortfolioComp>
      <div className="img_container">
        <img className="img-fluid" src={imgData} alt="Portfolio Image" />
        <FsLightbox toggler={toggler} sources={[imgData]} />
        <ul>
          <li>
            <Link onClick={() => setToggler(!toggler)} className="icon">
              <HiMagnifyingGlassPlus />
            </Link>
          </li>
          <li>
            <Link target="_blank" to={link} className="icon">
              <BiLink />
            </Link>
          </li>
        </ul>
      </div>
      <div className="data">
        <Link target="_blank" to={link} className="link">
          {title}
        </Link>
        <p>{para}</p>
      </div>
    </StylePortfolioComp>
  );
};

export default PortfolioComp;
