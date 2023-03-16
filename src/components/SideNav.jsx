import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineBars } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import logo from "../images/logo.png";

const StyleSideNav = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background: ${({ theme }) => theme.color.bgColor};
  z-index: 99;
  transition: all 0.4s ease-out 0s;
  & .nav_toggle_btn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 100%;
    top: 2rem;
    font-size: 2.8rem;
    padding: 0.2rem 1rem;
    color: #fff;
    background-color: ${({ theme }) => theme.color.bgColor};
    border: 1px solid ${({ theme }) => theme.color.borderColor};
    border-left: none;
    display: none;
  }
  & .side-nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    max-width: 27rem;
    overflow: hidden;
    overflow-y: auto;
    border-right: 1px solid ${({ theme }) => theme.color.borderColor};
    transition: all 0.4s ease-out 0s;
    & .img_container {
      padding: 2rem 3rem;
      border-bottom: 1px solid #2e344e;
      text-align: center;
      width: 100%;
      & a {
        display: inline-block;
        border: 7px solid #2e344e;
        border-radius: 100%;
        overflow: hidden;
        vertical-align: middle;
      }
    }
    & .navbar {
      width: 100%;
      & .list_container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        & li {
          text-transform: uppercase;
          width: 95%;
          & .active {
            background-color: ${({ theme }) => theme.color.primary};
            color: ${({ theme }) => theme.color.white};
            &:hover {
              color: ${({ theme }) => theme.color.white};
            }
          }
          & a {
            position: relative;
            display: inline-block;
            width: 100%;
            margin: auto;
            text-align: center;
            padding: 0.8rem 0;
            letter-spacing: 0.5px;
            font-weight: 500;
            &::before {
              position: absolute;
              content: "";
              background-color: ${({ theme }) => theme.color.lightPrimary};
              height: 100%;
              width: 100%;
              top: 0;
              left: 0;
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
            &:link,
            &:visited {
              color: ${({ theme }) => theme.color.white};
              transition: all 0.4s linear;
            }
            &:hover,
            &:active {
              color: ${({ theme }) => theme.color.primary};
              transition: all 0.3s linear;
            }
          }
        }
      }
    }
    & .copyright {
      position: relative;
      width: 100%;
      & h5 {
        padding: 2rem 0;
        text-align: center;
        color: ${({ theme }) => theme.color.white};
      }
      &::before {
        position: absolute;
        content: "";
        background-color: ${({ theme }) => theme.color.borderColor};
        width: 100%;
        height: 1px;
        top: 0;
        left: 0;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    & .nav_toggle_btn {
      display: block;
    }
    & .side-nav {
      max-width: 26rem;
    }
  }
  @media screen and (max-width: 991px) {
    & .side-nav {
      max-width: 25rem;
    }
  }
`;

const SideNav = () => {
  const [toggle, setToggle] = useState(true);
  const date = new Date().getFullYear();
  return (
    <StyleSideNav>
      <button onClick={() => setToggle(!toggle)} className="nav_toggle_btn">
        {toggle ? <RxCross2 /> : <AiOutlineBars />}
      </button>
      {toggle && (
        <div className="side-nav">
          <picture className="img_container">
            <Link to="/">
              <img className="img-fluid" src={logo} alt="Logo" />
            </Link>
          </picture>
          <nav className="navbar">
            <ul className="list_container p-0">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/resume">Resume</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
          <div className="copyright">
            <h5 className="m-0">&copy; {date} Nitin Rawat</h5>
          </div>
        </div>
      )}
    </StyleSideNav>
  );
};

export default SideNav;
