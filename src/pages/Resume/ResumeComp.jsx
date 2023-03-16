import React from "react";
import styled from "styled-components";

const StyleResumeComp = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-left: 3px solid ${({ theme }) => theme.color.borderColor};
  & .exp_date {
    position: relative;
    font-size: 2rem;
    color: ${({ theme }) => theme.color.white};
    padding-left: 3rem;
    &::before {
      position: absolute;
      content: "";
      background: ${({ theme }) => theme.color.bgColor};
      border: 3px solid ${({ theme }) => theme.color.borderColor};
      border-radius: 100px;
      height: 14px;
      left: -8px;
      top: 20%;
      width: 14px;
    }
    & h4 {
      font-size: 1.8rem;
    }
  }
  & .exp_data {
    position: relative;
    color: ${({ theme }) => theme.color.white};
    padding-left: 5rem;
    &::before {
      background: ${({ theme }) => theme.color.borderColor};
      content: "";
      height: 1px;
      left: 0%;
      position: absolute;
      top: 1.2rem;
      width: 30px;
    }
    & h3 {
      font-size: 2.2rem;
      color: ${({ theme }) => theme.color.primary};
    }
    & h4 {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.color.white};
    }
  }
  @media screen and (max-width: 768px) {
    & .exp_date {
      & h4 {
        font-size: 1.6rem;
      }
    }
    & .exp_data {
      & h3 {
        font-size: 1.9rem;
      }
      & h4 {
        font-size: 1.6rem;
      }
    }
  }
`;

const ResumeComp = ({ time, designation, companyName, para }) => {
  return (
    <StyleResumeComp className="row py-4 mx-2">
      <div className="col-md-3 exp_date">
        <h4>{time}</h4>
      </div>
      <div className="col-md-9 exp_data">
        <h3>{designation}</h3>
        <h4>{companyName}</h4>
        <p>{para}</p>
      </div>
    </StyleResumeComp>
  );
};

export default ResumeComp;
