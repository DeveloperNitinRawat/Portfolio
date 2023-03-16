import styled from "styled-components";

const Button = (props) => {
  const CustomButton = styled.button`
    position: relative;
    background-color: ${({ theme }) => theme.color.primary};
    border: 0;
    color: ${({ theme }) => theme.color.white};
    display: inline-block;
    font-size: 1.5rem;
    letter-spacing: 2px;
    padding: 1.4rem 3rem;
    text-transform: uppercase;
    z-index: 1;
    &::before {
      position: absolute;
      content: "";
      background-color: ${({ theme }) => theme.color.white};
      height: 3px;
      width: 20%;
      bottom: 0;
      left: 0;
      transition: all 0.3s linear;
    }
    &:hover::before {
      position: absolute;
      content: "";
      background-color: ${({ theme }) => theme.color.white};
      height: 3px;
      width: 100%;
      bottom: 0;
      left: 0;
      transition: all 0.3s linear;
    }
  `;
  return <CustomButton type={props.type}>{props.text}</CustomButton>;
};

export default Button;
