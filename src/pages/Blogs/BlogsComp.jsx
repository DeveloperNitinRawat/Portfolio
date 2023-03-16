import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleBlogsComp = styled.div`
  & .blog_container {
    background-color: ${({ theme }) => theme.color.bgColor};
    padding: 1.5rem;
    margin-bottom: 3rem;
    & .image_data {
      overflow: hidden;
      position: relative;
      & a {
        & img {
          position: relative;
          transition: all 0.3s ease-in-out;
          &:hover {
            transform: scale(1.2);
            transition: all 0.3s ease-in-out;
          }
        }
      }
      & .date {
        position: absolute;
        top: 5%;
        left: 3%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${({ theme }) => theme.color.primary};
        padding: 1rem 2rem;
        & h3 {
          font-size: 3.5rem;
          color: #fff;
        }
        & h4 {
          font-size: 2rem;
          color: #fff;
        }
      }
    }
    & .title {
      padding-top: 1.5rem;
      & a {
        font-size: 2rem;
        color: #fff;
      }
    }
  }
  @media screen and (max-width: 992px) {
    & .blog_container {
      padding: 1.4rem;
      & .image_data {
        & .date {
          padding: 0.8rem 1.6rem;
          & h3 {
            font-size: 3.2rem;
          }
          & h4 {
            font-size: 1.9rem;
          }
        }
      }
      & .title {
        padding-top: 1.4rem;
        & a {
          font-size: 1.9rem;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    & .blog_container {
      padding: 1.3rem;
      margin-bottom: 2.7rem;
      & .image_data {
        & .date {
          padding: 0.7rem 1.4rem;
          & h3 {
            font-size: 3rem;
          }
          & h4 {
            font-size: 1.8rem;
          }
        }
      }
      & .title {
        padding-top: 1.3rem;
      }
    }
  }
`;

const BlogsComp = ({ imgData, date, month, title }) => {
  return (
    <StyleBlogsComp className="col-md-6">
      <div className="blog_container">
        <div className="image_data">
          <Link>
            <img className="img-fluid" src={imgData} alt={title} title={title} />
          </Link>
          <div title="Date" className="date">
            <h3>{date}</h3>
            <h4>{month}</h4>
          </div>
        </div>
        <div title="Title" className="title">
          <Link>{title}</Link>
        </div>
      </div>
    </StyleBlogsComp>
  );
};

export default BlogsComp;
