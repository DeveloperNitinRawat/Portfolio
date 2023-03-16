import React from "react";
import styled from "styled-components";
import { BsTelephone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";

const StyleContactData = styled.div`
  & .data_container {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    padding: 3rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    gap: 3rem;
    background-color: ${({ theme }) => theme.color.bgColor};
    & .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2.5rem;
      padding: 1.5rem;
      border: 3px solid ${({ theme }) => theme.color.borderColor};
      color: ${({ theme }) => theme.color.white};
    }
    & .data {
      & h4 {
        color: ${({ theme }) => theme.color.white};
        font-size: 2.4rem;
        font-weight: 500;
      }
    }
  }
  @media screen and (max-width: 992px) {
    & h3 {
      font-size: 2.8rem;
      margin-bottom: 3rem;
    }
    & .data {
      & h4 {
        font-size: 2.3rem;
      }
    }
  }
  @media screen and (max-width: 767px) {
    margin-top: 5rem;
    & .data_container {
      padding: 2rem;
    }
    & .data {
      & h4 {
        font-size: 2.2rem;
      }
    }
  }
`;

const ContactData = () => {
  return (
    <StyleContactData className="col-md-6">
      <div className="data_container">
        <div className="icon">
          <BsTelephone />
        </div>
        <div className="data">
          <h4>Phone</h4>
          <br />
          <Link to="tel:8595702536">8595702536</Link>
          <br />
          <Link to="tel:9873469301">9873469301</Link>
        </div>
      </div>
      <div className="data_container">
        <div className="icon">
          <MdEmail />
        </div>
        <div className="data">
          <h4>Email</h4>
          <br />
          <Link to="mailto:developer.nitin@gmail.com">
            developer.nitin@gmail.com
          </Link>
          <br />
          <Link to="mailto:nitinrwt2003@gmail.com">nitinrwt2003@gmail.com</Link>
        </div>
      </div>
      <div className="data_container">
        <div className="icon">
          <GoLocation />
        </div>
        <div className="data">
          <h4>Address</h4>
          <br />
          <p>C-16/18, Dayalpur, Karawal Nagar, Delhi-110090</p>
        </div>
      </div>
    </StyleContactData>
  );
};

export default ContactData;
